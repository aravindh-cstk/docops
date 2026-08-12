---
title: "Why isn't my Data & Insights (Lytics) tag working in Next.js?"
description: "Why isn't my Data & Insights (Lytics) tag working in Next.js?"
url: /data-and-insights-lytics/troubleshooting-and-faqs/data-insights-lytics-faqs/01-/11-why-isn-t-my-data-insights-lytics-tag-working-in-next-js
doc_type: faq
_cms_section_uid: cs7ed1079bba1834e3
_cms_faq_uid: cs1f8305a5c246a79f
---

# Why isn't my Data & Insights (Lytics) tag working in Next.js?

Common issues with Next.js integration include:

-   The tag is not properly initialized for server-side rendering
-   The window object is not available in server environments
-   The standard tag is used instead of the SPA-compatible Launch tag
-   jstag.optIn() is not called correctly for cookie consent.
