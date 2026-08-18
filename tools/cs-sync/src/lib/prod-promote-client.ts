/**
 * Sandbox-First Sync: Prod Promotion Operations
 *
 * CRITICAL: This client handles promotion from Sandbox to Prod (create-or-update
 * by url), plus read access for the Prod → GitHub pull script.
 *
 * Allowed operations:
 * ✅ Clone entry from Sandbox to Prod, or update an existing Prod entry by url
 * ✅ Publish to the Staging and Development environments (PROMOTION_ENVIRONMENTS)
 * ✅ Query Prod entries (lookup by url, lookup by tag, listing published entries)
 *
 * Forbidden operations:
 * ❌ Publishing to Production environment
 * ❌ Deleting Prod entries
 *
 * All Prod writes must go through the promotion workflow.
 */

import https from "node:https";
import { ContentstackEntry, SANDBOX_METADATA_FIELDS, stripMetadataFields } from "./entry-content.js";

/**
 * Every environment promotion publishes to. Production is deliberately absent
 * and must stay absent: deploying to Production is a manual step done by
 * releasing the promotion's Release, never by this automation.
 *
 * Both publish methods below read this one constant so they cannot drift into
 * publishing an article to one set of environments and its nav entries to
 * another, which would leave the nav pointing at content that isn't there.
 */
export const PROMOTION_ENVIRONMENTS = ["staging", "development"] as const;

export interface ProdConfig {
  apiKey: string;
  managementToken: string;
  contentTypeUid: string;
  locale: string;
}

// Re-exported so existing importers of this module keep working; both
// definitions now live in entry-content.ts so the promotion script and the
// Prod→GitHub pull cannot drift apart on what "same content" means.
export type { ContentstackEntry };
export { SANDBOX_METADATA_FIELDS };

export interface PromotionResult {
  entryUid: string;
  title: string;
  written: boolean;
  published: boolean;
  action?: "created" | "updated" | "skipped";
  error?: string;
}

export class ProdPromoteClient {
  private readonly maxRetries = 3;
  private readonly baseUrl = "https://api.contentstack.io/v3";

  constructor(private readonly config: ProdConfig) {}

  private headers(): Record<string, string> {
    return {
      "Content-Type": "application/json",
      api_key: this.config.apiKey,
      authorization: this.config.managementToken,
    };
  }

  private entriesPath(): string {
    return `/v3/content_types/${this.config.contentTypeUid}/entries`;
  }

  /**
   * Clone entry from Sandbox to Prod
   *
   * Creates a NEW entry in Prod based on Sandbox source.
   */
  async cloneEntryToProd(sandboxEntry: ContentstackEntry): Promise<ContentstackEntry> {
    const clonedEntry = stripMetadataFields(sandboxEntry);

    const body = JSON.stringify({ entry: clonedEntry });
    const path = `${this.entriesPath()}?locale=${this.config.locale}`;

    const response = await this.request("POST", path, body);
    if (!response) throw new Error("Failed to clone entry to Prod");

    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    if (!data.entry) throw new Error("No entry returned from clone");

    return data.entry;
  }

  /**
   * Update an existing Prod entry in place (bumps _version automatically).
   */
  async updateEntry(uid: string, entry: ContentstackEntry): Promise<ContentstackEntry> {
    const clonedEntry = stripMetadataFields(entry);

    const body = JSON.stringify({ entry: clonedEntry });
    const path = `${this.entriesPath()}/${uid}?locale=${this.config.locale}`;

    const response = await this.request("PUT", path, body);
    if (!response) throw new Error("Failed to update entry in Prod");

    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    if (!data.entry) throw new Error("No entry returned from update");

    return data.entry;
  }

  /** Get a Prod entry by uid, regardless of which content type this client is scoped to. */
  async getEntry(uid: string): Promise<ContentstackEntry | null> {
    const path = `${this.entriesPath()}/${uid}?locale=${this.config.locale}`;
    const response = await this.request("GET", path);
    if (!response) return null;
    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    return data.entry ?? null;
  }

