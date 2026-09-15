---
title: "Studio API: Project Routes"
description: "Composition routes take a projectUid and nothing else about your stack. That works because the project record carries the rest:"
url: /studio/studio-api-projects
uid: blt5dbcd2e2be9b0731
---

# Studio API: Project Routes

## Projects: the five project routes

> A Studio **project** is the record that binds a stack, a composition content type, an environment, and a locale together. Every composition route resolves its target through a project, which is why these routes come first. Same envelope as the rest of the chapter: /v1 prefix, organization\_uid header, the { error\_message, error\_code, errors } envelope. See [Endpoint reference](/docs/studio/studio-api-endpoint-reference) for the shared conventions.

> **Preview: not yet GA.** Paths and response shapes may still change, and the service may not be enabled on your region or tenant yet.

## Why projects matter to every other route

Composition routes take a projectUid and nothing else about your stack. That works because the project record carries the rest:

| The project holds | What reads it |
| --- | --- |
| connectedStackApiKey | Every access check, and the CMA calls that compositions make |
| contentTypeUid | Where compositions are stored as entries |
| settings.configuration.locale | The default locale for composition reads |
| settings.configuration.environment | The environment for published reads |
| canvasUrl | Which app route Studio loads to preview sections |

So a composition call failing with an access error is often a project problem, not a composition problem: check the project's connected stack first.

## The project record

| Field | Type | Notes |
| --- | --- | --- |
| uid | string | Assigned by the service. |
| name | string | **Required** on create. Max 256 characters. |
| description | string | Optional. Max 1024 characters. Defaults to "". |
| canvasUrl | string | Optional. Max **100** characters, shorter than it looks, and the most common validation surprise here. Defaults to "". Empty means the project uses Playground Canvas. |
| connectedStackApiKey | string | **Required** on create. The stack this project authors against. |
| contentTypeUid | string | **Required** on create. The content type compositions are stored in. |
| settings | object | { configuration: { environment, locale } }. Defaults to both empty strings. |
| organizationUid | string | Set from the organization\_uid header, not from the body. |
| createdAt / updatedAt | ISO date | Maintained by the service. |
| createdBy / updatedBy | string | User UID, taken from the caller's identity. |
| deletedAt | false | ISO date | false while live. Deletion sets a timestamp, see section 5. |
| deletedBy | string | Set on delete. |

> **A note on the published schema.** The service's Swagger output describes the string length limits with maximum rather than maxLength. That's an annotation slip in the source, not a different rule: the constraints enforced at runtime are the character counts in the table above.

Only six fields are writable: name, description, canvasUrl, connectedStackApiKey, contentTypeUid, settings. Everything else is service-maintained, and sending it is silently ignored.

## 1\. List projects

GET /v1/projects

Returns the projects in the organization that you can see. The scope is **not** simply "all projects in the org". It is the union of two sets:

-   projects whose connectedStackApiKey is a stack you have access to, and
-   projects **you created**, whether or not you still have access to their stack.

The second half is what stops a project from vanishing from its owner's list after a stack permission change.

### Response: 200 OK

```
{
  "projects": [
    {
      "uid": "blt9f2c…",
      "name": "Marketing site",
      "description": "",
      "canvasUrl": "/studio",
      "connectedStackApiKey": "blt1234567890",
      "contentTypeUid": "compositions",
      "settings": { "configuration": { "environment": "production", "locale": "en-us" } },
      "createdAt": "2026-01-01T00:00:00.000Z",
      "deletedAt": false
    }
  ]
}
```

An empty organization returns { "projects": \[\] }, not a 404.

```
curl 'https://<host>/v1/projects' \
  -H "$CS_AUTH" -H 'organization_uid: <org-uid>'
```

## 2\. Fetch a project

GET /v1/projects/{uid}

| Param | In | Required | Notes |
| --- | --- | --- | --- |
| uid | path | yes | UID of the project. |

Scoped to your organization and to live projects only (deletedAt: false). Access is re-checked after the lookup: if you can neither reach the project's stack nor own the project, the response is 404 project\_not\_found (1) rather than a 403: the service doesn't confirm that a project you can't see exists.

### Response: 200 OK

