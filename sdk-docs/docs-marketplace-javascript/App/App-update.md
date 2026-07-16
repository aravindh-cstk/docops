---
title: "update"
description: "The `update` method allows you to update the app details such as name, description, icon, and so on."
url: "https://www.contentstack.com/javascript-marketplace-app-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The `update` method allows you to update the app details such as name, description, icon, and so on.

No parameters.

Returns:
Type
App

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
const updateApp = {
 name: 'APP_NAME',
 description: 'APP_DESCRIPTION',
 target_type: 'stack'/'organization',
}
const app = client.marketplace('organization_uid').app('manifest_uid');
app = Object.assign(app, updateApp)
app.update()
.then((app) => console.log(app));
```