  /**
   * Find a Prod entry by its url field.
   *
   * Returns null if no entry matches. Throws if more than one entry matches,
   * rather than guessing which one to update — urls are not guaranteed unique
   * across every content type in this codebase.
   */
  async findEntryByUrl(url: string): Promise<ContentstackEntry | null> {
    const query = JSON.stringify({ url });
    const path = `${this.entriesPath()}?query=${encodeURIComponent(query)}&locale=${this.config.locale}`;

    const response = await this.request("GET", path);
    if (!response) return null;

    const data = JSON.parse(response) as { entries?: ContentstackEntry[] };
    const entries = data.entries ?? [];

    if (entries.length > 1) {
      throw new Error(
        `Ambiguous url match in Prod: "${url}" matched ${entries.length} entries (uids: ${entries
          .map((e) => e.uid)
          .join(", ")}) — aborting to avoid guessing which to update`,
      );
    }

    return entries[0] ?? null;
  }

  /**
   * Find a Prod entry by exact tag match.
   *
   * Mirrors findEntryByUrl: throws rather than guessing if more than one
   * entry matches. The query shape for matching a value inside an array
   * field ({ tags: tag }) hasn't been confirmed against the live CMA the way
   * findEntryByUrl's scalar-field query has — smoke-test this against a real
   * stack before trusting it in the promotion loop.
   */
  async findEntryByTag(tag: string): Promise<ContentstackEntry | null> {
    const query = JSON.stringify({ tags: tag });
    const path = `${this.entriesPath()}?query=${encodeURIComponent(query)}&locale=${this.config.locale}`;

    const response = await this.request("GET", path);
    if (!response) return null;

    const data = JSON.parse(response) as { entries?: ContentstackEntry[] };
    const entries = data.entries ?? [];

    if (entries.length > 1) {
      throw new Error(
        `Ambiguous tag match in Prod: "${tag}" matched ${entries.length} entries (uids: ${entries
          .map((e) => e.uid)
          .join(", ")}) — aborting to avoid guessing which to update`,
      );
    }

    return entries[0] ?? null;
  }

  /**
   * List all Prod entries published to the given environment.
   *
   * Used by the Prod → GitHub pull script to detect direct CMS edits.
   */
  async getPublishedEntries(environment: string): Promise<ContentstackEntry[]> {
    const entries: ContentstackEntry[] = [];
    let skip = 0;
    const limit = 100;
    let hasMore = true;

    while (hasMore) {
      const path = `${this.entriesPath()}?locale=${this.config.locale}&limit=${limit}&skip=${skip}&include_publish_details=true`;

      const response = await this.request("GET", path);
      if (!response) break;

      const data = JSON.parse(response) as { entries?: ContentstackEntry[] };
      const page = data.entries ?? [];

      for (const entry of page) {
        const publishDetails = entry.publish_details as any;
        if (Array.isArray(publishDetails) && publishDetails.some((pd: any) => pd.environment === environment)) {
          entries.push(entry);
        }
      }

      hasMore = page.length === limit;
      skip += limit;
    }

    return entries;
  }

  /**
   * Publish a promoted entry of this client's own content type to every
   * environment in PROMOTION_ENVIRONMENTS.
   *
   * IMPORTANT: Production is never in that list and must never be added to it.
   */
  async publishPromotedEntry(entryUid: string): Promise<boolean> {
    // Verified against the live CMA directly: the publish endpoint reads
    // environments/locales from inside `entry`, not a sibling
    // `_publish_details` key. The previous shape silently 422'd on every
    // call, this bug predates this file's other changes.
    const body = JSON.stringify({
      entry: { environments: [...PROMOTION_ENVIRONMENTS], locales: ["en-us"] },
    });

    const path = `${this.entriesPath()}/${entryUid}/publish`;

    const response = await this.request("POST", path, body);
    if (!response) {
      console.error(`Failed to publish entry ${entryUid} to ${PROMOTION_ENVIRONMENTS.join(" and ")}`);
      return false;
    }

    console.log(`✓ Published entry ${entryUid} to ${PROMOTION_ENVIRONMENTS.join(" and ")}`);
    return true;
  }

