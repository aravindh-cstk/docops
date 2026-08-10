---
title: "Webhook Payload Missing Updated Fields After Content Type Change"
description: "Webhook Payload Missing Updated Fields After Content Type Change"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/23-webhook-payload-missing-updated-fields-after-content-type-change
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs71cbd5e3f249826f
---

# Webhook Payload Missing Updated Fields After Content Type Change

A field was removed from a content type. After the change, a third-party integration that receives webhook payloads begins failing because the payload structure has changed or the integration no longer receives correct entry data.

**Root Cause**

When a content type field is removed, existing entries retain their data under the old field UID in the database. However, the webhook payload reflects the entry’s current schema. Entries that were not re-saved after the content type change may carry a stale version. The downstream integration receives a payload that no longer matches what it expects. Re-saving entries increments their version and causes the webhook to deliver the updated payload structure.

**Resolution**

1.  After modifying a content type (removing, renaming, or adding fields), re-save all affected entries - even without content changes - to increment their version and update the payload structure.
2.  Notify downstream integration teams of the content type change so they can update their payload processing logic.
3.  If the field removal was unintentional, recreate the field with the same UID to restore the data. See the relevant CMA documentation for field recreation.

After re-saving the affected entries, trigger a test publish and confirm the webhook payload includes the updated entry structure matching the current content type schema.
