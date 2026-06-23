---
title: "[Marketplace guides and apps] - Brandfolder App Installation Guide"
description: Brandfolder App Installation Guide
url: https://www.contentstack.com/docs/marketplace/brandfolder
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Brandfolder App Installation Guide

This page explains how to install and configure the Brandfolder app from Contentstack Marketplace and use it inside a stack to fetch and display Brandfolder digital assets in entries. It is intended for Contentstack Organization/Stack Owners/Admins and developers configuring content types and entry authoring workflows.

## Brandfolder App Installation Guide

Brandfolder is a cloud-based and customizable digital asset management platform many brands use to organize all digital assets in one place. Marketers and creatives use this platform to readily organize, control, create, distribute, and measure all their digital assets.

Contentstack Marketplace lets you install the Brandfolder app and use it within your stack to fetch and display digital assets from the Brandfolder account within your entries.

## Prerequisites
- [Brandfolder account](https://brandfolder.com/signin/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Follow this step-by-step guide to install and configure Brandfolder within your stack.

## Steps for Execution
- [Retrieve credentials from your Brandfolder account](#retrieve-credentials-from-your-brandfolder-account)
- [Install and configure the Brandfolder app in Marketplace](#install-and-configure-the-brandfolder-app-in-marketplace)
- [Use the Brandfolder app within your stack](#use-the-brandfolder-app-within-your-stack)

## Retrieve Credentials from your Brandfolder Account
To get the API Key for Brandfolder, log in to the [Brandfolder account](https://brandfolder.com/signin/) (as an **Owner** or **Admin**) and follow the steps given below:

**Note:** If you already have a guest account, log in to the [Brandfolder account](https://brandfolder.com/signin/) (as a **Guest**), or create a new one.

To create a guest account, navigate to your workspace, click the horizontal ellipses, and select **Manage Users**.
- You are redirected to the **All Users** > **User Management** section. Under the **Invite** tab, fill in the details and click **Send invitations**. You will get an invitation email.
- Click the **Accept Invitation** button in your email to go to the guest account dashboard.
- Now, click the username dropdown in the top-right corner, and navigate to **My Profile**.
- Click **Integrations** in the left panel and copy the **API Key**.

## Install and Configure the Brandfolder App in Marketplace
To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps:

Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see the available apps. Hover over the **Brandfolder** app and click **Install**.
- In the pop-up window, select the stack where you want to install the Brandfolder app, accept the **Terms of Service**, and click the **Install** button.
- On the **Configuration** screen, you can add multiple configurations for Brandfolder. To do so, follow the steps given below:Click the **+ New Configuration** button to add new configuration details.
- In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.
- Enter the **Brandfolder API Key** retrieved from your Brandfolder account in [step 1](#retrieve-credentials-from-your-brandfolder-account).
- **Set as Default**: To set this configuration as the default, click this checkbox.Alternatively, click the vertical ellipsis on the top-right side of the configuration section, then select **Set as Default** from the menu.

**Note:** At least one app configuration should be selected as the default.

Similarly, you can add multiple configurations by following the steps discussed above.
- To delete the configuration, click the vertical ellipsis and select **Delete Configuration**.In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
- For an existing user, the credentials will be added as the default configuration, and named as **legacy_config**.**Warning:**

**legacy_config** is a reserved keyword and you cannot use it in adding new configurations.
- If you delete the **legacy_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.
- **Legacy Settings**: Legacy Settings allow you to use the Brandfolder Extension. To enable the extension, simply toggle the **Enable Extension Support** option. If this toggle is enabled, you will be able to get the asset JSON data similar to the Brandfolder Extension.**Note:** If the extension is enabled, **All Fields** and **Custom Fields** option cannot be accessed to save the Brandfolder keys within the entry.
- **Choose the Brandfolder Keys to Save in Entry**: Choose how to save the data fetched from Brandfolder in Contentstack entries.If you select the **All Fields** option, you can select only a limited number of assets in the entry.
- With **Custom Fields**, you can search and add specific Brandfolder fields that you want to save in entries.

If you select **Custom Fields**, then the **Brandfolder Keys** drop-down appears. By default, **id**, **name**, **url**, **assetId**, **filename**, **extension**, **sizeInBytes**, **dimensions**, and **apiDto.attributes.cdn_url** keys are selected. If you want to create a new key, click the **+ New Key Field** option.

In the **Add Brandfolder Key Path** modal, enter the **Brandfolder Key Path** and click the **Create** button to create a new key.
- After adding the configuration details, click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.**Additional Resource**: For more information on UI locations, refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Brandfolder app.

## Use the Brandfolder App within your Stack
To use the Brandfolder app within an entry of your stack, follow the steps given below:

Navigate to the stack dashboard, click **Content Models** in the header, then **New Content Type.** From the dropdown, select **Create New**.
- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:
- There are two ways to use the Brandfolder app in your entry:[Custom Field](#use-the-brandfolder-app-as-a-custom-field)
- [JSON Rich Text Editor field](#use-the-brandfolder-app-as-a-json-rte-plugin)

### Use the Brandfolder App as a Custom Field
- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension or App**, select **Brandfolder** and click the **Proceed** button.Change the **Display Name** of the custom field to your choice, for example, **Brandfolder Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** as required. This adds Brandfolder in the custom field.

**Additional Resource:** To set the configuration object, refer to the [Set Advanced Config Object in Custom Field](#set-advanced-config-object-in-custom-field-optional) section.
- After adding the app, click **Save** or **Save and Close** to save your changes.
- To use the Brandfolder app, [create an entry](../../content-managers/author-content/create-an-entry.md) for this newly created content type. Navigate to **Entries** in the header, click **+ New Entry** to create an entry within the same content type, and click **Proceed**.You can see the Brandfolder app’s custom fields on your entry page as shown below:
- Click **+ Choose Asset(s)** button.
- Choose the **Collection** to select the asset from your Brandfolder account to add them to your entry.You can add the Brandfolder assets in two ways:

Hover over the image, click the **three ellipses** icon, and then click **Place** to add the asset to your custom field from the Brandfolder selector page.
- Hover over the image and click **View Details**.Go to **Placement options** and click **Place** to add the asset to your custom field from the Brandfolder selector page.

You can edit the **File Type**, **Width**, and **Height** of the image before placing it.

The assets you insert get referenced within your entry in the thumbnail view, by default.

**Note:** You can select only one asset at a time to add to your entry.

To change the assets view, select **List** from the drop-down menu as shown in the following screenshot:

The assets you insert get referenced within your entry in the list view.
- Hovering over the image will allow you to reorder, preview, or remove it.To reorder the image, hover over it and select the **Reorder** icon. This allows you to drag and reorder the image to your desired position.
- To preview the image, hover over it and select the **Preview** icon. You can view the image in a new tab.
- To delete the image, hover over it and select the **Remove** icon.

**Thumbnail View**

**List View**
- After adding the asset(s), **Save** and **Publish** your entry.

### Set Advanced Config Object in Custom Field (Optional)
While adding the Brandfolder app in the custom field in [step 3](#use-the-brandfolder-app-within-your-stack), you can set the configuration parameter if you have added multi-configuration details during app installation in [step 2](#install-and-configure-the-brandfolder-app-in-marketplace).

Under **Advanced** properties, you can set the **Config Parameter** for all entries of a particular content type.

The **key:value** passed in the configuration object overrides the default app configuration settings.
- **Configuration Object:** In case you want to use a different Brandfolder configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter.

```
{
  "config_label": [
    "Configuration-2"
  ]
}
```

- **Locale Based Configuration Object (Optional):** To add a locale-based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.
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

- **Max Limit:** You can set the maximum number of assets that can be added in the Custom field. In our example, it is 5.
```
{
  "advanced": {
    "max_limit": 5
  }
}
```

- **Asset Validations:** Only those assets will be added in the custom field that satisfy the advance config constraints for size, height, and width.
```
{
  "advanced": {
    "size": {
      "max": 10,
      "min": 5
    },
    "height": {
      "max": 10,
      "min": 5,
      "exact": 25
    },
    "width": {
      "max": 10,
      "min": 5,
      "exact": 25
    }
  }
}
```

### Use the Brandfolder app as a JSON RTE Plugin
- In the **Content Type Builder** page, add a [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field by clicking the **Insert a field** link represented by a** +** sign.
- Click inside the **Select JSON RTE Plugin(s)** field to open the **Select Plugin** modal.
- Select **Brandfolder** from the available options and click **Add Plugin(s)**.This adds Brandfolder in the JSON Rich Text Editor.

**Additional Resource:** To set the configuration object, refer to the [Set Advanced Config Object in JSON RTE Plugin](#set-advanced-config-object-in-json-rte-plugin-optional) section.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Brandfolder app, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type. To do this, navigate to the **Entries** page, click **+ New Entry**, select the content type you created above, and then click **Proceed**.You will see the Brandfolder app icon inside the JSON RTE field in your entry page as shown below:
- Choose the **Collection** to select the asset from your Brandfolder account to add them to your entry.You can add the Brandfolder asset(s) in two ways:

Hover over the image, click the **three ellipses** icon, and then click **Place** to add the asset to your JSON Rich Text Editor field from the Brandfolder selector page.
- Hover over the image and click **View Details**.Go to **Placement options** and click **Place** to add the asset to your JSON Rich Text Editor field from the Brandfolder selector page.

You can edit the **File Type**, **Width**, and **Height** of the image before placing it.

The assets you select are added to your entry.

**Note:** You can select only one asset at a time to add to your entry.
- To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the following options:Click the **Preview** icon to view the image.
- Click the **Edit** icon to edit the image. Make the necessary changes and click the **Save** button.
- Click the **Remove** icon to remove the selected image.

**Additional Resource**: You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field.
- After adding the asset(s), **Save** and** Publish** your entry.

### Set Advanced Config Object in JSON RTE Plugin (Optional)
While adding the Brandfolder app in the JSON RTE Plugin in [step 3](#use-the-brandfolder-app-within-your-stack), you can set the configuration parameter if you have added multi-configuration details during app installation in [step 2](#install-and-configure-the-brandfolder-app-in-marketplace).

To add the **Config Parameter** in the JSON RTE field, click the gear icon on the app plugin selector page. You can set the following validation for the JSON RTE field:

In case you want to use a different Brandfolder configuration for any JSON RTE field within the same stack, you need to specify the configuration name in the Config Parameter.

**Configuration Object (Optional):**

```
{
  "config_label": [
    "Configuration-2"
  ]
}
```

## Common questions

### Who can retrieve the Brandfolder API Key?
To get the API Key for Brandfolder, log in to the Brandfolder account (as an **Owner** or **Admin**) and follow the steps given.

### Do I need to set a default configuration in the app?
Yes. **Note:** At least one app configuration should be selected as the default.

### Can I use Brandfolder in both Custom fields and JSON RTE fields?
Yes. There are two ways to use the Brandfolder app in your entry: **Custom Field** and **JSON Rich Text Editor field**.

### Can I limit how many assets can be added in a Custom field?
Yes. **Max Limit:** You can set the maximum number of assets that can be added in the Custom field.