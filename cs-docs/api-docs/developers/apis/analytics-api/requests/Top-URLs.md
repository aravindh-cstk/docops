---
title: "Top URLs"
description: GET /analytics/v2/url?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}&includeTotalCount={boolean_value}
url: developers/apis/analytics-api/requests/top-urls
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-14
---

# Top URLs


**Method:** `GET`  
**Endpoint:** `/analytics/v2/url?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}&includeTotalCount={boolean_value}`

The Top URLs request gets you the number of requests made from your URLs for the given services.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](/docs/developers/apis/analytics-api#retrieve-data) endpoint.

```
{
    "data": [
        {
            "url": "https://cdn.contentstack.io/v3/content_types?include_count=false",
            "type": "cdn",
            "count": "3"
        },
        {
            "url": "https://cdn.contentstack.io/v3/content_types/header/entries/blt63c1bee28ce24ab1?environment=development",
            "type": "cdn",
            "count": "1"
        },
        {
            "url": "https://cdn.contentstack.io/v3/global_fields",
            "type": "cdn",
            "count": "1"
        },
        {
            "url": "https://cdn.contentstack.io/v3/content_types/test_111222/entries?environment=development",
            "type": "cdn",
            "count": "1"
        }
    ],
    "urlDataSource": "athena",
    "meta": {
        "orgUid": "blt**************87",
        "from": "2024-01-31",
        "duration": "day",
        "to": "2024-03-31",
        "services": "[\"cdn\"]"
    },
    "uid": "0f****46-5ee9-4f38-9146-1f********8"
}
```

The response body provides a detailed summary of the number of requests made to various URLs over a specific period. Here’s a breakdown of the key elements:

- url: The specific URL that was accessed.
- type: The service type of the URL, such as "cdn".
- count: The number of requests made to this URL.

This data helps organizations monitor traffic, identify frequently accessed URLs, and optimize performance.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| orgUid | your_organization_uid | Enter the UID of your Organization. |

| from | 2024-01-31 | Specify the start date for the required data. Use the following date format: YYYY-MM-DD. |

| to | 2024-03-31 | Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD. |

| includeTotalCount | true | Set this parameter to true to include the total count of users in the response. |

| duration | day | Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch. |

| services | ["cdn","cma"] | Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]. |

| apiKey | your_stack_api_key | Enter the API key of the stack. |

| orderBy | 1 | Enter 1 to sort the response in ascending order by count or -1 to sort it in descending order by count. By default, the value is set to -1, which orders the res |

**Response (200):**

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": true
}
```
