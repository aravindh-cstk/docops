---
title: "Webhooks Do Not Consume Delivery API Rate Limits"
description: "Webhooks Do Not Consume Delivery API Rate Limits"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/52-webhooks-do-not-consume-delivery-api-rate-limits
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs8315223535579450
---

# Webhooks Do Not Consume Delivery API Rate Limits

A customer asks whether webhook triggers consume their Delivery API rate limit. They are concerned that a high volume of webhook events (from publish, unpublish, delete, and workflow operations) will push their application toward the Delivery API rate limit.

**Root Cause**

Webhooks are processed internally by the Contentstack platform and do not consume the Delivery API rate limit. Each webhook trigger counts as a Management API operation internally, but the outbound webhook delivery itself is a separate system from the Delivery API rate limit budget.

**Resolution**

To clarify webhook rate limit behavior:

-   Webhooks do not consume Delivery API rate limits simply by existing or firing.
-   The outbound webhook delivery (Contentstack sending the HTTP POST to the endpoint) does not count against the CDA or CMA rate limit.
-   High webhook volumes do contribute to overall system load. Very high volumes of events (for example, from a runaway automation making thousands of CMA PUT requests per hour) can create webhook queue pressure and affect delivery latency.
-   If a webhook receiver makes Contentstack API calls upon receiving events (for example, fetching the updated entry from the CDA), those API calls do count against the Delivery API rate limit. Monitor those calls and apply caching to reduce unnecessary lookups.

If a webhook is continuously triggering due to a high volume of API updates (for example, an automation making many CMA PUT requests), review the automation’s logic to reduce unnecessary updates rather than treating it as a rate limit issue.
