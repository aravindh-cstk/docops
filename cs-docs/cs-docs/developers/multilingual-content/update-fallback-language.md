---
title: "[Set Up Your Project] - Update Fallback Language"
description: Update the fallback language of an existing language in your stack.
url: https://www.contentstack.com/docs/headless-cms/update-fallback-language
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: latest
last_updated: 2026-03-26
---

# [Set Up Your Project] - Update Fallback Language

This page explains how to update the fallback language for an existing language in your stack. It is intended for users managing multilingual content who need to change which language acts as the parent for inherited entry data.

## Update Fallback Language

To update the fallback language of an existing language in your stack, perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack), click to the “Settings” icon on the left navigation panel, and select **Languages**. You can also use the shortcut keys “alt + L” for Windows OS users, and “option + L” for Mac OS users to access languages.
- Click on the language you wish to update.
- In the **Edit Language** window, click on the **Select Fallback Language** dropdown and select a fallback language from the list of available languages.
- **Save** the changes.

The entries of the set fallback language will act as the parent from which the newly added language entries inherit data from.

## API Reference

Here are the links to the API requests related to this action:
- [Update fallback language](/docs/developers/apis/content-management-api#update-fallback-language)
- [Set a fallback language](/docs/developers/apis/content-management-api#set-a-fallback-language)

## Common questions

### What does a fallback language do?
The entries of the set fallback language will act as the parent from which the newly added language entries inherit data from.

### Where do I change the fallback language in the UI?
Go to your stack, click to the “Settings” icon on the left navigation panel, and select **Languages**, then open the language and use the **Select Fallback Language** dropdown.

### Are there shortcut keys to open Languages?
Yes. Use “alt + L” for Windows OS users, and “option + L” for Mac OS users to access languages.

### Is there an API for updating or setting a fallback language?
Yes. See **API Reference**: [Update fallback language](/docs/developers/apis/content-management-api#update-fallback-language) and [Set a fallback language](/docs/developers/apis/content-management-api#set-a-fallback-language).