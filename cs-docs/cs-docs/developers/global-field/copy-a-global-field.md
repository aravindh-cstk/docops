---
title: "[Global Field] - Copy a Global Field"
description: How to duplicate an existing Global field in Contentstack to reuse its structure with minimal modifications.
url: https://www.contentstack.com/docs/headless-cms/copy-a-global-field
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-modelers
version: current
last_updated: 2026-03-25
---

# [Global Field] - Copy a Global Field

This page explains how to copy (duplicate) an existing Global field in Contentstack so you can reuse its structure with minimal changes. It is intended for developers and content modelers working in a stack who need to quickly create a new Global field based on an existing one, including nested Global fields.

## Copy a Global Field

Contentstack allows you to duplicate an existing Global field, enabling you to reuse its structure with minimal modifications instead of creating a new one from scratch.

To copy a Global field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) where you want to copy a Global field.
- Click the **Content Models** icon in the left navigation panel and select **Global Fields** in the left panel.
- Locate the Global field you want to copy. Click the vertical ellipsis in the **Actions** column next to it and select **Copy Global Field**.
- The **Copy Global Field** modal appears with the name "Copy of {your_global_field_name}". Enter a suitable name and description. The UID is auto-generated, but you can update it as required.**Tip:** Refer to the [Restricted Keywords for UIDs](/docs/developers/create-content-types/restricted-keywords-for-uids) to avoid using reserved keywords.
- Click **Copy**.

Once copied, the new Global field retains the original structure, allowing modifications without affecting the source field.

For [Nested Global](/docs/developers/global-field/create-a-global-field#using-nested-global-fields) fields, the copied field will maintain its existing structure, including all nested components. You can modify these fields as needed without altering the original Global field.

By following these steps, you can efficiently manage and reuse Global fields in Contentstack, streamlining content modeling workflows.

## Common questions

### Does copying a Global field affect the original Global field?
No. Once copied, the new Global field retains the original structure, allowing modifications without affecting the source field.

### Can I change the UID when copying a Global field?
Yes. The UID is auto-generated, but you can update it as required.

### What happens when I copy a Nested Global field?
For Nested Global fields, the copied field will maintain its existing structure, including all nested components.

### Where do I find the option to copy a Global field?
In **Global Fields**, locate the Global field you want to copy, click the vertical ellipsis in the **Actions** column, and select **Copy Global Field**.