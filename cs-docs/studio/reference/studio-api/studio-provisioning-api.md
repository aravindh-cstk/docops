---
title: "Studio provisioning API reference"
description: "The host map across regions for every service Studio provisioning touches, the non-prod host pattern, and the /v1/projects request shape that registers a Studio project."
url: /studio/studio-provisioning-api
uid: blt9920e8480195bd5b
---

# Studio provisioning API reference

## Studio provisioning API reference

Provisioning a Studio project touches five hosts, and each one is region-specific. One wrong host provisions a content type, tokens and a Studio project in the wrong data center. Nothing errors, because the calls succeed against whichever region that host belongs to. This page is the host map across regions, the non-prod host pattern, and the /v1/projects request shape that registers the project.

## Overview

Two API surfaces do the work.

-   **Content Management API (CMA)** creates the stack, the compositions content type, the environment, the delivery token and the preview token, and enables Live Preview on the stack.
-   **Studio API** creates the Studio project through /v1/projects. It binds the project to the stack (connectedStackApiKey) and to the compositions content type (contentTypeUid), then configures the environment, the locale and Freeform.

Three more hosts appear at runtime rather than at provisioning time: the Content Delivery API (CDA), the Live Preview preview channel, and the images content delivery network (CDN). They belong in the same map because the SDK derives one host from another, so a mismatch between them fails after provisioning succeeds.

Every host below belongs to a single region. A project created in one region is not reachable from another region's host.

## Prerequisites

Before you send any call on this page, have all four of the following:

