---
title: "Get a single automation"
description: /v1/projects/{project_uid}/automations/{automation_uid}?show_steps={boolean_value}
url: /get-a-single-automation
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T12:13:11.281Z
updated_at: 2024-02-22T13:42:57.244Z
---

# Get a single automation

<p>The <span class="code">Get a single automation</span> request fetches a specific automation from a project in which it was created.</p>

<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.automations:read</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}/automations/{automation_uid}?show_steps={boolean_value}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>
- **automation_uid** (required)
  <p>Enter the Automation UID.</p>

## Query Parameters

- **show_steps** (optional)
  <p>Set this to “true” to return all the steps, triggers associated with each automation in a project.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

```json
{
    "id": "b5b0a755a51d4****1d0968fe19a5f62",
    "title": "ChatGPT Test 2",
    "description": "",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "org_id": "blt4051c****6ddf287",
    "user_id": "blt76240****71c6b33",
    "active": false,
    "updated_by": "blt7624****e71c6b33",
    "throttle": false,
    "created_at": "2024-02-22T12:12:24.422Z",
    "updated_at": "2024-02-22T12:12:24.422Z"
}
```

