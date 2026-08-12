---
title: "Modular Block Order Differs Between CDA Response and CMS UI"
description: "Modular Block Order Differs Between CDA Response and CMS UI"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/097-modular-block-order-differs-between-cda-response-and-cms-ui
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs3ebff4b1542ba771
---

# Modular Block Order Differs Between CDA Response and CMS UI

The order of modular blocks returned by the Content Delivery API does not match the order displayed in the Contentstack CMS entry editor. The CDA response appears to sort or reorder blocks differently.

**Root Cause**

The CDA API may not preserve the exact UI-defined order of modular blocks in all response scenarios. The CMA API response preserves the modular block order as defined in the entry editor.

**Resolution**

1.  Use the CMA API instead of the CDA API when modular block order is critical to the application.
2.  Authenticate the CMA request with a management token and fetch the entry via: GET /v3/content\_types/{uid}/entries/{entry\_uid} with the management token in the headers.
3.  The CMA response preserves the modular block sequence as defined in the CMS UI.
4.  If using the CDA is required, implement client-side sorting based on an explicit order field added to each modular block in the content model.

After switching to the CMA API for the modular block fetch, compare the response order with the CMS UI. If the order matches, the CMA is correctly preserving the block sequence.
