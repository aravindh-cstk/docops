---
title: "Create an entry with master locale"
description: /content_types/{content_type_uid}/entries
url: /create-an-entry-with-master-locale
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.033Z
updated_at: 2026-07-20T18:20:22.924Z
---

# Create an entry with master locale

<p>The <span class="code">Create an entry with master locale</span> request lets you create an entry in the master language of your stack if it does not already exist or has been deleted. You can use the UID of a <a href="/docs/headless-cms/localize-an-entry" target="_self">localized entry</a> to convert it into a <a href="/docs/headless-cms/set-the-master-language" target="_self">master language entry</a>.</p><p><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth,&nbsp;</span>please include the <span data-type='inlineCode'>cm.entries.management:write</span> scope.<br />If the master language is not accessible or does not exist, a custom user role can still create an entry in any of the other available locales. However, the entry in the master language remains non-existent.</p><p>In such a scenario, roles with access to the master locale can create an entry in the master language using the UID of the localized entry and the <span class="code">copy_to_master</span> query parameter. The <span class="code">copy_to_master</span> parameter allows you to copy content from the localized entry to the master language entry version of the stack.</p><p>When executing the API call, in the ‘Body’ section, you need to provide the content of your entry based on the content type created. You also need to specify the UID of the localized entry for which you want to create an entry in the master locale.</p><p>Here’s what your request body should look like:</p><pre>{
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "uid": "localized_entry_uid"
    }
}</pre>

**API Endpoint**: `/content_types/{content_type_uid}/entries`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to retrieve the details.&nbsp;The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>

## Query Parameters

- **copy_to_master** (required)
  <p>Set this parameter to <span class="code">true</span> to copy content from a localized entry to the master language.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "uid": "blta1f4ca9e3a6cd764"
    }
}
```

## Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "locale": "en-us",
        "uid": "blta1f4ca9e3a6cd764",
        "created_by": "bltb2472ae3265037b1",
        "updated_by": "bltb2472ae3265037b1",
        "created_at": "2021-11-24T10:10:14.067Z",
        "updated_at": "2021-11-24T10:10:14.067Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```

