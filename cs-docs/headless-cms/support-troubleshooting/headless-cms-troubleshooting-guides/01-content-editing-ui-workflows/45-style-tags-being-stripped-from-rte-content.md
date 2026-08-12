---
title: "<style> Tags Being Stripped from RTE Content"
description: "<style> Tags Being Stripped from RTE Content"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/45-style-tags-being-stripped-from-rte-content
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs96831d63644777ae
---

# <style> Tags Being Stripped from RTE Content

CSS inside <style> tags entered in the RTE is removed when the entry is saved. The same workflow works in another stack, suggesting an inconsistency in configuration.

**Root Cause**

The RTE strips <style> tags by default as part of HTML sanitization. The other stack where this works has the sys\_rte\_allowed\_tags stack variable configured to explicitly allow style tags. Without this configuration, <style> tags are removed on save.

**Resolution**

1.  Use the CMA to update the stack settings and allow style tags:
2.  PUT /v3/stacks with body: { “stack”: { “stack\_variables”: { “sys\_rte\_allowed\_tags”: “style,script,figure” } } }
3.  Verify the setting is applied by calling GET /v3/stacks and checking the stack\_variables in the response.

After updating the stack settings, enter CSS in <style> tags in the RTE and save the entry. Confirm the styles are preserved in the saved entry content.
