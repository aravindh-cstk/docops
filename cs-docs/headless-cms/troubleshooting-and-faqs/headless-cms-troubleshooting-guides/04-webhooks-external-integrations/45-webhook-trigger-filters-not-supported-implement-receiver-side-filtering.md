---
title: "Webhook Trigger Filters Not Supported - Implement Receiver-Side Filtering"
description: "Webhook Trigger Filters Not Supported - Implement Receiver-Side Filtering"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/45-webhook-trigger-filters-not-supported-implement-receiver-side-filtering
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csf954be0785ddbc98
---

# Webhook Trigger Filters Not Supported - Implement Receiver-Side Filtering

A customer wants to configure a webhook to fire only when a specific field in an entry changes, or only when entries of a specific content type match a custom attribute. They expect a filter configuration in the webhook settings.

**Root Cause**

Contentstack webhook conditions support filtering by event type (create, publish, unpublish, delete), content type, environment (via Channels), and locale. Field-level or attribute-based trigger filtering - where the webhook fires only if a specific field value meets a condition - is not currently supported within the Contentstack webhook configuration.

**Resolution**

1.  Configure the webhook to fire on the appropriate event type and content type as a baseline filter.
2.  In the webhook receiver (your application endpoint, Lambda, or middleware), inspect the incoming payload and implement the custom filter logic: compare field values, check for specific attributes, or evaluate conditions against the payload data before deciding whether to process the event.
3.  To filter by field changes, compare the current field value in the payload against the previously stored value (fetched from a cache, database, or the Contentstack API) and discard the event if the field of interest has not changed.
4.  Use the webhook’s Channels condition to scope delivery to specific environments, and use the content type filter to narrow to relevant content types - combining these built-in filters reduces unnecessary events before the receiver applies custom logic.

Receiver-side filtering is the recommended pattern for all filtering requirements beyond what the webhook configuration natively supports. This approach gives full control over event processing logic without platform constraints.
