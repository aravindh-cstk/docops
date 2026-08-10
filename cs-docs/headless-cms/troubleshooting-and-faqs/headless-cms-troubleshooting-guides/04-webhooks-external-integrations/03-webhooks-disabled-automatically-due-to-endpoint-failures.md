---
title: "Webhooks Disabled Automatically Due to Endpoint Failures"
description: "Webhooks Disabled Automatically Due to Endpoint Failures"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/03-webhooks-disabled-automatically-due-to-endpoint-failures
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs4ca483573bd3e55b
---

# Webhooks Disabled Automatically Due to Endpoint Failures

Webhooks are automatically disabled after repeated failures (e.g., multiple non-2xx responses). Failures include timeouts, 5xx responses, and unreachable endpoints.

**Root Cause**

Circuit breaker behavior disables unhealthy webhooks to protect the platform.

**Resolution**

-   Manually re-enable the webhook.
-   Configure email notifications for future alerts.

The webhook remains active after recovery.
