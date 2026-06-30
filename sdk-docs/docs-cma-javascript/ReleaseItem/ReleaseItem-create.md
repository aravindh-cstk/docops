---
title: "create"
description: "The Create method allows you to add an one or more items (entry or asset) to a Release."
url: "https://www.contentstack.com/js-management-releaseitem-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create method allows you to add an one or more items (entry or asset) to a Release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.item | object | No | — | Add a single item to a Release |
| params.items | object | No | — | Add multiple items to a Release |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const item = {
           version: 1,
           uid: "entry_or_asset_uid",
           content_type_uid: "your_content_type_uid",
           action: "publish",
           locale: "en-us"
}

client.stack({ api_key: 'api_key'}).release('release_uid')
.item()
.create({ item })
.then((release) => console.log(release))
```

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const items =  [
    {
       uid: "entry_or_asset_uid1",
       version: 1,
       locale: "en-us",
       content_type_uid: "demo1",
       action: "publish"
    },
    {
       uid: "entry_or_asset_uid2",
       version: 4,
       locale: "fr-fr",
       content_type_uid: "demo2",
       action: "publish"
     }
]

client.stack({ api_key: 'api_key'}).release('release_uid')
.item()
.create({ items })
.then((release) => console.log(release))
```
