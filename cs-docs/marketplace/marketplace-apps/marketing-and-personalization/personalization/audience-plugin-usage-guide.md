---
title: "Audience Variable App Installation Guide"
description: "The Contentstack Marketplace Audience Variable app lets you customize the target viewers of your Contentstack entry fields content."
url: /marketplace/audience-plugin-usage-guide
uid: blt034af0d5b05d01bd
---

# Audience Variable App Installation Guide

## Audience Variable App Installation Guide

The Audience Variable app enables content teams to create targeted and personalized experiences for their audience. The app helps improve content relevance and drive better user engagement.

Consider a scenario where you have to display different content on your university website for faculty members, students, and staff. Creating multiple entries with additional content for various audiences can be time-consuming.

In this case, the Audience Variable app allows you to define your audiences once and then reference them in your entries. This approach makes your content audience-centric and improves its reach.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin)

Let's follow this step-by-step guide to install and configure the Audience Variable app in your stack.

## Steps for Execution

1.  [Define your target audience](#define-your-target-audience)
2.  [Install the Audience Variable app and configure it with your audience](#install-the-audience-variable-app-and-configure-it-with-your-audience)
3.  [Use the Audience Variable app within your entry](#use-the-audience-variable-app-within-your-entry)

1.  ## Define your Target Audience

    1.  First, you must define the target audience. For this, you need to [create a content type](/docs/headless-cms/create-a-content-type) with following fields:
        1.  **Title**: A [Title](/docs/headless-cms/title) field represents the audience group, such as **University** in our example.
        2.  **Group**: A [Group](/docs/headless-cms/group) lists all audiences. While adding the group field, go to the **Advanced** properties option and set it to **Multiple**. If required, you can also set the maximum number of instances that you can have inside the group field.![1-Audience-Variable-Data-Group-Advanced-Properties-Set-Mutiple](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6bab2bcae895d2f4/6863261668660bdcace41eba/1-Audience-Variable-Data-Group-Advanced-Properties-Set-Mutiple.png)

            Then, you will need to add the following two fields inside the **Group** field:

            1.  **Group Title**: A [Single-Line Textbox](/docs/headless-cms/single-line-textbox) field for the audience title.
            2.  **Group Description**: A [Multi-Line Textbox](/docs/headless-cms/multi-line-textbox) field for describing the audience.

            Once you have added these details to your content type, click **Save and Close**.

            ![2-Audience-Variable-Content-Type-Structure](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cef4cb20f0c9648/68632617862860b698346d35/2-Audience-Variable-Content-Type-Structure.png)

            **Note:** Copy the **Content Type UID** of the Audience content type, **UID** of the **Group** field, and **Group Title Field UID**. We will need these UIDs in the Audience Variable app configuration settings in [step 2](#install-the-audience-app-and-configure-it-with-your-audience).

    2.  Now, you can [create an entry](/docs/headless-cms/create-an-entry) in the **Audience** content type. To do this, from the left navigation panel, click **Entries** and then click **\+ New Entry**. In the **Select Content Type** modal, select **Audience** (content type created above) and click **Proceed**.

        For the **University** example, we will name (Title) this entry as **University** which will contain information about **Faculty Members**, **Students**, and **Staff** (refer to the following screenshot where we have added details about Faculty Members, Students, and Staff).

        **Note:** You will refer to this entry in [step 3](#use-the-audience-app-within-your-entry) when rendering the target audience.

        ![3-Audience-Variable-Data-Example-University-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0a1af1682b1f7c72/686326166e8551fc6ee6ce8b/3-Audience-Variable-Data-Example-University-Entry.png)
2.  ## Install the Audience Variable app and Configure it with your Audience

    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  From the left-hand side primary navigation, click the **Marketplace** icon.![4-Contentstack-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefd66d7f52bbbb54/6756c39b117e7e2b9a468e48/Contentstack-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all the available apps. Hover over the **Audience Variable** app and click **Install**.![5-Audience-Variable-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f54780dca69535e/68632617e8e8e695315cfbfa/5-Audience-Variable-App.png)
    4.  In the pop-up window, select the stack where you want to install the Audience Variable app and click the **Install** button.![6-Audience-Variable-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa645b56d539074f/68632616e8e8e60e355cfbf1/6-Audience-Variable-App-Install.png)
    5.  On the **Configuration** screen, enter the Audience **Content Type UID**, **UID** of the **Group** field, and **Group Title Field UID** that you retrieved and copied in [step 1](#define-your-target-audience).![7-Audience-Variable-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd9eded6bfe3325e/68632616bf423edf20dd6f62/7-Audience-Variable-Configuration.png)
    6.  Click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.

        For the Audience Variable app, JSON RTE and Custom Field are the two UI locations. You can only enable or disable the Custom Field UI location.

        ![8-Audience-Variable-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc75070130343518/686326167ff46d4489334d2b/8-Audience-Variable-UI-Locations.png)

        **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    8.  Click **Open Stack** to start using the plugin within your stack.
3.  ## Use the Audience Variable App within your Entry

    To render the **University** data that we created in [step 1](#define-your-target-audience) for Faculty Members, Students, and Staff, you now need to create another content type, for example, **Institution**. In this content type, we can select the audience and render the respective data.

    To use the Audience Variable app within an entry of your stack, follow the steps given below:

    1.  Go to your stack and click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) (consider an example **Institution**) by adding relevant details as displayed below:![9-Audience-Variable-Institution-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1838f2c75ba1f167/68632616e8e8e6f6fc5cfbf5/9-Audience-Variable-Institution-Content-Type.png)

    There are two ways to use the Audience Variable app in your entry:

    1.  [Custom Field](#steps-to-use-the-audience-app-as-a-custom-field)
    2.  [JSON Rich Text Editor Field](#steps-to-use-the-audience-app-as-a-json-rte-plugin)

    ### Steps to use the Audience Variable App as a Custom field

    1.  On the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension/App**, select **Audience Variable**, and click the **Proceed** button.![10-Audience-Variable-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc16be8844a634cf8/686326174431705db5fd9e52/10-Audience-Variable-Custom-Field-Add-App.png)

        Change the **Display Name** of the custom field to your choice, for example, **Audience Variable Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field.

        This adds the Audience Variable app in the custom field.

        ![11-Audience-Variable-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4cf2a3a12adf0be/686325f06b7c1ebedfaecafe/11-Audience-Variable-Custom-Field-Added-App.png)
    3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Audience Variable app, [create an entry](/docs/headless-cms/create-an-entry) for this newly created content type. To do this, on the left navigation panel, click **Entries** and then click **\+ New Entry**. In the **Select Content Type** modal, select **Institution** (our example content type) and click **Proceed**.

        You can see the Audience Variable app’s custom field on your entry page as shown below:

        ![12-Audience-Variable-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac17e0afc68e1e53/686325f053d8e35e21da988b/12-Audience-Variable-Custom-Field-Sample-Entry.png)
    5.  Click the **Add Audience(s)** button.![13-Audience-Variable-Custom-Field-Add-Audiences](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f6516660e03dbaf/686325f1774cd0314e7590ee/13-Audience-Variable-Custom-Field-Add-Audiences.png)
    6.  In the **Select Audience** modal, select the target audience for your content (Faculty Members/Students/Staff) and click **Add Selected**.![14-Audience-Variable-Select-Audience-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5e7c016cad869d75/686325f0a139881c92c2d702/14-Audience-Variable-Select-Audience-Modal.png)
    7.  The audiences you added get referenced within your entry.![15-Audience-Variable-Custom-Field-Audience-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f595f559e546ac1/686325f0b776307f5efe2c4c/15-Audience-Variable-Custom-Field-Audience-Added.png)
    8.  After adding the audience, **Save** and **Publish** your entry.

    ### Steps to use the Audience Variable App as a JSON RTE Plugin

    1.  On the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select JSON RTE Plugin(s)**, select **Audience Variable**, and then click **Add Plugin(s)**.![16-Audience-Variable-JSONRTE-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38726d80f1bbf431/686325f1eeaccfb450d9c5c2/16-Audience-Variable-JSONRTE-Field-Add-App.png)

        This adds the Audience Variable app in the JSON Rich Text Editor field.

        ![17-Audience-Variable-JSONRTE-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd8419c6e4d881d1/686325f1b77630fb72fe2c50/17-Audience-Variable-JSONRTE-Field-Added-App.png)
    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Audience Variable app as a JSON RTE plugin, [create an entry](/docs/headless-cms/create-an-entry) for the content type. Within the JSON Rich Text Editor, add your content and click the **Audience Variable** app icon to customize which target audience can view the specific content. You can also select the text and click the **Audience Variable** app icon from the toolbar.![18-Audience-Variable-JSONRTE-Field-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt484011544af90135/686325f074bed29770eb720c/18-Audience-Variable-JSONRTE-Field-App-Icon.png)
    5.  In the **Select Audience** modal, choose the following:

        1.  **Audience Tag Scope**: Select the **scope** for the Audience tag. There are two scopes: **Block** (supports elements such as lists, tables, and images) and **Inline** (supports text).
        2.  **Audience Selection**: Select the target audience for your content (Faculty Members/Students/Staff).
        3.  Once done, click **Add Selected**.![19-Audience-Variable-Select-Tag-Scope-And-Audience-Selection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a44b8953fc72d31/686325f053d8e32b1ada9887/19-Audience-Variable-Select-Tag-Scope-And-Audience-Selection.png)

        Now, the content you add would be visible to the **Faculty Members**, **Students**, **Staff**, or all. You need not to create separate entries to add different content. You can use the Audience Variable app and customize your content as per your target audience.

        In the following example, **Faculty Members** and **Students** data are in the **Block** scope, while **Staff** and **University** (All) data in the **Inline** mode.

        ![20-Audience-Variable-SONRTE-Block-And-Inline-Example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt66c43015a627ee75/686325f068660b347fe41eb4/20-Audience-Variable-SONRTE-Block-And-Inline-Example.png)
    6.  After adding the audiences, **Save** and **Publish** your entry.
