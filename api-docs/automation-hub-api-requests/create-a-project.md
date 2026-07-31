---
title: "Create a project"
description: /v1/projects
url: /create-a-project
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T11:46:18.454Z
updated_at: 2024-02-22T17:15:28.392Z
---

# Create a project

<p>The <span class="code">Create a project</span> request lets you create a project in your organization.</p>
<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.projects.management:write</span>scope.</p>

**API Endpoint**: `/v1/projects`

**Method**: `POST`

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
 "description": "This is a sample project",
 "tags": ["sample"],
 "title": "Sample Demo Project-Docs"
}
```

## Response

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

