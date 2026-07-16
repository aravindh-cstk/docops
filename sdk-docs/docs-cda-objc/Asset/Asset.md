---
title: "Asset"
description: "The Asset class represents a single asset and fetches its metadata from the delivery API. Note: For files over 4 GB , `fileSize` may overflow due to 32-bit type limits and may not represent the actual file size."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/ios/reference/asset"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Asset

## Asset

The Asset class represents a single asset and fetches its metadata from the delivery API.

**Note:** For files **over 4 GB**, `fileSize` may overflow due to 32-bit type limits and may not represent the actual file size.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fileName | NSString | No | — | Returns the filename of the asset |
| fileSize | unsigned int | No | — | Returns the size of the asset file |
| fileType | NSString | No | — | Returns the file type of the asset |
| uid | NSString | No | — | Returns the unique identifier (UID) of the asset |
| url | NSString | No | — | Returns the URL of the asset |
| tags | NSArray<NSString*> | No | — | Retrieves the list of tags associated with the asset |
| createdAt | NSDate | No | — | Returns the date and time when the asset was created |
| createdBy | NSString | No | — | Returns the user who created the asset |
| updatedAt | NSDate | No | — | Returns the date and time when the asset was last updated |
| updatedBy | NSString | No | — | Returns the user who last updated the asset |
| deletedAt | NSDate | No | — | Returns the date and time when the asset was deleted |
| deletedBy | NSString | No | — | Returns the user who deleted the asset |
| properties | NSDictionary<NSString*id> | No | — | Returns the full asset object from the API response (all keys and values). The properties above are typed accessors for the main fields in this dictionary. |
