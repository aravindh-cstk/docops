---
title: "Implementing the Marketplace DateTimePicker component with input fields"
description: "Implementing the Marketplace DateTimePicker component with input fields"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/03-custom-app-development-extensions/01-implementing-the-marketplace-datetimepicker-component-with-input-fields
doc_type: faq
_cms_section_uid: cs6031da6351f15c02
_cms_faq_uid: cs38cb5e48a9b8762d
---

# Implementing the Marketplace DateTimePicker component with input fields

Using the DateTimePicker component in a custom extension may result in a missing input field or non-functional action buttons when manual integration is not performed. This prevents users from interacting with the picker or handling date and time values.

**Root Cause**

The DateTimePicker component does not provide a native input field or automatic button handlers, requiring manual configuration and pairing with separate UI elements.

**Resolution**

1.  Integrate a standard HTML input field manually into the extension code.
2.  Configure the input field to trigger the DateTimePicker modal upon interaction.
3.  Use separate DatePicker and TimePicker components if the application requires distinct date and time inputs.

After integrating the manual input field, click the field to verify the DateTimePicker modal opens.

If the onDone and onCancel buttons correctly process the input data, the manual integration is successful.
