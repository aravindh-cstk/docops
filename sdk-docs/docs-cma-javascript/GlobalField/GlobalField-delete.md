---
title: "delete"
description: "The Delete GlobalField call is used to delete an existing GlobalField permanently from your Stack."
url: "https://www.contentstack.com/js-management-globalfield-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The Delete GlobalField call is used to delete an existing GlobalField permanently from your Stack.

No parameters.

Returns:
Type
Promise

**Example 1: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).globalField('global_field_uid').delete()
.then((response) => console.log(response.notice))
```

**Example 2: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).globalField('global_field_uid', { api_version: '3.2'}).delete()
.then((response) => console.log(response.notice))
```
