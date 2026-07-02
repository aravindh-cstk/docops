---
title: "Get a Single Entry Variants"
description: "The Get a single entry variant request retrieves a single variant entry of a given base entry. To fetch variants applied to your entries, pass the the variant UID(s) in the x-cs-variant-uid header. Note: You can add up to three variant UIDs in the x-cs-variant-uid header, separated by commas. The first UID in the list has the highest priority and its content will be used first. For example, if you enter Red, Green, and Blue in that order, Red will be given priority.Example: x-cs-variant-uid: cs6c42daef493fb432, cs7697ce80c9bbcc3e, cs8697ce80c9bbcc4f You can add other Queries to extend the functionality of this API call. Note: The API timeout for entry variants is capped at 10 seconds. The maximum response document size for all entry variants is 10 MB"
url: "https://www.contentstack.com/python-entry-variants-get-a-single-entry-variants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Get a Single Entry Variants

The Get a single entry variant request retrieves  a single variant entry of a given base entry. 
To fetch variants applied to your entries, pass the the variant UID(s) in the `x-cs-variant-uid` header.

**Note:** You can add up to three variant UIDs in the `x-cs-variant-uid` header, separated by commas. The first UID in the list has the highest priority and its content will be used first. For example, if you enter Red, Green, and Blue in that order, Red will be given priority.Example: x-cs-variant-uid: cs6c42daef493fb432, cs7697ce80c9bbcc3e, cs8697ce80c9bbcc4f

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
entry = stack.content_type(content_type_uid).entry('entry_uid')
response = entry.variants('variants_uid1').fetch()
)
```

**Example 2:**

```
import contentstack
stack = contentstack.Stack('api_key', 'delivery_token', 'environment')
entry = stack.content_type(content_type_uid).entry('entry_uid')
response = entry.variants(['variants_uid_1', 'variants_uid_2', 'variants_uid_3' ]).fetch()
```
