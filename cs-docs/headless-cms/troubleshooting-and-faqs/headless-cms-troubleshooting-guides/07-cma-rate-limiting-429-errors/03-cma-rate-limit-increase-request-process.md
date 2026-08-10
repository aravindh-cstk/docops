---
title: "CMA Rate Limit Increase Request Process"
description: "CMA Rate Limit Increase Request Process"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/03-cma-rate-limit-increase-request-process
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: csf3f50b3b742d4cf2
---

# CMA Rate Limit Increase Request Process

A customer is receiving 429 errors on CMA requests and wants to increase the CMA rate limit. It is unclear whether this can be done via a support ticket.

**Root Cause**

CMA rate limit increases are commercial decisions that involve changes to the organization's plan. Support cannot unilaterally increase CMA rate limits, these requests must be handled by the Customer Success Manager (CSM) who manages the account's commercial agreement.

**Resolution**

1.  Contact your assigned Customer Success Manager and request a CMA rate limit increase, specifying the current limit and the target limit needed.
2.  While awaiting the increase, implement the following best practices to reduce CMA usage:

-   Reduce concurrent requests; avoid sending multiple CMA calls simultaneously from the same process.
-   Add delays between requests in bulk or automated workflows.
-   Cache CMA responses where the data does not change frequently.
-   Use the SDK's built-in retry logic or implement custom retry-with-backoff.

4.  Once the CSM confirms the limit has been increased, verify using GET /v3/organizations/<org\_uid>/plan.

After the CSM-approved increase is applied, re-run the previously failing operations. If 429 errors no longer occur at the previous volume, the increased limit is active.
