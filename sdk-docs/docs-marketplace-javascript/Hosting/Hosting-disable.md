---
title: "disable"
description: "The `disable` method disables the hosting of an app."
url: "https://www.contentstack.com/javascript-marketplace-hosting-disable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## disable

The `disable` method disables the hosting of an app.

No parameters.

Returns:
Type
Promise.<Response>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().disable()
.then((data) => {});
```
