---
title: "uploadAsset"
description: "The \"Upload asset\" request uploads an asset file to your stack. To upload assets from your local system to Contentstack and manage their details, you need to use the following \"form-data\" parameters:"
url: "https://www.contentstack.com/copy-of-java-management-asset-uploadasset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## uploadAsset

The "Upload asset" request uploads an asset file to your stack.

To upload assets from your local system to Contentstack and manage their details, you need to use the following "form-data" parameters:

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filePath | String | Yes | — | The file path. |
| description | String | Yes | — | The description of the asset file. |
| upload | JPG, GIF, PNG, XML, WebP, BMP, TIFF, SVG, and PSD | Yes | — | Select the input type as 'File.' Then, browse and select the asset file that you want to import. |
| parent_uid | String | No | — | If needed, assign a parent folder to your asset by passing the UID of the parent folder. |
| title | String | No | — | Enter a title for your uploaded asset. |
| tags | String | No | — | Assign a specific tag(s) to your uploaded asset. |
| relative_urls | Boolean | No | — | Set this to 'true' to display the relative URL of the asset. |
| include_dimension | Boolean | No | — | Set this to 'true' to include the dimensions (height and width) of the image in the response. |

Returns:
Type
Call

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset();
Call<ResponseBody> response = asset.uploadAsset("filePath", "description").execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response) 
}
```
