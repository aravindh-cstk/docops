---
title: "[Set Up Your Project] - Add a Language"
description: Add languages to your stack to create and publish entries in multiple languages.
url: https://www.contentstack.com/docs/developers/multilingual-content/add-a-language
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Add a Language

This page explains how to add supported or custom languages to a Contentstack stack (including branch-specific behavior), and is intended for users with the required permissions who need to create, publish, or manage multilingual and localized content.

## Add a Language

If you have the required permissions, you can add languages to your [stack](/docs/developers/set-up-stack/about-stack) to create and publish [entries](/docs/content-managers/working-with-entries/about-entries) in multiple languages.

**Note:** When working within specific branches, languages added will be available only in that particular branch.
For example, you are working within the development branch, and you add new languages such as German and Chinese to this branch. These languages will be available only within the development branch.
 Refer to our [Branch-specific Modules](/docs/developers/branches/branch-specific-modules) document for more information.

You can either add a language from our [list of supported languages](/docs/developers/multilingual-content/list-of-supported-languages) or [create a custom language](/docs/developers/multilingual-content/add-a-custom-language) of your choice.

To add a language, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

- Go to your stack, click the “Settings” icon (press “S”) on the left navigation panel, and select **Languages** (or press “**alt + L**” for Windows OS users, and “option + **L**” for Mac OS). You will see the default [master language](/docs/developers/multilingual-content/set-the-master-language) along with other added language(s).**Note**: Apart from the master language, you can add/remove the other languages.
- Click on the **+ New Language** button located at the top-right corner of the page. The **Add Language** box opens up, which lets you select from the existing supported language(s) or add a custom language.
- Keep the **Add Supported Language** option selected to add any one of the existing supported languages. To [create and add a custom language](/docs/developers/multilingual-content/add-a-custom-language) of your choice, select the **Create Custom Language** option.
- To add a supported language, select the required language from the list of available languages in the **Select Language** menu. The selected language’s code will appear.

**Note: **The combination of language code and locale or country code should be **unique** across the stack.

- Conversely, to add a custom language, enter the language name and code as per your choice.**Note**: The minimum character length of a language code is **2**, and the maximum character length is **12.
**
- In the **Select Fallback Language** menu, select the [fallback language](/docs/developers/multilingual-content/about-fallback-languages) for the newly added language.
- Click on **Add**.

**Note**: Once generated, you cannot modify a custom language code.

## API Reference

To add a language in your stack via API request, refer to [Add a language](/docs/developers/apis/content-management-api#add-a-language) API request.

After adding the language in the stack, the [content manager](/docs/developers/invite-users-and-assign-roles/types-of-roles#content-manager) can add an entry in the specified language or create [localized entries](/docs/developers/multilingual-content/about-localization).

**Note**: The Content Manager can view or create content in multiple languages only for the languages that are added to the stack by the [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)/[Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer).

## Common questions

### Who can add languages to a stack?
Users with the required permissions can add languages to your stack.

### Are languages added in one branch available in other branches?
No. When working within specific branches, languages added will be available only in that particular branch.

### Can I add a custom language code and change it later?
No. Once generated, you cannot modify a custom language code.

### Where can I find the API request to add a language?
Refer to the [Add a language](/docs/developers/apis/content-management-api#add-a-language) API request.