---
title: "Top URLs"
description: /analytics/v2/url?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}&includeTotalCount={boolean_value}
url: /top-urls
product: Contentstack
doc_type: api-request
created_at: 2024-08-15T10:37:56.082Z
updated_at: 2026-04-14T10:44:04.084Z
---

# Top URLs

<p>The <span class="code">Top URLs</span> request gets you the number of requests made from your URLs for the given services.</p><p>Here’s how your response body would look like when you pass the <span class="code">jobId</span> in the <a href="/docs/developers/apis/analytics-api#retrieve-data" target="_self">Retrieve Data</a> endpoint.</p><pre>{
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
}</pre><p>The response body provides a detailed summary of the number of requests made to various URLs over a specific period. Here’s a breakdown of the key elements:</p><ul><li><span class="code">url</span>: The specific URL that was accessed.</li><li><span class="code">type</span>: The service type of the URL, such as "cdn".</li><li><span class="code">count</span>: The number of requests made to this URL.</li></ul><p>This data helps organizations monitor traffic, identify frequently accessed URLs, and optimize performance.</p>

**API Endpoint**: `/analytics/v2/url?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}&includeTotalCount={boolean_value}`

**Method**: `GET`

## Query Parameters

- **orgUid** (required)
  <p>Enter the UID of your Organization.</p>
- **from** (required)
  <p>Specify the start date for the required data. Use the following date format: <span class="code">YYYY-MM-DD</span>.</p>
- **to** (required)
  <p>Enter the current date or any date after the <span class="code">from</span> date. The date format should be: <span class="code">YYYY-MM-DD</span>.</p>
- **includeTotalCount** (required)
  <p>Set this parameter to <span class="code">true</span> to include the total count of users in the response.</p>
- **duration** (optional)
  <p>Enter a value like <span class="code">day</span>, <span class="code">week</span>, or <span class="code">month</span>. This parameter determines the granularity of the data you want to fetch.</p>
- **services** (optional)
  <p>Specify the array of services for which you want statistics, such as: <span class="code">["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]</span>.</p>
- **apiKey** (optional)
  <p>Enter the API key of the stack.</p>
- **orderBy** (optional)
  <p>Enter <span class="code">1</span> to sort the response in ascending order by <span class="code">count</span> or <span class="code">-1</span> to sort it in descending order by <span class="code">count</span>. By default, the value is set to <span class="code">-1</span>, which orders the response in descending order.</p>

## Headers

- **authtoken** (required)
  <p>Enter your <span class="code">authtoken</span>.</p>

## Response

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": true
}
```

