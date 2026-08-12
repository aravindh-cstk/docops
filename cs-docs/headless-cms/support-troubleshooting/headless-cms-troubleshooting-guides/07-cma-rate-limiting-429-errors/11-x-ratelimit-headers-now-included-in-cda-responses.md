---
title: "X-RateLimit Headers Now Included in CDA Responses"
description: "X-RateLimit Headers Now Included in CDA Responses"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/11-x-ratelimit-headers-now-included-in-cda-responses
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs04fd845c02964466
---

# X-RateLimit Headers Now Included in CDA Responses

CDA API responses are returning rate limit headers (X-RateLimit-Limit, X-RateLimit-Remaining) that were not observed before. The customer asks whether this is expected and why it was not documented earlier.

**Root Cause**

X-RateLimit headers have been available in CDA responses for some time. They were previously associated primarily with the CMA, which led to the assumption that CDA responses did not include them. The headers are now consistently returned in CDA responses and are useful for monitoring consumption against the rate limit.

**Resolution**

This is expected behavior. Incorporate the headers into monitoring and throttling logic:

1.  X-RateLimit-Limit: the maximum number of requests allowed per second for the organization.
2.  X-RateLimit-Remaining: the number of requests remaining in the current rate limit window.
3.  When X-RateLimit-Remaining approaches zero, reduce request frequency or queue requests until the window resets.

Use X-RateLimit-Remaining as an early warning signal to reduce request rates proactively before 429 errors occur.
