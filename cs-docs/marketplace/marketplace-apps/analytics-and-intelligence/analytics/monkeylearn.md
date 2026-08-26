---
title: "MonkeyLearn App Installation Guide"
description: "MonkeyLearn is an AI-based text analytics platform that uses machine learning to analyze texts based on customer sentiments."
url: /marketplace/monkeylearn
uid: bltc33e0b0dd434d366
---

# MonkeyLearn App Installation Guide

## MonkeyLearn App Installation Guide

MonkeyLearn is a machine learning-based text analytics platform that offers detailed insights about your content, such as feedback, surveys, charts, etc. It helps to analyze customer sentiments by collecting data in one place and sorting their response in a simple, clean, and structured manner.

The MonkeyLearn app offers detailed insights into the performance of your content, such as feedback, surveys, charts, etc. By analyzing customer experience, you can improve the overall performance of your website.

## Prerequisites

-   [MonkeyLearn account](https://app.monkeylearn.com/studio/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin.

Let's go through the steps required to install and configure the MonkeyLearn app within Contentstack Marketplace.

## Steps for Execution

1.  [Fetch the credentials from your MonkeyLearn account](#fetch-the-credentials-from-your-monkeylearn-account)
2.  [Install the MonkeyLearn Application](#install-the-monkeylearn-application)
3.  [Use MonkeyLearn within your Stack](#use-monkeylearn-within-your-stack)

1.  ## Fetch the credentials from your MonkeyLearn account

    To configure the application, you need to create a MonkeyLearn account. To do so, follow the below steps:

    1.  Navigate to [MonkeyLearn](https://app.monkeylearn.com/accounts/login/?next=/studio/templates) to create an account.
    2.  Under the “User Profile” section, click **My Account**.  
        ![My-Account.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta2c15cb89b4f77bc/6329cd5bd7d1a75f6967d9dc/My-Account.png)
    3.  Under **API Key**, you will see the **API Key.** Click **Revoke and re-generate** to create a new one.  
        ![API-Key.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc3e054c7a2bbd816/6329cd5a716e803a3b69c034/API-Key.png)

    **Note:** In the [Plan and Pricing](https://monkeylearn.com/pricing/) section, you can check for the plans based on your requirement.

    To use the MonkeyLearn app, you can either use a pre-defined model or can create a custom model from your MonkeyLearn account. To create a Classifier custom model, refer to [How to build a Custom Classifier](https://help.monkeylearn.com/en/articles/2173823-how-to-build-a-custom-classifier) document.

    **Additional Resource:** To create an Extractor custom model, refer to the [How to build a Custom Extractor](https://help.monkeylearn.com/en/articles/2174073-how-to-build-a-custom-extractor) document.

2.  ## Install the MonkeyLearn Application

    Follow the steps to install the application in Contentstack.

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  INavigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel. 
    4.  Within the Marketplace, you can see all the available apps. Hover over the **MonkeyLearn** app and click **Install.**![Marketplace-monkey-learn.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0fef8bdea574d2ca/69dc86ab1654a0b1ea4f7689/Marketplace-monkey-learn.png)
    5.  In the popup window, select the stack where you want to install the MonkeyLearn app, accept the terms of service, and click the **Install** button.  
        ![MonkeyLearn-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45015a61dd699a58/64b8fa7e27713f640d6a12c3/MonkeyLearn-Install-App.png)
    6.  On the **Configuration** page, enter the **API Key** you retrieved from MonkeyLearn in [step 1](#fetch-the-credentials-from-your-monkeylearn-account).
    7.  Select **Scope**. Select the scope for which the MonkeyLearn app will be available for running the analysis on the Contentstack content types.

        1.  **All Content Types:** The scope of the app is defined for all the content types in the selected stack.
        2.  **Specific Content Type:** The scope of the app is defined for specific content type (types) in the selected stack.

        ![MonkeyLearn-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf205f8e77740ec9e/65b7c3240b2014554f411377/MonkeyLearn-Configuration.png)
    8.  Click the **Save** button.
    9.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![MonkeyLearn-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2663c3dec6a207f6/65b7c32f63dd3a4c12961d69/MonkeyLearn-UI-Locations.png)
    10.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
    11.  **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    12.  Click **Open Stack** to start using the MonkeyLearn application.
3.  ## Use MonkeyLearn within your Stack

    To use the MonkeyLearn application in an entry of your stack, you can use text-based fields such as Single Line Textbox, Multi Line Textbox, JSON RTE Field, Number and Date fields, Global Fields, Reference Fields etc.

    **Note:** You can only use **text-based** **fields** of a content type while using the MonkeyLearn app.

    To use the MonkeyLearn application, follow the steps given below:

    1.  Go to your stack, click the Content Models icon on the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details and click **Save and proceed**.  
        ![Create-New-Content-Type.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt51d13544cf17ecbb/6329cd5afac7b2660da01699/Create-New-Content-Type.png)
    3.  In the Content Type Builder page, add text fields such as the Multi Line Textbox field and JSON RTE field in your content type by clicking the **Insert a field** link represented by a + sign.
    4.  Click **Save** or **Save and Close**.
    5.  On the left navigation panel, navigate to the **Entries** page and click **+ New Entry** to create a new entry for the above content type. Click **Proceed**.  
        ![Create-New-Entry.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd2fa7bd0ea0be364/6329cd5a864edf6382e4922e/Create-New-Entry.png)
    6.  Enter the text in the selected fields. Click **Save**.  
        ![Enter-Text-In-Fields.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc36da709034570d6/6329cd5b2975ce72ea2fe2c0/Enter-Text-In-Fields.png)
    7.  On the right navigation panel, select **Widgets**.  
        ![Select-Widgets-From-Sidebar.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4286272cf55fe0df/6329cd695a8acf5d92cd05e2/Select-Widgets-From-Sidebar.png)
    8.  Within **Widgets**, click the Entry Widgets dropdown, and under **Apps**, select the app that you configured in the sidebar widget configuration page.  
        ![Select-App-New.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1fc9225c148983ea/632abd5ddbb41c0cdadc7f5d/Select-App-New.png)
    9.  Select the **Model** from the dropdown.

        **Note:** The list of models is fetched from your MonkeyLearn account you selected previously.

        ![Select-Model-New.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt990b7af4f29adebf/632abff119c64564c3140488/Select-Model-New.png)  

    10.  Select the **Entry Field** in which you want to perform the text analysis.![Select-Entry-Field-New.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4f5f4055d6c1550f/632abff11ad88e71655a07e3/Select-Entry-Field-New.png)  


    11.  Click **Run** to process the text. The results are displayed in the sidebar widget.

         **Note:** The results are based on the corresponding model you selected.

         ![Final_Output.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte5aa4fb6f233508e/632abe82809ac764c96da41b/Final_Output.png)
