---
title: "isEnable"
description: "The isEnable method retrieves the OAuth details of the app."
url: "https://www.contentstack.com/javascript-marketplace-hosting-isenable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## isEnable

The `isEnable` method retrieves the OAuth details of the app.

No parameters.

Returns:
Type
Promise.<AppOAuth>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').app('manifest_uid').hosting().isEnable()
.then((data) => console.log(data));
```
