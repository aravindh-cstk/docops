---
title: "Analytics | Device Usage"
description: Retrieve analytics for device usage to understand how visitors access Contentstack-delivered experiences.
url: https://www.contentstack.com/docs/developers/apis/analytics-api/device-usage
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Analytics | Device Usage



## API Endpoints

### Device Usage

**GET** `/analytics/v2/devices?orgUid={organization_uid}&from={YYYY-MM-DD}&to={YYYY-MM-DD}`

The Device Usage request helps you get a list of devices that your organization users are using to access Contentstack services.

Here’s how your response body would look like when you pass the jobId in the [Retrieve Data](../../../api-detail/analytics-api.md#retrieve-data) endpoint.

```
{
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
}
```

The response body provides detailed insights into users accessing Contentstack endpoints. Here’s a breakdown of the key elements:

- count: Number of times the specific device was used.
- type: The type of access, such as "cma" for Content Management API.
- device: Description of the device or software used, including the SDK version, platform, and operating system details.
- date: The specific date when the usage was recorded.

This data helps you track and analyze device and environment usage, supporting performance and user experience optimization.

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
- **duration** (optional)
  Enter a value like day, week, or month. This parameter determines the granularity of the data you want to fetch.
  Default: `day`
- **includeCount** (optional)
  Set this parameter to true to include the total count of users in the response.
  Default: `true`
- **orderBy** (optional)
  Enter 1 to sort the response in ascending order by count or -1 to sort it in descending order by count. By default, the value is set to -1, which orders the response in descending order.
  Default: `-1`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "jobId": "job_7******a-c**f-4**9-9**0-c**********6",
    "paginated": true
}
```

