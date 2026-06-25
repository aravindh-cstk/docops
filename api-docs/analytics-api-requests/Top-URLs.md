---
title: "Top URLs"
description: GET /analytics/v2/url?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}&includeTotalCount={boolean_value}
url: developer-apis/analytics-api/requests/top-urls
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-14
---

# Top URLs

**GET** `/analytics/v2/url?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}&includeTotalCount={boolean_value}`

The Top URLs request gets you the number of requests made from your URLs for the given services.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](../../../../api-detail/analytics-api.md#retrieve-data) endpoint.

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

## Query Parameters

- **orgUid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **from** (required)
  Specify the start date for the required data. Use the following date format: YYYY-MM-DD.
  Default: `2024-01-31`
- **to** (required)
  Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD.
  Default: `2024-03-31`
- **includeTotalCount** (required)
  Set this parameter to true to include the total count of users in the response.
  Default: `true`
- **duration** (optional)
  Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch.
  Default: `day`
- **services** (optional)
  Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"].
  Default: `["cdn","cma"]`
- **apiKey** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **orderBy** (optional)
  Enter 1 to sort the response in ascending order by count or -1 to sort it in descending order by count. By default, the value is set to -1, which orders the response in descending order.
  Default: `1`

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

