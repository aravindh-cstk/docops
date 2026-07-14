---
title: "[Set Up Your Project] - Delete a Language"
description: Delete a language from a stack and understand the impact on localized entries; includes UI steps and API reference.
url: https://www.contentstack.com/docs/headless-cms/delete-a-language
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Delete a Language

This page explains how to delete a language from a Contentstack stack, including important warnings about localized content deletion, the UI steps to remove a language, and where to find the corresponding API request. It is intended for users managing multilingual configurations in a stack and should be used when you need to remove an existing language safely.

## Delete a Language

**Warning**: If you delete a language, all the localized entries created for the language will get deleted. However, adding back the deleted language will restore all the lost localized entries related to the specific language.

To delete a [language](./about-languages.md) from the [stack](../set-up-stack/about-stack.md), log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your stack, click the “Settings” icon (press “S”) on the left navigation panel, and select **Languages** (or press “**alt + L**” for Windows OS, and “option + **L**” for Mac OS).
- On the **Languages** page. hover over the language you want to delete, click on the “Delete” icon (trash bin) that appears at the extreme right end.![Delete_a_language_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0ed251fa49808c6c/60c05f8d2d95121b9b3d168e/Delete_a_language_no_highlight.png)
- Click **Remove** to confirm the delete action.

**Note**: You cannot delete the master language. However, to delete a fallback language, you need to make sure that it is not being used as a fallback language for any other language(s).

## API Reference

To perform the delete action via API request, refer to the [Delete language](../../../api-docs/api-detail/content-management-api.md#delete-language) API request.

## Common questions

### What happens to localized entries when I delete a language?
If you delete a language, all the localized entries created for the language will get deleted. Adding back the deleted language will restore all the lost localized entries related to the specific language.

### Can I delete the master language?
No. You cannot delete the master language.

### What should I check before deleting a fallback language?
Make sure that it is not being used as a fallback language for any other language(s).

### Is there an API to delete a language?
Yes. Refer to the [Delete language](../../../api-docs/api-detail/content-management-api.md#delete-language) API request.