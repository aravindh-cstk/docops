---
title: "users"
description: "The Get all users of a stack call fetches the list of all users of a particular stack"
url: "https://www.contentstack.com/js-management-stack-users"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## users

The Get all users of a stack call fetches the list of all users of a particular stack

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const users = {
 user_uid: ['role_uid_1', 'role_uid_2' ]
}

client.stack({ api_key: 'api_key'}).users()
.then((users) => console.log(users))
```
