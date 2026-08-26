---
title: "Add a Field Visibility Rule"
description: "Field Visibility Rules in Contentstack let you dynamically show or hide fields based on conditions, streamlining content entry and improving user experience."
url: /headless-cms/add-a-field-visibility-rule
uid: blt4988ba550f6b317f
---

# Add a Field Visibility Rule

## Add a Field Visibility Rule

[Field Visibility Rules](/docs/headless-cms/about-field-visibility-rules) in Contentstack allow authorized users to dynamically show or hide fields within an entry based on predefined conditions, improving content management and user experience. By setting up rules, users can control when fields appear, streamline data entry, and reduce clutter.

This guide outlines the steps to create and configure these rules, including defining conditions, setting actions, and managing multiple rules effectively.

When creating or editing a [content type](/docs/headless-cms/about-content-types/) or a [global](/docs/headless-cms/global/) field, you can define field visibility rules based on specific conditions in the respective **builder** page.

**Note:** Only users with permission to create or edit content types can configure the field visibility rules.

## Set Up Field Visibility Rules for a Content Type

To set up field visibility rules, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the "Content Models" icon.
2.  Click the title of a content type to open it. Alternatively, click the vertical ellipses in the **Actions** column next to the content type and select **Edit**.
3.  Click **Field Visibility Rules** at the top of the page.

    ![Field Visibility Rules UI](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3b9eca31c858c6b/67d453f718b0840590aadf49/Add_a_Field_Visibility_Rule_link.png)
4.  In the resulting modal, click **Create New Rule**.
5.  Under **RULE 1**, configure the rule as follows:

    1.  Select whether the rule should apply when **All** or **Any** of the specified conditions are met:

        -   **All:** The action triggers when all specified conditions are met.
        -   **Any:** The action triggers when at least one specified condition is met.
    2.  Specify the conditions:

        -   Select a **Field** from the dropdown. This is the operand to be evaluated.
        -   Choose a **Condition**. This is an operator that defines the comparison.

            **Additional Resource:** Refer to the [Operand Fields and Supported Operators](/docs/headless-cms/operand-fields-and-supported-operators) document for more details.

        -   Enter an expected **Value** that triggers the condition.


        **Example Condition:** If "Date" is Before "12-31-2024".

        -   **Operand Field:** Date
        -   **Condition (operator):** Before
        -   **Expected Value:** 12-31-2024

        **Tip:** You can add more conditions to a rule by clicking **\+ Add Condition** or remove them by clicking the delete icon.

    3.  In the **Perform the following actions** section, define the actions triggered when the condition is met.

        -   Select **Show** or **Hide** action type from the dropdown.
        -   Choose a target **Field** to be shown or hidden based on the condition.

        For example, if "Date" is Before "12-31-2024", **Show** the **Archive Notification** field and **Hide** the **Body** field.

        **Tip:** You can add more actions to a condition by clicking **\+ Add Action** or remove an action by clicking the delete icon.


    **Note:** Refer to the [Limitations of Field Visibility Rules](/docs/headless-cms/limitations-of-field-visibility-rules) document to know more about the validations on the operand field and target field.

    ![Setting up actions in Field Visibility Rules](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58e7bc211790df30/67d45407883896a76090fb01/Add_a_Field_Visibility_Rule_create.png)

    **Tip:** You can add multiple rules to a content type by clicking **\+ Add Another Rule** or remove a rule by clicking the **Delete Rule** option from the vertical ellipsis.

6.  Click **Save** to apply the rule(s).
7.  Click **Save** or **Save and Close** to apply changes to the content type.

## Apply Field Visibility Rules to Group Fields

Suppose you have a **Team Member** group field marked as **Multiple**. Inside it, you add a select field named **Has Social Links** and text fields for **LinkedIn URL** and **Twitter URL**.

You want the LinkedIn and Twitter fields to appear only when **Has Social Links** is selected.

