---
title: "user"
description: "All accounts registered with Contentstack are known as Users. A stack can have many users with varying permissions and roles"
url: "https://www.contentstack.com/java-management-contentstack-user"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## user

All accounts registered with Contentstack are known as Users. A stack can have many users with varying permissions and roles

No parameters.

Returns:
Type
User

```
import contentstack;

Contentstack contentstack = new Contentstack.Builder().build();
User user = contentstack.user();
```
