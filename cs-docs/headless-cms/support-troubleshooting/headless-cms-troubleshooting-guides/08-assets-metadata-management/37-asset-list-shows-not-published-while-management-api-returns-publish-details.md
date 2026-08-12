---
title: "Asset List Shows ‘Not Published’ While Management API Returns Publish Details"
description: "Asset List Shows ‘Not Published’ While Management API Returns Publish Details"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/37-asset-list-shows-not-published-while-management-api-returns-publish-details
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs75faabebbeffaf5f
---

# Asset List Shows ‘Not Published’ While Management API Returns Publish Details

In a specific branch (for example, dev branch), the Assets list page shows the Publish Status as ‘Not Published’ for specific assets. However, when the same assets are opened in the asset detail view or fetched via the API with include\_metadata=true, they correctly show as published.

**Root Cause**

This is a search index inconsistency in the asset list view. The search layer that powers the Assets list page had a discrepancy - it was not reflecting the correct publish status that was stored in the primary data store. The API (which reads directly from the primary store) returned the correct status, while the UI list view (which reads from the search index) showed the stale ‘Not Published’ status.

**Resolution**

The search team identified and fixed the index discrepancy. Asset publish status in the list view should now match the actual published state.

1.  If the discrepancy is still observed (asset list shows Not Published but detail view and API show published), contact Contentstack Support with the affected asset UIDs, branch name, and stack API key. Engineering can trigger a targeted index refresh.

After the fix, navigate to the Assets list in the affected branch and confirm the Publish Status column correctly reflects the published state for previously mismatched assets.
