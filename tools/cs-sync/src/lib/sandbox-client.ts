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
import { ContentstackEntry, getPublishedVersion, hasPublishRecord } from "./entry-content.js";

export interface SandboxConfig {
  apiKey: string;
  managementToken: string;
  contentTypeUid: string;
  locale: string;
}

export type { ContentstackEntry };

/**
 * An entry as it exists at its published version, plus the bookkeeping the
 * caller needs to report on it.
 *
 * `entry` is the content a reader of the site sees — never an unpublished
 * draft. `unresolved` marks entries that carry a publish record whose version
 * could not be read; those are surfaced as errors rather than promoted.
 */
export interface PublishedEntry {
  uid: string;
  title: string;
  publishedVersion: number | null;
  entry: ContentstackEntry;
  unresolved: boolean;
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
   * Every Sandbox entry that has been published, resolved to the content of
   * its *published* version.
   *
   * Published to any environment — callers don't need to know or guess the
   * environment's literal name.
   *
   * The distinction between "published entry" and "published version" is the
   * important one. The CMA list endpoint returns each entry's latest version,
   * which is the unpublished draft whenever a writer has saved without
   * publishing. Promoting that content pushed half-finished edits to Prod.
   * Here we read the version number out of publish_details and re-fetch that
   * exact version when it differs from the latest.
   */
  async getPublishedEntries(): Promise<PublishedEntry[]> {
    const results: PublishedEntry[] = [];
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
        if (!hasPublishRecord(entry)) continue;
        results.push(await this.resolvePublishedVersion(entry));
      }

      hasMore = page.length === limit;
      skip += limit;
    }

    return results;
  }

  /**
   * The published version of the entry at a given url, or null if no entry
   * matches or it has never been published.
   *
   * Used by the Prod→GitHub pull to tell a genuine direct Prod edit apart
   * from content the promotion script just wrote.
   */
  async getPublishedEntryByUrl(url: string): Promise<PublishedEntry | null> {
    const query = JSON.stringify({ url });
    const path =
      `${this.entriesPath()}?query=${encodeURIComponent(query)}` +
      `&locale=${this.config.locale}&include_publish_details=true`;

    const response = await this.request("GET", path);
    if (!response) return null;

    const data = JSON.parse(response) as { entries?: ContentstackEntry[] };
    const entry = data.entries?.[0];
    if (!entry || !hasPublishRecord(entry)) return null;

    return this.resolvePublishedVersion(entry);
  }

  /**
   * Swap an entry's latest-version content for its published-version content.
   *
   * Skips the extra API call in the common case where the entry has no
   * unpublished draft, i.e. its latest version is already the published one.
   */
  private async resolvePublishedVersion(entry: ContentstackEntry): Promise<PublishedEntry> {
    const uid = entry.uid;
    const title = (entry.title as string) || "Untitled";
    const publishedVersion = getPublishedVersion(entry);

    if (publishedVersion === null) {
      return { uid, title, publishedVersion: null, entry, unresolved: true };
    }

    const latestVersion = typeof entry._version === "number" ? entry._version : null;

    if (latestVersion === publishedVersion) {
      return { uid, title, publishedVersion, entry, unresolved: false };
    }

    const published = await this.getEntry(uid, publishedVersion);

    // A version the publish record points at should always be fetchable. If it
    // is not, treat the entry as unresolved rather than falling back to the
    // draft sitting in `entry`.
    if (!published) {
      return { uid, title, publishedVersion, entry, unresolved: true };
    }

    return { uid, title, publishedVersion, entry: published, unresolved: false };
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
    const path = `${this.entriesPath()}/${uid}?locale=${this.config.locale}`;

    const response = await this.request("PUT", path, body);
    if (!response) throw new Error("Failed to update entry in Sandbox");

    const data = JSON.parse(response) as { entry?: ContentstackEntry };
    if (!data.entry) throw new Error("No entry returned from update");

    return data.entry;
  }

  /**
   * Get entry by UID from Sandbox.
   *
   * Pass `version` to read a specific historical version rather than the
   * latest one. Without it the CMA returns the latest version, which is the
   * unpublished draft whenever a writer has saved without publishing.
   */
  async getEntry(uid: string, version?: number): Promise<ContentstackEntry | null> {
    const versionParam = version === undefined ? "" : `&version=${version}`;
    const path = `${this.entriesPath()}/${uid}?locale=${this.config.locale}${versionParam}`;

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
