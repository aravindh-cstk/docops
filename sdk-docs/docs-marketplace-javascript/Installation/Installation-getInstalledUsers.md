---
title: "getInstalledUsers"
description: "The `getInstalledUsers` call retrieves the list of users for the organization who installed the apps."
url: "https://www.contentstack.com/javascript-marketplace-installation-getinstalledusers"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getInstalledUsers

The `getInstalledUsers` call retrieves the list of users for the organization who installed the apps.

No parameters.

Returns:
Type
Promise.<ContentstackCollection.<Installation>>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').installation().getInstalledUsers()
.then((collection) => console.log(collection));
```
