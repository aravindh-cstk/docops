---
title: "fetch"
description: "The fetch method retrieves the information of an existing user account."
url: "https://www.contentstack.com/python-management-user-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch  method retrieves the information of an existing user account.

No parameters.

Returns:
Type
User information

```
client = contentstack_management.Client(authtoken='auth_token')

response = client.user().fetch()
```
