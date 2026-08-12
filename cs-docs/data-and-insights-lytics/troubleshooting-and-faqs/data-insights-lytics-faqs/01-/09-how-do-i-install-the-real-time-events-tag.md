---
title: "How do I install the Real-Time Events tag?"
description: "How do I install the Real-Time Events tag?"
url: /data-and-insights-lytics/troubleshooting-and-faqs/data-insights-lytics-faqs/01-/09-how-do-i-install-the-real-time-events-tag
doc_type: faq
_cms_section_uid: cs7ed1079bba1834e3
_cms_faq_uid: cs153004d73ff4b379
---

# How do I install the Real-Time Events tag?

To install the Real-Time Events tag:

1.  Copy the Data & Insights (Lytics) tag code from your account.

-   For **Launch** hosting: Enable **Real-Time User Event Tracking** in your project settings. For detailed steps, please refer to the [Event Tracking (Lytics) in Contentstack Launch](https://www.contentstack.com/docs/launch/event-tracking-in-contentstack-launch) documentation.
-   For **self**\-hosting: Add the tag to your website’s <head> section.

2\. Ensure jstag.optIn() is called to handle cookie consent.

3\. Test the installation using the **Data & Insights (Lytics) Chrome Extension**.
