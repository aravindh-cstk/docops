---
title: "update"
description: "The `update` method updates the OAuth details i.e., the redirect url and permission scope of an app."
url: "https://www.contentstack.com/javascript-marketplace-oauth-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The `update` method updates the OAuth details i.e., the redirect url and permission scope of an app.

No parameters.

Returns:
Type
Promise.<AppOAuth>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
const config = {
 redirect_uri: 'REDIRECT_URI',
 app_token_config: {
   enabled: true,
   scopes: ['scope1', 'scope2']
  },
  user_token_config: {
   enabled: true,
   scopes: ['scope1', 'scope2']
  }
 };
client.marketplace('organization_uid').app('manifest_uid').oauth().update({ config })
.then((oAuthConfig) => console.log(oAuthConfig));
```
