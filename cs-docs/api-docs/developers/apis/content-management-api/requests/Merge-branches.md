---
title: "Merge branches"
description: POST /stacks/branches_merge?base_branch=main&compare_branch=redesign&default_merge_strategy=merge_prefer_compare&merge_comment=sample comment
url: developers/apis/content-management-api/requests/merge-branches
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-09-04
---

# Merge branches

**POST** `/stacks/branches_merge?base_branch=main&compare_branch=redesign&default_merge_strategy=merge_prefer_compare&merge_comment=sample comment`

The Merge branches request merges the specified two branches as per the merge strategy selected.

**Additional Resource:** To learn how to select and use the merge strategies, refer to our documentation on [Merging Branches](../../../../../cs-docs/developers/branches/merging-branches.md).

You can pass ignore in the default_merge_strategy query parameter, and pass the item_merge_strategies in the request body to override the default strategy and use a different merge strategy for specific content types or global fields.

Here are the details of available merge strategies and what each strategy does:

| Merge Strategy | Description |
| --- | --- |
| merge_prefer_base | Merges the changes from the compare branch into the base branch, keeping the base branch's changes if there are conflicts. |
| merge_prefer_compare | Merges the changes from the compare branch into the base branch, keeping the compare branch's changes if there are conflicts. |
| overwrite_with_compare | Replaces the base branch with the compare branch, discarding any changes that are not in the compare branch. |
| merge_new_only | Adds only new items from the compare branch to the base branch ignoring the modified items. |
| merge_modified_only_prefer_base | Merges the modified items from the compare branch into the base branch, keeping the base branch's changes if there are conflicts. |
| merge_modified_only_prefer_compare | Merges the modified items from the compare branch into the base branch, keeping the compare branch's changes if there are conflicts. |
| ignore | Doesn’t merge the compare branch directly with the base branch. Lets users choose to merge each item from the compare branch into the base branch individually, using the desired merge strategy. |

**Note**:

- The merge branches feature is only available for the content types and global fields modules.
- You can create an additional revert branch beyond the established maximum limit of branches per stack. For instance, if you already have reached the maximum limit of branches in your stack, you can perform a merge operation, provided that you manually delete the backup branch or any other branch before attempting the next merge.

##### Get all Merge Jobs

## Query Parameters

- **base_branch** (optional)
  The base branch serves as the foundation where changes can be merged.
  Default: `main`
- **compare_branch** (required)
  Enter the branch from which you want to merge changes into the base branch.
  Default: `redesign`
- **default_merge_strategy** (required)
  Specify the merge strategy to apply for the merge action.
  Default: `merge_prefer_base`
- **merge_comment** (required)
  Enter the comment to be displayed for the merge action.
  Default: `merge_comment`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

## Sample Request

```json
{
    "item_merge_strategies": [
        {
            "uid": "global_field_uid", 
            "type": "global_field", 
            "merge_strategy": "merge_prefer_base"
    },
      {
            "uid": "content_type_uid", 
            "type": "content_type",
            "merge_strategy": "merge_prefer_base"
    }
  ]
}
```

## Sample Response

```json
{
   "uid":"185c7583-f811-401a-9278-70682305dd4d",
   "api_key":"blt6de749920a15b8f6",
   "created_at":"2023-05-03T14:26:32.918Z",
   "updated_at":"2023-05-03T14:26:32.918Z",
   "created_by":"blt151bca2f320b01be",
   "updated_by":"blt151bca2f320b01be",
   "merge_details":{
      "base_branch":"main",
      "compare_branch":"redesign",
      "status":"in_progress" },
   "merged_at":null,
   "merge_comment":"sample"
}
```

