---
title: "getMode"
description: "The `getMode()` method determines the current renderer mode for a given composition, identified by its UID. It allows components to conditionally render UI elements based on whether the composition is in `edit` , `edit-button` , or `preview` mode."
url: "https://www.contentstack.com/react-studio-sdk-utilities-getmode"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getMode

The `getMode()` method determines the current renderer mode for a given composition, identified by its UID. It allows components to conditionally render UI elements based on whether the composition is in `edit`, `edit-button`, or `preview` mode.

No parameters.

Returns:
Type
RendererMode

| `edit` | The composition is currently being edited. |
|---|---|
| `show_edit_button` | The environment should display an Edit button (inside Visual Builder or when the composition is inactive in Studio). |
| `preview` | The composition is in default preview mode. |

**Parameters:**

| **Name** | **Type** | **Description** |
|---|---|---|
| compositionUid | `string` | The UID of the composition used to check its current renderer mode. |

```
// Use mode to conditionally render components

if (mode === "edit") {

  // Show editing interface

} else if (mode === "show_edit_button") {

  // Show edit button

} else {

  // Show preview mode
}

// Check if in editing mode for specific composition

if (clientRendererModeUtil.isEditingCurrentComposition('my-composition-uid')) {
  // Enable editing features

}

// Adapt behavior based on environment

if (clientRendererModeUtil.isInsideVisualBuilderFrame()) {

  // Show enhanced editing capabilities
}
```
