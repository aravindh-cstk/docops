---
title: "Trados App Installation Guide"
description: "Learn how to use the Trados app with Contentstack to efficiently translate your Releases content and provide localized versions for diverse audiences."
url: /marketplace/trados
uid: blt94413cddbd7e07f2
---

# Trados App Installation Guide

## Trados App Installation Guide

Trados is a computer-assisted translation software suite created by the company RWS, which helps language professionals manage and streamline their translation projects. It includes tools for communication, workflow management, terminology management, text analysis, and quality assurance.

With the Contentstack Marketplace Trados app, you can easily translate your [Releases](/docs/headless-cms/about-releases/) content (entries) into multiple languages and provide localized versions within your Contentstack entries. You can create a project using the Trados app Dashboard Widget and view the translation status of your projects.

**Note:** The Trados app has been migrated to a **Full Page** UI location. We are deprecating the **Stack Dashboard** UI location soon.

## Prerequisites

-   [Trados account](https://cloud.trados.com/en/managed-translation/login)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Follow this step-by-step guide to install and configure the Trados app within your stack.

## Steps for Execution

1.  [Retrieve your credentials from Trados](#retrieve-your-credentials-from-trados)
2.  [Install and Configure the Trados app in Marketplace](#install-and-configure-the-trados-app-in-marketplace)
3.  [Use Trados within your Stack](#use-trados-within-your-stack)

1.  ## Retrieve your Credentials from Trados

    To get your credentials for Trados, log in to the [Trados account](https://cloud.trados.com/en/managed-translation/login) and follow the steps given below:

    1.  In the top-right corner of the Dashboard, click the **My Account** icon and then click **My Applications**.![Trados-My-Applications](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94b68868ad620231/6441e19f8272531a01f1dad4/Trados-My-Applications.png)
    2.  Now, click the **Add New** button to create a new application.![Trados-Add-New-Application](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda707bc3c859dfa4/6441e19f1d4d37184e1cd524/Trados-Add-New-Application.png)
    3.  Enter the **Application Name** (mandatory), **Description** (optional), **Website** URL (optional), and then click the **Save changes** button.![Trados-Adding-New-Application](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6f6f726ece46bfd3/6441e19ecd70bd4ce5d79121/Trados-Adding-New-Application.png)

        You can now see the **Edit a Connected Application** screen.

        ![Trados-Edit-New-Application](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b6d548b686cb13a/6441e19fbeb11b4c338c3740/Trados-Edit-New-Application.png)
    4.  Scroll down to get the Trados app **Client-Id** and **Secret**.![Trados-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd58162ba00cb8923/6441e19f7f34014b36bedd07/Trados-Credentials.png)**Secret** is generated after the **Production Status** is approved by the Trados authority.![Trados-Credentials-Status](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cdf33e56c0f23a0/6441e19fef41f64ab29510ad/Trados-Credentials-Status.png)

        After getting the **Client-Id** and **Secret**, copy and paste the information to your clipboard.

        You can see your application in the Trados dashboard.

        ![Trados-Contentstack-Sample-Application](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6b4a3a64a7ce04c/6441e19f46640e0796ad26b4/Trados-Contentstack-Sample-Application.png)
2.  ## Install and Configure the Trados app in Marketplace

    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Trados** app and click **Install**.![Trados-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9dcf84fdd1a282fb/69c7b32b869fc922e0705645/Trados-App.png)
    4.  In the popup window, select the stack where you want to install the Trados app, accept the **Terms of Service**, and click the **Authorize and Install** button.![Trados-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbc484b1d790c93de/64b96bc3320b7ef277ca733e/Trados-Install-App.png)
    5.  On the **Configuration** screen, enter the following details:
        1.  **Trados Credentials**:
            1.  Enter the **Username** and **Password** of your Trados account.
            2.  Enter the **Client ID** and **Client Secret** retrieved from your Trados account in [step 1](#retrieve-your-credentials-from-trados).
        2.  Click the **Next** button.![Trados-Config-Account-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb511d0c4b862ed37/65b966a9461c1301adb8f62b/Trados-Config-Account-Credentials.png)
        3.  **Contentstack Fields**:
            1.  Select the **Roles** that can create and delete projects within Contentstack Trados.

                By default, **Admins** can manage app configuration settings and perform these actions.

            2.  To define which fields should be available for translation, click the **Enable Additional Settings** toggle.
        4.  Click the **Next** button.![Trados-Config-Contentstack-Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2114ad3cf911aad9/65b96694c025ee3ae7b88898/Trados-Config-Contentstack-Fields.png)
        5.  **Additional Settings**:  
            You can include or exclude specific fields from translation for specific content types, or apply global exclusions across all content types.

            1.  **Manage Fields:**Click the **Manage Fields** button to open the **Content Type Settings** modal.![Trados-Configuration-Manage-Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb70a9f890b8cde11/69c7c4160a6de1ab9b553d0f/Trados-Configuration-Manage-Fields.png)

                In the **Content Type Settings** modal, use the dropdown to search and select a content type, then choose the field UIDs you want to include or exclude for translation.

                ![Trados-Configuration-Manage-Fields-Content-Type-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte20a9356f1b0dc5c/69c7c417b1e9240bdc3392a4/Trados-Configuration-Manage-Fields-Content-Type-Settings.png)

                Once done, click the **Save** button to apply your selections.

            2.  **Field(s) to Exclude from All Content Types for Translation:**

                In this field, enter the UID(s) of fields you want to exclude globally. These fields will not be included in the translation process for any content type.

                ![Trados-Additional-Settings_Exclude-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef15b60302621ec2/684bf3a8343886c9372ceb21/Trados-Additional-Settings_Exclude-Fields.png)
            3.  **Language Configuration**: In the **Language Configuration** section, map the content translation languages for Contentstack and Trados. All the entries from Trados languages will be localized into Contentstack languages. For any target languages not selected, the app uses the default language code of the stack.

                Click the **\+ Add Language** button to add and map Contentstack languages with their relevant Trados languages.

                ![Trados-Config-Additional-Language-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09ff82e45d51cfc5/66de0fcc6c2b241ef5d7e05a/Trados-Config-Additional-Language-Configuration.png)
            4.  **Field Configuration**: The **JSON RTE to HTML** conversion feature enables the transformation of the JSON RTE object into a single HTML code block. This simplifies the translation process for translators by making the content easier to interpret and process within Trados.

                Enabling the **Enable JSON RTE Object to HTML Conversion** toggle button, allows the conversion of complex JSON data structures into HTML, making the content more accessible and manageable.

                ![Trados-Configuration-Field-JSONRTE-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt380ec7a7803b2d68/69c7ab86a0fd9e6c360f3df4/Trados-Configuration-Field-JSONRTE-Config.png)

                **Warning:** Do not change the toggle button during Project Translation, as it may disrupt the Translation process.

            5.  **Reference Handling**: In the **Reference Handling** section, enable this option to automatically include referenced entries and assets in translated releases. This ensures that all nested or linked content is also localized and published together with the main entry.![Trados-Configuration-Reference-Handling](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86094ef25d0aca50/69c7ab86170eaefbfcb11730/Trados-Configuration-Reference-Handling.png)

            Once done, click the **Finish** button.

            You can reset your configuration by clicking the **Reset Configuration** button.

        6.  After configuring all the details, click the **Save** button.
        7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Trados-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b1c4c0c0d4fefd8/69c7ab864b190fe34a73633a/Trados-UI-Locations.png)
        8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

            **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

        9.  Click the **Open Stack** button to start using the Trados application.
3.  ## Use the Trados App within your Stack

    To use the Trados app in your stack, you can use Full Page Location and Stack Dashboard.

    ### Use Trados as a Full Page App

    To use the Trados app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to stack, click **Apps** from the header, and select the **Trados** app.![Trados-Full-Page-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14c5fb6993e7c334/69c7ab860a6de1d55f553d09/Trados-Full-Page-App.png)
    2.  Click **\+ New Project** to create a project for translation.![Trados-Full-Page-New-Project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt304858193b99bb8c/69c7ab81db2372089f21585b/Trados-Full-Page-New-Project.png)
    3.  In the **Create Project** modal, provide the following details:
        1.  Enter the **Project Name** and **Description**.
        2.  Choose the **Project Option** from the dropdown.

            **Additional Resource:** lets you select a pre-configured Trados template, which automates the process of translating content quickly and accurately.

            You can configure the templates in the **Resources** section of your Trados account. You must enable the **JSON** file type in the Trados template configurations. Go to your [Trados account](https://cloud.trados.com/en/managed-translation/login) > **Resources** section, click **File Type Configurations**, select your configuration, and then enable the **JSON** file type and save.

            ![Trados-Resources-Enable-JSON-File-Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ac879ea68f77b8e/6461e42b9c40aa4d1f07485f/Trados-Resources-Enable-JSON-File-Type.png)

            **Note:** When you select a template from the **Project Option** dropdown, if the template contains additional fields, they are automatically added to the modal before creating the project.

        3.  Select the **Releases** you want to send for translation.
        4.  Provide the new release name in the **Create Release** textbox. This release will include all the translated entries.
        5.  Choose the **Source Language** and **Target Language** from the respective dropdowns.

            **Note:** You can also add multiple target languages for translation.

        6.  After adding all the details, click the **Create Project** button.![Trados-Full-Page-New-Project-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e0c37d0c5d12300/69c7ab817e9d0754c5283680/Trados-Full-Page-New-Project-Modal.png)

            **Note:**

            -   The Trados app does not support assets in Contentstack Releases. All assets must be removed from the release before adding it to the translation project.
            -   Target languages are fetched from Trados Project Templates.

4.  After creating a project, you can see the project **Name**, translation **Status**, and the **Target Language** in which the release content is translated.![Trados-Full-Page-New-Project-Created](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6a0dd5230f829478/69c7ab81a31e404ac9bba39b/Trados-Full-Page-New-Project-Created.png)

    You can see different statuses such as _Preparing_, _In Progress_, _Pending_, etc. on the Trados app as the status of the translation project keeps changing with the translation process.

    ![Trados-Full-Page-Project-Status](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1287b8629c12d61c/69c7ab814b190f4b94736336/Trados-Full-Page-Project-Status.png)

    Also, you can quickly search projects using the project name or filter them by status and target language.

5.  After the translation is completed, the status changes to **Translated**. Hover over the project, and you see the **Remove from Contentstack**, **Delete from Trados**, and **Project Details** icons.![Trados-Full-Page-Project-Translated-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb25c5d5da80ad6e0/69c7ab813a2be26cf96ee020/Trados-Full-Page-Project-Translated-Options.png)

    -   Click the **Remove from Contentstack** icon to remove the project from Contentstack.
    -   Click the **Delete from Trados** icon to delete the project from Trados and Contentstack.
    -   Click the **Project Details** icon to get all the details of the translated project.![Trados-Full-Page-Project-Translated-Options-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4dd7a0a3323ee8a7/69c7ab827e9d078433283684/Trados-Full-Page-Project-Translated-Options-Details.png)

    **Note:**

    -   Trados marks the project as complete on deleting the project.
    -   Deleting a project does not delete the translated entries.

6.  After the **In Progress** state, the translation status changes to **Execution**. If the project is delayed during the translation, hover over the project, and click the **Retry** icon to start the translation again.![Trados-Full-Page-Project-Execution-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte73a340937416854/69c7ab81db2372ea4821585f/Trados-Full-Page-Project-Execution-Options.png)
7.  When the error occurs during the translation, the status changes to **Error while Translating**. Hover over the project, and you can see the **Error**, **Copy Project**, **Retry**, and **Delete from Trados** icons.![Trados-Full-Page-Project-Error-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7067797724133fb9/69c7ab814b190ffabe736332/Trados-Full-Page-Project-Error-Options.png)
    -   Click the **Error** icon to view error details along with entry version logs.
    -   Click the **Copy Project** icon to copy the failed translation and recreate the project.
    -   Click the **Retry** icon to start the translation again.
    -   Click the **Delete from Trados** icon to delete the project from Trados and Contentstack.

        **Note:** Deleting a project does not delete the translated entries.

8.  To view the translated entries, navigate to **Releases** and select the translated release.![Trados-Sample-Translated-Release](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3abbff4b0f1b137c/69c7ab82e0856f5f38f8ca18/Trados-Sample-Translated-Release.png)
9.  Click the entry to view the translated content.![Trados-Translated-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b7b3db8945c005b/69c7ab820a6de16fc6553d05/Trados-Translated-Entry.png)

    **Note:** To add the referenced assets in the translated release, you can enable the **Reference Handling** toggle button during app configuration in [step 2](#install-and-configure-the-trados-app-in-marketplace).


### Use Trados within your Stack Dashboard

**Note:** This section will be deprecated soon. Use the [Trados Full Page app](#use-trados-as-a-full-page-app) to manage translation projects.

To use the Trados app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:>

1.  Go to the stack to view the Trados app Dashboard Widget within your CMS.![Trados-Dashboard-in-CMS](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89ffc18caef8f6f0/6441e1ddbeb11b4c338c3744/Trados-Dashboard-in-CMS.png)
2.  Click **\+ New Project** to create a project for translation.![Trados-Add-New-Project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc9fddc5e79eb317/6441e1ddd483864ab365610f/Trados-Add-New-Project.png)
3.  In the **Create Project** Modal, enter the **Project Name**, and **Description**, choose the **Project Option**, select the **Releases** to be translated, provide the new release name in the **Create Release** field, choose the target **Language**, and then click the **Create Project** button.

    **Project Option** lets you select a pre-configured Trados template, which automates the process of translating content quickly and accurately.

    **Note:** You can configure the templates in the **Resources** section of your Trados account. You must enable the **JSON** file type in the Trados template configurations. Go to your [Trados account](https://cloud.trados.com/en/managed-translation/login) > **Resources** section, click **File Type Configurations**, select your configuration, and then enable the **JSON** file type and save.

    ![Trados-Resources-Enable-JSON-File-Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ac879ea68f77b8e/6461e42b9c40aa4d1f07485f/Trados-Resources-Enable-JSON-File-Type.png)

    You can provide a release name in the **Create Release** field; this new release will contain all the translated entries.

    You can also add multiple languages for translation.

    ![Trados-New-Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c426d3f25271ba2/6849e24218377023431f3549/Trados-New-Project.png)

    **Note**:

    -   The Trados app does not support Assets in Contentstack Releases. All the assets must be removed from the release before adding it to the translation project.
    -   You can translate up to 500 entries (including the locale versions) at once.

4.  In the Trados Dashboard, you can see the project **Name**, translation **Status**, and the **Target Language** in which the release content is translated.![Trados-Project-Created](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8e2cc0247ae0c20/6441e266717a360937d75881/Trados-Project-Created.png)

    You can see different statuses on the Trados app Dashboard Widget as the status of the translation project keeps changing with the translation process.

    ![Trados-Translation-Status-Multiple](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12bf8b622b8290fd/64420ee7b7b7332b233e2880/Trados-Translation-Status-Multiple.png)
5.  After the translation is completed, the status changes to **Translated**. Hover over the project, and you see the **Remove** and **Delete** icons.![Trados-Remove-Delete-Buttons](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte441bd217a924f5f/6441e22210882b4f2385bdce/Trados-Remove-Delete-Buttons.png)
    -   Click the **Remove** icon to remove the project from Contentstack.
    -   Click the **Delete** icon to delete the project from Trados and Contentstack.

        **Note**:

        -   Trados marks the project as complete on deleting the project.
        -   Deleting a project does not delete the translated entries.

6.  After the **In Progress** state, the translation status changes to **Execution**. If the project is delayed during the translation, hover over the project, and click the **Retry** icon to start the translation again.![Trados-Translation-Execution-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43e74e0e69d058e3/6441e222dd9b312c696c95d5/Trados-Translation-Execution-Button.png)
7.  When the error occurs during the translation, the status changes to **Error while Translating**. Hover over the project, and you can see the **Error**, **Retry**, and **Delete** icons.![Trados-Translation-Error-While-Translating-Buttons](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb5f2a75512380fd/6441e222c5646c7d86ea654f/Trados-Translation-Error-While-Translating-Buttons.png)
    -   Click the **Error** icon to see the error details.
    -   Click the **Retry** icon to start the translation again.
    -   Click the **Delete** icon to delete the project from Trados and Contentstack.

        **Note:** Deleting a project does not delete the translated entries.

8.  In the left navigation panel, navigate to the **Releases** and select the translated release.![Trados-Sample-Translated-Release](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf40a9d0b6b32f45/657850b80536029893780bbe/Trados-Sample-Translated-Release.png)
9.  Click the entry to view the translated content.![Trados-Translated-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f2c4947e1327f58/657850f0f23625a10c2f753a/Trados-Translated-Entry.png)

**Note**:

-   The Trados app does not support Select, Number, Date, File, URL, Link, Taxonomy, Boolean, and Custom fields for content translation.
-   Also, Trados does not support the non-localizeable fields.