-   The region your stack lives in. Establish this first, because every host below depends on it. See [Check Studio access](/docs/studio/check-studio-access).
-   A resolved Contentstack Management API credential, either an Open Authorization (OAuth) access token or a session token. See [Studio API authentication](/docs/studio/studio-api-endpoint-reference).
-   The organization uid that owns the Studio project. The Studio interface shows it under [organization settings](https://www.contentstack.com/docs/owners-and-admins/organization-settings).
-   The stack api\_key for the target stack. Read it from [Settings > Stack](https://www.contentstack.com/docs/developers/apis/content-management-api/).

## Production host map

The table below lists every service Studio provisioning and rendering touch, for the seven production regions.

| Region | CMA | Studio API | CDA (host) | Live Preview (live\_preview.host) |
| --- | --- | --- | --- | --- |
| AWS NA (us) | api.contentstack.io | composable-studio-api.contentstack.com | (omit, default) | rest-preview.contentstack.com |
| AWS EU (eu) | eu-api.contentstack.com | eu-composable-studio-api.contentstack.com | eu-cdn.contentstack.com | eu-rest-preview.contentstack.com |
| AWS AU (au) | au-api.contentstack.com | au-composable-studio-api.contentstack.com | au-cdn.contentstack.com | au-rest-preview.contentstack.com |
| Azure NA (azure-na) | azure-na-api.contentstack.com | azure-na-composable-studio-api.contentstack.com | azure-na-cdn.contentstack.com | azure-na-rest-preview.contentstack.com |
| Azure EU (azure-eu) | azure-eu-api.contentstack.com | azure-eu-composable-studio-api.contentstack.com | azure-eu-cdn.contentstack.com | azure-eu-rest-preview.contentstack.com |
| GCP NA (gcp-na) | gcp-na-api.contentstack.com | gcp-na-composable-studio-api.contentstack.com | gcp-na-cdn.contentstack.com | gcp-na-rest-preview.contentstack.com |
| GCP EU (gcp-eu) | gcp-eu-api.contentstack.com | gcp-eu-composable-studio-api.contentstack.com | gcp-eu-cdn.contentstack.com | gcp-eu-rest-preview.contentstack.com |

AWS NA is the only region whose CMA host ends in .contentstack.io. Every other region uses <region>-api.contentstack.com. For the canonical, always-current list of Contentstack regional endpoints, see [API endpoints by region](https://www.contentstack.com/docs/developers/contentstack-regions/api-endpoints).

**Match the pair.** Mixing an NA Studio API host with an EU CMA host returns 401 and 404 responses with no clear error. Pick a region and use both region-matched hosts.

## Non-production hosts

Internal QA, staging and development stacks live on csnonprod.com. The Delivery SDK has no region shortcut for them, so you set every host explicitly. The pattern is <env>-<service>.csnonprod.com, where <env> is the non-production environment name, for example dev10, dev11, dev15, stag or eu-dev. Treat the environment name as user-supplied: there are many, and the list changes.

| Service | Non-production host pattern | Used by |
| --- | --- | --- |
| CDA (Delivery) | <env>-cdn.csnonprod.com | Contentstack.stack({ host }) |
| Live Preview | <env>-rest-preview.csnonprod.com | live\_preview.host |
| CMA | <env>-api.csnonprod.com | Management scripts, provisioning |
| Studio API | <env>-composable-studio-api.csnonprod.com | Studio project creation, project listing |
| Editor (browser) | <env>-app.csnonprod.com | The Studio interface. You open this URL |
| Images CDN | <env>-images.csnonprod.com | Asset URLs in entry responses |

**Without an explicit host:, non-production work lands in production.** The Studio React SDK derives its Studio API host from the Delivery stack you pass it. Omit host: on Contentstack.stack({...}) and it defaults to the AWS NA production CDA, so the Studio SDK points at the production Studio API too. Set the CDA host explicitly:

```
const stack = Contentstack.stack({
  apiKey,
  deliveryToken,
  environment,
  host: `${csEnv}-cdn.csnonprod.com`,
  live_preview: {
    enable: true,
    preview_token,
    host: `${csEnv}-rest-preview.csnonprod.com`,
  },
});
```

## Authentication headers

Both surfaces expect a credential and a scope identifier together, but they scope differently.

| Surface | Credential header | Scope header |
| --- | --- | --- |
| CMA | authorization: Bearer <access\_token>, or authtoken: <session\_token> | api\_key: <stack api\_key> |
| Studio API | authorization: Bearer <access\_token>, or authtoken: <session\_token> | organization\_uid: <org uid> |

Studio projects are organization-scoped, so /v1/projects takes organization\_uid and not a stack api\_key. Sending a stack api\_key instead returns 422 error\_code 21, "Stack not found".

**Try OAuth first.** authorization: Bearer <oauth-access-token> paired with organization\_uid returns 200 and the project list on AWS NA production. Escalate to a session authtoken only after OAuth returns 401 error\_code 105 ("authtoken is not valid") or 422 error\_code 21 ("Stack not found"). A session authtoken is a full user-session credential that covers every organization, stack and permission the user holds, so scope it to the single call and discard it. Do not write it to .env.

Send the OAuth token in the right header. OAuth goes in authorization: Bearer, and authtoken: carries session tokens only. Sending an OAuth token as authtoken: returns 401 error\_code 105. For the full credential ladder, see [Studio API authentication](/docs/studio/studio-api-endpoint-reference).

## Register a project: POST /v1/projects

POST creates the project. A separate PUT configures it, because the environment, the locale and Freeform attach after the project exists.

```
curl -s -X POST "https://<studio-api-host>/v1/projects" \
  -H "authorization: Bearer <ACCESS_TOKEN>" \
  -H "organization_uid: <ORG_UID>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "<PROJECT_NAME>",
    "description": "<DESCRIPTION>",
    "connectedStackApiKey": "<STACK_API_KEY>",
    "contentTypeUid": "<COMPOSITIONS_CT_UID>",
    "canvasUrl": "/canvas"
  }'
```

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| name | string | Yes | Display name in the Studio project list |
| description | string | No | Free text |
| connectedStackApiKey | string | Yes | The stack api\_key, not a token |
| contentTypeUid | string | Yes | The compositions content type created through the CMA |
| canvasUrl | string | Yes | The route on your app that mounts <StudioCanvas />, for example /canvas |

A successful create returns 201. An empty or missing connectedStackApiKey produces a project the canvas cannot resolve compositions against, so verify the response carries the value you sent.

## Configure a project: PUT /v1/projects/{projectUid}

```
curl -s -X PUT "https://<studio-api-host>/v1/projects/<PROJECT_UID>" \
  -H "authorization: Bearer <ACCESS_TOKEN>" \
  -H "organization_uid: <ORG_UID>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "<PROJECT_NAME>",
    "canvasUrl": "/canvas",
    "connectedStackApiKey": "<STACK_API_KEY>",
    "contentTypeUid": "<COMPOSITIONS_CT_UID>",
    "settings": {
      "configuration": { "environment": "<ENVIRONMENT_UID>", "locale": "en-us" },
      "isFreeformEnabled": true
    }
  }'
```

**settings.configuration.environment takes the environment uid, not the name.** The Studio API accepts a name without erroring, and the environment binding then misses, so compositions never resolve. Look the uid up with GET /v3/environments against the CMA before you send the PUT.

Send the full body on every PUT. To re-bind an existing project to a new stack, send the current connectedStackApiKey. A project holding a stale value serves the previous stack's compositions, and the current stack then looks empty in the canvas.

## List projects: GET /v1/projects

Run this before creating anything. Creating blind against a stack that already has a project produces a duplicate, nothing errors, and half your tooling then points at each project.

```
curl -s "https://<studio-api-host>/v1/projects" \
  -H "authorization: Bearer <ACCESS_TOKEN>" \
  -H "organization_uid: <ORG_UID>" | jq -r \
  '.projects[] | "\(.uid)  \(.name)  stack=\(.connectedStackApiKey)  ct=\(.contentTypeUid)"'
```

A 401 or 422 response is an authentication failure, not evidence that no project exists. Resolve the credential first, then re-check.

## The two-call CT create

The compositions content type references itself through linked\_sections, and the CMA validates reference targets when it creates a content type. A content type cannot reference itself before it exists, so a single POST carrying linked\_sections fails with error\_code 115: symbols.reference\_to: content type does not exist.

Send the two calls below in order:

1.  POST /v3/content\_types with the schema minus linked\_sections.
2.  PUT /v3/content\_types/<uid> with the full schema, including linked\_sections.

linked\_sections is a reference field with multiple: true and reference\_to set to the content type's own uid. For the complete field list and the cardinality each field requires, see the provision-studio-project skill.

## Troubleshooting

| Symptom | Cause | Resolution |
| --- | --- | --- |
| Content type creation returns 404 | The CMA host belongs to a different region than the stack | Use the region-matched CMA host from the production host map above |
| 401 and 404 responses with no field diagnostic | The CMA host and the Studio API host belong to different regions | Pick one region and use both of its hosts |
| 422 error\_code 21, "Stack not found", on /v1/projects | The request carries a stack api\_key where organization\_uid belongs | Send organization\_uid. Studio projects are organization-scoped |
| 401 error\_code 105, "authtoken is not valid" | The request carries an OAuth token in the authtoken header | Send it as authorization: Bearer <access\_token> |
| 403 error\_code 316, "You don't have the permission to do this operation" | The credential is valid but aims at another organization, or the user lacks stack-create rights | Switch the active organization, or request stack-create rights. Do not re-authenticate |
| error\_code 115, symbols.reference\_to: content type does not exist | The initial POST carries linked\_sections | Create the content type in two calls, as the section above describes |
| error\_code 248, "could not find environment" | PUT /v3/environments/<uid> puts the uid in the path | This CMA endpoint keys on the environment name: PUT /v3/environments/preview |
| The canvas loads, but compositions never resolve | settings.configuration.environment holds the environment name | Look the uid up with GET /v3/environments and send the uid |
| Non-production work appears in production | Contentstack.stack({...}) omits host: | Set host to <env>-cdn.csnonprod.com explicitly |
| The canvas iframe hangs on "Loading composition" | The stack has Live Preview turned off, so the preview channel fails its cross-origin preflight | PUT /v3/stacks with stack.settings.live\_preview.enable set to true |

## Next steps

-   [Studio API endpoint reference](/docs/studio/studio-api-endpoint-reference): every documented route, the versioning scheme, and the response envelope they share.
-   [Studio API errors and validation](/docs/studio/studio-api-errors-and-validation): the full error\_code catalog.
-   [Check Studio access](/docs/studio/check-studio-access): confirm the organization has Studio enabled before provisioning.
-   [Troubleshoot common Studio issues](/docs/studio/troubleshoot-common-studio-issues): symptoms that appear after provisioning succeeds.
