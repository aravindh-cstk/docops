/**
 * Minimal read-only GitHub REST API helpers, authenticated with the default
 * GITHUB_TOKEN every Actions run already has. No new secret is needed for
 * either call site that uses this module.
 */

const API_BASE = "https://api.github.com";

function headers(): Record<string, string> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is not set — required to call the GitHub API");
  }
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "docops-cs-sync",
  };
}

function repoSlug(): string {
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) {
    throw new Error("GITHUB_REPOSITORY is not set — required to call the GitHub API");
  }
  return repo;
}

/**
 * The pull request(s) associated with a commit SHA. A push-triggered workflow
 * has no PR number in its event payload directly, this is the reliable way to
 * recover it regardless of merge strategy (merge commit, squash, or rebase).
 * Returns an empty array if the commit isn't associated with any PR (a direct
 * push to main with no PR, for example) — callers must handle that case, not
 * assume a PR always exists.
 */
export async function findPullRequestsForCommit(sha: string): Promise<Array<{ number: number; title: string }>> {
  const res = await fetch(`${API_BASE}/repos/${repoSlug()}/commits/${sha}/pulls`, {
    headers: headers(),
  });
  if (!res.ok) {
    throw new Error(`GitHub API failed looking up PRs for commit ${sha}: HTTP ${res.status}`);
  }
  const data = (await res.json()) as Array<{ number: number; title: string }>;
  return data.map((pr) => ({ number: pr.number, title: pr.title }));
}

/** The title of a specific PR, by number. */
export async function getPullRequestTitle(prNumber: number): Promise<string | null> {
  const res = await fetch(`${API_BASE}/repos/${repoSlug()}/pulls/${prNumber}`, {
    headers: headers(),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { title?: string };
  return data.title ?? null;
}
