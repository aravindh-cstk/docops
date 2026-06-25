---
title: "CMA | Variant Groups"
description: Create, update, fetch, and manage variant groups for personalized or segmented Contentstack content.
url: https://www.contentstack.com/docs/developer-apis/content-management-api/variant-groups
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Variant Groups

Variants in Contentstack provides an overview of variant groups and linked content types, which are used for content personalization. Linking content types to variant groups allows you to create entry variants.

**Note**:

- The Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our support team.
- Editing variant group details is not supported, as this information is managed by Personalize.

## Get All Variant Groups

### Get all variant groups

**GET** `/variant_groups?skip=0&limit=30&include_count=true&include_variant_info=true&include_variant_count=true&desc=created_at&content_type={your_content_type_uid}`

The Get all variant groups request returns a list of all variant groups linked to your stack. To retrieve the variant UIDs specific to a content type, include the content_type query parameter with the content type UID in your request.

#### Query Parameters

- **skip** (optional)
  Enter the number of items to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of items to be returned.
  Default: `4`
- **include_count** (optional)
  Set this parameter to “true” to include the total count of variant groups.
  Default: `true`
- **include_variant_info** (optional)
  Set this parameter to “true” to include the variant information.
  Default: `true`
- **include_variant_count** (optional)
  Set this parameter to “true” to include the total count of variants within a variant group.
  Default: `true`
- **asc** (optional)
  Sort the response in ascending order. Options include created_at and name.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order. Options include created_at and name.
  Default: `name`
- **content_type** (optional)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`

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
    "variant_groups": [
        {
            "name": "region",
            "created_by": "blt**************59",
            "updated_by": "blt**************59",
            "uid": "cs**************43",
            "branches": [
                "main"
            ],
            "content_types": [
                {
                    "uid": "mobile",
                    "status": "linked"
                },
                {
                    "uid": "laptop",
                    "status": "linked"
                }
            ],
            "created_at": "2024-08-20T10:31:07.092Z",
            "updated_at": "2024-08-20T10:31:07.092Z"
        },
        {
            "name": "Variant-Group-test-ct",
            "created_by": "blt**************9e",
            "updated_by": "blt**************33",
            "uid": "cs8**************b6",
            "content_types": [
                {
                    "uid": "testing_variant_cases",
                    "status": "linked"
                },
                {
                    "uid": "test_reference",
                    "status": "linked"
                },
                {
                    "uid": "test",
                    "status": "linked"
                }
            ],
            "created_at": "2024-08-21T10:10:29.494Z",
            "updated_at": "2024-08-22T11:30:48.669Z",
            "description": "",
            "variant_count": 3,
            "variants": [
                {
                    "uid": "cs1**************67",
                    "created_by": "blt**************33",
                    "updated_by": "blt**************33",
                    "name": "test",
                    "created_at": "2024-08-22T11:30:48.774Z",
                    "updated_at": "2024-08-22T11:30:48.774Z"
                },
                {
                    "uid": "cs3**************8f",
                    "created_by": "blt**************33",
                    "updated_by": "blt**************33",
                    "name": "test 2",
                    "created_at": "2024-08-22T11:30:48.978Z",
                    "updated_at": "2024-08-22T11:30:48.978Z"
                },
                {
                    "uid": "cs3d901397291171c0",
                    "created_by": "blt**************33",
                    "updated_by": "blt**************33",
                    "name": "test 3",
                    "created_at": "2024-08-22T11:30:48.979Z",
                    "updated_at": "2024-08-22T11:30:48.979Z"
                }
            ]
        },
        {
            "content_types": [
                {
                    "uid": "vigor",
                    "status": "linked"
                },
                {
                    "uid": "tsyuio",
                    "status": "linked"
                }
            ],
            "name": "test segmentated",
            "personalize_metadata": {
                "project_uid": "660bc**************31ac",
                "experience_uid": "660bd**************431ba",
                "experience_short_uid": "0",
                "status": "linked"
            },
            "created_by": null,
            "updated_by": "blt**************1a",
            "uid": "cse**************e2",
            "created_at": "2024-08-22T11:41:36.588Z",
            "updated_at": "2024-08-22T13:07:10.907Z",
            "variant_count": 2,
            "variants": [
                {
                    "uid": "csf**************7d",
                    "created_by": null,
                    "updated_by": "blt**************1a",
                    "name": "Country",
                    "variant_group_uid": "cse**************e2",
                    "personalize_metadata": {
                        "project_uid": "660bc**************31ac",
                        "experience_uid": "660bd**************31ba",
                        "experience_short_uid": "0",
                        "status": "linked",
                        "variant_short_uid": "1"
                    },
                    "alias": "cs_personalize_0_1",
                    "created_at": "2024-08-22T11:41:36.602Z",
                    "updated_at": "2024-08-22T13:07:11.069Z"
                },
                {
                    "uid": "cs8**************5e",
                    "created_by": null,
                    "updated_by": "blt**************1a",
                    "name": "test",
                    "variant_group_uid": "cse**************e2",
                    "personalize_metadata": {
                        "project_uid": "660bc**************31ac",
                        "experience_uid": "660bd**************31ba",
                        "experience_short_uid": "0",
                        "status": "linked",
                        "variant_short_uid": "0"
                    },
                    "alias": "cs_personalize_0_0",
                    "created_at": "2024-08-22T11:41:36.603Z",
                    "updated_at": "2024-08-22T13:07:11.088Z"
                }
            ]
        }
    ]
}
```




