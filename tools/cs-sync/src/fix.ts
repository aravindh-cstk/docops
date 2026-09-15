import "./loadEnv.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { findRepoRoot, listChangedDocs, listWorktreeChangedDocs, parseArgs } from "./diff.js";
import { buildDocIndex } from "./doc-index.js";
import {
  buildMirrorGroups,
  groupForFile,
  planPropagation,
  stripDocsRoot,
  type MirrorGroup,
} from "./lib/mirror-groups.js";
import { fixStyle } from "./style-fix.js";

/**
 * Copy one edited file over the other copies of its CMS entry.
 *
 * A page the nav lists at several positions is several files sharing one entry,
 * and they must stay byte-identical because only one of them can be written
 * back. Editing a single copy therefore fails lint until its twins catch up,
 * which is what this closes. It runs after the per-file fixers so the bytes it
 * propagates are already style-fixed, and the copies it writes are not re-fixed
 * because they are exact copies of an already-fixed source.
 *
 * Cross-file by nature, so it cannot live inside fixStyle's per-file shape.
 */
function propagateMirrors(
  repoRoot: string,
  docsRoot: string,
  changedFiles: string[],
  sourceOverride: string | undefined,
): { propagated: number; filesWritten: number; refusals: string[] } {
  const changed = new Set(changedFiles);
  const index = buildDocIndex(repoRoot, docsRoot);
  const groups = buildMirrorGroups(index);

  const affected = new Map<string, MirrorGroup>();
  for (const file of changedFiles) {
    const group = groupForFile(groups, file);
    if (group && group.members.length > 1) affected.set(group.key, group);
  }
  if (affected.size === 0) return { propagated: 0, filesWritten: 0, refusals: [] };

  let propagated = 0;
  let filesWritten = 0;
  const refusals: string[] = [];

  for (const group of affected.values()) {
    const plan = planPropagation(group, changed, docsRoot, sourceOverride);
    if (plan.kind === "noop") continue;
    if (plan.kind === "refuse") {
      refusals.push(plan.message);
      continue;
    }
    for (const target of plan.targets) {
      fs.writeFileSync(path.join(repoRoot, target), plan.content, "utf8");
    }
    propagated++;
    filesWritten += plan.targets.length;
    console.log(
      `\n${stripDocsRoot(plan.source, docsRoot)} — propagated to ${plan.targets.length} mirror copy(ies):`,
    );
    for (const target of plan.targets) console.log(`  - ${stripDocsRoot(target, docsRoot)}`);
  }

  return { propagated, filesWritten, refusals };
}

async function main(): Promise<void> {
  const { base, worktree, source } = parseArgs(process.argv.slice(2));
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = findRepoRoot(path.join(scriptDir, "../../.."));
  const docsRoot = process.env.CS_DOCS_ROOT ?? "cs-docs";

  const { mdFiles } = worktree
    ? listWorktreeChangedDocs(repoRoot, docsRoot)
    : listChangedDocs(repoRoot, docsRoot, base);

  if (mdFiles.length === 0) {
    console.log("No doc files to fix.");
    return;
  }

  let totalFixes = 0;
  let filesChanged = 0;

  for (const file of mdFiles) {
    const absPath = path.join(repoRoot, file);
    let content: string;
    try {
      content = fs.readFileSync(absPath, "utf8");
    } catch {
      console.error(`  Could not read ${file} — skipping`);
      continue;
    }

    const { content: fixed, fixes } = fixStyle(content, docsRoot);

    if (fixes.length > 0 && fixed !== content) {
      fs.writeFileSync(absPath, fixed, "utf8");
      console.log(`\n${file} — ${fixes.length} fix(es) applied:`);
      for (const fix of fixes) console.log(`  - ${fix}`);
      totalFixes += fixes.length;
      filesChanged++;
    }
  }

  const mirrors = propagateMirrors(repoRoot, docsRoot, mdFiles, source);

  if (totalFixes === 0 && mirrors.propagated === 0 && mirrors.refusals.length === 0) {
    console.log("No auto-fixable issues found.");
  } else {
    const parts: string[] = [];
    if (totalFixes > 0) parts.push(`fixed ${totalFixes} issue(s) across ${filesChanged} file(s)`);
    if (mirrors.propagated > 0) {
      parts.push(
        `propagated ${mirrors.propagated} mirrored page(s) to ${mirrors.filesWritten} copy(ies)`,
      );
    }
    if (parts.length > 0) console.log(`\nAuto-${parts.join(", ")}.`);
  }

  if (mirrors.refusals.length > 0) {
    for (const message of mirrors.refusals) console.log(`\n${message}`);
    console.log(
      `\n${mirrors.refusals.length} mirrored page(s) could not be reconverged automatically.`,
    );
    // Non-zero so fix:check's `&&` stops here rather than running lint, which
    // would report the same divergence again in less detail.
    process.exit(1);
  }

  if (totalFixes > 0 || mirrors.propagated > 0) {
    console.log(
      "Run 'npm run lint' to check for remaining issues that need manual attention.",
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
