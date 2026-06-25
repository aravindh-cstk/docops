---
title: "[Set Up Your Project] - Rename a Language"
description: Rename an existing language in a Contentstack stack via the UI or via API reference.
url: https://www.contentstack.com/docs/headless-cms/rename-a-language
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Rename a Language

This page explains how to rename an existing language in a Contentstack stack, including the steps in the Contentstack UI and a pointer to the API reference. It is intended for developers or stack administrators managing multilingual configurations and should be used when you need to update a language display name without changing its code.

## Rename a Language

Contentstack allows you to rename the existing [languages](./about-languages.md) of your [stack](../set-up-stack/about-stack.md).

To rename a language, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your stack, click the “Settings” icon (press “S”) on the left navigation panel, and select **Languages **(or press “**alt + L**” for Windows OS, and “option + **L**” for Mac OS). You will see the default [master language](./set-the-master-language.md) along with other added language(s).
- This opens the **Languages** page that displays the list of languages added to the stack. Click on a language to rename it.
- Provide a suitable **Name** for the language. For example, **Hindi - India** can be renamed to **Hindi**.**Note**: You cannot edit the code of a language
- Click on **Save**.

## API Reference

To rename a language via API request, refer to [Update language](../../../api-docs/api-detail/content-management-api.md#update-language).

## Common questions

### Can I change the language code when renaming a language?
No. **Note**: You cannot edit the code of a language

### Where do I rename a language in the Contentstack UI?
Go to your stack, click the “Settings” icon (press “S”) on the left navigation panel, and select **Languages **.

### Is there an API to rename a language?
Yes. To rename a language via API request, refer to [Update language](../../../api-docs/api-detail/content-management-api.md#update-language).

### Do I need to be in a specific stack to rename a language?
Yes. Go to your stack and then open **Languages** from **Settings**.