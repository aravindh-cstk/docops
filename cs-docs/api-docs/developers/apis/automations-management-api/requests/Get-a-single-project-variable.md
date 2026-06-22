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


**Method:** `GET`  
**Endpoint:** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Get a single project variable request fetches a specific project variable defined in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 | Enter the Project UID. |

| variable_uid | f7bbf2d9cb894b5aa34b3d28603ae174 | Enter the UID of the project variable. |

**Response (200):**

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
