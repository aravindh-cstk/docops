---
title: "How do I send custom data to Data & Insights (Lytics)?"
description: "How do I send custom data to Data & Insights (Lytics)?"
url: /data-and-insights-lytics/troubleshooting-and-faqs/data-insights-lytics-faqs/01-/28-how-do-i-send-custom-data-to-data-insights-lytics
doc_type: faq
_cms_section_uid: cs7ed1079bba1834e3
_cms_faq_uid: csac73d91af4f7d650
---

# How do I send custom data to Data & Insights (Lytics)?

Use the Collect endpoint:

```
https://api.lytics.io/collect/json/{stream}
```

You can send custom user attributes, events, and content metadata to this endpoint.
