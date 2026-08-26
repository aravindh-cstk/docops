---
title: "Add a Language"
description: "Easily manage multilingual content in Contentstack by adding supported or custom languages to your stack and enhancing localization."
url: /headless-cms/add-a-language
uid: bltcfd5111dd28d58f2
---

# Add a Language

## Add a Language

If you have the required permissions, you can add languages to your [stack](/docs/headless-cms/about-stack) to create and publish [entries](/docs/headless-cms/about-entries) in multiple languages.

**Note:** When working within specific branches, languages added will be available only in that particular branch. For example, you are working within the development branch, and you add new languages such as German and Chinese to this branch. These languages will be available only within the development branch. Refer to our [Branch-specific Modules](/docs/headless-cms/branch-specific-modules) document for more information.

You can either add a language from our [list of supported languages](/docs/headless-cms/supported-languages) or [create a custom language](/docs/headless-cms/add-a-custom-language) of your choice.

To add a language, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to your stack, click the “Settings” icon (press “S”) on the left navigation panel, and select **Languages** (or press “**alt + L**” for Windows OS users, and “option + **L**” for Mac OS). You will see the default [master language](/docs/headless-cms/set-the-master-language) along with other added language(s).

    **Note:** Apart from the master language, you can add/remove the other languages.

2.  Click on the **\+ New Language** button located at the top-right corner of the page. The **Add Language** box opens up, which lets you select from the existing supported language(s) or add a custom language.
3.  Keep the **Add Supported Language** option selected to add any one of the existing supported languages. To [create and add a custom language](/docs/headless-cms/add-a-custom-language) of your choice, select the **Create Custom Language** option.  
    ![Venus-add_custom_lang.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4dda80f92ca2a250/60dc466e9648f1650fe197ea/Venus-add_custom_lang.jpg)
4.  To add a supported language, select the required language from the list of available languages in the **Select Language** menu. The selected language’s code will appear.  
    ![Venus-supported_lang.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb065be01df4c7854/60dc466dacc3ac47265615e7/Venus-supported_lang.jpg)  

    **Note:** The combination of language code and locale or country code should be **unique** across the stack.

5.  Conversely, to add a custom language, enter the language name and code as per your choice.

    **Note:** The minimum character length of a language code is **2**, and the maximum character length is **12.  
    **

    ![Venus-custom_lang.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5ffc22437e175d34/60dc466e9a701c56bb9114d5/Venus-custom_lang.jpg)
6.  In the **Select Fallback Language** menu, select the [fallback language](/docs/headless-cms/about-fallback-languages) for the newly added language.
7.  Click on **Add**.

**Note:** Once generated, you cannot modify a custom language code.

## API Reference

To add a language in your stack via API request, refer to [Add a language](/docs/developers/apis/content-management-api/languages#add-a-language) API request.  

After adding the language in the stack, the [content manager](/docs/headless-cms/types-of-roles#content-manager) can add an entry in the specified language or create [localized entries](/docs/headless-cms/about-localization).

**Note:** The Content Manager can view or create content in multiple languages only for the languages that are added to the stack by the [Admin](/docs/headless-cms/types-of-roles#admin)/[Developer](/docs/headless-cms/types-of-roles#developer).
