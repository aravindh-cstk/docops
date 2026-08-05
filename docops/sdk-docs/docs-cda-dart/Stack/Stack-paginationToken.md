---
title: "paginationToken"
description: "If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides pagination token in the response. However, you do not have to use the pagination token manually to get the next batch, the SDK does that automatically until the sync is complete. Pagination token can be used in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted."
url: "https://www.contentstack.com/dart-stack-paginationtoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## paginationToken

If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides pagination token in the response. However, you do not have to use the pagination token manually to get the next batch, the SDK does that automatically until the sync is complete. Pagination token can be used in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| paginationToken | String | Yes | — | The pagination token |

Returns:
Type
Future<T>

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
var response = stack.paginationToken("paginationToken")                                                                        </span>
```
