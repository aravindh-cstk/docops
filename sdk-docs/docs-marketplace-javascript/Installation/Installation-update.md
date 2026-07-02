---
title: "update"
description: "The update installation call is used to update information of an installation."
url: "https://www.contentstack.com/javascript-marketplace-installation-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The `update` installation call is used to update information of an installation.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| config | Object | No | — | Configuration that needs to be updated |
| server_config | Object | No | — | Server configuration that needs to be updated |
| webhooks | Array of Objects with webhook_uid and channels | No | — | Webhooks attached to the app that needs to be updated |
| ui_locations | Array of Object with type and meta keys | No | — | The location of the app in the UI flow that is to updated |

Returns:
Type
Promise.<Installation>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

const updateInstallation = {
 name: 'APP_NAME',
 description: 'APP_DESCRIPTION',
 target_type: 'stack'/'organization',
};

const installation = client.marketplace('organization_uid').installation('installation_uid');
installation = Object.assign(installation, updateInstallation);
installation.update()
.then((installation) => console.log(installation));
```
