# Docs workflow rebuild: build-by-build briefs

**Status:** planned, not started
**Scope:** `cs-docs` only. `api-docs` and `sdk-docs` keep their existing pipelines.
**Target repo:** build and prove in `aravindh-cstk/docops`, then port to `contentstack/contentstack-docs`.

## How to use this file

Each build below is a self-contained brief. Copy one section into a fresh agent session and it has everything it needs: the goal, the code to reuse, the decisions already made, and how to prove it works.

Run the builds in order. Each one ships and gets tested before the next starts.

---

## Where this is going

Today the pipeline routes everything through a Sandbox Contentstack stack. Writers merge to `main`, a workflow creates drafts in Sandbox, a human publishes them there, and a promotion step copies them into the csdocs stack before someone manually deploys a Release to Production.

The new model removes the Sandbox leg:

1. GitHub connects directly to the csdocs stack.
2. Per-product branches named `stag-{product}` isolate work. Merging a PR into one creates or updates entries in csdocs, publishes them to staging and development, links them into the left nav, and bundles them into a Release.
3. A PR from `stag-{product}` into `main` opens a Jira QA ticket and notifies QA and developer Slack channels.
4. Merging to `main` deploys that Release to Production.
5. Linting moves to the external `doc-standards` repo.

## Naming convention

"Prod" is ambiguous, because it can mean a stack or an environment, and there are three stacks. Name things by stack, using `<source>-to-<target>` where each side is `gh` or a stack name.

| Old | New |
|---|---|
| `git-to-sandbox-sync.ts` | `gh-to-csdocs.ts` |
| `cms-pull-prod.ts` | `csdocs-to-gh.ts` |
| `gh-to-sandbox-sync-csdocs.yml` | `gh-to-csdocs.yml` |
| `sandbox-auto-promote-csdocs.yml` | `csdocs-to-gh.yml` |

Environment words stay for actual environments. `PROMOTION_ENVIRONMENTS = ["staging", "development"]` is correct as written.

## A Publish Rule gates the Production environment

Found while fixing a broken nav reference, and it changes what Build 6 can do.

Publishing Rule `blte4575c7c38862a50` is active on the csdocs stack:

| Field | Value |
|---|---|
| environment | `bltfe8376c13fe85b9c` (**production only**) |
| content_types | `$all` |
| locales | `en-us` |
| branches | `main` |
| approvers | 6 named users |
| `disable_approver_publishing` | false |

The 6 approvers: Romy Dias, Ankita Behere, Aravindh Somasundaram, Azharuddin Shaikh, Dhaval Majithia, and `blta3007b105b17e5d8` (absent from `cms-user-index.json`, so add it).

Confirmed by direct API call: a management token publishing to production returns

```
HTTP 422
Failed to publish entry as the workflow stage requirements specified by
the Publish Rule (blte4575c7c38862a50) have not been met.
```

The same token publishing the same entry to staging and development returns HTTP 201.

**Consequences:**

- **Build 4 is unaffected.** It publishes to staging and development, which the rule does not cover.
- **Build 6 cannot publish to Production with a token.** "Merging to `main` deploys the Release to Production" has to become "merging to `main` submits the Release for approval", and one of the 6 approvers releases it. Design Build 6 around a publish request plus a Slack notification to the approvers. Before writing that code, test whether a Release deploy hits the same rule as an entry publish, because the two paths may behave differently and the design depends on which.
- **`csdocs-to-gh` is unaffected**, since it only reads.

## Decisions already made

Do not relitigate these. They are settled.

| Topic | Decision |
|---|---|
| Credentials | `CONTENTSTACK_DOCS_STACK_API_KEY` and `CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN` everywhere |
| Writer flow | Feature branch, PR into `stag-{product}`, writer self-merges |
| Sync trigger | A PR merged into `stag-*`, never a plain push |
| Direct pushes | Rejected by a ruleset, converted to a PR by a helper |
| Branch rollout | All 13 `stag-*` branches created up front |
| Cross-listed docs | One file per entry, in the folder its breadcrumb names |
| Doc templates | A `template-<type>` tag on the existing `tags` field |
| Lint versioning | Track `doc-standards` `main`, always latest |
| Lint scope | All rules live in `doc-standards`. DocOps keeps a small script and zero rules. |
| QA gate | A required status check first, a CODEOWNERS ruleset second |

## The 13 products

From `tools/cs-sync/src/lib/product-registry.ts`. Each `slug` is a `cs-docs/<slug>/` folder and a `stag-<slug>` branch.

`administration`, `agent-os`, `analytics`, `assets`, `brand-kit`, `developer-hub`, `developer-resources`, `headless-cms`, `launch`, `lytics-cdp`, `marketplace`, `personalize`, `studio`

---

# Build 0: restore the corrupted working tree

**Blocks everything. Do this first.**

## The problem

`git diff --stat -- cs-docs/` reports 200 files changed and 35,342 deletions. The changed files have lost their bodies and descriptions, and their titles carry an unstripped `[Marker] - ` prefix. For example:

```
cs-docs/administration/security-configuration/validations.md
  HEAD:      title: "Validations", a description, 100 lines of body
  worktree:  title: "[Security Management] - Validations", no description, no body
```

Those are the three defects `lib/entry-to-markdown.ts` exists to prevent, so this is output from a broken run, not authored work. The committed versions are correct.

