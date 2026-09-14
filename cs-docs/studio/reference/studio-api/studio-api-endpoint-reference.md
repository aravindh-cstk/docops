---
title: "Studio API Endpoint Reference"
description: "The API surface is 16 routes across three groups. Compositions are the reason the service exists. The rest support them, and projects hold the."
url: /studio/studio-api-endpoint-reference
---

# Studio API Endpoint Reference

## Studio API: endpoint reference

> Every documented route of the [managed Studio API service](/docs/studio/studio-api), in one table, plus the envelope they all share: base URLs, versioning, the authentication split, and the request/response conventions. Each group links to the page that documents its routes in full.
> 
> **Preview: not yet GA.** Paths and response shapes may still change, and the service may not be enabled on your region or tenant yet. If a call 404s at the host, the service isn't deployed for you. Use the [raw CMA path](/docs/studio/create-compositions-via-the-api) in the meantime.

The API surface is **16 routes across three groups**. Compositions are the reason the service exists. The rest support them: projects hold the stack/content-type/locale binding every composition route reads, and registered components report what a project can place.

## Every route at a glance

| Group | Operation | Method and path |
| --- | --- | --- |
| [Projects](/docs/studio/studio-api-projects) | List projects | GET /v1/projects |
|  | Fetch a project | GET /v1/projects/{uid} |
|  | Create a project | POST /v1/projects |
|  | Update a project | PUT /v1/projects/{uid} |
|  | Delete a project | DELETE /v1/projects/{uid} |
| [Compositions](/docs/studio/studio-api-compositions) | Create a composition | POST /v1/projects/{projectUid}/compositions |
|  | Create a template | POST /v1/projects/{projectUid}/compositions/templates |
|  | Create a section | POST /v1/projects/{projectUid}/compositions/sections |
|  | List / query | GET /v1/projects/{projectUid}/compositions |
|  | Fetch one | GET /v1/projects/{projectUid}/compositions/{uid} |
|  | Fetch as template | GET /v1/projects/{projectUid}/compositions/{uid}/template |
|  | Fetch as section | GET /v1/projects/{projectUid}/compositions/{uid}/section |
|  | List references | GET /v1/projects/{projectUid}/compositions/{uid}/references |
|  | Update | PUT /v1/projects/{projectUid}/compositions/{uid} |
|  | Delete | DELETE /v1/projects/{projectUid}/compositions/{uid} |
| [Registered components](/docs/studio/studio-api-registered-components) | List synced components | GET /v1/projects/{projectUid}/registered-components |

Every route requires the organization\_uid header, and every route is scoped to a project, either through the path or through the project record it resolves.

**Success codes follow the verbs**: POST returns 201, everything else 200. There are two exceptions up front: the flavor-scoped fetches return 404 when the uid is the other flavor, and DELETE …/compositions/{uid} returns 409 when something still references it. Failure statuses and the error\_code catalog live in [Errors and validation](/docs/studio/studio-api-errors-and-validation).

## 1\. Base URL and versioning

The service is **URI-versioned**: defaultVersion: '1' with prefix v, so every path begins /v1. There is no unversioned alias.

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

Paths are identical across regions: only the host changes. Each region is a separate deployment with its own data, so a project created in one region is not reachable from another region's host.

## 2\. Authentication: where it actually happens

The service **does not authenticate you itself**. The Contentstack API gateway does, and passes the resolved caller downstream as headers (x-user-type, x-user-uid, x-organization-uid, plus principal-specific fields). A global request hook turns those into the request's identity before any handler runs.

Three consequences to know:

-   **No route is anonymous.** The hook runs for every request without exception.
-   **Your principal type is preserved.** A user session, an Open Authorization (OAuth) app, a management token, and a preview token each reach the access check as themselves. This matters: an earlier version forced every caller to SystemUser, which discarded OAuth identity and denied OAuth writes with a misleading 422 stack\_not\_found.
-   **If identity can't be resolved** (for instance the authorization sidecar is unreachable), the request fails with 500 rather than continuing unauthenticated.

Send **one** credential plus the organization:

| Header | Value | Required |
| --- | --- | --- |
| authtoken | Contentstack **session** token, how the Studio browser app authenticates | one of the two |
| authorization | Bearer <access\_token>, how OAuth clients (the CLI, the Figma plugin) authenticate | one of the two |
| organization\_uid | The organization UID that owns the project | Yes |

### The second hop: which credential gets forwarded

Gateway identity alone isn't enough for the routes that call another Contentstack service on your behalf. Those handlers re-read your **raw credential header** and forward it, because the service holds no credential of its own. It acts as you. Both styles are first-class:

