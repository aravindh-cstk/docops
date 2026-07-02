---
title: "installationData"
description: "The installationData method retrieves the installation data of an app configuration."
url: "https://www.contentstack.com/javascript-marketplace-installation-installationdata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## installationData

The `installationData` method retrieves the installation data of an app configuration.

No parameters.

Returns:
Type
Promise.<Response>

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').installation('installation_uid').installationData()
.then((response) => console.log(response));
```
