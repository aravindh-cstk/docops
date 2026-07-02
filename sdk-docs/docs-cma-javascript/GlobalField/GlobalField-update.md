---
title: "update"
description: "The Update GlobalField call lets you update the name and description of an existing GlobalField."
url: "https://www.contentstack.com/js-management-globalfield-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The Update GlobalField call lets you update the name and description of an existing GlobalField.

No parameters.

Returns:
Type
Promise

**Example 1: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).globalField('global_field_uid').fetch()
.then((globalField) => {
 globalField.title = 'My New global field'
 globalField.description = 'global field description'
 return globalField.update()
})
.then((globalField) => console.log(globalField))
```

**Example 2: **

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).globalField('global_field_uid', { api_version: '3.2' }).fetch()
.then((globalField) => {
 globalField.title = 'My New global field'
 globalField.description = 'global field description'
 return globalField.update()
})
.then((globalField) => console.log(globalField))
```
