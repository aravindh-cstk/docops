---
title: "Agent Idempotency for Long-Running Studio Builds"
description: "Every skill that writes to the Contentstack management API or the Studio canvas is designed to be re-run safely."
url: /studio/agent-idempotency
---

# Agent Idempotency for Long-Running Studio Builds

## Agent idempotency: resume semantics for long-running Studio builds

Every skill that writes to the Contentstack management API or the Studio canvas is designed to be re-run safely. This page is the shared reference: **what each skill mutates**, **how state is captured**, and **how to resume after a failure or interruption**. If you're building an autonomous agent that runs multiple skills in sequence, read this first.

> ## Verification status
> 
> This page documents the **canonical convention** for idempotent + resumable skills. Every claim below has a reproducer committed under scripts/verify-\*.ts.
> 
> -   **retryableFetch + rate-limit + concurrency pattern**: production-verified in scripts/upload-to-digital-concierge.ts. New skills adopt this shape.
> -   **provision-studio-stack**: runtime-verified via scripts/verify-provision-stack.ts: creates a Global Field, a CT embedding it AND a reference field, 2 entries, wires the reference between them, publishes to a real environment. 11/11 structural claims pass, then cleans up.
> -   **author-composition-via-api**: runtime-verified via scripts/verify-composition-api.ts: POST a composition entry with composable\_uid + ui tree + static\_value, verify shape round-trips on GET, PUT-update lands, cleanup. 10/10 claims pass. Note: empty static\_value groups round-trip as {} on GET.
> -   **import-content end-to-end**: verified via scripts/verify-import-e2e.ts: CT + asset multipart upload + 3 entries + re-run creates 0 duplicates. 8/8.
> -   **migrate-ct-schema**: verified via scripts/verify-migrate-ct-schema.ts: add-field, dual-write pattern for rename, backfill, rollback via before-snapshot. 17/17.
> -   **register-component**: filesystem-mutation verified via scripts/verify-register-and-state.ts: imports + prior registrations preserved, new registerComponent({...}) call inserted with valid type UID. 3-apply sequence produces exactly 3 new calls (no duplicates).
> -   **source\_uid field convention for idempotency**: the field UID must NOT start with \_ (Contentstack rejects underscore-prefixed field UIDs). Verified in verify-import-e2e.ts.
> -   **State-file directory pattern (docs/\_<skill>-state/)**: verified for 4 canonical skills (\_import-state/, \_migration-state/, \_provision-state/, \_composition-state/) via scripts/verify-register-and-state.ts: directory created, state file JSON-parseable, follows the canonical schema (skill, target\_stack, started\_at, units keyed by stable IDs with status/attempts/output\_uid/completed\_at).
> -   **Rollback via <uid>-before.json snapshots**: runtime-verified for CT-schema mutations in scripts/verify-migrate-ct-schema.ts: after add-field + dual-write, a schema PUT with the captured before-snapshot restores the CT to its original shape and entry data survives with core fields intact.
> 
> Rate limits (~10 uploads/sec, ~15 entries/sec, ~5 schema-mutations/sec) are documented defaults derived from Contentstack's published guidelines and the DC uploader's real-world behavior. Plans vary. Observe Retry-After and tune concurrency down if 429s persist. Not soak-tested.
> 
> **Verification approach for consumers:** when this page describes a pattern, treat it as a contract the SDK + skills work to uphold. If a specific mutation isn't reversible in your target stack the way documented here, that's a bug in the skill implementation, not in this reference. File it.

## The idempotency contract

Every skill making external writes (CMA, Studio canvas, filesystem) follows the same shape:

1.  **Read intended change** from user input or upstream skill output.
2.  **Emit a plan**: no writes yet. User approves.
3.  **Capture a "before" snapshot** where destructive changes are possible.
4.  **Persist a state file** under docs/\_<skill-slug>-state/. State file is updated **after every unit of work**, not batched.
5.  **Perform work in units**. Every unit has a stable ID (record UID, Section slug, entry source-ID). Before each unit: check the state file. Already completed? Skip. Failed with retries exhausted? Report + move on. Pending? Attempt.
6.  **On success**: mark the unit completed in the state file. Move to next.
7.  **On failure**: record the error + retry count. Continue with remaining units unless the failure is catastrophic (auth expired, network down).
8.  **On completion**: emit a report accounting for every intended unit.

Re-running the skill picks up from the last unmarked unit. Duplicates are impossible because idempotency checks happen before each write.

