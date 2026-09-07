---
title: "Search Assets"
description: "Easily find assets using Basic, Advanced, or Quick Search in Assets. Tailor your search for precise results with minimal effort."
url: /assets/search-assets
uid: bltd85e6b856afe0302
---

# Search Assets

## Search Assets

Search in Assets allows you to quickly locate assets. Whether you need a single file or a group of related assets, you can use Basic Search for quick lookups or Advanced Search for precise, multi-condition queries.

## Basic Search

Basic Search scans across various fields to help you find assets with minimal effort.

1.  Navigate to **Assets** through “App Switcher”.
2.  Locate the search bar at the top of the asset listing page.
3.  Use the dropdown to choose your search scope:
    -   **All**: Searches across all available fields of all assets.
    -   **Title**: Limits search to asset titles only.
    -   **URL**: Limits search to the URL field of assets.

Example: To find a PDF asset titled “Product Catalog 2025”, select **Title**, type “Product Catalog 2025”, and the results display the matching assets.

**Tip:** You can also use partial search.

-   Type the beginning of a keyword (e.g., “cat”) to match “catalog” or “category”.
-   Use an asterisk (\*) for suffix/infix matches (e.g., “\*alog” matches “catalog”).

## Advanced Search

Advanced Search gives you fine-grained control by allowing you to build queries with multiple conditions.

1.  On the asset listing page, click **Advanced Search** next to the search bar.
2.  Choose whether to **Match All Conditions** (AND logic) or **Match Any Condition** (OR logic).
3.  Define your search conditions by selecting:
    -   **Field**: Options include asset type, published environment, published by, created at, modified by, tags, UID, and more.
    -   **Operator**: Depends on the data type (equals, contains, empty, and more).
    -   **Value**: The specific input to match.
4.  Add more conditions with **\+ New Condition**, or group logic with **\+ New Sub-condition**.
5.  Click **Search** to run the query.

Example: Build a query to find:

-   All JPEG images (Asset Type = JPEG)
-   Uploaded by John Doe (Created By = John Doe)
-   Between January 1–March 31, 2025 (Created At between dates)

**Additional Resource:** Refer to the [Real-world Scenarios](/docs/headless-cms/localization-operator-real-world-scenarios) section for more advanced search examples.

## Quick Search

You can also perform a quick search from anywhere in Asset Management or your stack.

1.  Press Ctrl + K (Windows/Linux) / ⌘ + K (Mac) or click the “Quick search” icon to open quick search.
2.  Select **Assets** from the dropdown.
3.  Enter your search terms.
