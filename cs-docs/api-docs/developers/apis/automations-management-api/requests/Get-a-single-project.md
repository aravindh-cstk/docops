---
title: "Get a single project"
description: GET /v1/projects/{project_uid}
url: developers/apis/automations-management-api/requests/get-a-single-project
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-11
---

# Get a single project


**Method:** `GET`  
**Endpoint:** `/v1/projects/{project_uid}`

The Get a single project request fetches a specific project created in your organization. When executing the API request, you need to provide the organization UID and your authtoken in the Request Header.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 | Enter the Project UID. |

**Response (200):**

```json
{
    "title": "Sample Test Project - Docs",
    "description": "",
    "user_id": "blt762****ae71c6b33",
    "org_id": "blt4051****a6ddf287",
    "shared": [],
    "tags": [],
    "updated_by": "blt76240****71c6b33",
    "type": "standard",
    "created_at": "2024-02-22T11:31:27.837Z",
    "updated_at": "2024-02-22T11:31:27.837Z",
    "id": "05732fe9f7d***791715b09a3792f52"
}
```
