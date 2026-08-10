---
title: "Why does the \"where\" filter not throw an error when I query a field that does not exist in the current schema?"
description: "Why does the \"where\" filter not throw an error when I query a field that does not exist in the current schema?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/18-graphql-faqs/04-why-does-the-where-filter-not-throw-an-error-when-i-query-a-field-that-does-not-
doc_type: faq
_cms_section_uid: csc612b9bb46be2d6d
_cms_faq_uid: csac2935a815fa1eb2
---

# Why does the "where" filter not throw an error when I query a field that does not exist in the current schema?

When an API request hits the Contentstack server, internally the {content\_type\_uid}Where filter is assigned a **JSON scalar** value. Since the where filter accepts JSON scalar input types, you can create filters on keys that may not exist on the current content type's schema. Contentstack processes your API requests without any errors.
