---
title: "Unexpected _validations Property Appearing in CDA Responses"
description: "Unexpected _validations Property Appearing in CDA Responses"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/059-unexpected-validations-property-appearing-in-cda-responses
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csa088056564a95b4f
---

# Unexpected _validations Property Appearing in CDA Responses

CDA API responses contain an unexpected \_validations property that was not present in previous responses. The customer is unsure whether this is expected behavior or a bug.

**Root Cause**

The \_validations property appeared due to an internal validation feature that was enabled for a limited set of customers during testing and was unintentionally exposed in the CDA response payload. This is not a documented CDA field and its presence in responses is a platform-level error.

**Resolution**

1.  Contact Contentstack Support and report the presence of \_validations in the CDA response, providing the affected stack API key and a sample response.
2.  Engineering will deploy a fix to remove the property from CDA responses for the affected stack.
3.  After the fix is deployed, re-publish affected entries if the property still appears (re-publishing triggers a delivery data refresh).
4.  In the meantime, update any response parsing or TypeScript interfaces to treat \_validations as an optional unknown field to prevent type errors.

After the engineering fix is deployed and entries are re-published, fetch the affected entries and confirm \_validations no longer appears in the CDA response.
