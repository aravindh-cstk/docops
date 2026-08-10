---
title: "Rate Limiting During Stack Migration - Pagination and Backoff Strategy"
description: "Rate Limiting During Stack Migration - Pagination and Backoff Strategy"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/13-rate-limiting-during-stack-migration-pagination-and-backoff-strategy
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: csb68ce2f10b93509d
---

# Rate Limiting During Stack Migration - Pagination and Backoff Strategy

A migration script moving content between stacks fails partially due to rate limit errors. Each entry has multiple localized versions, generating a high volume of API requests that causes intermittent 429 errors for some locale versions.

**Root Cause**

Migration scripts that process entries sequentially with locale loops generate many API calls in rapid succession. With 17 locale versions per entry, even a modest entry count quickly exhausts the rate limit.

**Resolution**

1.  Implement a rate-aware migration loop: after each API call, check the X-RateLimit-Remaining header. If it falls below a safe threshold (for example, 5), add a pause before the next request.
2.  Use exponential backoff with jitter on 429 responses: on receiving a 429, wait the value specified in the Retry-After response header (if present), otherwise use an exponential backoff.
3.  Process locales in batches rather than all at once for each entry. For example, process 5 entries across 3 locales before moving to the next batch.
4.  Run the migration during off-peak hours to reduce competition with editorial traffic.
5.  If the migration volume genuinely requires a higher throughput, contact Contentstack Support in advance to request a temporary rate limit increase for the migration window.

After implementing rate-aware pagination and backoff, re-run the migration and confirm all locale versions are successfully migrated without 429 failures.