| You send | Forwarded upstream as |
| --- | --- |
| authtoken: <session token> | authtoken: <session token> |
| authorization: Bearer <access token> | authorization: Bearer <access token> |

Exactly **one** credential header is ever sent upstream. When a request carries both, the gateway-asserted principal decides (x-user-type: OAuthBot selects the OAuth token) so the credential forwarded always matches the identity the permission check ran on. A non-Bearer authorization value, such as a raw management token, is deliberately **not** relayed.

The Bearer prefix is required. Upstream reads a bare authorization value as a management token, so dropping the prefix fails as the wrong credential kind rather than as a malformed one.

Which routes do this:

| Routes | Forwards your credential | To |
| --- | --- | --- |
| Compositions | Required (401 without one) | Contentstack's CMA, to read and write entries |
| Registered components | Required (401 without one) | Studio's component service |
| Projects | Not read | No downstream call to delegate to |

Missing credentials surface as 401 error\_code 39 composition\_missing\_auth\_token on composition routes and 401 error\_code 48 registered\_components\_missing\_auth\_token on registered components. Both fire only when **neither** credential reached the service.

> **A gateway dependency.** This all assumes the gateway forwards your raw authtoken / authorization header downstream, not only the identity headers derived from it. Where it doesn't, you get the clear 401 above rather than an opaque upstream failure.

### Access checks

| Check | What it verifies | On failure |
| --- | --- | --- |
| **Identity** | The gateway resolved a caller | request never reaches the handler |
| **Project access** | You have read/write access to the project's connected stack | **422** stack\_not\_found (21) |
| **Delegation** (compositions, registered components) | A credential reached the service and the upstream accepts it | **401** (39 / 48) if neither credential arrived. The upstream 401/403 is preserved if it rejects the one that did |

GET routes need **read** access to the project's stack. POST/PUT/DELETE need **write** access. Denial is **422**, not 403, the Studio convention across this service.

## 3\. Request and response conventions

These hold for every route, so the per-group pages don't repeat them.

| Convention | Behavior |
| --- | --- |
| **Unknown body fields** | Silently **stripped**, not rejected. The service validates against a whitelist. A typo'd field name is discarded without a warning. |
| **DTO-shape failures** | Return the framework's { statusCode, message, error } shape, **not** the service error envelope. Validation stops at the first error on a field. |
| **Service-level errors** | Use the { error\_message, error\_code, errors } envelope. Branch on error\_code, not message text. See the [error catalog](/docs/studio/studio-api-errors-and-validation). |
| **Request timeout** | 60 seconds, applied globally. |
| **CORS** | GET, POST, PUT, PATCH, DELETE, OPTIONS. |
| **Trailing slashes** | Ignored: /v1/projects and /v1/projects/ are the same route. |

> **Client gotcha: body-less DELETE.** Do **not** send Content-Type: application/json on a DELETE with no body. The server rejects that combination with a 400 before the handler runs. Send the DELETE with no Content-Type header. This applies to both delete routes.

## 4\. Machine-readable contract

Every route on this page is also described in the [OpenAPI 3.1 spec](https://studio-documentation.contentstackapps.com/api/studio-api/openapi.yaml). Generate an MCP tool server, an SDK, or a Postman collection with any OpenAPI-consuming generator. Each operationId doubles as an MCP tool name.

## 5\. Cross-cutting pitfalls

| Pitfall | Why it bites | Fix |
| --- | --- | --- |
| Missing organization\_uid returns 404, not 400 | The header feeds the org scope of the lookup, so an absent value reads as "no such record" rather than "bad request". Affects every group. | Send organization\_uid on every call. Treat an unexplained 404 as a missing-header suspect first. |
| A project document with no deletedAt field is invisible | Project lookups filter on deletedAt: false, which does not match a document where the field is absent, for example one written before the field existed. | Confirm the record carries deletedAt: false. A project that lists but won't fetch is the signature. |
| Write denial surfaces as 422, not 403 | stack\_not\_found (21) is returned when the stack ACL rejects a write, which reads like a missing stack rather than a permissions problem. | Check the caller's access to the project's connected stack before hunting for a bad projectUid. |
| Registered components has no pagination | The upstream component service returns the full set in one response. | Expect the whole list. There are no limit/skip params to use. |

## Where to go next

-   **[Projects](/docs/studio/studio-api-projects)**: the five project routes, the project record's fields, and what each one binds.
-   **[Compositions](/docs/studio/studio-api-compositions)**: the ten composition routes, with request/response shapes, query params, and curl examples.
-   **[Registered components](/docs/studio/studio-api-registered-components)**: what the synced-component list does and doesn't contain.
-   **[Errors and validation](/docs/studio/studio-api-errors-and-validation)**: the response envelope, the full status and error\_code catalog, and the Studio rules enforced on every write.
