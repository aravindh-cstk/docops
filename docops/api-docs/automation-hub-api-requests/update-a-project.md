---
title: "Update a project"
description: /v1/projects/{project_uid}
url: /update-a-project
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T11:50:52.323Z
updated_at: 2024-02-22T13:16:56.377Z
---

# Update a project

<p>The <span class="code">Update a project</span> request lets you update certain details such as the description, tags, and title of an existing project in an Organization.</p>
<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.projects.management:write</span> scope.</p>
<p>Here’s an example of the Request body:</p><pre>{<br />  "description": "New Description",<br />  "tags": ["tag1", "tag2",...],<br />  "title": "New Title"<br />}</pre>

**API Endpoint**: `/v1/projects/{project_uid}`

**Method**: `PUT`

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
  "description": "This is a New Description for Sample Test",
  "tags": ["Sample 1", "Sample 2"],
  "title": "Updated Sample Test Project -Docs"
}
```

## Response

```json
{
    "title": "Updated Sample Test Project -Docs",
    "description": "This is a New Description for Sample Test",
    "user_id": "blt762****ae71c6b33",
    "org_id": "blt4051****a6ddf287",
    "shared": [],
    "tags": [
        "Sample1",
        "Sample2"
    ],
    "updated_by": "blt7aa****ab03b79c0",
    "created_at": "2024-02-22T11:31:27.837Z",
    "updated_at": "2024-02-22T13:09:58.161Z",
    "id": "05732fe9f7d***791715b09a3792f52"
}
```

