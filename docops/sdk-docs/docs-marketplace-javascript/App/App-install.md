---
title: "install"
description: "The `install` method initiates the installation of the app."
url: "https://www.contentstack.com/javascript-marketplace-app-install"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## install

The `install` method initiates the installation of the app.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.targetType | String | Yes | — | The target on which app needs to be installed. It can either be a stack or an organization |
| param.targetUid | String | No | — | The UID of the target, on which the app will be installed |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').install({ targetUid: 'STACK_API_KEY', targetType: 'stack' })
.then((installation) => console.log(installation));
```
