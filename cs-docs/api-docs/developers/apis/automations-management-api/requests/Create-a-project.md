---
title: "Create a project"
description: POST /v1/projects
url: developers/apis/automations-management-api/requests/create-a-project
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Create a project


**Method:** `POST`  
**Endpoint:** `/v1/projects`

The Create a project request lets you create a project in your organization.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:writescope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

**Request Body:**

```json
{
 "description": "This is a sample project",
 "tags": ["sample"],
 "title": "Sample Demo Project-Docs"
}
```

**Response (201):**

```json
{
    "title": "Sample Demo Project-Docs",
    "description": "This is a sample project",
    "user_id": "blt7aa853***b03b79c0",
    "org_id": "blt4051c65***ddf287",
    "shared": [],
    "tags": [
        "sample"
    ],
    "updated_by": "blt7aa****ab03b79c0",
    "created_at": "2024-02-22T13:01:00.471Z",
    "updated_at": "2024-02-22T13:01:00.471Z",
    "id": "d8674f45bee847***f044e1da7428a70"
}
```
