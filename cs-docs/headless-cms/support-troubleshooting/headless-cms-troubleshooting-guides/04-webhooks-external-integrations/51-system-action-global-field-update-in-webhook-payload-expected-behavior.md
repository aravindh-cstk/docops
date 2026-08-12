---
title: "system_action: GLOBAL_FIELD_UPDATE in Webhook Payload - Expected Behavior"
description: "system_action: GLOBAL_FIELD_UPDATE in Webhook Payload - Expected Behavior"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/51-system-action-global-field-update-in-webhook-payload-expected-behavior
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs9cc4389cfb174080
---

# system_action: GLOBAL_FIELD_UPDATE in Webhook Payload - Expected Behavior

A webhook payload for a specific entry contains the attribute system\_action: “GLOBAL\_FIELD\_UPDATE” while similar webhook events for other entries do not contain this attribute. The customer is unsure why this value is appearing.

**Root Cause**

The system\_action: “GLOBAL\_FIELD\_UPDATE” attribute is set in the webhook payload when a Global Field used within a Content Type is updated. When a Global Field’s schema is modified and saved, Contentstack propagates the schema change to all Content Types that reference the Global Field. During this propagation, the system internally updates the affected entries and sets the system\_action flag to GLOBAL\_FIELD\_UPDATE to indicate that the event was triggered by a Global Field update rather than a direct editorial action on the entry itself.

**Resolution**

This is expected, documented behavior. No action is required. To handle this in the webhook receiver:

1.  Check the system\_action field in the webhook payload before processing. If system\_action is GLOBAL\_FIELD\_UPDATE, the event was triggered by a Global Field schema change propagation rather than a direct user edit or publish action.
2.  Decide in the receiver whether to process or skip events with system\_action: GLOBAL\_FIELD\_UPDATE based on the use case. For cache invalidation workflows, these events may still warrant a cache purge. For audit or change-tracking workflows, these events should be labeled distinctly from user-initiated changes.
3.  If GLOBAL\_FIELD\_UPDATE events are being triggered unexpectedly (for example, without any recent Global Field changes), contact Contentstack Support with the entry UID and the timestamp of the event for investigation.

After updating the receiver logic to handle system\_action: GLOBAL\_FIELD\_UPDATE, confirm that the webhook processing correctly categorizes and routes these events separately from user-initiated content events.
