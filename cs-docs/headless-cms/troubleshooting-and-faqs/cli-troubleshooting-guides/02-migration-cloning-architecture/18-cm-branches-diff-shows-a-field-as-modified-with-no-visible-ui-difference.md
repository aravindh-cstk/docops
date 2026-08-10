---
title: "cm:branches:diff Shows a Field as Modified with No Visible UI Difference"
description: "cm:branches:diff Shows a Field as Modified with No Visible UI Difference"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/18-cm-branches-diff-shows-a-field-as-modified-with-no-visible-ui-difference
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs8448c34a5a384166
---

# cm:branches:diff Shows a Field as Modified with No Visible UI Difference

Running cm:branches:diff to compare two branches showed a modification in a content type's field, but manually reviewing both branches in the UI showed no visible difference.

**Root Cause**

cm:branches:diff supports exactly two --format values: compact-text (the default) and detailed-text - there is no separate "summary" format. compact-text only lists which content types or global fields were added, deleted, or modified. detailed-text fetches a per-field comparison and renders field-level differences, a finer-grained diff than the coarse list. The CLI doesn't invent or compute extra metadata - it renders whatever the field-level comparison returns, which can include non-visual properties such as field order or internal attributes the standard schema UI doesn't render. Field reordering, or a difference in an attribute the comparison tracks but the UI doesn't display, can both produce this symptom.

**Resolution**

1.  When --format detailed-text reports a change with no visible UI difference, treat it as a field-level metadata difference rather than a CLI defect.
2.  If only the coarse added/deleted/modified list matters, use the default compact-text format (or omit --format entirely) instead of detailed-text.
