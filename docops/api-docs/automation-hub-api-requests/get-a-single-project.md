---
title: "Get a single project"
description: /v1/projects/{project_uid}
url: /get-a-single-project
product: Contentstack
doc_type: api-request
created_at: 2024-01-24T11:13:55.881Z
updated_at: 2024-03-11T05:03:55.130Z
---

# Get a single project

<p>The <span class="code">Get a single project</span> request fetches a specific project created in your organization. When executing the API request, you need to provide the organization UID and your authtoken in the Request Header.</p><p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.projects.management:read</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;"></span>Authentication</a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

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

