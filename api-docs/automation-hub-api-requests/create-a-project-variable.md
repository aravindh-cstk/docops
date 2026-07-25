---
title: "Create a project variable"
description: /v1/projects/{project_uid}/variables
url: /create-a-project-variable
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T17:53:23.005Z
updated_at: 2024-02-22T13:56:26.445Z
---

# Create a project variable

<p>The <span class="code">Create a project variable</span> request lets you create a project variable in a project.</p><p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.variables:write</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}/variables`

**Method**: `POST`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
    "key": "Key3",
    "type": "text",
    "value": "password@1234"
}
```

## Response

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

