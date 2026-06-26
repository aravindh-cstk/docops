---
title: "publishRule"
description: "The Publish rule allow you to create, fetch, delete, update the publish rules."
url: "https://www.contentstack.com/js-management-workflow-publishrule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## publishRule

The Publish rule allow you to create, fetch, delete, update the publish rules.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Uid for publish rule. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).workflow().publishRule().fetchAll()
.then((collection) => console.log(collection))

client.stack({ api_key: 'api_key'}).workflow().publishRule('rule_uid').fetch()
.then((publishrule) => console.log(publishrule))
```
