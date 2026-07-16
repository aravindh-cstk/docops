---
title: "revoke"
description: "Revoke user token issued to an authorized app for the particular organization."
url: "https://www.contentstack.com/javascript-marketplace-authorization-revoke"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## revoke

Revoke user token issued to an authorized app for the particular organization.

No parameters.

Returns:
Type
Promise.<Response>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').app('manifest_uid').authorization().revoke('authorization_uid')
.then((response) => console.log(response));
```
