import { execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { buildDocIndex } from "./doc-index.js";
import type { DocChange } from "./diff.js";
import {
  breadcrumbMoveNote,
  deleteBecomesUpdate,
  groupChangesByEntry,
  selectPrimary,
} from "./lib/sync-groups.js";

interface TestResult { id: string; scenario: string; status: "PASS" | "FAIL"; notes: string; }
const results: TestResult[] = [];

function test(id: string, scenario: string, fn: () => string | void): void {
  process.stdout.write(`[${id}] ${scenario}... `);
  try {
    const notes = fn();
    results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
    console.log(`PASS${notes ? ` (${notes})` : ""}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 300) });
    console.log(`FAIL\n     ${msg.slice(0, 300)}`);
  }
}
async function testAsync(id: string, scenario: string, fn: () => Promise<string | void>): Promise<void> {
  process.stdout.write(`[${id}] ${scenario}... `);
  try {
    const notes = await fn();
    results.push({ id, scenario, status: "PASS", notes: notes ?? "" });
    console.log(`PASS${notes ? ` (${notes})` : ""}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 300) });
    console.log(`FAIL\n     ${msg.slice(0, 300)}`);
  }
}
function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

const DOCS = "cs-docs";
const HEADLESS_CMS_BREADCRUMB = "blt5e26f58d8f4f63ed";
const STUDIO_BREADCRUMB = "blt411e490e123c493a";

function doc(url: string, body: string): string {
  return `---\ntitle: "T"\ndescription: "D"\nuid: blt0000000000000a\nurl: ${url}\n---\n\n# T\n\n${body}\n`;
}

/**
 * A real git repo, because a deleted file's url can only come from the parent
 * commit. Committed once so beforeSha is meaningful.
 */
function repo(files: Record<string, string>): { root: string; sha: string; cleanup: () => void } {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "syncgrp-"));
  const run = (cmd: string) => execSync(cmd, { cwd: root, stdio: "pipe" });
  run("git init -q");
  run("git config user.email t@example.com");
  run("git config user.name Test");
  for (const [rel, content] of Object.entries(files)) {
    const full = path.join(root, DOCS, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content);
  }
  run("git add -A");
  run('git commit -q -m "fixture"');
  const sha = execSync("git rev-parse HEAD", { cwd: root, encoding: "utf8" }).trim();
  return { root, sha, cleanup: () => fs.rmSync(root, { recursive: true, force: true }) };
}

const URL_A = "/headless-cms/page-a";
function threeCopies(body = "same"): Record<string, string> {
  return {
    "studio/page-a.md": doc(URL_A, body),
    "developer-resources/page-a.md": doc(URL_A, body),
    "headless-cms/page-a.md": doc(URL_A, body),
  };
}
const p = (rel: string) => `${DOCS}/${rel}`;
function modified(rel: string): DocChange {
  return { type: "modified", relativePath: p(rel) };
}
function deleted(rel: string): DocChange {
  return { type: "deleted", relativePath: p(rel) };
}
function group(root: string, sha: string, changes: DocChange[]) {
  const groups = groupChangesByEntry(changes, root, DOCS, sha, buildDocIndex(root, DOCS));
  return groups;
}

// ── Grouping ────────────────────────────────────────────────────────────────

test("g1", "two, three and four changed copies each collapse to one group", () => {
  for (const n of [2, 3, 4]) {
    const files: Record<string, string> = {};
    const folders = ["studio", "developer-resources", "headless-cms", "marketplace"];
    for (let i = 0; i < n; i++) files[`${folders[i]}/page-a.md`] = doc(URL_A, "same");
    const r = repo(files);
    const changes = folders.slice(0, n).map((f) => modified(`${f}/page-a.md`));
    const groups = group(r.root, r.sha, changes);
    ok(groups.length === 1, `n=${n} produced ${groups.length} group(s)`);
    ok(groups[0]!.changes.length === n, `n=${n} group holds ${groups[0]!.changes.length}`);
    ok(groups[0]!.rawUrl === URL_A, `rawUrl ${groups[0]!.rawUrl}`);
    ok(!groups[0]!.error, `unexpected error: ${groups[0]!.error}`);
    r.cleanup();
  }
  return "one write per entry for 2, 3 and 4 copies";
});

