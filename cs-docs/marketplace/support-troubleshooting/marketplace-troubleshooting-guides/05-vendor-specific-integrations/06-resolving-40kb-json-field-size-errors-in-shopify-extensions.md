---
title: "Resolving 40KB JSON field size errors in Shopify extensions"
description: "Resolving 40KB JSON field size errors in Shopify extensions"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/05-vendor-specific-integrations/06-resolving-40kb-json-field-size-errors-in-shopify-extensions
doc_type: faq
_cms_section_uid: cs67a4a479b31c55a2
_cms_faq_uid: cs276a3a15ccdebb09
---

# Resolving 40KB JSON field size errors in Shopify extensions

Integrating multiple Shopify stores may trigger a 40KB size limit error when syncing large product datasets to an entry. This prevents the saving of entries containing extensive third-party product metadata.

**Root Cause**

The error occurs because the integration attempts to store the entire Shopify product JSON payload in a single field, which exceeds Contentstack's strict system storage constraints.

**Resolution**

1.  Navigate to the configuration page of the Shopify custom field within the content type.
2.  Review the data mapping settings to identify the fields currently being synchronized.
3.  Select only the specific fields required for your implementation (e.g., product title, SKU, or price) instead of the full dataset.
4.  Save the field configuration to reduce the total payload size stored within the entry.

After limiting the stored fields, attempt to select a product from the Shopify store and save the entry.

If the entry saves successfully without a 40KB size error, the payload is correctly optimized for system limits.
