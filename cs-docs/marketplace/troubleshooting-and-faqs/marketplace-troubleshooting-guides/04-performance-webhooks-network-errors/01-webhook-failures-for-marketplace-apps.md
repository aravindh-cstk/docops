---
title: "Webhook Failures for Marketplace Apps"
description: "Webhook Failures for Marketplace Apps"
url: /marketplace/troubleshooting-and-faqs/marketplace-troubleshooting-guides/04-performance-webhooks-network-errors/01-webhook-failures-for-marketplace-apps
doc_type: faq
_cms_section_uid: cs75f582f26c50a642
_cms_faq_uid: cs4979ce290f8eee1b
---

# Webhook Failures for Marketplace Apps

Marketplace apps that rely on webhooks (e.g., Slack or Microsoft Teams notifications) stop sending updates.

**Resolution**

1.  Check the **Webhook Logs** in the Stack settings for failed delivery attempts.
2.  Verify that the app's target endpoint is not blocking Contentstack's IP addresses.
3.  Ensure the webhook status is set to "Enabled".

Trigger a test event (like an entry publish) and check if the app receives the notification.
