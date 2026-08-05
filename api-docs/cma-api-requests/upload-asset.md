---
title: "Upload asset"
description: /assets?relative_urls={boolean_value}&include_dimension={boolean_value}
url: /upload-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.800Z
updated_at: 2025-07-01T04:50:30.644Z
---

# Upload asset

<p>The <span data-type='inlineCode'>Upload asset</span> request uploads an asset file to your stack.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p>
<p>To upload assets from your local system&nbsp;to Contentstack and manage their details, you need to use the following "form-data" parameters:</p>
<div class="cs-table-wrapper">
  <div class="cs-table">
    <table>
      <tbody>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><strong>asset[upload]</strong> (<em>mandatory</em>)</td>
          <td>Select the input type as 'File'. Then, browse and select the asset file that you want to import. Most file types are supported.</td>
        </tr>
        <tr>
          <td><strong>asset[parent_uid]</strong> (<em>optional</em>)</td>
          <td>If needed, assign a parent folder to your asset by passing the UID of the parent folder.</td>
        </tr>
        <tr>
          <td><strong>asset[title]</strong> (<em>optional</em>)</td>
          <td>Enter a title for your uploaded asset.</td>
        </tr>
        <tr>
          <td><strong>asset[description]</strong> (<em>optional</em>)</td>
          <td>Enter a description for your uploaded asset.</td>
        </tr>
        <tr>
          <td><strong>asset[tags]</strong> (optional)</td>
          <td>Assign a specific tag(s) to your uploaded asset.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<p>You can try the call manually in any REST API client, such as Postman. Here's a screenshot for reference:</p>
<p><img data-image="xg8yi85aafjp" src="https://images.contentstack.io/v3/assets/blt3f268ac7e6592e40/blt16c2c04a211e488c/5fd3b73f59bd313bf831339c/download" data-sys-asset-uid="blt16c2c04a211e488c" alt="Upload Asset API Request.png" /></p>
<p>For easier access, here's the cURL for this API Request:</p><pre>curl -X POST \<br />  https://api.contentstack.io/v3/assets?include_dimension=true \<br />  -H 'api_key: {api_key_of_your_stack}' \<br />  -H 'authtoken: {your_authtoken}' \<br />  -H 'cache-control: no-cache' \<br />  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \<br />  -F 'asset[upload]=@{Filepath e.g., /C:/Users/abc/Desktop/Sample.png}' \<br />  -F 'asset[parent_uid]={If you need to add this file under an existing asset folder, pass the UID of the parent folder.}' \<br />  -F 'asset[title]={If needed, enter a title for your uploaded asset.}' \<br />  -F 'asset[description]={If needed, enter a description for your uploaded asset.}'<br />  -F 'asset[tags]={If needed, assign a specific tag to your uploaded asset.}'<br /></pre>
<p>In the above cURL command, pass the necessary values within the curly brackets. The <span class="code">asset[parent_uid],</span><span class="code">asset[title],</span><span class="code">asset[description],</span><span class="code">asset[tags],</span> and <span class="code">include_dimension=true</span> parameters are optional. You can skip them if not required.</p>

**API Endpoint**: `/assets?relative_urls={boolean_value}&include_dimension={boolean_value}`

**Method**: `POST`

## Query Parameters

- **relative_urls** (optional)
  <p>Set this to 'true' to display the relative URL of the asset.</p>
- **include_dimension** (optional)
  <p>Set this to 'true' to include the dimensions (height and width) of the image in the response.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
  <p>Pass “multipart/form-data” to include form data body parameters.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
    "notice": "Asset created successfully.",
    "asset": {
        "uid": "asset_uid",
        "created_at": "2020-12-09T07:58:53.020Z",
        "updated_at": "2020-12-09T07:58:53.020Z",
        "created_by": "user_uid",
        "updated_by": "user_uid",
        "content_type": "image/png",
        "file_size": "file_size",
        "tags": [
            "workflows",
            "stages"
        ],
        "filename": "file-name.png",
        "url": "https://assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/asset_name",
        "ACL": {},
        "is_dir": false,
        "parent_uid": "parent_asset_folder_uid",
        "_version": 1,
        "title": "Test",
        "description": "This is a test image.",
        "dimension": {
            "height": "image_height",
            "width": "image_width"
        }
    }
}
```

