---
title: "Links Disappearing or Anchor Tags Wrapped in <p> Tags in RTE"
description: "Links Disappearing or Anchor Tags Wrapped in <p> Tags in RTE"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/88-links-disappearing-or-anchor-tags-wrapped-in-p-tags-in-rte
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs820d8255441195b9
---

# Links Disappearing or Anchor Tags Wrapped in <p> Tags in RTE

Hyperlinks entered in the Rich Text Editor disappear when switching between HTML and Design views, or anchor tags are automatically wrapped in <p> tags, breaking the intended HTML structure.

**Root Cause**

The RTE enforces block-level structure. Inline elements such as anchor tags (<a>) must be contained within a block-level element. If a link is entered at the top level without a surrounding block element, the RTE either removes it on view switch or automatically wraps it in a <p> tag to comply with HTML standards. This is expected RTE behavior for structural compliance.

**Resolution**

1.  When adding a hyperlink in the HTML view, ensure the anchor tag is always inside a block-level element: <p><a href=“…”>Link text</a></p>
2.  For links that keep disappearing: switch to HTML view, wrap the <a> tag inside a <p> tag, and switch back to Design view. The link will persist.
3.  For anchor tags being automatically wrapped in <p>: this is expected behavior and ensures valid HTML structure. Apply the <p> tag explicitly rather than relying on the RTE to do it automatically, as placement may vary.

After wrapping the anchor tag inside a <p> block element, confirm the link persists when switching between HTML and Design views.
