---
title: "Generate permanent asset URL"
description: PUT /assets/{asset_uid}
url: developer-apis/content-management-api-requests/generate-permanent-asset-url
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Generate permanent asset URL

**PUT** `/assets/{asset_uid}`

The Generate Permanent Asset URL request allows you to generate a permanent URL for an asset. This URL remains constant irrespective of any subsequent updates to the asset.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Warning**: You can generate the permanent asset URL and update the asset details only once. Once done, you can no longer make changes to the permanent URL.

In the request body, you need to pass the permanent URL in the following format:

```
{
    "asset": {
        "permanent_url": "https://images.contentstack.io/v3...{stack_api_key}/{asset_uid}/{unique_identifier}"

    }
}
```

In the above URL, you can pass any unique identifier (slug) that suits your requirement.

Another way to generate a permanent URL for an asset is to pass the URL as a form-data parameter, i.e., asset[permanent_url]. In that case, the Content-Type in the **Headers** section must be changed from application/json to multipart/form-data. You can provide the permanent URL of your choice (along with a slug) as a value for this parameter, for example:

```
https://{base_URL}/v3/assets/{stack_api_key}/{asset_uid}/{slug}
```

## URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset for which you want to generate a permanent URL. Use the [Get All Assets](../../../../api-detail/content-management-api.md#get-all-assets) request to get the UID of the asset.
  Default: `your_asset_uid`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter “application/json” to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
    "asset": {
        "permanent_url": "https://images.contentstack.io/v3/assets/{stack_api_key}/{asset_UID}/sample-slug.jpeg"
         
    }
}
```

## Sample Response

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

