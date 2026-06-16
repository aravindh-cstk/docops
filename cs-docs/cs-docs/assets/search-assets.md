---
title: "[AM2.0] - Search Assets"
description: Search in Assets allows you to quickly locate assets using Basic Search, Advanced Search, and Quick Search.
url: https://www.contentstack.com/docs/assets/search-assets
product: AM2.0
doc_type: guide
audience:
  - content-managers
  - developers
version: "2.0"
last_updated: 2026-03-25
---

# [AM2.0] - Search Assets

This page explains how to search for assets in AM2.0 using Basic Search, Advanced Search, and Quick Search. It is intended for users who manage or locate assets and need either quick lookups or precise multi-condition queries.

### Item 1

#### Article section

##### Heading

Search Assets

##### Content

Search in Assets allows you to quickly locate assets. Whether you need a single file or a group of related assets, you can use Basic Search for quick lookups or Advanced Search for precise, multi-condition queries.

## Basic Search
Basic Search scans across various fields to help you find assets with minimal effort.
- Navigate to **Assets** through “App Switcher”.
- Locate the search bar at the top of the asset listing page.
- Use the dropdown to choose your search scope:**All**: Searches across all available fields of all assets.
- **Title**: Limits search to asset titles only.
- **URL**: Limits search to the URL field of assets.

Example: To find a PDF asset titled “Product Catalog 2025”, select **Title**, type “Product Catalog 2025”, and the results display the matching assets.

**Tip:** You can also use partial search.
- Type the beginning of a keyword (e.g., “cat”) to match “catalog” or “category”.
- Use an asterisk (`*`) for suffix/infix matches (e.g., “*alog” matches “catalog”).

## Advanced Search
Advanced Search gives you fine-grained control by allowing you to build queries with multiple conditions.
- On the asset listing page, click **Advanced Search** next to the search bar.
- Choose whether to **Match All Conditions** (AND logic) or **Match Any Condition** (OR logic).
- Define your search conditions by selecting:**Field**: Options include asset type, published environment, published by, created at, modified by, tags, UID, and more.
- **Operator**: Depends on the data type (equals, contains, empty, and more).
- **Value**: The specific input to match.
- Add more conditions with **+ New Condition**, or group logic with **+ New Sub-condition**.
- Click **Search** to run the query.

Example: Build a query to find:
- All JPEG images (Asset Type = JPEG)
- Uploaded by John Doe (Created By = John Doe)
- Between January 1–March 31, 2025 (Created At between dates)

**Additional Resource:** Refer to the [Real-world Scenarios](/docs/content-managers/search-content/localization-operator-real-world-scenarios) section for more advanced search examples.

## Quick Search
You can also perform a quick search from anywhere in Asset Management or your stack.
- Press `Ctrl + K` (Windows/Linux) / `⌘ + K` (Mac) or click the “Quick search” icon to open quick search.
- Select **Assets** from the dropdown.
- Enter your search terms.

## Common questions

### What is the difference between Basic Search and Advanced Search?
Basic Search scans across various fields for quick lookups, while Advanced Search lets you build queries with multiple conditions and AND/OR logic.

### Can I search using partial keywords?
Yes. You can type the beginning of a keyword (e.g., “cat”) or use an asterisk (`*`) for suffix/infix matches (e.g., “*alog”).

### How do I open Quick Search?
Press `Ctrl + K` (Windows/Linux) / `⌘ + K` (Mac) or click the “Quick search” icon to open quick search.

### Where can I find more advanced search examples?
Refer to the [Real-world Scenarios](/docs/content-managers/search-content/localization-operator-real-world-scenarios) section for more advanced search examples.