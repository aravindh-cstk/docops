---
title: "Localize an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}
url: /localize-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.886Z
updated_at: 2026-07-20T16:51:44.062Z
---

# Localize an entry

<p>The <span data-type='inlineCode'>Localize an entry</span> request allows you to localize an entry i.e., the entry will cease to fetch data from its fallback language and possess independent content specific to the selected locale.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.entries.management:write</span> scope.</p><p>In the "Body" parameter, you need to provide the content of your entry based on the content type.</p><p class="note"><strong>Note</strong>: When localizing an entry, if a <strong>Group</strong>, <strong>Modular Blocks</strong>, or <strong>Global</strong> field instance contains a field that is marked as non-localizable, you must include <span class="code">_metadata.uid</span> for the field in the request payload to map that instance in child locale. This ensures that the non-localizable field retains its value from the master locale. You can find the metadata UID for each non-localizable field by using the <a href="/docs/developers/apis/content-management-api#get-a-single-entry" target="_self">Get a Single Entry</a> request for the master entry.</p><p>Here's a sample request body:</p><pre>{<br />    "entry":{<br />        "title":"Sample Entry in Arabic",<br />        "group":[{<br />            "single_line":"Non-localizable single line textbox",<br />            "_metadata":{<br />                "uid":"csde3afe4a1ece294b"<br />                }<br />            }],<br />        "single_line":"Localizable single line textbox",<br />        "tags":[]<br />    }<br />}</pre><p class="note"><strong>Note:</strong> This request will only create the localized version of your entry and not publish it. To publish your localized entry, you need to use the <a href="/docs/content-managers/author-content/publish-an-entry" target="_self"><strong>Publish an entry</strong></a> request and pass the respective locale code in the <span data-type='inlineCode'>locale={locale_code}</span> parameter.</p><p class="add-resource"><strong>Additional Resource:</strong> Refer the <a href="/docs/headless-cms/localize-an-entry" target="_self">Localization</a> docs for more information.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

**Method**: `PUT`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you want to localize.</p>

## Query Parameters

- **locale** (required)
  <p>Enter the code of the language to localize the entry of that particular language.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b"
                }
            }],
        "single_line":"Localizable single line textbox",
        "tags":[]
    }
}
```

## Response

```json
{
    "notice": "Entry localized successfully.",
    "entry": {
        "locale": "hi-in",
        "uid": "bltf285cc2affe9f495",
        "ACL": {},
        "_in_progress": false,
        "_version": 1,
        "created_at": "2025-05-07T04:52:45.031Z",
        "created_by": "blte93d4119f79db761",
        "group": [
            {
                "single_line": "Non-localizable single line textbox",
                "_metadata": {
                    "uid": "csde3afe4a1ece294b"
                }
            }
        ],
        "single_line": "Localizable single line textbox",
        "tags": [],
        "title": "Sample Entry in Arabic",
        "updated_at": "2025-05-07T04:52:45.031Z",
        "updated_by": "blte93d4119f79db761"
    }
}
```

