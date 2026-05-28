import { execSync } from "node:child_process";
import path from "node:path";

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
