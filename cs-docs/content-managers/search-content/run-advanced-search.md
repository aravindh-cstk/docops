---
title: "[Search Content] - Run Advanced Search"
description: Run Advanced Search in Contentstack using conditions, queries, and nested conditions.
url: https://www.contentstack.com/docs/headless-cms/run-advanced-search
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: v1
last_updated: 2026-03-26
---

# [Search Content] - Run Advanced Search

This page explains how to use Contentstack’s Advanced Search from the app header search bar to build conditional queries (including multiple and nested conditions) when searching for Entries or Assets.

## Run Advanced Search

Contentstack’s Advanced Search feature is accessible from the search bar located in the header of our app. To do an advanced search using conditions within your Contentstack app, you can perform the following steps:

- In the Search bar (press ctrl + K), select if you want to search for **Entries** or **Assets**.
- Click on **Advanced Search**
- Choose a condition. You will see **Match All** by default. On clicking it, you can switch to **Match Any**. Select the option that suits your requirements the best.
- Under the condition, you need to enter your search query(ies). A search query contains **a field**, **an operator**, and **the expected value**. For example, you can search for an entry with a specific title. So, select the field **Title**, then use the operator **Matches**, and then enter the value that you are looking for, say **Home**.The field drop-down lets you first select only **SYSTEM-DEFINED FIELDS**, such as **Content Type**, **Created By**, **Updated By**, **Published By**, **Published Environment**, **Created At**, **Updated At**, **Published At**, **Language**, **Tags**, **UID**.
- Once you select a field, the next drop-down option lets you select a conditional operator based on the field you select. So if you select the field as "Content Type" you should see **matches**, **contains**, **does not match**).

The operators depend on the data type of the field that you have chosen. For example, if you select **Title** (which is of ‘string’ data type), you will be able to see operators that support string data type i.e., ‘matches’, ‘contains,’ and so on. We have covered more about this in the latter section.

To add multiple search queries, click the **+** link, and enter your query as explained above.

**Note:** All the conditions or queries that you add on the same level will work with either ‘ALL’ or ‘ANY’ operator, not a mix of both.

- Finally, you can add nested conditions. Nested conditions help you build really complex queries to further refine your search.
  To add a nested condition, click the **+** link. You will see a nested block, within which you can select the ‘ALL’ or ‘ANY’ operator.

## Common questions

**Q: Where do I access Advanced Search in Contentstack?**  
A: Contentstack’s Advanced Search feature is accessible from the search bar located in the header of our app.

**Q: What can I search for using Advanced Search?**  
A: In the Search bar (press ctrl + K), select if you want to search for **Entries** or **Assets**.

**Q: What makes up a search query in Advanced Search?**  
A: A search query contains **a field**, **an operator**, and **the expected value**.

**Q: Can I combine multiple queries and nested conditions?**  
A: To add multiple search queries, click the **+** link, and enter your query as explained above. Finally, you can add nested conditions. Nested conditions help you build really complex queries to further refine your search.