## What to do

1. Confirm the backup exists before touching anything. A patch of the current state is at `<scratchpad>/build0-backup/cs-docs-worktree.patch` and restores with `git apply`.
2. `git restore --source=HEAD --staged --worktree -- cs-docs/`
3. Leave everything outside `cs-docs/` exactly as it is. `api-docs` and `sdk-docs` are out of scope.
4. Branch from `origin/main`. The current branch sits 13 commits ahead.

## Acceptance

`git status --porcelain cs-docs/` is empty, and a spot check of five previously-modified files shows full frontmatter and body.

---

# Build 1: make `main` an exact mirror of the csdocs left navigation

**Standalone. Tested and reviewed before Build 2 starts.** Everything else assumes this is correct.

## Goal

Every entry published to the Production environment and reachable from the left navigation has **exactly one** `.md` file in `cs-docs/`, in the folder its breadcrumb names. Nothing else lives under `cs-docs/`.

## Scale

Measured against a fresh `npm run nav-tree` crawl of Production. The repo is much further behind than an older snapshot suggested, so plan for a real migration rather than a touch-up.

| | Count |
|---|---|
| Nav leaves | 2,106 |
| Unique entries behind them | 1,950 |
| Article-bearing entries wanted as files | roughly 1,930 |
| Plain article files on disk | 1,597 |
| **Article files missing** | **roughly 330** |
| FAQ files on disk, inside 19 containers | 1,490 |
| Link stubs on disk, all to be deleted | 87 |
| Total `.md` on disk | 3,174 |

So the run creates roughly 330 files, deletes 87 stubs plus a smaller number of duplicates, and rewrites the rest. Set the deletion ceiling from the dry run, not from this table.

Two nav-shape numbers explain most of the diff:

- `article_via_url` leaves (linked by url slug on a childless `links_2026` node rather than by entry reference) now number 358, against 60 in the older snapshot. The rise comes from both genuine nav growth and better detection in the current code. All 358 are real pages and all need files.
- `duplicatedEntries` is 71, down from 100. These are the cross-listed entries that collapse to one file each.

Re-run `nav-tree` immediately before the reconcile. These numbers move.

## Nav issues found in the fresh crawl

38 issues, in 5 kinds. One of them stops the run under the safety rails below.

| Kind | Count | Meaning |
|---|---|---|
| `LINK_HAS_URL_AND_CHILDREN` | 30 | A section landing page carrying both a url and children. `nav-tree` recurses and treats it as a folder, which is correct. All 30 are Lytics CDP. Benign, but confirm whether those landing pages need files of their own. |
| `EMPTY_HEADER` | 5 | A `nav_section` with a blank header, in Launch and Analytics. Those links land directly under `cs-docs/<product>/` with no section folder. |
| `MISSING_ENTRY` | 0 | **Fixed on 2026-09-14.** See below. |
| `EXCLUDED_CHAIN` | 1 | `headless-cms/developer-tools-delivery/cli`. **This was an error**, since corrected. The position is a deliberate cross-listing and is now mirrored. `EXCLUDED_CHAINS` is empty, so a fresh crawl reports 0 here. |
| `DEPRECATED_EXCLUDED` | 1 | A deprecated twin on `/administration/supported-identity-providers`. Expected. |

`region_dropdown` was fetched (1 entry exists in the stack) but appears as no nav leaf, so the unhandled-leaf-type gap stays latent rather than active. Keep the fail-loud check anyway.

**No safety-rail blocker remains.** A fresh crawl reports 37 issues in 4 kinds, none of them `MISSING_ENTRY`, `CYCLE`, `UNEXPECTED_LEAF_TYPE`, or `UNEXPECTED_NODE_TYPE`. The reconcile can proceed.

## The dangling Assets nav link, fixed 2026-09-14

The first crawl reported one `MISSING_ENTRY`: `docs_article/bltbe7f8b21aabc96c4`, referenced by the nav at `assets/manage-spaces-and-workspaces` but absent from every content type in the stack. All 5 real pages in that section were live and present in the repo, so the reference was a leftover from a deleted entry rather than lost content.

Fixed through the Content Management API (CMA):

1. Backed up `product_navigation/bltf1afc727b1dd9ea9` at version 29.
2. Removed `nav_section[1].links[5]`, after asserting the payload dropped exactly one link and left the other 53 untouched.
3. `PUT` succeeded, entry now at version 30 with 5 links in that section.
4. Published to staging and development. **Production publishing was refused by the Publish Rule described above.**

Approved and published to production the same day. All three environments now serve version 30 with the dead link removed.

**Worth understanding for the reconcile:** `nav-tree.ts` reads the latest version of nav structure entries rather than the published one, which is why the crawl cleared immediately even though Production is still on version 29. Article leaves are a separate matter, since those are gated on `isPublishedToProd`.

## The CLI content, mirrored at two nav positions, 2026-09-14

**Already done, ahead of Build 1.** Build 1 should find both CLI folders already correct and plan no action on them. The rest of this section records what happened, including a wrong turn that is worth recording so nobody repeats it.

There is exactly **one** CLI container node, `links_2026/bltd697fa2bc1e38b53`, titled plainly "CLI". No "CLI Test" node exists anywhere in `links_2026` (confirmed by scanning the full content type for any title containing "cli"). This one node holds the 3 version buckets, 94 leaves total (12 under `version-0-x-x`, 41 under `version-1-x-x`, 41 under `version-2-x-x`), over 86 unique entries.

