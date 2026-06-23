---
title: "CMA | Branches"
description: Create, update, fetch, merge, and manage branches for parallel Contentstack development workflows.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/branches
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Branches

[Branches](./branches.md) allows you to isolate and easily manage your “in-progress” work from your stable, live work in the production environment. It helps multiple development teams to work in parallel in a more collaborative, organized, and structured manner without impacting each other.

## Get All Branches

### Get all branches

**GET** `/stacks/branches?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

The Get all branches request returns comprehensive information of all the branches available in a particular stack in your account.

You can add queries to extend the functionality of this API call. Under the 'URL Parameters' section, insert a parameter named query and provide a query in JSON format as the value. (Refer [Queries](../../../api-detail/content-delivery-api.md#queries))  
To configure the permissions for your application via OAuth, please include the cm.branches.management:read scope.

#### Query Parameters

- **limit** (optional)
  Enter the maximum number of branches to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of branches available in a stack.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
    "branches": [
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-06-16T18:15:51.248Z",
            "updated_at": "2021-06-16T18:15:51.248Z",
            "alias": [
                {
                    "uid": "dev"
                }
            ]
        },
        {
            "uid": "main",
            "source": "",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-06-10T18:15:40.521Z",
            "updated_at": "2021-06-10T18:15:40.521Z",
            "alias": []
        }
    ]
}
```




## Get a Single Branch

### Get a single branch

**GET** `/stacks/branches/{branch_uid}`

The Get a single branch request returns information of a specific branch.  
To configure the permissions for your application via OAuth, please include the cm.branches.management:read scope.

#### URL Parameters

- **branch_uid** (required)
  Enter the unique ID of the branch of which you want to retrieve the details. The UID of a branch is unique across a stack. Execute the [Get all branches](#get-all-branches) call to retrieve the UID of a branch.
  Default: `your_branch_uid`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
    "branch": {
        "uid": "development",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-06-16T18:15:51.248Z",
        "updated_at": "2021-06-16T18:15:51.248Z",
        "alias": [
            {
                "uid": "dev"
            }
        ]
    }
}
```




## Create a Branch

### Create a branch

**POST** `/stacks/branches`

The Create a branch request creates a new branch in a particular stack of your organization.

**Note:** Only stack owners, admins, and developers can create a new branch. You must only use the authtoken to create a branch.

In the “Body” section, you need to provide a custom UID for the new branch and also the UID of the source branch from which it will inherit data.

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your auth token.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`

#### Sample Request

```json
{
    "branch": {
        "uid": "release",
        "source": "main"
    }
}
```

#### Sample Response

```json
{
    "notice": "Branch created successfully.",
    "branch": {
        "uid": "release",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-06-17T06:42:26.136Z",
        "updated_at": "2021-06-17T06:42:26.136Z",
        "alias": []
    }
}
```




## Delete a Branch

### Delete a branch

**DELETE** `/stacks/branches/{branch_uid}?force={boolean_value}`

The Delete a branch request deletes an existing branch and all the content within it.

To confirm the deletion of a branch, you need to specify the force=true query parameter.

**Note:** You need to delete the child branches before deleting the parent branch. If a branch is the source for any other branch, irrespective of whether you pass a force parameter or not, the API will not allow you to delete that branch.  
 You must only use the authtoken to delete a branch.

**Additional Resource:** Deleting a branch also deletes the [alias](./branches.md#work-with-aliases) pointing towards it.

When executing the API call, in the “URL Parameters” section, provide the UID of your branch.

#### URL Parameters

- **branch_uid** (required)
  Enter the unique ID of the branch that you want to delete. The UID of a branch is unique across a stack. Execute the [Get all branches](#get-all-branches) call to retrieve the UID of a branch.
  Default: `your_branch_uid`

#### Query Parameters

- **force** (required)
  Enter 'true' to force delete a branch.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "notice": "Branch deleted successfully."
}
```




## Comparing Branches

With the [Comparing Branches](../../../../cs-docs/developers/branches/comparing-branches.md) functionality, you can compare and check the differences between any two branches.

### Compare branches

**GET** `/stacks/branches_compare?base_branch=main&compare_branch=redesign`

The Compare branches request returns a list of all the differences between two branches.

**Note:**

- The compare branches feature is only available for the content types and global fields modules.
- If the number of Content Types/Global Fields that need to be compared is more than 100, you will receive a Next URL in the response body. The comparison limit is set at 100, and for every comparison that goes beyond this limit, the process will be completed in segments of 100.

##### Compare Content Type between Branches

#### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of branches compare result to be returned. The default limit is set at 100.
  Default: `100`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":[
      {
         "title":"Banner",
         "uid":"banner",
         "type":"content_type",
         "status":"compare_only"
      },
      {
         "title":"Author",
         "uid":"author",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Product",
         "uid":"product",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Footer",
         "uid":"footer",
         "type":"content_type",
         "status":"base_only"
      },
      {
         "title":"Homepage",
         "uid":"homepage",
         "type":"content_type",
         "status":"modified"
      }
   ],
   "next_url":"https://api.contentstack.io/v3/stacks/branches_compare/content_types?base_branch=main&compare_branch=pixel&skip=5&limit=5"
}
```


### Compare content types between branches

**GET** `/stacks/branches_compare/content_types?base_branch=main&compare_branch=redesign`

The Compare content types between branches request returns a list of all the differences in content types between the two specified branches.

##### Compare Global Fields between Branches

#### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of branches compare result to be returned. The default limit is set at 100.
  Default: `100`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":[
      {
         "title":"Banner",
         "uid":"banner",
         "type":"content_type",
         "status":"compare_only"
      },
      {
         "title":"Author",
         "uid":"author",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Product",
         "uid":"product",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Footer",
         "uid":"footer",
         "type":"content_type",
         "status":"base_only"
      },
      {
         "title":"Homepage",
         "uid":"homepage",
         "type":"content_type",
         "status":"modified"
      }
   ],
