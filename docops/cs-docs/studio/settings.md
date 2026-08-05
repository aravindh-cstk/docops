---
title: "[Studio] - Settings"
description: Configure how a component behaves, appears, and connects to content in Studio using the Settings tab.
url: https://www.contentstack.com/docs/studio/settings
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - content-authors
  - designers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Settings

This page explains how to use the **Settings** tab in Contentstack Studio to configure component properties, styling, and CMS data bindings without writing code. It is intended for users building or customizing Studio components and should be used when you need to control component behavior and connect components to content.

### Item 1

#### Article section

##### Heading

Settings

##### Content

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

The **Settings** tab in Studio lets you configure how a component behaves, appears, and connects to content, all without writing any code. This tab is particularly useful when you want to create reusable components that adapt to various use cases.

When you select a component on the canvas and open the **Settings** tab, you can configure its available properties and data bindings. This makes it easier to customize behavior for each instance while keeping the underlying component logic consistent.

## Properties
Use the **Properties** panel to control how your component’s props (inputs) are populated in Studio. You can bind each property to **CMS fields**, set **static values**, or use a mix of both to achieve the right balance of flexibility and control.

For example, in a blog card component:

**Label****Bound CMS Field****Blog Title**title**Blog Description**description**Blog Image**imageOnce bound, the component automatically displays the field values from the linked entry whenever the page renders.

You can also define **static values** directly in the **Properties** panel. Static values are ideal when you want to hardcode display text or links that don’t change based on CMS content.

**Example**:
- Set a static button label like “Read More.”
- Define a default background color or icon path.

Static and dynamic values can be mixed within the same component. For instance, a CMS-driven title with a static button label.

**Tip:** When no entry is selected, the component displays default values. Use Live Preview to test with real content from your stack.

## When to Use the Settings Tab
Use the **Settings** tab when:
- You want to customize a component’s color, size, or shape.
- You need to bind CMS fields to component props for dynamic rendering.
- You want to define user interactions, such as click or hover behaviors.
- You’re creating a reusable composition or design system template.

The Settings tab allows you to fine-tune component behavior, styling, and data connectivity, all from a single, structured interface. Whether you’re designing flexible UI variants or enabling dynamic content through CMS bindings, these controls help streamline your workflow and promote consistency across your compositions.

## Common questions

**Q: Do I need to write code to configure component behavior in Studio Settings?**  
A: No. The **Settings** tab lets you configure how a component behaves, appears, and connects to content, all without writing any code.

**Q: Can I mix CMS-bound values and static values in the same component?**  
A: Yes. Static and dynamic values can be mixed within the same component.

**Q: What happens if no entry is selected for a component?**  
A: When no entry is selected, the component displays default values.

**Q: Who can access Studio Settings if Studio is in Early Access?**  
A: Studio may not be available to all users; contact the Contentstack [support](mailto:support@contentstack.com) team to review eligibility.