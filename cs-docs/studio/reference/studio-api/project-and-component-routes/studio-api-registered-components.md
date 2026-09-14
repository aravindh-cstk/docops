---
title: "Studio API: Registered Components"
description: "Three different things are easy to confuse. Only the third one is what this endpoint returns."
url: /studio/studio-api-registered-components
---

# Studio API: Registered Components

## Registered components: list what a project has synced

> A read-only route on the [managed Studio API service](/docs/studio/studio-api), alongside the composition endpoints. It reports the components a project has **synced to Studio's component service**, with their prop schemas. Same base URL, same [authentication](/docs/studio/studio-api#3-authentication-and-authorization), same error envelope as the rest of the chapter.

> **Preview: not yet GA.** As with every route in this chapter, paths and response shapes may still change, and the service may not be enabled on your region or tenant yet.

## What this list actually contains

Three different things are easy to confuse. Only the third one is what this endpoint returns.

|  | Where it lives | How it gets there |
| --- | --- | --- |
| **Registered in code** | Your app's Studio registry, in the browser | registerComponent / registerComponents / registerLazyComponent at app boot. See [Registering components](/docs/studio/register-components) |
| **Visible in the palette** | Studio's canvas UI | Registration runs before the canvas iframe loads |
| **Synced to the service** (what this endpoint returns) | Studio's component service | csdx studio:component:sync. See [Studio CLI](/docs/studio/studio-cli) |

A component registered in code but never synced does **not** appear here, and an empty list does not mean the palette is empty. Use this endpoint when a tool outside the browser (a Figma mapping flow, a script, an agent) needs to know what a project declares and what props each component takes.

## List registered components

GET /v1/projects/{projectUid}/registered-components

| Param | In | Required | Notes |
| --- | --- | --- | --- |
| projectUid | path | yes | UID of the Studio project. Must be a live project in the organization you authenticate with. |
| $CS\_AUTH | header | yes | Your credential: attempt **OAuth** first (authorization: Bearer <access\_token>), with a session authtoken as the last rung. See [Authentication and authorization](/docs/studio/studio-api#3-authentication-and-authorization). |
| organization\_uid | header | yes | Organization the project belongs to. |

No query parameters. The route returns every synced component for the project. There is no pagination, filtering, or sorting.

```
curl 'https://<host>/v1/projects/<projectUid>/registered-components' \
  -H "$CS_AUTH" -H 'organization_uid: <org-uid>'
```

### Response: 200 OK

```
{
  "registered_components": [
    {
      "uid": "bd3c9c3c…",
      "organization_uid": "blt739e38d90d4fc4e6",
      "projectId": "69a541cc…",
      "componentName": "HeroBanner",
      "displayName": "Hero Banner",
      "description": "Full-width hero with a headline",
      "aiDescription": "",
      "version": "1.0.0",
      "importPath": "src/components/HeroBanner.tsx",
      "createdAt": "2026-08-24T09:46:25.440Z",
      "updatedAt": "2026-08-24T09:46:25.440Z",
      "props": [
        { "type": "string", "name": "title", "displayName": "Title" }
      ]
    }
  ],
  "meta": { "count": 1 }
}
```

meta.count is the number of components in this response. Since the route never paginates, it is also the project's total.

### Component fields

| Field | Type | Notes |
| --- | --- | --- |
| uid | string | Component UID in the component service. |
| organization\_uid | string | Organization that owns the record. |
| projectId | string | UID of the Studio project, matches the projectUid you requested. |
| componentName | string | The component's name in code, e.g. HeroBanner. This is the identifier a composition's ui node references as its type. |
| displayName | string, optional | Human-readable label. Often absent. Fall back to componentName rather than assuming it is set. |
| description | string, optional | Author-facing description. |
| aiDescription | string, optional | Description used by AI-assisted flows. |
| version | string | Version recorded at sync time. |
| importPath | string | Path to the component source in the repo, e.g. src/components/HeroBanner.tsx. |
| props | array | The component's prop schema. See below. |
| createdAt / updatedAt | string, optional | ISO 8601 timestamps. |

### Prop fields

| Field | Type | Notes |
| --- | --- | --- |
| type | string | Prop type as recorded at sync time, e.g. string, number. For the full set supported in a registry schema, see [Component schema: prop types](/docs/studio/component-schema-prop-types). |
| name | string | Prop name in code. |
| displayName | string, optional | Label for the prop. |
| description | string, optional | Help text. |
| placeholder | string, optional | Placeholder for the input. |
| defaultValue | any, optional | Default recorded for the prop. |

Only these fields are published. The service maps the component service's records onto this contract field by field, so storage internals never appear in the response.

## Errors

The envelope is the same as everywhere else in this chapter. See [Errors & validation](/docs/studio/studio-api-errors-and-validation) for the shared shape.

| Status | error\_code | When |
| --- | --- | --- |
| 401 | 48 | Neither a session authtoken nor an OAuth Authorization: Bearer token reached the service. Both styles are accepted. This fires only when neither arrived. |
| 404 | 1 | No live project with that UID in this organization. A soft-deleted project reads the same as a missing one. |
| 422 | 21 | The caller has no read access to the project's connected stack. |
| 502 | 46 | The component service could not be reached, failed, or answered with something other than the documented array. |
| upstream status | 46 | A client error from the component service (for example 403) is passed through with its own status rather than masked as a 502. |

An empty list is a 200, never a 404: a project with nothing synced returns {"registered\_components": \[\], "meta": {"count": 0}}.

## Scope

This route is **read-only**. The managed service has no create, update, or delete for registered components. Components enter the list through csdx studio:component:sync and are removed through the CLI. To change what a project can build with, change the registrations in your app and sync again.

## Where to go next

-   [Registering components](/docs/studio/register-components): the three register APIs, and how components reach Studio's palette in the first place.
-   [Studio CLI](/docs/studio/studio-cli): studio:component:register and studio:component:sync.
-   [Endpoint reference](/docs/studio/studio-api-endpoint-reference): all 16 routes on this service, and the envelope they share.
-   [Compositions](/docs/studio/studio-api-compositions): the composition routes on this same service.
-   [OpenAPI 3.1 spec](https://studio-documentation.contentstackapps.com/api/studio-api/openapi.yaml). This route is included as operationId: listRegisteredComponents, with RegisteredComponent + RegisteredComponentProp component schemas.
