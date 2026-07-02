---
title: "entry"
description: "Entry is the actual piece of content created using one of the defined content types."
url: "https://www.contentstack.com/js-management-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entry

Entry is the actual piece of content created using one of the defined content types.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Entry uid to perform operation on |
| api_version | string | No | — | Pass "3.2" to enable enhanced logic for the publish operation only. |

Returns:
Type
Entry

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry()
//OR
client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('entry_uid')
```
