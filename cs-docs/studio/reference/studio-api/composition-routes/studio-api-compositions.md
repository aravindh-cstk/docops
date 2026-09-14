---
title: "Studio API: Composition Routes"
description: "The curl examples below use $CSAUTH for whichever credential header you hold, authorization: Bearer <accesstoken> for an OAuth client, or authtoken."
url: /studio/studio-api-compositions
---

# Studio API: Composition Routes

## Compositions: the ten composition routes

> **Auth:** every route below takes either a session authtoken or an Open Authorization (OAuth) Authorization: Bearer token. Both are first-class, and the service forwards whichever you used to the Content Management API (CMA). 401 error\_code 39 fires only when neither reaches the service. [How the credential is chosen](/docs/studio/studio-api-endpoint-reference#the-second-hop-which-credential-gets-forwarded).

> The composition routes of the [managed Studio API service](/docs/studio/studio-api). All paths are prefixed with /v1 and nested under a project. All require a credential plus the organization\_uid header. You send the ui tree **uncompressed**: the service compresses it. For the layout-tree shapes themselves, see [Building Blocks](/docs/studio/composition-building-blocks). For status codes and validation, see [Errors and validation](/docs/studio/studio-api-errors-and-validation). For the other four route groups and the shared envelope, see the [Endpoint reference](/docs/studio/studio-api-endpoint-reference).

> **Machine-readable contract.** Every route on this page is also described in the [OpenAPI 3.1 spec](https://studio-documentation.contentstackapps.com/api/studio-api/openapi.yaml). Generate an MCP tool server, an SDK, or a Postman collection with any OpenAPI-consuming generator. Each operationId doubles as an MCP tool name.

Base path throughout:

```
/v1/projects/{projectUid}/compositions
```

The curl examples below use $CS\_AUTH for whichever credential header you hold, authorization: Bearer <access\_token> for an OAuth client, or authtoken: <session\_token> from a browser session:

```
export CS_AUTH='authorization: Bearer <access_token>'
```

## 1\. Create a composition

POST /v1/projects/{projectUid}/compositions

Placement comes from the body (place\_composition\_as). For flavor-scoped variants that set it from the route, see section 2.

### Request body

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| title | string | Yes | at most 256 chars, and **not blank**: a whitespace-only title is rejected. |
| place\_composition\_as | "page" | "section" | Yes | page = template, section = section. |
| ui | object (node tree) | Yes | **Uncompressed** node object. Root type must be "page" for both flavors. |
| url | string | - | URL pattern (templates). Omit for sections. |
| composable\_uid | string | - | Stable identity. If omitted, it is backfilled with the entry uid. If provided, it must be non-blank and unique across the content type. |
| connected\_content\_type | string | - | Connected templates only. "" for freeform / sections. |
| schema\_version | string | - | Defaults to "1.0.0". Must be a string. |
| data\_sources | array | - | Sent as an **array**. The service stringifies it. Defaults to \[\]. |
| linked\_sections | array | - | **Deprecated. The value you send is discarded.** Derived from the ui tree on every write that carries one. See below. |
| static\_value, url\_metadata, linked\_schemas, symbols, ui\_preview | - | - | Passed through. See [Building Blocks](/docs/studio/composition-building-blocks). |

> Unknown fields are silently stripped (the service uses a whitelist validator).

> **linked\_sections is derived, not accepted.** It's a real CMA reference field, and the only thing a reverse lookup ("which templates use this section?") can read. Taking it from the request body let it drift: a caller that changed ui without restating the field left the references describing an older tree, so removed sections kept reporting as in use. The service now recomputes it from ui in the same step that compresses the tree, so the two can't disagree. The field is still accepted for backward compatibility and ignored. On an update that carries no ui, the stored value is left alone rather than blanked: the stored tree hasn't changed, so its references still describe it.

### Response: 201 Created

```
{
  "notice": "Composition created successfully",
  "composition": {
    "uid": "blt9f2c…",
    "title": "Blog Post",
    "composable_uid": "blt9f2c…",   // = uid (backfilled) unless you supplied one
    "place_composition_as": "page",
    "ui": "zlib:eJyrVkrLz1eyUl…",    // COMPRESSED in the response
    "data_sources": "[]",            // JSON-encoded string
    "schema_version": "1.0.0"
  },
  "warnings": [ /* non-blocking findings — present only when any exist */ ]
}
```

### Notable errors

422 composition\_invalid (structural validation: all failing paths at once, or a blank composable\_uid), 409 composition\_uid\_conflict (duplicate composable\_uid, any locale), 401 / 422 (auth / access). Full catalog: [Errors & validation](/docs/studio/studio-api-errors-and-validation).

```
curl -X POST 'https://<host>/v1/projects/<projectUid>/compositions' \
  -H "$CS_AUTH" -H 'organization_uid: <org-uid>' \
  -H 'Content-Type: application/json' \
  -d '{ "title": "Blog Post", "place_composition_as": "page",
        "url": "/blog/{{entry.slug}}", "connected_content_type": "blog_post",
        "ui": { "uid": "root", "type": "page", "props": {}, "slots": {}, "metadata": {} },
        "data_sources": [] }'
```

## 2\. Create a template / section (flavor-scoped)

POST …/compositions/templates, POST …/compositions/sections

Convenience variants that set place\_composition\_as from the route, so you omit it (and the fields that don't apply). Same response shape as section 1.

| Route | Sets | Body omits |
| --- | --- | --- |
| …/templates | place\_composition\_as: "page" | place\_composition\_as, linked\_schemas |
| …/sections | place\_composition\_as: "section" | place\_composition\_as, url, connected\_content\_type, linked\_sections |

```
# section
curl -X POST 'https://<host>/v1/projects/<projectUid>/compositions/sections' \
  -H "$CS_AUTH" -H 'organization_uid: <o>' -H 'Content-Type: application/json' \
  -d '{ "title": "Promo band", "linked_schemas": [],
        "ui": { "uid": "root", "type": "page", "props": {}, "slots": {}, "metadata": {} } }'
```

## 3\. List compositions

GET /v1/projects/{projectUid}/compositions

Returns **lightweight** items by default: the heavy ui and data\_sources are omitted so a page of many compositions stays small.

### Query params

| Param | Type | Default | Notes |
| --- | --- | --- | --- |
| place\_composition\_as | page|section | - | Filter by flavor. |
| composable\_uid | string | - | Filter by exact identity. |
| title | string | - | Case-insensitive substring match. |
| limit | int (1 to 100) | 50 | Values above 100 are rejected (400). |
| skip | int (0 or more) | 0 | Offset pagination. |
| include\_count | boolean | false | true adds meta.count with the total. |
| include\_ui | boolean | false | true makes each item include ui and data\_sources. |
| decompression | boolean | false | With include\_ui=true, expands each ui to a node tree. |
| locale | string | project locale | Locale to read. |

### Response: 200 OK

```
{
  "compositions": [
    { "uid": "blt9f2c…", "title": "Blog Post", "composable_uid": "blog-post",
      "place_composition_as": "page", "url": "/blog/{{entry.slug}}",
      "schema_version": "1.0.0" }   // ui + data_sources omitted by default
  ],
  "meta": { "count": 42, "limit": 50, "skip": 0, "returned": 1, "include_ui": false }
}
```

meta.count is present only when include\_count=true. A ui blob that fails to decompress is left compressed rather than failing the whole page.

```
curl 'https://<host>/v1/projects/<projectUid>/compositions?place_composition_as=section&include_count=true' \
  -H "$CS_AUTH" -H 'organization_uid: <o>'
```

## 4\. Fetch a composition

GET /v1/projects/{projectUid}/compositions/{uid}

| Param | In | Default | Notes |
| --- | --- | --- | --- |
| decompression | query | false | true returns ui as a node object, with data\_sources JSON-parsed. |
| locale | query | project locale | Locale to read. |
| environment | query | - | Reserved for reading published content (future), ignored today. |

### Response: 200 OK

```
// default (compressed)
{ "composition": { "uid": "blt9f2c…", "ui": "zlib:eJyr…", "data_sources": "[]" },
  "meta": { "compressed": true, "schema_version": "1.0.0" } }

// ?decompression=true
{ "composition": { "uid": "blt9f2c…", "ui": { "uid": "root", "type": "page", … }, "data_sources": [] },
  "meta": { "compressed": false, "schema_version": "1.0.0" } }
```

meta.compressed tells you which form ui is in. 404 composition\_not\_found if the uid isn't in the CMS.

## 5\. Fetch, asserting a flavor

GET …/{uid}/template, GET …/{uid}/section

Same as section 4, but the entry **must be the requested flavor**, otherwise 404 composition\_flavor\_mismatch. Turns the suffix into a meaningful assertion ("fetch this uid as a template, fail if it isn't") rather than a redundant alias. Accepts the same decompression / locale query params.

```
curl 'https://<host>/v1/projects/<projectUid>/compositions/<uid>/template?decompression=true' \
  -H "$CS_AUTH" -H 'organization_uid: <o>'
# → 404 composition_flavor_mismatch if <uid> is a section
```

## 6\. List references

GET /v1/projects/{projectUid}/compositions/{uid}/references

Returns the entries (e.g. templates) that reference this composition, the same signal the delete guard uses. Use it to show "used by N" and warn **before** deleting.

### Response: 200 OK

```
{ "references": [ { "uid": "blt123", "content_type_uid": "compositions", "title": "Home page" } ],
  "meta": { "count": 1 } }
```

An unreferenced composition returns { "references": \[\], "meta": { "count": 0 } }. 404 if the composition doesn't exist. If the reference check itself fails, the call fails closed and surfaces the upstream status.

## 7\. Update a composition

PUT /v1/projects/{projectUid}/compositions/{uid}

A **partial merge**: send only the fields you're changing. Everything else is preserved.

-   If you send ui, send it **uncompressed**. The service re-validates and re-compresses it.
-   composable\_uid is **immutable**: sending a different value returns 422 composition\_uid\_immutable.
-   An empty patch returns the stored entry unchanged (no CMS write).

### Response: 200 OK

```
{ "notice": "Composition updated successfully",
  "composition": { /* the merged entry, ui compressed */ },
  "warnings": [ /* if re-validation produced any */ ] }
```

```
curl -X PUT 'https://<host>/v1/projects/<projectUid>/compositions/<uid>' \
  -H "$CS_AUTH" -H 'organization_uid: <o>' -H 'Content-Type: application/json' \
  -d '{ "title": "Renamed" }'
```

## 8\. Delete a composition

DELETE /v1/projects/{projectUid}/compositions/{uid}

Hard-deletes the entry, **guarded** by a reference check.

| Param | In | Default | Notes |
| --- | --- | --- | --- |
| force | query | false | true deletes even if referenced. |

If other compositions reference this one, the delete is blocked with 409 composition\_referenced (the referrers are listed) unless ?force=true. If the reference check itself can't complete, the delete is **refused** (fail-closed) with the upstream status preserved, never silently deleted.

### Response: 200 OK

```
{ "notice": "Composition deleted successfully" }
```

> **Client gotcha.** Do **not** send Content-Type: application/json on a body-less DELETE: Fastify rejects that combination with a 400 before the handler runs. Send the DELETE with no Content-Type header.

```
curl -X DELETE 'https://<host>/v1/projects/<projectUid>/compositions/<uid>?force=true' \
  -H "$CS_AUTH" -H 'organization_uid: <o>'
```

## See also

-   **[Endpoint reference](/docs/studio/studio-api-endpoint-reference)**: all 16 routes in one table, including the ten above, plus the base URLs, authentication model, and request/response conventions they share.
-   **[Errors and validation](/docs/studio/studio-api-errors-and-validation)**: the response envelope, the full status and error\_code catalog, and the Studio rules the service enforces.
-   **[Projects](/docs/studio/studio-api-projects)**: the record every route on this page resolves its stack, content type, and locale through.
