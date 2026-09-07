---
title: "Bynder App Installation Guide"
description: "Learn to fetch and display Bynder assets in Contentstack with multi-configuration support, seamless login bypass, and advanced asset usage tracking features."
url: /marketplace/bynder
uid: bltbe84a04b2b8329ee
---

# Bynder App Installation Guide

## Bynder App Installation Guide

Bynder is a cloud-based **Digital Asset Management** (**DAM**) platform that enables organizations to manage, share, and distribute their digital content from a centralized location.

With its user-friendly interface, the marketing team can create, find, and utilize digital assets such as images, videos, and documents efficiently.

By installing the Bynder app from the Contentstack Marketplace, you can use it within your stack to fetch and display digital assets from Bynder accounts within your entries.

## Prerequisites

-   [Bynder account](https://www.bynder.com/en/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Follow this step-by-step guide to install and configure the Bynder app within your stack.

## Steps for Execution

1.  [Retrieve your Credentials from Bynder](#retrieve-your-credentials-from-bynder)
2.  [Install and Configure the Bynder App in Marketplace](#install-and-configure-the-bynder-app-in-marketplace)
3.  [Use the Bynder App within your Stack](#use-the-bynder-app-within-your-stack)

1.  ## Retrieve your Credentials from Bynder

    To configure the Bynder app, you first need to create an account in Bynder. To do that, follow the steps given below:

    ### Get your Bynder Organization URL

    1.  Go to [https://www.bynder.com/en/](https://www.bynder.com/en/) and create a new account. It is recommended to use the partnership account by purchasing the license. The free trial account will not work as expected.
    2.  To get your Bynder organization URL, please refer to the [Get a Personalized URL for your Bynder Portal](https://support.bynder.com/hc/en-us/articles/360013875240-Get-a-Personalized-URL-for-your-Bynder-Portal-Custom-URL-) document.

    ### Get Client ID and Client Secret from Bynder

    To retrieve the OAuth credentials (Client ID and Client Secret), follow the steps:

    1.  Log in to your Bynder portal using the **Bynder Organization URL** , navigate to the “Settings” icon, and select **Advanced settings** > **Portal settings**.![Bynder-Get-Credentials-Advanced-Settings-Portal-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9375d47e67eab2b/69ccba1f0a6de13dd7554d68/Bynder-Get-Credentials-Advanced-Settings-Portal-Settings.png)
    2.  In the left navigation, under the **General settings** header, click **OAuth Apps**.![Bynder-Get-Credentials-OAuth-Apps](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt602109940ae571e3/69ccba2f6e737f7241ce10c5/Bynder-Get-Credentials-OAuth-Apps.png)
    3.  Click the **Add new app** button to create a new app.![Bynder-Get-Credentials-Add-New-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8156e242fad68034/69ccba1f4148606761ec877d/Bynder-Get-Credentials-Add-New-App.png)
    4.  In the **Register new OAuth application** page, provide the **Application name** and select the **Integration** type as **Contentstack** from the dropdown.![Bynder-Get-Credentials-App-Application-Name-And-Integration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6187c34ec8b610e/69ccba1f1604ee4c848745f6/Bynder-Get-Credentials-App-Application-Name-And-Integration.png)
    5.  You must **Select grant type** as **Authorization Code + Refresh Token** to ensure the app uses an app token rather than a user-specific token.

    6.  In the **Authorization Redirect URL** section, set the static redirect URL as https://bynder.contentstackmarket.com/#/bynder/callback provided by Contentstack. This URL is necessary to generate the code required for fetching the app token.![Bynder-Get-Credentials-App-Grant-Type-And-URL](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt17fe0e36bd04336a/69ccba2e7adc07f63bc9c848/Bynder-Get-Credentials-App-Grant-Type-And-URL.png)
    7.  To configure scopes, check the required scopes in **Select scopes** to ensure the app functions correctly:

        -   asset:read
        -   asset.usage:read
        -   asset.usage:write
        -   collection:read

        ![Bynder-Get-Credentials-App-Select-Scopes](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10036a42e308f981/69ccba200e91f6fde9818c7e/Bynder-Get-Credentials-App-Select-Scopes.png)
    8.  Scroll down, and click the **Register application** button to save and register the app.![Bynder-Get-Credentials-Register-Application](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb0694d9dcb05052/69ccba2e0ba58f63f69c79d6/Bynder-Get-Credentials-Register-Application.png)
    9.  Once registered, the app is created and you will get the **Client ID** and **Client Secret**.![Bynder-Get-Credentials-Client-ID-And-Client-Secret](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2c2710ee12ae2c3/69ccba2f22934ad4d5449e2d/Bynder-Get-Credentials-Client-ID-And-Client-Secret.png)
    10.  Copy these credentials to use during app configuration in [step 2](#install-and-configure-the-bynder-app-in-marketplace).
2.  ## Install and Configure the Bynder App in Marketplace

    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all the available apps. Hover over the **Bynder** app and click **Install**.![Bynder-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7bd00f585ba7bebc/69cccdadbcfdd1f8022bc6ab/Bynder-App.png)
    4.  In the pop-up window, select the stack where you want to install the Bynder app, accept the **Terms of Service** , and click the **Install** button.![3-Bynder-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31306e7b816b3b69/664e49d7396ba8d4dc9ec07f/3-Bynder-App-Install.png)
    5.  On the **Configuration** screen, you can add multiple configurations for Bynder. To do so, follow the steps given below:
        1.  Click the **\+ New Configuration** button to add new configuration details.![Bynder-Configuration-New](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8f5bf6d4683ea81/69ccba377adc07d577c9c84c/Bynder-Configuration-New.png)
        2.  In the **Add Configuration** modal, enter the **Configuration Name** and click **Add**.![Bynder-Configuration-New-Add](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt152057dcfc9a8f9a/69ccba37f1ef29c2acba13bb/Bynder-Configuration-New-Add.png)
        3.  After adding the configuration, enter the following details:
            1.  **Bynder Organization URL** : Enter the **Bynder Organization URL** you retrieved from Bynder in [step 1](#retrieve-your-credentials-from-bynder).
            2.  **Language** : Select the language from the **Language** drop-down.

                **Note**

                -   By default, the Bynder app is set to **English** .
                -   The language selected here is not related to the locale in Bynder.

            3.  **Mode** : Select a **Mode** .

                -   If you want to select multiple assets in your entry, select **Multi Select** .
                -   If you want to select a single asset in your entry, select **Single Select** .
                -   If you want to enable the [Dynamic Asset Transformations (DAT) feature](https://support.bynder.com/hc/en-us/articles/360018559260-Dynamic-Asset-Transformations-DAT-) on a single asset, select **Single Select File** . In this case, only a single file can be selected.

                **Note:** **Multi Select** is the default selected option.

                ![Bynder-Configuration-Add-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt730712732a24783e/69ccba2e250769732c005bca/Bynder-Configuration-Add-Credentials.png)
            4.  **Advanced Settings** (optional): Enable the toggle and enter the **Client ID** and **Client Secret** retrieved from your Bynder account in [step 1](#retrieve-your-credentials-from-bynder), and click the **Fetch Code and Validate** button.

                You may get the Bynder login screen or permission screen for Bynder app whose credentials (Client ID & Client Secret) you have added in the configuration.

                ![Bynder-Configuration-Advanced-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9500b2af6772021/69ccba1f7c8ed54c596a7203/Bynder-Configuration-Advanced-Settings.png)

                Once validated, you can use the **Login Bypass** and **Enable Asset Tracker** features.

            5.  **Login Bypass** : Enable the toggle button to use the token-based approach to bypass the standard login screen for the selector page while choosing assets from the custom field.
            6.  **Enable Asset Tracker** : Enable the toggle button to track the asset usage within the Bynder portal.![Bynder-Configuration-Advanced-Settings-Toggles](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb52474008ddc4808/69ccba2e1604ee109d8745fc/Bynder-Configuration-Advanced-Settings-Toggles.png)
    6.  **Set as Default** : To set this configuration as the default, click this checkbox.![Bynder-Configuration-Set-As-Default-Checkbox](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce7c7128bde670ae/69ccba1f22934a7a36449e29/_Bynder-Configuration-Set-As-Default-Checkbox.png)

        Alternatively, you can set a configuration as the default by clicking the three dots on the top-right side of the configuration section and then selecting **Set as Default**.

        ![Bynder-Configuration-Set-As-Default](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfbb7801920ce5af/69ccba1f76dc80929622279d/_Bynder-Configuration-Set-As-Default.png)

        **Note:** At least one app configuration should be selected as the default.

        Similarly, you can add multiple configurations by following the steps discussed above.

    7.  To delete the configuration, click the three dots and select **Delete Configuration.**![Bynder-Configuration-Delete-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt660e0c52f81c016b/69ccba1fbbaed6d8e431fdc9/_Bynder-Configuration-Delete-Configuration.png)

        In the **Confirm Deletion** modal, add the configuration name and click **Delete**.

        ![Bynder-Configuration-Delete-Configuration-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2314da4b44afc177/69ccba1f08dd4c23bdc36328/_Bynder-Configuration-Delete-Configuration-Modal.png)
    8.  For an existing user, the credentials will be added as the default configuration, and named as legacy\_config.![Bynder-Configuration-Legacy-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7e7716f6f13bd9c0/69ccba1fdfb8e05f82dfb510/Bynder-Configuration-Legacy-Config.png)

        **Warning**

        -   legacy\_config is a reserved keyword and you cannot use it in adding new configurations.
        -   If you delete the legacy\_config configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.

    9.  **Choose the Bynder Keys to Save in Entry** : Choose how to save the data fetched from the Bynder account in Contentstack entries.

        -   If you select the **All Fields** option, you can select only a limited number of videos in the entry.
        -   For **Custom Fields** , you can search and add specific Bynder fields you want to save in entries.

        **Note:** When you change the settings from **All Fields** to **Custom Fields** , and vice versa, any existing and newly added assets in the entry will store the data according to the updated configuration settings.

        ![Bynder-Configuration-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf275772f4217163/69ccba2ea5dba6ae45c28ff4/Bynder-Configuration-Save-In-Entry.png)

        If you select **Custom Fields** , then the **Bynder Keys** drop-down appears. By default, **extensions** , **id** , **name** , **previewUrls** , **type** , **files.webImage** , **databaseId** , **url** , and **additionalInfo** options are already selected inside the dropdown. If you want to create a new key, click the **\+ New Key Field** option.

        ![Bynder-Configuration-Save-In-Entry-Keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0383d97717cfb7eb/69ccba2e6e0fcbc988505f7d/Bynder-Configuration-Save-In-Entry-Keys.png)

        In the **Add Bynder Key Path** modal, enter the **Bynder Key Path** and click the **Create** or **Create and Apply** button to create a new key.

        ![6-Bynder-Configuration-New-Key-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb3e0d2e47aae4df6/664e49d768f430a76434a0a2/6-Bynder-Configuration-New-Key-Modal.png)
3.  After adding the configuration details, click the **Save** button.
4.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![7-Bynder-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf75a27e899a1eece/664e49d7f5cbb72ba88a131d/7-Bynder-UI-Locations.png)
5.  If the webhook is enabled for your app, you can view the **Webhook Logs** under the **Webhook** tab.

    **Additional Resource:** For more information on UI locations and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

6.  Click **Open Stack** to start using the Bynder application.

1.  ## Use the Bynder App within your Stack

    To use the Bynder app within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![8-Bynder-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4645b1063c5ae19a/664e49d7628a4f372f62b21d/8-Bynder-Content-Type.png)

    There are two ways to use the Bynder app in your entry:

    1.  [Custom Field](#use-the-bynder-app-as-a-custom-field)
    2.  [JSON Rich Text Editor Field](#use-the-bynder-app-an-a-json-rte-plugin)

    ### Use the Bynder App as a Custom Field

    1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension or App** , select **Bynder** and then click **Proceed**.![9-Bynder-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cbd397769d41a01/664e49d855b397f939606642/9-Bynder-Custom-Field-Add-App.png)

        This adds Bynder in the custom field.

        ![10-Bynder-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt828a310bf77e823d/664e49d7628a4f656262b219/10-Bynder-Custom-Field-Added-App.png)

        **Additional Resource** To set the configuration object, refer to the [Set Advanced Config Object in Custom Field](#set-advanced-config-object-in-custom-field-optional) section.

    3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    4.  Now to use the Bynder app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed** .

        You can see the Bynder app’s custom fields on your entry page as shown below:

        ![12-Bynder-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4e35e9ab3b41a4a1/664e49e8c9024c6d5ead7416/12-Bynder-Custom-Field-Sample-Entry.png)
    5.  Click **\+ Choose Asset(s)** to select assets from your Bynder account and add them to your entry.![13-Bynder-Custom-Field-Choose-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ea49725192c7210/664e49e805727d6a19e17fc3/13-Bynder-Custom-Field-Choose-Assets.png)

        **Note**

        -   If you are using the Bynder app for the first time and the **Advanced Settings** are disabled in the app configuration in [step 2](#install-and-configure-the-bynder-app-in-marketplace), then it will redirect you to connect the app with the portal. Click the **Connect** button to connect and proceed towards the authentication screen.![14-26-Bynder-Selector-Page-Authentication](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccb466e78b8bda16/664e49e84c5cb9dbbf8f7175/14-26-Bynder-Selector-Page-Authentication.png)
        -   To avoid relogin in case of multiple configurations, enable the **Advanced Settings > Login Bypass** feature during app configuration in [step 2](#install-and-configure-the-bynder-app-in-marketplace).
        -   Each Bynder Custom field can add assets from a specific configuration. You can use multi-configuration in multiple Custom fields within the same entry.

    6.  Now, you can choose assets from the Bynder selector page:

        1.  **Single Select File** or **Single Select** mode![15-27-Bynder-Selector-Page-Single-Select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8572d9923337f56a/664e49e9466a1c6b74deac11/15-27-Bynder-Selector-Page-Single-Select.png)
        2.  **Multi Select** mode![16-28-Bynder-Selector-Page-Multi-Select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c1eba1ce2f15fbe/664e49e91a29a3fe7554c9a1/16-28-Bynder-Selector-Page-Multi-Select.png)

            When the **Advanced** config is added for DAT, the **Selector** page drop-down for **Multi-Select** mode displays different transformations as options:

            ![Bynder_DAT_Selector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltecb8e25b884fe944/676544a05c0f6708e8819604/Bynder_DAT_Selector.png)

            The selected transformation will be applied to all chosen assets.


        **Note**

        1.  In **Single Select File** and **Multi Select** mode, Bynder's DAT feature is enabled. This feature allows you to choose a derivative of the selected asset.
        2.  Bynder DAT feature is not available for **Single Select** mode.

        The assets you select get added to your entry in the thumbnail view.

        ![17-Bynder-Custom-Field-Assets-Added-View-Thumbnail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7d56f69629602f0/664e49e9396ba8c4da9ec08c/17-Bynder-Custom-Field-Assets-Added-View-Thumbnail.png)

        To view the assets in the list view, select the List view option from the dropdown.

        ![18-Bynder-Custom-Field-Assets-Added-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79bd271dd29263a9/664e49ea78533904719e5987/18-Bynder-Custom-Field-Assets-Added-View-Options.png)

        The assets you select get added to your entry in the list view.

        ![19-Bynder-Custom-Field-Assets-Added-View-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ee11a371036020e/664e49e98a66297cbab15293/19-Bynder-Custom-Field-Assets-Added-View-List.png)
    7.  To reorder, preview, open in Bynder, or remove the image, hover over the image to get the options available, then perform the following:

        1.  Click the **Reorder** icon to drag and reorder the image.
        2.  Click the **Preview** icon to view the image.
        3.  Click the **Open in Bynder** icon to open the image in the Bynder app.

            **Note:** The **Open in Bynder** function requires a one-time login for the first instance as the user is redirected to the Bynder dashboard.

        4.  Click the **Remove** icon to delete the selected image.

        **Thumbnail View**

        ![20-Bynder-Custom-Field-Assets-Added-View-Thumbnail-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1863797c9e09b041/664e49e94c5cb96e218f7179/20-Bynder-Custom-Field-Assets-Added-View-Thumbnail-Features.png)

        **List View**

        ![21-Bynder-Custom-Field-Assets-Added-View-List-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8a444c013cccdc2/664e49e9396ba804e19ec088/21-Bynder-Custom-Field-Assets-Added-View-List-Features.png)
    8.  After adding the asset(s), **Save** and **Publish** your entry.

    **Additional Resource:** On saving the entry, saved assets are automatically tracked within your Bynder asset dashboard if the asset tracker is enabled. To view the asset usage, refer to the [View Asset Usage in Asset Tracker](#view-asset-usage-in-asset-tracker) section.

    ### Set Advanced Config Object in Custom Field (Optional)

    While adding the Bynder app in the custom field in [step 3](#use-the-bynder-app-within-your-stack), you can set the configuration parameter during app installation in [step 2](#install-and-configure-the-bynder-app-in-marketplace).

    Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration you set at the time of app installation on the Configuration screen.

    The key:value passed in the configuration object overrides the default app configuration settings.

    1.  Configuration Object : In case you want to use a different Bynder configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter.

        ```
        {
          "config_label": [
            "configurtion-2"
          ]
        }
        ```

    2.  Locale Based Configuration Object (Optional): To add a locale-based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.

        locale Configuration Object:

        ```
        {
          "config_label": [
            "configurtion-2"
          ],
          "locale": {
            "en-us": {
              "config_label": [
                "configurtion-3"
              ]
            },
            "fr-fr": {
              "config_label": [
                "configurtion-1"
              ]
            }
          }
        }
        ```

    3.  **DAT Feature Support for Multi Select Mode (optional)** : For the multi-select DAT feature, you can apply predefined transformations ("thumbnail", "mini", "transformBaseUrl", "medium", "small", "large", "online") to assets by including them in the options list.

        These transformations will only be applied if they are available for the selected assets. If a selected transformation is unavailable, the default transformation ("webImage") will be applied instead.

        You can also apply custom transformations to assets through the transformation\_options object by specifying a unique key name and providing the corresponding rule as its value.

        ```
        {
          "custom_settings": {
            "dat_settings": {
              "options": [
                "webImage",
                "mini",
                "transformBaseUrl",
                "medium",
                "small",
                "large"
              ],
              "default": "webImage",
              "transformation_options": {
                "flip_rotate": "io=transform:flip&io=transform:rotate,angle:70",
                "crop": "io=transform:crop,height:400,width:300,path:square"
              }
            }
          }
        }
        ```

        **Additional Resource:** For more details on specifying rules for custom transformations, refer to the [DAT documentation](https://bynder.docs.apiary.io/#reference/dynamic-asset-transformations).

    4.  **Custom Settings (optional)** : In compact\_view\_options, you can use predefinedAssetType and predefinedTagNames to display assets with specific asset types and tags on the Selector page:

        ```
        {
          "custom_settings": {
            "compact_view_options": {
              "assetFilter": {
                "showToolbar": true,
                "predefinedAssetType": ["IMAGE"],
                "predefinedTagNames": ["bottle_with_food"]
              }
            }
          }
        }
        ```

        **Additional Resource:** You can include optional parameters in the compact\_view\_options object, except for attributes containing a period (e.g., portal.url ) or those with callback functions. For detailed description of these optional parameters, refer to the [Bynder Compact View](https://developers.bynder.com/universal-compact-view) documentation.

    5.  **Max Limit (optional)** : You can set the maximum number of assets, in the **Config Parameter** , that can be added in the **Custom field** for all entries of a particular content type.

        ```
        {
                "advanced": {
                   "max_limit":5
                }
        }
        ```


    ### Use the Bynder App as a JSON RTE Plugin

    1.  In the **Content Type Builder** page, add [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Plugin** , select **Bynder** , and then click **Add Plugin(s)** .![22-Bynder-JSONRTE-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91d4311928612e14/664e49f25937a07c872156cf/22-Bynder-JSONRTE-Add-App.png)

        This adds Bynder in the JSON Rich Text Editor.

        ![23-Bynder-JSONRTE-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51734d8bda7fc664/664e49f28a4c34963a1e3688/23-Bynder-JSONRTE-Added-App.png)

        **Additional Resource:** To set the configuration object, refer to the [Set Advanced Config Object in JSON RTE Plugin](#set-advanced-config-object-in-json-rte-plugin-optional) section.

    3.  After adding the plugin, click **Save** or **Save and Close** to save your changes.
    4.  To use the Bynder app, create an entry for this content type by clicking **Entries** from the left navigation panel. Click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed** .

        You can see the Bynder icon in the JSON Rich Text Editor field on your entry page as shown below:

        ![24-Bynder-JSONRTE-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb35b921a9e761f82/664e49f21983ea7ea6ac45d9/24-Bynder-JSONRTE-Sample-Entry.png)
    5.  Click the **Bynder** app icon.![25-Bynder-JSONRTE-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6275b8d81a396db8/664e49f276a5b5508531d23f/25-Bynder-JSONRTE-App-Icon.png)

        **Note**

        -   If you are using the Bynder app for the first time and the **Advanced Settings** are disabled in the app configuration in [step 2](#install-and-configure-the-bynder-app-in-marketplace), then it will redirect you to connect the app with the portal. Click the **Connect** button to connect and proceed towards the authentication screen.![14-26-Bynder-Selector-Page-Authentication](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccb466e78b8bda16/664e49e84c5cb9dbbf8f7175/14-26-Bynder-Selector-Page-Authentication.png)
        -   To avoid relogin in case of multiple configurations, enable the **Advanced Settings > Login Bypass** feature during app configuration in [step 2](#install-and-configure-the-bynder-app-in-marketplace).
        -   Each Bynder Custom field can add assets from a specific configuration. You can use multi-configuration in multiple Custom fields within the same entry.

    6.  Now, you can choose assets from the Bynder selector page:

        1.  **Single Select File** or **Single Select** mode![15-27-Bynder-Selector-Page-Single-Select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8572d9923337f56a/664e49e9466a1c6b74deac11/15-27-Bynder-Selector-Page-Single-Select.png)
        2.  **Multi Select** mode![16-28-Bynder-Selector-Page-Multi-Select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c1eba1ce2f15fbe/664e49e91a29a3fe7554c9a1/16-28-Bynder-Selector-Page-Multi-Select.png)

            When the **Advanced** config is added for DAT, the **Selector** page drop-down for **Multi-Select** mode displays different transformations as options:

            ![Bynder_DAT_Selector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltecb8e25b884fe944/676544a05c0f6708e8819604/Bynder_DAT_Selector.png)

            The selected transformation will be applied to all chosen assets.


        **Note**

        1.  In **Single Select File** and **Multi Select** mode, Bynder's DAT feature is enabled. This feature allows you to choose a derivative of the selected asset.
        2.  Bynder DAT feature is not available for **Single Select** mode.

        The assets you select get added to your entry.

        ![29-Bynder-JSONRTE-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1dab614586e8aa87/664e49f2e2c16b566c9be384/29-Bynder-JSONRTE-Assets.png)
    7.  To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the options to preview, open in Bynder app, edit properties, and remove the asset.

        **Note:** The **Open in Bynder** function requires a one-time login for the first instance as the user is redirected to the Bynder.

        ![30-Bynder-JSONRTE-Assets-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6855711147f65277/664e49f276a5b5d89c31d243/30-Bynder-JSONRTE-Assets-Features.png)

        **Additional Resource:** You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.

    8.  After adding the asset(s), **Save** and **Publish** your entry.

        **Note:** If you selected the **Single Select File** or **Multi Select** mode to add assets to your entry, you can view the information of the selected DAT derivative of the asset in their JSON object, in an additional parameter titled **additionalInfo** .


    **Additional Resource:** On saving the entry, saved assets are automatically tracked within your Bynder asset dashboard if the asset tracker is enabled. To view the asset usage, refer to the [View Asset Usage in Asset Tracker](#view-asset-usage-in-asset-tracker) section.

    ### Set Advanced Config Object in JSON RTE Plugin (Optional)

    While adding the Bynder app in the JSON RTE Plugin in [step 3](#use-the-bynder-app-within-your-stack), you can set the configuration parameter during app installation in [step 2](#install-and-configure-the-bynder-app-in-marketplace).

    To add the **Config Parameter** in the JSON RTE field, click the **Plugin Config** gear icon on the app plugin selector page.

    You can set the following validations for the JSON RTE field:

    1.  Configuration Object : In case you want to use a different Bynder configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter.

        ```
        {
          "config_label": [
            "configuration-2"
          ]
        }
        ```

    2.  **DAT Feature Support for Multi Select Mode (optional)** : For the multi-select DAT feature, you can apply predefined transformations ("thumbnail", "mini", "transformBaseUrl", "medium", "small", "large", "online") to assets by including them in the options list.

        These transformations will only be applied if they are available for the selected assets. If a selected transformation is unavailable, the default transformation ("webImage") will be applied instead.

        You can also apply custom transformations to assets through the transformation\_options object by specifying a unique key name and providing the corresponding rule as its value.

        ```
        {
          "custom_settings": {
            "dat_settings": {
              "options": [
                "webImage",
                "mini",
                "transformBaseUrl",
                "medium",
                "small",
                "large"
              ],
              "default": "webImage",
              "transformation_options": {
                "flip_rotate": "io=transform:flip&io=transform:rotate,angle:70",
                "crop": "io=transform:crop,height:400,width:300,path:square"
              }
            }
          }
        }
        ```

        **Additional Resource:** For more details on specifying rules for custom transformations, refer to the [DAT documentation](https://bynder.docs.apiary.io/#reference/dynamic-asset-transformations).

    3.  **Custom Settings (optional)** : In compact\_view\_options, you can use predefinedAssetType and predefinedTagNames to display assets with specific asset types and tags on the Selector page:

        ```
        {
          "custom_settings": {
            "compact_view_options": {
              "assetFilter": {
                "showToolbar": true,
                "predefinedAssetType": ["IMAGE"],
                "predefinedTagNames": ["bottle_with_food"]
              }
            }
          }
        }
        ```

        **Additional Resource:** You can include optional parameters in the compact\_view\_options object, except for attributes containing a period (e.g., portal.url ) or those with callback functions. For detailed description of these optional parameters, refer to the [Bynder Compact View](https://developers.bynder.com/universal-compact-view) documentation.


    ### View Asset Usage in Asset Tracker

    To track the asset usage, enable the **Enable Asset Tracker** toggle during app configuration in [step 2](#install-and-configure-the-bynder-app-in-marketplace).

    Once the asset tracker is enabled in the Contentstack Bynder app, you can view the asset usage statistics in the asset dashboard within the Bynder portal.

    For any given asset, the app creates only one tracking instance per entry, regardless of how many times the asset is reused within different fields (Custom Field or JSON RTE) in that same entry.

    The app automatically executes API calls to update asset tracking data in Bynder whenever you save the entry in Contentstack.
