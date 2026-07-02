---
title: "delete"
description: "The Delete method request deletes one or more items (entries and/or assets) from a specific Release."
url: "https://www.contentstack.com/js-management-releaseitem-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The Delete method request deletes one or more items (entries and/or assets) from a specific Release.

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

client.stack({ api_key: 'api_key'}).release('release_uid').delete()
.then((response) => console.log(response.notice))
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
