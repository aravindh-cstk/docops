---
title: "Date Field Time Settings Reset During Entry Save"
description: "Date Field Time Settings Reset During Entry Save"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/05-date-field-time-settings-reset-during-entry-save
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csb432eb6582b1d71c
---

# Date Field Time Settings Reset During Entry Save

Saving an entry in the CMS may cause the time settings in a date field to reset or shift from the originally entered values. This prevents maintaining a fixed time independent of the user's local timezone.

**Root Cause**

The date field automatically adjusts its value to follow the current local timezone of the user performing the save operation.

**Resolution**

1.  Verify the local timezone settings of the user account performing the entry save.
2.  Ensure team members are aware that saved times reflect the local timezone of the last editor.
3.  Refer to upcoming product enhancements for improved handling of fixed timezone settings.

After entering a specific time and saving the entry, check the date field value. If the time displays an adjustment consistent with the local timezone, the behavior is operating as currently designed.
