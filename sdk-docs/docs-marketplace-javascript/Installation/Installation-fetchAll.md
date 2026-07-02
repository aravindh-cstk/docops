---
title: "fetchAll"
description: "The fetchAll method retrieves all the installations in your Contentstack organization."
url: "https://www.contentstack.com/javascript-marketplace-installation-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchAll

The `fetchAll` method retrieves all the installations in your Contentstack organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| app_uids | String(comma separated) | No | — | The App UIDs of which installation need to be listed |
| installation_uids | String(comma separated) | No | — | Installations UID of the app |
| target_uids | String(comma separated) | No | — | Stack API key or organization UID |
| sort | String | No | — | Field to sort the results (eg. created_at, updated, at) |
| order | String | No | — | The order in which the response is given |
| limit | Number | No | — | Limit on API response to provide content in the list |
| skip | Number | No | — | Offset for skipping content in response |

Returns:
Type
Promise.<ContentstackCollection.<Installation>>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').installation().fetchAll({ < optional params object>})
.then((collection) => console.log(collection));
```
