---
title: "Boolean"
description: "Learn how to utilize the Boolean field in Contentstack to create interactive content types with customizable properties and default values."
url: /headless-cms/boolean
---

# Boolean

## Boolean

The **Boolean** input [field](/docs/headless-cms/about-fields) enables users to input a “true” or “false” value in an [entry](/docs/headless-cms/about-entries). When you [add this field in content type](/docs/headless-cms/custom), it reflects as a toggle switch on the entry page.

This field possesses certain [properties](/docs/headless-cms/about-field-properties) that you can change at any time as per your needs. The properties that can be modified are “[Display Name](/docs/headless-cms/display-name),” “[Unique ID](/docs/headless-cms/unique-id),” “[Instruction Value](/docs/headless-cms/instruction-value),” “[Help Text](/docs/headless-cms/help-text),” “[Default Value](/docs/headless-cms/default-value),” and “[Non-localizable](/docs/headless-cms/non-localizable).”

After adding this field in content type, you will see it on your entry page as shown below.

![Boolean_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d08bfab034dcc21/6673d4874969e4581885ccd9/Boolean_1.png)

## Boolean Field - Real World Scenarios

Let's understand how we can use the Boolean field in the content type with a couple of use cases.

-   Clickwrap Boolean Field
-   Default Boolean Value

### Example 1 - Clickwrap Boolean Field

Using the Boolean field let's create a clickwrap field to obtain consent from users over the terms and conditions or privacy policies of your company’s legal agreement.

In this example, the users will have the liberty to choose to agree or disagree with the policies of your company.

Follow the steps to create a clickwrap Boolean field:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login/), [create a stack](/docs/headless-cms/create-a-new-stack), and [add a new content type](/docs/headless-cms/create-a-content-type) to it.
2.  Click on the "**+"** symbol (**Insert a field**) and add the **Boolean** field along with other required fields.
3.  When adding the Boolean field, under the **Boolean Properties** section add the following details:
    1.  **Display Name**: Add a display name (For example, “I agree”)
    2.  **Unique ID**: _Default value_
    3.  **Help Text**: You can provide additional information about the field (for example, "Visit our website to learn more about our privacy policies")
    4.  **Instruction Value**: It helps you add instructions to this field (for example, “Confirm by checking if you have read and agreed to our Terms and Conditions”)
4.  Click on the **Save and Close** button.
5.  Finally, [create an entry](/docs/headless-cms/create-an-entry) to see the Boolean field in action.![Boolean_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcde0edc9a154c031/6673d53404c62958526f5468/Boolean_2.png)

### Example 2 - Default Boolean Value

Contentstack allows you to have a **Default Value** of the radio button or Boolean field. This default button helps users to pre-define the value of the Boolean field. The value entered here will appear by default while creating an entry for this content type.

Follow the steps to create a default Boolean field:

1.  Go to the stack and create a content type similar to the previous example.
2.  Now, insert the fields of your choice and also add the **Boolean** field.
3.  Go to the **Boolean Properties** section of the Boolean field and add the following details:
    1.  **Display Name**: Add a display name (For example, “Terms and Conditions”)
    2.  **Unique ID**: _Default value_
    3.  You can add **Help Text** and **Instruction Value** if required.
    4.  **Default Value**: Move to **Advanced** section of the **Boolean Properties**. Now, click on the **True** checkbox.
    5.  Keep the **Non-localizable** field unchecked.
4.  Similarly, add another Boolean field with **Display Name** (for example, “Privacy Policies”) and set **Default Value** in the **Advanced** section of the **Boolean Properties** as **True**.
5.  Now, add a new **Boolean field** with **Display Name** (for example, “By clicking here you agree to our policies of service”).
6.  Click on the **Save and Close** button.

Now, [create an entry](https://www.contentstack.com/docs/headless-cms/create-an-entry/) and you will find the setup working. The default fields are predefined and can be seen as checked, while the undefined field is not checked as shown below.

![Boolean_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt92eee23b7afac782/6673d64b7b258dee6ac8be88/Boolean_3.png)

**Additional Resources**:

-   Contentstack enables you to hide/show a field when certain conditions are met using [Field Visibility Rules](/docs/headless-cms/about-field-visibility-rules).
-   If you are adding this field to the content type using our [CMA request](https://www.contentstack.com/docs/developers/apis/content-management-api/content-types#create-a-content-type), refer to the [JSON payload of the Boolean](/docs/headless-cms/json-schema-for-creating-a-content-type#boolean) field.
-   Editing any current field in existing Content Type might result in data loss. To prevent data loss, make sure to check out our [Content Type Change Management](/docs/headless-cms/content-type-change-management) guide.
