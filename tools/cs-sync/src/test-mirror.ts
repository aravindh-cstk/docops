import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { buildDocIndex } from "./doc-index.js";
import {
  buildMirrorGroups,
  groupForFile,
  labelMembers,
  mirroredGroups,
  planPropagation,
  representativeFiles,
} from "./lib/mirror-groups.js";

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

/** A fixture tree whose files are addressable by their path under cs-docs. */
function fixture(files: Record<string, string>): { root: string; cleanup: () => void } {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "mirror-"));
  for (const [rel, content] of Object.entries(files)) {
    const full = path.join(root, "cs-docs", rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content);
  }
  return { root, cleanup: () => fs.rmSync(root, { recursive: true, force: true }) };
}

function doc(uid: string | null, url: string, body: string): string {
  const uidLine = uid ? `uid: ${uid}\n` : "";
  return `---\ntitle: "T"\ndescription: "D"\n${uidLine}url: ${url}\n---\n\n${body}\n`;
}

const A = doc("blt0000000000000a", "/headless-cms/page-a", "original");
const A2 = doc("blt0000000000000a", "/headless-cms/page-a", "edited");
const A3 = doc("blt0000000000000a", "/headless-cms/page-a", "edited differently");

const THREE = {
  "studio/page-a.md": A,
  "developers/page-a.md": A,
  "headless-cms/page-a.md": A,
};

function groupsFor(root: string) {
  const idx = buildDocIndex(root, "cs-docs");
  return { idx, groups: buildMirrorGroups(idx) };
}
function theMirror(root: string) {
  const { groups } = groupsFor(root);
  const m = mirroredGroups(groups);
  ok(m.length === 1, `expected 1 mirrored group, got ${m.length}`);
  return m[0]!;
}

// ── Grouping ────────────────────────────────────────────────────────────────

test("m1", "three copies sharing a uid form one group of three", () => {
  const f = fixture(THREE);
  const g = theMirror(f.root);
  ok(g.keyedBy === "uid", `keyedBy ${g.keyedBy}`);
  ok(g.members.length === 3, `members ${g.members.length}`);
  ok(
    g.representative.relPath === "cs-docs/developers/page-a.md",
    `representative ${g.representative.relPath}`,
  );
  f.cleanup();
  return "keyed by uid, representative is lexicographically first";
});

test("m2", "an unstamped file groups by url instead", () => {
  const f = fixture({
    "studio/no-uid.md": doc(null, "/studio/no-uid", "x"),
    "developers/no-uid.md": doc(null, "/studio/no-uid", "x"),
  });
  const g = theMirror(f.root);
  ok(g.keyedBy === "url", `keyedBy ${g.keyedBy}`);
  ok(g.key === "/studio/no-uid", `key ${g.key}`);
  f.cleanup();
  return "url fallback covers unstamped copies";
});

test("m3", "singletons are emitted, so the corpus is walkable from one list", () => {
  const f = fixture({ ...THREE, "launch/solo.md": doc("blt0000000000solo", "/launch/solo", "s") });
  const { idx, groups } = groupsFor(f.root);
  ok(idx.files.length === 4, `files ${idx.files.length}`);
  ok(groups.length === 2, `groups ${groups.length}`);
  ok(representativeFiles(idx).length === 2, "one representative per group");
  const solo = groupForFile(groups, "cs-docs/launch/solo.md");
  ok(solo?.members.length === 1, "solo group has one member");
  f.cleanup();
  return "4 files, 2 groups";
});

test("m4", "one uid across two different urls is a hard error", () => {
  const f = fixture({
    "studio/a.md": doc("blt0000000000000a", "/studio/a", "x"),
    "developers/b.md": doc("blt0000000000000a", "/developers/b", "x"),
  });
  let threw = "";
  try {
    groupsFor(f.root);
  } catch (err) {
    threw = err instanceof Error ? err.message : String(err);
  }
  ok(threw.includes("different urls"), `expected url-disagreement throw, got: ${threw || "none"}`);
  f.cleanup();
  return "writeback would hit two entries, so it refuses";
});

