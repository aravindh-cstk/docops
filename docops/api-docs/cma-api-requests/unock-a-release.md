---
title: "Unock a Release"
description: /releases/{release_uid}
url: /unock-a-release
product: Contentstack
doc_type: api-request
created_at: 2025-07-10T10:49:58.001Z
updated_at: 2025-07-18T06:32:11.569Z
---

# Unock a Release

<p>The <span class="code">Unlock a Release</span> request removes the lock from a release, allowing further modifications to the specified release. In the 'Body' section, set the <span class="code">locked</span> parameter as <span class="code">false</span> to unlock the release.</p>
<p>Your request body is as follows:</p><pre>{
  "release": {
    "locked": false
  }
}</pre>

**API Endpoint**: `/releases/{release_uid}`

**Method**: `PUT`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release that you want to unlock.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter <span class="code">application/json</span> to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
  "release": {
    "locked": false
  }
}
```

## Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "uid": "blt4**************a",
        "name": "Christmas Releases",
        "description": "",
        "locked": false,
        "sys_locked": false,
        "sys_version": 2,
        "status": [
            {
                "environment": "bltf6**************0",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "445f0669-50fc-4918-8f36-09abb3d573f4",
                "time": "2025-03-04T12:06:27.951Z"
            },
            {
                "environment": "blta**************1",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "44****69-50fc-4918-8f36-09********f4",
                "time": "2025-03-04T12:06:27.974Z"
            }
        ],
        "created_at": "2025-02-13T05:55:46.177Z",
        "updated_at": "2025-06-25T08:24:04.621Z",
        "created_by": "blt3**************4",
        "updated_by": "blte9**************1"
    }
}
```

