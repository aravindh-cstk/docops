---
title: "Assets and Asset Folders Not Visible in Newly Created Branches"
description: "Assets and Asset Folders Not Visible in Newly Created Branches"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/33-assets-and-asset-folders-not-visible-in-newly-created-branches
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csd9152a272ebc39b0
---

# Assets and Asset Folders Not Visible in Newly Created Branches

After creating a new branch, assets and asset folders are not visible in the Assets section. The same assets are accessible via API and appear in the activity log.

**Root Cause**

This is a platform UI bug. Asset and folder visibility in new branches was not correctly initialized in the UI rendering layer, making them appear absent even though the data exists.

**Resolution**

1.  Wait briefly and refresh the Assets section - in some cases the visibility resolves after branch initialization completes.
2.  Contact Contentstack Support with the stack API key and branch name. A platform fix has been deployed for this issue.

After the platform fix is confirmed, create a test branch and verify assets are immediately visible.
