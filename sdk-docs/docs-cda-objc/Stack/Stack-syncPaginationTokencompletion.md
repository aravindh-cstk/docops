---
title: "syncPaginationToken:completion:"
description: "If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides pagination token in the response. However, you do not have to use the pagination token manually to get the next batch, the SDK does that automatically until the sync is complete. Pagination token can be used in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted."
url: "https://www.contentstack.com/ios-stack-syncpaginationtoken-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## syncPaginationToken:completion:

If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides pagination token in the response. However, you do not have to use the pagination token manually to get the next batch, the SDK does that automatically until the sync is complete. Pagination token can be used in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| token | NSString | Yes | — | Pagination token from where to perform sync |
| completionBlock | (SyncStack *BUILT_NULLABLE_P syncStack , NSError *BUILT_NULLABLE_P error) | Yes | — | completionBlock called synchronization is done. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];

[stack syncPaginationToken:@"PAGINATION_TOKEN" contentTypeArray completion:^(SyncStack * Nullable syncStack, NSError * Nullable error) 

}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

stack.syncPaginationToken("PAGINATION_TOKEN", completion: { ( syncStack:SyncStack, error: NSError) in

})
```
