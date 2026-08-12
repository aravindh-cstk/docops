---
title: "URL Field Missing from entry_variant Webhook Payload"
description: "URL Field Missing from entry_variant Webhook Payload"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/35-url-field-missing-from-entry-variant-webhook-payload
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs3fc182abac688a72
---

# URL Field Missing from entry_variant Webhook Payload

The URL field is absent from the webhook payload when the module is entry\_variant. The URL is needed by the receiving system for cache-clearing operations but cannot be found in the variant publish payload.

**Root Cause**

This is expected behavior based on Contentstack’s webhook design. For base entry publishes (module: “entry”), the webhook includes the full canonical entry object including the URL field. For variant publishes (module: “entry\_variant”), the webhook contains only a partial payload that does not include the canonical URL field. Variants are supplemental content overlays on top of a base entry, so the URL belongs to the base entry.

**Resolution**

1.  When receiving an entry\_variant webhook event, extract the entry\_uid from the variant payload.
2.  Use the entry\_uid to make a separate CDA or CMA API call to fetch the base entry and retrieve its URL field.
3.  Use the retrieved URL for cache-clearing or other operations that require the canonical entry URL.

After implementing the base entry lookup step for entry\_variant events, trigger a variant publish and confirm the URL is successfully retrieved from the base entry API call.
