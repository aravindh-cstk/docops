---
title: "fetchAll"
description: "The Get all Workflows request retrieves the details of all the Workflows of a stack."
url: "https://www.contentstack.com/js-management-workflow-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchAll

The Get all Workflows request retrieves the details of all the Workflows of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.limiit | number | No | — | The limit parameter will return a specific number of workflow in the output. |
| params.skip | number | No | — | The skip parameter will skip a specific number of workflow in the output. |
| params.include_count | boolean | No | — | To retrieve the count of workflow. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).workflow()
.fetchAll()
.then((collection) => console.log(collection))
```
