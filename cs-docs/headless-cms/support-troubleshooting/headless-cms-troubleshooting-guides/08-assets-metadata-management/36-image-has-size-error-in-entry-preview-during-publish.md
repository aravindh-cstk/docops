---
title: "‘Image Has Size Error’ in Entry Preview During Publish"
description: "‘Image Has Size Error’ in Entry Preview During Publish"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/36-image-has-size-error-in-entry-preview-during-publish
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs5d7d2faa2ab6a15d
---

# ‘Image Has Size Error’ in Entry Preview During Publish

Images in entries are flagged with an ‘image has size error’ message and fail to render correctly in entry previews. The error appears specifically during publishing operations while saving entries works as expected. The issue occurs without any changes to the content model or image dimension requirements.

**Root Cause**

The issue was caused by an inconsistency in image object resolution during the publish process via UI APIs, particularly in non-main branches. When the apply\_draft option was enabled during publish, the file field object was not returned correctly, resulting in incomplete image metadata during validation. Due to the missing metadata, the system incorrectly flagged valid images with a size error and failed to render previews properly.

**Resolution**

A platform fix has been deployed to ensure proper resolution of image/file field objects and restore complete metadata during publish validation.

1.  After the fix, clear browser cache and attempt to publish an entry with images - confirm the ‘image has size error’ no longer appears and images render correctly in both preview and published views.
2.  If the error persists after the fix deployment, contact Contentstack Support with the affected entry UIDs, content type, and stack details.

After the platform fix, verify that image thumbnails display correctly in entry previews and that publishing entries with images completes without size validation errors.
