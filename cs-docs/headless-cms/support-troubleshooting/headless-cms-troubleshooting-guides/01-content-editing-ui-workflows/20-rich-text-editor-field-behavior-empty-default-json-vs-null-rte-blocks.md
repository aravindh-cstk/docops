---
title: "Rich Text Editor Field Behavior: Empty Default JSON vs. Null RTE Blocks"
description: "Rich Text Editor Field Behavior: Empty Default JSON vs. Null RTE Blocks"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/20-rich-text-editor-field-behavior-empty-default-json-vs-null-rte-blocks
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs8732f7d6007d2f07
---

# Rich Text Editor Field Behavior: Empty Default JSON vs. Null RTE Blocks

Rich Text Editor (RTE) fields can appear to return unexpected values in GraphQL responses. This section covers two distinct RTE behaviors that are commonly confused:

**Scenario A: Empty RTE Field Returns Default JSON Instead of Null**

An empty RTE field does not return null in the GraphQL response. Instead, it returns a default JSON structure even when no content has been entered. This behavior differs from plain text fields, which return null when empty.

**Root Cause**

RTE fields are initialized with a default JSON structure to ensure consistent and valid output for the front-end rendering layer. This approach maintains compatibility with rich text rendering libraries that expect a defined JSON schema even for empty content. Returning an empty JSON structure rather than null is intentional behavior to prevent rendering errors.

**Resolution**

This is expected platform behavior and cannot be changed. To handle empty RTE fields in the front-end application:

1.  Check whether the returned JSON structure represents an empty document (for example, an empty paragraph node) rather than checking for null.
2.  Implement a client-side utility function that evaluates the RTE JSON structure and treats it as empty when it contains no meaningful content.
3.  Do not rely on null checks for RTE fields; use content checks against the JSON structure instead.

**Scenario B: RTE Blocks Return Blank or Null Despite Content Being Present**

RTE Blocks appear blank or return null when queried via GraphQL or the Content Delivery API, even though content is visible in the CMS editor.

**Root Cause**

This can occur when the RTE field’s internal data state is stale or was not correctly committed during the last save. The CMS UI may display content that has not been fully persisted or indexed for delivery.

**Resolution**

1.  Open the affected entry in the CMS.
2.  Make a minor edit to the RTE field - for example, add a space or retype a character - and save the entry.
3.  Publish the entry to the target environment.
4.  Re-run the GraphQL or CDA query and confirm the RTE content is now returned correctly.

Use Scenario A guidance if the RTE field is intentionally empty and the application needs to detect that state. Use Scenario B guidance if the RTE field contains content in the CMS but returns blank or null in the API response.

After applying the relevant fix, query the entry again. If the RTE field returns the expected content or the empty state is correctly handled in the application, the issue is resolved.
