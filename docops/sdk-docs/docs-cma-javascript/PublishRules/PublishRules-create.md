---
title: "create"
description: "The Create Publish Rules request allows you to create publish rules for the publish rules of a stack."
url: "https://www.contentstack.com/js-management-publishrules-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create Publish Rules request allows you to create publish rules for the publish rules of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.workflow | object | No | — | The workflow details with workflow stages. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const publishing_rule = {
   	"publish rules": "publish rules_uid",
       "actions": [],
       "content_types": ["$all"],
       "locales": ["en-us"],
       "environment": "environment_uid",
        "approvers": {
       	"users": ["user_uid"],
       	"roles": ["role_uid"]
       },
       "publish rules_stage": "publish rules_stage_uid",
        "disable_approver_publishing": false
}

client.stack({ api_key: 'api_key'}).publishRules()
.create({ publishing_rule })
.then((publishRules) => console.log(publishRules))
```
