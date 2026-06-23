---
title: "Analytics | Usage Analytics"
description: Retrieve usage analytics for API traffic, requests, bandwidth, and delivery activity across Contentstack services.
url: https://www.contentstack.com/docs/developers/apis/analytics-api/usage-analytics
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Analytics | Usage Analytics



## API Endpoints

### Usage Analytics

**GET** `/analytics/v2/usage?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}`

The Usage Analytics request gives a quick usage overview of your bandwidth and API utilization over a particular period of time.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](../../../api-detail/analytics-api.md#retrieve-data) endpoint.

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

#### Query Parameters

- **orgUid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **from** (required)
  Specify the start date for the required data. Use the following date format: YYYY-MM-DD.
  Default: `2024-01-31`
- **to** (required)
  Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD.
  Default: `2024-03-31`
- **services** (optional)
  Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"].
  Default: `["cdn","cma"]`
- **includeCount** (optional)
  Set this parameter to true to include the total count of users in the response.
  Default: `true`
- **duration** (optional)
  Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch.
  Default: `day`
- **apiKey** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **projectUid** (optional)
  Enter the Launch project UID to retrieve data from that specific project.
  Default: `your_project_uid`
- **environmentUid** (optional)
  Enter the environment UID of the Launch project.
  Default: `your_environment_uid`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": false
}
```

