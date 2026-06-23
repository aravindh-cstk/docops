---
title: "Get a single project variable"
description: GET /v1/projects/{project_uid}/variables/{variable_uid}
url: developers/apis/automations-management-api/requests/get-a-single-project-variable
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get a single project variable

**GET** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Get a single project variable request fetches a specific project variable defined in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:read scope.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `f7bbf2d9cb894b5aa34b3d28603ae174`

## Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

## Sample Response

```json
{
    "key": "Key2",
    "value": "ENC_123456789014;2WjbDeWolmvVJVsm;vjFptQQq3+I/V27Uru97/g==;wKoBGVLgsw==",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "password",
    "created_at": "2024-02-22T11:33:03.772Z",
    "updated_at": "2024-02-22T11:33:03.772Z",
    "id": "f7bbf2d9cb894b5aa34b3d28603ae174"
}
```