That single node is referenced from **two** nav positions, and **both are intentional**:

1. `developer-resources/overview/cli`
2. `headless-cms/developer-tools-delivery/cli`

Readers look for the command line interface docs from either product, so the navigation lists the same subtree in both places. The docs owner confirmed this on 2026-09-14.

### The wrong turn, and the correction

The original `EXCLUDED_CHAINS` comment in `nav-shared.ts` guessed that the Headless CMS position was a leftover from a reorg, and put `headless-cms/developer-tools-delivery/cli` into the exclusion set so the crawl would not generate the same 94 leaves twice. Acting on that guess, the repo content was moved out of Headless CMS and into Developer Resources only.

That was wrong on both counts. The position is deliberate, so the content belongs in both places and the exclusion was hiding a real subtree from every crawl.

The correction, applied in the same commit as this note:

- `EXCLUDED_CHAINS` is now empty, and the comment above it says why adding to it needs owner confirmation first.
- `cs-docs/headless-cms/developer-tools-delivery/cli/` holds the same 83 files as `cs-docs/developer-resources/overview/cli/`, verified byte for byte identical.

**The lesson for Build 1.** A deliberate cross-listing and a stale reference look exactly alike in the nav data. Both appear as one node reached from two chains. Nothing in the CMS distinguishes them. So the reconcile must never resolve that case on its own: it reports the duplicate positions and a human says which kind it is.

### What this means for decision D5

D5 in the plan says a cross-listed entry gets one file, in the folder its breadcrumb names, which removes roughly 220 duplicate files. The CLI case contradicts that, because here the same subtree is deliberately carried at two paths.

So D5 needs a re-decision before Build 1 writes anything. The two options:

| Option | Repo holds | Cost |
|---|---|---|
| Mirror nav positions | One file per position, so cross-listed pages appear twice | The `uid:` index is not unique, so the incremental sync cannot resolve a file to a single entry |
| Mirror entries (D5 as written) | One file per entry, in its breadcrumb folder | The repo stops matching the navigation, which is the rule the owner set |

The owner has stated that `cs-docs` mirrors the left navigation exactly. That points at the first option, and it means the sync must key on path plus uid rather than uid alone. Resolve this before Build 1 starts.

### The orphaned page

`create-custom-cli-commands.md` was removed from all 3 of its paths. Its entry is real and live: `docs_article/blt18f5edee45f9d6c2`, "Create Custom CLI Commands", **published to production at version 13**, at url `/headless-cms/create-custom-cli-commands`.

No nav leaf anywhere references that url, so there is no path for it in a nav-derived tree. It is one of the 44 `orphanPublished` entries the crawl counts. Three answers are possible and all need a human: relink it in the nav, unpublish it, or leave the entry standing with no repo file. Pending with the owner.

### The 12 unpopulated v2 positions

The nav lists 94 CLI leaves. Each CLI folder holds 83 files. The 12 missing positions are almost all under `version-2-x-x`, where the nav points a v2 chain at the same url as its v1 twin. Two more, `asset-scanning-in-cli-v1` and `create-custom-cli-plugins-v1`, have no file at any path.

These were already missing before the move, confirmed against `HEAD`. Build 1 fills them from the CMS.

## Reuse, do not rewrite

| File | What it provides |
|---|---|
| `src/nav-tree.ts` | Full nav crawl, writes `.nav-tree.json` with `products[]`, `leaves[]`, `entryPaths{uid to chains}`, `orphans[]` |
| `src/nav-apply.ts` | The existing bulk writer. Roughly 70% of what is needed. Read it in full before writing anything. |
| `src/lib/nav-shared.ts` | `articleFileName()`, `slugify()`, `EXCLUDED_CHAINS`, `DEPRECATED_UIDS`, `LEAF_CONTENT_TYPES` |
| `src/lib/entry-to-markdown.ts` | The single entry-to-markdown converter. Do not write another one. |
| `src/doc-index.ts` | `buildDocIndex()`, `canonicalizeUrl()`, `resolveEntry()` |
| `src/lib/environment-index.ts` | `resolveEnvironment()` and `isPublishedTo()` |
| `src/lib/content-type-mappings/docs-article.ts` | `resolveProductSlugFromBreadcrumb()`, which resolves the canonical folder |
| `src/nav-audit.ts` | Existing read-only CSV reporter. Match its shape. |

## What `nav-apply.ts` already does

Read this before deciding anything is missing. It writes every leaf from the CMS idempotently, uses `git mv` so history follows a move, deletes what the nav does not claim, prunes empty directories, and orders writes before deletes on purpose (two FAQ containers have no files on disk, so delete-first would remove a target before its replacement existed). It has `--product`, `--all`, `--orphans`, `--cleanup`, and `--dry-run`.

## The gaps to close

1. **Turn on `uid:` and `tags:` stamping.** `buildArticle()` at `nav-apply.ts:224` passes `stampUid: false` and `includeTags: false`. Zero of the 3,168 files carry `uid:` today. Both must change, in one commit.
   - `uid:` is the ownership marker. The incremental sync only ever deletes files carrying it, so without it Build 3 can never delete anything.
   - `tags:` carries the `template-<type>` tag that Build 2 needs.
   - The frontmatter schema in `parser.ts` is not strict, so both keys pass lint.