## Per-skill mutation table

The definitive list of what each skill writes to the outside world, and where state lives.

| Skill | Mutates | State file | Idempotency key |
| --- | --- | --- | --- |
| [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html) | Filesystem: docs/<template-slug>-build-sheet.md. Read-only against the stack. | None needed: regenerating overwrites the sheet | The sheet is the state. Git tracks history |
| [decompose-site](https://studio-documentation.contentstackapps.com/prompts/decompose-site.html) | Filesystem: docs/site-build-plan.md + one sheet per template. Read-only against the stack. | None | Same: git |
| [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html) | Filesystem: adds registerComponent({...}) calls in the customer's registration file | None: TypeScript rejects duplicate type: ... UIDs at compile time (strict mode) | Component type UID |
| [provision-studio-project](https://studio-documentation.contentstackapps.com/prompts/provision-studio-project.html) | CMA: creates a Studio project + a compositions CT + publish + delivery-token setup | docs/\_provision-state/<stack\_uid>.json | Project name + CT UID (skip if exists) |
| [provision-studio-stack](https://studio-documentation.contentstackapps.com/prompts/provision-studio-stack.html) | CMA: creates Global Fields, CTs (each with a source\_uid field baked in: contract for import-content), entries, assets | docs/\_provision-state/<stack\_uid>.json | Each CT / GF / entry has a stable name. Skill checks for existence before create |
| [author-composition-via-api](https://studio-documentation.contentstackapps.com/prompts/author-composition-via-api.html) | CMA: creates composition entries (Sections + Templates) | docs/\_composition-state/<stack\_uid>.json | Composition composable\_uid (Section slug or Template slug): skips if exists, updates if --overwrite |
| [build-section](https://studio-documentation.contentstackapps.com/prompts/build-section.html) / [build-repeating-section](https://studio-documentation.contentstackapps.com/prompts/build-repeating-section.html) / [build-connected-template](https://studio-documentation.contentstackapps.com/prompts/build-connected-template.html) | Studio canvas via Playwright MCP: drops components, wires bindings, saves compositions | Studio's own composition state (server-side), no separate state file | Composition composable\_uid (same as above: check for existence via CMA before authoring) |
| [import-content](https://studio-documentation.contentstackapps.com/prompts/import-content.html) | CMA: creates + updates entries, uploads assets, publishes | docs/\_import-state/<ct\_uid>-import-state.json | source\_uid field on the target CT: every entry carries its source-side ID. Skill matches by that key |
| [migrate-ct-schema](https://studio-documentation.contentstackapps.com/prompts/migrate-ct-schema.html) | CMA: mutates CT schema, backfills entries, updates Section bindings | docs/\_migration-state/<ct\_uid>-migration.json + <ct\_uid>-before.json snapshot | Migration step ID (each of ~6 steps has a stable name: skill reads state to determine next unrun step) |
| [deploy-studio-site](https://studio-documentation.contentstackapps.com/prompts/deploy-studio-site.html) | External hosting provider (Vercel / Netlify / etc.), env vars, DNS | Handled by the provider's own pipeline. No state file locally | Deploy target name |

Skills that make **no** external writes (concept skills, verify skills, troubleshoot skills, planning skills like analyze-project-fit / plan-studio-architecture) don't need state files. They're read-only or produce filesystem output only.

## State file discipline

Every state file follows the same structure so the resume pattern is universal:

```
{
  "skill": "<skill-name>",
  "target_stack": "<stack_uid>",
  "started_at": "2026-...",
  "last_updated_at": "2026-...",
  "config": { "…intended-change params, source paths, etc…" },
  "units": {
    "<unit-id>": {
      "status": "pending" | "in-progress" | "completed" | "failed",
      "attempts": 0,
      "last_error": "…if failed…",
      "output_uid": "…the CMA-returned UID for completed units…",
      "completed_at": "…"
    },
    "…"
  }
}
```

**Never batch state writes.** A crash between units strands writes in an unrecorded state, and the next re-run can't distinguish "we did this but didn't record it" from "we haven't done this yet." Update state after every unit.

**Never delete state files automatically.** They're the audit trail. Even a completed migration's state file stays under docs/\_migration-state/. Git tracks it.

**The state file directory pattern**: docs/\_<skill-slug>-state/. Leading underscore keeps it out of the docs-site build (per docs/AGENTS.md's \_research/ convention). Add these to .gitignore if you don't want state files committed, or track them if audit is important.

## Retry semantics

Every write goes through a retryableFetch wrapper that:

-   Retries on 429 (rate limit): honours Retry-After header.
-   Retries on 502 / 503 / 504 (upstream error): exponential backoff (1s, then 2s, 4s, 8s), max 5 retries.
-   Retries on network errors (ECONNRESET, ETIMEDOUT): same backoff.
-   Does **not** retry on 4xx-except-429 (client error: the request is wrong, retrying won't help).
-   Does **not** retry on 5xx-except-502/3/4 (server error: record + move on).

The reference implementation lives in scripts/upload-to-digital-concierge.ts in this repo. Every skill making CMA writes should import that helper or use an equivalent shape.

## Concurrency semantics

CMA rate limits vary by endpoint:

-   /v3/assets: ~10 req/sec. Concurrency 2-3 is safe.
-   /v3/content\_types/<ct>/entries: ~15 req/sec. Concurrency 2-3 is safe.
-   /v3/content\_types (schema mutations): ~5 req/sec. **Concurrency 1** (schema changes serialize on the stack side anyway).

Skills making batch writes should default to concurrency 2 and expose it as a config knob. Higher values trip rate-limit-retry loops.

## Dry-run mode

Every skill that mutates externally should support a \--dry-run flag (or an equivalent phrase in the LLM prompt: "dry-run this migration", "show me what would change"). Dry-run:

-   Emits the full plan.
-   Simulates every write (prints the payload that would be sent).
-   Never touches the target stack.
-   Updates state file if useful (some skills use dry-run state to plan the real run).

Every dry-run should precede every commit-run when the loop runs as an agent.

## The resume pattern

When a skill run fails partway through:

1.  **Read the state file.** Every completed unit is recorded.
2.  **Enumerate remaining units**: pending + failed (that haven't exhausted retries).
3.  **Re-invoke the skill** with the same inputs. The skill checks state before each unit, skips the completed ones, and attempts the pending and failed ones.
4.  **Optional**: pass \--only-failed to retry only failed units, or \--from-unit=<id> to explicitly resume from a specific unit.
5.  If a unit repeatedly fails, the run stops for user intervention. Root-causes: expired auth (renew token, re-run), schema mismatch (fix + re-run), source data corruption (fix source, re-run).

## Rollback

Some skills capture a "before" snapshot before destructive changes (migrate-ct-schema does this always). Rollback means:

1.  Read the <uid>-before.json snapshot.
2.  Walk back the completed steps in reverse order.
3.  Restore the schema / entries / bindings to their pre-run state.

Not every mutation is reversible. Removing a field's data is destructive: rollback restores the field structure but not the values. Skills document their rollback scope explicitly. Assume nothing.

## Orchestration guarantees

An agent chaining multiple skills runs them in this order:

1.  decompose-site
2.  provision-studio-stack
3.  register-component
4.  author-composition-via-api
5.  import-content
6.  deploy-studio-site

Across that chain:

-   **Each skill is atomically resumable.** A crash in step 4 doesn't require re-running steps 1-3.
-   **Each skill's state file is self-contained.** State from step 3 doesn't leak into step 4's file.
-   **Cross-skill state is committed to git.** The build sheet, the site plan, the state files: all trackable in the customer's repo.
-   **No skill silently mutates work by another skill.** import-content doesn't touch composition entries. author-composition-via-api doesn't touch entry content. Separation of concerns matches the state-file separation.

## The safety guarantee

**No skill deletes or breaks production data without explicit user approval between destructive steps.** Additive changes proceed on the plan-then-execute pattern. Destructive changes (remove field, cutover binding, publish to production) require an extra confirmation. The state file records approval so re-runs don't re-prompt.

This is what makes autonomous work with these skills safe: every mutation is recorded, every destructive change is gated, every failure is resumable.

## See also

-   [decompose-site](https://studio-documentation.contentstackapps.com/prompts/decompose-site.html): the highest-level orchestrator, drives the full site build following this idempotency contract.
-   [import-content](https://studio-documentation.contentstackapps.com/prompts/import-content.html): canonical resumable-batch skill. Every state-file discipline this page describes is exercised there.
-   [migrate-ct-schema](https://studio-documentation.contentstackapps.com/prompts/migrate-ct-schema.html): canonical rollback-capable skill. The <uid>-before.json snapshot pattern is documented there.
-   scripts/upload-to-digital-concierge.ts: reference implementation of retryableFetch + state-file + concurrency pattern used across the skills.
