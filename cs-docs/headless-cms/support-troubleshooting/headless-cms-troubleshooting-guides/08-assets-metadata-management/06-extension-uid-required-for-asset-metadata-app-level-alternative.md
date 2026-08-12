---
title: "extension_uid Required for Asset Metadata - App-Level Alternative"
description: "extension_uid Required for Asset Metadata - App-Level Alternative"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/06-extension-uid-required-for-asset-metadata-app-level-alternative
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs3b9be9529f5d4b1c
---

# extension_uid Required for Asset Metadata - App-Level Alternative

The CMA documentation requires extension\_uid when creating metadata for assets. The customer wants to use an app (not an extension) for their metadata workflow and is unclear whether this is supported.

**Root Cause**

The metadata feature was originally designed for extensions, which is why extension\_uid appears as a required field in the documentation. Each extension or app has its own metadata namespace, which prevents collision between different integrations. Apps can also use metadata, but must pass the app UID in place of the extension UID.

**Resolution**

1.  When using an app instead of an extension, pass the app UID as the value for extension\_uid in the metadata creation request.
2.  The metadata API treats app UIDs and extension UIDs interchangeably in the namespace field.
3.  Confirm the app UID in the Contentstack Developer Hub under the app's settings.
4.  Include the app UID in the metadata request body: { "metadata": { "extension\_uid": "<your\_app\_uid>", "key": "creator\_id", "value": "12345" } }

After using the app UID in the metadata request, confirm the metadata is created and retrievable via the asset's metadata endpoint.
