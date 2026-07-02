---
title: "getInstalledApps"
description: "The getInstalledApps method retrieves all the installed apps in your Contentstack organization."
url: "https://www.contentstack.com/javascript-marketplace-installation-getinstalledapps"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getInstalledApps

The `getInstalledApps` method retrieves all the installed apps in your Contentstack organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| include_update_details | Boolean | No | — | To show only apps which have update |
| target_type | Must use one of ['stack','organization'] | No | — | Specify whether your app is a stack app or an organization app |
| target_uids | String(comma separated) | No | — | Stack API key or organization UID |
| sort | String | No | — | Field to sort the results (eg. created_at, updated, at) |
| order | String | No | — | The order in which the response is given |
| limit | Number | No | — | Limit on API response to provide content in the list |
| skip | Number | No | — | Offset for skipping content in response |

Returns:
Type
Promise.<ContentstackCollection.<Installation>>

**Example 1:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').installation().getInstalledApps()
.then((collection) => console.log(collection));
```

**Example 2:**

If you have to retrieve the list of apps installed for a specific target UID, use the following code

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').installation().getInstalledApps({

	target_uid: 'api_key', 

})

.then((collection) => console.log(collection));
```
