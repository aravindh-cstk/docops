---
title: "Retrieving full entry data in translation webhook payloads"
description: "Retrieving full entry data in translation webhook payloads"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/04-performance-webhooks-network-errors/05-retrieving-full-entry-data-in-translation-webhook-payloads
doc_type: faq
_cms_section_uid: cs75f582f26c50a642
_cms_faq_uid: cs4f333ab6be90e076
---

# Retrieving full entry data in translation webhook payloads

Receiving webhook notifications for translation events may result in missing translatable fields when payload settings are restricted. This prevents external systems from accessing the full entry content required for translation.

**Root Cause**

The "Concise Payload" configuration option is enabled, which limits the webhook response to a minimal set of metadata instead of the full entry body.

**Resolution**

1.  Navigate to the Webhook configuration page in the stack settings.
2.  Locate the specific webhook used for the translation workflow.
3.  Uncheck the "Concise Payload" checkbox to allow the transmission of the full entry details.

After disabling the concise payload option, trigger a translation event and inspect the webhook logs.

If the payload contains the full set of translatable fields, the configuration update is successful.
