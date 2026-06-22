---
title: "Usage Analytics"
description: GET /analytics/v2/usage?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}
url: developers/apis/analytics-api/requests/usage-analytics
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-14
---

# Usage Analytics


**Method:** `GET`  
**Endpoint:** `/analytics/v2/usage?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}`

The Usage Analytics request gives a quick usage overview of your bandwidth and API utilization over a particular period of time.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](/docs/developers/apis/analytics-api#retrieve-data) endpoint.

```
{
    "data": [
        {
            "total_api_bandwidth": 0,
            "total_api_count": 0,
            "total_cdn_bandwidth": 0,
            "total_cdn_count": 0,
            "date": "2024-03-02"
        },
        {
            "total_api_bandwidth": 0,
            "total_api_count": 0,
            "total_cdn_bandwidth": 10110,
            "total_cdn_count": 4,
            "date": "2024-02-12"
        },
        {
            "total_api_bandwidth": 0,
            "total_api_count": 0,
            "total_cdn_bandwidth": 0,
            "total_cdn_count": 0,
            "date": "2024-02-22"
        },
        {
            "total_api_bandwidth": 0,
            "total_api_count": 0,
            "total_cdn_bandwidth": 0,
            "total_cdn_count": 0,
            "date": "2024-03-25"
        },
        {
            "total_api_bandwidth": 94685,
            "total_api_count": 26,
            "total_cdn_bandwidth": 0,
            "total_cdn_count": 0,
            "date": "2024-03-04"
        },
        {
            "total_api_bandwidth": 0,
            "total_api_count": 0,
            "total_cdn_bandwidth": 0,
            "total_cdn_count": 0,
            "date": "2024-02-28"
        }
    ],
    "meta": {
        "orgUid": "blt**************87",
        "includeCount": "true",
        "from": "2024-01-31",
        "duration": "day",
        "to": "2024-03-31",
        "services": "[\"cdn\",\"cma\"]"
    },
    "uid": "0f****46-5ee9-4f38-9146-1f********8"
}
```

The response body provides detailed insights into your organization's API and CDN usage over a specified period. Here’s a breakdown of the key elements:

- total_api_bandwidth: The total bandwidth consumed by API requests on the specified date.
- total_api_count: The number of API requests executed on the specified date.
- total_cdn_bandwidth: The total bandwidth consumed by CDN requests on the specified date.
- total_cdn_count: The number of CDN requests made on the specified date.
- date: The specific date for the reported statistics.

This data helps monitor and analyze the usage patterns of API and CDN resources, aiding in efficient resource management and planning.

**Note**
  

- The apiKey cannot be used with the services ["automations", "launch"] simultaneously.
- The apiKey and environmentUid parameters are only applicable to the ["launch"] service.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| orgUid | your_organization_uid | Enter the UID of your Organization. |

| from | 2024-01-31 | Specify the start date for the required data. Use the following date format: YYYY-MM-DD. |

| to | 2024-03-31 | Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD. |

| services | ["cdn","cma"] | Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]. |

| includeCount | true | Set this parameter to true to include the total count of users in the response. |

| duration | day | Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch. |

| apiKey | your_stack_api_key | Enter the API key of the stack. |

| projectUid | your_project_uid | Enter the Launch project UID to retrieve data from that specific project. |

| environmentUid | your_environment_uid | Enter the environment UID of the Launch project. |

**Response (200):**

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": false
}
```
