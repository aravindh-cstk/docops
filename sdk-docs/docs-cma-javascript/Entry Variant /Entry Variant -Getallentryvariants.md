---
title: "Get all entry variants"
description: "The Get all entry variants method allows you to retrieve details for all or specific entries."
url: "https://www.contentstack.com/js-management-entry-variant-get-all-entry-variants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Get all entry variants

The Get all entry variants method allows you to retrieve details for all or specific entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | string | Yes | — | Enter the UID of the content type |
| entry_uid | string | Yes | — | Enter the UID of the entry |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('entry_uid').variants().query().find()
.then((variant) => console.log(variant))
```
