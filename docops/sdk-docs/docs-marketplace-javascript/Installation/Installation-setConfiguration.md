---
title: "setConfiguration"
description: "The `setConfiguration` method updates the organization level app installation configuration."
url: "https://www.contentstack.com/javascript-marketplace-installation-setconfiguration"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setConfiguration

The `setConfiguration` method updates the organization level app installation configuration.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| { / / config keys } | Object | Yes | — | Configuration that needs to be updated |

Returns:
Type
Promise.<Response>

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').installation('installation_uid').setConfiguration()
.then((response) => console.log(response));
```
