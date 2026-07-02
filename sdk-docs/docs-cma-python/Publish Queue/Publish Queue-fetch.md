---
title: "fetch"
description: "The fetch method retrieves comprehensive information on a specific publish, unpublish, or delete action performed on an entry and/or asset. You can also retrieve details of a specific release deployment."
url: "https://www.contentstack.com/python-management-publish-queue-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves comprehensive information on a specific publish, unpublish, or delete action performed on an entry and/or asset. You can also retrieve details of a specific release deployment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| publish_queue_uid | str | Yes | — | UID of the publish queue |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').publish_queue('publish_queue_uid').fetch().json()
```
