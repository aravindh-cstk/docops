---
title: "Content Type Limit Counts Include All Branches"
description: "Content Type Limit Counts Include All Branches"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/26-content-type-limit-counts-include-all-branches
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs74a744799c1c7e4c
---

# Content Type Limit Counts Include All Branches

The dashboard reports a much higher content type count than the actual number of unique content types managed. The organization is approaching the plan limit.

**Root Cause**

Content type limits are counted across all branches. Each branch maintains its own copy. A stack with 50 unique content types across 6 branches counts as 300 against the limit.

**Resolution**

1.  Review active branches and delete any development or test branches that are no longer needed.
2.  Keep branch count minimal to control the content type total.
3.  Contact your Customer Success Manager to clarify how the plan’s content type limit is calculated.

After deleting unused branches, verify the content type count in the dashboard decreases proportionally.
