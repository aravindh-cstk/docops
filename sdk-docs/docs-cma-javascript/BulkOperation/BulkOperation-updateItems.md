---
title: "updateItems"
description: "The updateItems method allows you to update multiple items in a release in bulk."
url: "https://www.contentstack.com/js-management-bulkoperation-updateitems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## updateItems

The updateItems method allows you to update multiple items in a release in bulk.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.data | object | No | — | The data containing the items to be added. |
| params.bulk_version | string | No | — | The bulk operation version . (2.0) |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const itemsData = {
  items: [
    {
      uid: 'entry_uid',
      content_type: 'content_type_uid'
    }
  ]
  or 
  [ '$all' ]
}
client.stack({ api_key: 'api_key'}).bulkOperation().updateItems({ data: itemsData })
  .then((response) => { console.log(response) })
```