2. **One file per entry, not per nav position.** `nav-tree.ts:395` builds `entryPaths[uid]` as an array of chains, so a cross-listed page (the Studio SDK doc listed under Developer Resources, for example) is one entry at two nav positions. Today that writes two identical files sharing a url and a uid. Write one, in the folder `resolveProductSlugFromBreadcrumb()` names. This removes roughly 120 files and makes the uid index unique.
3. **Delete the 87 `doc_type: link` stubs.** `buildStub()` generates the entire file and its body is one line. No CMS content, and `docTypeMapsToDocsArticle()` excludes them from sync. They exist only to show a nav position.
4. **Retry before treating an entry as empty.** When `entryToMarkdown()` returns null, refetch with a single-entry GET rather than the bulk list, because the list endpoint stubs JSON RTE fields (this is why FAQ containers already use `fetchEntry()`). If still empty, try the latest version and report the discrepancy. Only then is the file a deletion candidate, and it goes to quarantine rather than being deleted.
5. **Unify credentials on `CONTENTSTACK_DOCS_STACK_*`.** Add the GitHub secrets and update the roughly 6 workflows passing `secrets.PROD_CSDOCS_STACK_*`. Keep the old names readable as a fallback for one release, so a missed workflow raises a credential error instead of resolving to nothing.
6. **Separate planning from application.** `nav-apply.ts` interleaves fetch, write, and delete per product, so the complete intended end state never exists as reviewable data. Split into `lib/nav-desired-tree.ts` (pure), `lib/tree-diff.ts` (pure), and `nav-reconcile.ts` (the only writer).
7. **Commit moves separately from content.** Commit A does every `git mv` with original bytes, so rename similarity is 100% and history survives. Commit B applies creates, updates, and deletes.
8. **Widen move detection.** Today it matches on url only. Try, in order: `uid:`, canonical url, body hash (catches a url change plus a move), same-product basename.
9. **Fix the environment comparison.** `nav-apply.ts:128` compares against a hardcoded `PRODUCTION_ENV_UID`. Use `resolveEnvironment()`. This is the exact bug class `environment-index.ts` documents.
10. **Scan all files, not just `.md`.** There are 4 committed PNGs under `developer-resources/contentstack-mcp/assets/` that the current delete pass cannot see.
11. **Do not run `--orphans`.** It writes into the gitignored `cs-docs/orphan-docs/` and `git mv`s tracked files into an ignored folder, which is a delete in disguise.

## Unmatched files: never auto-delete

Try the four match tiers above. Anything still unmatched goes to quarantine in the report, with the reason each tier failed and the near-misses considered. Three situations need different answers, and only a human can tell them apart:

| Situation | Action |
|---|---|
| Hand-authored, never in the CMS | Delete, or push to CMS first |
| Entry deleted or unpublished | Delete |
| Match failed but the page is real | **Fix the matcher.** Do not delete. |

The third is why nothing auto-deletes on the first run. A silent wrong deletion looks exactly like a correct one.

## Safety rails

- `--dry-run` is the **default**. `--apply` is required to write.
- Abort preconditions: `git status --porcelain cs-docs/` must be empty, both credentials present and resolving to the same stack, and a `pre-nav-reconcile-<ISO>` tag created. Print the restore command as the first line of output.
- Abort floors after fetching: exactly 13 products, at least 1,500 leaves, `navNodeCount` at or above `MIN_EXPECTED_NAV_NODES`, and no `MISSING_ENTRY`, `CYCLE`, or `UNEXPECTED_LEAF_TYPE` issues.
- Abort ceilings after diffing: a deletion cap that must be raised by passing the exact computed number, a per-product cap of 20% loss, and a per-FAQ-container cap of 50%.
- Recovery is always `git reset --hard <preRunSha> && git clean -fd cs-docs`.
- After applying, re-run the planner against the same snapshot. Any action other than `unchanged` means the applier and planner disagree.

## The review report

Write `tools/cs-sync/nav-reconcile-report.md` in both dry-run and apply modes, before any mutation. This is the review artifact, in place of a PR. It contains:

- A summary table of create, update, move, delete, quarantine, and unchanged counts.
- **Quarantined files**, with why each match tier failed.
- **Planned deletions**, in full, each with its url and last-known entry.
- **Collapsed cross-listings**, showing the entry, its nav positions, the canonical folder chosen, and the duplicate paths removed.
- **Ambiguities**: an entry whose breadcrumb product is not among its nav chains, or that is still empty after the retry.

The loop is: dry-run, read the report, get fixes from the human, re-run. Nothing writes until the report is clean or the human has approved what remains.

## Verification

`npm run nav-verify`, which **refetches from Production independently** rather than reusing the reconcile snapshot. That independence is the point.

| Check | Pass criterion |
|---|---|
| Path sets, both directions | 0 differences |
| Byte equality per file | 0 mismatches |
| Per-product file count against nav leaf count | every row matches |
| `resolveEntry()` for every leaf uid | 0 unmatched, 0 ambiguous |
| `frontMatterSchema` over every file, then `npm run lint` | clean |
| `git diff -M50%` rename count | equals the manifest move count |
| Live `HEAD` on 25 random urls | all 200 |
| Two dry-runs on one snapshot | byte-identical reports |
| A dry-run after the apply | 0 non-`unchanged` actions |

