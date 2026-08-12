---
title: "Variant Workflow Changes Not Triggering Webhook Events"
description: "Variant Workflow Changes Not Triggering Webhook Events"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/22-variant-workflow-changes-not-triggering-webhook-events
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs3b6656067faaf096
---

# Variant Workflow Changes Not Triggering Webhook Events

Testing a translation webhook setup reveals that variant workflow stage changes do not trigger webhook events. It is unclear whether this is expected behavior or a configuration issue.

**Root Cause**

Contentstack webhooks do support variant-related events, but the webhook must be explicitly configured to listen for variant events. If the webhook is configured only for standard entry events (create, update, publish), variant workflow events will not trigger it.

**Resolution**

1.  Open the webhook configuration in the Contentstack dashboard.
2.  Under the Events section, ensure that the Variants event type is selected in addition to any standard entry events.
3.  Refer to the Contentstack Webhook Events documentation for the full list of supported variant-related event types and their payload formats.
4.  Save the updated webhook configuration.
5.  Trigger a variant workflow stage change and confirm the webhook event fires with the expected payload.

After updating the webhook event configuration to include variant events, change a variant’s workflow stage and verify the webhook payload is received at the endpoint.
