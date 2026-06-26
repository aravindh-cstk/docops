---
title: "[Studio] - Design"
description: Design tab in Studio for visual styling of components, including tokens, breakpoints, and custom classes.
url: https://www.contentstack.com/docs/studio/design
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - designers
  - content-authors
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Design

This page explains how to use the **Design** tab in Contentstack Studio to style components in a composition, including design tokens, responsive breakpoints, and custom classes. It is intended for users building and styling Studio compositions and should be used when configuring visual presentation without writing CSS.

### Item 1

#### Article section

##### Heading

Design

##### Content

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

The **Design** tab in Studio gives you complete control over the visual styling of each component in your composition. From color and typography to responsive behavior and layout, you can align your content with your design system, without writing a single line of CSS.

## What You Can Style
Every component on the canvas includes design options that let you customize:
- **Colors:** Background, text, and borders
- **Typography:** Font size, weight, and alignment
- **Spacing:** Padding and margins
- **Layout:** Width, alignment, and stacking
- **Responsive behavior:** View-specific rules using breakpoints

These controls apply whether you’re editing a standalone component or grouped layout.

## Using Design Tokens
If your project uses design tokens, Studio will automatically surface them in the Design tab when a component is selected.

Design tokens provide:
- **Consistent styling** across pages and components
- **Alignment with your design system** without manual intervention
- **Easy updates**—change tokens once and apply across your project

**Examples:**
- Primary button color: `--color-primary`
- Body font: `--font-body`
- Spacing unit: `--space-4`

**Note:** Design tokens are sourced from your linked design system. You can also add tokens manually using the CLI.

## Applying Styles
To style a component:
- Select a component on the canvas.
- Click the **Design** tab in the right panel.
- Choose a design token or enter custom values for each property.
- Use the device view toggles (desktop, tablet, mobile) to preview responsive styles.

**Tip:** Use tokens wherever possible instead of hardcoding values. This helps maintain consistency across your composition.

## Breakpoints and Responsive Design
Studio supports custom breakpoints that allow you to control component behavior across screen sizes.

**Default breakpoints:**
- **Desktop:** ≥ 1024px
- **Tablet:** 768–1023px
- **Mobile:** ≤ 767px

With breakpoints, you can:
- Adjust font sizes
- Hide or show components on specific devices
- Switch layout patterns (e.g., horizontal to stacked)

**Tip:** You can override breakpoint styles for individual components when needed.

## Custom Classes
Developers can expose a `className` field in custom components. These class names can be reused across the project or used to apply specific styles.

**Example:**

```
{
  "className": "hero-dark"
}
```

To use a custom class:
- Select the component.
- In the Design tab, find the **Custom class** field.
- Enter the class name as defined in your component code.

## Best Practices
- **Use tokens** instead of hardcoding styles to support global design updates.
- **Maintain consistent spacing** across components for visual harmony.
- **Test all breakpoints** to ensure your design looks good on every device.
- **Avoid excessive overrides** in a single component. Use nested or grouped layouts for complex styling.

The Design tab gives you the flexibility to create responsive, branded layouts directly in Studio, without needing developer support for every visual tweak. By combining design tokens, breakpoints, and reusable classes, you can ensure your compositions stay consistent, scalable, and easy to maintain across teams and devices.

## Common questions

### Do I need to write CSS to style components in Studio?
No. The Design tab lets you control styling such as color, typography, spacing, layout, and responsive behavior without writing a single line of CSS.

### How do design tokens appear in the Design tab?
If your project uses design tokens, Studio will automatically surface them in the Design tab when a component is selected.

### What breakpoints does Studio use by default?
**Desktop:** ≥ 1024px, **Tablet:** 768–1023px, **Mobile:** ≤ 767px.

### How do I apply a custom class to a component?
Developers can expose a `className` field in custom components. In the Design tab, find the **Custom class** field and enter the class name as defined in your component code.