---
title: "Download an asset with permanent URL"
description: /assets/{api_key}/{asset_uid}/{slug}
url: /download-an-asset-with-permanent-url
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.767Z
updated_at: 2025-07-04T08:24:59.676Z
---

# Download an asset with permanent URL

<p>The <span data-type='inlineCode'>Download an asset with permanent URL</span> request displays an asset in the response. The asset returned in the response can be saved to your local storage system. Make sure to specify the unique identifier (slug) in the request URL.<br /><span style="font-size: 10.5pt;"><br />To configure the permissions for your application via OAuth, please include the </span><span data-type='inlineCode'>cm.assets:download</span><span style="color: rgb(0, 0, 255);font-size: 10.5pt;"> </span><span style="font-size: 10.5pt;">scope.<br /></span></p>
<p>This request will return the most recent version of the asset, however, to download the latest published version of the asset, pass the <span data-type='inlineCode'>environment</span> query parameter with the environment name.</p>
<p class="note"><strong>Note</strong>: Before executing this API request, ensure to <a href="/docs/developers/apis/content-management-api#generate-permanent-asset-url" target="_self">create a permanent URL for the asset</a> you want to download.</p>

**API Endpoint**: `/assets/{api_key}/{asset_uid}/{slug}`

**Method**: `GET`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the UID of the asset you want to download. Use the <a href="/docs/developers/apis/content-management-api#get-all-assets">Get All Assets</a> request to get the UID of the asset.</p>
- **slug** (required)
  <p>Enter the unique identifier of the asset.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset.</p>

- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p></p>
<p>Pass “application/json” as the value to this parameter.</p>
<p></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{Displays the requested asset in API response}
```

