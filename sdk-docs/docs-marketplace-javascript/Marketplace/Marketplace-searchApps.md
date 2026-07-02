---
title: "searchApps"
description: "The searchApps method lets you find Marketplace apps in your Contentstack organization by name."
url: "https://www.contentstack.com/javascript-marketplace-marketplace-searchapps"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## searchApps

The searchApps method lets you find Marketplace apps in your Contentstack organization by name.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| search | String | Yes | — | The app name or keyword to search for. |
| sort | String | No | — | Field to sort the results (eg. created_at, updated, at) |
| target_type | ['stack'] or ['organization'] | No | — | Specify whether your app is a stack app or an organization app |
| order | String | No | — | The order in which the response is given |
| limit | Number | No | — | Limit on API response to provide content in the list |
| skip | Number | No | — | Offset for skipping content in response |

Returns:
Type
Promise<ContentstackCollection<App>>

**Example 1:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN' });
const search = 'appname'
client.marketplace('organization_uid')
  .searchApps(search)
  .then((collection) => console.log(collection))
  .catch((error) => console.error(error));
```

**Example 2:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN' });
client.marketplace('organization_uid')
  .searchApps('mp app name', {
    order: 'desc',
    sort: 'created_at',
    target_type: 'field'
  })
  .then((collection) => console.log(collection))
  .catch((error) => console.error(error));
```
