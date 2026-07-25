---
title: "Delete a project variable"
description: /v1/projects/{project_uid}/variables/{variable_uid}
url: /delete-a-project-variable
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T17:59:16.616Z
updated_at: 2024-02-22T13:47:58.955Z
---

# Delete a project variable

<p>The <span class="code">Delete a project variable</span> request lets you delete a specific project variable from a project.</p>
<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.variables:write</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}/variables/{variable_uid}`

**Method**: `DELETE`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>
- **variable_uid** (required)
  <p>Enter the UID of the project variable.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;"></span>Authentication</a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

```json
{
    "message": "Project variable deleted successfully."
}
```

