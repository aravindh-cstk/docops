---
title: "Get a single project variable"
description: /v1/projects/{project_uid}/variables/{variable_uid}
url: /get-a-single-project-variable
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T14:12:23.068Z
updated_at: 2024-02-22T13:35:23.680Z
---

# Get a single project variable

<p>The <span class="code">Get a single project variable</span> request fetches a specific project variable defined in a project.</p><p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.variables:read</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}/variables/{variable_uid}`

**Method**: `GET`

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

## Response

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

