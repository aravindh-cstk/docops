---
title: "[Headless CMS | Entry] - View Entry Information"
description: View Entry Information
url: https://www.contentstack.com/docs/headless-cms/view-entry-information
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-05-25
---

# [Headless CMS | Entry] - View Entry Information

This page explains how to access and use the Entry Information panel in Contentstack to review an entry’s metadata, references, and localization status. It is intended for users who manage or review entries and need to understand ownership, dependencies, and locale coverage while working in a stack.

## View Entry Information

The Entry Information panel displays metadata, reference details, and localization status for an entry. Use this panel to review ownership, track updates, and understand how the entry is used across your content.

To view the Entry Information panel, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Open an entry in your stack.
- Click the **Entry Information** (i) icon in the right-side panel.
- View the entry details in the panel.

## Basic Information

The **Basic Information** section shows core metadata for the entry:
- **Entry ID**: A unique identifier for the entry. Use the copy icon to copy the ID for API usage or debugging.
- **Content Type ID:** Identifies the associated content type, useful for API and integration workflows.
- **Created By:** Displays the user who created the entry.
- **Created At:** Shows the date and time when the entry was created.
- **Modified By:** Displays the user who last updated the entry.
- **Modified At:** Shows the date and time of the most recent update.

## Referenced In

The Referenced In section shows where this entry is used across other entries.
- The count indicates the **total number** of **references**.
- Each item represents an entry that **references the current entry**.
- Labels provide additional context, such as content grouping or structure.

You can perform the following actions:
- Click a reference item to open the selected entry.
- Click **View Reference Map** to see all connected references.
- Click **See All** to view the complete list of references.

This section helps you identify dependencies and assess how updates may affect other content.

## Localization Status

The Localization Status section shows the entry’s state across locales:
- **Master**: Primary locale (for example, English) from which localizations are created.
- **Localized**: Locales where the entry is available.
- **Unlocalized**: Locales where the entry is available but not yet localized.

Click a locale to view or manage the entry in that language.

The Entry Information panel gives you a centralized view of an entry’s metadata, references, and localization status. By using this panel, you can quickly track changes, understand dependencies, and manage content across locales with confidence.

## Common questions

### Where do I find the Entry Information panel?
Open an entry in your stack and click the **Entry Information** (i) icon in the right-side panel.

### What can I use the Entry ID for?
You can copy the **Entry ID** for API usage or debugging.

### What does “Referenced In” tell me?
It shows where the current entry is used across other entries, including the total number of references and the entries that reference it.

### What is the difference between Master, Localized, and Unlocalized?
**Master** is the primary locale from which localizations are created, **Localized** are locales where the entry is available, and **Unlocalized** are locales where the entry is available but not yet localized.