---
title: "FVR Save Error When Configuring More Than 5 Conditions"
description: "FVR Save Error When Configuring More Than 5 Conditions"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/92-fvr-save-error-when-configuring-more-than-5-conditions
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csdb8ad652e0d9dc61
---

# FVR Save Error When Configuring More Than 5 Conditions

Configuring a Field Visibility Rule with more than 5 SHOW or HIDE conditions causes a save error after the 5th condition is added.

**Root Cause**

Contentstack enforces a maximum of 5 conditions per Field Visibility Rule. A fix was deployed to provide a clearer error message, but the 5-condition limit remains.

**Resolution**

1.  Keep each individual Field Visibility Rule to a maximum of 5 conditions.
2.  To implement logic requiring more than 5 conditions, split across multiple fields or use a Select control field with compound values mapping to multiple show/hide scenarios.
3.  Contact Contentstack Support to submit an enhancement request if more conditions are needed.

After reducing the rule to 5 or fewer conditions, confirm the Field Visibility Rule saves and functions as expected.
