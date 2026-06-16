---
title: "[Publish Content] - Daylight Saving Time in Contentstack"
description: How Daylight Saving Time (DST) affects scheduling publish/unpublish in Contentstack and how effective publishing date/time is displayed.
url: https://www.contentstack.com/docs/content-managers/publish-content/daylight-saving-time-in-contentstack
product: Contentstack
doc_type: article
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-26
---

# [Publish Content] - Daylight Saving Time in Contentstack

This page explains how Daylight Saving Time (DST) impacts scheduling publish/unpublish actions in Contentstack, who should read it (anyone scheduling entries or releases across timezones), and when to use it (when selecting a timezone that observes DST while using **Publish Later**).

## Daylight Saving Time in Contentstack

Many countries around the world observe [Daylight Saving Time (DST)](https://en.wikipedia.org/wiki/Daylight_saving_time) between the months of March and November. When DST is observed (usually in Spring/Summer), the clocks are advanced by an hour, and for the rest of the year, it is reset to the standard time.

This change in time may create confusion around features that involve selecting dates and time, such as schedule publishing an entry or a release. Contentstack manages this changeover intelligently by adjusting the date/time according to your selected timezone.

Let’s understand how DST works in Contentstack.

While scheduling an entry or a release for publishing/unpublishing, you select the **Publish Later** sub-option. You are required to select the date and time of publishing along with the timezone. As soon as you select a timezone where DST is applicable, you will see a help text at the bottom of the textbox that highlights the effective publishing date, time, and timezone along with DST adjustments. The effective publishing date specifies the publishing date in local time for the user publishing the entry.

So, for example, if you're setting the date and time as ‘July 15, 2020, 5:00 PM Pacific Daylight Time’, it will show a help text indicating ‘Effective publishing date in local time: Jul 16, 2020, 05:30 AM IST’. The effective publishing date highlights the corresponding Indian Standard Time at which the entry will be published.

This ensures that the user is always clearly notified if there is any change in the selected time settings. There is never any confusion around date and time when DST is observed.

Learn how to [schedule publish or unpublish entries](/docs/content-managers/publish-content/schedule-publish-unpublish-entries) when the timezone selected follows Daylight Saving Time (DST).

## Common questions

### Does Contentstack automatically adjust scheduled publish times for DST?
Yes. Contentstack manages this changeover intelligently by adjusting the date/time according to your selected timezone.

### Where can I see the DST-adjusted effective publishing time?
You will see a help text at the bottom of the textbox that highlights the effective publishing date, time, and timezone along with DST adjustments.

### What does “effective publishing date in local time” mean?
The effective publishing date specifies the publishing date in local time for the user publishing the entry.

### What should I do if I need to schedule publishing in a DST-observing timezone?
Use the **Publish Later** sub-option and select the date, time, and timezone; then review the help text showing the effective publishing date/time.