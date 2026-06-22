---
title: "Create a project variable"
description: POST /v1/projects/{project_uid}/variables
url: developers/apis/automations-management-api/requests/create-a-project-variable
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Create a project variable


**Method:** `POST`  
**Endpoint:** `/v1/projects/{project_uid}/variables`

The Create a project variable request lets you create a project variable in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 | Enter the Project UID. |

**Request Body:**

```json
{
    "key": "Key3",
    "type": "text",
    "value": "password@1234"
}
```

**Response (201):**

```json
{
    "key": "Key3",
    "value": "password@1234",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "text",
    "created_at": "2024-02-22T13:38:36.439Z",
    "updated_at": "2024-02-22T13:38:36.439Z",
    "id": "bd0ce37910cb4172b844308aa07e6bf7"
}
```
