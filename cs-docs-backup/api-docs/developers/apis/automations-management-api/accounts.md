---
title: "Automations Management API | Accounts"
description: Fetch and manage automation accounts used to connect Contentstack Automations with external services.
url: https://www.contentstack.com/docs/developers/apis/automations-management-api/accounts
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Automations Management API | Accounts



## Get All Accounts

### Get all accounts

**GET** `/v1/projects/{project_uid}/accounts?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get all accounts request returns comprehensive information of all the accounts in a project.

To configure the permissions for your application via OAuth, include the automationhub.accounts:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

#### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

#### Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of accounts (in between 0-100) in your response based on the value you provide. If there are 100 accounts and you want to fetch only 30 accounts, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of accounts and return the remaining ones in your response based on the value you provide.  If there are 12 accounts and you want to exclude the first 2 accounts, set this to 2 to fetch the remaining 10 accounts.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of accounts in the ascending order with respect to the value of a specific field. The accounts can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of accounts in the descending order with respect to the value of a specific field. The accounts can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of accounts in an organization.
  Default: `true`

#### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

#### Sample Response

```json
{
    "accounts": [
        {
            "group_name": "chatgpt",
            "title": "Test ChatGPT Account #1",
            "description": "chatGPT auth",
            "auth_id": "cb*********94bc590ea30bddfcdad9b",
            "user_id": "blt******dae71c6b33",
            "org_id": "blt******5ea6ddf287",
            "connector_id": "6e4******73e4230b282283164091c07",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "type": "custom",
            "source": "automations",
            "updated_by": "blt******dae71c6b33",
            "scope_join_char": ",",
            "created_at": "2024-02-22T12:05:29.854Z",
            "updated_at": "2024-02-22T12:05:29.854Z",
            "id": "f8cb5c59b72a46858fc709281cf27e50"
        },
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
    ]
}
```




## Get a Single Account

### Get a single account

**GET** `/v1/projects/{project_uid}/accounts/{account_uid}`

The Get a single account request fetches a specific account in a project.

To configure the permissions for your application via OAuth, include the automationhub.accounts:read scope.

#### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **account_uid** (required)
  Enter the UID of the account.
  Default: `94c48b974b9045b3a1327eeb10ada605`

#### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

#### Sample Response

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

