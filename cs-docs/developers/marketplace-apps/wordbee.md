---
title: "[Marketplace guides and apps] - Wordbee App Installation Guide"
description: Wordbee App Installation Guide
url: https://www.contentstack.com/docs/marketplace/wordbee
product: Contentstack
doc_type: marketplace-app-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Wordbee App Installation Guide

This page explains how to install, configure, and use the Wordbee app from the Contentstack Marketplace to translate entries and manage localization workflows. It is intended for Contentstack stack owners/admins and developers setting up translation management integrations, and should be used when onboarding Wordbee into a stack or configuring translation settings and UI locations.

## Wordbee App Installation Guide

Wordbee is a translation management system (TMS) designed to help organizations manage content translation and localization. With features such as translation workflow management, collaboration tools for translators, and integration with machine translation engines, it lets organizations reach international audiences effortlessly.

With the Contentstack Marketplace Wordbee app, you can easily translate your entries into multiple languages and provide localized versions within your Contentstack entries. You can translate entries using the Wordbee Full Page app and Sidebar Widget and view the translation status.

## Prerequisites

- [Wordbee (Beebox) account](https://contentstack.beebox.wordbee.com/Home/Login)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Wordbee app within your stack.

## Steps for Execution

- [Retrieve Configuration Details from Wordbee](#retrieve-configuration-details-from-wordbee)
- [Install and Configure the Wordbee app in Marketplace](#install-and-configure-the-wordbee-app-in-marketplace)
- [Use the Wordbee app within your Stack](#use-the-wordbee-app-within-your-stack)

## Retrieve Configuration Details from Wordbee

**Note**: Ensure you have an active Wordbee account. You can sign up for a trial or purchase a subscription.
Once you have set up your account, you will receive an email with your login details and a URL. Follow the instructions in the email to complete the account setup process.

To get your configuration details for Wordbee, follow the steps given below:

Log in to the Wordbee (Beebox) account using your Wordbee account credentials.

- On the Wordbee (Beebox) dashboard, choose your project and click **Select**.![Wordbee-Project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f4392b0d30f8770/652770f901a337c7e75eab2c/Wordbee-Project.png)
- Go to **Settings** from the left navigation panel and click the **CMS Connector** tab to get the **API Url**, **API Project Key**, **API Login**, and **API Password** of your project.![Wordbee-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb8d47e77cfd70c3e/6527b941bc22f47c71766c42/Wordbee-Credentials.png)
- To get the **API Callback URL**, add your [Stack API Key](../../../api-docs/api-detail/content-delivery-api.md#authentication) to the following link:

```
https://wordbee.contentstackmarket.com/api/prod-marketplace-wordbee-consumer-api?api_key=
```

- Copy and paste the information to your clipboard. We will need these details while configuring the Wordbee app in [Step 2](#install-and-configure-the-wordbee-app-in-marketplace).
- In **Project settings**, verify if the **Rule name** under **Text extraction rules** is **JSON**.When the **Rule name** is not **JSON**, then click the **View all** button and copy the following rule:

```

      JSON
      For translation of all JSON node values.
      JSON
      34
      v2
      SRX
      {}
      false
      true
      true
      false
      true
      CompareTexts

            Default

          HTML
          1

          SRX
          {}
          false
          true
          true
          false
          true
          CompareTexts
          0

          false
          false

            false
            true
            AllToCharacter
            false
            false
            false
            false
            AllToCharacter
            True
            utf-8
            false
            false
            false

            `

                script
                style

              false
              false
              750

              True
            `

              a
              acronym
              b
              big
              blink
              br
              cite
              code
              dfn
              em
              font
              i
              iframe
              img
              kbd
              s
              small
              span
              strike
              strong
              small
              sub
              sup
              tt
              u
              var
              ruby
              rt
              rc
              rp
              rbc
              rtc
              asp:label

              pre
              script
              style

              head
              body
              table
              p

            false
            0

    0

        0
        false

  false
  false

    true
    false
    true
    false

    [{"path":"..*","includeChildren":false,"filterChildren":null,"ishtml":false,"ishtmlEncoded":false,"mappings":{"locales":[],"mapLocaleByDefault":true},"key":null,"min":null,"max":null,"cfs":null}]
    {"locales":[],"mapLocaleByDefault":true}

```

## Install and Configure the Wordbee app in Marketplace

To install the app in your stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

From the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see all available apps. Hover over the **Wordbee** app and click **Install**.![5-Wordbee-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt295654d31c596798/68acc4f7b3421a7779096ef0/5-Wordbee-App.png)
- In the pop-up window, select the stack where you want to install the Wordbee app, scroll down, accept the **Terms of Service**, and click the **Authorize & Install** button.![6-Wordbee-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40185bcc525382b9/666814beabe4398438d17c3f/6-Wordbee-App-Install.png)
- On the **Configuration** screen, enter the following details:**CMS Connector Credentials**:Click the **+ New Configuration** button to add new configuration details.
- In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![8-Wordbee-Config-Add-New-Project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccdfc8a0b04806b4/666814bec97e38cb7cf1750b/8-Wordbee-Config-Add-New-Project.png)
- After adding the configuration, enter the following details:Enter the **API URL**, **API Project Key**, **API Login**, and **API Password** of your Wordbee account retrieved in [Step 1](#retrieve-configuration-details-from-wordbee).
- Click the **Verify Connection** button to authorize the access.![9-Wordbee-Configuration-Add-New-Project-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e08bd82d26777b4/666814be7f40f4b26f284b99/9-Wordbee-Configuration-Add-New-Project-Credentials.png)
- After verifying the connection, you can see the Wordbee Project **Source Language** and **Target Language(s)**.
- **Set as Default**: To set this configuration as the default, click this checkbox.Alternatively, you can set a configuration as the default by clicking three dots on the top-right side of the configuration section and then selecting **Set as Default**.

**Note**: You must set at least one project configuration as the default.

- **Language Presets**: **Language Presets** are pre-configured sets of languages used for creating and managing multilingual content in a content management system.Select the existing **Preset Name** or **Create** the new preset, add the **Language(s)**, and click **Save** to save the language configurations.

Similarly, you can add multiple configurations by following the steps discussed above.

- To delete the configuration, click the three dots and select **Delete Configuration**.![13-Wordbee-Configuration-Project-Delete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95169f3c0dd77e12/666814bf19465869e64c8a95/13-Wordbee-Configuration-Project-Delete.png)In the **Confirm Deletion** modal, add the configuration name and click **Delete**.![14-Wordbee-Configuration-Project-Delete-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb27b545b74f7a3a4/666814bffe5232ff432888eb/14-Wordbee-Configuration-Project-Delete-Modal.png)
- Click the **Next** button.
- **Content Type Settings**:In the **Exclude Field Types** drop-down, you can choose specific field types to exclude from translation.
- Click the **Manage Fields** button to include or exclude the fields for translation.![15-Wordbee-Configuration-Content-Type-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf74846b279dfcc32/68ba010cbfa11f8973a16aa5/15-Wordbee-Configuration-Content-Type-Settings.png)In the **Content Type Settings** modal, select the content type. You will notice that all fields are selected by default. Deselect the fields you want to exclude from the translation and click **Save**.![16-Wordbee-Configuration-Save-Content-Type-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18399a71dec96b7f/666814ce491b8188b2505578/16-Wordbee-Configuration-Save-Content-Type-Settings.png)
- Also, click the **Enable to stop sending tags** checkbox to not send the tags.
- Click the **Next** button.
- **Additional Settings**:**Roles**: Select the **Roles** from this dropdown who can initiate content translation. By default, the **Admin** role is selected. You can add **Content Managers** and/or **Developer** roles as well. However, only Admin can manipulate the app configuration settings.
- **Publish Entry**: If you want to publish the entry automatically after the content has been translated, you can set the **Environment(s)** and **Content Type(s)** for publishing accordingly.![17-Wordbee-Configuration-Additional-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1789539dcdf435ef/666814ce19465868734c8a9b/17-Wordbee-Configuration-Additional-Settings.png)
- **HTML Encode/Decode**: You can enable this toggle button to remove the HTML encoding and decoding for JSON RTE fields.![17-a-Wordbee-Configuration-Additional-Settings-HTML-Encode-Decode](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16d32b11f505553c/68acb13a7e8fa917421310f8/17-a-Wordbee-Configuration-Additional-Settings-HTML-Encode-Decode.png)
- **Language Configuration**: In the **Language Configuration** section, define the content translation languages for Wordbee and Contentstack to avoid any mismatch between the language codes.All entries from Wordbee languages will be localized into Contentstack languages. For any target languages not selected, the app will use the default language code of the stack.

**Note**: Wordbee supports **2:1 mapping**. You can map two Wordbee languages to a single Contentstack language.

Click the **+ Add Language** button to add a language.

- **Configure Trigger URL**: Provide the **Trigger URL** to send the entry details along with entry UID, link, translation status, and error, if any. You can use these details to frame it for sending emails.![19-Wordbee-Configuration-Additional-Settings-Configure-Trigger-URL](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2cf47d9459ac43b/666814ce491b81868d50557c/19-Wordbee-Configuration-Additional-Settings-Configure-Trigger-URL.png)
- Once done, click the **Finish** button. If you want to reset the configuration, click the **Reset Configuration** button.
- After configuring all the details, click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![20-Wordbee-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt235fe1cc368359ab/666814cf7f40f44cd8284ba2/20-Wordbee-UI-Locations.png)
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

  **Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click the **Open Stack** button to start using the Wordbee app.

## Use the Wordbee App within your Stack

To use the Wordbee app in your stack, you can use Full Page Location and Sidebar Widget.

### Using Wordbee as a Full Page Location App

To use the Wordbee app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

Go to the stack dashboard. On the left-hand side primary navigation, you will find the **Wordbee** app icon (as shown below).![21-Wordbee-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf939ad7de1bf8322/68acc65c471af64ba71e8b0e/21-Wordbee-App-Icon.png)

- Click the app icon to view the Wordbee app within your CMS.![Wordbee-Full-Page-UI](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt753926689a9c667b/68acc4f8c53b046bfef92e7b/Wordbee-Full-Page-UI.png)
- In the **Bulk Translate** page, select the **Content Type** and add entries for translation.![Wordbee-Select-Entries-From-Content-Type-1](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9637a160bd93cf8/652770f8d8b0125e63e98a29/Wordbee-Select-Entries-From-Content-Type-1.png)

  **Note**: As of now you can add or select **10 entries** from different content types for translation.![Wordbee-Select-Entries-From-Content-Type-2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ebb0ac693894556/652770f9580c6b6589ba5fdf/Wordbee-Select-Entries-From-Content-Type-2.png)
- After adding the entries, you can click **Show Selected** to view all the entries added for translation.![Wordbee-Show-Selected-Entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc75de0c8174b146b/652770f901a3371d0a5eab28/Wordbee-Show-Selected-Entries.png)
- To initiate the translation process, click **Translate**.![Wordbee-Translate](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt527998c87e7303d6/652771a3d8b01283b9e98a32/Wordbee-Translate.png)
- In the **Confirm Translation** modal, fill in the details as follows:Choose the translation project from the **Select Project** dropdown. You can see the project which is set as default at the time of app configuration in [step 2](#install-and-configure-the-wordbee-app-in-marketplace).
- **Source Language** is by default selected. You can choose between the **Language** (Target Languages) or **Presets** (Language Presets) options.
- Optionally, you can add **Job References** settings such as **Deadline Date**, **Job comments**, **Live Environment URL**, **Internal Comments**, and **Image Source File URL.**

  **Note**: The **Deadline Date** format is **mm:dd:yyyy**, and the time format is **hh:mm:ssZZ**, where ZZ refers to the time zone.![confirm-translation-select-language-project-job-reference.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf169cb1c59feacb4/684806734799480276ba3152/confirm-translation-select-language-project-job-reference.png)
- (Optional) Select the **Disable Pre-translated Content** checkbox to flag and prevent the use of any existing pre-translated content.![Wordbee-Full-Page-Disable-Pretranslated-Content-Translate](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2131432a2340fd3/68becef17823e2284537c3af/Wordbee-Full-Page-Disable-Pretranslated-Content-Translate.png)
- Click the **Translate** button to start the translation.![Full-Page-Translate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c5e2e118e9cff84/68becd497461652d1fc32286/Full-Page-Translate.png)

  **Note**: You can translate up to **500 entries** (including the locale versions) at once.
- To view the translation status of the entries, click **Job Status** from the left panel, and then choose the project from the **Select Project** drop down.**![28-Wordbee-Job-Status](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21431ac5ffda3740/666814ce134a34e29667b723/28-Wordbee-Job-Status.png)Note**:

You can also view the translation status in the Wordbee project dashboard.

- Once the translation status changes to Ready, you can retry the translation jobs.
- Click **Error Logs** to view the error logs in detail.![Wordbee-Error-Logs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ca3c8666490abfe/652770f8580c6b18a4ba5fdb/Wordbee-Error-Logs.png)After successful translation, you can view the translated content in the entries.

### Using the Wordbee App as a Sidebar Widget

To use the Wordbee app as a Sidebar Widget, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:

- Go to the stack dashboard and navigate to the **Entries** page, then open the entry you want to translate. Click the **Apps** icon from the right navigation panel.![Wordbee-Sidebar-Apps-Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e76ca84b0d999e3/68becd495f1488b8fd08baa9/Wordbee-Sidebar-Apps-Icon.png)
- Select **Wordbee** from the dropdown and fill in all the fields under the **Translate** tab.Choose the translation project from the **Select Project** dropdown. You can see the project which is set as default at the time of app configuration in [Step 2](#install-and-configure-the-wordbee-app-in-marketplace).
- **Source Language** is by default selected. You can choose between the **Language** (Target Languages) or **Presets** (Language Presets) options.
- Optionally, you can add **Job References** settings such as **Deadline Date**, **Job comments**, **Live Environment URL**, **Internal Comments**, and **Image Source File URL**.

  **Note:** The **Deadline Date** format is **mm:dd:yyyy**, and the time format is **hh:mm:ssZZ**, where **ZZ** refers to the time zone.
- (Optional) Select the **Disable Pre-translated Content** checkbox to flag and prevent the use of any existing pre-translated content.![Sidebar-Widget-Disable-Pretranslated-Content-Translate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt048983928abf56aa/68becd4911efa969a65c9859/Sidebar-Widget-Disable-Pretranslated-Content-Translate.png)
- Click the **Manage Fields** button to include or exclude the fields for translation.![Sidebar-Widget-Manage-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4c5b5f99a1bbcd7/68becd493af6a33763b595f6/Sidebar-Widget-Manage-Fields.png)
- In the **Manage Fields** modal, all fields are selected by default. Deselect the fields you want to exclude from the translation and click **Save**.The field types Reference, Select, Number, Date, Tags, and Taxonomy are not available for selection in the Manage Fields modal.

**Note**: **Manage Fields** settings will be saved for only one instance.

- Click the **Translate** button to start the translation.![Wordbee-Sidebar-Widget-Translate](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14f0f7dcd1c2560d/68becef1c6351b2359142e58/Wordbee-Sidebar-Widget-Translate.png)
- You can view the translation status under the **Status** tab by selecting a project using the **Select Project** drop down.After successful translation, you can view the translated content in the entries.

**Note**: Once the translation status changes to Ready, you can retry the translation jobs.

#### Project Naming Convention

To ensure clear and consistent identification, each project name in the **SourceFile **follows a three-part structure: **Entry Title**, **Content Type UID**, and **Entry ID**.

This structure makes it easier to identify and track files throughout the translation workflow, helping maintain consistency and efficiency across multiple localization projects.

By default, only the **first 20 characters** of the Entry Title are shown in the project name. To display the full title, you need to perform the following steps in Wordbee:

- Log in to the Wordbee (Beebox) account.
- Go to **Settings** from the top navigation panel, search for **Custom Fields**, and click **Configure**.![Wordbee-Naming-Convention-Configure-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc719be8fe4be0ddd/67e0e182a6d88eb456053f50/Wordbee-Naming-Convention-Configure-Custom-Field.png)
- In the **Jobs** tab, click the **Add** button, then enter **Contentstack Entry Title** as the **Field name**, select **Text field** as the **Type of field**, and click **OK**.![Wordbee-Naming-Convention-Contentstack-Entry-Title](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ebb490837fbfab2/67e0e183460eb4a2ca9482b5/Wordbee-Naming-Convention-Contentstack-Entry-Title.png)
- In your Wordbee project under **Beebox**, go to **Job Custom Fields** and select **Contentstack Entry Title** next to **CustomStr1**.![Wordbee-Naming-Convention-Set-CustomStr1](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc9e2cfecc8bbf98b/67e0e183a6d88e1180053f54/Wordbee-Naming-Convention-Set-CustomStr1.png)

  **Note**: **CustomStr1** must be the Custom field ID.
- Finally, click the **Edit View** option in the Jobs Dashboard and enable **Contentstack Entry Title**.![Wordbee-Naming-Convention-Customize-Columns](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt80dec58afb55c4d8/67e0e18317f7b498810d0bf7/Wordbee-Naming-Convention-Customize-Columns.png)
- Now you can view the full Entry Title in the Contentstack Entry Title custom field.![Wordbee-Naming-Convention-View-Full-Entry-Title](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2642415b87215be5/67e0e18320a3dc22d0f8325f/Wordbee-Naming-Convention-View-Full-Entry-Title.png)

## Common questions

### Who can install and configure the Wordbee app in a Contentstack stack?
Access to the Contentstack Organization/Stack as the Owner/Admin is required.

### What Wordbee details are needed to configure the app in Contentstack?
You need the **API Url**, **API Project Key**, **API Login**, **API Password**, and the **API Callback URL**.

### How many entries can be selected in Bulk Translate and how many can be translated at once?
As of now you can add or select **10 entries** from different content types for translation, and you can translate up to **500 entries** (including the locale versions) at once.

### Where can translation status be checked after starting a translation job?
You can view the translation status by clicking **Job Status** from the left panel, and you can also view the translation status in the Wordbee project dashboard.