  /**
   * Update an entry by uid, for content types other than whichever one this
   * client instance is scoped to (e.g. this client is scoped to docs_article,
   * but the caller needs to update a product_navigation entry). Callers pass
   * the full entry object (fetched via getEntry) with their change merged in,
   * the same round-trip pattern updateEntry above uses.
   */
  async updateEntryOfType(
    contentTypeUid: string,
    uid: string,
    entry: ContentstackEntry,
  ): Promise<ContentstackEntry> {
    const clonedEntry = stripMetadataFields(entry);
    const path = `/v3/content_types/${contentTypeUid}/entries/${uid}?locale=${this.config.locale}`;
    const response = await this.request("PUT", path, JSON.stringify({ entry: clonedEntry }));
    if (!response) throw new Error(`Failed to update ${contentTypeUid} entry ${uid}`);
    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    if (!data.entry) throw new Error(`No entry returned updating ${contentTypeUid} entry ${uid}`);
    return data.entry;
  }

  /** Get an entry by uid from a content type other than this client's own. */
  async getEntryOfType(contentTypeUid: string, uid: string): Promise<ContentstackEntry | null> {
    const path = `/v3/content_types/${contentTypeUid}/entries/${uid}?locale=${this.config.locale}`;
    const response = await this.request("GET", path);
    if (!response) return null;
    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    return data.entry ?? null;
  }

  /**
   * Create an entry of any content type (e.g. a links_2026 intermediate nav
   * node). Distinct from cloneEntryToProd, which is docs_article-specific
   * and expects a Sandbox source entry to strip metadata from.
   */
  async createEntryOfType(
    contentTypeUid: string,
    entry: Record<string, unknown>,
  ): Promise<ContentstackEntry> {
    const path = `/v3/content_types/${contentTypeUid}/entries?locale=${this.config.locale}`;
    const response = await this.request("POST", path, JSON.stringify({ entry }));
    if (!response) throw new Error(`Failed to create ${contentTypeUid} entry`);
    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    if (!data.entry) throw new Error(`No entry returned creating ${contentTypeUid} entry`);
    return data.entry;
  }

  /** Publish an entry of any content type (same as publishPromotedEntry, generalized). */
  async publishEntryOfType(contentTypeUid: string, entryUid: string): Promise<boolean> {
    const body = JSON.stringify({
      entry: { environments: [...PROMOTION_ENVIRONMENTS], locales: ["en-us"] },
    });
    const path = `/v3/content_types/${contentTypeUid}/entries/${entryUid}/publish`;
    const response = await this.request("POST", path, body);
    if (!response) {
      console.error(`Failed to publish ${contentTypeUid} entry ${entryUid} to ${PROMOTION_ENVIRONMENTS.join(" and ")}`);
      return false;
    }
    console.log(`✓ Published ${contentTypeUid} entry ${entryUid} to ${PROMOTION_ENVIRONMENTS.join(" and ")}`);
    return true;
  }

  /**
   * Confirms every environment in PROMOTION_ENVIRONMENTS exists in this stack,
   * once per run. Without this a wrong or renamed environment name fails one
   * publish call at a time, deep in the run, and reads as a per-entry glitch
   * rather than a misconfiguration. Throws so the run stops before writing.
   */
  async verifyPromotionEnvironments(): Promise<void> {
    const response = await this.request("GET", "/v3/environments");
    if (!response) {
      throw new Error("Could not list environments to verify the promotion targets exist");
    }
    const data = JSON.parse(response) as { environments?: Array<{ name?: string }> };
    const available = new Set((data.environments ?? []).map((env) => env.name).filter(Boolean));
    const missing = PROMOTION_ENVIRONMENTS.filter((name) => !available.has(name));
    if (missing.length > 0) {
      throw new Error(
        `Promotion targets ${missing.join(" and ")} but this stack has no such environment. ` +
        `Available: ${[...available].join(", ")}. ` +
        `Fix PROMOTION_ENVIRONMENTS in prod-promote-client.ts or the stack's environments.`,
      );
    }
  }

