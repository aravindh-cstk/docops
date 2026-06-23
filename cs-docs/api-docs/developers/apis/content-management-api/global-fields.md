---
title: "CMA | Global Fields"
description: Create, update, fetch, and manage reusable global field schemas across Contentstack content types.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/global-fields
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Global Fields

A Global field is a reusable field (or group of fields) that you can define once and reuse across multiple content types within your stack. This eliminates the need to recreate the same set of fields multiple times, saving effort and ensuring consistency.

**Note**: If your Global field contains [nested Global fields](../../../../cs-docs/developers/global-field/about-global-field.md#nested-global-fields), they will appear as part of the schema in the API response.

You can pass the **branch header** in API requests to fetch or manage modules within specific branches of the stack. Additionally, setting the include_branch query parameter to true includes the _branch key in the response, specifying the unique ID of the branch where the module resides.

**Additional Resource**: You can create dynamic and flexible Global Fields by nesting Global fields within a [Modular Block](../../../../cs-docs/developers/global-field/global-fields-as-blocks-within-modular-blocks.md), [Global](../../../../cs-docs/developers/global-field/about-global-field.md), or a [Group](../../../../cs-docs/developers/global-field/group-fields-within-global-fields.md) fields.

## Get All Global Fields

### Get all global fields

**GET** `/global_fields`

The Get all global fields request returns comprehensive information of all the global fields available in a particular stack in your organization.

**Note**:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
- To configure the permissions for your application via OAuth, please include the cm.global-fields.management:read scope.

#### Query Parameters

- **include_global_field_schema** (optional)
  Set this parameter to 'true' to include in response the schema of the nested Global field.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `true`
- **include_content_types** (optional)
  Set this parameter to 'true' to include in response the details of the content types where the current Global field is referred.
  Default: `ture`
- **include_global_fields** (optional)
  Set this parameter to 'true' to include in response the details of Global fields where the current Global field is referred.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of Global fields available in a stack.
  Default: `true`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted Global fields within a stack.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "global_fields": [
        {
            "created_at": "2019-09-06T11:30:02.108Z",
            "updated_at": "2019-09-06T11:30:02.108Z",
            "title": "Servlet",
            "uid": "servlet",
            "_version": 1,
            "inbuilt_class": false,
            "schema": [
                {
                    "display_name": "Name",
                    "uid": "name",
                    "data_type": "text",
                    "multiple": false,
                    "mandatory": false,
                    "unique": false,
                    "non_localizable": false
                },
                {
                    "data_type": "text",
                    "display_name": "Rich text editor",
                    "uid": "description",
                    "field_metadata": {
                        "allow_rich_text": true,
                        "description": "",
                        "multiline": false,
                        "rich_text_type": "advanced",
                        "options": [],
                        "version": 3
                    },
                    "multiple": false,
                    "mandatory": false,
                    "unique": false,
                    "non_localizable": false
                }
            ],
            "last_activity": {},
            "maintain_revisions": true,
            "description": ""
        }
    ]
}
```




## Get Single Global Field

### Get a single global field

**GET** `/global_fields/{global_field_uid}`

The Get a single global field request allows you to fetch comprehensive details of a specific global field.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

**Note**:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
- To configure the permissions for your application via OAuth, please include the cm.global-fields.management:read scope.

#### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the Global field of which you want to retrieve the details. The UID of a Global field is unique across a stack. Execute the '[Get all Global fields](../../../api-detail/content-management-api.md#get-all-global-fields)' request to retrieve the UID of a Global field.
  Default: `category`

#### Query Parameters

- **version** (optional)
  Specify the version number of the specified Global field of which you want to retrieve details.
  Default: `4`
- **include_global_field_schema** (optional)
  Set this parameter to 'true' to include in response the schema of the Global field.
  Default: `true`
- **include_global_fields** (optional)
  Set this parameter to 'true' to include in response the count of Global fields.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `true`
- **include_content_types** (optional)
  Set this parameter to 'true' to include in response the details of the content types.
  Default: `true`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted Global fields within a stack.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "global_field": {
        "created_at": "2019-09-06T11:30:02.108Z",
        "updated_at": "2019-09-06T11:30:02.108Z",
        "title": "Servlet",
        "uid": "servlet",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Name",
                "uid": "name",
                "data_type": "text",
                "multiple": false,
                "mandatory": false,
                "unique": false,
                "non_localizable": false
            },
            {
                "data_type": "text",
                "display_name": "Rich text editor",
                "uid": "description",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "options": [],
                    "version": 3
                },
                "multiple": false,
                "mandatory": false,
                "unique": false,
                "non_localizable": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": ""
    }
}
```




## Create Global Field

### Create a global field

**POST** `/global_fields`