```
{ "project": { "uid": "blt9f2c…", "name": "Marketing site", … } }
```

> **The missing-deletedAt trap.** The lookup filters on deletedAt: false, and that does not match a document where the field is **absent**: an older record written before the field existed returns 404 here while still appearing in the list route. A project that lists but won't fetch has this shape.

```
curl 'https://<host>/v1/projects/<uid>' \
  -H "$CS_AUTH" -H 'organization_uid: <org-uid>'
```

## 3\. Create a project

POST /v1/projects

### Request body

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| name | string | Yes | Max 256 characters. |
| connectedStackApiKey | string | Yes | You need **write** access to this stack, checked before anything is written. |
| contentTypeUid | string | Yes | The content type compositions are stored in. |
| description | string | - | Max 1024 characters. |
| canvasUrl | string | - | Max 100 characters. Omit to use Playground Canvas. |
| settings | object | - | { configuration: { environment, locale } }. |

organizationUid, createdBy, and updatedBy are set from your identity and the organization\_uid header, sending them has no effect.

### Response: 201 Created

```
{
  "notice": "Project created successfully",
  "project": { "uid": "blt9f2c…", "name": "Marketing site", "deletedAt": false, … }
}
```

### Notable errors

422 stack\_not\_found (21) when you lack write access to connectedStackApiKey: this is the access failure, not a claim that the stack doesn't exist. 400 for DTO-shape problems, in the framework's { statusCode, message, error } shape. 422 project\_create\_failed (2) if the authorization SDK fails during the call.

```
curl -X POST 'https://<host>/v1/projects' \
  -H "$CS_AUTH" -H 'organization_uid: <org-uid>' \
  -H 'Content-Type: application/json' \
  -d '{ "name": "Marketing site", "connectedStackApiKey": "blt1234567890",
        "contentTypeUid": "compositions",
        "settings": { "configuration": { "environment": "production", "locale": "en-us" } } }'
```

## 4\. Update a project

PUT /v1/projects/{uid}

A **partial update**: every writable field is optional, and omitted fields keep their stored values.

Write access is checked against the project's **stored** connectedStackApiKey before the update runs. Repointing a project at a different stack therefore checks your access to the current stack, not the new one.

### Response: 200 OK

```
{ "notice": "Project updated successfully", "project": { /* the updated record */ } }
```

404 project\_not\_found (1) if the uid isn't a live project in your organization. 422 stack\_not\_found (21) on access denial. 422 project\_update\_failed (3) on an authorization-SDK failure.

```
curl -X PUT 'https://<host>/v1/projects/<uid>' \
  -H "$CS_AUTH" -H 'organization_uid: <org-uid>' \
  -H 'Content-Type: application/json' \
  -d '{ "canvasUrl": "/studio" }'
```

## 5\. Delete a project

DELETE /v1/projects/{uid}

A **soft delete**: the record stays and deletedAt becomes a timestamp, which removes it from every lookup in this chapter. There is no undelete route, and no force parameter.

Unlike deleting a composition, this is **not** reference-guarded: the project's compositions are not checked, counted, or removed. They remain as entries in the connected stack, orphaned from Studio's point of view.

### Response: 200 OK

```
{ "notice": "Project deleted successfully" }
```

404 project\_not\_found (1) if it isn't a live project in your organization. 422 stack\_not\_found (21) on access denial. 422 project\_delete\_failed (4) on an authorization-SDK failure.

> Send the DELETE **without** a Content-Type header. A body-less DELETE carrying Content-Type: application/json is rejected with a 400 before the handler runs.

```
curl -X DELETE 'https://<host>/v1/projects/<uid>' \
  -H "$CS_AUTH" -H 'organization_uid: <org-uid>'
```

## See also

-   [Endpoint reference](/docs/studio/studio-api-endpoint-reference): every route in the service, and the shared envelope.
-   [Compositions](/docs/studio/studio-api-compositions): the routes that resolve their target through a project.
-   [Errors and validation](/docs/studio/studio-api-errors-and-validation): the full error\_code catalog.
-   [Create a Studio project](/docs/studio/create-a-studio-project): the same thing through the Studio UI.
