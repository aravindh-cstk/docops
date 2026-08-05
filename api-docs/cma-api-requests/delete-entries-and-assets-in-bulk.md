---
title: "Delete entries and assets in bulk"
description: /bulk/delete
url: /delete-entries-and-assets-in-bulk
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:59.833Z
updated_at: 2026-02-04T08:52:36.159Z
---

# Delete entries and assets in bulk

<p>The&nbsp;<span class="code">Delete entries and assets in bulk</span>&nbsp;request allows you to delete multiple entries and assets at the same time.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth,</span>&nbsp;please include the&nbsp;<span><span data-type='inlineCode'>cm.bulk-operations:delete</span></span>&nbsp;scope.</p><p class="note"><strong>Note</strong>: At a time, you can delete <strong>100</strong><strong> entries</strong> in a bulk delete request.</p><p>In the 'Body' section, you need to specify the content type UIDs, entry UIDs or asset UIDs, and locales of which the entries or assets you want to delete.</p>

**API Endpoint**: `/bulk/delete`

**Method**: `POST`

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a><span></span></p><div></div>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
    "entries":[{
        "content_type":"{{content_type_uid}}",
        "uid":"{{entry_uid}}",
        "locale":"{{locale}}"
    },{
        "content_type":"{{content_type_uid}}",
        "uid":"{{entry_uid}",
        "locale":"{{entry_locale}}"
    }
    ],
     "assets": [{
         "uid": "{{uid}}"
     }]
}
```

## Response

```json
{
    "notice": "Your bulk delete request is in progress. Please check bulk task queue for more details."
}
```

