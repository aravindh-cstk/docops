---
title: "[Search Content] - Supported Operators for Various Data Types"
description: Supported operators for querying fields across various data types in Advanced Search in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/supported-operators-for-various-data-types
product: Contentstack
doc_type: reference
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Search Content] - Supported Operators for Various Data Types

This page lists the supported Advanced Search operators in Contentstack for different field/data types, helping content managers and developers choose the correct operators when building search and filtering queries.

## Supported Operators for Various Data Types

When working with [Advanced Search](./advanced-search.md) in Contentstack, it is essential to understand the different operators available for querying fields across various data types. These operators enable you to filter data efficiently. The table below outlines the supported operators for each data type, helping you make the most out of Contentstack’s search and filtering capabilities:

| Fields | Supported Operators |
|---|---|
| Title | - $eq = Matches<br>- $regex = Contains<br>- $not: {$regex: "abc"} = Does not contain<br>- $ne = Does not match<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| URL | - $eq = Matches<br>- $regex = Contains<br>- $not: {$regex: "abc"} = Does not contain<br>- $ne = Does not match<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| Single Line Textbox (Text) | - $eq = Matches<br>- $regex = Contains<br>- $not: {$regex: "abc"} = Does not contain<br>- $ne = Does not match<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| Multi Line Textbox (Text) | - $regex = Contains<br>- $not: {$regex: "abc"} = Does not contain<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| Rich Text Editor (Text) | - $regex = Contains<br>- $not: {$regex: "abc"} = Does not contain<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| JSON Rich Text Editor (Text) | - $regex = Contains<br>- $not: {$regex: "abc"} = Does not contain<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| Markdown (Text) | - $regex = Contains<br>- $not: {$regex: "abc"} = Does not contain<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| Select (Boolean) | - $eq = Matches<br>- $ne = Does not match |
| Modular Blocks | Not applicable |
| Number | - $eq = Equals<br>- $lte = Is lesser than and equals<br>- $gte = Is greater than and equals<br>- $ne = Does not match<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| Boolean | - $eq = Matches<br>- $ne = Does not match |
| Date (Number) | - $eq = Equals<br>- $lte = Is lesser than and equals<br>- $gte = Is greater than and equals<br>- $lt = Is lesser than<br>- $gt = Is greater than<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| File | - $eq = Matches<br>- $ne = Does not match<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| Link | **Title**<br>- Title: {$eq} = Matches<br>- Title: {$regex} = Contains<br>- Title: {$not: {$regex: "abc"}} = Does not contain<br>- Title: {$ne} = Does not match<br>- Title: {$exists : true} = Is not empty<br>- Title: {$exis : false} = is empty<br><br>**URL**<br>- URL: {$eq} = Matches<br>- URL: {$regex} = Contains<br>- URL: {$not: {$regex: "abc"}} = Does not contain<br>- URL: {$ne} = Does not match<br>- URL: {$exists : false} = Is empty<br>- URL: {$exists : true} = Is not empty |
| Reference | - $eq = Matches<br>- $ne = Does not match<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |
| Group | Not applicable |
| Environment tags | - $eq = Matches<br>- $ne = Does not match |
| Language/locale | - $eq = Matches<br>- $ne = Does not match |
| Users | - $eq = Matches<br>- $ne = Does not match |
| Tag | - $eq = Matches<br>- $ne = Does not match<br>- $exists : false = Is empty<br>- $exists : true = Is not empty |

**Note**: The **Matches** operator is case-sensitive.

## Common questions

### Are all operators available for every field type?
No. The supported operators vary by data type, and some field types such as Modular Blocks and Group are listed as Not applicable.

### What does `$exists : false` mean in these operators?
`$exists : false` is listed as **Is empty**, and `$exists : true` is listed as **Is not empty**.

### Is the **Matches** operator case-sensitive?
Yes. **Note**: The **Matches** operator is case-sensitive.

### Can Link fields be queried by both Title and URL?
Yes. Under **Link**, operators are listed separately for **Title** and **URL**.