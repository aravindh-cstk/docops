---
title: "Rate Limit Errors During cm:stacks:clone"
description: "Rate Limit Errors During cm:stacks:clone"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/01-authentication-network-node-js-environments/07-rate-limit-errors-during-cm-stacks-clone
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: cs27ed4925e12309e6
---

# Rate Limit Errors During cm:stacks:clone

Rate limit exceeded errors occurred during cm:stacks:clone, resulting in an incomplete clone.

**Root Cause**

Export and import requests during clone already retry automatically: up to 3 attempts, with a randomized 3-8 second delay, on 401, 408, 422, and 429 responses. A rate limit error means these retries were exhausted under sustained throttling, not that no retry was attempted. Clone has no checkpoint or resume mechanism, so once retries are exhausted the whole clone stops. Cloning a subset of locales is not supported; the type flag only chooses structure-only vs. structure-with-content. Proxy-related connection errors (ECONNREFUSED, ETIMEDOUT, ENOTFOUND) are not retried and can produce a failure that looks identical to an exhausted rate limit.

**Resolution**

1.  Review the output for the specific module where export or import failed; the error means retries were already exhausted.
2.  If fewer locales are needed, clone all locales, then manually remove the unwanted ones. There is no flag to clone a subset directly.
3.  Space out large clone operations or run them during lower API-traffic periods.
4.  If failures happen immediately rather than after several seconds, check for a proxy configuration; proxy connection errors are not retried.