The Create a global field request allows you to create a new global field in a particular stack of your Contentstack account. You can use this global field in any content type within your stack.

To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

**Note**: Only the stack owner, administrator, and developer can create global fields.

To create a nested global field, follow the schema in the request body:

```
{
    "global_field": {
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ]
    }
}
```

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "global_field": {
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ]
    }
}
```

#### Sample Response

```json
{
    "notice": "Global Field created successfully.",
    "global_field": {
        "created_at": "2024-08-07T07:39:11.410Z",
        "updated_at": "2024-08-07T07:40:02.343Z",
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true
    }
}
```




## Update Global Field

### Update a global field

**PUT** `/global_fields/{global_field_uid}`

The Update a global field request allows you to update the schema of an existing global field.   
To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

#### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
        "global_field": {
            "title": "Servlet",
            "uid": "servlet",
            "schema": [{
                "display_name": "Name",
                "uid": "name",
                "data_type": "text"
            }, {
                "data_type": "text",
                "display_name": "Rich text editor",
                "uid": "description",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "options": [],
                    "version": 3
                },
                "multiple": false,
                "mandatory": false,
                "unique": false
            }]
        }
    }
```

#### Sample Response

```json
{
    "notice": "Global Field updated successfully.",
    "global_field": {
        "created_at": "2019-09-06T11:30:02.108Z",
        "updated_at": "2019-09-06T11:30:02.108Z",
        "title": "Servlet",
        "uid": "servlet",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Name",
                "uid": "name",
                "data_type": "text",
                "multiple": false,
                "mandatory": false,
                "unique": false,
                "non_localizable": false
            },
            {
                "data_type": "text",
                "display_name": "Rich text editor",
                "uid": "description",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "options": [],
                    "version": 3
                },
                "multiple": false,
                "mandatory": false,
                "unique": false,
                "non_localizable": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": ""
    }
}
```




## Delete Global Field

### Delete global field

**DELETE** `/global_fields/{global_field_uid}?force=true`

The Delete global field request allows you to delete a specific global field.

To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

**Warning**: If your Global field has been referred within a particular content type, then you will need to pass an additional query parameter force:true to delete the Global field.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

#### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

#### Query Parameters

- **force** (required)
  Set the force parameter to 'true' to delete the Global field.
  Default: `true`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "notice": "Global Field deleted successfully."
}
```




## Import Global Field

### Import a global field

**POST** `/global_fields/import`

The Import a global field call imports a global field into a stack.

To import, you need to provide/upload a JSON file that contains the schema of the global field that you wish to import.

**Tip**: You can try the call manually in any REST API client, such as Postman, by passing a 'Body' parameter named global_field and selecting the input type as 'File'. Then, select the JSON file of the global field that you wish to import.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Default: `Your_management_token`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "notice": "Global Field imported successfully.",
  "global_field": {
    "created_at": "2019-08-22T05:29:37.701Z",
    "updated_at": "2019-08-22T05:29:37.701Z",
    "title": "five",
    "uid": "five",
    "_version": 1,
    "inbuilt_class": false,
    "schema": [
      {
        "display_name": "Name",
        "uid": "name",
        "data_type": "text",
        "multiple": false,
        "mandatory": false,
        "unique": false,
        "non_localizable": false
      },
      {
        "display_name": "Add",
        "uid": "add",
        "data_type": "text",
        "multiple": false,
        "mandatory": false,
        "unique": false,
        "non_localizable": false
      },
      {
        "display_name": "std",
        "uid": "std",
        "data_type": "text",
        "multiple": false,
        "mandatory": false,
        "unique": false,
        "non_localizable": false
      }
    ],
    "last_activity": {},
    "maintain_revisions": true,
    "description": ""
  }
}
```




## Export Global Field

### Export a global field

**GET** `/global_fields/{global_field_uid}/export`

This request is used to export a specific global field and its schema. The data is exported in JSON format. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.   
To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

#### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
    "created_at": "2019-11-26T09:18:18.850Z",
    "updated_at": "2019-11-26T09:18:49.861Z",
    "title": "Servlet",
    "uid": "servlet",
    "_version": 1,
    "inbuilt_class": false,
    "schema": [
        {
            "display_name": "Name",
            "uid": "name",
            "data_type": "text",
            "multiple": false,
            "mandatory": false,
            "unique": false,
            "non_localizable": false
        },
        {
            "data_type": "text",
            "display_name": "Rich text editor",
            "uid": "description",
            "field_metadata": {
                "allow_rich_text": true,
                "description": "",
                "multiline": false,
                "rich_text_type": "advanced",
                "options": [],
                "version": 3
            },
            "multiple": false,
            "mandatory": false,
            "unique": false,
            "non_localizable": false
        }
    ],
    "last_activity": {},
    "maintain_revisions": true,
    "description": ""
}
```

