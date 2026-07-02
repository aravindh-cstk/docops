---
title: "query"
description: "The Query on release will allow to fetch details of all or specific Releases."
url: "https://www.contentstack.com/js-management-release-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The Query on release will allow to fetch details of all or specific Releases.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | The ' include_count’ parameter includes the count of total number of releases in your stack, along with the details of each release. |
| params.include_items_count | boolean | No | — | The ‘include_items_count’ parameter returns the total number of items in a specific release. |
| params.limit | number | No | — | The ‘limit’ parameter will return a specific number of releases in the output. |
| params.skip | number | No | — | The ‘skip’ parameter will skip a specific number of releases in the response. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).release().query()
.find()
.then((release) => console.log(release))
```
