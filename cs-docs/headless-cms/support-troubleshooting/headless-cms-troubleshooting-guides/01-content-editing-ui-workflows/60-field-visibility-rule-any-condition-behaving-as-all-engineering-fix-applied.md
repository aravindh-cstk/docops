---
title: "Field Visibility Rule ‘Any’ Condition Behaving as ‘All’ - Engineering Fix Applied"
description: "Field Visibility Rule ‘Any’ Condition Behaving as ‘All’ - Engineering Fix Applied"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/60-field-visibility-rule-any-condition-behaving-as-all-engineering-fix-applied
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs677c10abdb2531b9
---

# Field Visibility Rule ‘Any’ Condition Behaving as ‘All’ - Engineering Fix Applied

Field Visibility Rules configured with the ‘Any’ condition type are not working as expected. Fields remain hidden even when one of the conditions is satisfied. The system treats all conditions as mandatory instead of requiring only one.

**Root Cause**

This was a confirmed platform bug where the FVR logic evaluation incorrectly applied AND logic for the ‘Any’ rule type instead of OR logic. Rules configured with ‘Any’ should show a field when at least one condition is met; instead, all conditions had to be satisfied simultaneously.

**Resolution**

Engineering has applied a fix restoring correct logic - ‘Any’ now applies OR and ‘All’ applies AND. No configuration change is required.

1.  If rules still behave incorrectly after the fix, delete the existing FVR configuration and re-add it to force a schema refresh.
2.  To re-add: navigate to the field settings, remove the current FVR configuration, save, then re-add with the correct conditions.
3.  If the issue persists, contact Contentstack Support with the content type UID and field UID.

After re-adding the rules, confirm that a field becomes visible when any one condition is met, and remains hidden only when none of the conditions are satisfied.
