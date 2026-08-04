/**
 * Sandbox-First Sync: Prod Promotion Operations (PROMOTION ONLY)
 *
 * CRITICAL: This client ONLY handles promotion from Sandbox to Prod.
 *
 * Allowed operations:
 * ✅ Clone entry from Sandbox to Prod
 * ✅ Publish to Staging environment
 * ✅ Query Prod entries (for status checking)
 *
 * Forbidden operations:
 * ❌ Direct creation on Prod
 * ❌ Editing existing Prod entries
 * ❌ Publishing to Production environment
 * ❌ Deleting Prod entries
 *
 * All Prod access must go through the promotion workflow.
 */

import https from "node:https";

export interface ProdConfig {
  apiKey: string;
  managementToken: string;
  contentTypeUid: string;
  locale: string;
}

export interface ContentstackEntry {
  uid: string;
  title?: string;
  url?: string;
  body?: string;
  status?: string;
  [key: string]: unknown;
}

export interface PromotionResult {
  entryUid: string;
  title: string;
  cloned: boolean;
  published: boolean;
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
    return `/content_types/${this.config.contentTypeUid}/entries`;
  }

  /**
   * Clone entry from Sandbox to Prod
   *
   * Creates a NEW entry in Prod based on Sandbox source.
   * Does NOT modify existing Prod entries.
   */
  async cloneEntryToProd(sandboxEntry: ContentstackEntry): Promise<ContentstackEntry> {
    // Clone without Sandbox-specific fields
    const { uid, created_at, updated_at, created_by, _version, publish_details, ...clonedEntry } = sandboxEntry as any;

    const body = JSON.stringify({ entry: clonedEntry });
    const path = this.entriesPath();

    const response = await this.request("POST", path, body);
    if (!response) throw new Error("Failed to clone entry to Prod");

    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    if (!data.entry) throw new Error("No entry returned from clone");

    return data.entry;
  }

  /**
   * Publish entry to Staging environment ONLY
   *
   * IMPORTANT: This publishes to Staging environment, NOT Production.
   * Production environment is never touched by automation.
   */
  async publishToStaging(entryUid: string): Promise<boolean> {
    const body = JSON.stringify({
      entry: {},
      _publish_details: {
        environments: ["staging"],
        locales: ["en-us"],
      },
    });

    const path = `${this.entriesPath()}/${entryUid}/publish`;

    const response = await this.request("POST", path, body);
    if (!response) {
      console.error(`Failed to publish entry ${entryUid} to Staging`);
      return false;
    }

    console.log(`✓ Published entry ${entryUid} to Staging environment`);
    return true;
  }

  /**
   * Check if entry exists in Prod
   */
  async entryExists(url: string): Promise<boolean> {
    const query = JSON.stringify({ url });
    const path = `${this.entriesPath()}?query=${encodeURIComponent(query)}&locale=${this.config.locale}`;

    const response = await this.request("GET", path);
    if (!response) return false;

    try {
      const data = JSON.parse(response) as { entries?: ContentstackEntry[] };
      return (data.entries?.length ?? 0) > 0;
    } catch {
      return false;
    }
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
