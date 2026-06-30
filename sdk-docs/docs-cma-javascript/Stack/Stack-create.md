---
title: "create"
description: "The Create stack call creates a new stack in your Contentstack account."
url: "https://www.contentstack.com/js-management-stack-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create stack call creates a new stack in your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.stack.name | string | Yes | — | Name for the stack |
| params.stack.master_locale | string | Yes | — | Master locale for the Stack. |
| param.stack.description | String | No | — | Description for the Stack. |
| params.organization_uid | string | No | — | Organization uid to create stack within the organization. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const newStack = {
    stack:
        {
          name: 'My New Stack',
          description: 'My new test stack',
          master_locale: 'en-us'
        }
}
client.stack().create(newStack, { organization_uid: 'org_uid' })
.then((stack) => console.log(stack))
```
