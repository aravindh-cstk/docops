---
title: "Update stack"
description: PUT /stacks
url: developer-apis/content-management-api-requests/update-stack
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-09
---

# Update stack

**PUT** `/stacks`

The Update stack call lets you update the name and description of an existing stack.

In the 'Body' section, provide the updated schema of the stack in JSON format.

**Warning:** The master locale cannot be changed once it is set while stack creation. So, you cannot use this call to change/update the master language.

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
	"stack": {
		"name": "My New Stack",
		"description": "My new test stack"
	}
}
```

## Sample Response

```json
{
    "notice": "Stack updated successfully.",
    "stack": {
        "created_at": "2021-10-19T11:42:12.525Z",
        "updated_at": "2023-03-09T07:42:00.589Z",
        "uid": "blt0412fe849eede4d0",
        "name": "My New Stack",
        "description": "My new test stack",
        "org_uid": "bltbb29542f17bc03815",
        "api_key": "blt3c9eb5ecb1e5a954",
        "master_locale": "en-us",
        "is_asset_download_public": true,
        "owner_uid": "blt79ec83b4f1c8c16b",
        "user_uids": [
            "blt59fc93b3f1c8c16b"
        ],
        "settings": {
            "version": "2019-04-30",
            "rte_version": 3,
            "fallback_publish_contents": true,
            "blockAuthQueryParams": false,
            "allowedCDNTokens": [
                "authtoken",
                "access_token",
                "authorization"
            ],
            "webhook_enabled": false,
            "live_preview": {},
            "language_fallback": false,
            "workflow_stages": true,
            "publishing_rules": true
        },
        "master_key": "blt050927729g83cb19",
        "SYS_ACL": {
            "others": {
                "invite": false,
                "sub_acl": {
                    "create": false,
                    "read": false,
                    "update": false,
                    "delete": false
                }
            },
            "roles": [
                {
                    "uid": "blte5e7df28cbc8790b",
                    "name": "Developer",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                },
                {
                    "uid": "blt74a8a54546c15873",
                    "name": "Admin",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                }
            ]
        },
        "stack_variables": {},
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "57f633ab3cfa547eda8e60fa46898e7646e5b97c4"
        }
    }
}
```

