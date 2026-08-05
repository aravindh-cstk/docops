---
title: "Usage Analytics"
description: /analytics/v2/usage?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}
url: /usage-analytics
product: Contentstack
doc_type: api-request
created_at: 2024-08-15T10:26:52.583Z
updated_at: 2026-04-14T10:44:37.237Z
---

# Usage Analytics

<p>The <span class="code">Usage Analytics</span> request gives a quick usage overview of your bandwidth and API utilization over a particular period of time.</p><p>Here’s how your response body would look like when you pass the <span class="code">jobId</span> in the <a href="/docs/developers/apis/analytics-api#retrieve-data" target="_self">Retrieve Data</a> endpoint.</p><pre>{<br />    "data": [<br />        {<br />            "total_api_bandwidth": 0,<br />            "total_api_count": 0,<br />            "total_cdn_bandwidth": 0,<br />            "total_cdn_count": 0,<br />            "date": "2024-03-02"<br />        },<br />        {<br />            "total_api_bandwidth": 0,<br />            "total_api_count": 0,<br />            "total_cdn_bandwidth": 10110,<br />            "total_cdn_count": 4,<br />            "date": "2024-02-12"<br />        },<br />        {<br />            "total_api_bandwidth": 0,<br />            "total_api_count": 0,<br />            "total_cdn_bandwidth": 0,<br />            "total_cdn_count": 0,<br />            "date": "2024-02-22"<br />        },<br />        {<br />            "total_api_bandwidth": 0,<br />            "total_api_count": 0,<br />            "total_cdn_bandwidth": 0,<br />            "total_cdn_count": 0,<br />            "date": "2024-03-25"<br />        },<br />        {<br />            "total_api_bandwidth": 94685,<br />            "total_api_count": 26,<br />            "total_cdn_bandwidth": 0,<br />            "total_cdn_count": 0,<br />            "date": "2024-03-04"<br />        },<br />        {<br />            "total_api_bandwidth": 0,<br />            "total_api_count": 0,<br />            "total_cdn_bandwidth": 0,<br />            "total_cdn_count": 0,<br />            "date": "2024-02-28"<br />        }<br />    ],<br />    "meta": {<br />        "orgUid": "blt**************87",<br />        "includeCount": "true",<br />        "from": "2024-01-31",<br />        "duration": "day",<br />        "to": "2024-03-31",<br />        "services": "[\"cdn\",\"cma\"]"<br />    },<br />    "uid": "0f****46-5ee9-4f38-9146-1f********8"<br />}</pre>
<p>The response body provides detailed insights into your organization's API and CDN usage over a specified period. Here’s a breakdown of the key elements:</p>
<ul>
  <li><span class="code">total_api_bandwidth</span>: The total bandwidth consumed by API requests on the specified date.</li>
  <li><span class="code">total_api_count</span>: The number of API requests executed on the specified date.</li>
  <li><span class="code">total_cdn_bandwidth</span>: The total bandwidth consumed by CDN requests on the specified date.</li>
  <li><span class="code">total_cdn_count</span>: The number of CDN requests made on the specified date.</li>
  <li><span class="code">date</span>: The specific date for the reported statistics.</li>
</ul>
<p>This data helps monitor and analyze the usage patterns of API and CDN resources, aiding in efficient resource management and planning.</p>
<div class="note"><strong>Note</strong>
  <ul>
    <li>The <span class="code">apiKey</span> cannot be used with the <span class="code">services ["automations", "launch"]</span> simultaneously.</li>
    <li>The <span class="code">apiKey</span> and <span class="code">environmentUid</span> parameters are only applicable to the <span class="code">["launch"]</span> service.</li>
  </ul>
</div>

**API Endpoint**: `/analytics/v2/usage?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}`

**Method**: `GET`

## Query Parameters

- **orgUid** (required)
  <p>Enter the UID of your Organization.</p>
- **from** (required)
  <p>Specify the start date for the required data. Use the following date format: <span class="code">YYYY-MM-DD</span>.</p>
- **to** (required)
  <p>Enter the current date or any date after the <span class="code">from</span> date. The date format should be: <span class="code">YYYY-MM-DD</span>.</p>
- **services** (optional)
  <p>Specify the array of services for which you want statistics, such as: <span class="code">["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]</span>.</p>
- **includeCount** (optional)
  <p>Set this parameter to <span class="code">true</span> to include the total count of users in the response.</p>
- **duration** (optional)
  <p>Enter a value like <span class="code">day</span>, <span class="code">week</span>, or <span class="code">month</span>. This parameter determines the granularity of the data you want to fetch.</p>
- **apiKey** (optional)
  <p>Enter the API key of the stack.</p>
- **projectUid** (optional)
  <p>Enter the Launch project UID to retrieve data from that specific project.</p>
- **environmentUid** (optional)
  <p>Enter the environment UID of the Launch project.</p>

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

