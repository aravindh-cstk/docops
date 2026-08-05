---
title: "setServerConfig"
description: "The `setServerConfig` method updates the server side organization level configuration required for the app."
url: "https://www.contentstack.com/javascript-marketplace-installation-setserverconfig"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setServerConfig

The `setServerConfig` method updates the server side organization level configuration required for the app.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| { / / config keys } | Object | Yes | — | Configuration that needs to be updated |

Returns:
Type
Promise.<Response>

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').installation('installation_uid').setServerConfig({<configuration_details>})
.then((response) => console.log(response));
```
