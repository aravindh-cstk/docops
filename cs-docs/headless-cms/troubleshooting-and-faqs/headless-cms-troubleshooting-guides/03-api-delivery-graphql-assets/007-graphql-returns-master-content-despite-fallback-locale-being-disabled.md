---
title: "GraphQL returns master content despite fallback_locale being disabled"
description: "GraphQL returns master content despite fallback_locale being disabled"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/007-graphql-returns-master-content-despite-fallback-locale-being-disabled
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs44a4d8e50127110c
---

# GraphQL returns master content despite fallback_locale being disabled

Querying entries via GraphQL may return master locale content even if the fallback\_locale parameter is set to false. This prevents users from receiving an empty response or error when content does not exist in the requested locale.

**Root Cause**

The entry exists and is published in the master locale but has not been localized for the specific language being requested in the query.

**Resolution**

1.  Localize the entry for the specific target language within the CMS.
2.  Publish the localized version of the entry to the desired environment.
3.  Ensure the query targets the correct locale where the localized content resides.

After localizing and publishing the entry, execute the GraphQL query again with fallback\_locale: false. If the localized content appears instead of the master locale data, the configuration is correct.
