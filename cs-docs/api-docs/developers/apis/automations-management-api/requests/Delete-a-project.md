---
title: "Delete a project"
description: DELETE /v1/projects/{project_uid}
url: developers/apis/automations-management-api/requests/delete-a-project
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Delete a project

**DELETE** `/v1/projects/{project_uid}`

The Delete a project request lets you delete an existing project in an organization.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `f208798e666b45c89c66e66752dd4422`

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
    "message": "Project deleted successfully."
}
```

