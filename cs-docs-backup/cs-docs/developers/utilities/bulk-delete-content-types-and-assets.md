---
title: "[Tools] - Bulk Delete Content Types and Assets"
description: Contentstack utility for performing bulk delete operations on content types and assets.
url: https://www.contentstack.com/docs/developers/utilities/bulk-delete-content-types-and-assets
product: Contentstack
doc_type: utility-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Tools] - Bulk Delete Content Types and Assets

This page explains how to use Contentstack’s Bulk Delete Utility to delete all content types or specific content types, and all assets in a single operation. It is intended for developers who need to perform bulk cleanup tasks in a stack using the `contentstack-bulk-delete` utility.

## Bulk Delete Content Types and Assets

Contentstack's Bulk Delete Utility allows you to perform bulk delete operations. That means, that it is possible to delete all content types or a specific content type(s), and all assets in just one operation.

In this document, we will look at the steps for using this Bulk Delete Utility.

## Download and Install the Utility

To perform bulk delete operations on all or specific content types and all assets, you need to first download the "contentstack-bulk-delete" utility from [GitHub](https://github.com/contentstack/contentstack-bulk-delete). This utility consists of modules that will help you to perform the desired operations.

- Move inside your project directory and install the required npm dependencies as follows:

```
npm install
```

## Make Configuration Changes

Open the config file from the project that you downloaded in the above step and open the index.js file:

```
{
 master_locale: {
  name: ''”// Stack's master locale. ex: 'English - United States'
  code: ''''  // Stack master locale's code. ex: 'en-us'
 },
 email: '''', // Your registered email id
 password: '''', // Account password
 source_stack: '''' // Stack api_key
 content_types_list:[], // Specify specific content types in array eg: ['product', 'category']
  assetsdelete: ''''//Bollean value, Example: true or false
 ...
}
```

## Use the contentstack-bulk-delete Utility

After you have made the changes to your project's config file, the next step is to use the utility to delete a specific module (content type or assets).

Stay in your project directory and execute the following command:

```
npm run delete-assets
npm run delete-contenttypes
npm run start
```

**Note**: Your empty assets folders will not be deleted by the utility.

## Common questions

### Can I delete only specific content types instead of all content types?
Yes. Use `content_types_list:[]` to specify specific content types in array eg: `['product', 'category']`.

### Where do I get the Bulk Delete Utility?
Download the "contentstack-bulk-delete" utility from [GitHub](https://github.com/contentstack/contentstack-bulk-delete).

### Will the utility delete empty asset folders?
No. **Note**: Your empty assets folders will not be deleted by the utility.

### Which commands run the delete operations?
Run:
- `npm run delete-assets`
- `npm run delete-contenttypes`
- `npm run start`