---
title: "[Search Content] - Advanced Search"
description: Advanced Search in Contentstack enables precise, field-level searches on entries and assets using multiple conditions and complex logic.
url: https://www.contentstack.com/docs/headless-cms/advanced-search
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Search Content] - Advanced Search

This page explains how to use Advanced Search in Contentstack to run precise, field-level searches across entries and assets using multiple conditions and nested logic. It is intended for Contentstack users who need more control than Basic Search provides, and should be used when refining results with operators, multiple conditions, and sub-conditions.

## Advanced Search

Advanced Search in Contentstack enables precise, field-level searches on entries and assets, allowing you to find exactly what you need with minimal effort. This feature enhances your search capabilities by applying multiple conditions and leveraging complex logic to refine your results.

**Note:** Basic Search and Advanced Search cannot be used together. If both are applied, the Advanced Search query will override the Basic Search.

To conduct an advanced search, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and select the “[Entries](../author-content/about-entries.md)” or “[Assets](../author-content/about-assets.md)” module.
- Click the **Advanced Search** button next to the search bar.![alt_text](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f8603507fba30f3/68403c3c3010e38996e22b23/1._Advanced_Search_Button.png)
- By default, you’ll see **Match All Conditions**, but you can switch to **Match Any Conditions** if needed.
- Configure your search query:  
  **Content Type or Field**: Select from options like Content Type, Published Environment, Published At, Published By, Language, Modified At, Modified By, Created At, Created By, UID, and Tag.
- **Operator**: Select an operator depending on the data type of the selected field.  
  **Additional Resource:** Refer to our documentation on [**Supported Operators for Various Data Types**](./supported-operators-for-various-data-types.md) for more information.
- **Value**: Enter or select the appropriate value based on the field and operator.
- To add multiple search queries, click **+ New Condition**.

**Note:** All conditions or queries added at the same level must use either the **ALL** operator or the **ANY** operator—mixing both is not supported.

- To build complex queries and refine your search, click the **+ New Sub-condition** button. You will see a nested block, within which you can build your query in the same way as explained above.
- Once satisfied with your query, click the **Search** button in the top-right corner.![alt_text](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32f21b5e9627d2a9/68403c3d64e28642eabc6511/2-Advanced-Search-Example.gif)
- You can also modify your query and search again. To do that, click **Modify Advanced Search**.![alt_text](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt329e8cc0cce3b657/68403c3c0296e4a7e2b01f93/3._Modify_Advanced_Search.png)
- To remove specific query levels, click the **Remove** button across each query.
- Click **Reset** to reset your search query.![alt_text](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7601d7cc3f4e31c4/68403c3cafd14d6fef628686/4._Advanced_Search_-_Reset_search.png)

**Additional Resource:** For a more detailed understanding of using Advanced Search effectively, refer to the  
[**Real-world Scenarios**](./localization-operator-real-world-scenarios.md)  
section.

## Common questions

**How is Advanced Search different from Basic Search?**  
Advanced Search enables precise, field-level searches using multiple conditions and complex logic, while Basic Search does not.

**Can I use Basic Search and Advanced Search at the same time?**  
**Note:** Basic Search and Advanced Search cannot be used together. If both are applied, the Advanced Search query will override the Basic Search.

**Can I mix ALL and ANY operators in the same query level?**  
**Note:** All conditions or queries added at the same level must use either the **ALL** operator or the **ANY** operator—mixing both is not supported.

**Where can I learn more about operators and examples?**  
Refer to [**Supported Operators for Various Data Types**](./supported-operators-for-various-data-types.md) and [**Real-world Scenarios**](./localization-operator-real-world-scenarios.md).