---
title: "[Extensions] - Limitations of Custom Fields"
description: Limitations and constraints when using custom fields via extensions.
url: https://www.contentstack.com/docs/developers/create-custom-fields/limitations-of-custom-fields
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Extensions] - Limitations of Custom Fields

This page lists the limitations and constraints for using custom fields implemented as extensions in Contentstack. It is intended for developers building or configuring custom fields and should be referenced when planning extension size, configuration limits, browser support, and JSON field constraints.

## Limitations of Custom Fields

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [Custom Field UI location](../developer-hub/custom-field-location.md) for the Contentstack App Framework to extend the functionality of your apps.

The limitations to using custom fields are as follows:
- The maximum size of the custom field extension source code cannot exceed **500**** KB**.
- The title you provide to a custom field cannot exceed **256**** characters**.
- You can install a maximum of **50 ****extensions** (including custom fields, custom widgets, dashboard widgets, and JSON RTE plugins) in a stack.
- The maximum size of the configuration file of a custom field cannot exceed **10**** KB**.
- The maximum size of a custom field file that uses JSON Data Type cannot exceed **1,00,000 bytes** (**100KB**).
- The maximum number of JSON type custom fields that can be added per content type is **10**. This limit is configurable. For more information, contact our [Support](mailto:support@contentstack.com) team.
- JSON object key(s) cannot start with a dollar ' sign or contain a dot '.' character.
- Internally as well externally hosted custom fields are not supported on Internet Explorer and Opera Mini as these browsers lack support for the <iframe> srcdoc attribute. [Read more](https://caniuse.com/#feat=iframe-srcdoc).
- Extensions are loaded in an iframe in sandbox mode for security reason. Hence, the cookies are not exposed. However, as popups are allowed in the current sandbox mode, you can open the popup window and access the cookies or storage in the popup window.

## Common questions

1. **What is the maximum number of extensions allowed in a stack?**  
   You can install a maximum of **50** extensions (including custom fields, custom widgets, dashboard widgets, and JSON RTE plugins) in a stack.

2. **What are the size limits for custom field code and configuration?**  
   The maximum size of the custom field extension source code cannot exceed **500 KB**, and the maximum size of the configuration file of a custom field cannot exceed **10 KB**.

3. **Are there limits specific to JSON type custom fields?**  
   Yes. The maximum size of a custom field file that uses JSON Data Type cannot exceed **1,00,000 bytes (100KB)**, and the maximum number of JSON type custom fields that can be added per content type is **10** (configurable via Support).

4. **Which browsers do not support internally or externally hosted custom fields?**  
   Internally as well externally hosted custom fields are not supported on Internet Explorer and Opera Mini due to lack of support for the `<iframe> srcdoc` attribute.