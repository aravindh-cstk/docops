---
title: "Update a project variable"
description: PUT /v1/projects/{project_uid}/variables/{variable_uid}
url: developers/apis/automations-management-api/requests/update-a-project-variable
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Update a project variable

**PUT** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Update a project variable request lets you update the key, value and type of a project variable.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `bd0ce37910cb4172b844308aa07e6bf7`

## Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
    "key": "Key3",
    "type": "text",
    "value": "abcd@1234"
}
```

## Sample Response

```json
{
    "key": "Key3",
    "value": "abcd@1234",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "text",
    "created_at": "2024-02-22T13:38:36.439Z",
    "updated_at": "2024-02-22T13:42:23.560Z",
    "id": "bd0ce37910cb4172b844308aa07e6bf7"
}
```

