---
title: "authorization"
description: "The `authorization` method allows you to retrieve all and revoke specific or all authorizations."
url: "https://www.contentstack.com/javascript-marketplace-authorization"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## authorization

The `authorization` method allows you to retrieve all and revoke specific or all authorizations.

No parameters.

Returns:
Type
Authorization

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').authorization();
```
