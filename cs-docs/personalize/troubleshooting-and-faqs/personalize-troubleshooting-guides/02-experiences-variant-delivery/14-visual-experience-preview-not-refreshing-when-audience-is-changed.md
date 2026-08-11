---
title: "Visual Experience Preview Not Refreshing When Audience Is Changed"
description: "Visual Experience Preview Not Refreshing When Audience Is Changed"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/02-experiences-variant-delivery/14-visual-experience-preview-not-refreshing-when-audience-is-changed
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: csac08a13947587872
---

# Visual Experience Preview Not Refreshing When Audience Is Changed

In the Visual Experience editor, changing the selected audience in the preview pane does not update the displayed variants. The preview continues to show the same content regardless of which audience is selected. Direct API calls to the Personalize manifest may also return null variants when Lytics audiences are used in this context.

**Root Cause**

This issue has two related causes. First, the Live Preview SDK initialisation may be missing the required mode: 'builder' setting, which is needed for the Visual Experience editor to correctly override audience membership during preview. Without this setting, the preview environment cannot signal to the Personalize SDK that it should evaluate audience overrides interactively. Second, Lytics audiences may not be considered in manifest calculation when used for overriding audience membership in the Visual Experience context — this was a platform-level bug that has since been addressed with a fix pushed to production.

**Resolution**

1.  Review your Live Preview SDK initialisation code. Confirm that the init method includes mode: 'builder' in the configuration object. Without this setting, the Visual Experience editor cannot correctly override audience membership for preview purposes.
2.  Update the init call to include the mode setting and redeploy. Example: ContentstackLivePreview.init({ mode: 'builder', ... })
3.  After updating the init method, return to the Visual Experience editor, switch between audiences in the preview pane, and confirm that the displayed variants update accordingly.
4.  If variants are still null when calling the Personalize manifest directly with Lytics audiences after the init fix, verify that your environment is on the latest platform version, as the underlying Lytics manifest calculation fix has been deployed to production.
5.  If the issue persists in your specific environment, open a support case and reference the mode: 'builder' configuration and the Lytics audience manifest issue. Include your SDK version, Project UID, and a sample manifest API response.

Confirm the fix by switching audiences in the Visual Experience preview and verifying that the correct variant content is displayed for each audience selection.
