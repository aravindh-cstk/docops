---
title: "jobStatus"
description: "The jobStatus method allows you to check the status of a bulk job."
url: "https://www.contentstack.com/java-management-bulkoperation-jobstatus"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## jobStatus

The `jobStatus` method allows you to check the status of a bulk job.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.job_id | string | Yes | — | UID of the bulk job |
| params.bulk_version | string | No | — | The bulk operation version (2.0) |

Returns:
Type
Promise

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
BulkOperation bulkOperation = contentstack.stack().bulkOperation();

Call<ResponseBody> response = bulkOperation.jobStatus("jobId").execute();
if (response.isSuccessful()) {
    System.out.println("Job status retrieved");
}
```
