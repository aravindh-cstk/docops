---
title: "JobStatus"
description: "The JobStatus method retrieves the status of a bulk operation using its job UID."
url: "https://www.contentstack.com/dotnet-management-bulk-operations-bulk-jobstatus"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## JobStatus

The `JobStatus` method retrieves the status of a bulk operation using its job UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| job_id | String | No | — | The UID of the bulk job |
| bulkVersion | String | No | — | The bulk operation version. |

Returns:
Type
ContentstackResponse

**Example:**

```
string jobId = "job_id_from_bulk_operation";
ContentstackResponse response = bulkOperation.JobStatus(jobId);
ContentstackResponse responseWithVersion = bulkOperation.JobStatus(jobId, "2.0");
```