test("g2", "unrelated pages stay in separate groups", () => {
  const r = repo({
    "studio/page-a.md": doc(URL_A, "x"),
    "studio/page-b.md": doc("/headless-cms/page-b", "y"),
  });
  const groups = group(r.root, r.sha, [modified("studio/page-a.md"), modified("studio/page-b.md")]);
  ok(groups.length === 2, `groups ${groups.length}`);
  r.cleanup();
  return "grouping is by url, not by folder";
});

test("g3", "a diverged group carries an error and names both copies", () => {
  const r = repo(threeCopies());
  fs.writeFileSync(path.join(r.root, DOCS, "studio/page-a.md"), doc(URL_A, "different"));
  const groups = group(r.root, r.sha, [
    modified("studio/page-a.md"),
    modified("headless-cms/page-a.md"),
  ]);
  ok(groups.length === 1, `groups ${groups.length}`);
  const g = groups[0]!;
  ok(!!g.error, "expected a group error");
  ok(g.error!.includes("Refusing to sync diverged copies"), "explains the refusal");
  ok(g.error!.includes("npm run fix"), "names the fix");
  ok(g.error!.includes("version A") && g.error!.includes("version B"), "labels the variants");
  r.cleanup();
  return "refuses rather than picking one";
});

// ── Deletes ─────────────────────────────────────────────────────────────────

test("g4", "deleting one of three copies becomes an update, not an unpublish", () => {
  const r = repo(threeCopies());
  fs.rmSync(path.join(r.root, DOCS, "studio/page-a.md"));
  const groups = group(r.root, r.sha, [deleted("studio/page-a.md")]);
  const g = groups[0]!;
  ok(g.survivingPaths.length === 2, `surviving ${g.survivingPaths.length}`);
  const asUpdate = deleteBecomesUpdate(g, DOCS);
  ok(!!asUpdate, "expected the delete to become an update");
  ok(asUpdate!.change.type === "modified", `type ${asUpdate!.change.type}`);
  ok(
    asUpdate!.change.relativePath === p("developer-resources/page-a.md"),
    `source ${asUpdate!.change.relativePath}`,
  );
  ok(asUpdate!.note.includes("2 copy(ies) remain"), `note ${asUpdate!.note}`);
  r.cleanup();
  return "entry stays published, updated from a survivor";
});

test("g5", "deleting the PRIMARY copy switches primary and reports the breadcrumb move", () => {
  // headless-cms is primary because the entry's breadcrumb points at it.
  const r = repo(threeCopies());
  fs.rmSync(path.join(r.root, DOCS, "headless-cms/page-a.md"));
  const groups = group(r.root, r.sha, [deleted("headless-cms/page-a.md")]);
  const g = groups[0]!;

  const asUpdate = deleteBecomesUpdate(g, DOCS);
  ok(!!asUpdate, "no unpublish: copies survive");
  ok(
    asUpdate!.change.relativePath === p("developer-resources/page-a.md"),
    `new source ${asUpdate!.change.relativePath}`,
  );

  // No survivor matches the old breadcrumb, so selection cannot keep it.
  const primary = selectPrimary(g, DOCS, HEADLESS_CMS_BREADCRUMB);
  ok(primary === null, "the only changed copy is the deleted one");

  const note = breadcrumbMoveNote(
    p("headless-cms/page-a.md"),
    asUpdate!.change.relativePath,
    DOCS,
  );
  ok(!!note, "expected a breadcrumb-moved note");
  ok(
    note!.includes("Headless CMS -> Developer Resources"),
    `note ${note}`,
  );
  r.cleanup();
  return "no unpublish, breadcrumb move surfaced not silent";
});

