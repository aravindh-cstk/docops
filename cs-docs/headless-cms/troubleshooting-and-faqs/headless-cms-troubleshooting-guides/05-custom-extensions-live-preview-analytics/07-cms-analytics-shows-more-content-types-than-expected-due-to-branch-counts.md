---
title: "CMS Analytics Shows More Content Types Than Expected Due to Branch Counts"
description: "CMS Analytics Shows More Content Types Than Expected Due to Branch Counts"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/07-cms-analytics-shows-more-content-types-than-expected-due-to-branch-counts
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs521f0c52b51d686e
---

# CMS Analytics Shows More Content Types Than Expected Due to Branch Counts

The Stack Dashboard shows a content type count (for example, 333) that far exceeds the actual number of unique content types in the stack (for example, 50). The inflated count is approaching the plan limit, raising billing concerns.

**Root Cause**

CMS Analytics counts content types across all branches in the stack, not just the main branch. Each branch contributes its own copy of the content types to the total count. A stack with 50 unique content types spread across 6 branches shows 300 in Analytics (50 × 6). This aggregated number is used for Analytics display purposes and reflects the total addressable content type count across the entire stack.

**Resolution**

This behavior is by design and does not necessarily indicate a billing problem. Clarify with Contentstack whether plan limits are enforced per-branch or based on unique content types across all branches:

1.  Contact your Customer Success Manager or Contentstack Support to clarify how content type limits are counted for billing in your specific plan.
2.  To reduce the count if needed: delete unused branches that are no longer needed, which removes their content type copies from the total count.
3.  Note: the main branch content type count is the authoritative number for editorial purposes. The aggregated count in Analytics is for platform-wide monitoring.

After discussing the counting methodology with your CSM, confirm whether any action is needed to stay within plan limits.
