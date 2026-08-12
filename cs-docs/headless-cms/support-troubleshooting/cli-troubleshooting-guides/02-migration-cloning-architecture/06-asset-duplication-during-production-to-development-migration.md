---
title: "Asset Duplication During Production to Development Migration"
description: "Asset Duplication During Production to Development Migration"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/02-migration-cloning-architecture/06-asset-duplication-during-production-to-development-migration
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs2d17f288a7316aa9
---

# Asset Duplication During Production to Development Migration

During migration from Production to Development:

-   Huge number of assets were duplicated
-   Assets were recreated instead of linked

**Root Cause**

Likely incorrect reference handling configuration during migration. Further investigation required CLI parameters and configuration, but no additional details were provided.

**Resolution**

1.  Request:
    -   CLI command used
    -   Migration configuration
    -   Reference handling flags
2.  Validate whether duplication resulted from full asset import instead of linking behavior.
