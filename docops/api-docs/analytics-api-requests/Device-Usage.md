---
title: "Device Usage"
description: /analytics/v2/devices?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}
url: /device-usage
product: Contentstack
doc_type: api-request
created_at: 2024-08-15T10:00:09.541Z
updated_at: 2026-04-14T10:50:51.036Z
---

# Device Usage

<p>The <span class="code">Device Usage</span> request helps you get a list of devices that your organization users are using to access Contentstack services.</p><p>Here’s how your response body would look like when you pass the <span class="code">jobId</span> in the <a href="/docs/developers/apis/analytics-api#retrieve-data" target="_self">Retrieve Data</a> endpoint.</p><pre>{
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
}</pre><p>The response body provides detailed insights into users accessing Contentstack endpoints. Here’s a breakdown of the key elements:</p><ul><li><span class="code">count</span>: Number of times the specific device was used.</li><li><span class="code">type</span>: The type of access, such as "cma" for Content Management API.</li><li><span class="code">device</span>: Description of the device or software used, including the SDK version, platform, and operating system details.</li><li><span class="code">date</span>: The specific date when the usage was recorded.</li></ul><p>This data helps you track and analyze device and environment usage, supporting performance and user experience optimization.</p>

**API Endpoint**: `/analytics/v2/devices?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}`

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
- **duration** (optional)
  <p>Enter a value like <span class="code">day</span>, <span class="code">week</span>, or <span class="code">month</span>. This parameter determines the granularity of the data you want to fetch.</p>
- **includeCount** (optional)
  <p>Set this parameter to <span class="code">true</span> to include the total count of users in the response.</p>
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

