/**
 * Master test report generator.
 *
 * Runs all automatable High-priority test scenarios inline and writes the
 * result table to ../../temp/test-results.md (relative to this file).
 *
 * Scenarios requiring real CS credentials (s22, s36, s37, s61) are marked
 * PENDING — run `npm run test:cms-pull` separately and fill them in manually.
 *
 * Scenarios requiring GitHub Actions (s20, s41–s43) are marked MANUAL REQUIRED
 * with step-by-step instructions embedded in the report.
 *
 * Run: npm run test:all
 */
import "./loadEnv.js";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { htmlToMarkdown } from "./html-to-md.js";
import { ContentstackClient } from "./contentstack.js";
import type { AppConfig } from "./config.js";
import type { SyncEntryPayload } from "./payload.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reportPath = path.join(__dirname, "..", "..", "..", "temp", "test-results.md");

// ── Result row ────────────────────────────────────────────────────────────────

interface Row {
  id: string;
  expected: string;
  actual: string;
  how: string;
}

const rows: Row[] = [];

function pass(id: string, expected: string, actual: string, how: string): void {
  rows.push({ id, expected, actual: `✅ PASS — ${actual}`, how });
}

function fail(id: string, expected: string, actual: string, how: string): void {
  rows.push({ id, expected, actual: `❌ FAIL — ${actual}`, how });
}

function confirmedGap(id: string, expected: string, gapNote: string, how: string): void {
  rows.push({ id, expected, actual: `⚠️ CONFIRMED GAP — ${gapNote}`, how });
}

function pending(id: string, expected: string, how: string): void {
  rows.push({ id, expected, actual: "🔲 PENDING — run `npm run test:cms-pull`", how });
}

function manual(id: string, expected: string, steps: string): void {
  rows.push({ id, expected, actual: "🟡 MANUAL REQUIRED", how: steps });
}

function covered(id: string, expected: string): void {
  rows.push({ id, expected, actual: "✅ COVERED — see integration-test.ts", how: "npm run test:integration" });
}

// ── Already covered by integration-test.ts ────────────────────────────────────

covered("s01", "Entry created in CS and published");
covered("s02", "Entry updated in CS");
covered("s03", "Entry unpublished (not deleted) — entry remains as draft");
covered("s04", "Entry updated with new URL");
covered("s06", "Should skip or error gracefully on missing url field");
covered("s07", "Should skip or error gracefully on missing marker/heading");
covered("s08", "Finds by URL and updates that entry");
covered("s09", "Second write overwrites first");
covered("s10", "New URL entry created — old URL entry orphaned");
covered("s11", "Image uploaded to CS assets");
covered("s12", "Skip re-upload of existing CS CDN asset URL");
covered("s17", "All files processed in batches of 5; one fail causes overall run to fail");
covered("s44", "Sync fails with HTTP 401 on expired credentials");
covered("s48", "Changes go to wrong environment — error surfaces");
covered("s49", "External image URL left as-is");
covered("s50", "All images uploaded and URLs replaced");
covered("s51", "Graceful skip with warning — entry still syncs without the image");
covered("s54", "Relative path resolved correctly from .md file location");
covered("s55", "Image src detected — asset uploaded and src replaced");

// ── s20: Concurrency — GitHub Actions only ────────────────────────────────────

manual(
  "s20",
  "Two rapid pushes to main: second run queues, uses correct --before SHA",
  "1. Push commit A to main. 2. Immediately push commit B. " +
  "3. In Actions → 'Sync docs to Contentstack', verify run B is queued. " +
  "4. After run A completes, verify run B starts with correct --before SHA (= run A's after SHA). " +
  "5. Record: both runs complete without data loss.",
);

// ── s22, s36, s37, s61: cms-pull integration — requires .env ──────────────────

pending("s22", "CMS entry edited → detected on next cron run (file created/updated in repo)",
  "npm run test:cms-pull → see s22 result");
pending("s36", "cms-pull creates brand-new .md file not yet tracked in git",
  "npm run test:cms-pull → see s36 result");
pending("s37", "cms-pull updates content of an existing tracked file",
  "npm run test:cms-pull → see s37 result");

