---
title: "Adding Multiple Assets to a Single Entry Field"
description: "Adding Multiple Assets to a Single Entry Field"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/07-adding-multiple-assets-to-a-single-entry-field
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csd42ef36056a7b2f1
---

# Adding Multiple Assets to a Single Entry Field

An editor needs to attach multiple assets (for example, images for a photo album) to a single entry. The standard File field only allows one asset to be attached.

**Root Cause**

By default, a File field in Contentstack allows a single asset to be attached. To support multiple assets in one field, the Multiple option must be enabled in the field’s Advanced Properties.

**Resolution**

1.  Navigate to the content type in the Content Type Builder.
2.  Select the File field where multiple assets should be allowed.
3.  Open the field’s Advanced Properties.
4.  Enable the Multiple toggle and set the maximum number of files to allow (for example, 10 for a photo album).
5.  Save the content type.
6.  Editors can now attach multiple assets within that single File field on the entry.

After enabling Multiple on the File field, open a test entry and confirm multiple assets can be uploaded or selected within the field.
