---
title: "fetch_publish_rule"
description: "The fetch_publish_rule method retrieves the details of a specific publish rule from the stack."
url: "https://www.contentstack.com/python-management-workflows-fetch_publish_rule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch_publish_rule

The fetch_publish_rule method retrieves the details of a specific publish rule from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| rule_uid | str | Yes | — | UID of the publishing rule |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows().fetch_publish_rule('rule_uid').json()
```
