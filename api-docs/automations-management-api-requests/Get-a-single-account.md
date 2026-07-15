---
title: "Get a single account"
description: GET /v1/projects/{project_uid}/accounts/{account_uid}
url: developer-apis/automations-management-api-requests/get-a-single-account
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get a single account

**GET** `/v1/projects/{project_uid}/accounts/{account_uid}`

The Get a single account request fetches a specific account in a project.

To configure the permissions for your application via OAuth, include the automationhub.accounts:read scope.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **account_uid** (required)
  Enter the UID of the account.
  Default: `94c48b974b9045b3a1327eeb10ada605`

## Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

## Sample Response

```json
{
    "group_name": "launch",
    "title": "Test Launch Account #1",
    "auth_id": "0e5a*********60dab5021b434c3ba24",
    "user_id": "blt******dae71c6b33",
    "org_id": "blt******5ea6ddf287",
    "connector_id": "40a****f55c7485b807bb23a536e2a55",
    "type": "oauth2",
    "source": "automations",
    "meta": "{\"scope\":{\"launch:manage\":true}}",
    "scope_join_char": ",",
    "created_at": "2024-02-22T12:14:18.382Z",
    "updated_at": "2024-02-22T12:14:56.891Z",
    "id": "94c48b974b9045b3a1327eeb10ada605",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "updated_by": "blt******dae71c6b33"
}
```

