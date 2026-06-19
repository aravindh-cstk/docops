---
title: "[Taxonomy] - Edit a Term"
description: Edit a term in a taxonomy and update its properties in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/edit-a-term
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Taxonomy] - Edit a Term

This page explains how to edit an existing taxonomy term in Contentstack (via the UI) and where to find the corresponding API reference. It is intended for developers or content administrators managing taxonomy terms, and should be used after a term has already been created.

## Edit a Term

After creating a term, you can modify its properties, such as the name of the term.

To edit terms within a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) where you want to edit the terms, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Select the taxonomy for which you want to edit the terms.
- To edit a term, click the vertical ellipsis in the **Actions** column and select **Edit**.**Note**: Once saved, you cannot edit the UID.
- Click **Save** to update your changes.**Note**: If your stack includes multiple locales, the **Term Details** view displays a table of all available locales. From this table, you can [provide localized](/docs/developers/taxonomy/term-localization) values for each locale or rely on fallback behavior when a translation is not supplied.

## API Reference

To edit terms via the API, refer to the [Edit a Term](/docs/developers/apis/content-management-api#update-a-term) API request.

## Common questions

### Can I edit a term’s UID after saving?
No. **Note**: Once saved, you cannot edit the UID.

### Where do I edit taxonomy terms in the Contentstack UI?
Go to your stack, open the “Settings” icon (press “S”), and select **Taxonomy**, then choose the taxonomy and use **Actions** > **Edit** for the term.

### How do I edit a term using the API?
Use the API request referenced in **API Reference**: [Edit a Term](/docs/developers/apis/content-management-api#update-a-term).

### What happens if my stack has multiple locales?
The **Term Details** view displays a table of all available locales, where you can provide localized values per locale or rely on fallback behavior when a translation is not supplied.