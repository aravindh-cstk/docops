---
title: "[Studio] - Figma Best Practices"
description: Use this guide to structure your Figma files to ensure accurate asset recognition and generate clean, responsive code with the Studio plugin.
url: https://www.contentstack.com/docs/studio/figma-best-practices
product: Contentstack Studio
doc_type: guide
audience:
  - designers
  - developers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Figma Best Practices

This page explains how to structure Figma files for use with the Studio plugin, focusing on setup and design practices that improve asset recognition and responsive code generation. It is intended for designers and developers preparing Figma designs for export and code generation in Studio.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Use this guide to structure your Figma files. It helps ensure accurate asset recognition and generates clean, responsive code with the Studio plugin.

## Required Setup

Before you start, apply the following setting to keep your designs organized and ready for code generation.

- **Apply Auto Layout:** Use Figma’s **Auto Layout** to organize elements. This ensures your designs adapt consistently across screen sizes.![Figma Auto Layout Example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14d9f2f64277fbbd/68ff75bf0edfcf0051cf1b93/1._Apply_Auto_Layout_to_all_layer.png)
- **Add export settings for images:** Define images explicitly so they are recognized as single assets.

## Advanced Tips

Once the required setup is complete, follow these advanced tips to optimize your files for smoother exports and responsive code generation.

- **Group background layers:** Combine background elements into one group for cleaner exports.![Grouped background layers in Figma](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt713d56ca1ed45dbe/68ff75bf46d5c82234f7191e/3._Group_background_layers.png)
- **Avoid overlapping of elements:** Provide enough space between text and design elements to keep layouts and components aligned during code generation.![Avoid element overlap in Figma](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta3e9b8617bff962f/68ff75bfdb5b0bf41fc408a7/4._Minimize_overlapping_and_intersections.png)
- **Size text boxes to fit content:** Adjust text bounding boxes to match the height and width of the content, with no extra whitespace. This keeps layouts aligned and exports accurate.![Text box sizing in Figma](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt549d11c00fcf319e/68ff75be3a6db225ece47675/5._Size_text_bounding_boxes_snugly.png)
- **Set 100% opacity:** Ensure all colors are fully opaque for consistency.
- **Set realistic frame sizes:** Set frame dimensions to match actual device or browser sizes.
- **Use structured frames with clear naming conventions:** Organize your design using meaningful frame and layer names. Clear naming improves component detection, maintains hierarchy, and leads to cleaner code generation.
- **Group similar UI elements into reusable components:** Convert frequently used patterns (for example, buttons, cards, list items) into reusable components in Figma. This improves design consistency and makes generated code easier to maintain.
- **Avoid nested layers: **Keep layer nesting shallow. Deeply nested structures increase complexity and can negatively affect the generated component tree.
- **Apply design tokens consistently:** Use design tokens for color, spacing, typography, and effects across all components. Consistent token usage ensures more predictable results when tokens are mapped in Studio for responsive layouts.
- **Ensure the target design is in edit mode:** Make sure your Figma file is editable before you begin exporting. Read-only files block Auto Layout updates, token adjustments, and component mapping.
- **Map components to code:** Link Figma components to their corresponding code components in the plugin. This replaces design layers with reusable, production-ready components during code generation, ensuring consistency and responsiveness across screen sizes.![Component mapping in Figma plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68e52b9e4c1a9ced/68ff878a6e500306a4d2ac84/6._component_mappin.png)

Following these practices keeps your Figma files clean, organized, and compatible with the Studio plugin. With a consistent structure, your exports remain accurate, and the generated code aligns seamlessly with responsive design needs.

## Common questions

### Who is this guide for?
Designers and developers who are preparing Figma files for export and code generation using the Studio plugin.

### What is the minimum required setup before exporting?
Apply Auto Layout and add export settings for images so designs stay organized and images are recognized as single assets.

### Why do naming conventions and structured frames matter?
Clear naming and structure improve component detection, maintain hierarchy, and lead to cleaner code generation.

### What happens if my Figma file is read-only?
Read-only files block Auto Layout updates, token adjustments, and component mapping, which can prevent successful exporting and code generation.