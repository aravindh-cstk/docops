---
title: "updated_by Field Missing from Concise Webhook Payload"
description: "updated_by Field Missing from Concise Webhook Payload"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/33-updated-by-field-missing-from-concise-webhook-payload
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs2916f82e727085f4
---

# updated_by Field Missing from Concise Webhook Payload

The updated\_by user field is absent from the webhook payload. User attribution data is needed to log who triggered a content event.

**Root Cause**

The concise webhook payload format is designed to be minimal and efficient. It intentionally excludes user-related fields such as updated\_by and created\_by to reduce payload size. This is by design and is not a bug.

**Resolution**

1.  Switch the webhook payload format from Concise to Full in the webhook settings.
2.  The full payload includes user attribution fields such as updated\_by and created\_by, providing complete metadata about who triggered the event.
3.  Note that the full payload is significantly larger than the concise format - ensure the receiving endpoint can handle the increased payload size.

After switching to the full payload format, trigger a test event and confirm the updated\_by field is present in the received payload.
