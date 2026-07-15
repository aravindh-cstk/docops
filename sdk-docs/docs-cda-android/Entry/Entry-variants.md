---
title: "variants"
description: "The `variants` method retrieves details of a specific entry variant or an array of entry variants based on the applied query. When Personalize creates a variant in the CMS, it assigns a \"Variant Alias\" to identify that specific variant. When fetching entry variants using the Delivery API, you can pass variant aliases in place of variant UIDs in the `x-cs-variant-uid` header."
url: "https://www.contentstack.com/android-delivery-entry-variants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## variants

The `variants` method retrieves details of a specific entry variant or an array of entry variants based on the applied query.

When Personalize creates a variant in the CMS, it assigns a "Variant Alias" to identify that specific variant. When fetching entry variants using the Delivery API, you can pass variant aliases in place of variant UIDs in the `x-cs-variant-uid` header.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variantUid/variantAlias | String / String [] | Yes | — | Enter the UID/Alias of the variant |

Returns:
Type
Entry

**Example 1:**

```
import com.contentstack.sdk.*;
Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
final Entry entry = stack
                    .contentType("contentType")
                    .entry("entryUid")
                    .variants("variantUid/variantAlias");
 entry.fetch(new EntryResultCallBack() {
     @Override
     public void onCompletion(ResponseType responseType, Error error) {
              System.out.println(entry.toJSON());
         }
 });
```

**Example 2:**

```
import com.contentstack.sdk.*;
Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
final Entry entry = stack
                    .contentType("contentType")
                    .entry("entryUid")
                    .variants(new String[]{"variantUid1/variantAlias1","variantUid2/variantAlias2"});
 entry.fetch(new EntryResultCallBack() {
     @Override
     public void onCompletion(ResponseType responseType, Error error) {
              System.out.println(entry.toJSON());
         }
 });
```
