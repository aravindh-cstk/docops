---
title: "delete"
description: "The Delete entries and assets in bulk request allows you to delete multiple entries and assets at the same time."
url: "https://www.contentstack.com/js-management-bulkoperation-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete entries and assets in bulk request allows you to delete multiple entries and assets at the same time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.details | object | No | — | Set this with details specifing the content type UIDs, entry UIDs or asset UIDs, and locales of which the entries or assets you want to delete. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const publishDetails = {
  entries: [
    {
      uid: '{{entry_uid}}',
      content_type: '{{content_type_uid}}',
      locale: '{{entry_locale}}'
    }
  ],
  assets: [{
    uid: '{{uid}}'
  }]
}

client.stack({ api_key: 'api_key'}).bulkOperation().delete({ details:  publishDetails })
.then((response) => {  console.log(response.notice) })
```
