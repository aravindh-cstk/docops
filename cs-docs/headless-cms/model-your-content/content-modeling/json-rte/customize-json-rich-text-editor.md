---
title: "Customize JSON Rich Text Editor"
description: "Learn how to customize the JSON Rich Text Editor in Contentstack by configuring toolbar options and applying advanced editor settings."
url: /headless-cms/customize-json-rich-text-editor
---

# Customize JSON Rich Text Editor

## Customize JSON Rich Text Editor

You can tailor the JSON Rich Text Editor (RTE) to meet specific content needs by enabling the Custom Editor. This allows selecting formatting options and controlling the toolbar for content managers.

**Note:** Only the stack [Owner](/docs/headless-cms/types-of-roles#owner), [Admins](/docs/headless-cms/types-of-roles#admin), and users with [Developer](/docs/headless-cms/types-of-roles#developer) role can customize the JSON RTE field.

To customize the JSON RTE, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Go to the Content Type Builder and add the **JSON Rich Text Editor** field to your content type.
2.  In the **Properties** pop-up of the JSON RTE field, click **Advanced**.
3.  Under **Editor Type**, choose **Custom**. Select the desired formatting options to include in the toolbar. To enable all options, check the **Select All** checkbox.
4.  Click **Save** or **Save and Close** to save your content type.
    
    ![Custom JSON RTE configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd308d4f5823a709c/68307cb1cf42ff32af04559c/customize-json-rte-edited.gif)
    

Content managers will see the configured toolbar options when creating or editing entries of this content type.

![Configured toolbar example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt42a950fb9bafcd63/6819af9c2ac67c33746693fe/2._custom_RTE_output.png)

**Additional Resources:**

-   [Field Visibility Rules](/docs/headless-cms/about-field-visibility-rules) in our documentation for advanced customization.

## API Reference for JSON RTE

Use the following API requests to manage JSON RTE via Content Management API.

-   [Create a content type with JSON RTE](/docs/developers/apis/content-management-api/content-types#create-content-type-with-json-rte)
-   [Create an entry with JSON RTE](/docs/developers/apis/content-management-api/entries#create-an-entry-with-json-rte)
-   [Update an entry with JSON RTE](/docs/developers/apis/content-management-api/entries#update-an-entry-with-json-rte)

You can also retrieve JSON RTE fields via GraphQL. Refer to the [Get JSON RTE Fields while Retrieving Entries](/docs/developers/apis/graphql-content-delivery-api/queries#get-json-rte-fields-while-retrieving-entries) query in the GraphQL API documentation.
