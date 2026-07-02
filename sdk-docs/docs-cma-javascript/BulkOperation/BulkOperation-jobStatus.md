---
title: "jobStatus"
description: "The jobStatus method allows you to check the status of a bulk job."
url: "https://www.contentstack.com/js-management-bulkoperation-jobstatus"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## jobStatus

The jobStatus method allows you to check the status of a bulk job.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.job_id | string | No | — | The bulk job's UID |
| params.bulk_version | string | No | — | The bulk operation version . (2.0) |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).bulkOperation().jobStatus({ job_id: 'job_id' })
  .then((response) => { console.log(response) })
```
