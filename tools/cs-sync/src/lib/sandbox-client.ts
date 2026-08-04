/**
 * Sandbox-First Sync: Sandbox CMS Operations
 *
 * This client handles all Sandbox-specific operations:
 * - Pulling changes from Sandbox to Git
 * - Pushing changes from Git to Sandbox
 * - Querying Sandbox entries
 *
 * IMPORTANT: No Production tokens/credentials here.
 * All Prod access must go through prod-promote-client.ts
 */

import https from "node:https";

export interface SandboxConfig {
  apiKey: string;
  managementToken: string;
  environment: string;
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

export class SandboxClient {
  private readonly maxRetries = 3;
  private readonly baseUrl = "https://api.contentstack.io/v3";

  constructor(private readonly config: SandboxConfig) {}

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
   * Find entry by URL in Sandbox
   */
  async findEntryByUrl(url: string): Promise<ContentstackEntry | null> {
    const query = JSON.stringify({ url });
    const path = `${this.entriesPath()}?query=${encodeURIComponent(query)}&locale=${this.config.locale}`;

    const response = await this.request("GET", path);
    if (!response) return null;

    const data = JSON.parse(response) as { entries?: ContentstackEntry[] };
    return data.entries?.[0] ?? null;
  }

  /**
   * Get all published entries from Sandbox
   */
  async getPublishedEntries(): Promise<ContentstackEntry[]> {
    const query = JSON.stringify({ status: "published" });
    const path = `${this.entriesPath()}?query=${encodeURIComponent(query)}&locale=${this.config.locale}&limit=100`;

    const response = await this.request("GET", path);
    if (!response) return [];

    const data = JSON.parse(response) as { entries?: ContentstackEntry[] };
    return data.entries ?? [];
  }

  /**
   * Create new entry in Sandbox
   */
  async createEntry(entry: Partial<ContentstackEntry>): Promise<ContentstackEntry> {
    const body = JSON.stringify({ entry });
    const path = this.entriesPath();

    const response = await this.request("POST", path, body);
    if (!response) throw new Error("Failed to create entry in Sandbox");

    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    if (!data.entry) throw new Error("No entry returned from create");

    return data.entry;
  }

  /**
   * Update existing entry in Sandbox
   */
  async updateEntry(uid: string, entry: Partial<ContentstackEntry>): Promise<ContentstackEntry> {
    const body = JSON.stringify({ entry });
    const path = `${this.entriesPath()}/${uid}`;

    const response = await this.request("PUT", path, body);
    if (!response) throw new Error("Failed to update entry in Sandbox");

    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    if (!data.entry) throw new Error("No entry returned from update");

    return data.entry;
  }

  /**
   * Get entry by UID from Sandbox
   */
  async getEntry(uid: string): Promise<ContentstackEntry | null> {
    const path = `${this.entriesPath()}/${uid}?locale=${this.config.locale}`;

    const response = await this.request("GET", path);
    if (!response) return null;

    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    return data.entry ?? null;
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
