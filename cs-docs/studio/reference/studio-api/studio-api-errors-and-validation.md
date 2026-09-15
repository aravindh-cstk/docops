---
title: "Studio API: Errors and Validation"
description: "Every service-level error uses one shape:"
url: /studio/studio-api-errors-and-validation
uid: blt644fe8414f71ed9d
---

# Studio API: Errors and Validation

## Studio API: errors and validation

> How the [managed Studio API service](/docs/studio/studio-api) reports failures, the full status + error\_code catalog, and the Studio rules it enforces on every write. For the routes themselves, see the [Endpoint reference](/docs/studio/studio-api-endpoint-reference).

## The error envelope

Every service-level error uses one shape:

```
{
  "error_message": "<human-readable summary>",
  "error_code": 32,                 // stable numeric code (table below)
  "errors": {                       // present when there are field-level issues
    "<path>": ["<message>", …]      // keyed by the offending field / node path
  }
}
```

Two things make this actionable:

-   **error\_code is stable**: branch on it, not on the message text.
-   **errors is keyed by path**: for a bad layout, each failing node path appears with its own message, and all failures come back at once (you don't fix-and-resubmit one at a time).

> **400s are the exception.** DTO-shape failures (missing title, a non-object ui, a bad enum) are caught by the framework's request validator before the handler, so they use the framework's default shape ({ statusCode, message: \[...\], error: "Bad Request" }), not the envelope above. Everything else uses the envelope.

## Status + error\_code catalog

| HTTP | error\_code | When | errors payload |
| --- | --- | --- | --- |
| **400** | - (request validator) | DTO shape/type/enum failure (missing title, bad place\_composition\_as, ui not an object, limit out of range) | framework default shape |
| **401** | 39 composition\_missing\_auth\_token | **Neither** a session authtoken nor an OAuth Authorization: Bearer token reached the service. Not a rejection of OAuth, both styles are accepted | - |
| **404** | 1 project\_not\_found | Project not found (access-check fetch) | { "uid": \["is not valid."\] } |
| **404** | 31 composition\_project\_not\_found | Project vanished between checks (rare race) | { "projectUid": \["is not valid."\] } |
| **404** | 30 composition\_not\_found | Entry uid not found | { "uid": \["is not valid."\] } |
| **404** | 44 composition\_flavor\_mismatch | …/{uid}/template on a section (or /section on a template) | { "uid": \["This composition is a \\"section\\", not a \\"page\\"."\] } |
| **422** | 21 stack\_not\_found | **Access denied**: no read/write on the project's stack (Studio convention, not 403) | - |
| **422** | 32 composition\_invalid | Structural validation failed | { "<node path>": \["<rule message>", …\] }, one entry per failing path, all at once |
| **422** | 32 composition\_invalid | Provided composable\_uid was **blank/whitespace-only** | { "composable\_uid": \["composable\_uid must not be blank when provided."\] } |
| **422** | 40 composition\_uid\_immutable | PUT tried to change composable\_uid | { "composable\_uid": \["composable\_uid is immutable and cannot be changed."\] } |
| **422** | 37 composition\_decompression\_failed | GET …?decompression=true but the stored ui is corrupt | { "ui": \["is not valid."\] } |
| **409** | 33 composition\_uid\_conflict | composable\_uid already used, checked **content-type-wide (all locales)**. errors is keyed by the field the CMA flagged (usually composable\_uid). | { "composable\_uid": \["is not unique."\] } |
| **409** | 41 composition\_referenced | DELETE without force while other compositions reference this one | { "references": \["Referenced by N composition(s): …"\] } |
| **500** | 36 composition\_compression\_failed | ui round-trip integrity check failed before persist | - |
| **401 / 403 / 409 / 422 / 429 / 502** | 38 composition\_cma\_error | Contentstack CMA failure: **any upstream 4xx status is preserved**. Only genuine 5xx/gateway failures become a 502. | upstream message in error\_message |

> **Two codes worth internalizing.** 422 stack\_not\_found means access denied, not "missing". Check the caller's rights on the project's stack. And a 409 on create almost always means a **duplicate composable\_uid** somewhere in the content type (including another locale), caught before the write.

### Codes on the other route groups

The table above covers the composition routes. The rest of the service uses the same envelope with its own codes:

| HTTP | error\_code | Where | When |
| --- | --- | --- | --- |
| **404** | 1 project\_not\_found | [Projects](/docs/studio/studio-api-projects) | The uid isn't a live project in your organization (also returned when you lack access, rather than confirming it exists) |
| **422** | 21 stack\_not\_found | [Projects](/docs/studio/studio-api-projects) | Access denied on the project's connected stack, on create, update, and delete alike |
| **422** | 2 project\_create\_failed | [Projects](/docs/studio/studio-api-projects) | An authorization-SDK failure during create |
| **422** | 3 project\_update\_failed | [Projects](/docs/studio/studio-api-projects) | An authorization-SDK failure during update |
| **422** | 4 project\_delete\_failed | [Projects](/docs/studio/studio-api-projects) | An authorization-SDK failure during delete |
| **401** | 48 registered\_components\_missing\_auth\_token | [Registered components](/docs/studio/studio-api-registered-components) | Neither credential reached the service. The counterpart to 39 on the composition routes |
| **422** | 45 registered\_components\_fetch\_failed | [Registered components](/docs/studio/studio-api-registered-components) | An authorization-SDK failure during the lookup |
| **502** or upstream status | 46 registered\_components\_upstream\_error | [Registered components](/docs/studio/studio-api-registered-components) | The component service was unreachable, failed, or returned an unexpected body. A client error such as 403 passes through with its own status |

> **Why so many 422s.** The envelope defaults to 422 whenever a code is raised without an explicit status. That's why access denial, project write failures, and validation failures all land on the same status. The error\_code is what distinguishes them, which is the reason to branch on it rather than on the status.

## What the service validates

On every write (create, and any update that includes ui), the service checks the layout against Studio's structural rules and returns results in two tiers:

| Tier | Effect | Where it shows |
| --- | --- | --- |
| **Errors** | **Block** the write | 422 composition\_invalid, keyed by path |
| **Warnings** | Don't block | warnings\[\] on the 201 / 200 success body |

The checks are **crash-guards**, the shapes that would break the canvas or the renderer if they slipped through. Representative rules:

-   **Root must be page**: for both templates and sections. section is a nested-container type, never the tree root.
-   **No empty slots**: an empty slots array crashes the renderer. Populate it or drop the key.
-   **Repeater / Condition Block shape**: a Repeater needs its iteration metadata. A Condition Block needs its cases. (See [Smart containers](/docs/studio/smart-containers-overview).)
-   **Placement consistency**: a section can't carry a url / connected\_content\_type. Those are stripped or rejected per flavor.
-   **Section placement warning**: a tree that places section-composition nodes warns you to keep linked\_sections in sync, or the editor shows "Template Did Not Load".

Because the results are **collected**, a single POST tells you every structural problem at once. Fix them together and resubmit.

> **Why these and not more?** The service validates the structural problems it can catch without loading your components or content-type schema, the ones that hard-break rendering. Deeper semantic checks (URL-variable correctness, binding-context matching) depend on the connected content type and are enforced by the canvas/runtime, not this pre-check. The layout-tree vocabulary these rules police is documented once in [Building Blocks](/docs/studio/composition-building-blocks).

## Handling errors well

-   **Branch on error\_code, not error\_message**: messages are translated and may change. Codes are stable.
-   **On 422 composition\_invalid, read every key in errors**: they're all there. Don't fix one and resubmit blind.
-   **Treat 422 stack\_not\_found as an auth problem**, not a missing resource.
-   **On 409 at create**, pick a different composable\_uid (or omit it to let the service backfill a unique one).
-   **On 409 composition\_referenced at delete**, call [GET …/{uid}/references](/docs/studio/studio-api-compositions#6-list-references) to see who depends on it before deciding whether to ?force=true.
-   **Retry 502** (transient gateway). A preserved 401/403 is not retryable. Fix the credential/permission.

See also: [Endpoint reference](/docs/studio/studio-api-endpoint-reference), [Compositions](/docs/studio/studio-api-compositions), [Projects](/docs/studio/studio-api-projects), [Chapter overview](/docs/studio/studio-api), [Building Blocks](/docs/studio/composition-building-blocks).
