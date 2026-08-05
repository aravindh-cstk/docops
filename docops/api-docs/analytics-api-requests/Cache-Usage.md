---
title: "Cache Usage"
description: /analytics/v2/hit-miss-ratio?orgUid={organization_uid}&services={["cdn","cma"]}&from={YYYY-MM-DD}&duration={duration}&to={YYYY-MM-DD}
url: /cache-usage
product: Contentstack
doc_type: api-request
created_at: 2024-08-15T16:21:21.845Z
updated_at: 2026-04-14T11:02:43.619Z
---

# Cache Usage

<p>The <span class="code">Cache Usage</span> request will show the number of HIT/MISS instances for your cache. Number of HIT indicates that responses were received from the cache and MISS indicates the number of responses retrieved from the database.</p><p>Here’s how your response body would look like when you pass the <span class="code">jobId</span> in the <a href="/docs/developers/apis/analytics-api#retrieve-data" target="_self">Retrieve Data</a> endpoint.</p><pre>{
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
}</pre><p>The response body provides insights into how effectively the cache is being utilized for the specified services. Here’s a breakdown of the key elements:</p><ul><li><span class="code">count</span>: The number of instances for the specified cache status (HIT or MISS).</li><li><span class="code">type</span>: The service type (e.g., "cdn") being tracked for cache usage.</li><li><span class="code">status</span>: Indicates whether the cache request was a "HIT" (response received from cache) or "MISS" (response retrieved from the database).</li><li><span class="code">date</span>: The date when the cache status was recorded.</li></ul><p>This information helps analyze cache efficiency by detailing the number of HITs and MISSes, aiding in optimizing the cache strategy and understanding cache utilization.</p>

**API Endpoint**: `/analytics/v2/hit-miss-ratio?orgUid={organization_uid}&services={["cdn","cma"]}&from={YYYY-MM-DD}&duration={duration}&to={YYYY-MM-DD}`

**Method**: `GET`

## Query Parameters

- **orgUid** (required)
  <p>Enter the UID of your Organization.</p>
- **from** (required)
  <p>Specify the start date for the required data. Use the following date format: <span class="code">YYYY-MM-DD</span>.</p>
- **duration** (required)
  <p>Enter a value like <span class="code">day</span>, <span class="code">week</span>, or <span class="code">month</span>. This parameter determines the granularity of the data you want to fetch.</p>
- **to** (required)
  <p>Enter the current date or any date after the <span class="code">from</span> date. The date format should be: <span class="code">YYYY-MM-DD</span>.</p>
- **services** (required)
  <p>Specify the array of services for which you want statistics, such as: <span class="code">["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]</span>.</p>
- **apiKey** (optional)
  <p>Enter your stack API key to get data for that specific stack.</p>
- **cache** (optional)
  <p>Enter the value as <span class="code">HIT</span> for this param if you want to get the number of hit API calls and <span class="code">MISS</span> to get the number of missed API calls.</p>

## Headers

- **authtoken** (required)
  <p>Enter your <span class="code">authtoken</span>.</p>

## Response

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": false
}
```

