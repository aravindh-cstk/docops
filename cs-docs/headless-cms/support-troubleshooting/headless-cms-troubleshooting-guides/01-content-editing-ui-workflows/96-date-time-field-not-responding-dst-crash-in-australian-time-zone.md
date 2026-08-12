---
title: "Date/Time Field Not Responding - DST Crash in Australian Time Zone"
description: "Date/Time Field Not Responding - DST Crash in Australian Time Zone"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/96-date-time-field-not-responding-dst-crash-in-australian-time-zone
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs76424dba505a503f
---

# Date/Time Field Not Responding - DST Crash in Australian Time Zone

Date and time fields in the entry editor stop responding or become unclickable. Date picker dropdowns open briefly and disappear. Specific to Australian Eastern Time during DST transitions.

**Root Cause**

A confirmed platform bug in main.js where Sydney’s DST flag was missing, causing an infinite update loop in timezone-aware components during DST transitions, crashing the date field UI.

**Resolution**

A platform fix has been deployed to correct DST handling for Sydney and affected Australian time zones.

1.  Clear browser cache and hard refresh after the fix is deployed.
2.  If date/time fields are still unresponsive after the fix, contact Contentstack Support with the affected stack, time zone, and a screen recording.

After the fix deployment, confirm date/time fields respond correctly to clicks and dates can be selected and saved.
