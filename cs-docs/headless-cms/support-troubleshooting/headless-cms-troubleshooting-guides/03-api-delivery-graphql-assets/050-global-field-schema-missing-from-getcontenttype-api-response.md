---
title: "Global Field Schema Missing from getContentType API Response"
description: "Global Field Schema Missing from getContentType API Response"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/050-global-field-schema-missing-from-getcontenttype-api-response
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs1ea243dee1c1a44b
---

# Global Field Schema Missing from getContentType API Response

The schema for a nested Global Field is missing from getContentType API responses and from the GraphQL Explorer. The Global Field is referenced within another Global Field, and its schema appears empty in the API response despite appearing correctly in the Contentstack UI.

**Root Cause**

Nested Global Field schemas can suffer from schema caching inconsistencies, where the outer Global Field’s schema does not reflect the inner Global Field’s current structure. This occurs when the inner Global Field is updated but the outer Global Field’s schema cache is not refreshed.

**Resolution**

1.  Open the outer Global Field in the CMS and re-save it without making any changes. This forces a schema refresh that propagates the inner Global Field’s current structure.
2.  If the issue persists, open both the inner and outer Global Fields and re-save each one.
3.  After re-saving, fetch the content type schema again via the API and confirm the nested Global Field schema is now included in the response.
4.  If the schema remains empty after re-saving, contact Contentstack Support with the Global Field UIDs and stack API key for investigation.

After re-saving the affected Global Fields, fetch the content type and confirm the nested Global Field schema is populated correctly in the API response.
