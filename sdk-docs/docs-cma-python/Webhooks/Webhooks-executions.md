---
title: "executions"
description: "The execution method retrieves the execution details of a specific webhook, which includes the execution UID."
url: "https://www.contentstack.com/python-management-webhooks-executions"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## executions

The execution method retrieves the execution details of a specific webhook, which includes the execution UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| webhook_execution_uid | str | Yes | — | UID of the webhook execution |

Returns:
Type
Webhook

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').webhooks('webhook_execution_uid').executions().json()
```