Byte equality plus idempotence together are the actual proof.

**Human spot check: 10 docs from each of the 13 products, 130 total.** Weight the sample toward `lytics-cdp` and `developer-resources` (folder and url namespaces disagree by design), `agent-os` and `marketplace` (two breadcrumb variants each), FAQ container files, and anything that came through as a move.

**Rehearse in a scratch clone** against real Production before touching the real repo. Diff the scratch manifest against the real dry-run manifest.

## Decisions still open

Encode each answer as a named constant with a comment, never as an omission from a list.

- 19 nav leaves are not published to Production (12 CLI v2 pages, 4 sample apps, 2 Launch pages, 1 test fixture). Recommendation: omit and report, with an explicit allow-list. Separately ask why 19 nav positions point at unpublished pages, because that is a live 404 surface.
- `cs-docs/README.md` is hand-authored and stale.
- `mcp-profile-hub.md` plus 4 PNGs were merged manually and are not in the CMS.
- `EXCLUDED_CHAINS` and `DEPRECATED_UIDS` in `nav-shared.ts` are hardcoded editorial overrides. Re-confirm with the owner.
- Direct push to `main` skips `docs-lint.yml`, which only fires on `pull_request`. Run `npm run lint` locally as part of verification.

Known and accepted: locale is hardcoded `en-us`, and images stay as remote URLs, so this is a text mirror.

---

# Build 2: replace the linter with a delegator to `doc-standards`

**Prerequisite:** Build 1.

## Goal

DocOps holds **zero lint rules for `cs-docs`**. One small script fetches `github.com/aravindh-cstk/doc-standards` and runs its CLIs.

## The external repo

- **Zero external dependencies.** Every `require()` is a Node builtin. No `npm install` needed.
- No root `package.json`. `npm install github:...` is therefore impossible, not merely awkward.
- No tags. Tracking `main` is the decision, so no pin file.
- `scripts/lint/sweep-docs.js <dir-or-file>... [--tiers=] [--format=json]`, exit 1 on errors. `collectDocs` accepts file targets, which is how changed-files scoping works.
- `scripts/lint/lint-doc.js <file> [--type=]`, `scripts/lint/check-links.js`, `scripts/fix/` with 10 autofixers.

## The number that drives the sequence

Measured against the real corpus: `cs-docs` produces **6,283 tier-1 errors across 3,168 files, and only 53% of files are clean**. Top rules: em-dash 1,282, acronym-first-use 783, anthropomorphism 577, no-italics 527, banned-phrases 519, no-emoji 507.

A blocking cutover on day one stops every merge in the repo. That is why the sequence below starts advisory.

## Two traps

1. **Every DocOps file currently classifies as `internal` by accident.** `lib/corpus-class.js` computes its workspace root from its own checkout location, so no DocOps path matches a built-in pattern and everything falls to the `default: "internal"` class, which happens to exempt the frontmatter checks. Set `DOC_STANDARDS_CORPUS_CLASSES` explicitly to `tools/doc-standards/cs-docs.classes.json`, declaring its own `default`.
2. **Never run `classify:apply`.** The upstream setup guide instructs you to run it, and it writes `doc_type:` across the corpus. In DocOps `doc_type` is the CMS content-type router, so that would rewrite 1,582 files and break the sync. Put this warning at the top of the lint script.

## Scope: cs-docs only

`tools/sdk-sync` and `tools/migration` both run `CS_DOCS_ROOT=<root> tsx ../cs-sync/src/lint.ts`. So **do not delete the old linter.** It stays, serving `sdk-docs` and `api-docs` unchanged. Only `CS_DOCS_ROOT=cs-docs` routes to the new path.

## The 7 checks to contribute upstream

`doc-standards` covers none of the CMS-sync correctness gates, and they are not optional: if they stop running the sync breaks. Write them as new checks in `doc-standards`, one PR each, before removing the DocOps versions.

| Check | Notes |
|---|---|
| Frontmatter schema with a configurable product vocabulary | `front-matter.js` already does required keys. Add value validation and the `doc_type: link` exemption. Make the vocabulary project config, following the `DOC_STANDARDS_CORPUS_CLASSES` precedent. |
| H1 equal to frontmatter `title` | Trivial |
| `description` length 120 to 165 | Trivial |
| Local image existence and alt text | Absorbs today's `checkImages` |
| Resolvable internal links | `check-links.js` already resolves against the filesystem. Add the urlPrefix-to-file mapping as config. |
| Duplicate urls | The only one needing corpus-wide state. Build 1 removes every existing duplicate, so this guards against new ones. |
| HTML info-panel classes | `<p class="note\|tip\|warning\|add-resource">`. Upstream `callout-taxonomy.js` expects markdown blockquotes, so this needs its own check. |

**Cannot move:** the `.md` extension rule fires on non-markdown files, and `collectDocs` only yields `.md`. Three lines. Keep inline or drop.

## Document templates

The two `doc_type` fields measure different things and are not rival vocabularies:

| | DocOps `doc_type` | doc-standards `doc_type` |
|---|---|---|
| Answers | Which CMS content type? | Which template? |
| Values | `faq`, `link`, `sample-app`, absent | `conceptual-guide`, `how-to-guide`, `migration-guide`, ... |
| Changing it | Breaks the sync | Changes which structure rules apply |

