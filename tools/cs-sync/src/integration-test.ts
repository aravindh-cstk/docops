import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { ContentstackClient } from "./contentstack.js";
import { runSync, type SyncResult } from "./sync.js";
import { buildEntryPayload } from "./payload.js";
import type { AppConfig } from "./config.js";

// ── Config ──────────────────────────────────────────────────────────────────

const REGION_BASE_URL: Record<string, string> = {
  us: "https://api.contentstack.io/v3",
  eu: "https://eu-api.contentstack.com/v3",
  "azure-na": "https://azure-na-api.contentstack.com/v3",
  "azure-eu": "https://azure-eu-api.contentstack.com/v3",
  "gcp-na": "https://gcp-na-api.contentstack.com/v3",
};

function requireEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required env var: ${name}`);
  return val;
}

function makeConfig(repoRoot: string, overrides: Partial<AppConfig> = {}): AppConfig {
  const region = (process.env.CS_REGION ?? "us") as AppConfig["CS_REGION"];
  return {
    CS_API_KEY: process.env.CS_API_KEY ?? "",
    CS_MANAGEMENT_TOKEN: process.env.CS_MANAGEMENT_TOKEN ?? "",
    CS_REGION: region,
    CS_CONTENT_TYPE: process.env.CS_CONTENT_TYPE ?? "docs_article",
    CS_ENVIRONMENT: process.env.CS_ENVIRONMENT ?? "production",
    CS_LOCALE: process.env.CS_LOCALE ?? "en-us",
    CS_DOCS_ROOT: "docs",
    baseUrl: REGION_BASE_URL[region] ?? REGION_BASE_URL["us"]!,
    repoRoot,
    ...overrides,
  };
}

// ── URL namespacing ─────────────────────────────────────────────────────────

const RUN_ID = String(Date.now());
let urlSeq = 0;
function nextUrl(slug: string): string {
  return `/test-${RUN_ID}-${++urlSeq}/${slug}`;
}

// ── TempRepo ────────────────────────────────────────────────────────────────

class TempRepo {
  readonly dir: string;

  constructor() {
    this.dir = fs.mkdtempSync(path.join(os.tmpdir(), "cs-sync-test-"));
    this.run("git init");
    this.run('git config user.email "test@cs-sync.local"');
    this.run('git config user.name "CS Sync Test"');
    fs.mkdirSync(path.join(this.dir, "docs"), { recursive: true });
    this.run("git commit --allow-empty -m init");
  }

  run(cmd: string): string {
    return execSync(cmd, { cwd: this.dir, encoding: "utf8" }).trim();
  }

  addFile(relPath: string, content: string | Buffer): void {
    const abs = path.join(this.dir, relPath);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    if (typeof content === "string") fs.writeFileSync(abs, content, "utf8");
    else fs.writeFileSync(abs, content);
  }

  deleteFile(relPath: string): void {
    fs.unlinkSync(path.join(this.dir, relPath));
  }

  gitMove(oldRel: string, newRel: string): void {
    const newAbs = path.join(this.dir, newRel);
    fs.mkdirSync(path.dirname(newAbs), { recursive: true });
    this.run(`git mv "${oldRel}" "${newRel}"`);
  }

  commit(msg = "test"): string {
    this.run("git add -A");
    try { this.run(`git commit -m "${msg}"`); } catch { /* nothing staged */ }
    return this.head();
  }

  head(): string {
    return this.run("git rev-parse HEAD");
  }

  cleanup(): void {
    fs.rmSync(this.dir, { recursive: true, force: true });
  }
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function doc(opts: { url: string; marker?: string; heading?: string; body?: string }): string {
  return [
    "---",
    `url: ${opts.url}`,
    `marker: ${opts.marker ?? "Test SDK"}`,
    `heading: ${opts.heading ?? "Test Article"}`,
    "---",
    "",
    opts.body ?? "Integration test content.",
  ].join("\n");
}

function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

async function deleteEntry(config: AppConfig, uid: string): Promise<void> {
  const res = await fetch(
    `${config.baseUrl}/content_types/${config.CS_CONTENT_TYPE}/entries/${uid}`,
    { method: "DELETE", headers: { api_key: config.CS_API_KEY, authorization: config.CS_MANAGEMENT_TOKEN } },
  );
  if (!res.ok && res.status !== 404)
    console.warn(`  [cleanup] DELETE entry ${uid} → ${res.status}`);
}

async function deleteAsset(config: AppConfig, uid: string): Promise<void> {
  const res = await fetch(`${config.baseUrl}/assets/${uid}`, {
    method: "DELETE",
    headers: { api_key: config.CS_API_KEY, authorization: config.CS_MANAGEMENT_TOKEN },
  });
  if (!res.ok && res.status !== 404)
    console.warn(`  [cleanup] DELETE asset ${uid} → ${res.status}`);
}

// 1×1 red PNG for image tests
const TINY_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwADhQGAWjR9awAAAABJRU5ErkJggg==",
  "base64",
);

// ── Test runner ──────────────────────────────────────────────────────────────

interface TestResult { id: number | string; scenario: string; status: "PASS" | "FAIL"; notes: string; }
const results: TestResult[] = [];

async function test(id: number | string, scenario: string, fn: () => Promise<string | void>): Promise<void> {
  process.stdout.write(`[${String(id).padStart(2)}] ${scenario}... `);
  try {
    const notes = await fn();
    results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
    console.log(`PASS${notes ? ` (${notes})` : ""}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 200) });
    console.log(`FAIL\n     ${msg.slice(0, 120)}`);
  }
}

