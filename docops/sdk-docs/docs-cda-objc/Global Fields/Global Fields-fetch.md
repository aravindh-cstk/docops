---
title: "fetch"
description: "The fetch method retrieves the details of the specified global field."
url: "https://www.contentstack.com/ios-global-fields-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details  of the specified global field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| globalFieldUid | String | Yes | — | UID of the Global field |

Returns:
Type
void

**Example:**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
GlobalField *globalfield = [stack globalFieldWithName
:@"Global_field_uid"];
[globalfield fetch:^(ResponseType type, NSError * _Nullable error) {
}];
```