"next_url":"https://api.contentstack.io/v3/stacks/branches_compare/content_types?base_branch=main&compare_branch=pixel&skip=5&limit=5"
}
```


### Compare global fields between branches

**GET** `/stacks/branches_compare/global_fields?base_branch=main&compare_branch=redesign`

The Compare global fields between branches request returns a list of all the differences in global fields between the two specified branches.

##### Compare Specific Content Types between Branches

#### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of branches compare result to be returned. The default limit is set at 100.
  Default: `100`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":[
      {
         "title":"Search",
         "uid":"search",
         "type":"global_field",
         "status":"compare_only"
      },
      {
         "title":"SEO",
         "uid":"ui",
         "type":"global_field",
         "status":"modified"
      }
   ],
"next_url":"https://api.contentstack.io/v3/stacks/branches_compare/content_types?base_branch=main&compare_branch=pixel&skip=5&limit=5"
}
```


### Compare specific content type between branches

**GET** `/stacks/branches_compare/content_types/{content_type_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

The Compare specific content type between branches request returns all the differences of the specified content type between the two specified branches.

##### Compare Specific Global Fields between Branches

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the difference. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `content_type_uid`

#### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":{
      "uid":"homepage",
      "type":"content_type",
      "status":"modified",
      "base_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Categories",
               "display_type":"dropdown",
               "enum":{
                  "advanced":false,
                  "choices":[
                     {
                        "value":"Option A"
                     },
                     {
                        "value":"Option B"
                     }
                  ]
               },
               "multiple":false,
               "uid":"categories",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "version":3
               },
               "mandatory":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            },
            {
               "data_type":"text",
               "display_name":"Featured A",
               "uid":"featured_a",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[2]"
            },
            {
               "data_type":"text",
               "display_name":"Topics",
               "uid":"topics",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[3]"
            }
         ],
         "schema":null
      },
      "compare_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Featured B",
               "uid":"featured_a",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            },
            {
               "data_type":"text",
               "display_name":"SEO Description",
               "uid":"seo_description",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[2]"
            }
         ],
         "schema":null
      }
   }
}
```


### Compare specific global field between branches

**GET** `/stacks/branches_compare/global_fields/{global_field_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

The  Compare specific global field between branches request returns all the differences of the specified global field between the two specified branches.

#### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field  of which you want to retrieve the difference. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

#### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":{
      "uid":"ui",
      "type":"global_field",
      "status":"modified",
      "base_branch":{
         "differences":[
            {
               "value":"SEO",
               "path":"title"
            },
            {
               "data_type":"text",
               "display_name":"Title",
               "uid":"title",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[0]"
            },
            {
               "data_type":"text",
               "display_name":"Description",
               "uid":"description",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            }
         ],
         "schema":null
      },
      "compare_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Markdown",
               "uid":"markdown",
               "field_metadata":{
                  "description":"",
                  "markdown":true,
                  "version":3
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[0]"
            },
            {
               "data_type":"file",
               "display_name":"File",
               "uid":"file",
               "extensions":[
                  
               ],
               "field_metadata":{
                  "description":"",
                  "rich_text_type":"standard"
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            },
            {
               "value":"UI",
               "path":"title"
            }
         ],
         "schema":null
      }
   }
}
```




## Merging Branches

The [Merging Branches ](../../../../cs-docs/developers/branches/merging-branches.md)functionality enables you to merge two branches, integrating the development changes made in the compare branch into the base branch.

### Merge branches

**POST** `/stacks/branches_merge?base_branch=main&compare_branch=redesign&default_merge_strategy=merge_prefer_compare&merge_comment=sample comment`

The Merge branches request merges the specified two branches as per the merge strategy selected.

**Additional Resource:** To learn how to select and use the merge strategies, refer to our documentation on [Merging Branches](../../../../cs-docs/developers/branches/merging-branches.md).

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

#### Query Parameters

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

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Request

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

#### Sample Response

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


### Get all merge jobs

**GET** `/stacks/branches_queue`

The Get all merge jobs request returns a list of all the recent merge jobs within a specific period.

