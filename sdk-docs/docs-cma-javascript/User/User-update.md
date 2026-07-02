---
title: "update"
description: "The Update User API Request updates the details of an existing user account."
url: "https://www.contentstack.com/js-management-user-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The Update User API Request updates the details of an existing user account.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.getUser()
.then((user) => {
   user.first_name = 'FirstName'
   user.last_name = 'LastName'
   user.company = 'company'
   return user.update()  
)}
.then((response) => {

})
```
