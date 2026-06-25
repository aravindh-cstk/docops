---
title: "[Studio] - Manage a Symbol"
description: Manage a Symbol in Studio, including creating, editing, deleting, and best practices.
url: https://www.contentstack.com/docs/studio/manage-a-symbol
product: Contentstack Studio
doc_type: how-to
audience:
  - developers
  - content-authors
  - designers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Manage a Symbol

This page explains what Symbols are in Contentstack Studio and how to create, edit, and delete them. It is intended for Studio users who build and maintain reusable UI blocks across compositions, and should be used when you want consistent, globally updatable design elements within a project.

### Item 1

#### Article section

##### Heading

Manage a Symbol

##### Content

**Note:** Studio is currently available as part of an Early Access Program and may not be accessible to all users. For more information or to request access, contact our [support](mailto:support@contentstack.com) team.

A **Symbol** is a reusable UI block in Studio, created from a composition or section on the canvas. Symbols promote consistency across pages. When you update a symbol, all its instances reflect the change automatically.

Think of symbols as the building blocks of your design system within Studio:

  **Tip:**
- Design once, reuse everywhere.
- Ensure consistent UI and behavior across projects.
- Apply updates globally from a single source.

For example, if you create a “Card Section” with an image, title, and button, and you want to reuse it across several pages, you can convert that section into a symbol. When you later change the button color or text alignment in the original symbol, every page using that card updates automatically.

## Create a Symbol

You can create a symbol from any existing composition or section on the canvas.

To create a symbol, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- From the **App Switcher**, click **Studio**.
- Open a project and select an existing composition.
- Right-click the section or component you want to reuse. Alternatively, go to the **Layers** tab and click the vertical ellipsis.
- Select **Convert to Symbol** from the context menu.
- Name the symbol and optionally assign an icon (e.g., Card Section, Hero Banner).
- Click **Create**.

The selected section is now a symbol. It appears in your **Symbols** library, ready for reuse in other compositions.

  **Tip:**
- Symbols can include nested components and dynamic data bindings.
- Use them for reusable structures like cards, footers, banners, or CTAs.
- Each symbol is automatically linked to its master, ensuring global consistency.

## Edit a Symbol

You can edit a symbol to update its name, icon, or underlying design. When you modify a symbol, all instances across your project automatically reflect those changes. This ensures consistency and saves time when managing repeatable UI elements.

To edit a symbol, open a Studio project and perform the following steps:
- Open the **Symbols** library panel from the left sidebar.
- Locate the symbol you want to modify. Click the vertical ellipsis and select **Edit**.
- Update the name or icon and click **Save** to apply changes.
- For design edits, locate the symbol on the canvas. Right-click on it and select **Edit Symbol**. Add or remove components as needed.

**Note:** Symbols behave as a single block until you explicitly enter Edit Symbol mode.

## Delete a Symbol

Deleting a symbol removes it from your project and all its instances from existing compositions.

To delete a symbol, open a Studio project and perform the following steps:
- Open the **Symbols** library.
- Locate the symbol you want to delete. Click the vertical ellipsis and select **Delete**.
- Confirm your action in the **Delete Composition** modal.

**Warning:** Once deleted, all instances of the symbol across your compositions are removed.

## Best Practices
- Use symbols for repeatable UI elements like cards, banners, navbars, or hero sections.
- Follow consistent naming conventions: `Card_Product`, `CTA_Pricing`.
- Avoid excessive nesting to keep symbols manageable.
- Review changes carefully, global updates affect all linked instances.

For teams collaborating across multiple projects or locales, symbols make Studio not just a page builder, but a design-system-driven environment for composable, enterprise-grade experiences.

## Common questions

**Q: What happens when I update a symbol?**  
A: When you update a symbol, all its instances reflect the change automatically.

**Q: Can I create a symbol from any section or component?**  
A: You can create a symbol from any existing composition or section on the canvas.

**Q: Do symbols allow nested components and dynamic data bindings?**  
A: Symbols can include nested components and dynamic data bindings.

**Q: What happens if I delete a symbol?**  
A: Deleting a symbol removes it from your project and all its instances from existing compositions.

Filename: studio-manage-a-symbol.md