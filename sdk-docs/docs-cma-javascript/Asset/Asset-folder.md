---
title: "folder"
description: "The Folder allows to fetch and create folders in assets."
url: "https://www.contentstack.com/js-management-asset-folder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## folder

The Folder allows to fetch and create folders in assets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Folder uid to perform operation |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).asset().folder() 
OR
client.stack({ api_key: 'api_key'}).asset().folder('folder_uid')
```