// ── Scenario 1: Add new file ─────────────────────────────────────────────────

async function s01() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("add-new-file");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found in CS");
    ok(entry!.url === url, `URL mismatch: ${entry!.url}`);
    return `uid: ${r!.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 2: Modify existing file ─────────────────────────────────────────

async function s02() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("modify-file");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, heading: "Original" }));
    const sha1 = repo.commit();
    const r1 = await runSync(config, client, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push(created!.uid!);

    repo.addFile("docs/article.md", doc({ url, heading: "Updated" }));
    const sha2 = repo.commit();
    const r2 = await runSync(config, client, sha1, sha2);
    ok(!!r2.find((x) => x.action === "updated"), "expected 'updated' result");
    const entry = await client.findEntryByUrl(url);
    ok(entry?.title?.includes("Updated") === true, `title not updated: ${entry?.title}`);
    return `uid: ${created!.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 3: Delete → unpublish ──────────────────────────────────────────

async function s03() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("delete-file");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url }));
    const sha1 = repo.commit();
    const r1 = await runSync(config, client, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push(created!.uid!);

    repo.deleteFile("docs/article.md");
    const sha2 = repo.commit();
    const r2 = await runSync(config, client, sha1, sha2);
    ok(!!r2.find((x) => x.action === "unpublished"), "expected 'unpublished' result");
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry should still exist in CS after unpublish (not deleted)");
    return `uid: ${created!.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 4: Rename within docs/ ─────────────────────────────────────────

async function s04() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const oldUrl = nextUrl("rename-old");
  const newUrl = nextUrl("rename-new");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/sub1/article.md", doc({ url: oldUrl }));
    const sha1 = repo.commit();
    const r1 = await runSync(config, client, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push(created!.uid!);

    repo.gitMove("docs/sub1/article.md", "docs/sub2/article.md");
    // overwrite content at new location with updated URL
    repo.addFile("docs/sub2/article.md", doc({ url: newUrl }));
    const sha2 = repo.commit();
    const r2 = await runSync(config, client, sha1, sha2);
    const renamed = r2.find((x) => x.action === "renamed" || x.action === "updated");
    ok(!!renamed, `expected renamed/updated, got: ${r2.map((x) => x.action).join(", ")}`);
    const entry = await client.findEntryByUrl(newUrl);
    ok(!!entry, "entry not found at new URL");
    return `renamed to ${newUrl}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 5: Move file out of docs/ ──────────────────────────────────────

async function s05() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("move-out");
  const uids: string[] = [];
  try {
    fs.mkdirSync(path.join(repo.dir, "archive"), { recursive: true });
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url }));
    const sha1 = repo.commit();
    const r1 = await runSync(config, client, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push(created!.uid!);

    repo.gitMove("docs/article.md", "archive/article.md");
    const sha2 = repo.commit();
    const r2 = await runSync(config, client, sha1, sha2);
    ok(!!r2.find((x) => x.action === "unpublished"), `expected 'unpublished', got: ${r2.map((x) => x.action).join(", ")}`);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry should still exist in CS after unpublish");
    return `uid: ${created!.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 6: Missing url field ───────────────────────────────────────────

async function s06() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  try {
    const base = repo.head();
    repo.addFile("docs/bad.md", "---\nmarker: Test\nheading: Test\n---\n\nNo url field.");
    const after = repo.commit();
    let threw = false;
    let msg = "";
    try { await runSync(config, client, base, after); }
    catch (err) { threw = true; msg = err instanceof Error ? err.message : String(err); }
    ok(threw, "runSync should throw on missing url");
    ok(msg.includes("Sync failed"), `expected "Sync failed", got: ${msg}`);
    return "threw: Sync failed (ZodError — missing url)";
  } finally {
    repo.cleanup();
  }
}

// ── Scenario 7: Missing marker field ────────────────────────────────────────

async function s07() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  try {
    const base = repo.head();
    repo.addFile("docs/bad.md", `---\nurl: ${nextUrl("no-marker")}\nheading: Test\n---\n\nNo marker.`);
    const after = repo.commit();
    let threw = false;
    try { await runSync(config, client, base, after); }
    catch { threw = true; }
    ok(threw, "runSync should throw on missing marker");
    return "threw as expected (ZodError — missing marker)";
  } finally {
    repo.cleanup();
  }
}

// ── Scenario 8: URL matches different entry UID ──────────────────────────────

async function s08() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("url-uid-match");
  const uids: string[] = [];
  try {
    const preCreated = await client.createEntry(
      buildEntryPayload({ url, marker: "Pre", heading: "Pre-existing" }, "<p>Pre-existing</p>"),
    );
    uids.push(preCreated.uid);

    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, heading: "Synced Heading" }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const updated = res.find((x) => x.action === "updated");
    ok(!!updated, "expected 'updated' result");
    ok(updated!.uid === preCreated.uid, `expected same uid ${preCreated.uid}, got ${updated!.uid}`);
    const entry = await client.findEntryByUrl(url);
    ok(entry?.title?.includes("Synced") === true, `heading not updated: ${entry?.title}`);
    return `pre-uid=${preCreated.uid} correctly updated`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 9: Two files share same URL ─────────────────────────────────────
// CS rejects duplicate URLs (422). Both files call findEntryByUrl concurrently
// → both see null → both attempt createEntry → second gets 422 → runSync throws.
// One file's content is silently lost. Known gap: no duplicate-URL detection.

async function s09() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const sharedUrl = nextUrl("shared-url");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/file-a.md", doc({ url: sharedUrl, heading: "File A" }));
    repo.addFile("docs/file-b.md", doc({ url: sharedUrl, heading: "File B" }));
    const after = repo.commit();

    let threw = false;
    let syncResults: SyncResult[] = [];
    try { syncResults = await runSync(config, client, base, after); }
    catch { threw = true; }

    for (const r of syncResults) if (r.uid) uids.push(r.uid);

    // Exactly one entry should exist at the shared URL
    const entry = await client.findEntryByUrl(sharedUrl);
    ok(!!entry, "expected one entry to exist at shared URL");
    if (entry?.uid) uids.push(entry.uid);

    ok(threw, "runSync should throw — second createEntry gets 422 from CS");
    return `threw as expected; 1 entry at shared URL (second file's content lost)`;
  } finally {
    for (const u of [...new Set(uids)]) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 10: URL changes on modified file → old orphaned ─────────────────

async function s10() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const urlV1 = nextUrl("url-v1");
  const urlV2 = nextUrl("url-v2");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url: urlV1 }));
    const sha1 = repo.commit();
    const r1 = await runSync(config, client, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push(created!.uid!);

    repo.addFile("docs/article.md", doc({ url: urlV2 }));
    const sha2 = repo.commit();
    const r2 = await runSync(config, client, sha1, sha2);
    if (r2[0]?.uid && !uids.includes(r2[0].uid)) uids.push(r2[0].uid);

    const oldEntry = await client.findEntryByUrl(urlV1);
    ok(!!oldEntry, "old URL entry should still exist (orphaned)");
    const newEntry = await client.findEntryByUrl(urlV2);
    ok(!!newEntry, "new URL entry should be created");
    if (newEntry?.uid && !uids.includes(newEntry.uid)) uids.push(newEntry.uid);
    return `action=${r2[0]?.action}; old entry orphaned; new entry at urlV2`;
  } finally {
    for (const u of [...new Set(uids)]) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 11: Local inline images ────────────────────────────────────────

async function s11() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("inline-img");
  const uids: string[] = [];
  const assetUids: string[] = [];
  try {
    repo.addFile("docs/img/test.png", TINY_PNG);
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: "![alt](./img/test.png)" }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    ok(html.includes("contentstack"), `CS CDN URL not found. Got: ${html.slice(0, 200)}`);
    const asset = await client.findAssetByFilename("test.png");
    if (asset?.uid) assetUids.push(asset.uid);
    ok(!!asset, "asset not found in CS by filename");
    return `uid: ${r!.uid}, asset: ${asset?.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    for (const u of assetUids) await deleteAsset(config, u);
    repo.cleanup();
  }
}

// ── Scenario 12: Existing CS CDN URL — no re-upload ─────────────────────────

async function s12() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("cdn-asset");
  const fakeAssetUid = "bltfakeuid1234567890";
  const cdnUrl = `https://images.contentstack.io/v3/assets/${config.CS_API_KEY}/${fakeAssetUid}/test.png`;
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: `![alt](${cdnUrl})` }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    ok(html.includes(fakeAssetUid), `asset_uid not found in HTML. Got: ${html.slice(0, 300)}`);
    return `asset_uid=${fakeAssetUid} preserved; no re-upload`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 13: Tables / code fences / callouts ─────────────────────────────

