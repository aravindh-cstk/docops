---
title: "Global Fields"
description: "A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and efforts) to create the same set of fields repeatedly in multiple content types. Example: Stack \\*stack = \\[Contentstack stackWithAPIKey:@\"API\\_KEY\" accessToken:@\"DELIVERY\\_TOKEN\" environmentName:@\"ENVIRONMENT\"\\]; GlobalField \\*globalfield = \\[stack globalFieldWithName :@\"Global\\_field\\_uid\"\\]; \\[globalfield fetch:^(ResponseType type, NSError \\* \\_Nullable error) { }\\];"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/ios/reference/global-fields"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Global Fields

## Global Fields

A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and efforts) to create the same set of fields repeatedly in multiple content types.

**Example:**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
GlobalField *globalfield = [stack globalFieldWithName
:@"Global_field_uid"];
[globalfield fetch:^(ResponseType type, NSError * _Nullable error) {
}];
```
