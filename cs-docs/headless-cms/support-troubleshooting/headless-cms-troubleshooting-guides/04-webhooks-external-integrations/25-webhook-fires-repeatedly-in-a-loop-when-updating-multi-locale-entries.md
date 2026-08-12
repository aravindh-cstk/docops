---
title: "Webhook Fires Repeatedly in a Loop When Updating Multi-Locale Entries"
description: "Webhook Fires Repeatedly in a Loop When Updating Multi-Locale Entries"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/25-webhook-fires-repeatedly-in-a-loop-when-updating-multi-locale-entries
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csa46543d3a1935cd2
---

# Webhook Fires Repeatedly in a Loop When Updating Multi-Locale Entries

A webhook is configured to update a specific field (for example, campaign ID) whenever an entry is published. When the entry is published across multiple locales, the webhook triggers once per locale, and each trigger causes another update, creating a recursive loop.

**Root Cause**

The campaign ID field is localizable. When it is updated via the webhook for one locale, it creates a new version of the entry in that locale, which triggers the webhook again - causing a recursive chain across all locales. Because the field is not shared across locales, each locale requires a separate update, multiplying the webhook execution count.

**Resolution**

1.  Make the campaign ID (or equivalent trigger field) non-localizable. A non-localizable field has a single value shared across all locales - setting it once in the master locale automatically applies to all locales, eliminating the need for per-locale updates.
2.  Navigate to the content type and edit the field settings.
3.  Enable the Non-localizable option on the field.
4.  Save the content type. Future webhook-triggered updates to this field will only fire once regardless of how many locales are published.

After making the field non-localizable, trigger a multi-locale publish and confirm the webhook fires only once (from the master locale update) rather than once per locale.
