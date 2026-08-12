---
title: "429 Errors After Large Asset or Entry Publish - Publish Triggers CDA Revalidation Traffic"
description: "429 Errors After Large Asset or Entry Publish - Publish Triggers CDA Revalidation Traffic"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/09-429-errors-after-large-asset-or-entry-publish-publish-triggers-cda-revalidation-traffic
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs08798e04c1a508b4
---

# 429 Errors After Large Asset or Entry Publish - Publish Triggers CDA Revalidation Traffic

Publishing a large batch of assets (for example, 12,000 assets) or a high-volume entry publish window is followed by a wave of HTTP 429 errors on the Delivery API. The customer asks whether the publish action and the 429 errors are related.

**Root Cause**

Yes - both large asset publishes and large entry publishes drive additional Delivery API and CDN revalidation traffic. When assets or entries are published, Contentstack sends cache invalidation signals to the CDN, prompting it to revalidate cached responses. If a large number of assets or entries are published simultaneously, the resulting cache invalidation and revalidation can temporarily spike request rates above the organization limit. This is compounded when GraphQL queries without CDN caching are in the traffic mix, as cache misses route directly to the origin.

**Resolution**

1.  Avoid publishing large asset batches in a single bulk operation during peak traffic hours. Stagger asset publishes into smaller batches (for example, 500–1000 assets at a time) separated by pauses.
2.  Schedule large asset publishes during off-peak periods to minimize overlap with production traffic.
3.  Implement retry logic with exponential backoff in applications to handle transient 429 responses after a large publish.
4.  If asset publish operations consistently generate revalidation traffic above the rate limit, contact Contentstack Support to review the rate limit allocation.

After staggering the asset publish, monitor the Delivery API error rate. If 429 errors do not recur at the same scale, the staggered approach is effective.
