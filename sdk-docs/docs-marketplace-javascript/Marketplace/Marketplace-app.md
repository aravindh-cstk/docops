---
title: "app"
description: "The `app` method creates and retrieves a new instance of the App class with the given parameters."
url: "https://www.contentstack.com/javascript-marketplace-app"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## app

The `app` method creates and retrieves a new instance of the App class with the given parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| manifest_uid | String | No | — | UID of the app |

Returns:
Type
App

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid');
```
