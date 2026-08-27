---
title: "Add a Custom Language"
description: "Learn to add custom languages to your Contentstack setup, enabling multilingual entries and branch-specific availability effortlessly."
url: /headless-cms/add-a-custom-language
uid: blteb5a762895d5bd1c
---

# Add a Custom Language

## Add a Custom Language

You can create and add a custom language of your choice to your [stack](/docs/headless-cms/about-stack). With appropriate permissions, you will be able to create and publish [entries](/docs/headless-cms/about-entries) in your custom language.

**Note:** When working within specific branches, languages created will be available only in that particular branch. For example, you are working within the development branch, and you create and add a new language such as Belgium-Netherlands-Luxembourg to this branch. This language will be available only within the development branch. Refer to our [Branch-specific Modules](/docs/headless-cms/branch-specific-modules) document for more information.

To add a custom language, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to your stack, navigate to the “Settings” icon (press “S”) on the left navigation panel, and select **Languages** (or press “**alt + L**” for Windows OS, and “option + **L**” for Mac OS). You will see the default [master language](/docs/headless-cms/set-the-master-language) along with other added language(s).

    **Note:** Apart from the master language, you can add/remove any of the other languages.

2.  Click on the **\+ New Language** button located at the top-right corner of the page. This opens the **Add Language** box.
3.  In the **Add Language** box, select **Create Custom Language** to add a custom language of your preference.  
    ![add_a_custom_language_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1eaf1cbfbef025b5/60db689d9ec66d5af9c19cd4/add_a_custom_language_1_highlighted.png)  

    **Note:** The combination of language code and locale or country code should be unique across the stack.

4.  Enter the language name and code as per your choice.

    **Note:** The minimum character length of a language code is **2**, and the maximum character length is **12**.

5.  In the **Select Fallback Language** menu, select the [fallback language](/docs/headless-cms/about-fallback-languages) for the newly added language.
6.  Click on **Add**.  
    ![add_a_custom_language_3_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf2c8dbbaadaac803/60db68c29a701c56bb91102e/add_a_custom_language_3_no_highlight.png)  

    **Note:** Once generated, you cannot modify a custom language code.


After adding the language to the stack, the [content manager](/docs/headless-cms/types-of-roles#content-manager) can add an entry in the specified language or create [localized entries](/docs/headless-cms/about-localization).

**Note:** The content manager can view or create content in multiple languages only for the languages added to the stack by the [Admin](/docs/headless-cms/types-of-roles#admin)/[Developer](/docs/headless-cms/types-of-roles#developer).

## API Reference

To add a custom language to your stack via API request, refer to the [Add a language](/docs/developers/apis/content-management-api/languages#add-a-language) API request.
