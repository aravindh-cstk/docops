---
title: "[Extensions] - Use Prebuilt Custom Fields"
description: Use prebuilt custom field templates in Contentstack Extensions to quickly add custom fields without writing code.
url: https://www.contentstack.com/docs/developers/create-custom-fields/use-prebuilt-custom-fields
product: Contentstack
doc_type: guide
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Use Prebuilt Custom Fields

This page explains how to use Contentstack’s prebuilt custom field templates via Extensions, including where to find them and how to configure and save them. It is intended for developers or stack administrators who want to add custom fields quickly without writing code, especially when working with the legacy Extensions approach.

## Use Prebuilt Custom Fields

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [Custom Field UI location](../developer-hub/custom-field-location.md) for the Contentstack App Framework to extend the functionality of your apps.

Contentstack provides several prebuilt [custom field](./about-custom-fields.md) templates to get you started instantly instead of writing code. You just need to configure these templates a bit and get started.

Below is a list of some of the popular custom field templates provided by Contentstack:
- [Ace Editor](./use-prebuilt-custom-fields/ace-editor.md)
- [Color Picker](./use-prebuilt-custom-fields/color-picker.md)
- [JSON Editor](./use-prebuilt-custom-fields/json-editor.md)
- [Key-value Field](./use-prebuilt-custom-fields/key-value-field.md)
- [Progress Bar](./use-prebuilt-custom-fields/progress-bar.md)
- [Star Ratings](./use-prebuilt-custom-fields/star-ratings.md)

In order to use a pre-built custom field, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Settings” icon on the left navigation panel.
- Select **Extensions**, and click on **+ New Extensions** button at the top-right corner of the page, and select **Use prebuilt** option.![Use_Prebuilt_Custom_Fields_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcaaf0f03413e3ae3/60b7c02fcf9889265dab7c42/Use_Prebuilt_Custom_Fields_1_highlighted.png)
- In the following window, from the drop-down menu, select **Custom Field**.![Select_Custom_Field.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3fca79699403bffc/638742241686b510627b05a1/Select_Custom_Field.jpg)
- Select any prebuilt template (for example, **Color Picker**), and click on **+ ****Add Extension**.
- In the configuration page, you will see the following options:  
  **Title*** (required)*: You will see a predefined title. This title can be used when adding the custom field in your content type.
- **Field data type** *(required)*: Based on the custom field you select, you will see a field data type assigned for your input data.
- **Multiple ***(optional)*: Select this if your custom field accepts multiple values, and the data type is not JSON. It lets the field save input values in an array.
- **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.
- **Extension Source Code ***(required)*: You will find the source code for the custom field.
- **Config Parameters ***(optional)*: If you have used any config parameters in the source code, provide the value for the parameters here. You can make changes to this code as per your requirements. You can pass raw queries as config parameters in this section as shown below:
```
{
"key1":"value1",
"key2":"value2"
}
```

**Note**: Users don't need to add config parameters to the prebuilt custom field extensions. By default the extensions are preconfigured and ready to use.
- Finally, **Save **this widget.

## Common questions

**Q: Do I need to write code to use these prebuilt custom fields?**  
A: No. Contentstack provides prebuilt custom field templates that you can configure and use without writing code.

**Q: Where do I add a prebuilt custom field in Contentstack?**  
A: Go to your stack **Settings**, open **Extensions**, click **+ New Extensions**, choose **Use prebuilt**, then select **Custom Field**.

**Q: Do I need to add Config Parameters for prebuilt custom field extensions?**  
A: No. Users don't need to add config parameters to the prebuilt custom field extensions. By default the extensions are preconfigured and ready to use.

**Q: What hosting method is used for these prebuilt custom fields?**  
A: The hosting method is set to **Hosted By Contentstack** since it is a custom field hosted on Contentstack.