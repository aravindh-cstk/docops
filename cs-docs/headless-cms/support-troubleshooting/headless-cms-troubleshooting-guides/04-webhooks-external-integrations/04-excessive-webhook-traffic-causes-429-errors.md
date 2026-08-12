---
title: "Excessive Webhook Traffic Causes 429 Errors"
description: "Excessive Webhook Traffic Causes 429 Errors"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/04-excessive-webhook-traffic-causes-429-errors
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs11edc9e95a0d0156
---

# Excessive Webhook Traffic Causes 429 Errors

Webhook executions fail with **HTTP 429** responses when Contentstack attempts to deliver events to the configured endpoint.

**Root Cause**

In this case, the 429 is returned by the customer’s receiving system, not by Contentstack. This typically happens when the receiving endpoint enforces its own rate limits, retry loops cause traffic spikes, or multiple webhooks fire simultaneously (bulk publish, branch merge, etc.).

**Resolution**

-   Review webhook execution logs.
-   Check receiving system rate limits.
-   Implement:
    -   Idempotency handling
    -   Queue-based processing
    -   Throttling on the receiving system
-   Avoid webhook recursion or retry storms.

Confirm if:

-   Webhook delivery logs show successful (2xx) responses.
-   No further 429 responses from receiving endpoint.
-   No excessive retry attempts.