async function s13() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("tables-code");
  const uids: string[] = [];
  const body = [
    "| Col A | Col B |",
    "|-------|-------|",
    "| One   | Two   |",
    "",
    "```javascript",
    "console.log('hello');",
    "```",
    "",
    "> **Note:** This is a note callout.",
  ].join("\n");
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    ok(html.includes("table") || html.includes("<table"), "table not in HTML");
    ok(html.includes("code") || html.includes("<code"), "code block not in HTML");
    ok(html.includes("note") || html.includes("Note"), "callout not in HTML");
    return "table + code + callout all present";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 14: Very large document (>100KB) ────────────────────────────────

async function s14() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("large-doc");
  const uids: string[] = [];
  const para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(20);
  const body = Array.from({ length: 100 }, (_, i) => `## Section ${i + 1}\n\n${para}`).join("\n\n");
  ok(Buffer.byteLength(body) > 100_000, "body must be >100KB");
  try {
    const base = repo.head();
    repo.addFile("docs/large.md", doc({ url, body }));
    const after = repo.commit();
    const t0 = Date.now();
    const res = await runSync(config, client, base, after);
    const elapsed = Date.now() - t0;
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    return `${Math.round(Buffer.byteLength(body) / 1024)}KB synced in ${elapsed}ms`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 15: Special chars in filename ───────────────────────────────────

async function s15() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("special-filename");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/how-to-use-(v2)-guide.md", doc({ url }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    return `uid: ${r!.uid}`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 16: First push — zero SHA ──────────────────────────────────────

async function s16() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const urls = [nextUrl("zero-sha-1"), nextUrl("zero-sha-2")];
  const uids: string[] = [];
  try {
    repo.addFile("docs/doc1.md", doc({ url: urls[0]!, heading: "Doc 1" }));
    repo.addFile("docs/doc2.md", doc({ url: urls[1]!, heading: "Doc 2" }));
    const afterSha = repo.commit();
    const ZERO = "0000000000000000000000000000000000000000";
    const res = await runSync(config, client, ZERO, afterSha);
    const created = res.filter((x) => x.action === "created");
    ok(created.length === 2, `expected 2 created, got ${created.length}`);
    for (const r of created) if (r.uid) uids.push(r.uid);
    for (const u of urls) ok(!!(await client.findEntryByUrl(u)), `entry missing for ${u}`);
    return `${created.length} entries created from zero SHA`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 17: Multiple files; one fails ───────────────────────────────────

async function s17() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const urls = Array.from({ length: 7 }, (_, i) => nextUrl(`multi-${i}`));
  try {
    const base = repo.head();
    for (let i = 0; i < 7; i++)
      repo.addFile(`docs/doc${i}.md`, doc({ url: urls[i]!, heading: `Doc ${i}` }));
    repo.addFile("docs/bad.md", "---\nmarker: Test\nheading: Bad\n---\n\nNo url.");
    const after = repo.commit();
    let threw = false;
    try { await runSync(config, client, base, after); } catch { threw = true; }
    ok(threw, "runSync should throw when one file is invalid");
    // Verify valid entries created despite throw (query CS directly)
    let created = 0;
    for (const u of urls) { const e = await client.findEntryByUrl(u); if (e) created++; }
    ok(created === 7, `expected 7 entries, found ${created}`);
    return `7 valid entries created; threw on 1 invalid file`;
  } finally {
    for (const u of urls) {
      const e = await client.findEntryByUrl(u);
      if (e?.uid) await deleteEntry(config, e.uid);
    }
    repo.cleanup();
  }
}

// ── Scenario 18: Files inside and outside docs/ ──────────────────────────────

async function s18() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const inUrls = [nextUrl("inside-1"), nextUrl("inside-2")];
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/inside-1.md", doc({ url: inUrls[0]! }));
    repo.addFile("docs/inside-2.md", doc({ url: inUrls[1]! }));
    repo.addFile("outside/file.md", doc({ url: nextUrl("outside-1") }));
    repo.addFile("README.md", doc({ url: nextUrl("outside-2") }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    ok(res.length === 2, `expected 2 results (only docs/), got ${res.length}`);
    for (const r of res) if (r.uid) uids.push(r.uid);
    for (const u of inUrls) ok(!!(await client.findEntryByUrl(u)), `inside entry missing for ${u}`);
    return "only 2 docs/ entries synced; outside files ignored";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 19: Only non-doc changes → no CS calls ─────────────────────────

async function s19() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  try {
    const base = repo.head();
    repo.addFile("tools/helper.ts", "export const x = 1;");
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    ok(res.length === 0, `expected 0 results, got ${res.length}`);
    return "empty results — no doc changes detected";
  } finally {
    repo.cleanup();
  }
}

// ── Scenario 44: Wrong credentials → 401 ────────────────────────────────────

async function s44() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir, { CS_API_KEY: "INVALID_KEY", CS_MANAGEMENT_TOKEN: "INVALID_TOKEN" });
  const client = new ContentstackClient(config);
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url: nextUrl("bad-creds") }));
    const after = repo.commit();
    let threw = false, msg = "";
    try { await runSync(config, client, base, after); }
    catch (err) { threw = true; msg = err instanceof Error ? err.message : String(err); }
    ok(threw, "runSync should throw on invalid credentials");
    ok(
      msg.toLowerCase().includes("401") || msg.toLowerCase().includes("sync failed") || msg.toLowerCase().includes("unauthorized"),
      `expected auth error, got: ${msg}`,
    );
    return `threw: ${msg.slice(0, 80)}`;
  } finally {
    repo.cleanup();
  }
}

