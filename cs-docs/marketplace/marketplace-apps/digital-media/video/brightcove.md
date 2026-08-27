---
title: "Brightcove App Installation Guide"
description: "The Contentstack Marketplace Brightcove app fetches digital assets (videos) from your Brightcove account into Contentstack entries."
url: /marketplace/brightcove
uid: blt9544410721694dd6
---

# Brightcove App Installation Guide

## Brightcove App Installation Guide

The Brightcove platform is a cloud-based solution for online video streaming, which facilitates the hosting, sharing, and streaming of video content by organizations. Marketers and creatives can utilize the platform to efficiently organize, control, create, distribute, and measure all their video assets, with the added benefits of scalability, reliability, and security.

Contentstack Marketplace lets you install the Brightcove app and use it within your stack to fetch and display videos from the Brightcove account within your entries.

## Prerequisites

-   [Brightcove account](https://signin.brightcove.com/login)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure Brightcove within your stack.

## Steps for Execution

1.  [Retrieve the Credentials for your Brightcove account](#retrieve-the-credentials-for-your-brightcove-account)
2.  [Install and Configure the Brightcove app in Marketplace](#install-and-configure-the-brightcove-app-in-marketplace)
3.  [Use the Brightcove app within your Entry](#use-the-brightcove-app-within-your-entry)

1.  ## Retrieve the Credentials for Your Brightcove Account

    To get your configuration details for Brightcove, follow the steps given below:

    1.  Log in to the [Brightcove account](https://signin.brightcove.com/login) using your Brightcove credentials.
    2.  Click the **Admin** settings icon, as shown in the screenshot, to get the account information.![Brightcove-Admin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7340f26679478ed/6410182b9ef9fe10b06e7be2/Brightcove-Admin.png)
    3.  Copy the **Account ID** from the **Account Information** section to use this in [step 2](#install-and-configure-the-brightcove-app-in-marketplace) during app configuration.![Brightcove-Account-Id](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte03469317206456e/63ff3e214fd99f36ebe2242e/Brightcove-Account-Id.png)
    4.  Go to the **API Authentication** section and click the **\+ Add application** button.![Brightcove-Add-Application](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb2bdceeed95360e/63ff3e219cda7811ef864f94/Brightcove-Add-Application.png)
    5.  Enter the **Name** and **Description**, and then select the required accounts from **Select Accounts for Authorization**.![Brightcove-Sample-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt356e16356660a05e/63ff3e83aeefb86bfe4b42ca/Brightcove-Sample-Credentials.png)
    6.  Scroll down to the **Exposed Brightcove APIs** section. Under **CMS** options, mark **Video Read**, and then click **Save**.![Brightcove-Sample-Credentials-Save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba49b0c6c4b6dbdf/6408734ee3220e109405cfbf/Brightcove-Sample-Credentials-Save.png)
    7.  Copy the **Client ID** and **Client Secret** for use in [step 2](#install-and-configure-the-brightcove-app-in-marketplace), then click **Okay, I copied it** to close the dialog box.![Brightcove-Client-ID-And-Client-Secret](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85043e21a95d22a5/63ff3e217af6422f7a248028/Brightcove-Client-ID-And-Client-Secret.png)
2.  ## Install and Configure the Brightcove App in Marketplace

    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Brightcove** app and click **Install**.![Brightcove-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba6193baab64aa69/68780fad6629b605cfc59f18/Brightcove-App.png)
    4.  In the pop-up window, select the stack where you want to install the Brightcove app, accept the **Terms of Service**, and click the **Install** button.![Brightcove-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf886599177b4a802/68780fad4e47e443ff060848/Brightcove-App-Install.png)
    5.  On the **Configuration** screen, you can add multiple configurations for Brightcove. To do so, follow the steps given below:
        1.  Click the **\+ New Configuration** button to add new configuration details.
        2.  In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.
        3.  Enter the **Brightcove Account ID**, **Brightcove Client ID**, and **Brightcove Client Secret** retrieved from your Brightcove Account in step 1.
        4.  **Set as Default:** To set this configuration as the default, click this checkbox.

            Alternatively, click the vertical ellipsis on the top-right side of the configuration section, then select **Set as Default** from the menu.

            **Note:** At least one app configuration should be selected as the default.

            Similarly, you can add multiple configurations by following the steps discussed above.

        5.  To delete the configuration, click the vertical ellipsis and select **Delete Configuration**. In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
        6.  For an existing user, the credentials will be added as the default configuration, and named as legacy\_config.

            **Warning:**

            -   legacy\_config is a reserved keyword and you cannot use it when adding new configurations.
            -   If you delete the legacy\_config configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.

        7.  **Choose the Brightcove Keys to Save in Entry**: Choose how to save the data fetched from the Brightcove account in Contentstack entries.

            1.  If you select the **All Fields** option, you can select only a limited number of assets in the entry.
            2.  For **Custom Fields**, you can search and add specific **Brightcove Keys** you want to save in entries. By default, the **id** and **name** of the assets are selected.

            ![Brightcove-Configuration-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2a2e8bfcf68f8d7/68780faee43f352b54c3f1d2/Brightcove-Configuration-Save-In-Entry.png)
    6.  Click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Brightcove-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte53eb2c702c3a078/68780fd480a8863d03d95299/Brightcove-UI-Locations.png)

        **Note:** The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.

    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    9.  Click **Open Stack** to start using the Brightcove app.
3.  ## Use the Brightcove App Within Your Entry

    To use the Brightcove app within an entry of your stack, follow the steps given below:

    1.  Navigate to the stack dashboard, click **Content Models** in the header, then click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![Brightcove-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt56e7687d671cdb65/68780faec1cf9477c8218ab1/Brightcove-Content-Type.png)
    3.  There are two ways to use the Brightcove app in your entry:

        1.  [Custom Field](#use-the-brightcove-app-as-a-custom-field)
        2.  [JSON Rich Text Editor Field](#use-the-brightcove-app-as-a-jsonrte-plugin)

    ### Use the Brightcove App as a Custom Field

    1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension or App**, select **Brightcove**, and click the **Proceed** button.![Brightcove-Custom-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8aed027d4d7d178f/68780fad6ccd239a940fb859/Brightcove-Custom-Add-App.png)

        This adds Brightcove in the custom field.

        ![Brightcove-Custom-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt25f903912ad7f48b/68780fad6aacb155e5bd66ea/Brightcove-Custom-Added-App.png)

        **Additional Resource:** To set the configuration object, refer to the [Set Advanced Config Object in Custom Field](#set-advanced-config-object-in-custom-field-optional) section.

    3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Brightcove app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. Navigate to **Entries** in the header, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.

        You can see the Brightcove app’s custom field on your entry page, as shown below:

        ![Brightcove-Custom-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2bacaec5310aadd1/68780fc07095e94f70a6e9e8/Brightcove-Custom-Sample-Entry.png)
    5.  Click the **\+ Choose Video(s)** button.![Brightcove-Custom-Choose-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt319aed70c471b589/68780fad6567157cd80ee75c/Brightcove-Custom-Choose-Assets.png)
    6.  Select the video(s) from your Brightcove selector page and click the **Add Videos(s)** button to add them to your entry.![Brightcove-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ea2f6cebeab5f58/68780fd455acc45a9fa51a1e/Brightcove-Selector-Page.png)

        **Note:** You can add multiple videos in one go.

        You can filter and view videos grouped under **Playlists** in the Selector page. Select the desired **Playlists** and add the videos.

        ![Brightcove-Selector-Page-Playlists](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6fb120a0fd8ed046/68780fd4871e8fdb17702738/Brightcove-Selector-Page-Playlists.png)

        You can also filter videos using **Folders** in the Selector page. Choose the desired folder from Brightcove and add the videos.

        ![Brightcove-Selector-Page-Folders](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f684e732964824b/68780fd486199763a16170b4/Brightcove-Selector-Page-Folders.png)

        You can also search for videos by **video ID** in the Brightcove selector page.

        ![Brightcove-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt204b21ecfe018d75/68780fd46aacb1ab78bd66ee/Brightcove-Selector-Page-Search.png)

        Hover over a video on the Brightcove selector page to see the **View in Brightcove** option and navigate directly to the Brightcove platform.

        ![Brightcove-Selector-Page-View-In-Brightcove](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte877ae3f0e9ed3fe/68780fd4594ad081bfb184e8/Brightcove-Selector-Page-View-In-Brightcove.png)
    7.  The videos you select get added to your entry in the thumbnail view.

        ![Brightcove-Custom-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65b6b5f0e828fc0f/68780fc04551ef7f5050d436/Brightcove-Custom-Thumbnail-View.png)

        If the video is deactivated in Brightcove, you can view an **Inactive** mark on the video.

        ![Brightcove-Custom-Inactive](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt00b644b49e023ee3/68780fc055acc4b368a51a15/Brightcove-Custom-Inactive.png)

        To view the videos in the list view, select the **List** view option from the dropdown.

        ![Brightcove-Custom-Options-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc568aff78b9782ea/68780fc065671512020ee765/Brightcove-Custom-Options-View.png)

        The videos you select get added to your entry in the list view.

        ![Brightcove-Custom-List-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4f9d9c7af75d991/68780fc055acc43748a51a13/Brightcove-Custom-List-View.png)
    8.  Hover over the video to access these features:

        1.  Click the **Reorder** icon to drag and reorder the video.
        2.  Click the **Open in Brightcove** icon to open the video in the Brightcove platform.
        3.  Click the **Remove** icon to delete the video.

        **Thumbnail View**

        ![Brightcove-Custom-Features-Thumbnail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta32654526448045d/68780fae871e8f6282702733/Brightcove-Custom-Features-Thumbnail.png)

        **List View**

        ![Brightcove-Custom-Features-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadc17f0d11f62581/68780faebbc2d832e2b28142/Brightcove-Custom-Features-List.png)
    9.  After adding the video(s), **Save** and **Publish** your entry.

    ### Set Advanced Config Object in Custom Field (Optional)

    While adding the Brightcove app in the custom field in step 3, you can set the configuration parameter if you have added multi-configuration details during app installation in step 2.

    Under **Advanced** properties, you can set the **Config Parameter** for all entries of a particular content type.

    The key:value passed in the configuration object overrides the default app configuration settings.

    -   **Configuration Object:** If you want to use a different Brightcove configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter.

        **Configuration Object:**

        ```
        {
          "config_label": [
            "config2"
          ]
        }
        ```

    -   **Locale Based Configuration Object (Optional):** Add a locale parameter to specify the locale value (for example: en-us) as the object key and the configuration object as the value.

        ```
        {
          "config_label": [
            "Configuration-2"
          ],
          "locale": {
            "en-us": {
              "config_label": [
                "Configuration-3"
              ]
            },
            "fr-fr": {
              "config_label": [
                "Configuration-1"
              ]
            }
          }
        }
        ```

    -   **Branch Based Configuration Object (Optional):** Add a branch parameter to specify the branch value as the object key and the configuration object as the value, scoping video selection to a particular branch.

        ```
        {
          "config_label": [
            "Configuration-2"
          ],
          "branch": {
            "main": {
              "config_label": [
                "Configuration-3"
              ]
            },
            "development": {
              "config_label": [
                "Configuration-1"
              ]
            }
          }
        }
        ```

    -   **Max Limit:** You can set the maximum number of assets that can be added in the Custom field. In our example, it is 5.

        ```
        {
          "advanced": {
            "max_limit": 5
          }
        }
        ```


    ### Use the Brightcove App as a JSONRTE Plugin

    1.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Plugin(s)**, select **Brightcove**, and then click **Add Plugin(s)**.![Brightcove-JSONRTE-Add-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0890e3d1be6e853f/68780fc0829ffb1cf147af06/Brightcove-JSONRTE-Add-Plugin.png)

        This adds Brightcove in the JSON Rich Text Editor field.

        ![Brightcove-JSONRTE-Added-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4149aef00b132872/68780fc180a8864dfcd95294/Brightcove-JSONRTE-Added-Plugin.png)

        **Additional Resource:** To set the configuration object, refer to the [Set Advanced Config Object in JSON RTE Plugin](#set-advanced-config-object-in-json-rte-plugin-optional) section.

    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Brightcove app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.

        You can see the Brightcove JSON Rich Text Editor field on your entry page, as shown below:

        ![Brightcove-JSONRTE-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1be4adbc927a1fb7/68780fd46567157b6b0ee76f/Brightcove-JSONRTE-Sample-Entry.png)
    5.  Click the **Brightcove** app button.![Brightcove-JSONRTE-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ca03f91ab87287f/68780fc11311d236984934a0/Brightcove-JSONRTE-App-Icon.png)
    6.  Select the video(s) from your Brightcove selector page and click the **Add Videos(s)** button to add them to your entry.![Brightcove-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ea2f6cebeab5f58/68780fd455acc45a9fa51a1e/Brightcove-Selector-Page.png)

        **Note:** You can add multiple videos in one go.

        You can filter and view videos grouped under **Playlists** in the Selector page. Select the desired **Playlists** and add the videos.

        ![Brightcove-Selector-Page-Playlists](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6fb120a0fd8ed046/68780fd4871e8fdb17702738/Brightcove-Selector-Page-Playlists.png)

        You can also filter videos using **Folders** in the Selector page. Choose the desired folder from Brightcove and add the videos.

        ![Brightcove-Selector-Page-Playlists](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6fb120a0fd8ed046/68780fd4871e8fdb17702738/Brightcove-Selector-Page-Playlists.png)

        You can also search for videos by **video ID** in the Brightcove selector page.

        ![Brightcove-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt204b21ecfe018d75/68780fd46aacb1ab78bd66ee/Brightcove-Selector-Page-Search.png)

        Hover over the video on the Brightcove selector page to see the **View in Brightcove** option and navigate directly to the Brightcove platform.

        ![Brightcove-Selector-Page-View-In-Brightcove](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte877ae3f0e9ed3fe/68780fd4594ad081bfb184e8/Brightcove-Selector-Page-View-In-Brightcove.png)

        The videos you selected are referenced within your entry:

        ![Brightcove-JSONRTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b3fff19eea06498/68780fc06629b6e0f6c59f1d/Brightcove-JSONRTE.png)
    7.  To resize the video, drag the corner and adjust the size as required. Hover over the video to access these features:

        1.  Click the **Preview** icon to preview the video in the Brightcove platform.
        2.  Click the **Edit** icon to edit the video.
        3.  Click the **Remove** icon to delete the video.

        ![Brightcove-JSONRTE-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf4e22672b03b7b4/68780fd496dbd56e119e58a5/Brightcove-JSONRTE-Features.png)

        In the **Edit Asset** modal, you can view the **Embed Link** field.

        **Note:** Previously, **Embed Links** were stored using the key link, which conflicted with Brightcove's **Related Link** feature that also used link. To avoid this conflict, embed links are now stored under embedLink and referenced via redactor\_attributes.anchorLink. Entries using the old link key will continue to display correctly.

        ![Brightcove-JSONRTE-Edit-Embed-Link](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf4db7288810681fc/68780fc14551ef6d5550d43a/Brightcove-JSONRTE-Edit-Embed-Link.png)

        **Additional Resource:** You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.

    8.  After adding the video(s), **Save** and **Publish** your entry.

### Set Advanced Config Object in JSON RTE Plugin (Optional)

To add the **Config Parameter** in the JSON RTE field, click the “gear” icon on the app plugin selector page.

The key:value passed in the configuration object overrides the default app configuration settings.

-   **Configuration Object:** If you want to use a different Brightcove configuration for any JSON RTE field within the same stack, you need to specify the configuration name in the Config Parameter.

    **Configuration Object:**

    ```
    {
      "config_label": [
        "config2"
      ]
    }
    ```

-   **Locale Based Configuration Object (Optional):** Add a locale parameter to specify the locale value (for example: en-us) as the object key and the configuration object as the value.

    ```
    {
      "config_label": [
        "Configuration-2"
      ],
      "locale": {
        "en-us": {
          "config_label": [
            "Configuration-3"
          ]
        },
        "fr-fr": {
          "config_label": [
            "Configuration-1"
          ]
        }
      }
    }
    ```

-   **Branch Based Configuration Object (Optional):** Add a branch parameter to specify the branch value as the object key and the configuration object as the value, scoping video selection to a particular branch.

    ```
    {
      "config_label": [
        "Configuration-2"
      ],
      "branch": {
        "main": {
          "config_label": [
            "Configuration-3"
          ]
        },
        "development": {
          "config_label": [
            "Configuration-1"
          ]
        }
      }
    }
    ```

-   **Max Limit:** You can set the maximum number of assets that can be added in the JSON RTE field. In our example, it is 5.

    ```
    {
      "advanced": {
        "max_limit": 5
      }
    }
    ```
