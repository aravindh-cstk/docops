---
title: "[Taxonomy] - Create a Taxonomy"
description: Create a taxonomy to organize and structure your website’s content in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/create-a-taxonomy
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Taxonomy] - Create a Taxonomy

This page explains how to create a taxonomy in Contentstack to organize and structure website content. It is intended for users who manage stacks and settings, and should be used when setting up taxonomy containers before creating and associating terms.

## Create a Taxonomy

A taxonomy defines the categorical container to organize and structure your website’s content.

To create a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) where you want to create a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Click the **New Taxonomy** button.
- In the **Create New Taxonomy** modal that appears, add the following details:Enter the **Name** for the taxonomy. The **Unique ID** will be auto-generated and can be edited until it's saved.**Note**: Refer to the [Restricted Keywords for UIDs](../create-content-types/restricted-keywords-for-uids.md) to avoid using reserved keywords. Once saved, you cannot change the UID.
- Add a **Description** for your taxonomy. This is an optional step.
- Finally, click **Create Taxonomy**.

Within a taxonomy, you can [create terms](./create-a-term.md) associated with the taxonomy. For instance, if your taxonomy is based on Regions, you can create terms such as USA, Australia, India, Europe, etc.

## API Reference

To create taxonomies via the API, refer to the [Create a Taxonomy](../../../api-docs/api-detail/content-management-api.md#create-a-taxonomy) API request.

## Common questions

**How do I access the Taxonomy settings in a stack?**  
Go to your stack, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.

**Can I change the Unique ID (UID) after saving the taxonomy?**  
No. The **Unique ID** can be edited until it's saved. Once saved, you cannot change the UID.

**Is the Description required when creating a taxonomy?**  
No. Adding a **Description** is an optional step.

**What should I do if I want to create taxonomies programmatically?**  
Refer to the [Create a Taxonomy](../../../api-docs/api-detail/content-management-api.md#create-a-taxonomy) API request.