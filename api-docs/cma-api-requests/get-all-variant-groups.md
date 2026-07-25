---
title: "Get all variant groups"
description: /variant_groups?skip=0&limit=30&include_count=true&include_variant_info=true&include_variant_count=true&desc=created_at&content_type={your_content_type_uid}
url: /get-all-variant-groups
product: Contentstack
doc_type: api-request
created_at: 2024-09-24T12:04:48.179Z
updated_at: 2024-09-24T13:04:29.775Z
---

# Get all variant groups

<p>The <span class="code">Get all variant groups</span> request returns a list of all variant groups linked to your stack. To retrieve the variant UIDs specific to a content type, include the <span class="code">content_type</span> query parameter with the content type UID in your request.</p>

**API Endpoint**: `/variant_groups?skip=0&limit=30&include_count=true&include_variant_info=true&include_variant_count=true&desc=created_at&content_type={your_content_type_uid}`

**Method**: `GET`

## Query Parameters

- **skip** (optional)
  <p>Enter the number of items to be skipped from the response body.</p>
- **limit** (optional)
  <p>Enter the maximum number of items to be returned.</p>
- **include_count** (optional)
  <p>Set this parameter to “true” to include the total count of variant groups.</p>
- **include_variant_info** (optional)
  <p>Set this parameter to “true” to include the variant information. </p>
- **include_variant_count** (optional)
  <p>Set this parameter to “true” to include the total count of variants within a variant group.</p>
- **asc** (optional)
  <p>Sort the response in ascending order. Options include <span class="code">created_at</span> and <span class="code">name</span>.</p>
- **desc** (optional)
  <p>Sort the response in descending order. Options include <span class="code">created_at</span> and <span class="code">name</span>.</p>
- **content_type** (optional)
  <p>Enter the unique ID of your content type.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>

## Response

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

