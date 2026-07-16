---
title: "find"
description: "The find method retrieves comprehensive information on activities such as publish, unpublish, and delete performed on entries and/or assets. This request also includes the details of the release deployments in the response body."
url: "https://www.contentstack.com/python-management-publish-queue-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves comprehensive information on activities such as publish, unpublish, and delete performed on entries and/or assets. This request also includes the details of the release deployments in the response body.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| publish_queue_uid | str | Yes | — | UID of the publish queue |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack("api_key").publish_queue().find().json()
```
