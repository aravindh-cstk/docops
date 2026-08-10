---
title: "Asset Thumbnails Duplicating When Scrolling in Grid View"
description: "Asset Thumbnails Duplicating When Scrolling in Grid View"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/38-asset-thumbnails-duplicating-when-scrolling-in-grid-view
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csca0165b6a14fe0ed
---

# Asset Thumbnails Duplicating When Scrolling in Grid View

In the Assets library’s thumbnail/grid view, assets duplicate and reappear as the user scrolls. The same asset appears multiple times in the grid, making it difficult to manage assets and identify what is actually in the library.

**Root Cause**

This was a platform-level bug introduced when a fix for missing asset pagination (assets beyond 100 not shown) was deployed. The fix for pagination inadvertently caused assets to duplicate as users scrolled in the thumbnail view. A follow-up fix was subsequently deployed to address the duplication behavior.

**Resolution**

A platform fix has been deployed. The asset library grid now loads unique assets smoothly without duplication when scrolling.

1.  After the fix, navigate to the Assets library thumbnail/grid view, scroll through the assets, and confirm each asset appears only once.
2.  If duplication still occurs after the fix deployment, contact Contentstack Support with the stack API key and a screen recording of the duplicating behavior.

After the fix, confirm the Assets grid view scrolls continuously without duplicating assets, and all assets are accessible without redundant entries.
