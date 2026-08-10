---
title: "SDK Timeout on Large Asset Content Fetching"
description: "SDK Timeout on Large Asset Content Fetching"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/04-caching-sync-performance-limits/01-sdk-timeout-on-large-asset-content-fetching
doc_type: faq
_cms_section_uid: cs2fbb946b868a690a
_cms_faq_uid: cs120085e6830f294c
---

# SDK Timeout on Large Asset Content Fetching

Large payloads (many assets/references) can trigger request timeout failures.

**Root Cause**

Single requests attempting to fetch massive payloads (e.g., 100+ deep references) exceed the default network timeout limits of the SDK or environment.

**Resolution**

1.  Reduce payload size with pagination (limit/skip) and smaller batches.
2.  Increase SDK timeout only as needed for network conditions.
3.  Split deep data hydration into phased requests instead of one oversized query.

const

result =

await

stack .

contentType

(

'article'

) .

entry

() .

query

() .

limit

(

20

) .

skip

(

0

) .

find

();

Paginated requests return 200 consistently with no timeout error. Escalate if timeouts persist on small paginated batches; include region, timeout setting, and stack UID.