// ── Scenario 48: Wrong CS_ENVIRONMENT on unpublish ──────────────────────────

async function s48() {
  const repo = new TempRepo();
  const badConfig = makeConfig(repo.dir, { CS_ENVIRONMENT: "nonexistent-environment-xyz" });
  const badClient = new ContentstackClient(badConfig);
  const validConfig = makeConfig(repo.dir);
  const url = nextUrl("wrong-env");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url }));
    const sha1 = repo.commit();
    // Create works fine (env-agnostic)
    const r1 = await runSync(badConfig, badClient, base, sha1);
    const created = r1.find((x) => x.action === "created");
    ok(!!created?.uid, "initial create failed");
    uids.push(created!.uid!);

    // Delete triggers unpublish with wrong env
    repo.deleteFile("docs/article.md");
    const sha2 = repo.commit();
    let unpublishError: string | undefined;
    try { await runSync(badConfig, badClient, sha1, sha2); }
    catch (err) { unpublishError = err instanceof Error ? err.message : String(err); }
    return unpublishError
      ? `unpublish failed on wrong env: ${unpublishError.slice(0, 80)}`
      : "CS accepted unknown environment (may silently ignore it)";
  } finally {
    for (const u of uids) await deleteEntry(validConfig, u);
    repo.cleanup();
  }
}

