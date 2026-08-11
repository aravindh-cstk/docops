---
title: "Can I use the same Data & Insights (Lytics) account across multiple domains?"
description: "Can I use the same Data & Insights (Lytics) account across multiple domains?"
url: /data-and-insights-lytics/troubleshooting-and-faqs/data-insights-lytics-faqs/01-/03-can-i-use-the-same-data-insights-lytics-account-across-multiple-domains
doc_type: faq
_cms_section_uid: cs7ed1079bba1834e3
_cms_faq_uid: cs17eb17a9f52768b6
---

# Can I use the same Data & Insights (Lytics) account across multiple domains?

Yes, a single Data & Insights (Lytics) account can collect data across multiple domains. However, when using **Data Activation Layer (DAL)** within Contentstack, that account can only be connected to **one stack**. For multi-domain setups, check your api\_whitelist\_domains configuration in Data & Insights (Lytics). Leave it blank to allow the tag across all domains, or explicitly list each one.
