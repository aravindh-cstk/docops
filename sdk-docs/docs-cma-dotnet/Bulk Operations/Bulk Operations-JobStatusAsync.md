---
title: "JobStatusAsync"
description: "The JobStatusAsync method retrieves the status of a bulk operation using its job UID."
url: "https://www.contentstack.com/dotnet-management-bulk-operations-jobstatusasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## JobStatusAsync

The `JobStatusAsync` method retrieves the status of a bulk operation using its job UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| job_id | String | No | — | The UID of the bulk job |
| bulkVersion | String | No | — | The bulk operation version. |

Returns:
Type
Task<ContentstackResponse>

**Example:**

```
string jobId = "job_id_from_bulk_operation";
ContentstackResponse response = bulkOperation.JobStatus(jobId);
ContentstackResponse responseWithVersion = await bulkOperation.JobStatusAsync(jobId, "2.0");
```
