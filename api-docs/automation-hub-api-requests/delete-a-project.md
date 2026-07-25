---
title: "Delete a project"
description: /v1/projects/{project_uid}
url: /delete-a-project
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T11:53:00.001Z
updated_at: 2024-02-22T11:28:48.152Z
---

# Delete a project

<p>The <span class="code">Delete a project</span> request lets you delete an existing project in an organization.</p>

**API Endpoint**: `/v1/projects/{project_uid}`

**Method**: `DELETE`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

```json
{
    "message": "Project deleted successfully."
}
```

