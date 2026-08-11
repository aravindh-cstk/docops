---
title: "Asset Data Returns Null for Variant Entries Using Image Preset Picker"
description: "Asset Data Returns Null for Variant Entries Using Image Preset Picker"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/02-experiences-variant-delivery/06-asset-data-returns-null-for-variant-entries-using-image-preset-picker
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: csf5fdf80840d98802
---

# Asset Data Returns Null for Variant Entries Using Image Preset Picker

When an asset is attached to a variant entry using the Image Preset Picker Marketplace extension inside a global field, the CDA response returns null for that asset. The same asset attached using a standard file field returns correctly.

**Root Cause**

This was a known platform bug specific to the combination of the Image Preset Picker Marketplace extension, global fields, and personalization variant entries. The issue was reproduced internally and tracked in engineering. Re-saving and re-publishing the entry did not resolve the issue prior to the fix.

**Resolution**

1.  If you encounter null asset data for variant entries using the Image Preset Picker in a global field, verify that your Contentstack environment is running the latest platform version, as a fix has been deployed.
2.  As a temporary workaround while awaiting the fix, replace the Image Preset Picker field with a standard file field to attach the asset, which returns correctly in the CDA response.
3.  After the fix is confirmed as deployed in your region, re-test the variant entry with the Image Preset Picker in a global field to confirm asset data is returned correctly.

If null asset data persists after the platform fix is deployed, open a support case with your Stack UID, Content Type UID, and Entry UID for further investigation.
