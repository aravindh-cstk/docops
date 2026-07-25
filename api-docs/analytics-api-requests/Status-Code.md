---
title: "Status Code"
description: /analytics/v2/http-statuses?from={YYYY-MM-DD}&to={YYYY-MM-DD}&duration={duration}&orgUid={organization_uid}&services={["cdn","cma"]}
url: /status-code
product: Contentstack
doc_type: api-request
created_at: 2024-08-15T16:13:33.987Z
updated_at: 2026-04-14T11:02:22.307Z
---

# Status Code

<p>The <span class="code">Status Code</span> request will show the count for the number of API requests made for each HTTP status code. For example, <span class="code">200</span>, <span class="code">201</span>, <span class="code">400</span>, <span class="code">404</span>, and so on. You can use the <span class="code">httpStatusCode</span> parameter to get the count for a specific status code instead of all status codes.</p><p>Here’s how your response body would look like when you pass the <span class="code">jobId</span> in the <a href="/docs/developers/apis/analytics-api#retrieve-data" target="_self">Retrieve Data</a> endpoint.</p><pre>{
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
}</pre><p>The response body provides detailed statistics on the number of API requests executed for each HTTP status code over a specified period. Here’s a breakdown of the key elements:</p><ul><li><span class="code">count</span>: The total number of API requests that resulted in the corresponding HTTP status code.</li><li><span class="code">type</span>: The service type (e.g., "cma") that made the requests.</li><li><span class="code">status</span>: The HTTP status code (e.g., "200" for success, "422" for client error).</li><li><span class="code">date</span>: The date on which the requests were executed.</li></ul><p>This information helps you monitor the frequency of specific HTTP status codes and track the performance and errors of your API requests.</p><p>&nbsp;</p>

**API Endpoint**: `/analytics/v2/http-statuses?from={YYYY-MM-DD}&to={YYYY-MM-DD}&duration={duration}&orgUid={organization_uid}&services={["cdn","cma"]}`

**Method**: `GET`

## Query Parameters

- **from** (required)
  <p>Specify the start date for the required data. Use the following date format: <span class="code">YYYY-MM-DD</span>.</p>
- **to** (required)
  <p>Enter the current date or any date after the <span class="code">from</span> date. The date format should be: <span class="code">YYYY-MM-DD</span>.</p>
- **duration** (required)
  <p>Enter a value like <span class="code">day</span>, <span class="code">week</span>, or <span class="code">month</span>. This parameter determines the granularity of the data you want to fetch.</p>
- **orgUid** (required)
  <p>Enter the UID of your Organization.</p>
- **services** (required)
  <p>Specify the array of services for which you want statistics, such as: <span class="code">["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]</span>.</p>
- **httpStatusCode** (optional)
  <p>Enter an HTTP status code to filter the response.</p>
- **apiKey** (optional)
  <p>Enter your stack API key to get data for that specific stack.</p>

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

