---
title: "oauth"
description: "The oauth method allows you to retrieve and update Oauth and retrieve scopes."
url: "https://www.contentstack.com/javascript-marketplace-app-oauth"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## oauth

The `oauth` method allows you to retrieve and update Oauth and retrieve scopes.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| include_oauth | Boolean | No | — | To get the oauth details of an app |

Returns:
Type
Oauth

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').oauth();
```
