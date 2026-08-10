---
title: "Custom"
description: "Enhance your Contentstack with customizable fields. Integrate top apps and manage properties effortlessly for tailored content types."
url: /headless-cms/custom
---

# Custom

## Custom

The **Custom** field enables you to add and use customizable fields in the content type. You need to add one or more extensions (custom field logic) to the stack to use this field. Apart from using the default [fields](/docs/headless-cms/about-fields) such as “Single-line textbox,” “Rich Text Editor,” and so on, you can integrate with numerous business applications, such as “[Marketo Forms](https://developers.marketo.com/javascript-api/forms/)”, “[Optimizely](https://www.optimizely.com/)”, and “[Brightcove](https://www.brightcove.com/en/)” by adding them as [custom fields](/docs/developer-hub/custom-field-location) to the Contentstack [content type](/docs/headless-cms/about-content-types/).

**Additional Resource:** To learn what Extensions are and how they work, refer to the [Extensions](/docs/developer-hub/custom-field-location) guide.

This field possesses certain [properties](/docs/headless-cms/about-field-properties) that you can change at any time per your needs. The properties that you can modify are “Select Extension,” “[Display Name](/docs/headless-cms/display-name)”, “[Unique ID](/docs/headless-cms/unique-id)”, “[Instruction Value](/docs/headless-cms/instruction-value)”, “[Help Text](/docs/headless-cms/help-text)”, “[Config Parameter](/docs/headless-cms/config-parameter-for-custom-fields-only),” “[Mandatory](/docs/headless-cms/mandatory),” and “[Non-localizable](/docs/headless-cms/non-localizable).”

After you [add or create a custom field](/docs/developer-hub/custom-field-location) extension in the stack, you can [use it in content types](/docs/developer-hub/custom-field-location).

The following are the two ways to add custom fields to your content types:

-   **Create new custom fields** - Create custom fields by writing custom code and using it in the content types.
-   **Use prebuilt templates** - Use the prebuilt templates by modifying the given code to suit your requirements. Contentstack provides certain pre-built custom fields such as color picker, code editor, video selector, and more.

For this example, the Star Rating custom field is added in the content type, you will see it on the entry page as shown below.

![Custom_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt610c8621455b4bbe/66702e163641c754d2136509/Custom_1.png)

**Additional Resources**:

-   Contentstack enables you to enhance the functionality of a field by setting up [Field Visibility Rules](/docs/headless-cms/about-field-visibility-rules) to hide/show a field on meeting certain conditions.
-   You can check out our [Content Modeling](/docs/headless-cms/about-content-modeling) guide to learn how you can map your webpage’s layout with your Content Type.
-   Editing any current field in the existing Content Type might result in data loss. To prevent data loss, check out our [Content Type Change Management guide](/docs/headless-cms/content-type-change-management).
