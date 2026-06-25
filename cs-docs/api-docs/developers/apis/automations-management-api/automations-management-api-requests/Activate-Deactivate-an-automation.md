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

**PATCH** `/v1/projects/{project_uid}/automations/{automation_uid}`

The Activate/Deactivate an automation request sets an automation to an active or inactive state.

To configure the permissions for your application via OAuth, include the automationhub.automations:write scope.

**Note:** To activate/deactivate an automation, you must have a trigger and an action configured in your project.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **automation_uid** (required)
  Enter the Automation UID.
  Default: `bb27e85b4b3b4fdbac4c19b7765b1d0f`

## Headers

- **authtoken** (optional)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

## Sample Request

```json
{
 "active": true
}
```

## Sample Response

```json
{
    "message": "automation has been activated successfully"
}
```

