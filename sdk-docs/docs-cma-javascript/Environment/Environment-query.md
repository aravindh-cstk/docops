---
title: "query"
description: "The Query on Environment will allow to fetch details of all or specific Environment ."
url: "https://www.contentstack.com/js-management-environment-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The Query on Environment will allow to fetch details of all or specific Environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | The ` include_count’ parameter includes the count of total number of environment in your stack, along with the details of each environment. |
| params.limit |  | No | — | The ‘limit’ parameter will return a specific number of environment in the output. |
| params.skip |  | No | — | The ‘skip’ parameter will skip a specific number of environment in the response. |

Returns:
Type
Query

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).environment()
.query({ query: { name: 'Environment Name' } }).find()
.then((environment) => console.log(environment))
```
