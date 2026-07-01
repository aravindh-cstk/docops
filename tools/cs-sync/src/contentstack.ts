import fs from "node:fs";
import path from "node:path";
import type { AppConfig } from "./config.js";
import type { SyncEntryPayload } from "./payload.js";

export interface ContentstackEntry {
  uid: string;
  url?: string;
  title?: string;
  article_content?: unknown;
  [key: string]: unknown;
}

export class ContentstackClient {
  constructor(private readonly config: AppConfig) {}

  private readonly maxRetries = parseInt(process.env.MAX_RETRIES ?? "3", 10);

  private async fetchWithRetry(
    url: string,
    opts?: RequestInit,
    retriesLeft = this.maxRetries,
  ): Promise<Response> {
    const res = await fetch(url, opts);
    if (res.status >= 500 && retriesLeft > 0) {
      await new Promise((r) => setTimeout(r, 1000));
      return this.fetchWithRetry(url, opts, retriesLeft - 1);
    }
    return res;
  }

  private headers(json = true): Record<string, string> {
    const h: Record<string, string> = {
      api_key: this.config.CS_API_KEY,
      authorization: this.config.CS_MANAGEMENT_TOKEN,
    };
    if (json) h["Content-Type"] = "application/json";
    return h;
  }

  private entriesBase(): string {
    return `${this.config.baseUrl}/content_types/${this.config.CS_CONTENT_TYPE}/entries`;
  }

  async findEntryByUrl(url: string): Promise<ContentstackEntry | null> {
    const query = JSON.stringify({ url });
    const params = new URLSearchParams({
      query,
      locale: this.config.CS_LOCALE,
      include_count: "true",
    });

    const res = await this.fetchWithRetry(`${this.entriesBase()}?${params}`, {
      headers: this.headers(),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`findEntryByUrl failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as { entries?: ContentstackEntry[] };
    const entries = data.entries ?? [];
    return entries.length > 0 ? entries[0]! : null;
  }

  private entriesUrl(entryUid?: string): string {
    const base = entryUid ? `${this.entriesBase()}/${entryUid}` : this.entriesBase();
    return `${base}?locale=${encodeURIComponent(this.config.CS_LOCALE)}`;
  }

  async createEntry(payload: SyncEntryPayload): Promise<ContentstackEntry> {
    const res = await this.fetchWithRetry(this.entriesUrl(), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ entry: payload }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`createEntry failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as { entry: ContentstackEntry };
    return data.entry;
  }

  async updateEntry(
    uid: string,
    payload: SyncEntryPayload,
  ): Promise<ContentstackEntry> {
    const res = await this.fetchWithRetry(this.entriesUrl(uid), {
      method: "PUT",
      headers: this.headers(),
      body: JSON.stringify({ entry: payload }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`updateEntry failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as { entry: ContentstackEntry };
    return data.entry;
  }

  async unpublishEntry(uid: string): Promise<void> {
    const res = await this.fetchWithRetry(
      `${this.entriesBase()}/${uid}/unpublish?locale=${encodeURIComponent(this.config.CS_LOCALE)}`,
      {
      method: "POST",
      headers: this.headers(),
        body: JSON.stringify({
          entry: {
            environments: [this.config.CS_ENVIRONMENT],
            locales: [this.config.CS_LOCALE],
          },
        }),
      },
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`unpublishEntry failed (${res.status}): ${text}`);
    }
  }

  async listRecentEntries(sinceIso: string): Promise<ContentstackEntry[]> {
    const query = JSON.stringify({ updated_at: { $gt: sinceIso } });
    const PAGE_SIZE = 100;
    const all: ContentstackEntry[] = [];
    let skip = 0;

    for (;;) {
      const params = new URLSearchParams({
        query,
        locale: this.config.CS_LOCALE,
        include_count: "true",
        limit: String(PAGE_SIZE),
        skip: String(skip),
      });
      const pageUrl = `${this.entriesBase()}?${params}`;

      const res = await this.fetchWithRetry(pageUrl, { headers: this.headers() });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(
          `listRecentEntries failed — GET ${pageUrl} returned HTTP ${res.status} ${res.statusText}.\n` +
          `  Stack: ${this.config.CS_API_KEY} | Content-type: ${this.config.CS_CONTENT_TYPE} | Locale: ${this.config.CS_LOCALE}\n` +
          `  since: ${sinceIso}\n` +
          `  Response body: ${text}`,
        );
      }

      const data = (await res.json()) as { entries?: ContentstackEntry[]; count?: number };
      const page = data.entries ?? [];
      all.push(...page);

      const total = data.count ?? all.length;
      if (skip === 0) {
        console.log(`listRecentEntries: ${total} total entries updated since ${sinceIso}`);
      }

      if (all.length >= total || page.length < PAGE_SIZE) break;
      skip += PAGE_SIZE;
      console.log(`listRecentEntries: fetched ${all.length}/${total} — fetching next page (skip=${skip})`);
    }

    console.log(`listRecentEntries: done — ${all.length} entries fetched`);
    return all;
  }

  async getUserName(userUid: string): Promise<string> {
    try {
      const res = await this.fetchWithRetry(`${this.config.baseUrl}/users/${userUid}`, {
        headers: this.headers(),
      });
      if (!res.ok) return userUid;
      const data = (await res.json()) as { user?: { display_name?: string; email?: string } };
      const user = data.user ?? {};
      return user.display_name || user.email || userUid;
    } catch {
      return userUid;
    }
  }

  async findAssetByFilename(filename: string): Promise<{ url: string; uid: string } | null> {
    const query = JSON.stringify({ filename });
    const params = new URLSearchParams({
      query,
      include_count: "true",
      limit: "1",
    });

    const res = await this.fetchWithRetry(`${this.config.baseUrl}/assets?${params}`, {
      headers: this.headers(),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`findAssetByFilename failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as { assets?: Array<{ url?: string; uid?: string }> };
    const asset = data.assets?.[0];
    if (!asset?.url || !asset?.uid) return null;
    return { url: asset.url, uid: asset.uid };
  }

  async uploadAsset(filePath: string): Promise<{ url: string; uid: string }> {
    const buffer = fs.readFileSync(filePath);
    const filename = path.basename(filePath);
    const form = new FormData();
    form.append(
      "asset[upload]",
      new Blob([buffer]),
      filename,
    );

    const res = await this.fetchWithRetry(`${this.config.baseUrl}/assets`, {
      method: "POST",
      headers: {
        api_key: this.config.CS_API_KEY,
        authorization: this.config.CS_MANAGEMENT_TOKEN,
      },
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`uploadAsset failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as {
      asset?: { url?: string; uid?: string };
    };
    const asset = data.asset;
    if (!asset?.url || !asset?.uid) {
      throw new Error("uploadAsset response missing url or uid");
    }

    return { url: asset.url, uid: asset.uid };
  }
}