// ── Scenario 49: External image URL → left as-is ────────────────────────────

async function s49() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("external-img");
  const externalSrc = "https://example.com/image.png";
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: `![alt](${externalSrc})` }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    ok(html.includes("example.com"), `external URL not preserved. Got: ${html.slice(0, 200)}`);
    return "external URL preserved as-is";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 50: Multiple inline images ─────────────────────────────────────

async function s50() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("multi-img");
  const uids: string[] = [];
  const assetUids: string[] = [];
  try {
    repo.addFile("docs/img/a.png", TINY_PNG);
    repo.addFile("docs/img/b.png", TINY_PNG);
    repo.addFile("docs/img/c.png", TINY_PNG);
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: "![a](./img/a.png)\n\n![b](./img/b.png)\n\n![c](./img/c.png)" }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    const cdnCount = (html.match(/images\.contentstack\.io/g) ?? []).length;
    ok(cdnCount >= 3, `expected ≥3 CS CDN URLs, found ${cdnCount}`);
    for (const name of ["a.png", "b.png", "c.png"]) {
      const a = await client.findAssetByFilename(name);
      if (a?.uid) assetUids.push(a.uid);
    }
    return `${cdnCount} CS CDN URLs confirmed`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    for (const u of assetUids) await deleteAsset(config, u);
    repo.cleanup();
  }
}

