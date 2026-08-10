---
title: "Enforce a Structured Tag Library for Content Editors"
description: "Enforce a Structured Tag Library for Content Editors"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/66-enforce-a-structured-tag-library-for-content-editors
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csde2644a491c36ab2
---

# Enforce a Structured Tag Library for Content Editors

A team wants editors to choose tags from an approved list rather than entering arbitrary text in the Tags field. A controlled, typeahead-style tag library is needed.

**Root Cause**

The native Tags field accepts free-text input and provides typeahead suggestions for previously used tags, but does not enforce selection from a fixed list. To enforce a controlled vocabulary, additional approaches are needed.

**Resolution**

Three options are available with varying enforcement levels:

1.  Native Tags field with suggestions (lowest enforcement): the Tags field will suggest previously used tags in typeahead, but editors can still enter new values. Requires editorial discipline.
2.  Reference-based tag content type (highest enforcement): create a ‘Tag’ content type with a required Title field. Use a Reference field in place of the Tags field. Editors can only select from existing Tag entries, fully enforcing the controlled vocabulary.
3.  Custom field via Apps Framework (full control): build a custom field extension that displays a controlled tag selector backed by a Tag content type or external source. Editors see only approved tags and cannot enter free text.

After implementing the chosen approach, confirm editors can only select from the approved tag list and cannot add unsanctioned tags.
