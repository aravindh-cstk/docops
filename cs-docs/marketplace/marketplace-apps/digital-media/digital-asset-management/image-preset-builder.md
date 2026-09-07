---
title: "Image Preset Builder App Installation Guide"
description: "The Contentstack Marketplace Image Preset Builder app allows you to transform and optimize images within the stack."
url: /marketplace/image-preset-builder
uid: blt985cf844a0474a96
---

# Image Preset Builder App Installation Guide

## Image Preset Builder App Installation Guide

A preset is a customized version of an image, pre-configured with specific formatting and sizing constraints. You can build customized presets for any image file to tailor your assets as per your business requirements.

The Image Preset Builder app helps you to create and optimize image presets using the [Assets Sidebar Widget](/docs/developer-hub/asset-sidebar-location/) within the Contentstack environment. It allows you to define parameters such as size, format, quality, compression level, background color, contrast, and other settings of the images in a preset configuration file. It ensures that all images are optimized for web performance while maintaining visual appeal. The app supports JPG, JPEG, and PNG image file formats.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/ Stack as the Owner/ Admin

Let's follow this step-by-step guide to install and configure the Image Preset Builder app within your stack.

## Steps for Execution

1.  [Install and Configure the Image Preset Builder app in Contentstack Marketplace](#install-and-configure-the-image-preset-builder-app-in-contentstack-marketplace)
2.  [Use Image Preset Builder within your Stack](#use-image-preset-builder-within-your-stack)
3.  [Use Image Presets within your Entry](#use-image-presets-within-your-entry)
4.  [Render Images using Image Preset Builder](#render-images-using-image-preset-builder)

1.  ## Install and Configure the Image Preset Builder app in Contentstack Marketplace

    Follow the steps to install the application in Contentstack.

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Image Preset Builder** app and click **Install**.  
        ![marketplace_appswitcher_imagepresetbuilder.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am836c93d19ce3b084/269296805c0a82dd7f448e89/marketplace_appswitcher_imagepresetbuilder.png?locale=en-us)  

    5.  In the popup window, select the stack where you want to install the Image Preset Builder app and click the **Install** button.  
        ![Image-Preset-Builder-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt436b100e22f661b1/64b9294d1add4df6f1fbb348/Image-Preset-Builder-Install-App.png)  

    6.  The Image Preset Builder app is auto configured.  
        ![Image-Preset-Builder-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b904dfd8727e832/65ba802e7d4ae73c4b981339/Image-Preset-Builder-Configuration.png)
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![Image-Preset-Builder-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt50ec3fafd4fd10f3/65ba803968334a1915c62453/Image-Preset-Builder-UI-Locations.png)
    8.  **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps) guide.

    9.  Click the **Save** button.
    10.  Click **Open Stack** to start using the Image Preset Builder application.
2.  ## Use Image Preset Builder within your Stack

    To use the Image Preset Builder app within your stack, follow the steps given below:

    1.  Go to your stack dashboard and click the **Assets** icon in the left-hand side primary navigation panel. You can add or upload a new image file or use any existing asset.  
        ![Add-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5737863ef7e5aa54/6473c62fc5da54855bb89504/Add-Assets.png)
    2.  Open the image and click the **Widgets** icon in the right-side navigation panel.  
        ![Open-Widgets-In-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacad5fcb199f1acf/6473c88386bda523e0530175/Open-Widgets-In-Assets.png)
    3.  Select the **Image Preset Builder** option from the dropdown.  
        ![Select-Image-Preset-Builder-In-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd6dc34e4391c6b12/6473c883133eef884f4991ce/Select-Image-Preset-Builder-In-Assets.png)
    4.  Now, click the **+ New Preset** button to create image presets.![Create-New-Preset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ba1ddb1c0f6a70c/66744abeb00d39318ee02e2d/Create-New-Preset.png)
    5.  Add a preset name and click **Save**.  
        ![Create-New-Preset-And-Save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47058c9e7ab5176a/6473c62ec1800111da432f02/Create-New-Preset-And-Save.png)
    6.  You can improve your image files by optimizing and transforming them, and then click **Save** to save the preset settings.  
        ![Transform-Optimize-And-Save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24a64ba9d07464d1/6473c62f86bda52704530171/Transform-Optimize-And-Save.png)  
        You can view all the image presets.  
        ![Image-Presets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6677f900ccccad14/6473c76f80a24858eda7ce0f/Image-Presets.png)  
        You can edit, copy, delete the image preset, and copy the image preset URL.  
        ![Preset-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaee81540a0c50fbc/6473c8831c27dda8c93a67ad/Preset-Options.png)
    7.  After creating presets, **Save** and **Publish** your asset.
3.  ## Use Image Presets within your Entry

    Image Preset Builder allows you to use varied preset versions of assets across your entries. With the help of this app, you can add image presets to fields such as [Custom](/docs/headless-cms/custom) field and [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field.

    To use the Image Presets Builder application within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:  
        ![Image-Preset-Builder-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0feb4eb836a26620/6473c62fdfafe51e0c049e16/Image-Preset-Builder-Content-Type.png)

    There are two ways to add Image Presets in your entry:

    1.  [Custom Field](#steps-to-add-image-presets-within-custom-fields)
    2.  [JSON Rich Text Editor field](#steps-to-add-image-presets-within-json-rich-text-editor-fields)

    ### Steps to add Image Presets within Custom Fields

    1.  In the Content Type Builder page, add a Custom field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension/App**, select **Image Preset Picker**, and then click the **Proceed** button.  
        ![Image-Preset-Builder-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda62348ea3693ed2/647e2d73322bcdd2fb09b32a/Image-Preset-Builder-Custom-Field.png)  
        Image Preset Picker is added in the custom field.  
        ![Added-Image-Preset-Builder-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b8e93de7f7a3cb4/6473c62faeb2dbf8e61181b8/Added-Image-Preset-Builder-In-Custom-Field.png)
    3.  After adding the custom fields for the app, click **Save** or **Save and Close** to save your changes.
    4.  To use the Image Preset Builder app, create an entry for this content type. In the left navigation panel, navigate to the Entries page and click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
        You can see the Image Preset Builder app’s custom fields on your entry page as shown below:  
        ![Image-Preset-Builder-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6feb1e47ba53fa9d/6473c76f04cf0c2d93c48947/Image-Preset-Builder-Custom-Field-Sample-Entry.png)
    5.  Click the **Choose a file** button to add an asset to the custom field.  
        ![Image-Preset-Builder-Choose-File-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteca2ae8a301aafaa/6473c62e731679b1666b5236/Image-Preset-Builder-Choose-File-In-Custom-Field.png)
    6.  In the **Select Asset** Modal, you can add the original asset or the specific image preset. Click **Add Selected Asset** to add the selected asset or preset to the Custom field.  
        ![Select-Image-Preset-For-Adding-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc66fda887ba64510/6473c88300c0b381eee707e5/Select-Image-Preset-For-Adding-In-Entry.png)

        **Note:** You can directly create a new preset version of the selected image to add to the Custom field.

        You can view the selected asset or preset in the custom field.  
        ![Image-Preset-Builder-Custom-Field-Sample-Entry-With-Preset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt122445b0ca6bf5ec/6473c76f80a24828a6a7ce09/Image-Preset-Builder-Custom-Field-Sample-Entry-With-Preset.png)
    7.  Hover over the image to use the options to edit and delete the asset or preset.  
        ![Image-Preset-Builder-Custon-Field-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbc46913ece288cb3/6473c76fb263922fbc134ffc/Image-Preset-Builder-Custon-Field-Features.png)
    8.  Once done, **Save** and **Publish** your entry.

    ### Steps to add Image Presets within JSON Rich Text Editor Fields

    1.  In the Content Type Builder page, add a JSON Rich Text Editor field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select JSON RTE Plugin(s)**, select **Image Preset Picker**, and then click **Add Plugin(s)**.  
        ![Image-Preset-Builder-JSONRTE-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf14ad4ada976cac6/647e2d932ddbd61c2717b580/Image-Preset-Builder-JSONRTE-Plugin.png)  
        Image Preset Picker is added in JSON Rich Text Editor.  
        ![Added-Image-Preset-Builder-In-JSONRTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt41189eace4b5f19d/6473c62f69d38a6fac6a1c8c/Added-Image-Preset-Builder-In-JSONRTE.png)
    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Image Preset Builder app, create an entry for this content type. In the left navigation panel, navigate to the Entries page and click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
        You can click the **Assets** icon in the JSON Rich Text Editor field on your entry page, as shown below:  
        ![Image-Preset-Builder-JSONRTE-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt587ceb3f6d6e9449/6473c76f80a2482c23a7ce11/Image-Preset-Builder-JSONRTE-Sample-Entry.png)
    5.  Select the **Choose from Assets** option to add an asset to the JSON Rich Text Editor field.  
        ![Image-Preset-Builder-JSONRTE-Choose-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48411cc2d529121e/6473c76fc5da54b00ab89508/Image-Preset-Builder-JSONRTE-Choose-Assets.png)
    6.  In the **Select Asset** Modal, you can add the original asset or the specific image preset. Click **Add Selected Asset** to add the selected asset or preset to the JSON Rich Text Editor field.  
        ![Select-Image-Preset-For-Adding-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc66fda887ba64510/6473c88300c0b381eee707e5/Select-Image-Preset-For-Adding-In-Entry.png)

        **Note:** You can directly create a new preset version of the selected image to add to the JSON Rich Text Editor field.

        You can view the selected asset or preset in the JSON Rich Text Editor field.  
        ![Image-Preset-Builder-JSONRTE-Sample-Entry-With-Preset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5d12072462bf416/6473c76fb851cf8525e6a0f2/Image-Preset-Builder-JSONRTE-Sample-Entry-With-Preset.png)
    7.  Hover over the image to use the options to view in full screen, edit the image, edit the preset, and delete the asset or preset.  
        ![Image-Preset-Builder-JSONRTE-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3740e931a8223fd7/6473c76f08523c04f72e6062/Image-Preset-Builder-JSONRTE-Features.png)
    8.  Once done, **Save** and **Publish** your entry.
4.  ## Render Images using Image Preset Builder

    You need to use the Utils functions to render the image presets built using the [Image Preset Builder app](/docs/marketplace/image-preset-builder) in your project.

    ### Get ImageTransformation Utilities from the app-utils Repository

    Follow the steps to add the image transformation function to your project, which can help you apply image style and formatting:

    1.  Go to [image-preset-builder](https://github.com/contentstack/app-utils/tree/main/image-preset-builder) inside the [@contentstack/app-utils](https://github.com/contentstack/app-utils/) repository in GitHub, and you can see the utility functions that help you to render your image preset.
    2.  Now, open the folder that contains functions suitable to your project's programming language. Inside this folder, you can view a file that contains the formatting functions, for example, **ImageTransformation.js** in **JavaScript**.
    3.  Copy the file into your project. This file contains all the functions you need to render your image.

    ### Generate URLs and Styles for Images

    Image Preset Builder allows you to build a preset of different styles offered by Contentstack or other CSS building sources. The server will not generate styles for certain scenarios, such as [Image Focal Point Definitions](#handle-image-focal-point) and Image Rotation Axis Points. In some transformation projects, you can define CSS styles locally or use third-party packages.

    To apply the style and formatting to your image presets, follow the steps:

    1.  **Generate Image URL**: You can use the resolvePresetByPresetUID() function from the ImageTransformation file to generate a URL for the image that contains the preset information. This function takes one object as an argument, and the object requires the asset, presetUID, and extension\_uid. You can extract these values from the Custom field or JSON RTE schemas defined in the [Field Schema for Reference](#field-schema-for-reference) section.  
        For example, you can extract assets from custom-image-field.asset, presetUID from custom-image-field.metadata.preset.uid, and extension\_uid from custom-image-field.metadata.extension\_uid. This function returns a new asset object that contains the new image URL. Now, pass the new image URL to the image tag’s src attribute.
    2.  **Generate CSS Styles for Image Presets**: To generate the CSS styles from the preset, you can use the resolvePresetStylesByPresetUID() function. This function accepts one object as an argument, and the object requires the asset, presetUID, and extension\_uid. You can extract these values from the Custom field or JSON RTE schemas defined in the [Field Schema for Reference](#field-schema-for-reference) section.  
        The resolvePresetStylesByPresetUID() function returns inline styles for the image. These styles could be added to the image tag.

    ### Handle Image Focal Point

    Now, if applicable, you can handle the focal points of your image preset. To retrieve the focal point coordinates, you can use the fetchPresetByPresetUID() function. This function accepts one object as an argument, and this object requires the asset, presetUID, and extension\_uid. You can extract these values from the Custom field or JSON RTE schemas defined in the [Field Schema for Reference](#field-schema-for-reference) section. The fetchPresetByPresetUID() function returns a preset object.

    Here is an example of the schema for the returned preset object:

    ```
    {
        "uid": "sample-uid",
        "name": "Focal Point",
        "options": {
            "transform": {
                "width": 864,
                "height": 712
            },
            "quality": "100",
            "image-type": "jpeg",
            "focal-point": {
                "x": -0.5701133487044711,
                "y": 0.030206030249075533
            }
        }
    }
    ```

    You can retrieve the focal point coordinates from the focal-point object. To render the preset, you need third-party packages that accept the coordinates and display the image accordingly. For example, you can use the [image-focus](https://www.npmjs.com/package/image-focus) library for JavaScript.

    ### Field Schema for Reference


    2.  **Custom Field**

        Let's consider that an entry has a Custom field with the name custom-image-field.  
        When you fetch an entry, its schema will appear as follows:

        ```
        {
          "title": "Preset Picker Demo",
          "custom-image-field": {
            "uid": "sample-uid",
            "metadata": {
              "preset": {
                "uid": "sample-preset-uid",
                ...
              },
              "extension_uid": "sample-extension-uid"
            },
            "asset": {
                "url":"https://example.com/image.jpg",
                ...
            }
          }
        }
        ```

        In the above schema, you can find the preset and extension\_uid information under the metadata object, and the asset data is returned at the root level of the Custom field schema.

    4.  **JSON Rich Text Editor Plugin**

        Let's consider that an entry has a JSON Rich Text Editor field with the name json\_rte. This field contains a plugin of type **reference**.  
        When you fetch an entry, its schema will appear as follows:

        ```
        {
          "title": "Preset Picker Demo",
          "json_rte": {
            "uid": "v4-uid",
            "children": [
              {
                "uid": "v4-uid",
                "type": "reference",
                "attrs": {
                  "asset-uid": "sample-asset-uid",
                  "extension_uid": "sample-extension-uid",
                  "preset": {
                    "uid": "sample-preset-uid"
                  },
                  ...
                },
                "children": [{ "text": "" }]
              }
            ],
            "type": "doc"
          },
          "_embedded_items": {
            "json_rte": [
              {
                "uid": "sample-asset-uid",
                "url": "https://example.com/image.jpeg",
                ...
              }
            ]
          },
          ...
        }
        ```

        In the above schema, the JSON RTE plugin is of **reference** type. You can find the preset and extension\_uid information under the attrs object of the JSON RTE schema. You can find the asset information under the \_embedded\_items object at the root level of the entry schema.

    **Additional Resource:** To learn more about Embedded Items in JSON RTE, refer to [Embedded Entries or Assets within JSON RTE](/docs/headless-cms/embed-entries-or-assets) documentation.