test("m5", "one url across two different uids is a hard error", () => {
  const f = fixture({
    "studio/a.md": doc("blt0000000000000a", "/studio/a", "x"),
    "developers/a.md": doc("blt0000000000000b", "/studio/a", "x"),
  });
  let threw = "";
  try {
    groupsFor(f.root);
  } catch (err) {
    threw = err instanceof Error ? err.message : String(err);
  }
  ok(threw.includes("different uids"), `expected uid-disagreement throw, got: ${threw || "none"}`);
  f.cleanup();
  return "two entries cannot share one url";
});

// ── planPropagation ─────────────────────────────────────────────────────────

test("m6", "all copies identical is a noop", () => {
  const f = fixture(THREE);
  const plan = planPropagation(theMirror(f.root), new Set(), "cs-docs");
  ok(plan.kind === "noop", `kind ${plan.kind}`);
  f.cleanup();
  return "idempotent on a convergent group";
});

test("m7", "one changed copy propagates to the other two", () => {
  const f = fixture({ ...THREE, "studio/page-a.md": A2 });
  const plan = planPropagation(
    theMirror(f.root),
    new Set(["cs-docs/studio/page-a.md"]),
    "cs-docs",
  );
  ok(plan.kind === "propagate", `kind ${plan.kind}`);
  if (plan.kind !== "propagate") return;
  ok(plan.source === "cs-docs/studio/page-a.md", `source ${plan.source}`);
  ok(plan.targets.length === 2, `targets ${plan.targets.length}`);
  ok(plan.content === A2, "content is the edited version");
  f.cleanup();
  return "2 targets";
});

test("m8", "one changed copy of a four-member group propagates to three", () => {
  const f = fixture({
    "studio/page-a.md": A,
    "developers/page-a.md": A,
    "headless-cms/page-a.md": A,
    "marketplace/page-a.md": A2,
  });
  const plan = planPropagation(
    theMirror(f.root),
    new Set(["cs-docs/marketplace/page-a.md"]),
    "cs-docs",
  );
  ok(plan.kind === "propagate", `kind ${plan.kind}`);
  if (plan.kind !== "propagate") return;
  ok(plan.targets.length === 3, `targets ${plan.targets.length}`);
  f.cleanup();
  return "3 targets";
});

test("m9", "two copies edited to the SAME content is a noop, not an error", () => {
  const f = fixture({
    "studio/page-a.md": A2,
    "developers/page-a.md": A2,
    "headless-cms/page-a.md": A2,
  });
  const plan = planPropagation(
    theMirror(f.root),
    new Set(["cs-docs/studio/page-a.md", "cs-docs/developers/page-a.md"]),
    "cs-docs",
  );
  ok(plan.kind === "noop", `kind ${plan.kind}`);
  f.cleanup();
  return "equality collapse runs before intent";
});

test("m10", "two copies edited DIFFERENTLY is refused with both named", () => {
  const f = fixture({ ...THREE, "studio/page-a.md": A2, "developers/page-a.md": A3 });
  const plan = planPropagation(
    theMirror(f.root),
    new Set(["cs-docs/studio/page-a.md", "cs-docs/developers/page-a.md"]),
    "cs-docs",
  );
  ok(plan.kind === "refuse", `kind ${plan.kind}`);
  if (plan.kind !== "refuse") return;
  ok(plan.message.includes("two different ways"), "explains the conflict");
  ok(plan.message.includes("(you changed)"), "labels the touched copies");
  ok(plan.message.includes("version A") && plan.message.includes("version B"), "names variants");
  ok(plan.message.includes("--source"), "names the escape hatch");
  ok(plan.message.includes("studio/page-a.md"), "lists studio copy");
  ok(plan.message.includes("headless-cms/page-a.md"), "lists the untouched copy too");
  f.cleanup();
  return "refused, all three copies listed";
});

