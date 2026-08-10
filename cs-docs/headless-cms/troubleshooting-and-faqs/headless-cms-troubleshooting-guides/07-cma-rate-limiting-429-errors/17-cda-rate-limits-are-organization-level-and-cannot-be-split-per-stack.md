---
title: "CDA Rate Limits Are Organization-Level and Cannot Be Split Per Stack"
description: "CDA Rate Limits Are Organization-Level and Cannot Be Split Per Stack"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/17-cda-rate-limits-are-organization-level-and-cannot-be-split-per-stack
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs80e1257f81461ea1
---

# CDA Rate Limits Are Organization-Level and Cannot Be Split Per Stack

Multiple stacks within the same organization share an API rate limit. One stack consuming a large proportion of the quota causes 429 errors on other stacks. A request is made to reserve or guarantee a fixed percentage of the rate limit per stack.

**Root Cause**

Contentstack CDA rate limits are enforced at the organization level, not per stack. All stacks within an organization share the same rate limit pool. There is no mechanism to reserve, allocate, or guarantee a fixed portion of the rate limit to an individual stack.

**Resolution**

1.  Implement application-side request throttling for each stack independently to prevent any single stack from consuming a disproportionate share of the organization quota.
2.  Use the Product Analytics dashboard to identify which stacks are generating the highest request volumes and apply targeted throttling.
3.  Stagger high-volume operations (deployments, builds, releases) across stacks to avoid simultaneous quota consumption.
4.  Contact Contentstack Support or your CSM if the aggregate organization limit consistently needs to be higher to support all stacks.

After implementing per-stack throttling, monitor the overall organization rate limit usage and confirm that no single stack is causing 429 errors that affect other stacks.
