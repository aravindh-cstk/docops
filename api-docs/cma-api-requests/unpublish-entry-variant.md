---
title: "Unpublish entry variant"
description: /content_types/{content_type_uid}/entries/{entry_uid}/unpublish
url: /unpublish-entry-variant
product: Contentstack
doc_type: api-request
created_at: 2024-09-25T05:37:40.078Z
updated_at: 2025-02-05T13:24:12.031Z
---

# Unpublish entry variant

<p>The <span class="code">Unpublish entry variant</span> request lets you unpublish an entry variant.</p>
<p>In the “Body” section, include the version number and variant UID within <span class="code">variants</span>.</p><pre>        "variants": [<br />            {<br />                "uid": "cs6**************a5",<br />                "version": 1<br />            }<br />        ]</pre>
<p class="note"><strong>Note</strong>: You don't need to include the base entry version in the payload. The entry variant will be unpublished based on the latest version or as specified by the <span class="code">variant_rules</span> toggle. If the base entry version is included, the system will ignore it.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/unpublish`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of your content type.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of your entry.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language for the entry you want to update.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Pass <span class="code">application/json</span> value.</p>
- **api_version** (required)
  <p>Enter the API version to include Nested Reference Publishing.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
    "entry": {
        "environments": ["blt**************fd"],
        "locales": ["en-us"],
        "variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ]
    },
    "locale": "en-us"
}
```

## Response

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "05****9c-9**0-45**-9**4-ea********37"
}
```

