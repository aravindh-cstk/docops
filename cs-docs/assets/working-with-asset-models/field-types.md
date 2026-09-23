---
title: "Field Types"
description: "Explore different field types in Asset Management for accurate metadata, including textboxes, links, selections, and more to streamline data handling."
url: /assets/field-types
uid: blta5cbafff38985359
---

# Field Types

## Field Types

When you create a field in Asset Management, you must choose a field type. Each field type controls how data is entered, validated, and displayed. Selecting the correct field type ensures metadata is captured accurately and consistently across your assets.

This document explains the available field types, their use cases, and the properties you can configure.

-   **Single Line Textbox**: Designed for short text values, e.g., product SKU, author name, or campaign code.
-   **Multi Line Textbox**: Captures longer text entries, e.g., description, usage notes, or legal terms.
-   **Link**: Stores URLs, such as a reference to an external product page, license agreement, or a hosted video.
-   **Select**: Provides predefined options for controlled choices, e.g., region (North America, Europe, Asia) or image angle (Front, Back, Side). A Select field is shown as a dropdown list, radio buttons, or checkboxes, depending on the display type you choose.
-   **Number**: Records numerical values, e.g., DPI, duration (seconds), or model version.
-   **Date**: Tracks date-specific information, e.g., shoot date, license expiration, or release date.
-   **Boolean**: Represents true/false or yes/no conditions, e.g., model release obtained or is\_featured.
-   **Group**: Bundles related fields into a single logical unit, e.g., Image Properties (with resolution, color profile, and DPI).

Choosing the right field type ensures that metadata is accurate, reusable, and easy to manage.

## Free Text or a Controlled List

The most consequential choice is between free text and a controlled list.

Use **Single Line Textbox** or **Multi Line Textbox** when the value is unique to each asset. A campaign name or a caption is different every time, and a list would grow without limit.

Use **Select** when the value belongs to a fixed set. Users pick from your list rather than typing, so every asset stores the same value and a filter returns all of them. Free-text metadata drifts the moment two people spell something differently, and no filter reunites the results.

**Additional Resource:** For how to build and maintain a choice list, refer to [Configure Select Fields](/docs/assets/configure-select-fields).
