---
title: "Activate/Deactivate an automation"
description: /v1/projects/{project_uid}/automations/{automation_uid}
url: /activate-deactivate-an-automation
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T12:16:38.129Z
updated_at: 2024-02-23T11:42:04.583Z
---

# Activate/Deactivate an automation

<p>The <span class="code">Activate/Deactivate an automation</span> request sets an automation to an active or inactive state.</p>
<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.automations:write</span> scope.</p>
<p class="note"><strong>Note:</strong> To activate/deactivate an automation, you must have a trigger and an action configured in your project.</p>

**API Endpoint**: `/v1/projects/{project_uid}/automations/{automation_uid}`

**Method**: `PATCH`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>
- **automation_uid** (required)
  <p>Enter the Automation UID.</p>

## Headers

- **authtoken** (optional)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Request Body

```json
{
 "active": true
}
```

## Response

```json
{
    "message": "automation has been activated successfully"
}
```

