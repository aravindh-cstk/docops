---
title: "Get All Entry Variants"
description: "The Get all entry variants request retrieves all entry variants of the specified entry. To fetch specific variants, pass one or more variant UIDs in the x-cs-variant-uid header. This returns only the variants applied to the specified entries. Note: You can add up to three variant UIDs in the x-cs-variant-uid header, separated by commas. The first UID in the list has the highest priority and its content will be used first. >For example, if you enter Red, Green, and Blue in that order, Red will be given priority. Example: x-cs-variant-uid: cs6c42daef493fb432, cs7697ce80c9bbcc3e, cs8697ce80c9bbcc4f You can add other Queries to extend the functionality of this API call. Note: The API timeout for entry variants is capped at 10 seconds. The maximum response document size for all entry variants is 10 MB"
url: "https://www.contentstack.com/python-entry-variants-get-all-entry-variants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Get All Entry Variants

The Get all entry variants request retrieves all entry variants of the specified entry.
 To fetch specific variants, pass one or more variant UIDs in the `x-cs-variant-uid` header. This returns only the variants applied to the specified entries.

**Note:** You can add up to three variant UIDs in the `x-cs-variant-uid`  header, separated by commas. The first UID in the list has the highest priority and its content will be used first.>For example, if you enter Red, Green, and Blue in that order, Red will be given priority.Example: x-cs-variant-uid: cs6c42daef493fb432, cs7697ce80c9bbcc3e, cs8697ce80c9bbcc4f

You can add other Queries to extend the functionality of this API call.

Note:

- The API timeout for entry variants is capped at 10 seconds.
- The maximum response document size for all entry variants is 10 MB

No parameters.

Returns:
Type
dict

**Example 1:**

```
import contentstack
stack = contentstack.Stack('api_key', 'delivery_token', 'environment')
content_type = stack.content_type(content_type_uid)
response = content_type.variants('variants_uid1').find()
```

**Example 2:**

```
import contentstack
stack = contentstack.Stack('api_key', 'delivery_token', 'environment')
content_type = stack.content_type(content_type_uid)
response = content_type.variants(['variants_uid_1', 'variants_uid_2', 'variants_uid_3' ]).find()
```
