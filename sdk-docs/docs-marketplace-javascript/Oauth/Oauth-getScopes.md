---
title: "getScopes"
description: "The `getScopes` method is used to retrieve all permission scopes."
url: "https://www.contentstack.com/javascript-marketplace-oauth-getscopes"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getScopes

The `getScopes` method is used to retrieve all permission scopes.

No parameters.

Returns:
Type
Promise.<AppOAuth>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').oauth().getScopes()
.then((scopes) => console.log(scopes));
```
