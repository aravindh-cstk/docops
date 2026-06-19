---
title: "[Fields] - Group"
description: Documentation for the Group field used to organize multiple fields into a reusable unit in Contentstack content modeling.
url: https://www.contentstack.com/docs/headless-cms/group
product: Contentstack
doc_type: field-reference
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-03-25
---

# [Fields] - Group

This page explains how to use the **Group** field to organize multiple fields into a reusable unit in Contentstack content types. It is intended for developers and content modelers designing content models, and should be used when you need to bundle related fields together (optionally with multiple instances) for entry creation.

## Group

Use the **Group** field to organize multiple fields into a reusable unit for easier content modeling. Enable **Multiple** to add multiple instances while creating entries.

For example, when creating a banner, you may need a background image, text, and a link to a detail page. You can create a Group field and add the [File](/docs/developers/create-content-types/file), [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox), and [Link](/docs/developers/create-content-types/link) fields to achieve this.

You can update the following properties of a Group field at any time:
- [Display Name](/docs/developers/create-content-types/display-name)
- [Unique ID](/docs/developers/create-content-types/unique-id)
- [Instruction Value](/docs/developers/create-content-types/instruction-value)
- [Help Text](/docs/developers/create-content-types/help-text)
- [Multiple](/docs/developers/create-content-types/multiple)
- [Non-localizable](/docs/developers/create-content-types/non-localizable)
- [Mark as Group Title](/docs/developers/create-content-types/mark-as-title#mark-as-group-title)

**Note:** You can now **show a Group field as a separate tab** in the entry editor for easier navigation. Enable the **Show as Tab** option under **Advanced** settings to display the Group field as a dedicated tab. Learn more in [Show as Tab](/docs/developers/create-content-types/show-as-tab).

After you add the Group field to your content type, the Group field appears on the entry page.

## Real World Scenarios of Using Group Fields

Here are some common use cases for Group fields in Contentstack.

### Example 1: Banner or Header of a Website

A website banner or header often uses multiple fields to display content. You can group these fields into a single Group field for easier management.

To create a banner using a Group field, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Content Models” icon.
- Insert a **Group** field and name it **Hero Unit**.
- Configure additional properties. If your webpage requires multiple banners, enable the **Multiple** option under **Advanced**.
- Add the following fields inside the Group field:**File**: Image for the banner background.
- **Single Line Textbox**: Title of the banner.
- **Multi Line Textbox**: Description for the banner.
- **Link**: A call-to-action link.
- Click **Save and Close** to save your content type.

### Example 2: Survey Form

Group fields can organize related fields into survey or questionnaire sections. They are also useful for creating polls, quizzes, or rating forms.

For example, to create a Mental Health Survey form, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Content Models” icon.
- Insert a **Group** field and name it **Mental Health Survey**.
- Configure additional properties. To allow multiple surveys, enable the **Multiple** option under **Advanced**.
- Add the following fields inside the Group field:**Single Line Textbox**: Respondent name
- **Number**: Respondent age
- **Date**: Date of birth
- **File**: Upload files or images
- **Boolean**: Checkbox for confirmation or validation
- **Rich Text Editor**: Feedback or detailed responses
- Click **Save and Close** to save your content type.

### Example 3: Global Field Within a Group Field

You can also add Global fields inside Group fields. Global fields are reusable across multiple content types, while Group fields allow repeated iterations within a content type. Combining the two increases flexibility and reusability.

To create a Group field that fetches SEO data from a Global field, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Content Models” icon.
- Create a Global field named **SEO**.
- Inside the Global field, add the following:**Single Line Textbox**: SEO meta title
- **Multi Line Textbox**: SEO meta description
- **Single Line Textbox**: SEO meta keywords
- **Boolean**: Enable or disable search engine visibility
- Go to your content type and add a **Group** field named **SEO**.
- Inside the Group field, add the following:**Single Line Textbox**: Title of the Group field.
- **Multi Line Textbox**: Meta description.
- **Global Field**: Reference the SEO Global field.
- Click **Save and Close** to save your content type.

## Copy Field Values Across Groups

Content managers can copy the values of an instance within a Group field and paste them into:
- Another instance in the same entry.
- An instance in the same Group field in a different entry.

This simplifies content duplication and speeds up entry creation.

To copy and paste field values across group fields, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- In the **Group** field, select the instance, click the vertical ellipsis, and select **Copy Field Values**.
- In the target entry or instance, click the vertical ellipsis again and select **Paste Field Values**.**Note:** The target instance must match the same instance’s name and structure as the source.

**Additional Resources:**
- To extend functionality, learn how to [add Global fields to Group fields](/docs/developers/global-field/global-fields-within-group-fields).
- To control visibility of fields, see [Field Visibility Rules](/docs/developers/create-content-types/about-field-visibility-rules).
- Before editing existing content types, review the [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide to avoid data loss.

## Common questions

### What is the Group field used for?
The **Group** field is used to organize multiple fields into a reusable unit for easier content modeling.

### Can I add multiple instances of a Group field in an entry?
Yes. Enable **Multiple** to add multiple instances while creating entries.

### Can a Group field be shown as a separate tab in the entry editor?
Yes. Enable the **Show as Tab** option under **Advanced** settings to display the Group field as a dedicated tab.

### Can I copy field values from one Group instance to another?
Yes. You can use **Copy Field Values** and **Paste Field Values** to copy values to another instance in the same entry or in a different entry, as long as the target instance matches the same instance’s name and structure as the source.