To create this rule, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the "Content Models" icon.
2.  Click the title of a content type to open it. Alternatively, click the vertical ellipses in the **Actions** column next to the content type and select **Edit**.
3.  Click **Field Visibility Rules** at the top of the page.
4.  In the resulting modal, click **Create New Rule**.
5.  Under **RULE 1**, set the condition:
    -   **Operand:** Has Social Links
    -   **Condition:** is selected
6.  Under **Actions**, select **Show** for the **LinkedIn URL** and **Twitter URL** fields.
7.  Click **Save** to apply the rule.

![Apply_Field_Visibility_Rules_to_Group_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfaf64f4fe425e1c4/68dc299fb2e79d62af0e81d8/Apply_Field_Visibility_Rules_to_Group_Fields.png)

**Note:** The Field Visibility Rules apply **per instance** of the group, so each team member can independently show or hide their social link fields.

Now, when editors add a team member entry and check **Has Social Links**, the LinkedIn and Twitter fields will appear for that instance.

![Field_Visibility_Rules_in_Group_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt71079de133517327/68dc29b8acedb27adb313a47/Field_Visibility_Rules_in_Group_Fields.png)

## Apply Field Visibility Rules to Modular Block Fields

Suppose you have a **Product Details** modular block with a field called **Product Type** and fields for **Shipping Address** and **Download URL**.

If **Product Type** is **Physical**, show **Shipping Address** and if **Product Type** is **Digital**, show **Download URL**.

To create this rule, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the "Content Models" icon.
2.  Click the title of a content type to open it. Alternatively, click the vertical ellipses in the **Actions** column next to the content type and select **Edit**.
3.  Click **Field Visibility Rules** at the top of the page.
4.  In the resulting modal, click **Create New Rule**.
5.  Configure **RULE 1** as follows:
    -   **Operand:** Product Type
    -   **Condition:** Equals → Physical
    -   **Action:** Show → Shipping Address
6.  Add a second rule:
    -   **Operand:** Product Type
    -   **Condition:** Equals → Digital
    -   **Action:** Show → Download URL
7.  Click **Save** to apply the rules.

![Apply_Field_Visibility_Rules_to_Modular_Block_Fields.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78ef17f376050a2f/68dc29ccc511057f565afd2d/Apply_Field_Visibility_Rules_to_Modular_Block_Fields.gif)

**Note:** Field Visibility Rules apply **within the same block only**. You cannot set the parent Modular Block or another block as an operand or target.

Now, when editors add a **Product Details** block and select **Physical**, the Shipping Address appears. Selecting **Digital** hides it and shows the Download URL instead.

![Field_Visibility_Rules_in_Modular_Block_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b01afe6d67c4519/68dc29de877911b26a88b21c/Field_Visibility_Rules_in_Modular_Block_Fields.png)

## Set Up Field Visibility Rules for a Global Field

You can apple Field Visibility Rules to **Global Fields**, allowing you to control the visibility of fields inside a reusable component.

To set up field visibility rules for a global field, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your stack and click the **Content Models** icon.
2.  Select **Global Fields** from the left navigation panel.
3.  Click the title of a global field to open it.
4.  Click **Field Visibility Rules** at the top of the page.
5.  Create and configure rules using the same steps as for content types.

    **Note:** Fields marked as multiple cannot be used in rules within a Global field.

6.  Click **Save** to apply the rule(s).
7.  Click **Save** or **Save and Close** to apply changes to the global field.![Set_Up_Field_Visibility_Rules_for_a_Global_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt698d7ca07f2e01d1/68b811f0163c2f45ca98137e/Set_Up_Field_Visibility_Rules_for_a_Global_Field.png)

**How Rules Work in Content Types**

When a Global Field with visibility rules is referenced in a content type:

-   The rules are **inherited** and shown in the **Rules from Global Fields (Read-only)** section in the Content Type builder.
-   Inherited rules **cannot** be edited or deleted from the Content Type; you must edit them in the Global Field itself.
-   Any rules created directly in the Content Type are independent and remain editable there.

Field Visibility Rules give you granular control over which fields appear to content managers, simplifying the entry view and improving usability. Using these rules effectively can improve data accuracy, streamline workflows, and make complex content models easier to work with, especially when managing reusable components through Global fields.
