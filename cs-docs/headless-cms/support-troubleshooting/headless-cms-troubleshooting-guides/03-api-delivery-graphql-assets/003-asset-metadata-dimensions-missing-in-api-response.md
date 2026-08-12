---
title: "Asset Metadata (Dimensions) Missing in API Response"
description: "Asset Metadata (Dimensions) Missing in API Response"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/003-asset-metadata-dimensions-missing-in-api-response
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs60ce43ce962c1b1d
---

# Asset Metadata (Dimensions) Missing in API Response

Image width and height values are not included in the Delivery API response, even though they appear in the UI.

**Root Cause**

The Delivery API does not return asset dimensions by default to optimize response size. The include\_dimension=true query parameter must be explicitly provided.

**Resolution**

-   Add include\_dimension=true to the Delivery API request.
-   Re-fetch the entry or asset.

The API response includes width and height under the asset metadata.
