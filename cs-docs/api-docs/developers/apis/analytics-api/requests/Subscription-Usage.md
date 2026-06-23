---
title: "Subscription Usage"
description: GET /analytics/v2/subscription?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}
url: developers/apis/analytics-api/requests/subscription-usage
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-09-18
---

# Subscription Usage

**GET** `/analytics/v2/subscription?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}`

The Subscription Usage request returns the total number of projects, environments, and domains under Launch within your organization till date. To get the details for CMS and Automate, you can use the [Usage Analytics](/docs/developers/apis/analytics-api#usage-analytics) request.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](/docs/developers/apis/analytics-api#retrieve-data) endpoint.

```
{
    "data": [
        {
            "total_launch_project": 9,
            "total_launch_env": 11,
            "total_launch_domain": 2
        }
    ],
    "meta": {
        "orgUid": "blt**************87",
        "from": "2024-06-30",
        "to": "2024-09-12"
    },
    "uid": "0f****46-5ee9-4f38-9146-1f********87"
}
```

The response body provides an overview of the resources in the Launch section within your organization. Here’s a breakdown of the key elements:

- total_launch_project: The total number of projects created within Launch.
- total_launch_env: The total number of environments associated with the Launch projects .
- total_launch_domain: The total number of domains configured within Launch.

This response gives a clear view of how Launch resources are utilized within the specified date range.

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

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

## Sample Response

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": false
}
```

