---
title: "SDK Usage"
description: /analytics/v2/sdk?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}&includeCount={boolean_value}&services={["cdn","cma"]}&duration={duration}
url: /sdk-usage
product: Contentstack
doc_type: api-request
created_at: 2024-08-15T16:27:58.908Z
updated_at: 2025-02-25T04:47:12.754Z
---

# SDK Usage

<p>The <span class="code">SDK Usage</span> request gets you the number of requests that were made using the SDKs. It helps you get an overview of the SDK usage by your customers.</p>
<p>Here’s how your response body would look like when you pass the <span class="code">jobId</span> in the <a href="/docs/developers/apis/analytics-api#retrieve-data" target="_self">Retrieve Data</a> endpoint.</p><pre>{<br />    "total": 16,<br />    "totalDocs": 4,<br />    "data": [<br />        {<br />            "count": 7,<br />            "type": "cdn",<br />            "sdk": "cda-collection/v9.31.0",<br />            "date": "2024-02-09"<br />        },<br />        {<br />            "count": 4,<br />            "type": "cdn",<br />            "sdk": "cda-collection/v9.31.0",<br />            "date": "2024-02-12"<br />        },<br />        {<br />            "count": 3,<br />            "type": "cdn",<br />            "sdk": "cda-collection/v9.31.0",<br />            "date": "2024-02-08"<br />        },<br />        {<br />            "count": 2,<br />            "type": "cdn",<br />            "sdk": "cda-collection/v9.31.0",<br />            "date": "2024-02-15"<br />        },<br />        {<br />            "date": "2024-02-28"<br />        }<br />    ],<br />    "meta": {<br />        "orderBy": -1,<br />        "from": "2024-01-31",<br />        "to": "2024-02-28",<br />        "orgUid": "blt**************87",<br />        "includeCount": true,<br />        "services": "[\"cdn\",\"cma\"]",<br />        "duration": "day",<br />        "skip": 0,<br />        "limit": 900<br />    },<br />    "uid": "0f****46-5ee9-4f38-9146-1f********8"<br />}</pre>
<p>The response body provides detailed insights into how SDKs are being used across different services. Here’s a breakdown of the key elements:</p>
<ul>
  <li><span class="code">count</span>: The number of requests executed using a specific SDK on a given date.</li>
  <li><span class="code">type</span>: The service type, such as "cdn".</li>
  <li><span class="code">sdk</span>: The SDK version used for the requests.</li>
  <li><span class="code">date</span>: The date when the SDK requests were executed.</li>
</ul>
<p>This response helps organizations track SDK adoption and effectiveness by revealing usage patterns and frequency.</p>

**API Endpoint**: `/analytics/v2/sdk?from={YYYY-MM-DD}&to={YYYY-MM-DD}&orgUid={organization_uid}&includeCount={boolean_value}&services={["cdn","cma"]}&duration={duration}`

**Method**: `GET`

## Query Parameters

- **from** (required)
  <p>Specify the start date for the required data. Use the following date format: <span class="code">YYYY-MM-DD</span>.</p>
- **to** (required)
  <p>Enter the current date or any date after the <span class="code">from</span> date. The date format should be: <span class="code">YYYY-MM-DD</span>.</p>
- **orgUid** (required)
  <p>Enter the UID of your Organization.</p>
- **includeCount** (required)
  <p>Set this parameter to <span class="code">true</span> to include the total count of users in the response.</p>
- **services** (required)
  <p>Specify the array of services for which you want statistics, such as: <span class="code">["cma", "ui", "cdn", "graphql", "images", "assets", "automations", "launch"]</span>.</p>
- **duration** (required)
  <p>Enter a value like <span class="code">day</span>, <span class="code">week</span>, or <span class="code">month</span>. This parameter determines the granularity of the data you want to fetch.</p>
- **orderBy** (optional)
  <p>Enter <span class="code">1</span> to sort the response in ascending order by <span class="code">count</span> or <span class="code">-1</span> to sort it in descending order by <span class="code">count</span>. By default, the value is set to <span class="code">-1</span>, which orders the response in descending order.</p>
- **limit** (optional)
  <p>Specify the number of items you wish to fetch per request. The maximum limit is 900.</p>
- **skip** (optional)
  <p>Enter the number of items to skip. For example, a skip value of <span class="code">10</span> will skip the first 10 items.</p>
- **apiKey** (optional)
  <p>Enter your stack API key to get data for that specific stack.</p>

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