// ── s23, s24, s25, s27: confirmed gaps (code analysis) ───────────────────────

confirmedGap(
  "s23",
  "Published without content edit → NOT detected by cms-pull",
  "cms-pull queries updated_at only. Publishing an entry does not change updated_at.",
  "Code analysis — contentstack.ts:listRecentEntries uses {updated_at: {$gt: sinceIso}}. " +
  "Fix sketch: track published_at separately or use a CS webhook on publish events.",
);

confirmedGap(
  "s24",
  "Unpublished in CS → file stays in repo",
  "cms-pull has no query for recently unpublished entries and no file-removal logic.",
  "Code analysis — cms-pull.ts:130-163: loop only creates/updates files, never removes. " +
  "Fix sketch: after each pull, compare local docs/ files against CS entry list and remove orphans.",
);

confirmedGap(
  "s25",
  "Deleted from CS → file stays in repo indefinitely",
  "Deleted entries do not appear in listRecentEntries. No reconciliation sweep exists.",
  "Code analysis — cms-pull.ts:119: listRecentEntries returns only recently-modified entries. " +
  "Fix sketch: periodic full-sweep comparing local .md file URLs against all CS entry UIDs.",
);

confirmedGap(
  "s27",
  "More than 100 entries updated → only first 100 fetched (silent data loss)",
  "limit hardcoded to '100' with no pagination loop.",
  "Code analysis — contentstack.ts:119: `limit: '100'` with no offset/page loop. " +
  "Fix sketch: add pagination using count + offset parameters until all entries fetched.",
);

// ── s28–s33: content round-trip — inline snapshot tests ──────────────────────

