---
title: "fetch"
description: "The fetch method retrieves a specific installation of an app."
url: "https://www.contentstack.com/javascript-marketplace-installation-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The `fetch` method retrieves a specific installation of an app.

No parameters.

Returns:
Type
Promise.<Installation>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').installation('installation_uid').fetch()
.then((installation) => console.log(installation));
```