## Link Content Types

### Link content types

**PUT** `/variant_groups/{variant_group_uid}/variants`

The Link content types request allows you to link content types to your variant group.

In the “Body” section, enter the content type UID(s) in the following format:

```
{
            "uid": "content_type_uid_1",
            "status": "linked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "linked"
        }
```

#### URL Parameters

- **variant_group_uid** (required)
  Enter the unique ID for your variant group.
  Default: `your_variant_group_uid`

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
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

#### Sample Request

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "linked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "linked"
        }
    ],
    "uid": "csd**************03",
    "branches": [
        "main"
    ]
}
```

#### Sample Response

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "linked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "linked"
        }
    ],
    "name": "Variant-Group-Name",
    "personalize_metadata": {
        "project_uid": "660bc**************31ac",
        "experience_uid": "660bd**************31ba",
        "experience_short_uid": "0",
        "status": "linked"
    },
    "created_by": "blt**************9e",
    "updated_by": "blt**************1a",
    "uid": "csd**************03",
    "created_at": "2024-05-22T05:56:15.393Z",
    "updated_at": "2024-09-06T09:04:19.758Z",
    "message": "Variant Group and Variants updated successfully",
    "variants": []
}
```




## Unlink Content Types

### Unlink content types

**PUT** `/variant_groups/{variant_group_uid}/variants`

The Unlink content types request allows you to unlink content types to your variant group.

In the “Body” section, enter the content type UID(s) in the following format:

```
{
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
```

#### URL Parameters

- **variant_group_uid** (required)
  Enter the unique ID for your variant group.
  Default: `your_variant_group_uid`

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
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

#### Sample Request

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
    ],
    "uid": "csd**************03",
    "branches": [
        "main"
    ]
}
```

#### Sample Response

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
    ],
    "name": "Variant-Group-Name",
    "personalize_metadata": {
        "project_uid": "660bc**************31ac",
        "experience_uid": "660bd**************31ba",
        "experience_short_uid": "0",
        "status": "linked"
    },
    "created_by": "blt**************9e",
    "updated_by": "blt**************1a",
    "uid": "csd**************03",
    "created_at": "2024-05-22T05:56:15.393Z",
    "updated_at": "2024-09-06T09:04:19.758Z",
    "message": "Variant Group and Variants updated successfully",
    "variants": []
}
```

