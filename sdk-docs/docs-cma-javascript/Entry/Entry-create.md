---
title: "create"
description: "The Create an entry call creates a new entry in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-entry-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create an entry call creates a new entry in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.entry | object | Yes | — | Entry details to create. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const entry  = {
 title: 'Sample Entry',
 url: '/sampleEntry',
 file = asset_uid, /
 multiple_file = ['asset_uid_1', 'asset_uid_2'], 
 reference: reference.uid, 
multiple_reference: ['reference_uid_1', 'reference_uid_2'], 
 multiple_content_type_reference: [{_content_type_uid: 'content_type_uid_1', uid: 'reference_uid_1'},
{_content_type_uid: 'content_type_uid_2', uid: 'reference_uid_2'}] 
}

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry().create({ entry })
.then((entry) => console.log(entry))
```
