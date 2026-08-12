---
title: "Asset Dimensions Not Returned for IFile References - Use include_dimension and include_all"
description: "Asset Dimensions Not Returned for IFile References - Use include_dimension and include_all"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/24-asset-dimensions-not-returned-for-ifile-references-use-include-dimension-and-include-all
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs1b78dc501356fecd
---

# Asset Dimensions Not Returned for IFile References - Use include_dimension and include_all

Image dimensions (width and height) are not returned in the CDA response when fetching entries that contain IFile references, even though the dimensions are visible in the Contentstack entry UI.

**Root Cause**

The Content Delivery API excludes asset dimension data from responses by default to keep payload size small. Two parameters must be explicitly included for dimension data to appear: include\_dimension=true to enable dimension output, and include\_all=true to ensure the full asset metadata within IFile references is resolved.

**Resolution**

1.  Add include\_dimension=true to the CDA request query parameters.
2.  Add include\_all=true to the same request to ensure IFile reference metadata is fully resolved.
3.  Example: GET /v3/content\_types/{uid}/entries?include\_all=true&include\_dimension=true
4.  Re-fetch the entry and confirm the dimensions object containing height and width appears in the asset field of the response.

After adding both parameters, execute the API request and verify that the asset field in the response includes a dimensions object with height and width values.
