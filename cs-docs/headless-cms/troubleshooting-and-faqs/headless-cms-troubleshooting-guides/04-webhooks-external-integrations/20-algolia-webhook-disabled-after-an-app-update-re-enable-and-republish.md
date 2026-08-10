---
title: "Algolia Webhook Disabled After an App Update - Re-enable and Republish"
description: "Algolia Webhook Disabled After an App Update - Re-enable and Republish"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/20-algolia-webhook-disabled-after-an-app-update-re-enable-and-republish
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csbbcd8a4569bfaf83
---

# Algolia Webhook Disabled After an App Update - Re-enable and Republish

After a Contentstack Algolia app update, content published or updated since the update is not being indexed in Algolia. The Algolia webhook was automatically disabled as part of the update process.

**Root Cause**

During certain Contentstack Algolia app updates, the associated webhook is automatically disabled to prevent partial or inconsistent indexing during the update. Content events that fire while the webhook is disabled are not forwarded to Algolia and are not automatically retried.

**Resolution**

1.  Navigate to the Algolia app configuration page in Contentstack (Marketplace > Installed Apps > Algolia).
2.  Locate the webhook configuration and re-enable the webhook.
3.  Identify all entries that were published or updated during the period the webhook was disabled.
4.  Republish those entries to regenerate the webhook events and restore Algolia indexing for the missed content.
5.  Confirm that real-time indexing is functioning by publishing a new entry and verifying it appears in Algolia.

After re-enabling the webhook and republishing affected entries, confirm new and republished content appears in Algolia search results as expected.
