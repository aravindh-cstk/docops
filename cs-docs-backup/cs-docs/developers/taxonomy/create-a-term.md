---
title: "[Taxonomy] - Create a Term"
description: Instructions for creating taxonomy terms in Contentstack and a link to the API reference for creating terms via API.
url: https://www.contentstack.com/docs/headless-cms/create-a-term
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Taxonomy] - Create a Term

This page explains how to create a taxonomy term in Contentstack (including parent, sibling, and child terms). It is intended for users managing taxonomy structures in a stack and for developers who may also create terms via the Content Management API.

## Create a Term

Terms serve as the primary classification elements within a taxonomy, allowing you to establish hierarchical structures and incorporate them into entries.

To create a term, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to create a term, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Create a new taxonomy or select an existing taxonomy in which you want to create terms.
- Click the **Add Term** button.
- Enter the **Name** for the term. Contentstack auto-generates a **Unique ID**, which you can edit before saving.**Note**: Once saved, you cannot change the UID.
- Click the **Save** button to save the term within your taxonomy.
- To add another term at the parent level, click **Add Term** and enter the details for the new term. You can also create a sibling term by clicking the vertical ellipsis next to an existing term and selecting **Create Sibling**.
- To create a nested term within a parent term, click the vertical ellipsis next to that term and select **Create Child**, then enter the details for the child term.

## API Reference

To create terms via API, refer to the [Create a Term](../../../api-docs/api-detail/content-management-api.md#create-a-term) API request.

## Common questions

### Can I change the UID after saving a term?
No. **Note**: Once saved, you cannot change the UID.

### How do I create a sibling term?
Click the vertical ellipsis next to an existing term and select **Create Sibling**.

### How do I create a nested (child) term?
Click the vertical ellipsis next to the parent term and select **Create Child**, then enter the details for the child term.

### Can I create terms using an API instead of the UI?
Yes. To create terms via API, refer to the [Create a Term](../../../api-docs/api-detail/content-management-api.md#create-a-term) API request.