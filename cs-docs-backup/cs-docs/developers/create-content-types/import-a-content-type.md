---
title: "[Set Up Your Project] - Import a Content Type"
description: Import the JSON file of a content type into your stack in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/import-a-content-type
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Import a Content Type

This page explains how to import a content type JSON file into a Contentstack stack. It is intended for developers setting up or migrating content models, and should be used when you need to add an existing content type definition to a stack.

## Import a Content Type

Contentstack allows you to import the JSON file of a [content type](./about-content-types.md) into your [stack](../set-up-stack/about-stack.md).

To import a content type, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your stack, and click on the "Content Models" icon from the left navigation pane.
- Click on the **Import Content Type** icon located at the top right corner of the page.
- This opens the **Import Content Type** window where you can browse and upload the JSON file of the content type that you want to import.
- Click **Import** to import your content type.

After successfully importing the content type, you can add [entry(ies)](../../content-managers/author-content/about-entries.md) to it, and publish them to an [environment](../set-up-environments/about-environments.md).

## API Reference

Here are the links to the API requests related to this action:
- [Import a Content Type](../../../api-docs/api-detail/content-management-api.md#import-a-content-type)
- [Create a Content Type](../../../api-docs/api-detail/content-management-api.md#create-a-content-type)

## Common questions

**How do I import a content type into a stack?**  
Log in to your Contentstack account, open your stack, go to "Content Models," click **Import Content Type**, upload the JSON file, and click **Import**.

**What file format is required to import a content type?**  
You need to upload the JSON file of the content type that you want to import.

**What can I do after importing a content type?**  
After successfully importing the content type, you can add entry(ies) to it, and publish them to an environment.

**Where can I find API requests related to importing content types?**  
See the **API Reference** section for links to **Import a Content Type** and **Create a Content Type** in the Content Management API documentation.