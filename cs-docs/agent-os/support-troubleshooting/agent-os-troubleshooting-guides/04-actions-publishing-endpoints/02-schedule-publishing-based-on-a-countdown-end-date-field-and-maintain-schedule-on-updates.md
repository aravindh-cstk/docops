---
title: "Schedule Publishing Based on a Countdown/End-Date Field (and Maintain Schedule on Updates)"
description: "Schedule Publishing Based on a Countdown/End-Date Field (and Maintain Schedule on Updates)"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/02-schedule-publishing-based-on-a-countdown-end-date-field-and-maintain-schedule-on-updates
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: csa574b682e67e67b2
---

# Schedule Publishing Based on a Countdown/End-Date Field (and Maintain Schedule on Updates)

Customers often need content to auto-publish at a defined “end date/time” stored in an entry field, and to automatically update/cancel scheduled jobs if that field changes.

**Root Cause** This requires two controlled automation paths: one for new entries and another for updates, including schedule cancellation logic using publish details/job IDs.

**Resolution** **A) For New Entries**

1.  Trigger: Entry Create (relevant content type).
2.  Step: Read end-date field from payload.
3.  Step: Schedule publish action for the same entry at the end-date timestamp.

**B) For Updated Entries**

1.  Trigger: Entry Update (same content type).
2.  Fetch previous entry version (CMA) including publish\_details.
3.  Compare previous end-date vs current end-date (code step).
4.  If changed:

-   Identify scheduled job in publish\_details matching old scheduled\_at.
-   Cancel scheduled job using job\_id via CMA cancel schedule endpoint.
-   Schedule publish with new date.

**Verify**

-   New entries are scheduled correctly at the field timestamp.
-   Updated entries replace the prior scheduled job with the updated timestamp.
-   No duplicate schedules remain active.
