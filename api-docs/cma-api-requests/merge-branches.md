---
title: "Merge branches"
description: /stacks/branches_merge?base_branch=main&compare_branch=redesign&default_merge_strategy=merge_prefer_compare&merge_comment=sample comment
url: /merge-branches
product: Contentstack
doc_type: api-request
created_at: 2023-05-23T09:45:27.774Z
updated_at: 2023-09-04T09:46:04.324Z
---

# Merge branches

<p>The <span data-type='inlineCode'>Merge branches</span> request merges the specified two branches as per the merge strategy selected.</p><p class="add-resource"><strong>Additional Resource:</strong> To learn how to select and use the merge strategies, refer to our documentation on <a href="/docs/developers/branches/merging-branches/" target="_self">Merging Branches</a>.</p><p>You can pass ignore in the <span data-type='inlineCode'>default_merge_strategy</span> query parameter, and pass the <span data-type='inlineCode'>item_merge_strategies</span> in the request body to override the default strategy and use a different merge strategy for specific content types or global fields.</p><p>Here are the details of available merge strategies and what each strategy does:</p><div classname="cs-table-wrapper"><div classname="cs-table"><table><colgroup data-width='688'><col style="width:29.2151%"/><col style="width:70.7849%"/></colgroup><thead><tr><th><strong>Merge Strategy</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td><p>merge_prefer_base</p></td><td><p>Merges the changes from the compare branch into the base branch, keeping the base branch's changes if there are conflicts.</p></td></tr><tr><td><p>merge_prefer_compare</p></td><td><p>Merges the changes from the compare branch into the base branch, keeping the compare branch's changes if there are conflicts.</p></td></tr><tr><td><p>overwrite_with_compare</p></td><td><p>Replaces the base branch with the compare branch, discarding any changes that are not in the compare branch.</p></td></tr><tr><td><p>merge_new_only</p></td><td><p>Adds only new items from the compare branch to the base branch ignoring the modified items.</p></td></tr><tr><td><p>merge_modified_only_prefer_base</p></td><td><p>Merges the modified items from the compare branch into the base branch, keeping the base branch's changes if there are conflicts.</p></td></tr><tr><td><p>merge_modified_only_prefer_compare</p></td><td><p>Merges the modified items from the compare branch into the base branch, keeping the compare branch's changes if there are conflicts.</p></td></tr><tr><td><p>ignore</p></td><td><p>Doesn’t merge the compare branch directly with the base branch. Lets users choose to merge each item from the compare branch into the base branch individually, using the desired merge strategy.</p></td></tr></tbody></table></div></div><div class="note"><strong>Note</strong>:<ul><li>The merge branches feature is only available for the content types and global fields modules.</li><li>You can create an additional revert branch beyond the established maximum limit of branches per stack. For instance, if you already have reached the maximum limit of branches in your stack, you can perform a merge operation, provided that you manually delete the backup branch or any other branch before attempting the next merge.</li></ul></div><h5>Get all Merge Jobs</h5>

**API Endpoint**: `/stacks/branches_merge?base_branch=main&compare_branch=redesign&default_merge_strategy=merge_prefer_compare&merge_comment=sample comment`

**Method**: `POST`

## Query Parameters

- **base_branch** (optional)
  <p><span style='font-size: 11pt;'>The base branch serves as the foundation where changes can be merged.</span></p>
- **compare_branch** (required)
  <p><span style='font-size: 11pt;'>Enter the branch from which you want to merge changes into the base branch.</span></p>
- **default_merge_strategy** (required)
  <p><span style='font-size: 11pt;'>Specify the merge strategy to apply for the merge action.</span></p>
- **merge_comment** (required)
  <p><span style='font-size: 11pt;'>Enter the comment to be displayed for the merge action.</span></p>

## Headers

- **api_key** (required)
  <span>Enter the API key of the stack.</span>
- **authtoken** (optional)
  <span>Enter your authtoken.</span>
- **authorization** (required)
  <span>Enter your management token.</span>

## Request Body

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

## Response

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

