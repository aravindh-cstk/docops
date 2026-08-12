---
title: "Entry Variants Not Working — Entry Variants Not Enabled"
description: "Entry Variants Not Working — Entry Variants Not Enabled"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/02-experiences-variant-delivery/08-entry-variants-not-working-entry-variants-not-enabled
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs4839c82aa84357af
---

# Entry Variants Not Working — Entry Variants Not Enabled

Personalization variants appear to be set up correctly but do not function as expected. Content is not personalised and variant configurations seem to have no effect.

**Root Cause**

Entry variants must be explicitly enabled in the Personalize project settings before they can be used. If this setting has not been activated, variant configurations will not be applied regardless of audience or experience configuration.

**Resolution**

1.  Navigate to your Personalize project settings.
2.  Locate the Entry Variants toggle and ensure it is enabled.
3.  Save the settings and return to the experience configuration.
4.  Verify that the variant entries are correctly linked to the relevant content entries and audiences.

After enabling entry variants, re-test the experience to confirm that the correct variant content is served to the targeted audience.
