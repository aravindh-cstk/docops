---
title: "delete"
description: "The Delete Locale call is used to delete an existing Locale permanently from your Stack."
url: "https://www.contentstack.com/js-management-locale-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete Locale call is used to delete an existing Locale permanently from your Stack.

No parameters.

Returns:
Type
Object

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.stack({ api_key: 'api_key'}).locale('locale_code').delete()
.then((response) => console.log(response.notice))
```
