#!/usr/bin/env node

/**
 * Turn the staged output of cms-pull-prod.ts into one pull request per editor.
 *
 * The bundling requirement drives the whole design. A writer who edits five
 * Assets pages, puts them in a Release and bulk-publishes should get one PR with
 * five file changes, not five PRs. Since the CMS gives no "this was one action"
 * signal, the grouping key is the editor: one person's changes in one sync window
 * are one review.
 *
 * This runs in the workflow instead of inline bash for two concrete reasons:
 *
 *   1. Per-editor branches need the staged files applied one bundle at a time
 *      onto a clean checkout of main. Expressing that in shell alongside
 *      everything else was where the previous version's single-PR-per-run
 *      limitation came from.
 *   2. The old step interpolated the whole PR body into `gh pr create --body`,
 *      which breaks on argv length once a bundle has enough files. Bodies are
 *      written to a file and passed with --body-file.
 *
 * Usage (needs GH_TOKEN and a git checkout with an `origin` remote):
 *   npm run prod-sync-open-prs
 *   PROD_SYNC_DRY_RUN=1 npm run prod-sync-open-prs   # print, push nothing
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import type { ChangedFile, EditorBundle, PullSummary } from "./cms-pull-prod.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOOL_ROOT = path.join(__dirname, "..");
const REPO_ROOT = path.resolve(__dirname, "../../..");
const STAGING_DIR = path.join(TOOL_ROOT, ".prod-sync-staging");
const SUMMARY_PATH = path.join(TOOL_ROOT, ".cms-pull-prod-summary.json");
const LABEL = "origin:prod-sync";
const BASE = "main";
const DOCS_ROOT_REL = "cs-docs";

/**
 * GitHub rejects a PR body over 65536 characters outright, which used to mean
 * an editor with a large backlog got no PR at all rather than a long one. Both
 * caps below exist because either one alone can be defeated: the row cap can
 * still overflow on very long file paths, and a character cap alone would cut
 * the table mid-row. MAX_BODY_CHARS leaves headroom under the hard limit.
 */
export const MAX_BODY_CHARS = 65000;
const MAX_TABLE_ROWS = 150;

const dryRun = process.env.PROD_SYNC_DRY_RUN === "1";

