# Contentstack docs sync

Syncs Markdown under `docs/` to Contentstack `docs_article` entries when changes merge to `main`.

## What gets written

| Field | Source |
|-------|--------|
| `title` | `[{marker}] - {heading}` from YAML front matter |
| `url` | `url` from front matter |
| `article_content` | One `article_section` modular block: `heading` + HTML `content` |

## What is not written

- `md_content`: maintained by separate internal automation
- `breadcrumb`, `related_articles`, `next_and_prev_links`, `seo`: editors manage in the CMS

Entries are matched by `url` (no Contentstack UIDs in GitHub). Creates are saved as **drafts**, and publishing stays manual in Contentstack.

## GitHub setup

**Secrets** (Settings → Secrets and variables → Actions):

| Name | Description |
|------|-------------|
| `CONTENTSTACK_API_KEY` | Stack API key |
| `CONTENTSTACK_MANAGEMENT_TOKEN` | Management token with entry CRUD + asset upload |

**Variables**:

| Name | Example |
|------|---------|
| `CONTENTSTACK_ENVIRONMENT` | `production` |

Used when a doc file is **deleted** from `main` to unpublish that entry from production (`en-us`).

## Local usage

```bash
cd tools/cs-sync
npm ci
cp .env.example .env
# Edit .env with your stack API key and management token (file is gitignored)

# Sync between two commits (same as CI)
npm run sync -- --before "$(git rev-parse HEAD~1)" --after "$(git rev-parse HEAD)"

# Lint changed docs vs main
npm run lint -- --base origin/main
```

Optional env overrides: `CS_REGION` (default `us`), `CS_CONTENT_TYPE` (default `docs_article`), `CS_DOCS_ROOT` (default `cs-docs`).

## Workflows

- `.github/workflows/contentstack-sync.yml`: push to `main` when `cs-docs/**/*.md` changes
- `.github/workflows/docs-lint.yml`: pull requests. Validates front matter and internal links
- `.github/workflows/sandbox-to-prod-promote-csdocs.yml`: **manual**, copies published Sandbox entries into Prod
- `.github/workflows/sandbox-auto-promote-csdocs.yml`: every 5 minutes, pulls direct Prod edits back into the repo as a PR

## Promoting Sandbox content to Prod

Promotion is a manual step. There is no schedule, on purpose: content is normally
edited directly in Prod, and a background job re-pushing Sandbox over Prod could
overwrite those edits before anyone noticed.

Run it after you publish an entry in Sandbox:

1. Actions → **Promote CS Docs from Sandbox to Prod (Staging env)** → Run workflow.
2. Put the entry UID(s) in `entry_uids` (comma-separated). Leaving it blank sweeps
   every published Sandbox entry, which is valid but much broader than usually intended.
3. Read the run summary. Entries land in Prod published to Staging and Development.
   Production is never published to by this automation.

### Conflicts

If someone edited an entry directly in Prod, promotion will **not** overwrite it. It
reports a conflict and moves on, so that edit is never silently lost.

Promotion knows this because it stamps a `src-hash-<hash>` tag on every entry it
writes, a fingerprint of the content it wrote. If re-fingerprinting the live Prod
entry no longer reproduces that tag, someone changed it since.

A conflict means two versions of that article now exist and a human has to pick. The
usual resolution is to let the Prod→GitHub workflow pull the Prod edit into a PR,
merge it, then let it flow back through Sandbox as normal.

Two inputs exist for the rollout and for legacy entries:

- `conflict_mode: report` writes anyway but lists what would have been blocked. For
  sizing the conflict set, not for normal use.
- `force_overwrite: true` overwrites despite a conflict. Only ever use it with
  `entry_uids` scoped to specific entries you have checked. Entries promoted before
  the fingerprint existed report as `no-baseline` and need this once to adopt them.
