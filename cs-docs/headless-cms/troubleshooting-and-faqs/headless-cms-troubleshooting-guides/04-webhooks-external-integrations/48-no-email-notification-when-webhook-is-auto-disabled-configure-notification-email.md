---
title: "No Email Notification When Webhook Is Auto-Disabled - Configure Notification Email"
description: "No Email Notification When Webhook Is Auto-Disabled - Configure Notification Email"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/48-no-email-notification-when-webhook-is-auto-disabled-configure-notification-email
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csb7a7dbbb4ba84804
---

# No Email Notification When Webhook Is Auto-Disabled - Configure Notification Email

A webhook was automatically disabled by the circuit breaker after the endpoint became unhealthy, but no one on the team was notified. The issue was discovered only after downstream systems stopped receiving events.

**Root Cause**

Contentstack has a built-in mechanism to send email notifications when a webhook is disabled by the circuit breaker, but the notification email addresses must be explicitly configured in the webhook settings. If no email is configured, no notification is sent when the webhook auto-disables.

**Resolution**

1.  Navigate to Settings > Webhooks in the Contentstack dashboard.
2.  Open the webhook configuration for each critical webhook.
3.  Locate the ‘Email Addresses to Notify’ field and enter the email addresses of team members who should be alerted when the webhook is disabled.
4.  Save the webhook configuration.
5.  To test: manually disable the webhook and re-enable it to confirm the notification email configuration is working (or trigger a test disable through a failing endpoint).

After configuring notification emails, confirm the team receives an alert the next time the circuit breaker auto-disables the webhook, enabling faster response and recovery.
