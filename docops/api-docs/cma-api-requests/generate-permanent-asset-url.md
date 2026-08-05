---
title: "Generate permanent asset URL"
description: /assets/{asset_uid}
url: /generate-permanent-asset-url
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:00.817Z
updated_at: 2024-03-21T13:21:25.948Z
---

# Generate permanent asset URL

<p>The <span data-type='inlineCode'>Generate Permanent Asset URL</span> request allows you to generate a permanent URL for an asset. This URL remains constant irrespective of any subsequent updates to the asset. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p><p class="warning"><strong>Warning</strong>: You can generate the permanent asset URL and update the asset details only once. Once done, you can no longer make changes to the permanent URL.</p><p>In the request body, you need to pass the permanent URL in the following format:</p><pre>{<br />    "asset": {<br />        "permanent_url": "https://images.contentstack.io/v3...{stack_api_key}/{asset_uid}/{unique_identifier}"<br /><br />    }<br />}</pre><p>In the above URL, you can pass any unique identifier (slug) that suits your requirement.</p><p>Another way to generate a permanent URL for an asset is to pass the URL as a form-data parameter, i.e., <span data-type='inlineCode'>asset[permanent_url]</span>. In that case, the Content-Type in the <strong>Headers</strong> section must be changed from application/json to multipart/form-data. You can provide the permanent URL of your choice (along with a slug) as a value for this parameter, for example:</p><pre>https://{base_URL}/v3/assets/{stack_api_key}/{asset_uid}/{slug}</pre>

**API Endpoint**: `/assets/{asset_uid}`

**Method**: `PUT`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the UID of the asset for which you want to generate a permanent URL. Use the <a href="/docs/developers/apis/content-management-api#get-all-assets">Get All Assets</a> request to get the UID of the asset.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p></p>
<p>Enter the API key of the stack that holds the asset.</p>
<p></p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
  <p>Enter “application/json” to pass a Request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
    "asset": {
        "permanent_url": "https://images.contentstack.io/v3/assets/{stack_api_key}/{asset_UID}/sample-slug.jpeg"
         
    }
}
```

## Response

```json
{
"notice": "Asset updated successfully.",
 "asset": {
    "uid": "blt27ce607b94b7e5ed",
    "created_at": "2021-04-17T09:27:06.922Z",
    "updated_at": "2021-05-10T06:47:55.726Z",
    "created_by": "blt00d8ff3f5827019c",
    "updated_by": "blt00d8ff3f5827019c",
    "content_type": "image/jpeg",
    "file_size": "5505",
    "tags": [],
    "filename": "boy.jpeg",
    "url": "https://images.contentstack.io//v3/assets/blt1fba6c8ee0351ff8/blt27ce607b94b7e5ed/607aa9ea2bd7634611656475/boy.jpeg",
    "ACL": {},
    "is_dir": false,
    "parent_uid": null,
    "_version": 31,
    "title": "boy.jpeg",
    "description": "New description",
    "permanent_url": "https://images.contentstack.io/v3/assets/{stack_api_key}/{asset_UID}/sample-slug.jpeg"
  }
}
```

