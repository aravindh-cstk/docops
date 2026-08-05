---
title: "Bulk Add to Release"
description: /bulk/release/items
url: /bulk-add-to-release
product: Contentstack
doc_type: api-request
created_at: 2024-08-29T10:54:20.104Z
updated_at: 2025-02-20T18:25:01.566Z
---

# Bulk Add to Release

<p>The <span class="code">Bulk Add to Release</span> request allows you to add multiple entries and assets to a release, making content preparation for deployment more efficient and ensuring smooth, coordinated publishing.</p>
<p>In the 'Body' section, specify the release UID, action parameter which determines whether the release should be set for publish or unpublish, and the locale for the entries. Set the reference parameter to <span class="code">true</span> to include referenced items.</p>
<p>The items parameter should include an array of objects, each with content type UIDs, entry UIDs, locales (optional), version (optional), and the entry title.</p>
<p class="note"><strong>Note</strong>: Locales specified in the items parameter will override those in the request body. If no locales are provided for each entry, the locale mentioned in the request body will be used. You can also set the action parameter for each entry to publish or unpublish.</p>
<p>For each asset, provide the title, asset UID, set the <span class="code">content_type_uid</span> to <span class="code">sys_assets</span>, and optionally include the version you want to publish. Your request body will look as follows:</p><pre>        {<br />            "title": "Asset title",<br />            "uid": "blt**************46",<br />            "content_type_uid": "sys_assets",<br />            "version": 1<br />        }</pre>
<p>Once the API request is executed, a job ID is generated in the response. You can use this job ID to track the status of your add to release request in <a href="/docs/developers/apis/content-management-api#get-stack-bulk-task-queue" target="_self">Get Stack Bulk Task Queue</a>.</p>
<p class="note"><strong>Note</strong>: Pass <span class="code">bulk_version</span> as <span class="code">2.0</span> in the Headers section.</p>

**API Endpoint**: `/bulk/release/items`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authorization** (required)
  <p><span></span><span style='font-size: 12pt;'>Enter your management token.</span></p><div></div><span></span>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **Content-Type** (optional)
  <p>Enter <span class="code">application/json</span> to pass a request body.</p>
- **bulk_version** (required)
  <p>Pass the bulk_version header as 2.0 to allow bulk operation.</p>

## Request Body

```json
{
    "release": "blt**************9d", 
    "action": "publish",
    "locale": [
        "en-us"
    ],
    "reference": true,
    "items": [
        {
            "content_type_uid": "ct_1",
            "uid": "blt**************46",
            "version": 2,
            "locale": "en-us",
            "title": "validation test"
        }
    ]
}
```

## Response

```json
{
    "job_id": "cs-13****15-5**a-42**-b**0-8f********a6",
    "notice": "Your add to release request is in progress."
}
```

