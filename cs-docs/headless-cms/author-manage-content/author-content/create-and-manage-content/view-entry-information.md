---
title: "View Entry Information"
description: "Access metadata and localization details for an entry using the Entry Information panel in Contentstack."
url: /headless-cms/view-entry-information
---

# View Entry Information

## View Entry Information

The Entry Information panel displays metadata, reference details, and localization status for an entry. Use this panel to review ownership, track updates, and understand how the entry is used across your content.

To view the Entry Information panel, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Open an entry in your stack.
2.  Click the **Entry Information** (i) icon in the right-side panel.
3.  View the entry details in the panel.

## Basic Information

The **Basic Information** section shows core metadata for the entry:

-   **Entry ID**: A unique identifier for the entry. Use the copy icon to copy the ID for API usage or debugging.
-   **Content Type ID:** Identifies the associated content type, useful for API and integration workflows.
-   **Created By:** Displays the user who created the entry.
-   **Created At:** Shows the date and time when the entry was created.
-   **Modified By:** Displays the user who last updated the entry.
-   **Modified At:** Shows the date and time of the most recent update.

![Basic Information of Entry.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am9ba0e622435a5278/f0130551272396f51ec1ad82/Basic_Information_of_Entry.png?locale=en-us)

## Referenced In

The Referenced In section shows where this entry is used across other entries.

-   The count indicates the **total number** of **references**.
-   Each item represents an entry that **references the current entry**.
-   Labels provide additional context, such as content grouping or structure.

You can perform the following actions:

-   Click a reference item to open the selected entry.
-   Click **View Reference Map** to see all connected references.
-   Click **See All** to view the complete list of references.

![Entry Referenced In.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ame24866609af044c7/ca22351de0562785c15484e6/Entry_Referenced_In.png?locale=en-us)

This section helps you identify dependencies and assess how updates may affect other content.

## Localization Status

The Localization Status section shows the entry’s state across locales:

-   **Master**: Primary locale (for example, English) from which localizations are created.
-   **Localized**: Locales where the entry is available.
-   **Unlocalized**: Locales where the entry is available but not yet localized.

![Entry Localization Status.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amfdc98b6d05cd24a9/2fe881ba4f742ab39674b8a3/Entry_Localization_Status.png?locale=en-us)

Click a locale to view or manage the entry in that language.

The Entry Information panel gives you a centralized view of an entry’s metadata, references, and localization status. By using this panel, you can quickly track changes, understand dependencies, and manage content across locales with confidence.
