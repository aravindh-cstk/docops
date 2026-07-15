---
title: "contentType"
description: "Content type defines the structure or schema of a page or a section of your web or mobile property."
url: "https://www.contentstack.com/js-management-stack-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## contentType

Content type defines the structure or schema of a page or a section of your web or mobile property.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for content type to perform operation on. |

Returns:
Type
ContentType

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType()
// OR
client.stack({ api_key: 'api_key'}).contentType('uid')
```
