---
title: "serverConfig"
description: "The serverConfig method retrieves the server side organization level configuration required for the app."
url: "https://www.contentstack.com/javascript-marketplace-installation-serverconfig"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## serverConfig

The `serverConfig` method retrieves the server side organization level configuration required for the app.

No parameters.

Returns:
Type
Promise.<Response>

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').installation('installation_uid').serverConfig()
.then((response) => console.log(response));
```