Roughly 1,586 files have no `doc_type`, meaning "this is a `docs_article`". Inside that one content type live CRUD docs, feature guides, migration guides, and getting-started pages, and `doc-standards` has a different template for each. That is the value on offer.

**Use a `template-<type>` tag** on the existing `tags` field, for example `template-how-to-guide`. No CMS schema change, and it is already how this pipeline carries per-entry metadata (`product-`, `nav-subsection-`, `pr-`, `src-hash-`).

Verified: `entryToMarkdown()` writes `tags:` from `authoredTags()`, which strips only the automation prefixes, so `template-*` survives into frontmatter. `diffMarkdownFields()` already tracks tags, so a template change produces a real diff.

Three rules:
1. Do **not** add `template-` to `AUTOMATION_TAG_PREFIXES`, or it gets stripped and the lint script cannot read it.
2. Validate against upstream `VALID_TYPES`. Unknown values, or two `template-` tags on one entry, go to the report.
3. Group changed files by tag and make one `sweep-docs.js` call per group, since `--type` is one value per run.

Files with no template fall back to no `--type` with structure rules exempted, so adoption is progressive.

## Sequence

- **Phase 0, advisory.** `docs-standards-advisory.yml` with `continue-on-error: true` and a job name never made required. Nothing merges differently. Learn the real false-positive set here.
- **Phase 1, tune exempt lists.** Config-only PRs. Start with the two upstream bugs that emit at tier 1 (`C2-04`, `C2-11`, documented in the upstream README) and the CLI family, which misfires 411 times because `isCliDoc()` matches any title containing "cli".
- **Phase 2, contribute the 7 checks upstream.** The bulk of the work, in the other repo.
- **Phase 3, flip cs-docs over.** Route `CS_DOCS_ROOT=cs-docs` to the new script. Remove the advisory workflow.
- **Phase 4, bot PRs.** `DOC_STANDARDS_ENFORCE=0` at job level on the cs-docs bot-PR sites, so a large CMS pull does not fail the required check on pre-existing debt.
- **Phase 5, clean the corpus.** One rule per PR, highest volume first.

**"One rule per PR" applies only to the corpus cleanup, never to writing docs.** Five new Studio docs is one branch and one PR.

## Do not break

`"lint"` is a hardcoded check-run name in four places and is almost certainly a required check on `main`. Do not rename it, and do not rename the job or workflow in `docs-lint.yml` or `sdk-docs-lint.yml`, because those check names derive from job and workflow names.

## Verification

Run old and new linters over the same changed-file set and diff the findings. Confirm the required `lint` check still reports on a bot-authored PR. Confirm `sdk-docs` and `api-docs` lint unchanged.

---

# Build 3: connect GitHub to csdocs and auto-commit CMS edits to `main`

**Prerequisite:** Build 1.

## Goal

Retire the Sandbox leg for `cs-docs`. An edit made directly in the csdocs CMS lands on `main` with no PR, so GitHub never drifts from the CMS.

## Work

1. **Rename `cms-pull-prod.ts` to `csdocs-to-gh.ts`**, and `sandbox-auto-promote-csdocs.yml` to `csdocs-to-gh.yml`. The logic stays. It already gates on all four conditions: published to Production, reachable from the nav, not an echo (the `src-hash` fingerprint), and content actually differs. The current workflow name says "sandbox promote" while the workflow runs the Prod-to-GitHub pull, so the name states the opposite of what the file does.
2. Replace the PR step with a direct commit to `main`. Today it stages into `.prod-sync-staging/` and `prod-sync-open-prs.ts` opens one PR per editor.
3. **Keep `prod-sync-open-prs.ts` and its workflow step, commented out.** This is an explicit requirement. It is the fallback until the design settles.
4. Move the csdocs Sandbox workflows to `.github/workflows/archived/`: `gh-to-sandbox-sync-csdocs.yml`, `cms-to-github-csdocs.yml`, `sandbox-to-prod-promote-csdocs.yml`.
5. **Give the CMS-sync bot a ruleset bypass on `main`.** Build 5 adds a ruleset requiring a PR, and this workflow commits without one by design. Without the bypass the push is rejected with no alert raised, and a sync that stopped running looks exactly like a CMS with no edits.

## Echo-loop check

Build 4 pushes GitHub into csdocs and Build 3 pulls csdocs back into GitHub. The `src-hash-<hash>` fingerprint test is what stops a loop. Verify it holds under direct commit, because the old path had a PR merge in between that changed the timing.

## Verification

Edit an entry in the csdocs CMS. Confirm the commit lands on `main` with no PR and the content matches. Confirm a second cron run makes no further commit.

---

# Build 4: `stag-{product}` branches and the GitHub-to-csdocs sync

**Prerequisite:** Builds 1 and 3.

## Goal

Merging a PR into `stag-{product}` creates or updates that product's entries in csdocs, publishes them to staging and development, links them into the left nav, and bundles them into a Release.

## Branches and rules

Create all 13 `stag-*` branches. Prove the full path on `stag-studio`, from feature-branch PR through to a deployed Release, before the rest go to the team.

| Branch | PR required? | Approvals required? | Bypass |
|---|---|---|---|
| `stag-*` | Yes | **0** | backsync bot |
| `main` | Yes | 1, from QA | CMS-sync bot |

