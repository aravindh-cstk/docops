---
title: "Recipe Import Fails With “Recipe Was Not Found”"
description: "Recipe Import Fails With “Recipe Was Not Found”"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/05-architecture-recipes-supported-workflows/01-recipe-import-fails-with-recipe-was-not-found
doc_type: faq
_cms_section_uid: cs851bc67aab8774ee
_cms_faq_uid: csa4ad9bb6402fddc8
---

# Recipe Import Fails With “Recipe Was Not Found”

When importing an Automation Hub recipe (for example “Translate and Localize an Entry”), the import link may return a “recipe was not found” error and the recipe does not get added to the project.

**Root Cause** The recipe import link was broken/invalid at the time of import.

**Resolution**

1.  Retry the import using the same recipe link after confirmation that the link has been restored.
2.  Validate the import from a supported browser session (try incognito to rule out cached stale redirects).
3.  If it still fails, provide Support with:

-   Recipe name
-   Import URL used
-   Timestamp and screenshot of the error

The recipe imports successfully and appears under the target project with all steps available.
