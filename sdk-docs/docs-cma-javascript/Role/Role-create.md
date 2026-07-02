---
title: "create"
description: "The Create call creates a new role in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-role-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The Create call creates a new role in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.role | object | No | — | The role details with name, description and rules to be created. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const role = {
    "name": "Role Name",
    "description": "From CMA Js",
    "rules": [
        {
            "module": "environment",
            "environments": [],
            "acl": {
                "read": true
            }
        },
        {
            "module": "locale",
            "locales": [],
            "acl": {
                "read": true
            }
        },
        {
            "module": "taxonomy",
            "taxonomies": [
                "taxonomy_UID"
            ],
            "terms": [
                "taxonomy_UID.term_UID"
            ],
            "content_types": [
                {
                    "uid": "$all",
                    "acl": {}
                }
            ]
        }
    ]
}

client.stack({ api_key: 'api_key'}).role()
.create({ role })
.then((role) => console.log(role))
```
