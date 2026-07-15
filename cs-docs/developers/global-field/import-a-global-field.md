---
title: "[Global Field] - Import a Global Field"
description: Import a Global Field
url: https://www.contentstack.com/docs/headless-cms/import-a-global-field
product: Contentstack
doc_type: how-to
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Global Field] - Import a Global Field

This page explains how to import a Global field into a stack using the Contentstack UI, and points to the API reference for importing a Global field via API. It is intended for developers or content modelers who need to bring an existing JSON configuration into a stack, especially when setting up or migrating content models.

## Import a Global Field

Importing a Global field allows you to seamlessly integrate an existing JSON configuration into your stack, saving time and effort in content modeling.

To import a Global field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to import a Global field.
- Click the **Content Models** icon in the left navigation panel and select **Global Fields** in the left panel.
- Click the **Import Global Field** icon at the top right corner.
- In the **Import Global Field** modal, browse and select the JSON file of the Global field you want to import.
- Click **Import** to complete the process.![Import Global Field modal interface](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf7875e1069d942e/67ffa258782624e5d02e2e60/1-Import-Global-Field-1.gif)

**Note:** When working with nested Global fields, ensure that all child Global fields are imported before attempting to import the parent Global field.

By following these steps, you can efficiently bring in existing Global fields and ensure a structured approach to content management.

## API Reference

To import a Global field via API, refer to the [Import Global Field](../../../api-docs/api-detail/content-management-api.md#import-global-field) API request.

## Common questions

### What file format is required to import a Global field?
You need to browse and select the JSON file of the Global field you want to import.

### Where do I find the import option in the UI?
Click the **Content Models** icon in the left navigation panel, select **Global Fields**, then click the **Import Global Field** icon at the top right corner.

### Do nested Global fields require a specific import order?
Yes. When working with nested Global fields, ensure that all child Global fields are imported before attempting to import the parent Global field.

### Can I import a Global field using an API instead of the UI?
Yes. Refer to the [Import Global Field](../../../api-docs/api-detail/content-management-api.md#import-global-field) API request.