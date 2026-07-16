---
title: "update"
description: "The Update role call lets you modify an existing role of your stack."
url: "https://www.contentstack.com/js-management-role-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The Update role call lets you modify an existing role of your stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).role('role_uid')
.fetch({ include_rules: true, include_permissions: true})
.then((role) => {
 role.name = 'My New Role'
 role.description = 'Role description'
 role.rules = [
{
  module: 'asset',
  assets: ['$all'],
  acl: {
    read: true,
    create: true,
    update: true,
    publish: true,
    delete: true
  }
},
{
  module: 'environment',
  environments: [],
  acl: { read: true }
},
{
  module: 'locale',
  locales: [Array],
  acl: { read: true }
}]
 return role.update()
})
.then((role) => console.log(role))
```