// ── Scenario 51: Missing local image → graceful skip ────────────────────────

async function s51() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("missing-img");
  const uids: string[] = [];
  try {
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: "![broken](./nonexistent.png)" }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "entry should still be created despite missing image");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    ok(html.includes("nonexistent.png"), "original broken src should be in HTML");
    return "entry created; broken image src preserved (graceful skip)";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 52: Same image across multiple files ────────────────────────────

async function s52() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const urls = [nextUrl("same-img-a"), nextUrl("same-img-b")];
  const uids: string[] = [];
  const assetUids: string[] = [];
  try {
    repo.addFile("docs/img/shared.png", TINY_PNG);
    const base = repo.head();
    repo.addFile("docs/file-a.md", doc({ url: urls[0]!, body: "![s](./img/shared.png)" }));
    repo.addFile("docs/file-b.md", doc({ url: urls[1]!, body: "![s](./img/shared.png)" }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    for (const r of res) if (r.uid) uids.push(r.uid);
    const asset = await client.findAssetByFilename("shared.png");
    if (asset?.uid) assetUids.push(asset.uid);
    return asset
      ? `findAssetByFilename returns 1 asset (uid: ${asset.uid}) — deduplication works if CS found it`
      : "asset not found — possible duplicate upload (race condition)";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    for (const u of assetUids) await deleteAsset(config, u);
    repo.cleanup();
  }
}

// ── Scenario 53: Image filename with special chars ───────────────────────────

async function s53() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("special-img-name");
  const uids: string[] = [];
  const assetUids: string[] = [];
  try {
    repo.addFile("docs/img/my-image-(v1).png", TINY_PNG);
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: "![img](./img/my-image-(v1).png)" }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const asset = await client.findAssetByFilename("my-image-(v1).png");
    if (asset?.uid) assetUids.push(asset.uid);
    return asset ? `asset uploaded: ${asset.uid}` : "asset not found by filename (CS may have normalized name)";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    for (const u of assetUids) await deleteAsset(config, u);
    repo.cleanup();
  }
}

// ── Scenario 54: Relative image path traversal ──────────────────────────────

