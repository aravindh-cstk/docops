---
title: "Analytics | Cache Usage"
description: Retrieve cache usage analytics to measure cache hits, misses, and delivery performance across requests.
url: https://www.contentstack.com/docs/developers/apis/analytics-api/cache-usage
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Analytics | Cache Usage



## API Endpoints

### Cache Usage

**GET** `/analytics/v2/hit-miss-ratio?orgUid={organization_uid}&services={["cdn","cma"]}&from={YYYY-MM-DD}&duration={duration}&to={YYYY-MM-DD}`

The Cache Usage request will show the number of HIT/MISS instances for your cache. Number of HIT indicates that responses were received from the cache and MISS indicates the number of responses retrieved from the database.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](../../../api-detail/analytics-api.md#retrieve-data) endpoint.

```
{
    "data": [
        {
            "count": 7,
            "type": "cdn",
            "status": "MISS",
            "date": "2024-02-09"
        },
        {
            "count": 1,
            "type": "cdn",
            "status": "HIT",
            "date": "2024-02-08"
        },
        {
            "count": 2,
            "type": "cdn",
            "status": "MISS",
            "date": "2024-02-15"
        },
        {
            "count": 2,
            "type": "cdn",
            "status": "MISS",
            "date": "2024-02-08"
        },
        {
            "count": 4,
            "type": "cdn",
            "status": "MISS",
            "date": "2024-02-12"
        }
    ],
    "meta": {
        "orgUid": "blt**************87",
        "services": "[\"cdn\",\"cma\"]",
        "from": "2024-01-31",
        "duration": "day",
        "to": "2024-03-31"
    },
    "uid": "0f****46-5ee9-4f38-9146-1f********8"
}
```

The response body provides insights into how effectively the cache is being utilized for the specified services. Here’s a breakdown of the key elements:

- count: The number of instances for the specified cache status (HIT or MISS).
- type: The service type (e.g., "cdn") being tracked for cache usage.
- status: Indicates whether the cache request was a "HIT" (response received from cache) or "MISS" (response retrieved from the database).
- date: The date when the cache status was recorded.

This information helps analyze cache efficiency by detailing the number of HITs and MISSes, aiding in optimizing the cache strategy and understanding cache utilization.

#### Query Parameters

- **orgUid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **from** (required)
  Specify the start date for the required data. Use the following date format: YYYY-MM-DD.
  Default: `2024-01-31`
- **duration** (required)
  Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch.
  Default: `day`
- **to** (required)
  Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD.
  Default: `2024-03-31`
- **services** (required)
  Specify the array of services for which you want statistics, such as: ["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"].
  Default: `["cdn","cma"]`
- **apiKey** (optional)
  Enter your stack API key to get data for that specific stack.
  Default: `your_stack_api_key`
- **cache** (optional)
  Enter the value as HIT for this param if you want to get the number of hit API calls and MISS to get the number of missed API calls.
  Default: `HIT`

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