function runHtmlToMdTest(
  id: string,
  expected: string,
  html: string,
  assertions: (md: string) => { ok: boolean; note: string },
): void {
  try {
    const md = htmlToMarkdown(html);
    const { ok, note } = assertions(md);
    if (ok) {
      pass(id, expected, note, "htmlToMarkdown(html) snapshot — no CS API needed");
    } else {
      fail(id, expected, note, "htmlToMarkdown(html) snapshot — no CS API needed");
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    fail(id, expected, `threw: ${msg.slice(0, 120)}`, "htmlToMarkdown(html) snapshot");
  }
}

runHtmlToMdTest(
  "s28",
  "Proper GFM pipe table in PR markdown",
  `<table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>alpha</td><td>1</td></tr></tbody></table>`,
  (md) => {
    const ok = md.includes("| Name | Value |") && /\|\s*[-:]+\s*\|/.test(md) && md.includes("| alpha | 1 |");
    return { ok, note: ok ? "pipe table with header and data rows" : `table not rendered — got: ${md.slice(0, 100)}` };
  },
);

runHtmlToMdTest(
  "s29",
  "Fenced code block in PR markdown",
  `<pre>npm install contentstack\nnpm run start</pre>`,
  (md) => {
    const ok = md.includes("```") && md.includes("npm install contentstack");
    return { ok, note: ok ? "fenced ``` block with content" : `fenced code missing — got: ${md.slice(0, 100)}` };
  },
);

runHtmlToMdTest(
  "s30",
  "Brackets unescaped in output markdown",
  `<h2>[.NET SDK] - Get Started</h2>`,
  (md) => {
    const ok = md.includes("[.NET SDK]") && !md.includes("\\[.NET SDK\\]");
    return {
      ok,
      note: ok
        ? "[.NET SDK] preserved in heading"
        : `brackets escaped or missing — got: ${md.slice(0, 100)}`,
    };
  },
);

// s33: document actual Turndown behavior without failing
{
  const html = `<p>**Note:** This is important text.</p>`;
  const md = htmlToMarkdown(html);
  const hasEscaped = md.includes("\\*\\*");
  const hasUnescaped = md.includes("**Note:**");
  const gapNote = hasEscaped
    ? `Turndown escapes ** → \\*\\* in plain text — output: "${md.trim().slice(0, 80)}"`
    : hasUnescaped
      ? "** preserved as-is — no escaping issue"
      : `unexpected form — got: "${md.trim().slice(0, 80)}"`;

  if (hasEscaped) {
    confirmedGap(
      "s33",
      "CS entry with **bold** as raw text → Turndown may double-escape asterisks",
      gapNote,
      "htmlToMarkdown('<p>**Note:** ...</p>') — Turndown escapes * in text content",
    );
  } else {
    pass(
      "s33",
      "CS entry with **bold** as raw text → Turndown may double-escape asterisks",
      gapNote,
      "htmlToMarkdown('<p>**Note:** ...</p>')",
    );
  }
}

// ── s41, s42, s43: bidirectional / PR scenarios — manual ─────────────────────

pending(
  "s41",
  "Stale PR: cms-sync PR left open, same entry re-edited in CS → second PR opened",
  "npm run test:cms-pull (file-change part) + manual PR observation",
);

manual(
  "s42",
  "Bidirectional conflict: GitHub edit + CMS edit simultaneously → last write wins",
  "1. Edit docs/path/file.md locally and push to main. " +
  "2. Edit the same CS entry before the sync completes. " +
  "3. Observe: cms-pull PR may overwrite the GitHub edit if merged. " +
  "4. Record: which write wins and whether any conflict is surfaced.",
);

manual(
  "s43",
  "cms-sync PR merged → contentstack-sync echoes content back to CS (potential loop)",
  "1. Trigger cms-to-github workflow (dispatch). 2. Observe the PR it creates. " +
  "3. Merge the PR. 4. Watch 'Sync docs to Contentstack' workflow fire. " +
  "5. Check if updated_at changes in CS after write-back. " +
  "6. Watch for a second cms-pull PR — if one appears, loop is confirmed.",
);

pending("s61",
  "CS entry with data-src lazy-loaded image → image URL captured from data-src",
  "npm run test:cms-pull → see s61 result");

// ── s45, s46: error handling — inline mock fetch ──────────────────────────────

function makeMockConfig(): AppConfig {
  return {
    CS_API_KEY: "mock-api-key",
    CS_MANAGEMENT_TOKEN: "mock-management-token",
    CS_REGION: "us",
    CS_CONTENT_TYPE: "docs_article",
    CS_ENVIRONMENT: "production",
    CS_LOCALE: "en-us",
    CS_DOCS_ROOT: "docs",
    baseUrl: "https://api.contentstack.io/v3",
    repoRoot: os.tmpdir(),
  };
}

const testPayload: SyncEntryPayload = {
  title: "[Test] - Error Test",
  url: "/test/error",
  article_content: [{ article_section: { heading: "Error Test", content: "<p>test</p>" } }],
};

async function runErrorTest(
  id: string,
  expected: string,
  status: number,
  op: (client: ContentstackClient) => Promise<unknown>,
): Promise<void> {
  const orig = globalThis.fetch;
  let callCount = 0;
  globalThis.fetch = async (_input: RequestInfo | URL, _init?: RequestInit): Promise<Response> =>
    new Response(
      JSON.stringify({ error_message: `Simulated ${status}` }),
      { status, statusText: `HTTP ${status}`, headers: { "Content-Type": "application/json" } },
    );
  callCount++;
  try {
    const client = new ContentstackClient(makeMockConfig());
    let threw = false;
    let errorMsg = "";
    try {
      await op(client);
    } catch (err) {
      threw = true;
      errorMsg = err instanceof Error ? err.message : String(err);
    }
    if (threw && errorMsg.includes(String(status))) {
      pass(id, expected, `threw with ${status} in message after ${callCount} call(s)`,
        `globalThis.fetch mocked to return ${status} — no new dependencies`);
    } else if (threw) {
      fail(id, expected, `threw but "${status}" not in message: ${errorMsg.slice(0, 80)}`,
        `globalThis.fetch mocked to return ${status}`);
    } else {
      fail(id, expected, "expected throw but none was raised",
        `globalThis.fetch mocked to return ${status}`);
    }
  } catch (e) {
    fail(id, expected, e instanceof Error ? e.message.slice(0, 120) : String(e),
      `globalThis.fetch mocked to return ${status}`);
  } finally {
    globalThis.fetch = orig;
  }
}

await runErrorTest(
  "s45",
  "Rate limit 429 → sync fails; no retry logic",
  429,
  (c) => c.createEntry(testPayload),
);

await runErrorTest(
  "s46",
  "5xx error mid-sync → sync fails; partial changes may be committed",
  500,
  (c) => c.findEntryByUrl("/test/s46"),
);

// ── Write report ──────────────────────────────────────────────────────────────

const lines: string[] = [
  "# Test Results — High Priority Scenarios",
  "",
  `Generated: ${new Date().toISOString()}`,
  `Total: ${rows.length} scenarios`,
  "",
  "| ID | Expected Behavior | Actual Behavior | How it was done |",
  "|----|-------------------|-----------------|-----------------|",
];

for (const row of rows) {
  const esc = (s: string) => s.replace(/\|/g, "\\|");
  lines.push(`| **${row.id}** | ${esc(row.expected)} | ${esc(row.actual)} | ${esc(row.how)} |`);
}

lines.push("");
lines.push("---");
lines.push("");
lines.push("## Fix Sketches for Confirmed Gaps");
lines.push("");
lines.push("| ID | Gap | Fix Sketch |");
lines.push("|----|-----|------------|");
lines.push("| **s23** | Publish without edit not detected | Track `published_at` separately, or use a CS webhook on publish events |");
lines.push("| **s24** | Unpublish in CS — file stays | After each pull, compare local `docs/` files against CS entry list; remove local files with no matching published entry |");
lines.push("| **s25** | Delete from CS — file stays | Full reconciliation: fetch all CS entry UIDs, diff against local `.md` files, remove any file whose URL has no matching entry |");
lines.push("| **s27** | >100 entries → silent truncation | Paginate `listRecentEntries` using `limit` + `skip` (or `count` to detect truncation) |");
lines.push("");
lines.push("## Manual Testing Checklist");
lines.push("");
lines.push("### s20 — Concurrency (GitHub Actions)");
lines.push("1. Push commit A to `main` → immediately push commit B");
lines.push("2. In Actions tab → 'Sync docs to Contentstack', verify B is queued while A runs");
lines.push("3. After A completes, verify B starts with `--before` = A's after SHA");
lines.push("4. Record: ✅ queued correctly / ❌ wrong SHA or race condition");
lines.push("");
lines.push("### s41 — Stale PR");
lines.push("1. Edit a CS entry → observe cms-sync PR #X opened");
lines.push("2. Edit the same CS entry again before PR #X is merged");
lines.push("3. Record: ✅ second PR #Y opened / ❌ no second PR (or #X updated in-place)");
lines.push("");
lines.push("### s42 — Bidirectional Conflict");
lines.push("1. Edit `docs/path/file.md` locally and push to `main`");
lines.push("2. Edit the same CS entry while the sync is running");
lines.push("3. Merge the cms-sync PR if one opens");
lines.push("4. Record: which version ends up in CS and in GitHub");
lines.push("");
lines.push("### s43 — Echo Loop");
lines.push("1. Trigger `cms-to-github` via workflow_dispatch");
lines.push("2. Merge the resulting PR");
lines.push("3. Watch `Sync docs to Contentstack` fire and write back to CS");
lines.push("4. Check if `updated_at` changes after write-back");
lines.push("5. Record: ✅ no loop (updated_at stable) / ❌ second PR opens (loop confirmed)");

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, lines.join("\n") + "\n", "utf8");

const pass_count = rows.filter(r => r.actual.startsWith("✅")).length;
const fail_count = rows.filter(r => r.actual.startsWith("❌")).length;
const gap_count = rows.filter(r => r.actual.startsWith("⚠️")).length;
const pending_count = rows.filter(r => r.actual.startsWith("🔲")).length;
const manual_count = rows.filter(r => r.actual.startsWith("🟡")).length;

console.log("\n=== Test Report Summary ===");
console.log(`✅ PASS/COVERED : ${pass_count}`);
console.log(`❌ FAIL         : ${fail_count}`);
console.log(`⚠️  CONFIRMED GAP: ${gap_count}`);
console.log(`🔲 PENDING (need .env): ${pending_count}`);
console.log(`🟡 MANUAL REQUIRED: ${manual_count}`);
console.log(`\nReport written to: ${reportPath}`);

if (fail_count > 0) process.exit(1);
