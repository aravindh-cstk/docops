---
title: "Listening for Taxonomy Create and Update Events via Webhooks"
description: "Listening for Taxonomy Create and Update Events via Webhooks"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/36-listening-for-taxonomy-create-and-update-events-via-webhooks
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs915fbdf49ee808d9
---

# Listening for Taxonomy Create and Update Events via Webhooks

A customer wants to use webhooks to be notified when taxonomy terms are created or updated, and to retrieve the full taxonomy hierarchy programmatically when an event fires.

**Root Cause**

Taxonomy create and update events are supported in Contentstack webhooks and can be configured to trigger on taxonomy-related actions. Taxonomy term hierarchy is accessible via the Taxonomy API, which is the recommended approach for retrieving hierarchical structure after a webhook event fires.

**Resolution**

1.  In the webhook configuration, select the Taxonomy event type to listen for create and update actions on taxonomy terms.
2.  The webhook payload will include the taxonomy UID and term details for the triggering event.
3.  To retrieve the full taxonomy hierarchy programmatically after receiving the event, call: GET /v3/taxonomies/{taxonomy\_uid}/terms - this returns all terms and their parent-child relationships.
4.  Refer to the Contentstack Taxonomy API documentation for filtering and pagination options when working with large taxonomy trees.

After configuring the taxonomy webhook event, create or update a taxonomy term and verify the webhook is triggered with the expected payload containing the taxonomy and term details.
