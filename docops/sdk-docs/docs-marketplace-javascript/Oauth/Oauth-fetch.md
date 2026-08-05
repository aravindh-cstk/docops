---
title: "fetch"
description: "The `fetch` method retrieves the authentication details of the app."
url: "https://www.contentstack.com/javascript-marketplace-oauth-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch` method retrieves the authentication details of the app.

No parameters.

Returns:
Type
Promise.<AppOAuth>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').oauth().fetch()
.then((oAuthConfig) => console.log(oAuthConfig));
```
