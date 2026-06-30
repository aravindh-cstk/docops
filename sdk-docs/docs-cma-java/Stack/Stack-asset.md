---
title: "asset"
description: "Assets refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use."
url: "https://www.contentstack.com/java-management-stack-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## asset

Assets refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| assetUid | String | Yes | — | The asset Uid. |
| folder | String | No | — | Enter either the UID of a specific folder to get the assets of that folder or enter ‘cs_root’ to get all assets and their folder details from the root folder. Example:bltd899999999. |
| include_folders | Boolean | No | — | Set this parameter to ‘true’ to include the details of the created folders along with the details of the assets. Example:true. |
| environment | String | No | — | Enter the name of the environment to retrieve the assets published on them. You can enter multiple environments. Example: production |
| version | Integer | No | — | Specify the version number of the asset that you want to retrieve. If the version is not specified, the details of the latest version will be retrieved. Example:1 |
| include_publish_details | Boolean | No | — | Enter 'true' to include the published details of the entry. Example:true |
| include_count | Boolean | No | — | Set this parameter to 'true' to include the total number of assets available in your stack in the response body. |
| relative_urls | Boolean | No | — | Set this to 'true' to display the relative URL of the asset. |
| asc_field_uid | String | No | — | Enter the unique ID of the field for sorting the assets in ascending order by that field. Example:created_at |
| desc_field_uid | String | No | — | Enter the unique ID of the field for sorting the assets in descending order by that field. Example:file_size |
| include_branch | Boolean | No | — | Set this to 'true' to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides. Example:false |

Returns:
Type
Asset

```
import contentstack; 

Contentstack contentstack = new Contentstack.Builder().build();
Asset asset = contentstack.stack().asset("assetUid");
```