function run(command: string, args: string[], options: { cwd?: string; allowFailure?: boolean } = {}): string {
  try {
    return execFileSync(command, args, {
      cwd: options.cwd ?? REPO_ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    if (options.allowFailure) return "";
    const err = error as { stderr?: string; stdout?: string; message?: string };
    throw new Error(
      `${command} ${args.join(" ")} failed: ${err.stderr || err.stdout || err.message || "unknown error"}`,
    );
  }
}

function git(args: string[], options: { allowFailure?: boolean } = {}): string {
  return run("git", args, options);
}

/**
 * An editor's branch name. Deliberately carries no per-run timestamp.
 *
 * The name has to be identical across runs, because that is how a second edit
 * by the same editor finds their already-open PR and lands on it as another
 * commit instead of opening a duplicate. Stability comes from branchSlug, which
 * cms-pull-prod.ts derives from the editor's uid.
 */
export function branchFor(bundle: EditorBundle): string {
  return `cms-sync/prod-csdocs/${bundle.branchSlug}`;
}

function escapeCell(value: string): string {
  // A pipe inside a cell would split the markdown table column.
  return value.replace(/\|/g, "\\|");
}

function formatFields(file: ChangedFile): string {
  if (file.changeKind === "created") return "new page";
  if (file.changeKind === "deleted") return "file removed";
  return file.fieldsModified.length > 0 ? file.fieldsModified.join(", ") : "no field diff";
}

function navPosition(file: ChangedFile): string {
  return file.navChain.length > 0 ? file.navChain.join(" › ") : "—";
}

/** True for the synthetic bundle holding files whose entries left Production. */
export function isRemovalBundle(bundle: EditorBundle): boolean {
  return bundle.files.every((file) => file.changeKind === "deleted");
}

/**
 * The PR title.
 *
 * "CMS Edit detected by <editor>" for a person's edits. The removal bundle has
 * no editor (nobody edited anything, an entry stopped being published), so
 * naming one there would read as an accusation and would attribute a deletion
 * to whoever happened to touch the entry last.
 */
export function buildPrTitle(bundle: EditorBundle): string {
  if (isRemovalBundle(bundle)) {
    const n = bundle.files.length;
    return `CMS removal detected: ${n} ${n === 1 ? "entry" : "entries"} unpublished or removed from nav`;
  }
  return `CMS Edit detected by ${bundle.editorName}`;
}

/**
 * The PR body.
 *
 * Written to answer the reviewer's questions in order: which entry changed, what
 * changed in it, and when. The nav position is included because a Prod-created
 * page's file path is derived from it, so a reviewer needs it to judge whether
 * the file landed in the right folder.
 */
export function buildPrBody(bundle: EditorBundle, summary: PullSummary): string {
  const shown = bundle.files.slice(0, MAX_TABLE_ROWS);
  const rows = shown.map(
    (file) =>
      `| \`${escapeCell(file.filePath)}\` | \`${escapeCell(file.url || "—")}\` | ${escapeCell(
        navPosition(file),
      )} | ${file.changeKind} | ${escapeCell(formatFields(file))} | ${new Date(
        file.updatedAt,
      ).toUTCString()} |`,
  );

  const omitted = bundle.files.length - shown.length;
  if (omitted > 0) {
    rows.push(
      "",
      `_...and ${omitted} more ${omitted === 1 ? "file" : "files"}, not listed here to stay inside ` +
        `GitHub's PR description size limit. The **Files changed** tab is the complete list._`,
    );
  }

  const warnings = bundle.files
    .filter((file) => file.warning)
    .map((file) => `- \`${file.filePath}\`: ${file.warning}`);

  const removal = isRemovalBundle(bundle);

  const lines = removal
    ? [
        `## CMS removal detected in Production`,
        "",
        `${bundle.files.length} ${bundle.files.length === 1 ? "file" : "files"} no longer ` +
          `${bundle.files.length === 1 ? "has" : "have"} a matching entry that is both published to ` +
          `Production and reachable from the left navigation, so ${
            bundle.files.length === 1 ? "it is" : "they are"
          } removed here.`,
        "",
        `Only files carrying the \`uid\` frontmatter marker this sync stamps are ever eligible, so a ` +
          `hand-authored file is never at risk. **Confirm each removal is intended** before merging: ` +
          `an accidental unpublish or a nav reshuffle looks the same from here as a deliberate retirement.`,
        "",
        `### Files removed`,
      ]
    : [
        `## CMS edit detected in Production`,
        "",
        `**${bundle.editorName}** edited ${bundle.files.length} ` +
          `${bundle.files.length === 1 ? "entry" : "entries"} directly in the Production CMS. ` +
          `Each one is published to Production, present in the left navigation, and differs from the ` +
          `current file in \`cs-docs/\`.`,
        "",
        `Content that merely arrived in Production via Sandbox promotion is not here: it carries a ` +
          `matching \`src-hash\` fingerprint and is skipped, and it already has its own PR from the ` +
          `Sandbox → GitHub sync.`,
        "",
        `### Entries modified`,
      ];

  lines.push(
    "",
    `| File | CMS Entry | Nav Position | Change | Fields Modified | Modified At |`,
    `|------|-----------|--------------|--------|-----------------|-------------|`,
    ...rows,
  );

  if (warnings.length > 0) {
    lines.push(
      "",
      `### Warnings`,
      "",
      `The left navigation and the entry's own breadcrumb disagree about which product owns these ` +
        `pages. The nav position was used, since that is what readers follow, but the breadcrumb ` +
        `probably needs correcting in the CMS:`,
      "",
      ...warnings,
    );
  }

  lines.push("", `### Review notes`, "");

  if (removal) {
    lines.push(
      `- **Confirm each removal is intended.** Re-publishing the entry to Production, or putting it ` +
        `back in the left navigation, makes the file return on the next run.`,
      `- If a removal is wrong, close this PR rather than merging it.`,
    );
  } else {
    lines.push(
      `- **Check the diff carefully** and confirm nothing was unintentionally overwritten.`,
      `- These changes originated in the **Prod stack**, so the repo did not author them.`,
      `- Merging to \`main\` triggers a sync to Sandbox, creating a draft there.`,
      `- Publish that Sandbox draft to send the change back through the normal promotion path.`,
    );
  }

  lines.push(
    "",
    "---",
    `_Prod → GitHub sync, environment \`${summary.environment}\`, run ${summary.generatedAt}_`,
  );

  const body = lines.join("\n");
  if (body.length <= MAX_BODY_CHARS) return body;

  // Backstop for the case the row cap cannot cover: enough very long file paths
  // to overflow even MAX_TABLE_ROWS rows. Truncating loses the trailing review
  // notes, which is worse than a full body but far better than no PR at all.
  const notice = "\n\n_Description truncated to fit GitHub's size limit. See the **Files changed** tab._";
  return `${body.slice(0, MAX_BODY_CHARS - notice.length)}${notice}`;
}

/** Copy one bundle's staged files into the working tree, and remove its deletions. */
function applyBundle(bundle: EditorBundle): void {
  for (const file of bundle.files) {
    const target = path.join(REPO_ROOT, file.filePath);

    if (file.changeKind === "deleted") {
      if (fs.existsSync(target)) fs.rmSync(target);
      continue;
    }

    const source = path.join(STAGING_DIR, file.filePath);
    if (!fs.existsSync(source)) {
      throw new Error(
        `Staged file missing for ${file.filePath}. The manifest and .prod-sync-staging/ are out of ` +
          `step — re-run \`npm run cms-pull-prod\`.`,
      );
    }
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
  }
}

/**
 * Lint the branch and report the result as a check run.
 *
 * The check run is posted explicitly because a PR authored with GITHUB_TOKEN
 * does not trigger `pull_request` workflows, so the normal docs-lint job never
 * runs on these branches and the PR would show no status at all.
 *
 * A lint failure does not stop the PR from opening. The point of the PR is to
 * surface the Production edit for a human, and a red check with the output
 * attached is far more useful than no PR and a log line nobody reads.
 */
function lintAndReport(sha: string): boolean {
  let output: string;
  let passed: boolean;
  try {
    output = run("npm", ["run", "lint", "--", "--base", `origin/${BASE}`], { cwd: TOOL_ROOT });
    passed = true;
  } catch (error) {
    output = error instanceof Error ? error.message : String(error);
    passed = false;
  }

  console.log(output.slice(0, 4000));

  const payload = {
    name: "lint",
    head_sha: sha,
    status: "completed",
    conclusion: passed ? "success" : "failure",
    output: { title: "CS Docs lint", summary: output.slice(0, 60000) },
  };

  const payloadPath = path.join(os.tmpdir(), `prod-sync-check-${sha.slice(0, 8)}.json`);
  fs.writeFileSync(payloadPath, JSON.stringify(payload), "utf8");

  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) {
    console.log("   (no GITHUB_REPOSITORY, skipping the check run)");
    return passed;
  }

  run("gh", ["api", `repos/${repo}/check-runs`, "--input", payloadPath], { allowFailure: true });
  return passed;
}

function ensureLabel(): void {
  run(
    "gh",
    [
      "label",
      "create",
      LABEL,
      "--color",
      "B60205",
      "--description",
      "PR originated from a direct edit in the Prod CMS",
    ],
    { allowFailure: true },
  );
}

/**
 * The editor's already-open PR for this branch, or null if they have none.
 *
 * Deliberately not allowFailure: a `gh` outage returning "" would parse as "no
 * open PR" and open a duplicate, which is the exact failure this lookup exists
 * to prevent. Letting it throw puts the bundle in the failed list instead, and
 * the next run retries. No match is a normal exit 0 returning [], not an error.
 *
 * Querying only open PRs is also what recycles a branch whose PR was merged or
 * closed: it stops matching, so the next run rebuilds it from main.
 */
function findOpenPrForBranch(branch: string): { number: number; headRefName: string } | null {
  const output = run("gh", [
    "pr",
    "list",
    "--head",
    branch,
    "--state",
    "open",
    "--json",
    "number,headRefName",
    "--limit",
    "1",
  ]);
  const rows = JSON.parse(output.trim() || "[]") as Array<{ number: number; headRefName: string }>;
  return rows[0] ?? null;
}

/**
 * Refresh an existing PR's title and body after adding a commit to it.
 *
 * A bundle is always the full current diff against main, never just this run's
 * delta, so after a second edit the original body describes fewer files than
 * the PR now contains. The title matters too: the removal bundle's title counts
 * files. allowFailure because the commit is already pushed and visible by now,
 * so a stale description must not fail an otherwise successful sync.
 */
function editPr(prNumber: number, bundle: EditorBundle, summary: PullSummary): void {
  const bodyPath = path.join(os.tmpdir(), `prod-sync-body-${bundle.branchSlug}.md`);
  fs.writeFileSync(bodyPath, buildPrBody(bundle, summary), "utf8");

  run(
    "gh",
    ["pr", "edit", String(prNumber), "--title", buildPrTitle(bundle), "--body-file", bodyPath],
    { allowFailure: true },
  );
}

function openPr(bundle: EditorBundle, summary: PullSummary, branch: string): void {
  const bodyPath = path.join(os.tmpdir(), `prod-sync-body-${bundle.branchSlug}.md`);
  fs.writeFileSync(bodyPath, buildPrBody(bundle, summary), "utf8");

  const title = buildPrTitle(bundle);

  const output = run("gh", [
    "pr",
    "create",
    "--title",
    title,
    "--body-file",
    bodyPath,
    "--label",
    LABEL,
    "--base",
    BASE,
    "--head",
    branch,
  ]);
  console.log(`   ${output.trim()}`);
}

async function main(): Promise<void> {
  if (!fs.existsSync(SUMMARY_PATH)) {
    console.log("No .cms-pull-prod-summary.json — nothing to open. Run `npm run cms-pull-prod` first.");
    return;
  }

  const summary = JSON.parse(fs.readFileSync(SUMMARY_PATH, "utf8")) as PullSummary;

  if (summary.bundles.length === 0) {
    console.log("✅ No Production edits to PR.");
    return;
  }

  console.log(`📦 ${summary.bundles.length} bundle(s) to open as PRs\n`);

  if (!dryRun) {
    git(["config", "user.name", "github-actions[bot]"]);
    git(["config", "user.email", "github-actions[bot]@users.noreply.github.com"]);
    ensureLabel();
  }

  const opened: string[] = [];
  const failed: string[] = [];

  for (const bundle of summary.bundles) {
    const branch = branchFor(bundle);

    if (dryRun) {
      console.log(`\n── ${bundle.editorName} → ${branch} (${bundle.files.length} file(s))`);
      for (const file of bundle.files) console.log(`   ${file.changeKind} ${file.filePath}`);
      console.log(`   title: ${buildPrTitle(bundle)}`);
      continue;
    }

    // Looked up before the checkout because it decides what to branch from.
    const existingPr = findOpenPrForBranch(branch);
    console.log(
      `\n── ${bundle.editorName} → ${branch} (${bundle.files.length} file(s))` +
        (existingPr ? ` [reusing PR #${existingPr.number}]` : ""),
    );

    try {
      if (existingPr) {
        // The branch is not a local ref yet: the workflow's checkout only
        // fetches the ref that triggered it. Continuing from the PR's own tip
        // is what makes this run land as another commit on it.
        git(["fetch", "origin", branch]);
        git(["checkout", "-B", branch, `origin/${branch}`]);
      } else {
        // A bundle with no open PR starts from a clean main so its PR holds
        // exactly one editor's changes and never inherits someone else's.
        git(["checkout", "-B", branch, `origin/${BASE}`]);
      }

      applyBundle(bundle);

      git(["add", "--all", DOCS_ROOT_REL]);
      const staged = git(["diff", "--cached", "--name-only"]).trim();
      if (!staged) {
        console.log("   nothing changed on disk for this bundle, skipped");
        continue;
      }

      git([
        "commit",
        "-m",
        `chore: sync CS doc changes from Contentstack CMS (Prod, ${bundle.editorName})`,
      ]);

      // Push before the check run: the Checks API requires the SHA to exist on
      // GitHub's servers, not just locally on the runner.
      //
      // Only the fresh path forces. On an open PR the tip was just fetched, so
      // the commit is a fast-forward, and a plain push failing is the signal
      // that someone pushed a manual fixup to the branch. Better to fail the
      // bundle and report it than to force over a human's work.
      git(existingPr ? ["push", "origin", branch] : ["push", "--force", "origin", branch]);
      const sha = git(["rev-parse", "HEAD"]).trim();

      const passed = lintAndReport(sha);
      const lintNote = `lint ${passed ? "passed" : "FAILED"}`;

      if (existingPr) {
        editPr(existingPr.number, bundle, summary);
        opened.push(
          `${bundle.editorName} (${bundle.files.length} file(s), added to PR #${existingPr.number}, ${lintNote})`,
        );
      } else {
        openPr(bundle, summary, branch);
        opened.push(`${bundle.editorName} (${bundle.files.length} file(s), ${lintNote})`);
      }
    } catch (error) {
      // One editor's bundle failing must not cost every other editor their PR.
      const message = error instanceof Error ? error.message : String(error);
      console.error(`   ❌ ${bundle.editorName}: ${message}`);
      failed.push(`${bundle.editorName}: ${message}`);
    } finally {
      git(["reset", "--hard", `origin/${BASE}`], { allowFailure: true });
      git(["checkout", BASE], { allowFailure: true });
    }
  }

  console.log("");
  for (const line of opened) console.log(`✅ opened PR for ${line}`);
  for (const line of failed) console.log(`❌ ${line}`);

  // Exit non-zero if any bundle failed, so the workflow surfaces it, but only
  // after every other bundle has had its chance.
  if (failed.length > 0) process.exit(1);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  main().catch((error) => {
    console.error("❌ Failed to open Prod sync PRs:", error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
