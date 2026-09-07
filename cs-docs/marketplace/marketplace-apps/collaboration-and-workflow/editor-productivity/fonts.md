---
title: "Fonts App Installation Guide"
description: "The Marketplace Fonts app lets you customize font options such as font size, font family, and font color in your JSON RTE."
url: /marketplace/fonts
uid: blta3bd50d11a9f0761
---

# Fonts App Installation Guide

## Fonts App Installation Guide

To enhance the user experience, Contentstack offers JSON RTE Plugins to extend the functionality of the JSON Rich Text Editor, catering to unique business needs while maintaining a native Contentstack look and feel.

With the Fonts app, you can easily modify the font style, size, and color in your JSON Rich Text Editor. These enhancements make your content more visually appealing and improve readability and presentation.

By installing the Fonts app from the Contentstack Marketplace, you can enhance the content manager's experience.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/headless-cms/types-of-roles#owner)/[Admin](/docs/headless-cms/types-of-roles#admin)

Let's follow this step-by-step guide to install and configure the Fonts app within your stack.

## Steps for Execution

1.  [Install and Configure the Fonts app in Marketplace](#install-and-configure-the-fonts-app-in-marketplace)
2.  [Use the Fonts app within your Entry](#use-the-fonts-app-within-your-entry)

1.  ## Install and Configure the Fonts App in Marketplace

    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all the available apps. Hover over the **Fonts** app and click **Install**.![Fonts-app-marketplace.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt100e879c5872f741/69eeacc7bbc93e1f271f113f/Fonts-app-marketplace.png)
    4.  In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click the **Install** button.![3-Fonts-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2defbf25c704c7a/66885523534a9dbc57ae02df/3-Fonts-App-Install.png)
    5.  On the **Configuration** tab, enter a **Name** and **URL** to install the Fonts app. Click the **\+ Add** button.![4-Fonts-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ea818a5904eeae8/66885524ca3b96aa24c7e53b/4-Fonts-Configuration.png)

        **Note:** **Name** denotes the name of the **Font Family** and **URL** denotes the source URL from where you want to fetch the fonts. You can search the public URLs available and use them in your JSON RTE content.

        For example, you can check the [Browse Fonts - Google Fonts](https://fonts.google.com/) documentation.

    6.  On the **UI Locations** tab, you can see the predefined app location. If you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.![5-Fonts-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e807ff778c52cd0/6688552442bfac2191869e76/5-Fonts-UI-Locations.png)

        **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    7.  Click **Open Stack** to start using the Fonts application.
2.  ## Use the Fonts App within your Entry

    To use the Fonts app within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![6-Fonts-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b27e9302c00f170/668855240325456c86883d7b/6-Fonts-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  On the **JSON Rich Text Editor Properties** modal, enter the following:
        1.  Enter a **Display Name** for the field, for example, Fonts.
        2.  (Optional) Enter an **Instruction Value** and **Help Text** for the field.
        3.  Click inside the **Select JSON RTE Plugin(s)** field, select **Fonts** from the list of plugins, and then click **Add Plugin(s)**.![7-Fonts-Add-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt886beee4c452f96c/668855240325453808883d79/7-Fonts-Add-Plugin.png)

            This adds Fonts in the JSON Rich Text Editor.

            ![8-Fonts-Added-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltddbb401201691b67/66885523534bb9e64426da55/8-Fonts-Added-Plugin.png)
    5.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    6.  To use the Fonts app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry**.
    7.  You can see new icons added in the JSON RTE editor as shown below:![9-Fonts-JSONRTE-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cb2187dd6144190/66885523a4dbae1c564d9ffa/9-Fonts-JSONRTE-Options.png)
    8.  Add the content in the JSON RTE field. Select the word or the content where you want to apply any specific Font Family, Color, or Size.

        You can see the Fonts in the JSON Rich Text Editor field on your entry page, as shown below:

        ![10-Fonts-JSONRTE-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta83d8327fb0fccf7/668855245a7e7617a41ce0a9/10-Fonts-JSONRTE-In-Entry.png)
    9.  You can then proceed to **Save** and **Publish** your entry.
