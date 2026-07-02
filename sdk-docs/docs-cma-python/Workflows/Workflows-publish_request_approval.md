---
title: "publish_request_approval"
description: "The publish_request_approval method allows you to either send a publish request or accept/reject a publish request."
url: "https://www.contentstack.com/python-management-workflows-publish_request_approval"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish_request_approval

The publish_request_approval method allows you to either send a publish request or accept/reject a publish request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | str | Yes | — | UID of the content type |
| entry_uid | str | Yes | — | UID of the entry |

Returns:
Type
JSON

```
from contentstack_management import contentstack
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
result = client.stack('api_key').workflows().publish_request_approval('content_type_uid', 'entry_uid').json()
```
