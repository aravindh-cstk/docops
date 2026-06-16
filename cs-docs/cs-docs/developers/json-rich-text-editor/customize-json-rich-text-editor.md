---
title: "[JSON Rich Text Editor] - Customize JSON Rich Text Editor"
description: Customize the JSON Rich Text Editor (RTE) by enabling the Custom Editor, selecting formatting options, and controlling the toolbar for content managers.
url: https://www.contentstack.com/docs/developers/json-rich-text-editor/customize-json-rich-text-editor
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [JSON Rich Text Editor] - Customize JSON Rich Text Editor

This page explains how to customize the JSON Rich Text Editor (RTE) in Contentstack by enabling the Custom Editor and configuring toolbar formatting options. It is intended for stack Owners, Admins, and Developers who need to tailor editing capabilities for content managers when building content types.

## Customize JSON Rich Text Editor

You can tailor the JSON Rich Text Editor (RTE) to meet specific content needs by enabling the Custom Editor. This allows selecting formatting options and controlling the toolbar for content managers.

**Note:** Only the stack [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), [Admins](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin), and users with [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) role can customize the JSON RTE field.

To customize the JSON RTE, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Go to the Content Type Builder and add the **JSON Rich Text Editor** field to your content type.
- In the **Properties** pop-up of the JSON RTE field, click **Advanced**.
- Under **Editor Type**, choose **Custom**. Select the desired formatting options to include in the toolbar. To enable all options, check the **Select All** checkbox.
- Click **Save** or **Save and Close** to save your content type.

Content managers will see the configured toolbar options when creating or editing entries of this content type.

**Additional Resources:**
- [Field Visibility Rules](/docs/developers/create-content-types/about-field-visibility-rules) in our documentation for advanced customization.

## API Reference for JSON RTE

Use the following API requests to manage JSON RTE via Content Management API.
- [Create a content type with JSON RTE](/docs/developers/apis/content-management-api#create-content-type-with-json-rte)
- [Create an entry with JSON RTE](/docs/developers/apis/content-management-api#create-an-entry-with-json-rte)
- [Update an entry with JSON RTE](/docs/developers/apis/content-management-api#update-an-entry-with-json-rte)

You can also retrieve JSON RTE fields via GraphQL. Refer to the [Get JSON RTE Fields while Retrieving Entries](/docs/developers/apis/graphql-content-delivery-api#get-json-rte-fields-while-retrieving-entries) query in the GraphQL API documentation.

## Common questions

**How do I enable the Custom Editor for the JSON Rich Text Editor?**  
In the **Properties** pop-up of the JSON RTE field, click **Advanced**, then under **Editor Type** choose **Custom**.

**Who can customize the JSON RTE field?**  
Only the stack Owner, Admins, and users with the Developer role can customize the JSON RTE field.

**How can I enable all formatting options in the toolbar?**  
To enable all options, check the **Select All** checkbox.

**Can I retrieve JSON RTE fields using GraphQL?**  
Yes. Refer to the **Get JSON RTE Fields while Retrieving Entries** query in the GraphQL API documentation.