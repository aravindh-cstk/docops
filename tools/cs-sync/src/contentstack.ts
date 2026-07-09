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

  private entriesBase(contentTypeOverride?: string): string {
    const ct = contentTypeOverride ?? this.config.CS_CONTENT_TYPE;
    return `${this.config.baseUrl}/content_types/${ct}/entries`;
  }

  async findEntryByQuery(query: Record<string, unknown>, contentType?: string): Promise<ContentstackEntry | null> {
    const queryStr = JSON.stringify(query);
    const params = new URLSearchParams({
      query: queryStr,
      locale: this.config.CS_LOCALE,
      include_count: "true",
    });

    const res = await this.fetchWithRetry(`${this.entriesBase(contentType)}?${params}`, {
      headers: this.headers(),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`findEntryByQuery failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as { entries?: ContentstackEntry[] };
    return (data.entries ?? [])[0] ?? null;
  }

  async findEntryByUrl(url: string, contentType?: string): Promise<ContentstackEntry | null> {
    return this.findEntryByQuery({ url }, contentType);
  }

  private entriesUrl(entryUid?: string, contentType?: string): string {
    const base = entryUid
      ? `${this.entriesBase(contentType)}/${entryUid}`
      : this.entriesBase(contentType);
    return `${base}?locale=${encodeURIComponent(this.config.CS_LOCALE)}`;
  }

  async createEntry(payload: SyncEntryPayload, contentType?: string): Promise<ContentstackEntry> {
    const res = await this.fetchWithRetry(this.entriesUrl(undefined, contentType), {
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
    contentType?: string,
  ): Promise<ContentstackEntry> {
    const res = await this.fetchWithRetry(this.entriesUrl(uid, contentType), {
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

  async unpublishEntry(uid: string, contentType?: string): Promise<void> {
    const res = await this.fetchWithRetry(
      `${this.entriesBase(contentType)}/${uid}/unpublish?locale=${encodeURIComponent(this.config.CS_LOCALE)}`,
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

  async listRecentEntries(sinceIso: string, contentType?: string): Promise<ContentstackEntry[]> {
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
      const pageUrl = `${this.entriesBase(contentType)}?${params}`;

      const res = await this.fetchWithRetry(pageUrl, { headers: this.headers() });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(
          `listRecentEntries failed — GET ${pageUrl} returned HTTP ${res.status} ${res.statusText}.\n` +
          `  Stack: ${this.config.CS_API_KEY} | Content-type: ${contentType ?? this.config.CS_CONTENT_TYPE} | Locale: ${this.config.CS_LOCALE}\n` +
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
