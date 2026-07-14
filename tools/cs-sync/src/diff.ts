import { execSync } from "node:child_process";
import path from "node:path";

// Binary assets (referenced by docs via relative image paths) live alongside
// .md files under docsRoot but aren't synced themselves, so they're exempt
// from both the mdFiles and nonMdFiles ("missing .md extension") lint checks.
const ASSET_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);

function isAssetFile(filePath: string): boolean {
  return ASSET_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

export function parseArgs(argv: string[]): { base: string; worktree: boolean } {
  let base = "origin/main";
  let worktree = false;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--base" && argv[i + 1]) base = argv[++i]!;
    if (argv[i] === "--worktree") worktree = true;
  }
  return { base, worktree };
}

// Lists .md files under docsRoot with uncommitted changes — modified (tracked)
// or newly added (untracked) — rather than files changed vs. a committed base.
// Used by automated processes (e.g. the CMS→GitHub pull) that write files
// directly to the working tree and fix them up before the first commit exists.
// git quotes porcelain paths containing spaces/special characters as a
// C-style double-quoted string (e.g. `"sdk-docs/Global Fields/Global Fields.md"`).
// Strip the surrounding quotes and unescape \" and \\ so the path matches the
// real filesystem path.
function unquotePorcelainPath(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return trimmed.slice(1, -1).replace(/\\(["\\])/g, "$1");
  }
  return trimmed;
}

export function listWorktreeChangedDocs(
  repoRoot: string,
  docsRoot: string,
): { mdFiles: string[]; nonMdFiles: string[] } {
  // Do NOT trim the whole multi-line output before slicing — String.trim()
  // strips leading whitespace from the very first line only, which shifts the
  // fixed-width status-code slice for that one line and corrupts its path.
  const out = execSync(`git status --porcelain -- ${docsRoot}`, {
    cwd: repoRoot,
    encoding: "utf8",
  });

  const all = out
    .split("\n")
    .filter((line) => line.length > 3)
    .map((line) => unquotePorcelainPath(line.slice(3)))
    .filter(Boolean);

  return {
    mdFiles: all.filter((p) => p.endsWith(".md")),
    nonMdFiles: all.filter((p) => !p.endsWith(".md") && !isAssetFile(p)),
  };
}

export function listChangedDocs(
  repoRoot: string,
  docsRoot: string,
  base: string,
): { mdFiles: string[]; nonMdFiles: string[] } {
  try {
    execSync(`git merge-base ${base} HEAD`, { cwd: repoRoot, stdio: "pipe" });
    const mergeBase = execSync(`git merge-base ${base} HEAD`, {
      cwd: repoRoot,
      encoding: "utf8",
    }).trim();
    const out = execSync(
      `git diff --name-only --diff-filter=d ${mergeBase} HEAD -- ${docsRoot}`,
      { cwd: repoRoot, encoding: "utf8" },
    ).trim();
    const all = out ? out.split("\n").filter(Boolean) : [];
    return {
      mdFiles: all.filter((p) => p.endsWith(".md")),
      nonMdFiles: all.filter((p) => !p.endsWith(".md") && !isAssetFile(p)),
    };
  } catch {
    const out = execSync(`git ls-files '${docsRoot}/**/*.md'`, {
      cwd: repoRoot,
      encoding: "utf8",
    }).trim();
    return { mdFiles: out ? out.split("\n").filter(Boolean) : [], nonMdFiles: [] };
  }
}

export type ChangeType = "added" | "modified" | "deleted" | "renamed";

export interface DocChange {
  type: ChangeType;
  relativePath: string;
  oldRelativePath?: string;
}

function isDocMd(relativePath: string, docsRoot: string): boolean {
  const normalized = relativePath.replace(/\\/g, "/");
  const prefix = `${docsRoot}/`;
  return normalized.startsWith(prefix) && normalized.endsWith(".md");
}

export function getDocChanges(
  repoRoot: string,
  docsRoot: string,
  beforeSha: string,
  afterSha: string,
): DocChange[] {
  if (beforeSha === "0000000000000000000000000000000000000000") {
    return listAllDocs(repoRoot, docsRoot).map((relativePath) => ({
      type: "added" as const,
      relativePath,
    }));
  }

  const out = execSync(
    `git diff --name-status ${beforeSha} ${afterSha} -- ${docsRoot}`,
    { cwd: repoRoot, encoding: "utf8" },
  ).trim();

  if (!out) return [];

  const changes: DocChange[] = [];

  for (const line of out.split("\n")) {
    const [status, ...rest] = line.split("\t");
    const filePath = rest.join("\t");
    if (!filePath || !isDocMd(filePath, docsRoot)) continue;

    if (status === "A") {
      changes.push({ type: "added", relativePath: filePath });
    } else if (status === "M") {
      changes.push({ type: "modified", relativePath: filePath });
    } else if (status === "D") {
      changes.push({ type: "deleted", relativePath: filePath });
    } else if (status?.startsWith("R")) {
      const oldPath = rest[0];
      const newPath = rest[1];
      if (oldPath && newPath && isDocMd(newPath, docsRoot)) {
        changes.push({ type: "renamed", relativePath: newPath, oldRelativePath: oldPath });
      } else if (oldPath && isDocMd(oldPath, docsRoot)) {
        // new path is outside docsRoot — treat as a plain delete
        changes.push({ type: "deleted", relativePath: oldPath });
      }
    }
  }

  return changes;
}

function listAllDocs(repoRoot: string, docsRoot: string): string[] {
  const out = execSync(`git ls-files '${docsRoot}/**/*.md'`, {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();

  return out ? out.split("\n").filter(Boolean) : [];
}

export function readFileAtCommit(
  repoRoot: string,
  commit: string,
  relativePath: string,
): string | null {
  try {
    return execSync(`git show ${commit}:${relativePath}`, {
      cwd: repoRoot,
      encoding: "utf8",
    });
  } catch {
    return null;
  }
}

export function findRepoRoot(startDir: string): string {
  let dir = path.resolve(startDir);
  for (;;) {
    try {
      execSync("git rev-parse --show-toplevel", { cwd: dir, encoding: "utf8" });
      return execSync("git rev-parse --show-toplevel", {
        cwd: dir,
        encoding: "utf8",
      }).trim();
    } catch {
      const parent = path.dirname(dir);
      if (parent === dir) {
        return startDir;
      }
      dir = parent;
    }
  }
}
