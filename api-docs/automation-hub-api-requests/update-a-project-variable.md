---
title: "Update a project variable"
description: /v1/projects/{project_uid}/variables/{variable_uid}
url: /update-a-project-variable
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T17:56:20.677Z
updated_at: 2024-02-22T13:45:42.095Z
---

# Update a project variable

<p>The <span class="code">Update a project variable</span> request lets you update the key, value and type of a project variable.</p>
<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.variables:write</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}/variables/{variable_uid}`

**Method**: `PUT`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>
- **variable_uid** (required)
  <p>Enter the UID of the project variable.</p>

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
    "value": "abcd@1234"
}
```

## Response

```json
{
    "key": "Key3",
    "value": "abcd@1234",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "text",
    "created_at": "2024-02-22T13:38:36.439Z",
    "updated_at": "2024-02-22T13:42:23.560Z",
    "id": "bd0ce37910cb4172b844308aa07e6bf7"
}
```

