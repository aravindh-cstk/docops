---
title: "Retrieve Data"
description: /analytics/v2/job/{jobId}/data?orgUid=<string>&page=0
url: /retrieve-data
product: Contentstack
doc_type: api-request
created_at: 2024-08-15T16:50:12.764Z
updated_at: 2024-09-18T09:41:35.829Z
---

# Retrieve Data

<p>The <span class="code">Retrieve Data</span> request will take the <span class="code">jobId</span> value that was generated in your response, as a part of its URL and will get you the actual response data for that <span class="code">jobId</span> without any processing delay. Due to the async nature of the APIs, this <span class="code">GET</span> data request acts as an additional step to retrieve your actual response.</p><div class="note"><strong>Note</strong><ul><li>Replace the <span class="code">jobId</span> value in your URL with the <span class="code">jobId</span> value received in your response. For example: <span class="code">{{api_server}}/analytics/v2/job/job_0******9-b**d-4**b-9**0-4**********2/data</span></li><li>The <span class="code">page</span> parameter is optional. If not provided, the response defaults to page 0. If <span class="code">paginated</span> is <span class="code">true</span> in the response, specify a page number (0, 1, 2, etc.) to get data for that page. An invalid page number will result in an error.</li><li>A <span class="code">200 Job active</span> response indicates that the job is still processing. Retry the request after some time to receive the desired response body.</li></ul></div><p>You will receive the response depending on your request and relevant <span class="code">jobId</span>.</p>

**API Endpoint**: `/analytics/v2/job/{jobId}/data?orgUid=<string>&page=0`

**Method**: `GET`

## URL Parameters

- **jobId** (required)
  <p>Enter your job ID.</p>

## Query Parameters

- **orgUid** (required)
  <p>Enter the UID of your Organization.</p>
- **page** (optional)
  <p>Enter the page number you want to retrieve in the response.</p>

## Headers

- **authtoken** (required)
  <p>Enter your <span class="code">authtoken</span>.</p>

## Response

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

