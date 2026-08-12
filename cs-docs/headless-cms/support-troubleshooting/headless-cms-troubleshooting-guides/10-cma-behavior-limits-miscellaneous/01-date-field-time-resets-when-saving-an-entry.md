---
title: "Date Field Time Resets When Saving an Entry"
description: "Date Field Time Resets When Saving an Entry"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/01-date-field-time-resets-when-saving-an-entry
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs0c3784ade9a89598
---

# Date Field Time Resets When Saving an Entry

The time value set in a date field is adjusted or reset when an entry is saved. The original time entered by the user does not persist as entered.

**Root Cause**

The date field in Contentstack follows the user's local browser timezone when saving. The time is stored in UTC on the server, and when the entry is loaded again, the time is converted back to the user's local timezone. If users in different timezones edit the same entry, they will see different local time representations of the same UTC value. This is the current intended behavior of the date field.

**Resolution**

This is a known behavior and a platform enhancement is planned to improve timezone handling. In the meantime:

1.  Standardize the timezone for all content editors by advising them to set their browser or OS timezone to UTC or a single agreed timezone.
2.  When storing date-time values that must be timezone-precise, store the timezone information separately as a text field alongside the date field.
3.  Contact Contentstack Support to stay informed about the roadmap item for improved timezone handling in date fields.

After standardizing the editor timezone, confirm that time values entered in the date field persist as expected when the entry is saved and reloaded.
