---
title: "TEST- Get all entries"
description: /content_types/{content_type_uid}/entries?locale={locale_code}&include_fallback=true
url: /test-all
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:05.898Z
updated_at: 2025-07-02T10:34:07.701Z
---

# TEST- Get all entries

<p>The <span data-type='inlineCode'>Get all entries</span> request fetches the list of all the entries of a particular content type. It returns the content of each entry in JSON format.</p><p>Additionally, if you wish to fetch the metadata attached to each entry, then you need to pass <span data-type='inlineCode'>include_metadata</span> as a query parameter. Set this parameter to true to include the entry metadata along with all entries in the response body.</p><p>You will find the entry metadata under the <span data-type='inlineCode'>_metadata</span> key in the response. It will be associated with a specific extension UID as follows:</p><pre>"_metadata": {<br />    "extensions": {<br />        "{extension_uid}": [{<br />            "image_copyrights": "Contentstack Branding",<br />            "scope": "local"<br />        }]<br />    }<br />}<br /></pre><p>If an entry is not published in a specific locale, make use of the "<span data-type='inlineCode'>include_fallback=true</span>" query parameter to fetch the published content from its fallback locale.</p><p class="note"><strong>Note:</strong> If the fallback language of the specified locale is the master language itself, this parameter won't be applicable.</p><p>To include the publish details in the response, make use of the <span data-type='inlineCode'>include_publish_details=true</span> parameter. This will return the publishing details of the entry in every environment along with the version number that is published in each of the environments.</p><p>You can add other <a href="/docs/developers/apis/content-delivery-api#queries" target="_self">Queries</a> to extend the functionality of this API call. Add a query parameter named query and provide your query (in JSON format) as the value.</p><p><strong>When using Delivery Tokens</strong></p><ul><li>Fetches ONLY published content</li><li><p>Passing the environment as a query parameter is optional but recommended to ensure that the CDN delivers the most recent content</p></li><li>Locale is <strong>optional</strong><ul><li>If no locale is specified, it returns the entry from the master locale</li><li>If you specify a locale in the query, it returns the latest published version of the localized entry/entries</li><li>If an entry is not localized, make use of the <span data-type='inlineCode'>include_fallback=true</span>" query parameter to fetch the published content from its fallback locale</li></ul></li></ul><p class="tip"><strong>Tip:</strong> This request returns only the first 100 entries of the specified content type. Refer to the <a href="/docs/developers/apis/content-delivery-api#pagination">Pagination</a> section to retrieve the rest of your entries in a paginated form.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale_code}&include_fallback=true`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you want to retrieve the entries. The UID is often based on the title of the content type and it is unique across a stack.<br></p>

## Query Parameters

- **environment** (optional)
  <p>Enter the environment scoped to your delivery token. For example, if your delivery token is scoped to the production environment, pass the value as <span class="code">production</span>.</p>
- **locale** (optional)
  <p>Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.</p>
- **include_fallback** (optional)
  <p>Enter true if you want to retrieve the entries that are not published in the specified locale, but is published in its fallback locale.</p>
- **include_metadata** (optional)
  <p>Enter true if you want to retrieve the entry metadata attached to each entry.</p>
- **include_publish_details** (optional)
  <p>Enter true if you want to retrieve the publishing details of the entry in every environment.</p>
- **environment** (optional)
  <p>Pass the environment UID as the value of this query parameter to retrieve the entries published in that environment.</p>
# V3 API Migration Test
# Published Entries Query Fix - Tue Aug  4 11:55:36 IST 2026
# Version Filter Test
# All Content Types Migration
