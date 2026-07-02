---
title: "enable"
description: "The enable method enables the hosting of an app."
url: "https://www.contentstack.com/javascript-marketplace-hosting-enable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## enable

The `enable` method enables the hosting of an app.

No parameters.

Returns:
Type
Promise.<Response>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().enable()
.then((data) => {});
```
