---
title: "fetch_tasks"
description: "The fetch_tasks method retrieves the details of all tasks assigned to you."
url: "https://www.contentstack.com/python-management-workflows-fetch_tasks"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch_tasks

The fetch_tasks method retrieves the details of all tasks assigned to you.

No parameters.

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows().logs().json()
```
