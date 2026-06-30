---
title: "delete_publish_rule"
description: "The delete_publish_rule method removes an existing publish rule for the workflow in a specific stack."
url: "https://www.contentstack.com/python-management-workflows-delete_publish_rule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete_publish_rule

The delete_publish_rule method removes an existing publish rule for the workflow in a specific stack.

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
response = client.stack('api_key').workflows().delete_publish_rule('rule_uid').json()
```
