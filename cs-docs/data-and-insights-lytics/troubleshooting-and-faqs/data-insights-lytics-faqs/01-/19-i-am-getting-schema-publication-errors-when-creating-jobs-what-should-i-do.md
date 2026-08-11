---
title: "I am getting schema publication errors when creating jobs. What should I do?"
description: "I am getting schema publication errors when creating jobs. What should I do?"
url: /data-and-insights-lytics/troubleshooting-and-faqs/data-insights-lytics-faqs/01-/19-i-am-getting-schema-publication-errors-when-creating-jobs-what-should-i-do
doc_type: faq
_cms_section_uid: cs7ed1079bba1834e3
_cms_faq_uid: cs390a494f6a91f078
---

# I am getting schema publication errors when creating jobs. What should I do?

**Error**: Workflow modifies schema for table that has unpublished changes

**To resolve this:**

1.  Use a **Data & Insights (Lytics) Auth token** to publish schema changes via the API.
2.  Alternatively, **publish changes manually** in the Data & Insights (Lytics) UI before creating jobs.
3.  Wait until all changes are **fully published** before proceeding.
