---
title: "create"
description: "The `create` method creates a new app/manifest in your Contentstack organization."
url: "https://www.contentstack.com/javascript-marketplace-app-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The `create` method creates a new app/manifest in your Contentstack organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| app_details | Object | Yes | — | Details of the app to be created |

Returns:
Type
Promise.<App>

**Example:**

```
import * as contentstack from '@contentstack/marketplace'
const client = contentstack.client({ authtoken: 'TOKEN'});
const app = {
 name: 'APP_NAME',
 description: 'APP_DESCRIPTION',
 target_type: 'stack'/'organization',
 webhook: // optional
  {
    target_url: 'TARGET_URL',
    channel: 'CHANNEL'
  },
 oauth: // optional
  {
    redirect_uri: 'REDIRECT_URI',
    enabled: true,
  }
}

client.marketplace('organization_uid').app().create(app)
.then((app) => console.log(app));
```
