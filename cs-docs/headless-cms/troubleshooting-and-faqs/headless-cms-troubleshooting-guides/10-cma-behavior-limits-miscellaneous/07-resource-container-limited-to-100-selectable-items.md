---
title: "Resource Container Limited to 100 Selectable Items"
description: "Resource Container Limited to 100 Selectable Items"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/07-resource-container-limited-to-100-selectable-items
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs3f42e16c5adc5861
---

# Resource Container Limited to 100 Selectable Items

The Resource Container (reference field picker) in the CMS UI is limited to selecting only 100 items. The customer needs to query and select more than 100 entries in a reference field.

**Root Cause**

The Resource Container has a default selection limit of 100 items. This limit is configurable and can be increased by Contentstack Support.

**Resolution**

1.  Contact Contentstack Support and request an increase to the Resource Container selection limit for the affected stack.
2.  Provide the stack API key, the content type, and the reference field UID in the request.
3.  After Support confirms the increase, reload the CMS and verify the Resource Container now allows selecting more than 100 items

After the limit is increased, open the reference field picker in the affected content type and confirm entries beyond the previous 100-item limit are selectable.
