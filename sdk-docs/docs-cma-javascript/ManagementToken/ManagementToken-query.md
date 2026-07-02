---
title: "query"
description: "The Get all managementToken request retrieves comprehensive information about all the management tokens created in a stack."
url: "https://www.contentstack.com/js-management-managementtoken-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The Get all managementToken request retrieves comprehensive information about all the management tokens created in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | The `include_count` parameter includes the total count of management tokens in your stack, along with the details of each individual management token. |
| params.limit | int | No | — | The `limit` parameter retrieves a specific number of management tokens in the output. |
| params.skip | int | No | — | The `skip` parameter will skip a specific number of management tokens in the response. |

Returns:
Type
Query

**Example**:

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).managementToken()
.query({ query: { name: 'token_name' } }))
.find()
.then((contentstackCollection) => console.log(contentstackCollection))
```
