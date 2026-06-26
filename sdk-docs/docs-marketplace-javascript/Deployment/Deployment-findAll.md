---
title: "findAll"
description: "The `findAll` deployments method retrieves all the available deployments made for an app."
url: "https://www.contentstack.com/javascript-marketplace-deployment-findall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findAll

The `findAll` deployments method retrieves all the available deployments made for an app.

No parameters.

Returns:
Type
Promise.<ContentstackCollection>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().deployment().findAll()
.then((data) => {});
```
