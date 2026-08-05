---
title: "cancel"
description: "The “Cancel Scheduled Action” method allows you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and cancel the deployment of releases."
url: "https://www.contentstack.com/python-management-publish-queue-cancel"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## cancel

The “Cancel Scheduled Action” method allows you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and cancel the deployment of releases.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').publish_queue().create(data).json()
```