test("g6", "deleting every copy unpublishes, and only once", () => {
  const r = repo(threeCopies());
  for (const f of ["studio", "developer-resources", "headless-cms"]) {
    fs.rmSync(path.join(r.root, DOCS, `${f}/page-a.md`));
  }
  const changes = ["studio", "developer-resources", "headless-cms"].map((f) =>
    deleted(`${f}/page-a.md`),
  );
  const groups = group(r.root, r.sha, changes);
  ok(groups.length === 1, `groups ${groups.length}`);
  const g = groups[0]!;
  ok(g.survivingPaths.length === 0, `surviving ${g.survivingPaths.length}`);
  ok(deleteBecomesUpdate(g, DOCS) === null, "nothing survives, so it is a real unpublish");
  ok(g.changes.length === 3, "all three deletes are in the one group");
  r.cleanup();
  return "one unpublish for three deleted copies";
});

test("g7", "a rename alongside untouched twins is one update", () => {
  const r = repo(threeCopies());
  fs.rmSync(path.join(r.root, DOCS, "studio/page-a.md"));
  fs.writeFileSync(path.join(r.root, DOCS, "studio/page-a-renamed.md"), doc(URL_A, "same"));
  const groups = group(r.root, r.sha, [
    { type: "renamed", relativePath: p("studio/page-a-renamed.md"), oldRelativePath: p("studio/page-a.md") },
  ]);
  ok(groups.length === 1, `groups ${groups.length}`);
  ok(groups[0]!.changes.length === 1, "one change");
  ok(!groups[0]!.error, `unexpected error ${groups[0]!.error}`);
  r.cleanup();
  return "single write, twins untouched";
});

// ── selectPrimary ───────────────────────────────────────────────────────────

test("g8", "selectPrimary prefers the copy already matching the entry's breadcrumb", () => {
  const r = repo(threeCopies());
  const groups = group(r.root, r.sha, [
    modified("studio/page-a.md"),
    modified("developer-resources/page-a.md"),
    modified("headless-cms/page-a.md"),
  ]);
  const g = groups[0]!;

  const keepHeadless = selectPrimary(g, DOCS, HEADLESS_CMS_BREADCRUMB);
  ok(
    keepHeadless?.relativePath === p("headless-cms/page-a.md"),
    `with headless breadcrumb -> ${keepHeadless?.relativePath}`,
  );

  const keepStudio = selectPrimary(g, DOCS, STUDIO_BREADCRUMB);
  ok(
    keepStudio?.relativePath === p("studio/page-a.md"),
    `with studio breadcrumb -> ${keepStudio?.relativePath}`,
  );
  r.cleanup();
  return "idempotent, so nav placement stops flapping";
});

test("g9", "selectPrimary is deterministic with no breadcrumb to match", () => {
  const r = repo(threeCopies());
  const groups = group(r.root, r.sha, [
    modified("studio/page-a.md"),
    modified("headless-cms/page-a.md"),
  ]);
  const first = selectPrimary(groups[0]!, DOCS);
  const again = selectPrimary(groups[0]!, DOCS);
  ok(first?.relativePath === p("developer-resources/page-a.md") || first?.relativePath === p("headless-cms/page-a.md"), `primary ${first?.relativePath}`);
  ok(first?.relativePath === again?.relativePath, "same answer twice");
  ok(
    first?.relativePath === p("headless-cms/page-a.md"),
    `lexicographically first changed copy expected, got ${first?.relativePath}`,
  );
  r.cleanup();
  return "lexicographic tiebreak, not arbitrary";
});

test("g10", "selectPrimary ignores deleted copies and unmapped products", () => {
  const r = repo({
    ...threeCopies(),
    "not-a-product/page-a.md": doc(URL_A, "same"),
  });
  fs.rmSync(path.join(r.root, DOCS, "developer-resources/page-a.md"));
  const groups = group(r.root, r.sha, [
    deleted("developer-resources/page-a.md"),
    modified("not-a-product/page-a.md"),
    modified("studio/page-a.md"),
  ]);
  const primary = selectPrimary(groups[0]!, DOCS);
  ok(
    primary?.relativePath === p("studio/page-a.md"),
    `primary ${primary?.relativePath}`,
  );
  r.cleanup();
  return "deletes and unmapped folders cannot be primary";
});

