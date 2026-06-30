---
title: "fetch"
description: "The `fetch` method retrieves all the details of a deployment of an app."
url: "https://www.contentstack.com/javascript-marketplace-deployment-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch` method retrieves all the details of a deployment of an app.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| deployment_uid | String | Yes | — | UID of a deployment |

Returns:
Type
Promise.<Deployment>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().deployment('deployment_uid').fetch()
.then((data) => {});
```
