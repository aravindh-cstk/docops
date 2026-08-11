---
title: "Conversions Not Displayed in Personalize Analytics Graph"
description: "Conversions Not Displayed in Personalize Analytics Graph"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/02-experiences-variant-delivery/11-conversions-not-displayed-in-personalize-analytics-graph
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs96ee4acf5d60572f
---

# Conversions Not Displayed in Personalize Analytics Graph

The Personalize analytics dashboard does not display conversion data for an active A/B test, even though conversion events are being triggered correctly. The graph appears empty or shows zero conversions.

**Root Cause**

Conversions may not appear in the analytics graph when the selected date range in the dashboard does not cover the period in which the conversion events were registered. Filtering the view to a single day is a common cause of missing data.

**Resolution**

1.  Open the Personalize analytics dashboard for the affected experience.
2.  Verify the date range filter. Expand it to cover the full duration of the A/B test rather than a single day.
3.  Confirm the event name used in your conversion trigger matches the event name configured in the experience. A mismatch in event names (for example, click\_any\_insight vs a differently named event) will prevent conversions from being attributed.
4.  If conversions are still not appearing after adjusting the date range and verifying event names, open a support case with your Project ID, Experience ID, and the event name used, so backend logs can be checked to confirm whether events are being received.

If backend logs confirm that conversion events are registered but the dashboard still shows zero, the issue may require a platform-side investigation. Contact Contentstack Support with the above details.