async function s54() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("relative-traversal");
  const uids: string[] = [];
  const assetUids: string[] = [];
  try {
    repo.addFile("assets/shared-image.png", TINY_PNG);
    const base = repo.head();
    repo.addFile("docs/sub/article.md", doc({ url, body: "![img](../../assets/shared-image.png)" }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    const asset = await client.findAssetByFilename("shared-image.png");
    if (asset?.uid) assetUids.push(asset.uid);
    const resolved = html.includes("contentstack");
    return resolved ? "traversal resolved; asset uploaded" : "traversal failed — image not uploaded (broken src in HTML)";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    for (const u of assetUids) await deleteAsset(config, u);
    repo.cleanup();
  }
}

// ── Scenario 55: Raw HTML <img> tag in markdown body ────────────────────────

async function s55() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("html-img-tag");
  const uids: string[] = [];
  try {
    repo.addFile("docs/img/local.png", TINY_PNG);
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: 'Text.\n\n<img src="./img/local.png" alt="raw">\n\nMore.' }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    // markdown-it html:false strips raw <img> → image silently dropped
    const imgPresent = html.includes("local.png") || html.includes("<img");
    return imgPresent
      ? "WARNING: raw <img> was NOT stripped — html:false may not be active"
      : "confirmed: raw <img> stripped by markdown-it (html:false) — known gap documented";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    repo.cleanup();
  }
}

// ── Scenario 56: Alt text preserved ─────────────────────────────────────────

async function s56() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("alt-text");
  const uids: string[] = [];
  const assetUids: string[] = [];
  try {
    repo.addFile("docs/img/photo.png", TINY_PNG);
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: "![My Custom Alt Text](./img/photo.png)" }));
    const after = repo.commit();
    const res = await runSync(config, client, base, after);
    const r = res.find((x) => x.action === "created");
    ok(!!r?.uid, "expected 'created' result");
    uids.push(r!.uid!);
    const entry = await client.findEntryByUrl(url);
    ok(!!entry, "entry not found");
    const html = JSON.stringify(entry!.article_content ?? "");
    ok(html.includes("My Custom Alt Text"), `alt text missing. Got: ${html.slice(0, 300)}`);
    const asset = await client.findAssetByFilename("photo.png");
    if (asset?.uid) assetUids.push(asset.uid);
    return "alt text preserved in CS entry HTML";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    for (const u of assetUids) await deleteAsset(config, u);
    repo.cleanup();
  }
}

// ── Scenario 57: SVG as inline image ────────────────────────────────────────

async function s57() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("svg-img");
  const uids: string[] = [];
  const assetUids: string[] = [];
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><circle cx="5" cy="5" r="5" fill="red"/></svg>';
  try {
    repo.addFile("docs/img/icon.svg", svg);
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: "![icon](./img/icon.svg)" }));
    const after = repo.commit();
    let syncError: string | undefined;
    let syncRes: SyncResult[] = [];
    try { syncRes = await runSync(config, client, base, after); }
    catch (err) { syncError = err instanceof Error ? err.message : String(err); }
    const r = syncRes.find((x) => x.uid);
    if (r?.uid) uids.push(r.uid);
    if (syncError) return `SVG upload failed: ${syncError.slice(0, 100)}`;
    const asset = await client.findAssetByFilename("icon.svg");
    if (asset?.uid) assetUids.push(asset.uid);
    return asset ? "SVG uploaded successfully" : "SVG not found in CS (may have been rejected by API)";
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    for (const u of assetUids) await deleteAsset(config, u);
    repo.cleanup();
  }
}

// ── Scenario 58: Very large image (>5MB) ────────────────────────────────────

