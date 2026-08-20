import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AppConfig } from "./config.js";

/**
 * This client is content-type agnostic — it just PUTs/POSTs whatever payload
 * shape a caller's content-type mapping module built. Callers (e.g.
 * lib/content-type-mappings/docs-article.ts) own their own typed payload
 * interface, this stays generic on purpose rather than coupling to one of them.
 */
export type EntryPayload = object;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const userIndex: Record<string, string> = JSON.parse(
  fs.readFileSync(path.join(scriptDir, "../cms-user-index.json"), "utf8"),
);

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

  async getEntry(uid: string): Promise<ContentstackEntry | null> {
    const res = await this.fetchWithRetry(this.entriesUrl(uid), { headers: this.headers() });
    if (!res.ok) {
      if (res.status === 404) return null;
      const text = await res.text();
      throw new Error(`getEntry failed (${res.status}): ${text}`);
    }
    const data = (await res.json()) as { entry?: ContentstackEntry };
    return data.entry ?? null;
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

  async createEntry(payload: EntryPayload): Promise<ContentstackEntry> {
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
    payload: EntryPayload,
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

  /** Get an entry by uid from a content type other than this client's own (e.g. product_faqs_2026). */
  async getEntryOfType(contentTypeUid: string, uid: string): Promise<ContentstackEntry | null> {
    const path = `${this.config.baseUrl}/content_types/${contentTypeUid}/entries/${uid}?locale=${this.config.CS_LOCALE}`;
    const res = await this.fetchWithRetry(path, { headers: this.headers() });
    if (!res.ok) {
      if (res.status === 404) return null;
      const text = await res.text();
      throw new Error(`getEntryOfType(${contentTypeUid}) failed (${res.status}): ${text}`);
    }
    const data = (await res.json()) as { entry?: ContentstackEntry };
    return data.entry ?? null;
  }

  /** Update an entry by uid, for content types other than this client's own. */
  async updateEntryOfType(
    contentTypeUid: string,
    uid: string,
    entry: ContentstackEntry,
  ): Promise<ContentstackEntry> {
    const path = `${this.config.baseUrl}/content_types/${contentTypeUid}/entries/${uid}?locale=${this.config.CS_LOCALE}`;
    const res = await this.fetchWithRetry(path, {
      method: "PUT",
      headers: this.headers(),
      body: JSON.stringify({ entry }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`updateEntryOfType(${contentTypeUid}) failed (${res.status}): ${text}`);
    }
    const data = (await res.json()) as { entry: ContentstackEntry };
    return data.entry;
  }

  /**
   * Adds a tag to an entry's existing tags array, fetching the full entry
   * first so the PUT round-trips every other field unchanged rather than
   * risking the CMA treating a partial body as replacing the whole entry.
   * A no-op if the entry already carries this tag.
   */
  async addTag(uid: string, tag: string): Promise<void> {
    const entry = await this.getEntry(uid);
    if (!entry) throw new Error(`addTag: entry ${uid} not found`);
    const existingTags = Array.isArray(entry.tags) ? (entry.tags as string[]) : [];
    if (existingTags.includes(tag)) return;

    const res = await this.fetchWithRetry(this.entriesUrl(uid), {
      method: "PUT",
      headers: this.headers(),
      body: JSON.stringify({ entry: { ...entry, tags: [...existingTags, tag] } }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`addTag failed (${res.status}): ${text}`);
    }
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

  // Resolve a user UID to a display name via a locally-maintained index.
  // The CMA has no endpoint to resolve an arbitrary user UID with a stack
  // management token — only an org-level authtoken can, which this integration
  // doesn't have — so unknown UIDs fall back to a clearly-labeled raw UID
  // rather than silently displaying it as if it were a resolved name.
  getUserName(userUid: string): string {
    return userIndex[userUid] || `Contentstack user ${userUid}`;
  }

  /**
   * folderUid: undefined searches the whole stack (original behavior,
   * pre-folder-scoping); null explicitly scopes to root-level assets only
   * (parent_uid: null); a string scopes to that specific folder. Doc
   * screenshots need the null/string distinction so a same-named file in a
   * DIFFERENT doc's folder never gets mistaken for this doc's own asset.
   */
  async findAssetByFilename(filename: string, folderUid?: string | null): Promise<{ url: string; uid: string } | null> {
    const queryObj: Record<string, unknown> = { filename };
    if (folderUid !== undefined) queryObj.parent_uid = folderUid;
    const params = new URLSearchParams({
      query: JSON.stringify(queryObj),
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

  /**
   * Finds a root-level asset FOLDER (not a regular asset — folders are
   * "assets" with is_dir: true) by exact name. Used to reuse a doc's
   * screenshot folder across walkthrough re-runs instead of creating a
   * fresh one (and duplicate images inside it) every time.
   */
  async findFolderByName(name: string): Promise<{ uid: string } | null> {
    const params = new URLSearchParams({
      include_folders: "true",
      query: JSON.stringify({ is_dir: true, name, parent_uid: null }),
      include_count: "true",
      limit: "1",
    });

    const res = await this.fetchWithRetry(`${this.config.baseUrl}/assets?${params}`, {
      headers: this.headers(),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`findFolderByName failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as { assets?: Array<{ uid?: string }> };
    const folder = data.assets?.[0];
    return folder?.uid ? { uid: folder.uid } : null;
  }

  async createFolder(name: string): Promise<{ uid: string }> {
    const res = await this.fetchWithRetry(`${this.config.baseUrl}/assets/folders`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ asset: { name } }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`createFolder failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as { asset?: { uid?: string } };
    if (!data.asset?.uid) throw new Error("createFolder response missing uid");
    return { uid: data.asset.uid };
  }

  /**
   * findFolderByName, creating it if missing — the single call site
   * (apply-screenshots.ts) needs for a doc's screenshot folder to exist
   * exactly once regardless of how many times the walkthrough re-runs.
   */
  async findOrCreateFolder(name: string): Promise<{ uid: string }> {
    return (await this.findFolderByName(name)) ?? (await this.createFolder(name));
  }

  async uploadAsset(filePath: string, parentUid?: string): Promise<{ url: string; uid: string }> {
    const buffer = fs.readFileSync(filePath);
    const filename = path.basename(filePath);
    const form = new FormData();
    form.append("asset[upload]", new Blob([buffer]), filename);
    if (parentUid) form.append("asset[parent_uid]", parentUid);

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

  /** Re-uploads a new file into an EXISTING asset uid, replacing its content in place. */
  async replaceAsset(uid: string, filePath: string): Promise<{ url: string; uid: string }> {
    const buffer = fs.readFileSync(filePath);
    const filename = path.basename(filePath);
    const form = new FormData();
    form.append("asset[upload]", new Blob([buffer]), filename);

    const res = await this.fetchWithRetry(`${this.config.baseUrl}/assets/${uid}`, {
      method: "PUT",
      headers: {
        api_key: this.config.CS_API_KEY,
        authorization: this.config.CS_MANAGEMENT_TOKEN,
      },
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`replaceAsset failed (${res.status}): ${text}`);
    }

    const data = (await res.json()) as { asset?: { url?: string; uid?: string } };
    const asset = data.asset;
    if (!asset?.url || !asset?.uid) {
      throw new Error("replaceAsset response missing url or uid");
    }

    return { url: asset.url, uid: asset.uid };
  }

  /**
   * Upload-or-replace by filename, scoped to a folder (or root if
   * folderUid is null) — re-running the walkthrough for the same doc
   * updates the SAME asset in place instead of piling up duplicates with
   * every run.
   */
  async upsertAsset(filePath: string, folderUid: string | null): Promise<{ url: string; uid: string }> {
    const filename = path.basename(filePath);
    const existing = await this.findAssetByFilename(filename, folderUid);
    if (existing) return this.replaceAsset(existing.uid, filePath);
    return this.uploadAsset(filePath, folderUid ?? undefined);
  }
}
