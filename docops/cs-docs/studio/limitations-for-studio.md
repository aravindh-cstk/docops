---
title: "[Studio] - Limitations for Studio"
description: Limitations and constraints when using Studio, including Figma plugin import behavior, Visual Builder restrictions, and design token requirements.
url: https://www.contentstack.com/docs/studio/limitations-for-studio
product: Studio
doc_type: reference
audience:
  - designers
  - developers
version: v1
last_updated: 2026-03-25
---

# [Studio] - Limitations for Studio

This page lists known limitations for Studio, including constraints in the Figma plugin import workflow, Visual Builder capabilities, and requirements for custom components and tokens. It is intended for designers and developers planning or troubleshooting Studio implementations and should be referenced when setting expectations for import, editing, and preview behavior.

## Limitations for Studio

- You can import **only one layer** or **frame at a time** using the Figma plugin.
- Responsive variants (e.g., desktop/mobile versions) must be imported and managed separately.
- The plugin does not support component variants.
- Large compositions with deeply nested layers may impact load time.
- Deploying complex pages with extensive data bindings may delay Live Preview updates.
- To support Visual Builder, custom components must include `data-cslive` attributes.
- You cannot alter layout or structure from Visual Builder, only content fields.
- Tokens must be predefined in your project’s design system configuration.

## Common questions

**Q: Can I import multiple frames at once using the Figma plugin?**  
A: No. You can import **only one layer** or **frame at a time** using the Figma plugin.

**Q: Does Studio support component variants from Figma?**  
A: No. The plugin does not support component variants.

**Q: Can I change layout in Visual Builder?**  
A: No. You cannot alter layout or structure from Visual Builder, only content fields.

**Q: What do custom components need to work with Visual Builder?**  
A: To support Visual Builder, custom components must include `data-cslive` attributes.