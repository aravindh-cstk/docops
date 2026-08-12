---
title: "Asset Download Fails Due to Version Mismatch in Asset URL"
description: "Asset Download Fails Due to Version Mismatch in Asset URL"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/25-asset-download-fails-due-to-version-mismatch-in-asset-url
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csdaf7ef38ef044e81
---

# Asset Download Fails Due to Version Mismatch in Asset URL

Attempting to fetch or download an asset via the API fails. The asset exists in the CMS and has been published, but the request returns an error or an incorrect file.

**Root Cause**

The version number in the asset URL does not match the current version of the asset. When an asset is updated or replaced, its version number is incremented. If an older version number is hardcoded in the URL or stored in a reference, the request targets a version that may no longer exist or has been superseded.

**Resolution**

1.  Retrieve the latest version of the asset by fetching it via the CDA without a version parameter, which returns the currently published version by default.
2.  If using a hardcoded asset URL, update it to reflect the current version number retrieved from the asset’s API response.
3.  Avoid storing version-specific asset URLs in application code or external systems; instead, store the base asset UID and resolve the URL dynamically via the API.

After correcting the asset URL to use the current version number, retry the download request and confirm the asset is returned successfully.
