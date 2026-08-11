---
title: "Fetching Entries Published Within a Specific Time Period Using Agent OS"
description: "Fetching Entries Published Within a Specific Time Period Using Agent OS"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/09-fetching-entries-published-within-a-specific-time-period-using-agent-os
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: cse9446a763f2fb673
---

# Fetching Entries Published Within a Specific Time Period Using Agent OS

There is no direct, built-in way to fetch only the entries that were published within a specific recent time window (for example, the last N days) from within an Automation.

**Root Cause**

The **Get Publish Queue** action only returns a limited number of recent publish events by default (10), which is not enough to reliably capture and filter entries published over a longer or configurable period.

**Resolution**

1.  Add a **Get Publish Queue** action to your automation and increase its result limit beyond the default of 10 to capture a wider window of publish events.
2.  Add a **JavaScript Code** step (V9) after the **Get Publish Queue** action.
3.  In the **JavaScript Code** step, filter the returned entries dynamically based on their published\_at date, using a configurable number of days as the cutoff.
4.  Test the automation to confirm it returns only entries published within your intended time period.

The automation returns exactly the entries published within the configured time window, based on the published\_at field.
