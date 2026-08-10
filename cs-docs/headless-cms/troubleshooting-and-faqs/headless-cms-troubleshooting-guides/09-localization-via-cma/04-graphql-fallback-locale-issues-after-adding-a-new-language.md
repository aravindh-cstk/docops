---
title: "GraphQL Fallback Locale Issues After Adding a New Language"
description: "GraphQL Fallback Locale Issues After Adding a New Language"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/04-graphql-fallback-locale-issues-after-adding-a-new-language
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: csb4b1e5cc2f3513cf
---

# GraphQL Fallback Locale Issues After Adding a New Language

After adding a new language to a stack, GraphQL queries for that language return unexpected or empty results. Questions also arise about whether there is an upper limit on the number of languages and whether adding more incurs additional cost.

**Root Cause**

When a new language is added to a stack, the fallback locale configuration for that language must be published before GraphQL can correctly apply fallback behavior. Without publishing the fallback locale, GraphQL may not resolve content for the new language correctly.

**Resolution**

1.  After adding the new language, publish the fallback locale for that language in the CMS.
2.  Verify that the fallback locale is correctly set to the intended master or parent language.
3.  Re-run the GraphQL query for the new language and confirm that content is returned correctly.

Regarding language limits: Contentstack does not enforce a strict maximum on the number of languages per stack, and adding additional languages does not incur a separate per-language cost. Confirm with your account team if specific plan limits apply.

After publishing the fallback locale, execute the GraphQL query for the new language. If content is returned correctly, the fallback locale configuration is active.
