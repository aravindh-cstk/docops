---
title: "configuration"
description: "The `configuration` method retrieves the organization level app installation configuration."
url: "https://www.contentstack.com/javascript-marketplace-installation-configuration"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## configuration

The `configuration` method retrieves the organization level app installation configuration.

No parameters.

Returns:
Type
Promise.<Response>

```
import * as contentstack from '@contentstack/marketplace-sdk' 
const client = contentstack.client({ authtoken: 'TOKEN'}); 
client.marketplace('organization_uid').installation('installation_uid').configuration() 
.then((response) => console.log(response));
```
