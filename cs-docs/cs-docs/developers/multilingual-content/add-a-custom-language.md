---
title: "[Set Up Your Project] - Add a Custom Language"
description: Instructions for creating and adding a custom language to a stack, including notes on branches, language codes, fallback languages, and an API reference.
url: https://www.contentstack.com/docs/headless-cms/add-a-custom-language
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Add a Custom Language

This page explains how to create and add a custom language to your Contentstack stack, including important constraints (such as branch availability and language code rules). It is intended for developers and admins setting up multilingual content, and for content managers who need to create or publish entries in the added language.

## Add a Custom Language

You can create and add a custom language of your choice to your [stack](/docs/developers/set-up-stack/about-stack). With appropriate permissions, you will be able to create and publish [entries](/docs/content-managers/working-with-entries/about-entries) in your custom language.

**Note:**  When working within specific branches, languages created will be available only in that particular branch. For example, you are working within the development branch, and you create and add a new language such as Belgium-Netherlands-Luxembourg to this branch. This language will be available only within the development branch. Refer to our [Branch-specific Modules](/docs/developers/branches/branch-specific-modules) document for more information.

To add a custom language, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your stack, navigate to the “Settings” icon (press “S”) on the left navigation panel, and select **Languages **(or press “**alt + L**” for Windows OS, and “option + **L**” for Mac OS). You will see the default [master language](/docs/developers/multilingual-content/set-the-master-language) along with other added language(s).**Note:** Apart from the master language, you can add/remove any of the other languages.
- Click on the **+ New Language** button located at the top-right corner of the page. This opens the **Add Language** box.
- In the **Add Language** box, select **Create Custom Language** to add a custom language of your preference.

**Note**: The combination of language code and locale or country code should be unique across the stack.
- Enter the language name and code as per your choice.**Note**: The minimum character length of a language code is **2**, and the maximum character length is **12**.
- In the **Select Fallback Language** menu, select the [fallback language](/docs/developers/multilingual-content/about-fallback-languages) for the newly added language.
- Click on **Add**.

**Note**: Once generated, you cannot modify a custom language code.

After adding the language to the stack, the [content manager](/docs/developers/invite-users-and-assign-roles/types-of-roles#content-manager) can add an entry in the specified language or create [localized entries](/docs/developers/multilingual-content/about-localization).

**Note:** The content manager can view or create content in multiple languages only for the languages added to the stack by the [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)/[Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer).

## API Reference

To add a custom language to your stack via API request, refer to the [Add a language](/docs/developers/apis/content-management-api#add-a-language) API request.

## Common questions

**Q: Are custom languages available across all branches automatically?**  
A: No. When working within specific branches, languages created will be available only in that particular branch.

**Q: Can I change a custom language code after creating it?**  
A: No. Once generated, you cannot modify a custom language code.

**Q: What are the limits for a language code length?**  
A: The minimum character length of a language code is **2**, and the maximum character length is **12**.

**Q: Can content managers create content in any language they want?**  
A: The content manager can view or create content in multiple languages only for the languages added to the stack by the [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)/[Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer).