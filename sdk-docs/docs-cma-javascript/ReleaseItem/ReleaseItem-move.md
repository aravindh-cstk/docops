---
title: "move"
description: "The move method allows you to move multiple items within a specific release."
url: "https://www.contentstack.com/js-management-releaseitem-move"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## move

The move method allows you to move multiple items within a specific release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.param | object | No | — | The data containing the items to be moved. |
| params.release_version | string | No | — | The release version(2.0) |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const moveData = {
  items: [
    {
      uid: 'entry_uid',
      content_type: 'content_type_uid'
    }
  ]
}
client.stack({ api_key: 'api_key'}).release('release_uid').item().move({ param: moveData, release_version: '1.0' })
  .then((response) => { console.log(response) })
```
