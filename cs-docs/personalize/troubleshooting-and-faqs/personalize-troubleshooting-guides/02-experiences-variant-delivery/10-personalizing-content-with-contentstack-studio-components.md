---
title: "Personalizing Content with Contentstack Studio Components"
description: "Personalizing Content with Contentstack Studio Components"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/02-experiences-variant-delivery/10-personalizing-content-with-contentstack-studio-components
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: csf9cdcb8fcd0c79ec
---

# Personalizing Content with Contentstack Studio Components

In a React-based setup using Contentstack Studio, component properties do not support entry-level variants. This creates an apparent limitation where personalization cannot be linked directly to Studio-authored components, and authors cannot preview different personalization variants while composing in Studio.

**Root Cause**

Studio component properties are intentionally agnostic to personalization. Personalization (variants and audience targeting) is managed separately through the Visual Editor, not within Studio component definitions.

**Resolution**

1.  Do not implement variant logic inside Studio component definitions. Keep components agnostic — they should only map to the content schema.
2.  Manage all personalization configuration (variant groups, audiences, experiences) through the Personalize Visual Editor.
3.  At runtime, use the Personalize SDK to fetch the active variant alias for the current user.
4.  Pass the active variant alias to the useCompositionData hook. This ensures the correct personalized content is delivered automatically without requiring variant logic inside components.
5.  Use the Visual Editor (not Studio) to author, manage, and preview personalized experiences across different audience segments.

This architecture keeps Studio focused on page composition and structure while the Visual Editor handles all personalization logic, enabling both authoring flexibility and correct variant delivery.