// ── End to end through runSync, with a fake CMS ─────────────────────────────

/**
 * Counts calls instead of talking to Contentstack, so the one claim that
 * actually matters can be asserted: several changed copies of one entry
 * produce exactly one write.
 */
function fakeClient(existing: Record<string, { uid: string; breadcrumb?: Array<{ uid: string }> }>) {
  const calls = { findEntryByUrl: 0, updateEntry: [] as string[], createEntry: 0, unpublishEntry: [] as string[] };
  return {
    calls,
    client: {
      async findEntryByUrl(url: string) {
        calls.findEntryByUrl++;
        return existing[url] ?? null;
      },
      async updateEntry(uid: string) {
        calls.updateEntry.push(uid);
        return { uid };
      },
      async createEntry() {
        calls.createEntry++;
        return { uid: "bltcreated" };
      },
      async unpublishEntry(uid: string) {
        calls.unpublishEntry.push(uid);
        return { uid };
      },
      async findAssetByFilename() { return null; },
      async uploadAsset() { return { uid: "a", url: "https://example.com/a.png" }; },
    },
  };
}

function config(root: string) {
  return {
    repoRoot: root,
    CS_DOCS_ROOT: DOCS,
    CS_API_KEY: "k",
    CS_MANAGEMENT_TOKEN: "t",
    CS_REGION: "us",
    CS_CONTENT_TYPE: "docs_article",
    CS_ENVIRONMENT: "development",
    CS_LOCALE: "en-us",
    baseUrl: "https://api.contentstack.io",
  };
}

await testAsync("g11", "three changed copies of one entry produce exactly ONE updateEntry", async () => {
  const { runSync } = await import("./lib/sandbox-sync-engine.js");
  const r = repo(threeCopies("original"));
  for (const f of ["studio", "developer-resources", "headless-cms"]) {
    fs.writeFileSync(path.join(r.root, DOCS, `${f}/page-a.md`), doc(URL_A, "edited"));
  }
  execSync("git add -A", { cwd: r.root, stdio: "pipe" });
  execSync('git commit -q -m "edit all three"', { cwd: r.root, stdio: "pipe" });
  const after = execSync("git rev-parse HEAD", { cwd: r.root, encoding: "utf8" }).trim();

  const fake = fakeClient({ [URL_A]: { uid: "blt0000entry", breadcrumb: [{ uid: HEADLESS_CMS_BREADCRUMB }] } });
  const rows = await runSync(
    config(r.root) as never,
    fake.client as never,
    r.sha,
    after,
  );

  ok(fake.calls.updateEntry.length === 1, `updateEntry called ${fake.calls.updateEntry.length} time(s)`);
  ok(fake.calls.updateEntry[0] === "blt0000entry", `wrote ${fake.calls.updateEntry[0]}`);
  ok(fake.calls.createEntry === 0, `createEntry called ${fake.calls.createEntry} time(s)`);

  ok(rows.length === 3, `expected a row per copy, got ${rows.length}`);
  const primary = rows.filter((x) => x.role === "primary");
  const mirrors = rows.filter((x) => x.role === "mirror");
  ok(primary.length === 1, `primary rows ${primary.length}`);
  ok(mirrors.length === 2, `mirror rows ${mirrors.length}`);
  ok(
    primary[0]!.path === p("headless-cms/page-a.md"),
    `primary should match the breadcrumb, got ${primary[0]!.path}`,
  );
  ok(rows.every((x) => !x.error), `unexpected errors: ${rows.map((x) => x.error).join("; ")}`);
  r.cleanup();
  return "1 write, 3 rows reported";
});

