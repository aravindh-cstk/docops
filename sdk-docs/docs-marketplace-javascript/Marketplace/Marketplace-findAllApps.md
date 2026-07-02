---
title: "findAllApps"
description: "The findAllApps method retrieves all the apps in your organization."
url: "https://www.contentstack.com/javascript-marketplace-findallapps"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findAllApps

The `findAllApps` method retrieves all the apps in your organization.

No parameters.

Returns:
Type
findAllApps

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').findAllApps()
.then((collection) => console.log(collection));
```
