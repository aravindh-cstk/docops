---
title: "Visual Builder Experiences Failing to Apply Due to CDA Personalization Limits"
description: "Visual Builder Experiences Failing to Apply Due to CDA Personalization Limits"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/04-visual-builder-preview/03-visual-builder-experiences-failing-to-apply-due-to-cda-personalization-limits
doc_type: faq
_cms_section_uid: cs14c857a91fb461be
_cms_faq_uid: cs25b1d511cb1d8ee8
---

# Visual Builder Experiences Failing to Apply Due to CDA Personalization Limits

Active experiences created in the Visual Builder may fail to apply to a live website if the project exceeds the established personalization limits within the Content Delivery API (CDA). This results in only top-priority variants being displayed, while others are ignored during delivery.

**Root Cause**

The CDA has a hard cap on the number of active experiences allowed per request. Every experience passed in a request counts toward this limit (previously set to 5), regardless of whether a specific entry has a personalized variant defined for it. When a project contains more experiences than this cap, the additional variants are not rendered.

**Resolution**

1.  Review your project configuration to determine the total number of active experiences requested via the CDA.
2.  Confirm if the total number of experiences exceeds the current system limit of 5.
3.  Submit a request to Contentstack support to increase the personalization limit for your specific project (e.g., increasing the limit to 10).

Once the limit has been increased, reload the target page. If all active experiences are correctly evaluated and visible on the site and within the Visual Builder, the issue is resolved.