**Note**: By default, the last**100** merge jobs are returned in the response.

##### Get a Single Merge Job

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
    "queue": [
        {
            "uid": "3ebc12e9-20b6-40d2-8aae-f29877f3a7fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-26T16:31:37.123Z",
            "updated_at": "2023-05-26T16:31:37.123Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "in_progress",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample",
                    "no_revert": false
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "7a75ae8d-3580-48da-93eb-80b9635f6330",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-04T08:39:06.074Z",
            "updated_at": "2023-05-04T08:39:21.413Z",
            "created_by": "bltd14ff1cb3b7ca7ae",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "test",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "test",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": "2023-05-04T08:39:21.413Z",
            "errors": []
        },
        {
            "uid": "185c7583-f811-401a-9278-70682305dd4d",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T14:26:32.918Z",
            "updated_at": "2023-05-03T14:26:48.330Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T14:26:48.330Z",
            "errors": []
        },
        {
            "uid": "38c295a9-f8b9-472e-8b65-74ebc22e5f73",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:14:23.222Z",
            "updated_at": "2023-05-03T06:14:23.296Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "ignore",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": null,
            "errors": [
                "No items available for merge"
            ]
        },
        {
            "uid": "37422e29-5166-433a-95d4-e22f755a7d0c",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:03:58.566Z",
            "updated_at": "2023-05-03T06:04:13.835Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_modified_only_prefer_base",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:04:13.835Z",
            "errors": []
        },
        {
            "uid": "9e9b08ea-f0dc-4352-9495-47e13e89fe69",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:03:30.191Z",
            "updated_at": "2023-05-03T06:03:45.494Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "overwrite_with_compare",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:03:45.494Z",
            "errors": []
        },
        {
            "uid": "185e7178-e8b0-4e59-b7d8-eb1c2062ac04",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:02:42.840Z",
            "updated_at": "2023-05-03T06:02:58.126Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_base",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:02:58.126Z",
            "errors": []
        },
        {
            "uid": "c333e912-9698-4f70-91c9-728ace9e0f25",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:02:26.519Z",
            "updated_at": "2023-05-03T06:02:41.836Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-05-03T06:02:41.836Z",
            "errors": []
        },
        {
            "uid": "cab3e738-32cd-4d23-994c-bc57e43e0430",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T05:53:21.384Z",
            "updated_at": "2023-05-03T05:53:36.871Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-05-03T05:53:36.871Z",
            "errors": []
        },
        {
            "uid": "304116d6-8169-4192-8d3a-31bb27ac85ee",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-21T10:28:01.287Z",
            "updated_at": "2023-04-21T10:28:17.021Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "dev",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "dev",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-04-21T10:28:17.021Z",
            "errors": []
        },
        {
            "uid": "a7f23177-59d4-451a-bda4-e6bbd1e8a88d",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T10:48:44.794Z",
            "updated_at": "2023-04-13T10:48:59.970Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "sample",
                "compare_branch": "dev",
                "status": "complete",
                "configuration": {
                    "base_branch": "sample",
                    "compare_branch": "dev",
                    "default_merge_strategy": "merge_modified_only_prefer_base",
                    "merge_comment": "Sample comment"
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "03f35e8d-059e-44f2-905b-82e7206f8114",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T10:41:03.313Z",
            "updated_at": "2023-04-13T10:41:18.650Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "sample",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "sample",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "300fd68a-e1db-4ab6-94ea-dcf51e4e08b1",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T09:43:17.984Z",
            "updated_at": "2023-04-13T09:43:33.377Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "sample",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "sample",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": [
                {
                    "event": "update",
                    "type": "global_fields",
                    "uid": "sample",
                    "error": "{\"error_message\":\"We're sorry, but something went wrong. We've been notified about this issue and will take a look at it shortly. Please contact support@contentstack.com for assistance.\",\"error_code\":194}"
                }
            ]
        },
        {
            "uid": "a411a7e0-a988-472b-9e59-59a65ddb49fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T09:32:00.911Z",
            "updated_at": "2023-04-13T09:32:16.301Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "dev",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "dev",
                    "default_merge_strategy": "overwrite_with_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": [
                {
                    "event": "delete",
                    "type": "global_fields",
                    "uid": "sample",
                    "error": "{\"error_message\":\"Access denied. You have insufficient permissions to perform this operation.\",\"error_code\":162}"
                }
            ]
        }
    ]
}
```


### Get single merge job

**GET** `/stacks/branches_queue/your_merge_job_uid`

The Get single merge job request returns the status and configuration details of a particular merge job.

#### URL Parameters

- **merge_job_uid** (required)
  Default: `your_merge_job_uid`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
    "queue": [
        {
            "uid": "3ebc12e9-20b6-40d2-8aae-f29877f3a7fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-26T16:31:37.123Z",
            "updated_at": "2023-05-26T16:31:52.546Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample",
                    "no_revert": false
                }
            },
            "merged_at": "2023-05-26T16:31:52.546Z",
            "errors": []
        }
    ]
}
```

