---
title: "Variants"
description: "The variants method retrieves details of a specific entry variant or an array of entry variants based on the applied query."
url: "https://www.contentstack.com/ios-entry-class-variants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Variants

The variants method retrieves details of a specific entry variant or an array of entry variants based on the applied query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variantUid/variantAlias | variantUids/variantAliases | NSString | NSArray | Yes | — | Enter the UID of the variant |

Returns:
Type
ResponseType

**Example 1:**

```
#import <Contentstack/Contentstack.h>;

Stack* stack = [Contentstack stackWithAPIKey:<api_key> accessToken:<delivery_token> environmentName:<env_name>];

ContentType* ct = [stack contentTypeWithName:<ct_uid>];
Entry* entry = [ct entryWithUid:<entry_uid>];
[entry variantUid:<variant_uid/variant-alias>];

[entry fetch:^(ResponseType type, NSError *error) {
  if(error) {
    // catch error
  } else {
    // get response
  }
}];
```

**Example 2:**

```
#import <Contentstack/Contentstack.h>;

Stack* stack = [Contentstack stackWithAPIKey:<api_key> accessToken:<delivery_token> environmentName:<env_name>];

ContentType* ct = [stack contentTypeWithName:<ct_uid>];
Entry* entry = [ct entryWithUid:<entry_uid>];
[entry variantUids/variantAliases:[@"variantUid1/variantAlias1", @"variantUid2/variantAlias2",@"variantUid3/variantAlias3"]];

[entry fetch:^(ResponseType type, NSError *error) {
  if(error) {
    // catch error
  } else {
    // get response
  }
}];
```
