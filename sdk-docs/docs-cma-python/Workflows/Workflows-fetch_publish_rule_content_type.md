---
title: "fetch_publish_rule_content_type"
description: "The fetch_publish_rule_content_type method retrieves the details of publish rules applied to a specific content type."
url: "https://www.contentstack.com/python-management-workflows-fetch_publish_rule_content_type"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch_publish_rule_content_type

The fetch_publish_rule_content_type method retrieves the details of publish rules applied to a specific content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | str | Yes | — | UID of the content type |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows().fetch_publish_rule_content_type('content_type_uid').json()
```
