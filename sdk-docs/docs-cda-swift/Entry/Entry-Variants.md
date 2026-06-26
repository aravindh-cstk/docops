---
title: "Variants"
description: "The variants method retrieves details of a specific entry variant or an array of entry variants based on the applied query. When Personalize creates a variant in the CMS, it assigns a \"Variant Alias\" to identify that specific variant. When fetching entry variants using the Delivery API, you can pass variant aliases in place of variant UIDs in the `x-cs-variant-uid` header."
url: "https://www.contentstack.com/swift-entry-variants"
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

When Personalize creates a variant in the CMS, it assigns a "Variant Alias" to identify that specific variant. When fetching entry variants using the Delivery API, you can pass variant aliases in place of variant UIDs in the `x-cs-variant-uid` header.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | uids | string | string[] | Yes | — | Enter the UID of the variant |

Returns:
Type
Entry

**Example 1:**

```
import Contentstack
let stack = Contentstack.stack(
    apiKey: <API_KEY>,
    deliveryToken: <DELIVERY_TOKEN>,
    environment: <ENVIRONMENT>
)

stack
.contentType(uid: <CT_UID>)
.entry(uid: <ENTRY_UID>)
.variants(uid: <VARIANT_UID/VARIANT_ALIAS>)
.fetch { (result: Result<EntryModel, Error>, response: ResponseType) in
    switch result {
        case .success(let contentstackResponse):
            // Contentstack response with variant entry data
        case .failure(let error):
            // Error Message
    }
}
```

**Example 2:**

```
import Contentstack
let stack = Contentstack.stack(
    apiKey: <API_KEY>,
    deliveryToken: <DELIVERY_TOKEN>,
    environment: <ENVIRONMENT>
)

stack
.contentType(uid: <CT_UID>)
.entry(uid: <ENTRY_UID>)
.variants(uids: [<VARIANT_UID_1/VARIANT_ALIAS_1>, <VARIANT_UID_2/<VARIANT_ALIAS_2>, <VARIANT_UID_3/VARIANT_ALIAS_3>])
.fetch { (result: Result<EntryModel, Error>, response: ResponseType) in
    switch result {
        case .success(let contentstackResponse):
            // Contentstack response with variant entry data
        case .failure(let error):
            // Error Message
    }
}
```
