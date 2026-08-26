/**
 * Resolving a Contentstack environment, by name, to the UID that actually
 * appears in publish records.
 *
 * This module exists because of a single wrong comparison. cms-pull-prod.ts
 * defaulted PROD_ENVIRONMENT to the literal "production" and
 * ProdPromoteClient.getPublishedEntries() tested
 * `publish_details[].environment === environment`. The CMA returns that field
 * as a UID (bltfe8376c13fe85b9c on the Prod CS Docs stack), never as a name, so
 * the test could never be true and every scheduled run reported "0 published
 * entries in Prod" and exited cleanly. The bug was invisible precisely because
 * finding nothing is also what a quiet stack looks like.
 *
 * Two defences against a repeat:
 *
 *   1. The UID is looked up live from GET /v3/environments rather than
 *      hardcoded, so a stack rename or a fresh stack cannot silently zero the
 *      result set.
 *   2. isPublishedTo() accepts a record naming either the UID or the name. The
 *      publish_details payload has four observed shapes already (see
 *      toPublishRecords in entry-content.ts) and this pipeline has been wrong
 *      about it before, so matching both costs nothing and removes the class of
 *      failure rather than one instance of it.
 */

import https from "node:https";
import { PRODUCTION_ENV_UID } from "./nav-shared.js";

export interface ResolvedEnvironment {
  /** The environment's UID, which is what publish records actually contain. */
  uid: string;
  /** The environment's human name, as configured (e.g. "production"). */
  name: string;
  /** False when the live lookup failed and a fallback UID was used. */
  confirmed: boolean;
}

interface EnvironmentRecord {
  uid?: unknown;
  name?: unknown;
}

/**
 * Fallback UIDs used only when the live lookup fails outright (network fault,
 * token without environment read scope). Keyed by environment name.
 */
const FALLBACK_UIDS: Record<string, string> = {
  production: PRODUCTION_ENV_UID,
};

function get(apiKey: string, managementToken: string, path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.contentstack.io",
        port: 443,
        path,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          api_key: apiKey,
          authorization: managementToken,
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
            return;
          }
          resolve(data);
        });
      },
    );
    req.on("error", reject);
    req.end();
  });
}

/**
 * Look up an environment by name and return its UID.
 *
 * Throws when the stack has environments but none match the requested name.
 * That is a configuration error worth stopping on: continuing would mean
 * filtering on a UID that matches nothing, which is the original bug.
 *
 * Falls back to a known UID (and marks the result unconfirmed) only when the
 * request itself fails, so a transient API fault does not take the sync down.
 */
export async function resolveEnvironment(
  apiKey: string,
  managementToken: string,
  name: string,
): Promise<ResolvedEnvironment> {
  let body: string;
  try {
    body = await get(apiKey, managementToken, "/v3/environments?limit=100");
  } catch (error) {
    const fallback = FALLBACK_UIDS[name.toLowerCase()];
    if (!fallback) {
      throw new Error(
        `Could not list environments to resolve "${name}" (${
          error instanceof Error ? error.message : String(error)
        }) and no fallback UID is known for that name.`,
      );
    }
    console.warn(
      `⚠️  Could not list environments (${
        error instanceof Error ? error.message : String(error)
      }). Falling back to the known UID for "${name}": ${fallback}`,
    );
    return { uid: fallback, name, confirmed: false };
  }

  const parsed = JSON.parse(body) as { environments?: EnvironmentRecord[] };
  const environments = Array.isArray(parsed.environments) ? parsed.environments : [];

  const match = environments.find(
    (env) => typeof env.name === "string" && env.name.toLowerCase() === name.toLowerCase(),
  );

  if (!match || typeof match.uid !== "string") {
    const available = environments
      .map((env) => (typeof env.name === "string" ? env.name : "?"))
      .join(", ");
    throw new Error(
      `No environment named "${name}" on this stack. Available: ${available || "(none)"}. ` +
        `Set PROD_ENVIRONMENT to one of those names.`,
    );
  }

  return { uid: match.uid, name: String(match.name), confirmed: true };
}

/**
 * True if the entry carries a publish record for this environment.
 *
 * Accepts a record whose `environment` is the UID (what the CMA returns) or the
 * name (what older scripts in this repo assumed), and tolerates the
 * environment-keyed object shape that publish_details sometimes arrives in.
 */
export function isPublishedTo(
  entry: { publish_details?: unknown; [key: string]: unknown },
  env: Pick<ResolvedEnvironment, "uid" | "name">,
): boolean {
  const details = entry.publish_details;
  if (!details) return false;

  const wanted = new Set([env.uid.toLowerCase(), env.name.toLowerCase()]);

  if (Array.isArray(details)) {
    return details.some((record) => {
      const value = (record as { environment?: unknown } | null)?.environment;
      return typeof value === "string" && wanted.has(value.toLowerCase());
    });
  }

  if (typeof details === "object") {
    const obj = details as Record<string, unknown>;

    // Shape: { production: { version, time } } — the environment is the key.
    for (const key of Object.keys(obj)) {
      if (wanted.has(key.toLowerCase())) return true;
    }

    // Shape: a single inlined publish record.
    const value = obj.environment;
    if (typeof value === "string" && wanted.has(value.toLowerCase())) return true;
  }

  return false;
}
