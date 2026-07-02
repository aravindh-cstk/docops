---
title: "Variants"
description: "Variants are different versions of content designed to meet specific needs or target audiences. This feature allows content editors to create multiple variations of a single entry, each customized for a particular variant group or purpose. When Personalize creates a variant in the CMS, it assigns a \"Variant Alias\" to identify that specific variant. When fetching entry variants using the Delivery API, you can pass variant aliases in place of variant UIDs in the x-cs-variant-uid header."
url: "https://www.contentstack.com/typescript-delivery-entry-variants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Variants

Variants are different versions of content designed to meet specific needs or target audiences. This feature allows content editors to create multiple variations of a single entry, each customized for a particular variant group or purpose.

When Personalize creates a variant in the CMS, it assigns a "Variant Alias" to identify that specific variant. When fetching entry variants using the Delivery API, you can pass variant aliases in place of variant UIDs in the `x-cs-variant-uid` header.

No parameters.

Returns:
Type
Promise

**Single Variant:** This method retrieves the details of a specific entry variant.

**Example:**

```
import contentstack from '@contentstack/delivery-sdk';

const Stack = contentstack.stack
({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack
                    .contentType('content_type_uid')
                    .entry('entry_uid')
                    .variants('variant_uid/variant_alias')
                    .fetch();
```

**Layering variants:** This method retrieves the details of entry variants based on the applied query

**Example:**

```
import contentstack from '@contentstack/delivery-sdk';

const Stack = contentstack.stack
({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack
                      .contentType('content_type_uid')
                      .entry('entry_uid')
                      .variants(['variant_uid1/variant_alias1','variant_uid2/variant_alias2'])
                      .fetch();
```

**Note**: By default you can add up to **3 variant UIDs or aliases**. The limit can vary based on your organization plan. The variant UID or alias added first takes priority and will be applied to the base entry fields.
