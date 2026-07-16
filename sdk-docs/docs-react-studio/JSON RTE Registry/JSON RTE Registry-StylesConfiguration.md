---
title: "Styles Configuration"
description: "The `styles` object defines the styling options available for your component, enabling customization of its visual appearance. Example styles: { // Default style group default: { styleSections: \\[\"size\", \"spacing\", \"background\", \"border\"\\], defaultClasses: \\[\"my-component\", \"rounded\"\\], defaultStyles: { padding: \"1rem\" }, displayName: \"Default Styles\" }, // Custom style group custom: { styleSections: \\[\"typography\", \"transform\"\\], defaultClasses: \\[\"custom-text\"\\], defaultStyles: { fontSize: \"16px\" }, displayName: \"Custom Styles\" } } Available Style Sections Section Description `class` Custom CSS classes. `size` Width, height, min/max dimensions. `spacing` Margin and padding. `position` Position and z-index. `visibility` Display and opacity. `layout` Flexbox and grid properties. `typography` Font properties and text alignment. `transform` Transform properties. `media` Media query styles. `background` Background properties. `shadow` Box and text shadow. `effect` Filter and backdrop-filter. `overflow` Overflow properties. `border` Border properties. `responsive` Responsive design utilities. Style Section Categories Category Description `block` All block-level styling options. `text` Typography-focused styling options."
url: "https://www.contentstack.com/react-studio-sdk-json-rte-registry-styles-configuration"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Styles Configuration

The `styles` object defines the styling options available for your component, enabling customization of its visual appearance.

**Example**

```
styles: {
  // Default style group
  default: {
    styleSections: ["size", "spacing", "background", "border"],
    defaultClasses: ["my-component", "rounded"],
    defaultStyles: { padding: "1rem" },
    displayName: "Default Styles"
  },

  // Custom style group
  custom: {
    styleSections: ["typography", "transform"],
    defaultClasses: ["custom-text"],
    defaultStyles: { fontSize: "16px" },
    displayName: "Custom Styles"
  }
}
```

**Available Style Sections**

| **Section** | **Description** |
|---|---|
| `class` | Custom CSS classes. |
| `size` | Width, height, min/max dimensions. |
| `spacing` | Margin and padding. |
| `position` | Position and z-index. |
| `visibility` | Display and opacity. |
| `layout` | Flexbox and grid properties. |
| `typography` | Font properties and text alignment. |
| `transform` | Transform properties. |
| `media` | Media query styles. |
| `background` | Background properties. |
| `shadow` | Box and text shadow. |
| `effect` | Filter and backdrop-filter. |
| `overflow` | Overflow properties. |
| `border` | Border properties. |
| `responsive` | Responsive design utilities. |

**Style Section Categories**

| **Category** | **Description** |
|---|---|
| `block` | All block-level styling options. |
| `text` | Typography-focused styling options. |
