---
title: "Analytics | Retrieve Data"
description: Retrieve analytics data with filters, date ranges, and dimensions for reporting on Contentstack API usage.
url: https://www.contentstack.com/docs/developer-apis/analytics-api/retrieve-data
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Analytics | Retrieve Data



## API Endpoints

### Retrieve Data

**GET** `/analytics/v2/job/{jobId}/data?orgUid=<string>&page=0`

The Retrieve Data request will take the jobId value that was generated in your response, as a part of its URL and will get you the actual response data for that jobId without any processing delay. Due to the async nature of the APIs, this GET data request acts as an additional step to retrieve your actual response.

**Note**

- Replace the jobId value in your URL with the jobId value received in your response. For example: {{api_server}}/analytics/v2/job/job_0******9-b**d-4**b-9**0-4**********2/data
- The page parameter is optional. If not provided, the response defaults to page 0. If paginated is true in the response, specify a page number (0, 1, 2, etc.) to get data for that page. An invalid page number will result in an error.
- A 200 Job active response indicates that the job is still processing. Retry the request after some time to receive the desired response body.

You will receive the response depending on your request and relevant jobId.

#### URL Parameters

- **jobId** (required)
  Enter your job ID.
  Default: `job_0******9-b**d-4**b-9**0-4**********2`

#### Query Parameters

- **orgUid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **page** (optional)
  Enter the page number you want to retrieve in the response.
  Default: `1`

#### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

#### Sample Response

```json
{
    "data": [
        {
            "total_launch_project": 52,
            "total_launch_env": 42,
            "total_launch_domain": 62
        }
    ],
    "meta": {
        "includeCount": "true",
        "services": "[\"cdn\",\"cma\"]",
        "from": "2024-01-01",
        "duration": "day",
        "to": "2024-05-28",
        "orgUid": "blt426dad4d38234fd5"
    },
    "uid": "c13878ab-ff27-4b9c-ae99-a085c8f75f7d"
}
```

