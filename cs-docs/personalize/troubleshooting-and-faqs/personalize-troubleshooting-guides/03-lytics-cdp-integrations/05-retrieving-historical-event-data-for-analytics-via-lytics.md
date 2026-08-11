---
title: "Retrieving Historical Event Data for Analytics Via Lytics"
description: "Retrieving Historical Event Data for Analytics Via Lytics"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/03-lytics-cdp-integrations/05-retrieving-historical-event-data-for-analytics-via-lytics
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs1176f0b4de3522f9
---

# Retrieving Historical Event Data for Analytics Via Lytics

Using the Stream Events API to perform historical data analysis may result in incomplete data sets, as the endpoint typically returns only a small number of the most recent events. This prevents users from identifying long-term trends.

**Root Cause**

The issue is caused by a functional limitation of the Stream Events API, which is optimized for real-time validation and stream health monitoring rather than serving as a query engine for historical data.

**Resolution**

1.  Identify if the requirement is for real-time debugging or long-term historical analytics.
2.  If historical analysis is required, do not rely on the GET /v2/stream/{name}/events endpoint.
3.  Configure a data export to a warehouse such as **Google BigQuery** using Lytics' built-in integrations.
4.  Utilize the data warehouse's native SQL or querying tools to run analytics on the stored event data.
5.  Refer to the Lytics BigQuery documentation to set up the automated event dump.
