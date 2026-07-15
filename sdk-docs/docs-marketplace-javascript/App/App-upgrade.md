---
title: "upgrade"
description: "The `upgrade` method upgrades the installation of an app."
url: "https://www.contentstack.com/javascript-marketplace-app-upgrade"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## upgrade

The `upgrade` method upgrades the installation of an app.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.targetType | String | Yes | — | The target on which app needs to be installed. It can either be a stack or an organization |
| param.targetUid |  | Yes | — | The uid of the target, on which the app will be installed |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').upgrade({ targetUid: 'STACK_API_KEY', targetType: 'stack' })
.then((installation) => console.log(installation));
```