Self-approval means **zero required approvals**, not "no PR". Requiring a PR is what blocks direct pushes. Requiring approvals is what would break self-merge. Keep those separate.

## The sync trigger

**`pull_request: closed` with `merged == true` and a base of `stag-*`.** Not `push`.

A branch changes for two different reasons and only one is real work:

| How `stag-assets` changed | Sync? |
|---|---|
| A writer's feature-branch PR merged in | **Yes** |
| `main` backsynced into it | **No** |

The backsync is a direct push by the bot, so it never matches the trigger. This is better than filtering by product folder, because after `stag-assets` merges to `main` the next backsync carries **Assets** files back, and a folder filter would let those through and re-push entries already in the CMS.

Two further gains: the PR number arrives in the event (so `createReleaseForPromotion()` gets it directly), and the change set is exactly `GET /repos/{owner}/{repo}/pulls/{n}/files`, which is what the reviewer approved.

Keep a product-folder filter as a second layer: a `stag-{product}` branch only syncs `cs-docs/<slug>/**`.

## Direct pushes are rejected

Three layers:
1. **The `stag-*` ruleset rejects the push.** PR required, zero approvals.
2. **A pre-push hook** at `.githooks/pre-push`, enabled by `git config core.hooksPath .githooks` in the repo setup step. Refuses the push, explains why, prints the fix.
3. **`npm run docs:pr`** turns the writer's local commits into a branch and a PR. This is what the hook tells them to run.

## Work

1. New `tools/cs-sync/src/gh-to-csdocs.ts`. Reuse `lib/sandbox-sync-engine.ts` `runSync()`, which already handles FAQ container rebuilds, image upload to Assets, and the H1-equals-title check. One change: it takes `beforeSha`/`afterSha` and computes a diff, and it needs to accept an explicit file list instead.
2. **Breadcrumb fix.** `buildEntryPayload()` hardcodes `config.sandboxBreadcrumbUid`. Writing to csdocs needs `prodBreadcrumbUid`. Both are already in `PRODUCT_CONFIG` for all 13 products, so this is a parameter, not research.
3. **Match by `uid:` frontmatter.** After Build 1 every file carries its entry uid. The `sandbox-uid-<uid>` tag no longer participates in matching and can be dropped.
4. Publish to `PROMOTION_ENVIRONMENTS`, link with `linkNewEntryIntoNav()`, bundle with `createReleaseForPromotion()`. The Release must include every node the linker touched, because each `links_2026` node carries its own publish state.
5. Keep `promotion-guard.ts` in the path as a safety net behind Build 3's auto-commit.
6. Scope each branch to its own product folder, deriving the slug from the branch name.

## Cross-listed docs

A doc listed under two products is **one entry with one file**, in the folder its breadcrumb names. The Studio SDK page listed under Developer Resources lives at `cs-docs/studio/...` and is edited on `stag-studio`. Build 1 already collapsed the duplicates, so the folder structure encodes the answer and nobody needs to know the rule.

Add a continuous integration (CI) guard: a PR into `stag-{product}` touching a file whose breadcrumb product differs fails with a message naming the right branch and path. `crossCheckProduct()` in `nav-membership.ts` already does the comparison.

## Keeping `stag-*` current with `main`

`sync-stag-branches.yml` on push to `main`: **merge** `main` into every `stag-*` branch and push. Merge, not rebase: rebase rewrites history and force-pushes, which breaks every open feature-branch PR and every writer's clone.

On conflict, open an issue and ping that product's Slack channel. `cs-docs/developer-resources/` is the one folder where a real cross-product conflict can occur, because it re-lists articles owned by other products.

Also `auto-update-pr-branch.yml` on PR opened or synchronized, calling `PUT /repos/{owner}/{repo}/pulls/{n}/update-branch` when the branch is behind. This is what stops writers forgetting to pull first.

## Verification

Merge a one-file PR into `stag-studio`. Confirm the entry exists, is published to staging and development **only**, appears in the left nav, and is in a Release named after the PR.

Then the cross-product test, which is the one that catches a regression in the trigger:

1. Put a change on `stag-assets`, leave its PR to `main` open.
2. Merge a Studio change through `stag-studio` into `main`.
3. Confirm `main` backsynced into `stag-assets` and the Studio files are there.
4. **Confirm no sync fired and no Studio entry gained a version.**
5. Merge the Assets PR. Confirm Studio content on `main` is untouched.
6. After that, `main` backsyncs **Assets** files into `stag-assets`.
7. **Confirm no sync fired and no Assets entry gained a version.** A product-folder filter alone would miss this. Only the PR-merge trigger catches it.

---

# Build 5: the `stag-{product}` to `main` gate

**Prerequisite:** Build 4.

## Trigger

`pull_request` with `base: main` and a head matching `stag-*`.

## Jira

`POST /rest/api/3/issue` using `JIRA_BASE_URL`, `JIRA_USER_EMAIL`, `JIRA_API_TOKEN`. Write the issue key back to the PR as a comment and a label so Build 6 can transition it. Project key and issue type come from config, not hardcoded.

## Slack

Reuse the working pattern in `notify-slack-doc-update.yml`: `SLACK_BOT_TOKEN` with `chat.postMessage`, and its skip-if-unset guard.

