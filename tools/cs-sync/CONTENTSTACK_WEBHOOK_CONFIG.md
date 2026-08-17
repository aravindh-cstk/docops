# Contentstack Webhook Configuration: CS Docs Sandbox → Prod (real-time)

This is the current, working webhook design. It replaces an earlier draft of
this file that described a different, now-defunct architecture (Prod-side
publish/unpublish notifications, a different repo, scripts that no longer
exist). If you find a copy of that old version elsewhere, don't use it.

This webhook feeds `.github/workflows/sandbox-webhook-promote-csdocs.yml`,
which promotes a single Sandbox entry to Prod (Staging environment) within
seconds of it being published, instead of waiting for the
`sandbox-auto-promote-csdocs.yml` cron's next 15-minute tick. That cron is
unaffected by this and keeps running as the safety net for whenever this
webhook path doesn't fire or fails.

## Prerequisites

- A GitHub Personal Access Token, scoped to only this repo
  (`aravindh-cstk/docops`) with **Contents: read and write** permission and
  nothing broader. This token is pasted directly into the Contentstack
  webhook's headers below (it is **not** a GitHub repo secret, since GitHub
  is the destination of this call, not the source).
- Admin access to the **Sandbox** CS Docs stack in Contentstack, not the
  Prod stack (this webhook lives on Sandbox, since that's where writers
  publish).

## Configure the webhook

**Stack → Settings → Webhooks → Add Webhook**, on the Sandbox CS Docs stack:

| Field | Value |
|---|---|
| Name | `CS Docs: real-time promote to Prod` |
| Event | Entry > Publish |
| Content type | `docs_article` |
| HTTP Method | `POST` |
| URL | `https://api.github.com/repos/aravindh-cstk/docops/dispatches` |

One event channel (`Entry > Publish`) covers both a first-time publish and a
republish after an edit, so no separate `entries.update` webhook is needed.

**Headers:**
```
Authorization: Bearer <the PAT from Prerequisites>
Content-Type: application/json
Accept: application/vnd.github+json
```

**Request body**: build this using Contentstack's own variable-picker in the
webhook UI rather than hand-typing the interpolation syntax, since that's
easy to get subtly wrong. Only `uid` is actually required, the promote
script re-fetches the entry itself and ignores everything else in the
payload. The other two fields are free defense-in-depth for the workflow's
own validation step and for readable run names:

```json
{
  "event_type": "csdocs-sandbox-entry-published",
  "client_payload": {
    "uid": "<inserted via variable picker: entry uid>",
    "content_type_uid": "<inserted via variable picker: content type uid>",
    "title": "<inserted via variable picker: entry title>"
  }
}
```

**Save**, then use Contentstack's **"Try"** button to send a test call before
relying on a real publish. A test call has no real entry uid, so the expected
result is: Contentstack shows a `2xx` delivery, and the GitHub Actions run
that appears fails fast at its "Validate webhook payload" step. That failure
is itself proof the wiring (auth, URL, event_type routing) works end to end.

## Testing with a real entry

1. Publish (or republish) one real, low-stakes Sandbox `docs_article` entry.
2. Contentstack's webhook execution log should show a successful delivery
   within a few seconds.
3. A new run should appear under **Actions → Promote CS Docs entry to Prod
   (real-time, webhook-triggered)**, labeled with that entry's uid.
4. The run should succeed and show the entry created/updated in Prod,
   published to Staging.
5. Wait for the next `sandbox-auto-promote-csdocs.yml` cron tick and confirm
   its promote step logs that same entry as skipped/no-op, proof the two
   paths don't duplicate work.

## Known limitations (accepted, not bugs)

- **No signature verification.** The webhook calls GitHub's API directly
  rather than a receiver we control, so there's nothing to verify against.
  The PAT's narrow scope (this repo only, Contents read/write only) is the
  actual protection here, the same level of trust the existing manual
  `workflow_dispatch` promotion already carries.
- **Publish bursts can drop some runs.** GitHub's concurrency lock
  (`sandbox-to-prod-promote-csdocs`, shared with the cron and manual
  workflows) allows only one running and one queued run at a time. Extra
  triggers arriving while one is already queued cancel it rather than queue
  behind it. A Contentstack Release publishing many entries at once can
  therefore skip some of them on the real-time path, they fall back to the
  next cron tick instead, which is why the cron must keep running unchanged.
