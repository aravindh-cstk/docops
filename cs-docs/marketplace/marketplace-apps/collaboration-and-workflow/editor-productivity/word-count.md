---
title: "Word Count App Installation Guide"
description: "The Marketplace Word Count app lets you track the number of words in your JSON RTE content."
url: /marketplace/word-count
uid: bltf4e2478e94b8786d
---

# Word Count App Installation Guide

## Word Count App Installation Guide

To enhance the user experience, Contentstack offers JSON RTE Plugins that allow you to extend the functionality of the JSON Rich Text Editor, ensuring it meets your unique business needs while maintaining a native Contentstack appearance.

With the Word Count app, you can easily track the number of words added to your JSON Rich Text Editor. This feature aids in improving SEO, user engagement, and content readability.

Integrating the Word Count app into your JSON Rich Text Editor is straightforward and significantly enhances the editor's capabilities.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/headless-cms/types-of-roles#owner)/[Admin](/docs/headless-cms/types-of-roles#admin)

Let's follow this step-by-step guide to install and configure the Word Count app within your stack.

## Steps for Execution

1.  [Install and Configure the Word Count app in Marketplace](#install-and-configure-the-word-count-app-in-marketplace)
2.  [Use the Word Count app within your Entry](#use-the-word-count-app-within-your-entry)

1.  ## Install and Configure the Word Count App in Marketplace

    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all the available apps. Hover over the **Word Count** app and click **Install**.  
        ![Marketplace_WordCount.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2305a561c5b85f0d/6a0195a4d7414eeb8a912728/Marketplace_WordCount.png)
    4.  In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click the **Install** button.![3-Word-Count-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e4b70e04d959a4d/66884c8862008a82fd10df58/3-Word-Count-App-Install.png)
    5.  On the **UI Locations** tab, you can see the predefined app location. If you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.![4-Word-Count-UL-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5318e578ee5e58ed/66884c885da31170cfb5f6b6/4-Word-Count-UL-Locations.png)

        **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    6.  Click **Open Stack** to start using the Word Count application.
2.  ## Use the Word Count App within your Entry

    To use the Word Count app within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![5-Word-Count-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7431646485a37685/66884c88cf6f652bef6e5f81/5-Word-Count-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  On the **JSON Rich Text Editor Properties** modal, enter the following:
        1.  Enter a **Display Name** for the field, for example, Word Count.
        2.  (Optional) Enter an **Instruction Value** and **Help Text** for the field.
        3.  Click inside the **Select JSON RTE Plugin(s)** field, select **Word Count** from the list of plugins, and then click **Add Plugin(s)**.![6-Word-Count-Add-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ef4094d3aa08c2f/66884c885a7e76af861ce069/6-Word-Count-Add-Plugin.png)

            This adds Word Count in the JSON Rich Text Editor.

            ![7-Word-Count-Added-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta94f87766fb21021/66884c886aa94425261cca2c/7-Word-Count-Added-Plugin.png)
    5.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    6.  To use the Word Count app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry**.
    7.  Add the content in the JSON RTE field. You can see the Word Count in the JSON Rich Text Editor field on your entry page, as shown below:![8-Word-Count-JSONRTE-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf6886695cd5b444/66884c886aa94412711cca30/8-Word-Count-JSONRTE-In-Entry.png)
    8.  After adding your content, **Save** and **Publish** your entry.
