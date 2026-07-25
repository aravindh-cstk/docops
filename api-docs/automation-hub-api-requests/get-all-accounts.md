---
title: "Get all accounts"
description: /v1/projects/{project_uid}/accounts?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}
url: /get-all-accounts
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T17:46:04.724Z
updated_at: 2024-03-11T05:04:42.231Z
---

# Get all accounts

<p>The <span class="code">Get all accounts</span> request returns comprehensive information of all the accounts in a project.</p>
<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.accounts:read</span> scope.</p>
<p class="note"><strong>Note:</strong> If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.</p>

**API Endpoint**: `/v1/projects/{project_uid}/accounts?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>

## Query Parameters

- **limit** (optional)
  <span>The “limit” parameter will return a specific number of accounts (in between 0-100) in your response based on the value you provide. If there are 100 accounts and you want to fetch only 30 accounts, set the limit as 30.</span>
- **skip** (optional)
  <span>The “skip” parameter will skip a specific number of accounts and return the remaining ones in your response based on the value you provide.  If there are 12 accounts and you want to exclude the first 2 accounts, set this to 2 to fetch the remaining 10 accounts.</span>
- **asc** (optional)
  <span>The “asc” parameter allows you to sort the list of accounts in the ascending order with respect to the value of a specific field. The accounts can be sorted by <em>created_at</em>, <em>title</em>, and <em>updated_at </em>values.</span>
- **desc** (optional)
  <span>The “desc” parameter allows you to sort the list of accounts in the descending order with respect to the value of a specific field. The accounts can be sorted by <em>created_at</em>, <em>title</em>, and <em>updated_at </em>values.</span>
- **include_count** (optional)
  <span>Set this to “true” to include the total number (count) of accounts in an organization.</span>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

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

