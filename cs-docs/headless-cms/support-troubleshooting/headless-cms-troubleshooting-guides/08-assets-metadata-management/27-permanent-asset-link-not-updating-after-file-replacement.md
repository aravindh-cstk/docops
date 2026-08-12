---
title: "Permanent Asset Link Not Updating After File Replacement"
description: "Permanent Asset Link Not Updating After File Replacement"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/27-permanent-asset-link-not-updating-after-file-replacement
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs38c4b827a9bf4b6c
---

# Permanent Asset Link Not Updating After File Replacement

A permanent (canonical) asset link continues to serve the old file after the asset has been replaced in the CMS. The updated file is visible in the CMS but the permanent URL still returns the original version.

**Root Cause**

When an asset is replaced, the permanent link should update to reflect the new file. A platform-level issue prevented the permanent link from correctly resolving to the replacement file. This was identified as an engineering defect and required a backend fix.

**Resolution**

1.  If the permanent link is not updating after asset replacement, contact Contentstack Support and report the affected asset UID and permanent link URL.
2.  Engineering will investigate and apply the required fix to restore correct permanent link resolution.
3.  As an interim workaround, use the versioned asset URL returned in the CDA response, which will correctly point to the latest published version.

After engineering applies the fix, confirm by requesting the permanent link URL and verifying it returns the replacement file content.
