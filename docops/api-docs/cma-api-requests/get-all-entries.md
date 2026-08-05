---
title: "Get all entries"
description: /content_types/{content_type_uid}/entries?apply_draft={boolean_value}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}
url: /get-all-entries
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.121Z
updated_at: 2026-03-16T19:50:15.260Z
---

# Get all entries

<p>The <span data-type='inlineCode'>Get all entries</span> API retrieves all entries for a specified content type in a stack. The response returns entry data in JSON format. You can also specify parameters such as locale, environment, workflow details, and draft merging to customize the results.</p><p>If you are using OAuth authentication, include the <span data-type='inlineCode'>cm.entries.management:read</span> scope to configure the required permissions for this request.</p><p>Use the <span data-type='inlineCode'>apply_draft</span> query parameter to merge draft entries with their corresponding base entries. Draft entries are treated as a special type of variant and are merged using the existing entry variant infrastructure while preserving draft-specific metadata.</p><p>To include metadata associated with entries, pass the <span data-type='inlineCode'>include_metadata</span> query parameter and set its value to <span data-type='inlineCode'>true</span>. The response includes entry metadata under the <span data-type='inlineCode'>_metadata</span> key, associated with the relevant extension UID.</p><p>Example structure:</p><pre class="prettyprint">"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
</pre><p>You can also extend this API request by adding queries to filter or refine results. Use the <span data-type='inlineCode'>query</span> parameter in the URL and provide the query in JSON format.</p><p><strong>Additional Resource</strong>: For more information about supported queries, refer to the <a href="/docs/developers/apis/content-delivery-api#queries" target="_self">Queries</a> section of the Content Delivery API documentation.</p><p>For example, to retrieve entries in a specific workflow stage, pass a query using <span data-type='inlineCode'>_workflow.uid</span>, where <span data-type='inlineCode'>uid</span> is the workflow stage UID.</p><p><strong>Tip</strong>: This request returns the first <strong>100 entries</strong> for the specified content type. To retrieve additional entries, use <a href="/docs/developers/apis/content-delivery-api#pagination" target="_self">pagination</a>.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries?apply_draft={boolean_value}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>The unique ID of the content type whose entries you want to retrieve. The UID is generated from the title of the content type and is unique within a stack.</p>

## Query Parameters

- **apply_draft** (optional)
  <p>Set to <span data-type='inlineCode'>true</span> to retrieve and merge the draft entry (if it exists) with the base entry.</p>
- **locale** (optional)
  <p>Specify the locale from which to retrieve entries. If not provided, the master locale is used.</p>
- **include_workflow** (optional)
  <p>Set to <span data-type='inlineCode'>true</span> to include workflow details for each entry in the response.</p>
- **include_publish_details** (optional)
  <p>Set to <span data-type='inlineCode'>true</span> to include publish details for each entry.</p>
- **include_branch** (optional)
  <p>Set to <span data-type='inlineCode'>true</span> to include the <span data-type='inlineCode'>_branch</span> top-level key in the response. This key contains the unique ID of the branch where the entry resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication.</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

