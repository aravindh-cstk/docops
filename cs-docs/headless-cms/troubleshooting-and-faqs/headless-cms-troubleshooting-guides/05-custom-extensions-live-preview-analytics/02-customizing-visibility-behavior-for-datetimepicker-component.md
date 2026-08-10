---
title: "Customizing visibility behavior for DateTimePicker component"
description: "Customizing visibility behavior for DateTimePicker component"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/02-customizing-visibility-behavior-for-datetimepicker-component
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs7ebabe38d59fb9ee
---

# Customizing visibility behavior for DateTimePicker component

Integrating the DateTimePicker component in a custom UI may result in the popup being visible simultaneously with the input field. This prevents achieving a "click-to-show" behavior similar to standard text inputs.

**Root Cause**

The DateTimePicker component does not include a native configuration to toggle visibility only on user interaction.

**Resolution**

1.  Implement a state variable in the front-end code to manage visibility.
2.  Use the onFocus event of the input field to set the state to show the picker.
3.  Use the onBlur event of the input field to set the state to hide the picker.
4.  Render the DateTimePicker component conditionally based on the state variable.

After implementing the conditional logic, click on the date input field in the application. If the popup UI appears only upon clicking the field and disappears on blur, the implementation is correct.
