import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { canonicalizeUrl, buildDocIndex, resolveEntry } from "./doc-index.js";

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
    results.push({ id, scenario, status: "FAIL", notes: msg.slice(0, 200) });
    console.log(`FAIL\n     ${msg.slice(0, 200)}`);
  }
}
function ok(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

// ── canonicalizeUrl ──────────────────────────────────────────────────────────

test("d1", "absolute rich, relative stub, and CDA urls canonicalize equally", () => {
  const a = canonicalizeUrl("https://www.contentstack.com/docs/launch/change-git-repository-for-a-project");
  const b = canonicalizeUrl("/launch/change-git-repository-for-a-project");
  const c = canonicalizeUrl("/launch/change-git-repository-for-a-project/");
  ok(a === "/launch/change-git-repository-for-a-project", `absolute -> ${a}`);
  ok(a === b && b === c, `mismatch: ${a} | ${b} | ${c}`);
  return a!;
});

test("d2", "case, trailing slash and /docs prefix normalized", () => {
  ok(canonicalizeUrl("/Docs/Agent-OS/ChatGPT/") === "/agent-os/chatgpt", "case/slash/docs");
  ok(canonicalizeUrl("") === null, "empty -> null");
  ok(canonicalizeUrl(null) === null, "null -> null");
  return "ok";
});

// ── buildDocIndex + resolveEntry over a temp fixture tree ────────────────────

test("d3", "index maps url/uid, exposes collisions, resolves entries", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "docidx-"));
  const docs = path.join(root, "cs-docs");
  fs.mkdirSync(path.join(docs, "launch"), { recursive: true });
  fs.mkdirSync(path.join(docs, "agent-os"), { recursive: true });
  fs.mkdirSync(path.join(docs, "developers"), { recursive: true });

  // rich file (absolute url, has body)
  fs.writeFileSync(
    path.join(docs, "launch", "change-git-repository-for-a-project.md"),
    `---\ntitle: "x"\nurl: https://www.contentstack.com/docs/launch/change-git-repository-for-a-project\n---\n\n# Body\n`,
  );
  // stub file (relative url + uid, empty body)
  fs.writeFileSync(
    path.join(docs, "agent-os", "ai-credits.md"),
    `---\ntitle: "y"\nuid: bltf0c6f95e2c3be181\nurl: /agent-os/ai-credits\n---\n`,
  );
  // colliding url across two files
  fs.writeFileSync(path.join(docs, "agent-os", "launch.md"), `---\nurl: /agent-os/launch\n---\n\nbody\n`);
  fs.writeFileSync(path.join(docs, "developers", "launch.md"), `---\nurl: /agent-os/launch\n---\n\nbody\n`);

  const idx = buildDocIndex(root, "cs-docs");
  ok(idx.files.length === 4, `expected 4 files, got ${idx.files.length}`);
  ok(idx.collisions.has("/agent-os/launch"), "collision not detected");
  ok(idx.uidIndex.has("bltf0c6f95e2c3be181"), "uid not indexed");

  const byUid = resolveEntry(idx, { uid: "bltf0c6f95e2c3be181", url: "/agent-os/ai-credits" });
  ok(byUid.status === "matched-uid", `uid resolve -> ${byUid.status}`);

  const byUrl = resolveEntry(idx, { url: "/launch/change-git-repository-for-a-project" });
  ok(byUrl.status === "matched-url", `url resolve -> ${byUrl.status}`);

  const amb = resolveEntry(idx, { url: "/agent-os/launch" });
  ok(amb.status === "ambiguous", `ambiguous -> ${amb.status}`);

  const none = resolveEntry(idx, { url: "/nope/nope" });
  ok(none.status === "unmatched", `unmatched -> ${none.status}`);

  const stub = idx.files.find((f) => f.uid === "bltf0c6f95e2c3be181")!;
  ok(stub.hasBody === false, "stub should have empty body");
  const rich = idx.files.find((f) => f.relPath.endsWith("change-git-repository-for-a-project.md"))!;
  ok(rich.hasBody === true, "rich should have body");

  fs.rmSync(root, { recursive: true, force: true });
  return "index/collision/resolve verified";
});

test("d4", "a uid shared by two mirrored files resolves to both, not one", () => {
  // The case that has no coverage and the one that matters most once uid
  // stamping is on. A page the nav lists at two positions is mirrored as two
  // files carrying the same entry uid AND the same url. uidIndex is consulted
  // before urlIndex, so if it kept only the first match the `ambiguous` path
  // would be unreachable and cms-pull-prod would update one copy and leave its
  // twin stale, which lint.ts rejects as "Diverged copies".
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "docidx-mirror-"));
  const docs = path.join(root, "cs-docs");
  fs.mkdirSync(path.join(docs, "headless-cms"), { recursive: true });
  fs.mkdirSync(path.join(docs, "developer-resources"), { recursive: true });

  const frontmatter = `---\ntitle: "CLI"\ndescription: "d"\nuid: bltd697fa2bc1e38b53\nurl: /headless-cms/cli\n---\n\nbody\n`;
  fs.writeFileSync(path.join(docs, "headless-cms", "cli.md"), frontmatter);
  fs.writeFileSync(path.join(docs, "developer-resources", "cli.md"), frontmatter);

  const idx = buildDocIndex(root, "cs-docs");

  const indexed = idx.uidIndex.get("bltd697fa2bc1e38b53");
  ok(indexed?.length === 2, `uid should index both files, got ${indexed?.length ?? 0}`);
  ok(idx.collisions.has("bltd697fa2bc1e38b53"), "uid collision not surfaced");

  const byUid = resolveEntry(idx, { uid: "bltd697fa2bc1e38b53", url: "/headless-cms/cli" });
  ok(byUid.status === "ambiguous", `mirrored uid resolve -> ${byUid.status}, expected ambiguous`);
  ok(
    byUid.status === "ambiguous" && byUid.candidates.length === 2,
    "both mirrors must be offered to the caller",
  );

  // A uid held by exactly one file still resolves directly.
  fs.writeFileSync(
    path.join(docs, "headless-cms", "solo.md"),
    `---\ntitle: "s"\ndescription: "d"\nuid: blt0000solo\nurl: /headless-cms/solo\n---\n\nbody\n`,
  );
  const idx2 = buildDocIndex(root, "cs-docs");
  const solo = resolveEntry(idx2, { uid: "blt0000solo", url: "/headless-cms/solo" });
  ok(solo.status === "matched-uid", `single-file uid -> ${solo.status}`);

  fs.rmSync(root, { recursive: true, force: true });
  return "mirrored uid returns both candidates";
});

const passed = results.filter((r) => r.status === "PASS").length;
const failed = results.filter((r) => r.status === "FAIL").length;
console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed`);
if (failed > 0) process.exit(1);
