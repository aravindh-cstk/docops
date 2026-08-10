---
title: "Configuring Email Notifications for Webhook Disablement"
description: "Configuring Email Notifications for Webhook Disablement"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/17-configuring-email-notifications-for-webhook-disablement
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs4146dc2d4f75b74a
---

# Configuring Email Notifications for Webhook Disablement

When a webhook is disabled by the circuit breaker, there is no immediate alert. Editors and developers discover the issue only after content fails to reach downstream systems. A mechanism is needed to proactively notify the team when a webhook is disabled.

**Root Cause**

Contentstack automatically sends email notifications when a webhook is disabled by the circuit breaker, but the notification email address must be explicitly configured in the webhook settings. If no email is configured, no notification is sent.

**Resolution**

1.  Open the webhook configuration in the Contentstack dashboard.
2.  Locate the Notification Email field in the webhook settings.
3.  Enter the email address (or addresses) of the team members who should be notified when the webhook is disabled.
4.  Save the webhook configuration.

After configuring the notification email, disable and re-enable the webhook in test mode to confirm the email notification is delivered. Note that Slack notifications are not natively supported - for Slack alerting, configure a webhook to a Slack-to-email bridge or implement a custom monitoring solution using the webhook execution logs API.

Note: Proactive monitoring of webhook health before the circuit breaker triggers is not natively available in Contentstack. The circuit breaker only fires after a threshold of failures has already occurred. For pre-failure alerting, use the following approaches:

-   Monitor your receiving endpoint’s error logs and set up alerts on the endpoint side for 5xx responses.
-   Use AWS CloudWatch, Azure Monitor, or equivalent infrastructure-level tooling to alert on HTTP failure rates from the endpoint.
-   Implement a custom health-check script that periodically queries the Contentstack webhook execution logs API and alerts on recent failures before they accumulate to the circuit breaker threshold.
