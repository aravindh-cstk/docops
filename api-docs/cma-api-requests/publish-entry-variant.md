---
title: "Publish entry variant"
description: /content_types/{content_type_uid}/entries/{entry_uid}/publish
url: /publish-entry-variant
product: Contentstack
doc_type: api-request
created_at: 2024-09-25T05:32:55.053Z
updated_at: 2025-02-05T13:22:13.587Z
---

# Publish entry variant

<p>The <span class="code">Publish entry variant</span> request lets you publish an entry variant.</p>
<p>In the “Body” section, include the variant UID and version within <span class="code">variants</span>. Pass the <span class="code">publish_latest_base_conditionally</span> key as <span class="code">true</span> within <span class="code">variant_rules</span>.</p><pre>        "variants": [<br />            {<br />                "uid": "cs6**************a5",<br />                "version": 1<br />            }<br />        ],<br />        "variant_rules": {<br />            "publish_latest_base_conditionally": true<br />        }</pre>
<p class="note"><strong>Note</strong>: You don't need to include the base entry version in the payload. The entry variant will be published based on the latest version or as specified by the <span class="code">variant_rules</span> toggle. If the base entry version is included, the system will ignore it.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

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
        "environments": ["production"],
        "locales": ["en-us"],
        "variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ],
        "variant_rules": {
            "publish_latest_base": false,
            "publish_latest_base_conditionally": true
        }
    },
    "locale": "en-us"
}
```

## Response

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "75****1f-e**0-46**-a**5-02********9a"
}
```