  /**
   * Find a Release by exact name match.
   *
   * The Releases list endpoint isn't a content-type entries endpoint, so it's
   * not confirmed to support the same `query=` JSON filtering findEntryByTag/
   * findEntryByUrl use. Paginates and filters by name client-side instead,
   * mirroring getPublishedEntries below, rather than assuming query support
   * that hasn't been verified against a live stack.
   */
  async findReleaseByName(name: string): Promise<{ uid: string; name: string } | null> {
    let skip = 0;
    const limit = 100;
    let hasMore = true;

    while (hasMore) {
      const path = `/v3/releases?limit=${limit}&skip=${skip}`;
      const response = await this.request("GET", path);
      if (!response) return null;

      const data = JSON.parse(response) as { releases?: Array<{ uid: string; name: string }> };
      const page = data.releases ?? [];

      const match = page.find((release) => release.name === name);
      if (match) return match;

      hasMore = page.length === limit;
      skip += limit;
    }

    return null;
  }

  /**
   * Create a Release. Items are added separately via addItemsToRelease —
   * a Release with no items is a valid, harmless intermediate state.
   * Callers wanting find-or-create semantics should call findReleaseByName
   * first (see release-manager.ts's createReleaseForPromotion).
   */
  async createRelease(name: string, description: string): Promise<{ uid: string; name: string }> {
    const body = JSON.stringify({ release: { name, description } });
    const response = await this.request("POST", "/v3/releases", body);
    if (!response) throw new Error(`Failed to create release "${name}"`);
    const data = JSON.parse(response) as { release?: { uid: string; name: string } };
    if (!data.release) throw new Error(`No release returned creating "${name}"`);
    return data.release;
  }

  /**
   * Add one or more entries to a Release, each marked for the "publish"
   * action so deploying the Release later publishes them. `version` must be
   * each entry's current _version, fetch it fresh right before calling this
   * rather than reusing a version read earlier in the run.
   */
  async addItemsToRelease(
    releaseUid: string,
    items: Array<{ uid: string; contentTypeUid: string; version: number; locale?: string }>,
  ): Promise<void> {
    const body = JSON.stringify({
      items: items.map((item) => ({
        uid: item.uid,
        content_type_uid: item.contentTypeUid,
        version: item.version,
        locale: item.locale ?? this.config.locale,
        action: "publish",
      })),
    });
    const response = await this.request("POST", `/v3/releases/${releaseUid}/items`, body);
    if (!response) throw new Error(`Failed to add items to release ${releaseUid}`);
  }

  /**
   * Low-level HTTP request with retry logic
   */
  private async request(
    method: string,
    path: string,
    body?: string,
    retriesLeft = this.maxRetries,
  ): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: "api.contentstack.io",
        port: 443,
        path,
        method,
        headers: this.headers(),
      };

      const req = https.request(options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          if (res.statusCode === 429 && retriesLeft > 0) {
            // Rate limit - retry after delay
            setTimeout(() => {
              this.request(method, path, body, retriesLeft - 1).then(resolve).catch(reject);
            }, 1000);
            return;
          }

          if (res.statusCode && res.statusCode >= 400) {
            if (retriesLeft > 0 && res.statusCode >= 500) {
              setTimeout(() => {
                this.request(method, path, body, retriesLeft - 1).then(resolve).catch(reject);
              }, 1000);
              return;
            }

            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
            return;
          }

          resolve(data);
        });
      });

      req.on("error", reject);

      if (body) {
        req.write(body);
      }

      req.end();
    });
  }
}
