---
title: "CMA Rate Limit Is Org-Level, Not Per Stack"
description: "CMA Rate Limit Is Org-Level, Not Per Stack"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/06-cma-rate-limit-is-org-level-not-per-stack
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: csa87642bdee632d75
---

# CMA Rate Limit Is Org-Level, Not Per Stack

A team is hitting CMA rate limits but the stack they are working on appears to have low traffic. They are unsure whether rate limits apply per stack or across the entire organization.

**Root Cause**

CMA rate limits in Contentstack are applied at the organization level and are shared across all stacks within the organization. A single heavily-used stack consuming most of the rate limit budget will cause other stacks in the same organization to also receive 429 errors, even if those stacks have low individual activity.

**Resolution**

1.  Monitor CMA traffic across all stacks in the organization, not just the stack experiencing 429 errors.
2.  Identify which stacks or integrations are consuming the most CMA requests by reviewing the Analytics dashboard or requesting CMA logs from Contentstack Support.
3.  Implement exponential backoff and retry logic across all CMA integrations to handle 429 responses gracefully.
4.  Stagger high-volume CMA operations (bulk migrations, automated publishing scripts) to different time windows so they do not compete with editorial activity.
5.  If the organization’s CMA rate limit is consistently insufficient for the workload, contact the Customer Success Manager to discuss a rate limit increase.

After identifying the high-consumption stacks and staggering their operations, monitor for 429 reduction across the organization.
