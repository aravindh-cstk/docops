---
title: "Delete a project variable"
description: DELETE /v1/projects/{project_uid}/variables/{variable_uid}
url: developers/apis/automations-management-api/requests/delete-a-project-variable
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Delete a project variable

**DELETE** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Delete a project variable request lets you delete a specific project variable from a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `bd0ce37910cb4172b844308aa07e6bf7`

## Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

## Sample Response

```json
{
    "message": "Project variable deleted successfully."
}
```

