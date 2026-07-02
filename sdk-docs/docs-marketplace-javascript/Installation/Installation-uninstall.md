---
title: "uninstall"
description: "The uninstall method uninstalls the installation."
url: "https://www.contentstack.com/javascript-marketplace-installation-uninstall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## uninstall

The `uninstall` method uninstalls the installation.

No parameters.

Returns:
Type
Promise.<Response>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').installation('installation_uid').uninstall()
.then((response) => console.log(response));
```
