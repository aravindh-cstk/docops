---
title: "Entry Publish Failed - Webhook Not Triggered as a Result"
description: "Entry Publish Failed - Webhook Not Triggered as a Result"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/01-entry-publish-failed-webhook-not-triggered-as-a-result
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs6c56aa524e632f4b
---

# Entry Publish Failed - Webhook Not Triggered as a Result

A common misconception is that webhooks fail to trigger during the publishing process. However, if the publishing event itself is blocked, often due to validation errors in referenced entries, the webhook event never occurs and therefore cannot fire. This should be framed as a publishing failure rather than a webhook malfunction.

**Root Cause**

The primary cause is that the Entry Publish Failed. Specifically:

-   **Incomplete Referenced Entries**: Referenced entries with missing mandatory fields or validation errors block the parent entry from publishing.
-   **Event Suppression**: Because webhooks trigger only when an event (like a successful publish) actually occurs, a blocked publish means the trigger event never happens.

**Resolution**

-   **Identify Publishing Blockers**: Check the publishing logs to confirm if the entry failed due to validation errors in referenced content.
-   **Fix Mandatory Fields**: Navigate to the referenced entries and ensure all mandatory fields are correctly populated.
-   **Expand Referenced Entries**: Verify all levels of nested references to ensure no sub-entry is blocking the chain.
-   **Retry Publishing**: Once references are corrected, re-attempt to publish the parent entry.

The webhook fires successfully once the publishing event is officially recorded in the system.
