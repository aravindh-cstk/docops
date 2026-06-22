---
title: "Status Code"
description: GET /analytics/v2/http-statuses?from={YYYY-MM-DD}&to={YYYY-MM-DD}&duration={duration}&orgUid={organization_uid}&services={['cdn','cma']}
url: developers/apis/analytics-api/requests/status-code
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-14
---

# Status Code


**Method:** `GET`  
**Endpoint:** `/analytics/v2/http-statuses?from={YYYY-MM-DD}&to={YYYY-MM-DD}&duration={duration}&orgUid={organization_uid}&services={["cdn","cma"]}`

The Status Code request will show the count for the number of API requests made for each HTTP status code. For example, 200, 201, 400, 404, and so on. You can use the httpStatusCode parameter to get the count for a specific status code instead of all status codes.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](/docs/developers/apis/analytics-api#retrieve-data) endpoint.

```
{
    "data": [
        {
            "count": 63,
            "type": "cma",
            "status": "200",
            "date": "2024-02-05"
        },
        {
            "count": 1,
            "type": "cma",
            "status": "422",
            "date": "2024-03-05"
        },
        {
            "count": 14,
            "type": "cma",
            "status": "200",
            "date": "2024-03-21"
        },
        {
            "count": 10,
            "type": "cma",
            "status": "200",
            "date": "2024-02-15"
        }
    ],
    "meta": {
        "from": "2024-01-31",
        "to": "2024-03-31",
        "duration": "day",
        "orgUid": "blt**************87",
        "services": "[\"cdn\",\"cma\"]"
    },
    "uid": "0f****46-5ee9-4f38-9146-1f********8"
}
```

The response body provides detailed statistics on the number of API requests executed for each HTTP status code over a specified period. Here’s a breakdown of the key elements:

- count: The total number of API requests that resulted in the corresponding HTTP status code.
- type: The service type (e.g., "cma") that made the requests.
- status: The HTTP status code (e.g., "200" for success, "422" for client error).
- date: The date on which the requests were executed.

This information helps you monitor the frequency of specific HTTP status codes and track the performance and errors of your API requests.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| from | 2024-01-31 | Specify the start date for the required data. Use the following date format: YYYY-MM-DD. |

| to | 2024-03-31 | Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD. |

| duration | day | Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch. |

| orgUid | your_organization_uid | Enter the UID of your Organization. |

| services | ["cdn","cma"] | Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]. |

| httpStatusCode | 200 | Enter an HTTP status code to filter the response. |

| apiKey | your_stack_api_key | Enter your stack API key to get data for that specific stack. |

**Response (200):**

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": false
}
```
