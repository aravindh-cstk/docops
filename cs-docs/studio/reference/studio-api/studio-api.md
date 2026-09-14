---
title: "Studio API Overview"
description: "There are now two documented paths to the exact same result (a composition entry in your stack)."
url: /studio/studio-api
uid: blt2449bf8b094b1282
---

# Studio API Overview

## Studio API: the managed Studio service

> **Preview: not yet GA.** This chapter documents the **Composable Studio API service**, a managed REST layer for compositions and the project records they hang off. The service is rolling out. **Endpoint paths and response shapes may still change**, and it may not be enabled on your region/tenant yet. Behavior here is verified against the service source. Anything that depends on gateway/tenant configuration is called out inline. If a call 404s at the host, the service isn't deployed for you yet. Use the [raw CMA path](/docs/studio/create-compositions-via-the-api) in the meantime.

> **What this is (and isn't).** A thin REST API that creates compositions **for** you: it validates the layout against Studio's rules, compresses the ui spec, forwards your identity to Contentstack, and returns clean, field-anchored errors. It does **not** replace the CMS: compositions are still Contentstack entries underneath. This page is the shared envelope. The per-group route pages and the error/validation reference are linked at the end.

> **Looking for one route in particular?** The [Endpoint reference](/docs/studio/studio-api-endpoint-reference) lists all 16 routes across the three groups in a single table.

## Two ways to create a composition: pick the right one

There are now **two documented paths** to the exact same result (a composition entry in your stack). They are not competitors. They sit at different levels.

|  | **Compositions API service** (this chapter) | **Raw CMA** ([that chapter](/docs/studio/create-compositions-via-the-api)) |
| --- | --- | --- |
| You call | POST /v1/projects/:projectUid/compositions | POST /v3/content\_types/{ct}/entries |
| ui spec | Send the **uncompressed** node tree, the service compresses it | You **zlib-encode it yourself** before sending |
| Validation | **Done for you** (Studio structural rules, collect-all) | None: a bad tree fails later at render |
| composable\_uid | Backfilled / uniqueness-checked for you | You manage it |
| Auth | Your forwarded **session authtoken** or **OAuth token** (acts as you) | **Management token** or session token |
| Best for | App/backend integrations that require enforced request validation + a stable contract | Migrations, CI, server-to-server scripts that require full low-level control |

> **Rule of thumb.** Reach for the **service** when you want Studio to catch mistakes before they reach the canvas and you're acting on behalf of a signed-in user. Reach for the **raw CMA** when you're scripting bulk/migration work with a management token and want to own every field yourself. The ui\-tree vocabulary is identical either way: the [Building Blocks](/docs/studio/composition-building-blocks), [Section Catalog](/docs/studio/section-compositions-api), and [Template Catalog](/docs/studio/template-compositions-api) references apply to both.

## 1\. What you're creating

A **composition** is a saved layout tree (the ui spec) plus the data bindings that drive it, stored as a **Contentstack entry** of your project's composition content type. The service doesn't invent a new storage model. It wraps the CMS. Two flavors, exactly as elsewhere in Studio:

-   **Template**: a full page with a URL. (Wire value: place\_composition\_as: "page".)
-   **Section**: a reusable block, no URL of its own. (Wire value: place\_composition\_as: "section".)

> **Concept guides:** [What's a composition?](/docs/studio/what-is-a-composition), [Templates](/docs/studio/templates-overview), [Sections](/docs/studio/build-and-use-sections), [Templates vs Sections](/docs/studio/choosing-between-templates-and-sections).

## 2\. Base URL & versioning

The service is **URI-versioned**: every route is prefixed with /v1. Compositions are **nested under a project**, because the project record is what ties the request to a stack, a content type, and a locale:

```
/v1/projects/{projectUid}/compositions
```

The other route groups sit alongside it: /v1/projects for [projects](/docs/studio/studio-api-projects), and registered components nested under a project like compositions. The [Endpoint reference](/docs/studio/studio-api-endpoint-reference) has the full list.

Pick the base URL for your region:

| Region | Base URL |
| --- | --- |
| AWS NA | https://composable-studio-api.contentstack.com/v1 |
| AWS EU | https://eu-composable-studio-api.contentstack.com/v1 |
| AWS AU | https://au-composable-studio-api.contentstack.com/v1 |
| Azure NA | https://azure-na-composable-studio-api.contentstack.com/v1 |
| Azure EU | https://azure-eu-composable-studio-api.contentstack.com/v1 |
| GCP NA | https://gcp-na-composable-studio-api.contentstack.com/v1 |
| GCP EU | https://gcp-eu-composable-studio-api.contentstack.com/v1 |

> You never specify the stack, content type, or locale in the URL. The service reads them from the **project** (projectUid). If your project uses a custom composition content type, the service has that value stored. You don't pass it.

## 3\. Authentication and authorization

On the composition routes the service acts **as the calling user**: it forwards your own credential to the CMA rather than holding a service credential of its own. Send one credential plus the organization:

| Header | Value | Required |
| --- | --- | --- |
| authtoken | Your Contentstack **session** token, how the Studio browser app authenticates | one of the two |
| authorization | Bearer <access\_token>, how OAuth clients authenticate | one of the two |
| organization\_uid | The organization UID that owns the project | Yes, everywhere |

> **Both credential styles work.** A session authtoken and an OAuth Authorization: Bearer token are equally first-class, and the service forwards whichever one you used. 401 error\_code 39 composition\_missing\_auth\_token fires only when **neither** reaches the service. The Bearer prefix is required. The CMA reads a bare authorization value as a management token. For how the credential is chosen when a request carries both, and which routes forward one, see [The second hop](/docs/studio/studio-api-endpoint-reference#the-second-hop-which-credential-gets-forwarded). Resolving a credential in the first place is covered by [authenticate-cma](https://studio-documentation.contentstackapps.com/prompts/authenticate-cma.html).

There are **three checks**, each with its own failure code, useful for telling which layer rejected you:

| Check | What it verifies | On failure |
| --- | --- | --- |
| **Identity** | The gateway resolved a caller from the request | request never reaches the handler |
| **Project access** | You have read/write access to the project's connected stack | **422**: access denied |
| **Delegation** | A credential actually reached the service, and Contentstack accepts it | **401** if neither credential arrived. The upstream **401/403** is preserved if Contentstack rejects the one that did |

> **Reads vs writes.** GET routes require **read** access to the project's stack. POST/PUT/DELETE require **write** access. Denial returns **422** (the Studio convention), not 403.

> **Management tokens.** The service authenticates as the **caller**, forwarding the session or OAuth credential you presented. A caller-supplied **management token is not accepted**: a non-Bearer authorization value is deliberately never relayed, so the service won't pass on a stack-scoped credential it didn't issue. Server-to-server automation that needs a management token should use the [raw CMA path](/docs/studio/create-compositions-via-the-api#3-authentication).

## 4\. The composition entry & the ui spec

The single biggest difference from the raw CMA: **you send the ui tree uncompressed, and the service compresses it.** You never touch zlib.

| Field | You send | The service does |
| --- | --- | --- |
| ui | The **node tree as a JSON object** | Validates it against Studio rules, then **compresses** to zlib:<base64> before saving |
| data\_sources | A plain **array** | JSON-stringifies it for storage |
| composable\_uid | Optional | If omitted, **backfills** it with the created entry uid. If you provide it, it must be non-blank and unique across the content type |

Everything about how to shape the node tree itself (node anatomy, value sources, Repeater / Condition Block / Section Slot / Binding Override, the closed sets of prop and node types) is shared with the raw-CMA path and lives in one place:

> **Build the ui tree:** [Building Blocks](/docs/studio/composition-building-blocks) (start with "the anatomy of a node"), worked JSON for every shape in the [Section Catalog](/docs/studio/section-compositions-api) and [Template Catalog](/docs/studio/template-compositions-api).

The service adds a safety net the raw path doesn't have: **structural validation on every write**, returning all problems at once, field-anchored, split into blocking **errors** and non-blocking **warnings**. See the [Errors & validation reference](/docs/studio/studio-api-errors-and-validation).

## 5\. Where to go next

You now have the envelope. The rest of the chapter:

1.  **[Endpoint reference](/docs/studio/studio-api-endpoint-reference)**: all 16 routes in one table, plus the envelope they share: base URLs, versioning, the authentication split, and the request/response conventions. **Start here if you're looking for a specific route.**
2.  **[Projects](/docs/studio/studio-api-projects)**: the five project routes and the record every composition call resolves through.
3.  **[Compositions](/docs/studio/studio-api-compositions)**: the ten composition routes (create, list, fetch, references, update, delete, plus the flavor-scoped variants), with request/response shapes, query params, and curl examples.
4.  **[Registered components](/docs/studio/studio-api-registered-components)**: the read-only route that lists the components a project has synced, with their prop schemas.
5.  **[Errors and validation](/docs/studio/studio-api-errors-and-validation)**: the response envelope, the full status/error\_code catalog, and the Studio validation rules the service enforces.
6.  **[OpenAPI 3.1 spec](https://studio-documentation.contentstackapps.com/api/studio-api/openapi.yaml)**: the machine-readable contract for every route in this chapter. Generate an MCP tool server, an SDK, or a Postman collection with any OpenAPI-consuming generator. Each operationId is designed to be used verbatim as the MCP tool name. summary / description fields carry the tool docs.
7.  **[Generated service spec](https://studio-documentation.contentstackapps.com/api/studio-api/studio-api.yaml)**: the OpenAPI 3.0 document the service itself emits (npm run openapi:studio in composable-studio-api). Use it when you want worked request bodies for each create route (repeater + condition block, freeform pinned entry/query, section slot, exposed props), the full 412 / 502 error contract with service error codes, or the node and binding schemas. It omits the three flavor-scoped read routes, and its operationIds are handler names, so prefer the 3.1 spec for MCP tooling.

For the layout-tree vocabulary shared with the raw-CMA path, keep [Building Blocks](/docs/studio/composition-building-blocks), [Sections](/docs/studio/section-compositions-api), and [Templates](/docs/studio/template-compositions-api) open alongside.
