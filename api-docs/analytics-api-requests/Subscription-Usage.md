---
title: "Subscription Usage"
description: /analytics/v2/subscription?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}
url: /subscription-usage
product: Contentstack
doc_type: api-request
created_at: 2024-08-14T08:32:53.622Z
updated_at: 2024-09-18T09:20:44.228Z
---

# Subscription Usage

<p>The <span class="code">Subscription Usage</span> request returns the total number of projects, environments, and domains under Launch within your organization till date. To get the details for CMS and Automate, you can use the <a href="/docs/developers/apis/analytics-api#usage-analytics" target="_self">Usage Analytics</a> request.</p><p>Here’s how your response body would look like when you pass the <span class="code">jobId</span> in the <a href="/docs/developers/apis/analytics-api#retrieve-data" target="_self">Retrieve Data</a> endpoint.</p><pre>{<br />    "data": [<br />        {<br />            "total_launch_project": 9,<br />            "total_launch_env": 11,<br />            "total_launch_domain": 2<br />        }<br />    ],<br />    "meta": {<br />        "orgUid": "blt**************87",<br />        "from": "2024-06-30",<br />        "to": "2024-09-12"<br />    },<br />    "uid": "0f****46-5ee9-4f38-9146-1f********87"<br />}</pre><p>The response body provides an overview of the resources in the Launch section within your organization. Here’s a breakdown of the key elements:</p><ul><li><span class="code">total_launch_project</span>: The total number of projects created within Launch.</li><li><span class="code">total_launch_env</span>: The total number of environments associated with the Launch projects .</li><li><span class="code">total_launch_domain</span>: The total number of domains configured within Launch.</li></ul><p>This response gives a clear view of how Launch resources are utilized within the specified date range.</p>

**API Endpoint**: `/analytics/v2/subscription?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}`

**Method**: `GET`

## Query Parameters

- **orgUid** (required)
  <p>Enter the UID of your Organization.</p>
- **from** (required)
  <p>Specify the start date for the required data. Use the following date format: <span class="code">YYYY-MM-DD</span>.</p>
- **to** (required)
  <p>Enter the current date or any date after the <span class="code">from</span> date. The date format should be: <span class="code">YYYY-MM-DD</span>.</p>

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

