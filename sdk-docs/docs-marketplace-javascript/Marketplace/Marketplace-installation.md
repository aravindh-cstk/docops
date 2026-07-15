---
title: "installation"
description: "The `installation` method allows you to retrieve, update and delete the app installation."
url: "https://www.contentstack.com/javascript-marketplace-installation"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## installation

The `installation` method allows you to retrieve, update and delete the app installation.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | String | No | — | UID for the installation |

Returns:
Type
Installation

**Example 1:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.organization('organization_uid').app('manifest_uid').installation().findAll()
.then((installations) => console.log(installations));
```

**Example 2:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').installation('installation_uid').fetch()
.then((installation) => console.log(installation));
```
