---
title: "Why am I getting \"Unauthorized\" errors in the Data & Insights (Lytics) Chrome Extension?"
description: "Why am I getting \"Unauthorized\" errors in the Data & Insights (Lytics) Chrome Extension?"
url: /data-and-insights-lytics/troubleshooting-and-faqs/data-insights-lytics-faqs/01-/16-why-am-i-getting-unauthorized-errors-in-the-data-insights-lytics-chrome-extensio
doc_type: faq
_cms_section_uid: cs7ed1079bba1834e3
_cms_faq_uid: cs172f38f087e70cf2
---

# Why am I getting "Unauthorized" errors in the Data & Insights (Lytics) Chrome Extension?

This error typically indicates a domain whitelist or public profile sharing issue.

1.  Go to **Account > Settings > Details** and ensure **Allow access via API** is checked. If that setting is already enabled:

-   Check your account’s api\_whitelist\_domains configuration.
-   If it’s blank, no action is needed.
-   If it includes values, make sure your website domain is added to the list.
-   Clear your browser cache and allow time for changes to propagate.
-   Verify that your tag includes the correct **Account ID**.
