---
title: "SDK Usage"
description: GET /analytics/v2/sdk?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}&includeCount={boolean_value}&services={['cdn','cma']}&duration={duration}
url: developer-apis/analytics-api/requests/sdk-usage
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-25
---

# SDK Usage

**GET** `/analytics/v2/sdk?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}&includeCount={boolean_value}&services={["cdn","cma"]}&duration={duration}`

The SDK Usage request gets you the number of requests that were made using the SDKs. It helps you get an overview of the SDK usage by your customers.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](../../../../api-detail/analytics-api.md#retrieve-data) endpoint.

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

## Query Parameters

- **from** (required)
  Specify the start date for the required data. Use the following date format: YYYY-MM-DD.
  Default: `2024-01-31`
- **to** (required)
  Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD.
  Default: `2024-03-31`
- **orgUid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **includeCount** (required)
  Set this parameter to true to include the total count of users in the response.
  Default: `true`
- **services** (required)
  Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"].
  Default: `["cdn","cma"]`
- **duration** (required)
  Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch.
  Default: `day`
- **orderBy** (optional)
  Enter 1 to sort the response in ascending order by count or -1 to sort it in descending order by count. By default, the value is set to -1, which orders the response in descending order.
  Default: `-1`
- **limit** (optional)
  Specify the number of items you wish to fetch per request. The maximum limit is 900.
  Default: `20`
- **skip** (optional)
  Enter the number of items to skip. For example, a skip value of 10 will skip the first 10 items.
  Default: `10`
- **apiKey** (optional)
  Enter your stack API key to get data for that specific stack.
  Default: `your_stack_api_key`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

## Sample Response

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": true
}
```

