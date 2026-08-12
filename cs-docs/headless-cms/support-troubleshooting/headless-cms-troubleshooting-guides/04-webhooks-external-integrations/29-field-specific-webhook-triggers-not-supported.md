---
title: "Field-Specific Webhook Triggers Not Supported"
description: "Field-Specific Webhook Triggers Not Supported"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/29-field-specific-webhook-triggers-not-supported
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs461d8ddd36e60cdf
---

# Field-Specific Webhook Triggers Not Supported

A customer wants to trigger a webhook only when a specific field (such as the URL field) changes in an entry update, rather than on every entry update regardless of which field changed.

**Root Cause**

Contentstack webhooks do not currently support field-level trigger conditions. Entry-level webhooks fire on the defined event (create, update, publish, etc.) for the entire entry, regardless of which fields changed within that entry. Filtering by specific field changes is not natively configurable.

**Resolution**

1.  Configure the webhook to fire on the entry update event as normal.
2.  In the webhook receiving endpoint or middleware, compare the updated entry payload against the previously stored version of the entry to detect whether the specific field of interest has changed.
3.  Process the event only if the field-level comparison indicates a change in the field; discard it otherwise.
4.  Cache or store the previous entry state (for example, using the entry version number or a persisted copy) to enable the comparison.

This is a known product limitation. An enhancement request for native field-specific trigger conditions can be submitted through Contentstack Support.
