---
title: "delete"
description: "The Delete user call deletes the current authenticated user permanently from your Contentstack account."
url: "https://www.contentstack.com/js-management-user-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The Delete user call deletes the current authenticated user permanently from your Contentstack account.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack-devops-bot/management'
const client = contentstack.client({ authtoken })
client.getUser()
.then((user) => {
	return user.delete()
)}
.then((response) => {
})
```
