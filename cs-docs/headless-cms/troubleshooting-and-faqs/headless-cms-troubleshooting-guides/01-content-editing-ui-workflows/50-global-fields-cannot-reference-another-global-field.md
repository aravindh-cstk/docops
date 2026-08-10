---
title: "Global Fields Cannot Reference Another Global Field"
description: "Global Fields Cannot Reference Another Global Field"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/50-global-fields-cannot-reference-another-global-field
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs95dbc4016ae3fb35
---

# Global Fields Cannot Reference Another Global Field

A customer wants to create a structure where a Global Field references another Global Field (for example, a FeaturedCard global field referencing a MediaAsset global field). The relationship cannot be established.

**Root Cause**

Global Fields in Contentstack do not support direct references to other Global Fields. A Global Field can only be referenced from within a Content Type or as a block within a Modular Block - not by another Global Field.

**Resolution**

The following workarounds are available:

1.  Convert the referenced global field into a regular Content Type. Entries of that content type can then be referenced from within the parent Global Field using a Reference field.
2.  Replicate the fields from the nested global field directly into the parent Global Field if the structure is simple enough.
3.  Create a connector Content Type that brings together the fields from both global structures, used wherever the combined structure is needed.

After restructuring using one of the above approaches, verify the content type schema works as expected and entries can be created with the correct field relationships.
