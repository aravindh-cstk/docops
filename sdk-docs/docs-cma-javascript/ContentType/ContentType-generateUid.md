---
title: "generateUid"
description: "Generate uid from the title of content type"
url: "https://www.contentstack.com/js-management-contenttype-generateuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## generateUid

Generate uid from the title of content type

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| title | string | Yes | — | Title for which ContentType uid needs to be generated. |

Returns:
Type
string

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType().generateUid('name')
```
