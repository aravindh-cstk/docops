---
title: "Device Usage"
description: GET /analytics/v2/devices?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}
url: developers/apis/analytics-api/requests/device-usage
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-14
---

# Device Usage


**Method:** `GET`  
**Endpoint:** `/analytics/v2/devices?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}`

The Device Usage request helps you get a list of devices that your organization users are using to access Contentstack services.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](/docs/developers/apis/analytics-api#retrieve-data) endpoint.

```
{
    "totalDocs": 26,
    "data": [
        {
            "count": 164,
            "type": "cma",
            "device": "sdk contentstack-management-javascript/1.13.0; platform node.js/v18.17.1; os Linux/5.4.176-91.338.amzn2.x86_64;",
            "date": "2024-03-05"
        },
        {
            "count": 62,
            "type": "cma",
            "device": "sdk contentstack-management-javascript/1.13.0; platform node.js/v18.17.1; os Windows/10.0.22000;",
            "date": "2024-02-05"
        },
        {
            "count": 18,
            "type": "cma",
            "device": "sdk contentstack-management-javascript/1.13.0; platform node.js/v18.17.1; os Linux/5.4.176-91.338.amzn2.x86_64;",
            "date": "2024-03-22"
        },
        {
            "count": 16,
            "type": "cma",
            "device": "sdk contentstack-management-javascript/1.13.0; platform node.js/v18.17.1; os Linux/5.4.176-91.338.amzn2.x86_64;",
            "date": "2024-03-04"
        },
        {
            "count": 10,
            "type": "cma",
            "device": "PostmanRuntime/7.37.0",
            "date": "2024-03-20"
        },
        ...
        {
            "date": "2024-03-31"
        }
    ],
    "meta": {
        "orderBy": -1,
        "orgUid": "blt**************87",
        "includeCount": true,
        "from": "2024-01-31",
        "duration": "day",
        "to": "2024-03-31",
        "services": "[\"cdn\",\"cma\"]"
    },
    "uid": "35****12-acf4-4ad5-93e0-48********0e"
}
```

The response body provides detailed insights into users accessing Contentstack endpoints. Here’s a breakdown of the key elements:

- count: Number of times the specific device was used.
- type: The type of access, such as "cma" for Content Management API.
- device: Description of the device or software used, including the SDK version, platform, and operating system details.
- date: The specific date when the usage was recorded.

This data helps you track and analyze device and environment usage, supporting performance and user experience optimization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| orgUid | your_organization_uid | Enter the UID of your Organization. |

| from | 2024-01-31 | Specify the start date for the required data. Use the following date format: YYYY-MM-DD. |

| to | 2024-03-31 | Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD. |

| services | ["cdn","cma"] | Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]. |

| duration | day | Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch. |

| includeCount | true | Set this parameter to true to include the total count of users in the response. |

| orderBy | -1 | Enter 1 to sort the response in ascending order by count or -1 to sort it in descending order by count. By default, the value is set to -1, which orders the res |

**Response (200):**

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": true
}
```