test("m11", "divergence with nothing in the change set is refused", () => {
  const f = fixture({ ...THREE, "studio/page-a.md": A2 });
  const plan = planPropagation(theMirror(f.root), new Set(), "cs-docs");
  ok(plan.kind === "refuse", `kind ${plan.kind}`);
  if (plan.kind !== "refuse") return;
  ok(plan.message.includes("already differ"), "explains there is no intent signal");
  ok(!plan.message.includes("(you changed)"), "nothing should be labelled as changed");
  f.cleanup();
  return "no intent signal, so no guess";
});

test("m12", "--source overrides and wins regardless of the change set", () => {
  const f = fixture({ ...THREE, "studio/page-a.md": A2, "developers/page-a.md": A3 });
  const plan = planPropagation(
    theMirror(f.root),
    new Set(["cs-docs/studio/page-a.md", "cs-docs/developers/page-a.md"]),
    "cs-docs",
    "cs-docs/developers/page-a.md",
  );
  ok(plan.kind === "propagate", `kind ${plan.kind}`);
  if (plan.kind !== "propagate") return;
  ok(plan.source === "cs-docs/developers/page-a.md", `source ${plan.source}`);
  ok(plan.content === A3, "the named copy's content wins");
  ok(plan.targets.length === 2, `targets ${plan.targets.length}`);
  f.cleanup();
  return "named winner breaks the tie";
});

test("m13", "--source naming a file outside the group is refused", () => {
  const f = fixture({ ...THREE, "studio/page-a.md": A2 });
  const plan = planPropagation(
    theMirror(f.root),
    new Set(["cs-docs/studio/page-a.md"]),
    "cs-docs",
    "cs-docs/launch/unrelated.md",
  );
  ok(plan.kind === "refuse", `kind ${plan.kind}`);
  if (plan.kind !== "refuse") return;
  ok(plan.message.includes("not one of the copies"), "says why it was rejected");
  f.cleanup();
  return "refuses an unrelated source";
});

test("m14", "a propagated group re-plans as a noop", () => {
  const f = fixture({ ...THREE, "studio/page-a.md": A2 });
  const changed = new Set(["cs-docs/studio/page-a.md"]);
  const first = planPropagation(theMirror(f.root), changed, "cs-docs");
  ok(first.kind === "propagate", `first kind ${first.kind}`);
  if (first.kind !== "propagate") return;
  for (const t of first.targets) fs.writeFileSync(path.join(f.root, t), first.content);
  const second = planPropagation(theMirror(f.root), changed, "cs-docs");
  ok(second.kind === "noop", `second kind ${second.kind}`);
  f.cleanup();
  return "second run does nothing";
});

test("m15", "labels stay informative when every copy is in the change set", () => {
  // A wide diff (the uid-stamping commit touched 2,092 files) puts every copy
  // in the change set at once. Labelling only by changed-ness would print the
  // same label on every row and tell the reader nothing.
  const members = [
    { relPath: "cs-docs/a.md", content: "same" },
    { relPath: "cs-docs/b.md", content: "same" },
    { relPath: "cs-docs/c.md", content: "different" },
  ];
  const all = labelMembers(members, new Set(members.map((m) => m.relPath)));
  ok(all[0]!.label === "version A (you changed)", `a -> ${all[0]!.label}`);
  ok(all[1]!.label === "version A (you changed)", `b -> ${all[1]!.label}`);
  ok(all[2]!.label === "version B (you changed)", `c -> ${all[2]!.label}`);

  const none = labelMembers(members, new Set());
  ok(none[2]!.label === "version B", `untouched -> ${none[2]!.label}`);
  return "variant letter carries the signal";
});

const passed = results.filter((r) => r.status === "PASS").length;
const failed = results.filter((r) => r.status === "FAIL").length;
console.log(`\n${results.length} tests | ${passed} passed | ${failed} failed`);
if (failed > 0) process.exit(1);
