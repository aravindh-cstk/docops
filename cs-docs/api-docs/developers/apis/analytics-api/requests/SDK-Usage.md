---
title: "SDK Usage"
description: GET /analytics/v2/sdk?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}&includeCount={boolean_value}&services={['cdn','cma']}&duration={duration}
url: developers/apis/analytics-api/requests/sdk-usage
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-25
---

# SDK Usage


**Method:** `GET`  
**Endpoint:** `/analytics/v2/sdk?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}&includeCount={boolean_value}&services={["cdn","cma"]}&duration={duration}`

The SDK Usage request gets you the number of requests that were made using the SDKs. It helps you get an overview of the SDK usage by your customers.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](/docs/developers/apis/analytics-api#retrieve-data) endpoint.

```
{
    "total": 16,
    "totalDocs": 4,
    "data": [
        {
            "count": 7,
            "type": "cdn",
            "sdk": "cda-collection/v9.31.0",
            "date": "2024-02-09"
        },
        {
            "count": 4,
            "type": "cdn",
            "sdk": "cda-collection/v9.31.0",
            "date": "2024-02-12"
        },
        {
            "count": 3,
            "type": "cdn",
            "sdk": "cda-collection/v9.31.0",
            "date": "2024-02-08"
        },
        {
            "count": 2,
            "type": "cdn",
            "sdk": "cda-collection/v9.31.0",
            "date": "2024-02-15"
        },
        {
            "date": "2024-02-28"
        }
    ],
    "meta": {
        "orderBy": -1,
        "from": "2024-01-31",
        "to": "2024-02-28",
        "orgUid": "blt**************87",
        "includeCount": true,
        "services": "[\"cdn\",\"cma\"]",
        "duration": "day",
        "skip": 0,
        "limit": 900
    },
    "uid": "0f****46-5ee9-4f38-9146-1f********8"
}
```

The response body provides detailed insights into how SDKs are being used across different services. Here’s a breakdown of the key elements:

- count: The number of requests executed using a specific SDK on a given date.
- type: The service type, such as "cdn".
- sdk: The SDK version used for the requests.
- date: The date when the SDK requests were executed.

This response helps organizations track SDK adoption and effectiveness by revealing usage patterns and frequency.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| from | 2024-01-31 | Specify the start date for the required data. Use the following date format: YYYY-MM-DD. |

| to | 2024-03-31 | Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD. |

| orgUid | your_organization_uid | Enter the UID of your Organization. |

| includeCount | true | Set this parameter to true to include the total count of users in the response. |

| services | ["cdn","cma"] | Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]. |

| duration | day | Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch. |

| orderBy | -1 | Enter 1 to sort the response in ascending order by count or -1 to sort it in descending order by count. By default, the value is set to -1, which orders the res |

| limit | 20 | Specify the number of items you wish to fetch per request. The maximum limit is 900. |

| skip | 10 | Enter the number of items to skip. For example, a skip value of 10 will skip the first 10 items. |

| apiKey | your_stack_api_key | Enter your stack API key to get data for that specific stack. |

**Response (200):**

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": true
}
```
