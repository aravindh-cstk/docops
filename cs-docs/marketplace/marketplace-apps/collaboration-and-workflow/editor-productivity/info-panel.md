---
title: "Info Panel App Installation Guide"
description: "The Marketplace Info Panel app lets you hold the essential information within the JSON Rich Text Editor field."
url: /marketplace/info-panel
uid: blt09bafbaa66697bbf
---

# Info Panel App Installation Guide

## Info Panel App Installation Guide

Info Panel is a user interface component that displays additional context, details, and insights related to the content or data being viewed or edited.

It typically displays metadata, version history, user activity, and other relevant information to help users understand and manage the content more effectively. The Info Panel enhances usability by offering quick access to critical information without navigating away from the main content interface.

By installing the Info Panel app from the Contentstack Marketplace you can add a Info Panel feature within your JSON Rich Text Editor as a plugin.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/headless-cms/types-of-roles#owner)/[Admin](/docs/headless-cms/types-of-roles#admin)

Let's follow this step-by-step guide to install and configure the Info Panel app within your stack.

## Steps for Execution

1.  [Install and Configure the Info Panel app in Marketplace](#install-and-configure-the-info-panel-app-in-marketplace)
2.  [Use the Info Panel app within your Entry](#use-the-info-panel-app-within-your-entry)

1.  ## Install and Configure the Info Panel App in Marketplace

    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all the available apps. Hover over the **Info Panel** app and click **Install**.  
        ![Marketplace_Info panel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91b6b58b62728933/6a01916a9b2d92264f4bf20d/Marketplace_Info_panel.png)
    4.  In the pop-up window, select the stack where you want to install the app, accept the **Terms of Service**, and click the **Install** button.![3-Info-Panel-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31e4246c76dfa8de/667dbe979b2b7a24b8d968da/3-Info-Panel-App-Install.png)
    5.  On the **UI Locations** tab, you can see the predefined app location. If you disable the UI location, you will not be able to save the configuration as it requires at least one UI location.![4-Info-Panel-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte450cabbe4e1be97/667dbe9782ce1d564a3130d2/4-Info-Panel-UI-Locations.png)

        **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    6.  Click **Open Stack** to start using the Info Panel application.
2.  ## Use the Info Panel App within your Entry

    To use the Info Panel app within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![5-Info-Panel-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltafcd66643a35da34/667dbe97b2a2afc31da6b4ac/5-Info-Panel-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  On the **JSON Rich Text Editor Properties** modal, enter the following:
        1.  Enter a **Display Name** for the field, for example, Info Panel.
        2.  (Optional) Enter an **Instruction Value** and **Help Text** for the field.
        3.  Click inside the **Select JSON RTE Plugin(s)** field, select **Info Panel** from the list of plugins, and then click **Add Plugin(s)**.![6-Info-Panel-Add-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd91bfc5e29229e01/667dbe97ee05f3216b2ff320/6-Info-Panel-Add-Plugin.png)

            This adds Info Panel in the JSON Rich Text Editor.

            ![7-Info-Panel-Added-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81c6c871a9456592/667dbe977595af49f047596e/7-Info-Panel-Added-Plugin.png)
    5.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    6.  To use the Info Panel app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.

        Click the **Info Panel** icon from the panel and write the important information. You can also select the text and click the **Info Panel** icon from the toolbar.

        ![8-Info-Panel-Usage](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt69cddd54c74f9004/667dbe97ee05f3281f2ff324/8-Info-Panel-Usage.png)
    7.  You can then proceed to **Save** and **Publish** your entry.
