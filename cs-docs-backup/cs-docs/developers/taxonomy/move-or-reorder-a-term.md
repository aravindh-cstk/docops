---
title: "[Taxonomy] - Move/Reorder a Term"
description: Instructions for moving or reordering taxonomy terms in Contentstack, plus a link to the corresponding API reference.
url: https://www.contentstack.com/docs/headless-cms/move-or-reorder-a-term
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Taxonomy] - Move/Reorder a Term

This page explains how to move or reorder terms within a taxonomy in Contentstack. It is intended for users managing taxonomy structures in a stack and for developers who may also want to perform the same action via the Content Management API.

Move/Reorder a Term

After creating terms, you can adjust their hierarchy within the taxonomy.

To move or reorder terms within a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to edit the terms, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Select the taxonomy for which you want to move or reorder the terms.
- To rearrange the terms, hover over it, then drag and drop it to your desired position. After placing the term, click **Move** in the confirmation popup modal that appears.To relocate a term as a parent term, use drag and drop when you see a guiding line.
- To place the term as a child term, simply drag and drop it when a box appears.

## API Reference
To move and reorder terms via API, refer to the [Move/Reorder a Term](../../../api-docs/api-detail/content-management-api.md#move-reorder-a-term) API request.

## Common questions

### Can I change a term’s hierarchy after creating it?
Yes. After creating terms, you can adjust their hierarchy within the taxonomy.

### Where do I manage taxonomy terms in the UI?
Go to your stack, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.

### How do I make a term a parent term vs. a child term?
To relocate a term as a parent term, use drag and drop when you see a guiding line. To place the term as a child term, drag and drop it when a box appears.

### Is there an API to move or reorder terms?
Yes. Refer to the [Move/Reorder a Term](../../../api-docs/api-detail/content-management-api.md#move-reorder-a-term) API request.