---
title: "listInstallations"
description: "The listInstallations method is used to retrieve all installations of your Contentstack organization."
url: "https://www.contentstack.com/javascript-marketplace-listinstallations"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## listInstallations

The `listInstallations` method is used to retrieve all installations of your Contentstack organization.

No parameters.

Returns:
Type
Promise.<ContentstackCollection.<Installation>>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('app_uid').listInstallations()
.then((collection) => console.log(collection));
```
