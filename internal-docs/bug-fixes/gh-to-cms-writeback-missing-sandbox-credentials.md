# GitHub to CMS writeback fails at startup

**Status:** open. Recorded 2026-09-15.

## Symptom

The `Sync GitHub to Sandbox (CS Docs)` workflow fails on every push to `main` that touches
`cs-docs/**`. It fails at startup, before it reads a single file, so no partial sync happens.

The error comes from [config.ts:77-81](../../tools/cs-sync/src/config.ts#L77):

```
Missing Sandbox credentials for stack type: csdocs. Set one of: ...
```

## Cause

Someone removed the Sandbox credentials. `loadSandboxConfig` calls `sandboxCredentials("csdocs")`
and throws when nothing resolves.

**The guard works as designed.** `loadSandboxConfig` never falls back to the Production pair
(`CS_API_KEY` and `CS_MANAGEMENT_TOKEN`). Its docstring at
[config.ts:61-68](../../tools/cs-sync/src/config.ts#L61) records the reason: writing to Production
because the Sandbox credentials went missing does far more damage than failing loudly. Treat the
error as the guard doing its job, not as the bug.

## Names it reads

`lib/credentials.ts` resolves these in order, canonical name first, and prints a warning when it
falls back to a legacy name.

| Purpose | Names, in resolution order |
|---|---|
| API key | `SANDBOX_CONTENTSTACK_DOCS_STACK_API_KEY`, then `CSDOCS_SANDBOX_STACK_API_KEY` |
| Management token | `SANDBOX_CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN`, then `CSDOCS_SANDBOX_MANAGEMENT_TOKEN`, then `CSDOCS_SANDBOX_STACK_MANAGEMENT_TOKEN` |

The third token spelling only ever appeared in `exact-mirror-migration.yml`, and no code has ever
read it. Any run driven by that workflow had no sandbox token.

**Adding the canonical secrets alone does not fix the workflow.**
[gh-to-sandbox-sync-csdocs.yml:37-39](../../.github/workflows/gh-to-sandbox-sync-csdocs.yml#L37)
passes only the two legacy names, so the canonical ones never reach the process.

## Two ways forward

The two options differ in what they cost and what they give up.

**Restore the Sandbox credentials.** This keeps the current three-hop shape: GitHub to Sandbox,
Sandbox to Production by manual dispatch, Production to GitHub on a cron. It needs no code change.

**Repoint the writeback at the cs-docs stack.** This needs edits in both `config.ts` and the
workflow's `env` block, and it means relaxing the guard above.

If you repoint, replace the guard rather than delete it. For example, require a variable that names
the target stack, so writing straight to Production stays a stated intent instead of a default. A
deleted guard leaves nothing between a missing variable and a live write.

## One trap when repointing

`CS_ENVIRONMENT` defaults to `"development"` in this path
([config.ts:90](../../tools/cs-sync/src/config.ts#L90)). That default is harmless against a sandbox,
because the sync creates entries there as drafts and never publishes them. It stops being harmless
once the target is the real stack, because `unpublishEntry` acts on the environment this value
names.

## Blast radius

Only the GitHub to CMS direction is down. The CMS to GitHub sync runs as a different workflow on
different credentials, so docs still flow from the CMS into the repo. The visible cost is a failing
check on every `cs-docs` push.

## Also blocking this workflow

Fixing the credentials alone does not turn the workflow green. `cs-docs/lytics-cdp/audiences-activation/lytics-cdp-lookalike-models-audiences/getting-started-1.md`
fails with `createEntry failed (422): title is not unique`. That file is one of `301` files the nav
reconcile added for entries Production does not publish. The list sits at
`tools/cs-sync/nav-audit/unpublished-nav-leaves.csv`, and removing those files is a separate
decision.
