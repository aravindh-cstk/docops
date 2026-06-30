---
title: "job_status"
description: "The `job_status` method retrieves the current status of a bulk job, including detailed progress and nested reference publishing metadata."
url: "https://www.contentstack.com/python-management-sdk-bulk-operations-job_status"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## job_status

The `job_status` method retrieves the current status of a bulk job, including detailed progress and nested reference publishing metadata.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| job_uid | String | Yes | — | UID of the bulk operation of job |

Returns:
Type
JSON

**Example:**

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').bulk_operation().job_status('job_uid').json()
```
