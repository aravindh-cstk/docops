---
title: "Non-interactive Elements in Shared Preview Links"
description: "Non-interactive Elements in Shared Preview Links"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/04-visual-builder-preview/02-non-interactive-elements-in-shared-preview-links
doc_type: faq
_cms_section_uid: cs14c857a91fb461be
_cms_faq_uid: csfd9b1d547cc188f2
---

# Non-interactive Elements in Shared Preview Links

When loading a shared preview link, interactive page elements—such as accordions, modals, or links—may become non-functional. This prevents stakeholders from fully testing the user experience within the preview context.

**Root Cause**

This issue is generally caused by external environment or public link (publink) configurations that interfere with client-side script execution, rather than a defect within Contentstack.

**Resolution**

1.  Verify if the shared URL is a valid public link and ensure it is loading successfully.
2.  Coordinate with your development team to ensure the sandbox environment is configured to support interactive elements.
3.  Check the preview link access settings to ensure all required scripts and styles are permitted to load.

Navigate to the shared preview link and attempt to trigger an interactive element, such as a modal. If these elements function correctly, the issue is resolved.
