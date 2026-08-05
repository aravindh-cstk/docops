---
title: "getInstalledStacks"
description: "The `getInstalledStacks` method retrieves the list of all the stacks a user is part of."
url: "https://www.contentstack.com/javascript-marketplace-installation-getinstalledstacks"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getInstalledStacks

The `getInstalledStacks` method retrieves the list of all the stacks a user is part of.

No parameters.

Returns:
Type
Promise.<ContentstackCollection.<Installation>>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').installation().getInstalledStacks()
.then((collection) => console.log(collection));
```
