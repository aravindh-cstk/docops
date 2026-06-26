---
title: "Bulk Add to Release"
description: POST /bulk/release/items
url: developer-apis/content-management-api-requests/bulk-add-to-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-20
---

# Bulk Add to Release

**POST** `/bulk/release/items`

The Bulk Add to Release request allows you to add multiple entries and assets to a release, making content preparation for deployment more efficient and ensuring smooth, coordinated publishing.

In the 'Body' section, specify the release UID, action parameter which determines whether the release should be set for publish or unpublish, and the locale for the entries. Set the reference parameter to true to include referenced items.

The items parameter should include an array of objects, each with content type UIDs, entry UIDs, locales (optional), version (optional), and the entry title.

**Note**: Locales specified in the items parameter will override those in the request body. If no locales are provided for each entry, the locale mentioned in the request body will be used. You can also set the action parameter for each entry to publish or unpublish.

For each asset, provide the title, asset UID, set the content_type_uid to sys_assets, and optionally include the version you want to publish. Your request body will look as follows:

```
{
            "title": "Asset title",
            "uid": "blt**************46",
            "content_type_uid": "sys_assets",
            "version": 1
        }
```

Once the API request is executed, a job ID is generated in the response. You can use this job ID to track the status of your add to release request in [Get Stack Bulk Task Queue](../api-detail/content-management-api.md#get-stack-bulk-task-queue).

**Note**: Pass bulk_version as 2.0 in the Headers section.

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (optional)
  Enter application/json to pass a request body.
  Default: `application/json`
- **bulk_version** (required)
  Pass the bulk_version header as 2.0 to allow bulk operation.
  Default: `2.0`

## Sample Request

```json
{
    "release": "blt**************9d", 
    "action": "publish",
    "locale": [
        "en-us"
    ],
    "reference": true,
    "items": [
        {
            "content_type_uid": "ct_1",
            "uid": "blt**************46",
            "version": 2,
            "locale": "en-us",
            "title": "validation test"
        }
    ]
}
```

## Sample Response

```json
{
    "job_id": "cs-13****15-5**a-42**-b**0-8f********a6",
    "notice": "Your add to release request is in progress."
}
```

