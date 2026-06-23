---
title: "Upload asset"
description: POST /assets?relative_urls={boolean_value}&include_dimension={boolean_value}
url: developers/apis/content-management-api/requests/upload-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-01
---

# Upload asset

**POST** `/assets?relative_urls={boolean_value}&include_dimension={boolean_value}`

The Upload asset request uploads an asset file to your stack.  
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

To upload assets from your local system to Contentstack and manage their details, you need to use the following "form-data" parameters:

  
    

| Parameter | Description |
| --- | --- |
| asset[upload] (mandatory) | Select the input type as 'File'. Then, browse and select the asset file that you want to import. Most file types are supported. |
| asset[parent_uid] (optional) | If needed, assign a parent folder to your asset by passing the UID of the parent folder. |
| asset[title] (optional) | Enter a title for your uploaded asset. |
| asset[description] (optional) | Enter a description for your uploaded asset. |
| asset[tags] (optional) | Assign a specific tag(s) to your uploaded asset. |

  

You can try the call manually in any REST API client, such as Postman. Here's a screenshot for reference:

For easier access, here's the cURL for this API Request:

```
curl -X POST \
  https://api.contentstack.io/v3/assets?include_dimension=true \
  -H 'api_key: {api_key_of_your_stack}' \
  -H 'authtoken: {your_authtoken}' \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F 'asset[upload]=@{Filepath e.g., /C:/Users/abc/Desktop/Sample.png}' \
  -F 'asset[parent_uid]={If you need to add this file under an existing asset folder, pass the UID of the parent folder.}' \
  -F 'asset[title]={If needed, enter a title for your uploaded asset.}' \
  -F 'asset[description]={If needed, enter a description for your uploaded asset.}'
  -F 'asset[tags]={If needed, assign a specific tag to your uploaded asset.}'
```

In the above cURL command, pass the necessary values within the curly brackets. The asset[parent_uid],asset[title],asset[description],asset[tags], and include_dimension=true parameters are optional. You can skip them if not required.

## Query Parameters

- **relative_urls** (optional)
  Set this to 'true' to display the relative URL of the asset.
  Default: `false`
- **include_dimension** (optional)
  Set this to 'true' to include the dimensions (height and width) of the image in the response.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Pass “multipart/form-data” to include form data body parameters.
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