Channel IDs live in `.github/product-channels.json`, keyed by product slug, giving `{qaChannel, devChannel}`. Adding a product is then a data edit. Ship with placeholders.

## QA approval, two layers

GitHub cannot restrict who can approve, but it can make a QA approval mandatory, which has the same effect.

1. **A required status check, first.** `qa-approval.yml` on `pull_request_review` reads the PR's reviews and passes only when an APPROVED review exists from a login in `.github/qa-approvers.yml`. Needs no GitHub team and no org admin, so it lands first and does the real work.
2. **CODEOWNERS plus a ruleset, second.** A QA team owns `/cs-docs/`, and a ruleset on `main` requires Code Owner review. Blocked on someone with org admin: the current token cannot even list `contentstack` org teams.

Others may still approve. Their approval alone cannot unblock the merge.

## Verification

Open a `stag-studio` to `main` PR. Confirm the Jira ticket is created, both Slack channels get a message, and the merge stays blocked until a QA-listed login approves.

---

# Build 6: merging to `main` deploys the Release to Production

**Prerequisite:** Build 5.

## Work

1. `csdocs-deploy-release.yml` on `pull_request: closed` with `merged == true` and `base: main`.
2. Resolve the Release named `PR #<number>` using the existing `findReleaseByName()`.
3. **Add a `deployRelease()` method.** `prod-promote-client.ts` has `findReleaseByName`, `createRelease`, and `addItemsToRelease`, but **no deploy method**. This is genuinely new.
4. **This is the only place that publishes to Production.** `prod-promote-client.ts` currently forbids it by design, with `PROMOTION_ENVIRONMENTS` deliberately excluding Production. That constraint moves rather than disappears: Production publishing becomes legal only through a Release deploy in this workflow, never through a direct entry publish.
5. Transition the Jira ticket and post the outcome to Slack.

## Verification

Merge the Build 5 test PR. Confirm the Release deploys to Production, the entry is live on the site, and the Jira ticket transitions.

---

# Build 7: delete what the new design orphans

**Prerequisite:** every other build, each having run in production for a cycle.

Delete in a separate commit from the change that orphaned the file, so reverting a feature does not have to restore the deletions.

## Already dead today

- `tools/cs-sync/archived/*_25July26.js` (9 files) and `.github/workflows/archived/` (8 workflows). GitHub does not run workflows in a subdirectory, and the scripts they call were already deleted. Both sides are dead.
- `backend/lint-api-docs.js` would crash if run: `API_DOCS_ROOT` resolves to `backend/api-docs`, which does not exist. Plus `backend/generate-lint-csv.js`, which only feeds it.
- `contentstack-sync.yml` has its entire `on:` block commented out.
- `notify-slack-doc-update.yml` triggers on a file that does not exist, so it has never fired. Keep it as the Slack pattern for Build 5, but fix the trigger.
- `doc-exec-test.yml` runs `npm run exec-test`, which is not defined anywhere.
- Dangling references: `docs-lint.yml` filters on `SYNC_WORKFLOW.md`, CODEOWNERS names `policy-scan.yml` and `**/.snyk`. None exist.
- `TEAM_HANDOFF_GUIDE.md` exists twice, byte-identical, at the root and in `internal-docs/`. It also documents the old Sandbox workflow, so it needs rewriting, not just de-duplicating.
- 17 status and summary files under `tools/cs-sync/` (`AUTOMATION_COMPLETE.md`, `SETUP_COMPLETE.md`, `DEPLOYMENT_SUMMARY.md`, `IMPLEMENTATION_SUMMARY.txt`, and similar). Keep and rewrite `README.md`, `SYNCHRONIZATION_SPECIFICATION.md`, and `LINT-WORKFLOW.md`.
- `demo-docs/` holds only a `.DS_Store`. `logs/` is empty. `user_uids.md` holds emails and org UIDs that `cms-user-index.json` deliberately no longer carries.
- Roughly 50 stale local branches from previous rounds.

## Orphaned by this work

| By | What |
|---|---|
| Build 2 | `backend/LINTING.md` and `backend/CONVENTIONS.md`, which document a frontmatter contract the code stopped enforcing. Nothing in `tools/cs-sync/src/` goes, because `style-lint.ts` still serves the other two roots. |
| Build 3 | The csdocs branches of `cms-pull-sandbox.ts` and `sandbox-client.ts`, plus `sandbox-git-parity-check*.js` and `sandbox-mirror-check*.js`. All are `STACK_TYPE`-parameterized and shared with apidocs, so this is surgery on a code path, not file deletion. |
| Build 4 | `git-to-sandbox-sync.ts` and `sandbox-to-prod-promote.ts`, once `gh-to-csdocs.ts` replaces them. |
| Build 1 | `nav-apply.ts`, superseded by the reconcile. Zero importers and no workflow references it. Leaving two bulk writers around is how they drift. |

## Verification

After each deletion commit, confirm `sdk-docs` and `api-docs` lint and sync still run green. Those roots share code with the csdocs path, so a deletion that looks csdocs-only can break them.

---

# Out of scope

`api-docs` and `sdk-docs` keep their existing Sandbox pipelines. Worth raising separately: `sandbox-auto-promote-apidocs.yml` still runs a 15-minute promotion cron with no fingerprint guard, which is the same class of bug that commit `97831d78` fixed for csdocs.
