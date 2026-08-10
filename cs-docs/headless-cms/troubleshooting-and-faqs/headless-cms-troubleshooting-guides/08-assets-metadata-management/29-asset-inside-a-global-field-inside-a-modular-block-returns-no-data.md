---
title: "Asset Inside a Global Field Inside a Modular Block Returns No Data"
description: "Asset Inside a Global Field Inside a Modular Block Returns No Data"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/29-asset-inside-a-global-field-inside-a-modular-block-returns-no-data
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs5974ad185fcbf73d
---

# Asset Inside a Global Field Inside a Modular Block Returns No Data

A CDA request returns no data for an asset field when the asset is nested inside a global field that is itself part of a modular block. The structure is valid in the CMS and the REST API call is correctly formed.

**Root Cause**

The asset field is returning no data because the asset has not been published to the target environment. The CDA only returns published assets. An asset that exists in the CMS but has not been published is excluded from the response regardless of the nesting depth or structure.

**Resolution**

1.  Navigate to the Assets section in the CMS and locate the asset referenced within the global field.
2.  Publish the asset to the target environment.
3.  Re-run the CDA request and confirm that the asset field now returns the expected data.

After publishing the asset, execute the CDA request and verify that the asset data is now present in the modular block and global field response.
