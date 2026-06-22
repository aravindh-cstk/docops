---
title: "Activate/Deactivate an automation"
description: PATCH /v1/projects/{project_uid}/automations/{automation_uid}
url: developers/apis/automations-management-api/requests/activate-deactivate-an-automation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-23
---

# Activate/Deactivate an automation


**Method:** `PATCH`  
**Endpoint:** `/v1/projects/{project_uid}/automations/{automation_uid}`

The Activate/Deactivate an automation request sets an automation to an active or inactive state.

To configure the permissions for your application via OAuth, include the automationhub.automations:write scope.

**Note:** To activate/deactivate an automation, you must have a trigger and an action configured in your project.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 | Enter the Project UID. |

| automation_uid | bb27e85b4b3b4fdbac4c19b7765b1d0f | Enter the Automation UID. |

**Request Body:**

```json
{
 "active": true
}
```

**Response (200):**

```json
{
    "message": "automation has been activated successfully"
}
```
