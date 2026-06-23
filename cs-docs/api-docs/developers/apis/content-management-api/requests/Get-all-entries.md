---
title: "Get all entries"
description: GET /content_types/{content_type_uid}/entries?apply_draft={boolean_value}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}
url: developers/apis/content-management-api/requests/get-all-entries
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-16
---

# Get all entries

**GET** `/content_types/{content_type_uid}/entries?apply_draft={boolean_value}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}`

The Get all entries API retrieves all entries for a specified content type in a stack. The response returns entry data in JSON format. You can also specify parameters such as locale, environment, workflow details, and draft merging to customize the results.

If you are using OAuth authentication, include the cm.entries.management:read scope to configure the required permissions for this request.

Use the apply_draft query parameter to merge draft entries with their corresponding base entries. Draft entries are treated as a special type of variant and are merged using the existing entry variant infrastructure while preserving draft-specific metadata.

To include metadata associated with entries, pass the include_metadata query parameter and set its value to true. The response includes entry metadata under the _metadata key, associated with the relevant extension UID.

Example structure:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

You can also extend this API request by adding queries to filter or refine results. Use the query parameter in the URL and provide the query in JSON format.

**Additional Resource**: For more information about supported queries, refer to the [Queries](/docs/developers/apis/content-delivery-api#queries) section of the Content Delivery API documentation.

For example, to retrieve entries in a specific workflow stage, pass a query using _workflow.uid, where uid is the workflow stage UID.

**Tip**: This request returns the first **100 entries** for the specified content type. To retrieve additional entries, use [pagination](/docs/developers/apis/content-delivery-api#pagination).

## URL Parameters

- **content_type_uid** (required)
  The unique ID of the content type whose entries you want to retrieve. The UID is generated from the title of the content type and is unique within a stack.
  Default: `product`

## Query Parameters

- **apply_draft** (optional)
  Set to true to retrieve and merge the draft entry (if it exists) with the base entry.
  Default: `true`
- **locale** (optional)
  Specify the locale from which to retrieve entries. If not provided, the master locale is used.
  Default: `en-us`
- **include_workflow** (optional)
  Set to true to include workflow details for each entry in the response.
  Default: `false`
- **include_publish_details** (optional)
  Set to true to include publish details for each entry.
  Default: `true`
- **include_branch** (optional)
  Set to true to include the _branch top-level key in the response. This key contains the unique ID of the branch where the entry resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication.](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
    "entries": [
        {
            "title": "Navigate the Heart of London via the Iconic London Tube",
            "url": "/navigate-the-heart-of-london-via-the-iconic-london-tube",
            "summary": "Immerse yourself in the vibrant energy of London as you navigate the world-famous London Tube. With its extensive network of underground lines, the Tube is not just a means of transportation but an integral part of the city's identity. Join us as we delve into the history, efficiency, and cultural significance of the London Tube, guiding you through an exciting exploration of the heart of London.",
            "content": {
                "type": "doc",
                "attrs": {},
                "uid": "d6e2********************ad5afb25",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "49a5********************6b8b4ce9",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 1
            },
            "tags": [],
            "locale": "en-us",
            "uid": "blt8c734851da83deb2",
            "created_by": "blt****************ada0",
            "updated_by": "blt****************ada0",
            "created_at": "2026-03-16T19:05:35.848Z",
            "updated_at": "2026-03-16T19:05:35.848Z",
            "ACL": {},
            "_version": 1,
            "_in_progress": false,
            "publish_details": [
                {
                    "environment": "blt****************2fd7",
                    "locale": "en-us",
                    "time": "2026-03-16T19:39:06.603Z",
                    "user": "blt****************ada0",
                    "version": 1
                },
                {
                    "environment": "blt****************2fd7",
                    "locale": "fr",
                    "time": "2026-03-16T19:39:06.603Z",
                    "user": "blt****************ada0",
                    "version": 1
                }
            ]
        },
        {
            "title": "Unleash the Speed: Japan's Bullet Train (Shinkansen)",
            "url": "/unleash-the-speed-japan-s-bullet-train-shinkansen-",
            "summary": "Get ready to experience the marvel of Japanese engineering as you board the legendary Bullet Train, also known as the Shinkansen. Zooming across the picturesque landscapes of Japan, the Shinkansen offers a thrilling, efficient, and comfortable mode of transportation. Join us as we embark on a high-speed adventure through the Land of the Rising Sun, exploring the wonders and convenience of Japan's iconic Bullet Train.",
            "content": {
                "type": "doc",
                "attrs": {},
                "uid": "620b********************c7a8f9a",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "0e70********************db02b32",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 1
            },
            "tags": [],
            "locale": "en-us",
            "uid": "blt0234e367de96772b",
            "created_by": "blt****************ada0",
            "updated_by": "blt****************ada0",
            "created_at": "2026-03-16T19:02:22.337Z",
            "updated_at": "2026-03-16T19:02:22.337Z",
            "ACL": {},
            "_version": 1,
            "_in_progress": false,
            "publish_details": [
                {
                    "environment": "blt****************2fd7",
                    "locale": "en-us",
                    "time": "2026-03-16T19:39:06.652Z",
                    "user": "blt****************ada0",
                    "version": 1
                },
                {
                    "environment": "blt****************2fd7",
                    "locale": "fr",
                    "time": "2026-03-16T19:39:06.652Z",
                    "user": "blt****************ada0",
                    "version": 1
                }
            ]
        }
    ]
}
```

