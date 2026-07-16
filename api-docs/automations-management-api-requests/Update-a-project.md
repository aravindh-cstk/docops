---
title: "Update a project"
description: PUT /v1/projects/{project_uid}
url: developer-apis/automations-management-api-requests/update-a-project
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Update a project

**PUT** `/v1/projects/{project_uid}`

The Update a project request lets you update certain details such as the description, tags, and title of an existing project in an Organization.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:write scope.

Here’s an example of the Request body:

```
{
  "description": "New Description",
  "tags": ["tag1", "tag2",...],
  "title": "New Title"
}
```

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

## Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
  "description": "This is a New Description for Sample Test",
  "tags": ["Sample 1", "Sample 2"],
  "title": "Updated Sample Test Project -Docs"
}
```

## Sample Response

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

