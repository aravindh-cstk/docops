---
title: "revokeAll"
description: "Revoke all users tokens issued to an authorized app for the particular organization."
url: "https://www.contentstack.com/javascript-marketplace-authorization-revokeall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## revokeAll

Revoke all users tokens issued to an authorized app for the particular organization.

No parameters.

Returns:
Type
Promise.<Response>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').app('manifest_uid').authorization().revokeAll()
.then((response) => console.log(response));
```