await testAsync("g12", "deleting one copy does NOT unpublish the entry", async () => {
  const { runSync } = await import("./lib/sandbox-sync-engine.js");
  const r = repo(threeCopies("same"));
  fs.rmSync(path.join(r.root, DOCS, "headless-cms/page-a.md"));
  execSync("git add -A", { cwd: r.root, stdio: "pipe" });
  execSync('git commit -q -m "remove one copy"', { cwd: r.root, stdio: "pipe" });
  const after = execSync("git rev-parse HEAD", { cwd: r.root, encoding: "utf8" }).trim();

  const fake = fakeClient({ [URL_A]: { uid: "blt0000entry", breadcrumb: [{ uid: HEADLESS_CMS_BREADCRUMB }] } });
  const rows = await runSync(config(r.root) as never, fake.client as never, r.sha, after);

  ok(fake.calls.unpublishEntry.length === 0, `unpublished ${fake.calls.unpublishEntry.length} time(s)`);
  ok(fake.calls.updateEntry.length === 1, `updateEntry ${fake.calls.updateEntry.length} time(s)`);
  const noted = rows.find((x) => (x.note ?? "").includes("copy removed"));
  ok(!!noted, `expected a "copy removed" note, rows: ${JSON.stringify(rows.map((x) => x.note))}`);
  const moved = rows.find((x) => (x.note ?? "").includes("breadcrumb moved"));
  ok(!!moved, "breadcrumb move should be reported, not silent");
  r.cleanup();
  return "entry updated from a survivor, move reported";
});

await testAsync("g13", "deleting every copy unpublishes exactly once", async () => {
  const { runSync } = await import("./lib/sandbox-sync-engine.js");
  const r = repo(threeCopies("same"));
  for (const f of ["studio", "developer-resources", "headless-cms"]) {
    fs.rmSync(path.join(r.root, DOCS, `${f}/page-a.md`));
  }
  execSync("git add -A", { cwd: r.root, stdio: "pipe" });
  execSync('git commit -q -m "remove all copies"', { cwd: r.root, stdio: "pipe" });
  const after = execSync("git rev-parse HEAD", { cwd: r.root, encoding: "utf8" }).trim();

  const fake = fakeClient({ [URL_A]: { uid: "blt0000entry" } });
  const rows = await runSync(config(r.root) as never, fake.client as never, r.sha, after);

  ok(fake.calls.unpublishEntry.length === 1, `unpublished ${fake.calls.unpublishEntry.length} time(s)`);
  ok(fake.calls.updateEntry.length === 0, `updateEntry ${fake.calls.updateEntry.length} time(s)`);
  ok(rows.length === 3, `rows ${rows.length}`);
  r.cleanup();
  return "1 unpublish, 3 rows reported";
});

await testAsync("g14", "diverged copies are refused without touching the CMS", async () => {
  const { runSync } = await import("./lib/sandbox-sync-engine.js");
  const r = repo(threeCopies("original"));
  fs.writeFileSync(path.join(r.root, DOCS, "studio/page-a.md"), doc(URL_A, "one way"));
  fs.writeFileSync(path.join(r.root, DOCS, "headless-cms/page-a.md"), doc(URL_A, "another way"));
  execSync("git add -A", { cwd: r.root, stdio: "pipe" });
  execSync('git commit -q -m "diverge"', { cwd: r.root, stdio: "pipe" });
  const after = execSync("git rev-parse HEAD", { cwd: r.root, encoding: "utf8" }).trim();

  const fake = fakeClient({ [URL_A]: { uid: "blt0000entry" } });
  let threw = "";
  try {
    await runSync(config(r.root) as never, fake.client as never, r.sha, after);
  } catch (err) {
    threw = err instanceof Error ? err.message : String(err);
  }
  ok(threw.includes("Sync failed"), `expected a failing run, got: ${threw || "success"}`);
  ok(fake.calls.updateEntry.length === 0, `wrote ${fake.calls.updateEntry.length} time(s) anyway`);
  ok(fake.calls.createEntry === 0, "nothing created either");
  r.cleanup();
  return "refused, CMS untouched";
});

const passed = results.filter((r) => r.status === "PASS").length;
const failed = results.filter((r) => r.status === "FAIL").length;
console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed`);
if (failed > 0) process.exit(1);
