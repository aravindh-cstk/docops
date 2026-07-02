---
title: "merge"
description: "The merge call is used to merge two branches. You can choose to use a default merge strategy for all content types and global fields, or you can opt for specific merge strategies for particular content types or global fields."
url: "https://www.contentstack.com/js-management-branch-merge"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## merge

The merge call is used to merge two branches. You can choose to use a default merge strategy for all content types and global fields, or you can opt for specific merge strategies for particular content types or global fields.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const branch = contentstack.client({ authtoken }).stack({ api_key: 'api_key'}).branch()
branch.merge({
  base_branch: "main",
  compare_branch: "dev",
  default_merge_strategy: "merge_prefer_base",
  item_merge_strategies: [ 
    {
      uid: "global_field_uid", 
      type: "global_field", 
      merge_strategy: "merge_prefer_base"
    }
  ],
  merge_comment: "Merging dev into main", 
  no_revert: true
})
```
