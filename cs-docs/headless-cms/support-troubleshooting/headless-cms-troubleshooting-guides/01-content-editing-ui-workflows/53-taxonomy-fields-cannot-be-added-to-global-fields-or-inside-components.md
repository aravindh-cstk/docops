---
title: "Taxonomy Fields Cannot Be Added to Global Fields or Inside Components"
description: "Taxonomy Fields Cannot Be Added to Global Fields or Inside Components"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/53-taxonomy-fields-cannot-be-added-to-global-fields-or-inside-components
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csf1ab395a08524cab
---

# Taxonomy Fields Cannot Be Added to Global Fields or Inside Components

A customer receives an error or finds no option when trying to add a Taxonomy field inside a Global Field or a Modular Block component. Taxonomy fields can only be added at the top level of a content type.

**Root Cause**

Taxonomy fields are designed to be top-level fields within a content type by platform architecture. Nesting taxonomy fields inside Global Fields or Modular Blocks is not currently supported.

**Resolution**

Two workarounds are available:

1.  Reference-based workaround: Create a custom ‘Taxonomy Node’ content type that has a Taxonomy field at the top level. Add a Reference field inside the Global Field or Modular Block that references this Taxonomy Node content type. Editors select taxonomy terms through referenced entries.
2.  Select field workaround: For simpler, flat taxonomies, replace the Taxonomy field with a Select field containing the taxonomy values as options. This is suitable for small, static term sets that don’t require hierarchical querying.

After implementing the chosen workaround, verified editors can assign taxonomy-like values within the Global Field or Modular Block.
