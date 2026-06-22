---
title: "Delete a project"
description: DELETE /v1/projects/{project_uid}
url: developers/apis/automations-management-api/requests/delete-a-project
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Delete a project


**Method:** `DELETE`  
**Endpoint:** `/v1/projects/{project_uid}`

The Delete a project request lets you delete an existing project in an organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| project_uid | f208798e666b45c89c66e66752dd4422 | Enter the Project UID. |

**Response (200):**

```json
{
    "message": "Project deleted successfully."
}
```
