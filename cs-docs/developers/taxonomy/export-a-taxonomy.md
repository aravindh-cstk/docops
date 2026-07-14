---
title: "[Taxonomy] - Export a Taxonomy"
description: Export a taxonomy in JSON or CSV format in Contentstack, and reference the API request for exporting taxonomies.
url: https://www.contentstack.com/docs/headless-cms/export-a-taxonomy
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Taxonomy] - Export a Taxonomy

This page explains how to export a taxonomy from Contentstack in JSON or CSV format. It is intended for users who manage taxonomies in a stack and need to download them for backup, migration, or external processing, and for developers who may prefer exporting via the API.

## Export a Taxonomy

With Contentstack, you can easily export a taxonomy in a JSON or CSV file.

To export a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to export a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Select the taxonomy you want to export and click the “ellipsis” (three dots) in the **Actions **column.
- Choose the file format for exporting your taxonomy by selecting either **Export as JSON** or **Export as CSV**.![Export Taxonomy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltab2260b411fdfcf5/6929bdd1308e506638307741/Export_Taxonomy.png)

The system downloads the JSON or CSV file of your taxonomy and saves it to your local storage

## API Reference

To export taxonomies via the API, refer to the [Export a Taxonomy](../../../api-docs/api-detail/content-management-api.md#export-a-taxonomy) API request.

## Common questions

### Can I export a taxonomy in formats other than JSON or CSV?
No. The export options available are **Export as JSON** and **Export as CSV**.

### Where is the exported taxonomy file saved?
The system downloads the JSON or CSV file of your taxonomy and saves it to your local storage.

### Do I need to use the UI to export a taxonomy?
No. To export taxonomies via the API, refer to the [Export a Taxonomy](../../../api-docs/api-detail/content-management-api.md#export-a-taxonomy) API request.