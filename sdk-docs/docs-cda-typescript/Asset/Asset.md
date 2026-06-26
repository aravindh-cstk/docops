---
title: "Asset"
description: "In Contentstack, any files (images, videos, PDFs, audio files, and so on) that you upload get stored in your repository for future use. This repository of uploaded files is called assets . The Asset method by default creates an object for all assets of a stack. To retrieve a single asset, specify its UID. Example: import contentstack from '@contentstack/delivery-sdk'; import { BaseAsset } from '@contentstack/delivery-sdk'; const stack = contentstack.stack({ apiKey: \"apiKey\", deliveryToken: \"deliveryToken\", environment: \"environment\" }); interface BlogAsset extends BaseAsset { title: string; description: string; url: string; // Add other custom properties as needed } async function fetchAssets() { try { const result = await stack.asset(asset_uid).fetch<BlogAsset[]>(); console.log('Assets Fetched:', assets); //Add your statements } catch (error) { console.error('Error fetching asset:', error); } } fetchAssets();"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/typescript/reference/contentstack/asset"
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

In Contentstack, any files (images, videos, PDFs, audio files, and so on) that you upload get stored in your repository for future use. This repository of uploaded files is called [assets](/docs/content-managers/author-content/about-assets).

The Asset method by default creates an object for all assets of a stack. To retrieve a single asset, specify its UID.

**Example:**

```
import contentstack from '@contentstack/delivery-sdk';
import { BaseAsset } from '@contentstack/delivery-sdk';

const stack = contentstack.stack({ apiKey: "apiKey", deliveryToken: "deliveryToken", environment: "environment" });

interface BlogAsset extends BaseAsset {
    title: string;
    description: string;
    url: string;
    // Add other custom properties as needed
}
async function fetchAssets() {
    try {
       const result = await stack.asset(asset_uid).fetch<BlogAsset[]>(); 
       console.log('Assets Fetched:', assets);
//Add your statements
    } catch (error) {
        console.error('Error fetching asset:', error);
    }
}
fetchAssets();
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| assetUid | string | No | — | UID of the asset |
