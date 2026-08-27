---
title: "Group"
description: "Combine fields into reusable groups in Contentstack to streamline content modeling and real-world use cases."
url: /headless-cms/group
uid: blt638da471650adb46
---

# Group

## Group

Use the **Group** field to organize multiple fields into a reusable unit for easier content modeling. Enable **Multiple** to add multiple instances while creating entries.

For example, when creating a banner, you may need a background image, text, and a link to a detail page. You can create a Group field and add the [File](/docs/headless-cms/file), [Multi Line Textbox](/docs/headless-cms/multi-line-textbox), and [Link](/docs/headless-cms/link) fields to achieve this.

You can update the following properties of a Group field at any time:

-   [Display Name](/docs/headless-cms/display-name)
-   [Unique ID](/docs/headless-cms/unique-id)
-   [Instruction Value](/docs/headless-cms/instruction-value)
-   [Help Text](/docs/headless-cms/help-text)
-   [Multiple](/docs/headless-cms/multiple)
-   [Non-localizable](/docs/headless-cms/non-localizable)
-   [Mark as Group Title](/docs/headless-cms/mark-as-title#mark-as-group-title)

**Note:** You can now **show a Group field as a separate tab** in the entry editor for easier navigation. Enable the **Show as Tab** option under **Advanced** settings to display the Group field as a dedicated tab. Learn more in [Show as Tab](/docs/headless-cms/show-as-tab).

After you add the Group field to your content type, the Group field appears on the entry page.

## Real World Scenarios of Using Group Fields

Here are some common use cases for Group fields in Contentstack.

### Example 1: Banner or Header of a Website

A website banner or header often uses multiple fields to display content. You can group these fields into a single Group field for easier management.

To create a banner using a Group field, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon.
2.  Insert a **Group** field and name it **Hero Unit**.
3.  Configure additional properties. If your webpage requires multiple banners, enable the **Multiple** option under **Advanced**.
4.  Add the following fields inside the Group field:
    -   **File**: Image for the banner background.
    -   **Single Line Textbox**: Title of the banner.
    -   **Multi Line Textbox**: Description for the banner.
    -   **Link**: A call-to-action link.
5.  Click **Save and Close** to save your content type.

![Banner_or_Header_of_a_Website_Using_Group.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb7e1446c25131db/68dc1cd45b98db243064edc2/Banner_or_Header_of_a_Website_Using_Group.png)

### Example 2: Survey Form

Group fields can organize related fields into survey or questionnaire sections. They are also useful for creating polls, quizzes, or rating forms.

For example, to create a Mental Health Survey form, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon.
2.  Insert a **Group** field and name it **Mental Health Survey**.
3.  Configure additional properties. To allow multiple surveys, enable the **Multiple** option under **Advanced**.
4.  Add the following fields inside the Group field:
    -   **Single Line Textbox**: Respondent name
    -   **Number**: Respondent age
    -   **Date**: Date of birth
    -   **File**: Upload files or images
    -   **Boolean**: Checkbox for confirmation or validation
    -   **Rich Text Editor**: Feedback or detailed responses
5.  Click **Save and Close** to save your content type.

![Survey_Form_Using_Group.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5dc7e809bc4dd93f/68dc1cefceb426f205b05487/Survey_Form_Using_Group.png)

### Example 3: Global Field Within a Group Field

You can also add Global fields inside Group fields. Global fields are reusable across multiple content types, while Group fields allow repeated iterations within a content type. Combining the two increases flexibility and reusability.

To create a Group field that fetches SEO data from a Global field, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon.
2.  Create a Global field named **SEO**.
3.  Inside the Global field, add the following:
    -   **Single Line Textbox**: SEO meta title
    -   **Multi Line Textbox**: SEO meta description
    -   **Single Line Textbox**: SEO meta keywords
    -   **Boolean**: Enable or disable search engine visibility
4.  Go to your content type and add a **Group** field named **SEO**.
5.  Inside the Group field, add the following:
    -   **Single Line Textbox**: Title of the Group field.
    -   **Multi Line Textbox**: Meta description.
    -   **Global Field**: Reference the SEO Global field.
6.  Click **Save and Close** to save your content type.

![Global_Field_Within_a_Group_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14cb8499684dc78e/68dc1d0978b10241aa87fe44/Global_Field_Within_a_Group_Field.png)

## Copy Field Values Across Groups

Content managers can copy the values of an instance within a Group field and paste them into:

-   Another instance in the same entry.
-   An instance in the same Group field in a different entry.

This simplifies content duplication and speeds up entry creation.

To copy and paste field values across group fields, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  In the **Group** field, select the instance, click the vertical ellipsis, and select **Copy Field Values**.
2.  In the target entry or instance, click the vertical ellipsis again and select **Paste Field Values**.

    **Note:** The target instance must match the same instance’s name and structure as the source.

    ![Copy_Field_Values_Across_Groups.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt282f6230c7de7a53/68dc1d42b01de95c53a00723/Copy_Field_Values_Across_Groups.gif)

**Additional Resources:**

-   To extend functionality, learn how to [add Global fields to Group fields](/docs/headless-cms/global-fields-within-group-fields).
-   To control visibility of fields, see [Field Visibility Rules](/docs/headless-cms/about-field-visibility-rules).
-   Before editing existing content types, review the [Content Type Change Management](/docs/headless-cms/content-type-change-management) guide to avoid data loss.
