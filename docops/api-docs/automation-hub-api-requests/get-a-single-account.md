---
title: "Get a single account"
description: /v1/projects/{project_uid}/accounts/{account_uid}
url: /get-a-single-account
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T17:49:31.653Z
updated_at: 2024-02-22T12:53:31.101Z
---

# Get a single account

<p>The <span class="code">Get a single account</span> request fetches a specific account in a project.</p>
<p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.accounts:read</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}/accounts/{account_uid}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>
- **account_uid** (required)
  <p>Enter the UID of the account.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

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

