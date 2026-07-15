---
title: "fetch"
description: "The `fetch` method retrieves the details of a particular app with its ID."
url: "https://www.contentstack.com/javascript-marketplace-app-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch` method retrieves the details of a particular app with its ID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| include_oauth | Boolean | No | — | To get the oauth details of an app |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').fetch()
.then((app) => console.log(app));
```
