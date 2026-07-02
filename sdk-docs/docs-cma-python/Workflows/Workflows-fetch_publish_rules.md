---
title: "fetch_publish_rules"
description: "The fetch\\_publish\\_rules method retrieves the details of all publish rules from the stack."
url: "https://www.contentstack.com/python-management-workflows-fetch_publish_rules"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch_publish_rules

The fetch_publish_rules method retrieves the details of all publish rules from the stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows().fetch_publish_rules().json()
```
