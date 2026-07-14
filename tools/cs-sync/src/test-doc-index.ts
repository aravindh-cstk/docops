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

const passed = results.filter((r) => r.status === "PASS").length;
const failed = results.filter((r) => r.status === "FAIL").length;
console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed`);
if (failed > 0) process.exit(1);