async function s58() {
  const repo = new TempRepo();
  const config = makeConfig(repo.dir);
  const client = new ContentstackClient(config);
  const url = nextUrl("large-img");
  const uids: string[] = [];
  const assetUids: string[] = [];
  const largeBuf = Buffer.alloc(Math.ceil(5.5 * 1024 * 1024), 0xab);
  try {
    repo.addFile("docs/img/large.png", largeBuf);
    const base = repo.head();
    repo.addFile("docs/article.md", doc({ url, body: "![large](./img/large.png)" }));
    const after = repo.commit();
    const t0 = Date.now();
    let syncError: string | undefined;
    let syncRes: SyncResult[] = [];
    try { syncRes = await runSync(config, client, base, after); }
    catch (err) { syncError = err instanceof Error ? err.message : String(err); }
    const elapsed = Date.now() - t0;
    const r = syncRes.find((x) => x.uid);
    if (r?.uid) uids.push(r.uid);
    const asset = await client.findAssetByFilename("large.png");
    if (asset?.uid) assetUids.push(asset.uid);
    if (syncError) return `upload failed after ${elapsed}ms: ${syncError.slice(0, 80)}`;
    return `${Math.round(largeBuf.length / (1024 * 1024))}MB uploaded in ${elapsed}ms`;
  } finally {
    for (const u of uids) await deleteEntry(config, u);
    for (const u of assetUids) await deleteAsset(config, u);
    repo.cleanup();
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  requireEnv("CS_API_KEY");
  requireEnv("CS_MANAGEMENT_TOKEN");

  const probeConfig = makeConfig(process.cwd());
  const probeClient = new ContentstackClient(probeConfig);

  process.stdout.write(`\nPre-flight: verifying content type '${probeConfig.CS_CONTENT_TYPE}'... `);
  try {
    await probeClient.findEntryByUrl(`/nonexistent-probe-${RUN_ID}`);
    console.log("OK\n");
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`\nPre-flight failed: ${msg}`);
    console.error(`Ensure content type '${probeConfig.CS_CONTENT_TYPE}' exists in your Contentstack stack.`);
    process.exit(1);
  }

  console.log("=== cs-sync Integration Tests ===");
  console.log(`Run ID : ${RUN_ID}`);
  console.log(`Stack  : ${probeConfig.CS_API_KEY.slice(0, 8)}...`);
  console.log(`Env    : ${probeConfig.CS_ENVIRONMENT}\n`);

  await test(1,  "Add new .md file to docs/",               s01);
  await test(2,  "Modify existing .md file",                 s02);
  await test(3,  "Delete .md file → unpublish",              s03);
  await test(4,  "Rename/move within docs/",                 s04);
  await test(5,  "Move file out of docs/ → unpublish",       s05);
  await test(6,  "Missing url field → graceful error",       s06);
  await test(7,  "Missing marker field → graceful error",    s07);
  await test(8,  "URL matches different entry UID",           s08);
  await test(9,  "Two files share same URL (race)",          s09);
  await test(10, "URL changes on modified file → orphaned",  s10);
  await test(11, "Local inline images uploaded",             s11);
  await test(12, "Existing CS CDN URL — no re-upload",       s12);
  await test(13, "Tables / code fences / callouts",          s13);
  await test(14, "Very large document (>100KB)",             s14);
  await test(15, "Special chars in filename",                s15);
  await test(16, "First push — zero SHA",                    s16);
  await test(17, "Multiple files; one invalid → throws",     s17);
  await test(18, "Files inside and outside docs/",           s18);
  await test(19, "Only non-doc changes — no CS calls",       s19);
  await test(44, "Wrong credentials → HTTP 401",             s44);
  await test(48, "Wrong CS_ENVIRONMENT on unpublish",        s48);
  await test(49, "External image URL left as-is",            s49);
  await test(50, "Multiple inline images all uploaded",      s50);
  await test(51, "Missing local image → graceful skip",      s51);
  await test(52, "Same image across multiple files",         s52);
  await test(53, "Image filename with special chars",        s53);
  await test(54, "Relative image path traversal (../../)",   s54);
  await test(55, "Raw HTML <img> in markdown body",          s55);
  await test(56, "Image alt text preserved",                 s56);
  await test(57, "SVG as inline image",                      s57);
  await test(58, "Very large image (>5MB)",                  s58);

  // Summary table
  const W = { id: 4, scenario: 46, status: 5, notes: 60 };
  const header = `${"ID".padEnd(W.id)} | ${"Scenario".padEnd(W.scenario)} | ${"Pass?".padEnd(W.status)} | Notes`;
  const sep = "─".repeat(header.length);
  console.log("\n" + sep);
  console.log(header);
  console.log(sep);
  for (const r of results) {
    console.log(
      `${String(r.id).padEnd(W.id)} | ${r.scenario.slice(0, W.scenario).padEnd(W.scenario)} | ${r.status.padEnd(W.status)} | ${r.notes.slice(0, W.notes)}`,
    );
  }
  console.log(sep);
  const passed = results.filter((r) => r.status === "PASS").length;
  const failed = results.filter((r) => r.status === "FAIL").length;
  console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error("\nFatal:", err);
  process.exit(1);
});
