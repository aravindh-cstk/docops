---
title: "CMA | Aliases"
description: Create, update, fetch, and manage branch aliases for routing API requests to the right stack branch.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/aliases
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Aliases

[](../../../../cs-docs/developers/branches/create-a-branch.md)

An [alias](./branches.md#work-with-aliases) acts as a pointer to a particular branch. You can specify the alias ID in your frontend code to pull content from the target branch associated with an alias.

## Get All Aliases

### Get all aliases

**GET** `/stacks/branch_aliases?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

The Get all aliases request returns comprehensive information of all the aliases available in a particular stack in your account.  
To configure the permissions for your application via OAuth, please include the cm.branch-aliases.management:read scope.

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
    "branch_aliases": [
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:16:07.248Z",
            "updated_at": "2021-07-26T10:16:09.536Z",
            "deleted_at": false,
            "alias": "release"
        },
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:16:07.248Z",
            "updated_at": "2021-07-26T10:16:09.536Z",
            "deleted_at": false,
            "alias": "dev"
        },
        {
            "uid": "main",
            "source": "",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:04:20.752Z",
            "updated_at": "2021-07-26T10:04:20.752Z",
            "deleted_at": false,
            "alias": "sample_alias"
        }
    ]
}
```




## Get a Single Alias

### Get a single alias

**GET** `/stacks/branch_aliases/{branch_alias_uid}`

The Get a single alias request returns information of a specific alias.  
To configure the permissions for your application via OAuth, please include the cm.branch-aliases.management:read scope.

#### URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias of which you want to retrieve the details. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to retrieve the UID of an alias.
  Default: `your_branch_alias_uid`

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
    "branch_alias": {
        "uid": "dev",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-07-26T10:16:07.248Z",
        "updated_at": "2021-07-26T10:16:09.536Z",
        "deleted_at": false,
        "alias": "sample_alias"
    }
}
```




## Assign an Alias

### Assign an alias

**PUT** `/stacks/branch_aliases/{branch_alias_uid}`

The Assign an alias request creates a new alias in a particular stack of your organization. This alias can point to any existing branch (target branch) of your stack.

**Note:** Only stack owners, admins, and developers can assign a new alias to a branch. You must only use the authtoken to assign an alias.

#### URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias you want to assign or update. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to retrieve the UID of an alias.
  Default: `your_branch_alias_uid`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`

#### Sample Request

```json
{
    "branch_alias": {
        "target_branch": "test"
    }
}
```

#### Sample Response

```json
{
    "notice": "Branch alias assigned successfully.",
    "branch_alias": {
        "uid": "test",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-07-27T12:45:39.690Z",
        "updated_at": "2021-07-27T12:45:40.241Z",
        "deleted_at": false,
        "alias": "sample_alias"
    }
}
```




## Delete an Alias

### Delete an alias

**DELETE** `/stacks/branch_aliases/{branch_alias_uid}?force={boolean_value}`

The Delete an alias request deletes an existing alias.

To confirm the deletion of an alias, you need to specify the force=true query parameter.

When executing the API call, in the “URL Parameters” section, provide the UID of your alias.

**Note**: You must only use the authtoken to delete an alias.

#### URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias that you want to delete. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to retrieve the UID of an alias.
  Default: `your_branch_alias_uid`

#### Query Parameters

- **force** (required)
  Enter 'true' to force delete an alias.
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
    "notice": "Branch alias deleted successfully."
}
```

