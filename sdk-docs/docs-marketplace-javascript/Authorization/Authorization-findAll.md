---
title: "findAll"
description: "The findAll method retrieves the requests of all authorized apps in a particular organization."
url: "https://www.contentstack.com/javascript-marketplace-auhorization-findall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findAll

The `findAll` method retrieves the requests of all authorized apps in a particular organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skip | Number | No | — | Offset for skipping content in response |
| limit | Number | No | — | Limit on API response to provide content in the list |
| order | Must be one of ['asc', 'desc', 'ASC', 'DESC'] | No | — | Specify the order in which the apps should appear in the response, either ascending or descending. |
| sort | Must be one of ['name', 'updated_at', 'created_at'] | No | — | The order in which apps are sorted. |
| search | String | No | — | String for search by app name |

Returns:
Type
Promise.<Response>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').app('manifest_uid').authorization().findAll({ skip: 10, limit: 10, order: 'asc' })
.then((response) => console.log(response));
```
