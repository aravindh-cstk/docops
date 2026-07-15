---
title: "[Author Content] - View Entry References"
description: The View Entry References feature helps you understand how entries are connected across your stack.
url: https://www.contentstack.com/docs/headless-cms/view-entry-references
product: Contentstack
doc_type: feature-guide
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - View Entry References

This page explains how to use the **View Entry References** feature and **Reference Map** to understand where an entry is referenced and how entries are connected across your stack. It is intended for content managers and authors who need to assess relationships and dependencies before updating entries.

## View Entry References

The **View Entry References** feature helps you understand how entries are connected across your stack. It shows where an entry is referenced and allows you to visualize its relationships within and across content types.

This helps you manage interconnected content more efficiently by identifying parent and child relationships before making updates.

To view references, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and open the desired entry.
- Click the **Information** tab (represented by the **i** icon).
- Scroll to the **Referenced In** section. This section lists all entries that reference the current entry. Each entry name is clickable, allowing you to open and edit the referencing entry directly.
- To visualize relationships, click **View Reference Map**. This option is also available within applicable **Reference** fields.![View_Entry_References.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f6e2717e56ff107/69a546ab7ba984ac9c9e370e/View_Entry_References.gif)

## Understanding the Reference Map

The Reference Map visually represents how entries are connected.
- The **center node** represents the currently opened entry.
- Nodes on the **left** represent parent entries (where the current entry is referenced).
- Nodes on the **right** represent child entries (entries referenced by the current entry).

By default, the map loads direct parent and direct child relationships.

You can interact with the map to explore deeper relationships:
- **Expand or collapse nodes** to load additional related entries.
- **Zoom in or out** to adjust the level of detail.
- **Drag the map** to reposition the view within the modal.
- **Select a node** to highlight its relationship path.
- **Click an entry name** to open it in a new browser tab.

The map automatically adjusts the default zoom level based on the number of visible nodes to ensure optimal visibility.

The Reference Map provides a clear, interactive view of entry dependencies. It helps you assess impact before editing, maintain content consistency, and navigate complex content relationships with confidence.

## Common questions

**How do I find which entries reference the current entry?**  
Open the entry, click the **Information** tab, and scroll to the **Referenced In** section.

**What is the difference between parent and child entries in the Reference Map?**  
Parent entries are where the current entry is referenced (shown on the **left**), and child entries are entries referenced by the current entry (shown on the **right**).

**Can I open a referenced entry directly from the references list or map?**  
Yes. Each entry name is clickable in the **Referenced In** section, and you can **Click an entry name** in the map to open it in a new browser tab.

**Does the Reference Map show all relationships by default?**  
By default, the map loads direct parent and direct child relationships, and you can expand nodes to explore deeper relationships.