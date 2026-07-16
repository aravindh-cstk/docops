---
title: "[Set Up Your Project] - Boolean"
description: Documentation for the Boolean input field, its properties, and real-world scenarios in Contentstack content types.
url: https://www.contentstack.com/docs/headless-cms/boolean
product: Contentstack
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Boolean

This page explains the **Boolean** input field in Contentstack, including what it does, which properties you can configure, and practical examples for using it in content types. It is intended for developers creating or configuring content types and should be used when you need a true/false toggle in entries.

## Boolean

The **Boolean **input [field](./about-fields.md) enables users to input a “true” or “false” value in an [entry](../../content-managers/author-content/about-entries.md). When you [add this field in content type](../create-custom-fields/use-custom-field-in-content-types.md), it reflects as a toggle switch on the entry page.

This field possesses certain [properties](./about-field-properties.md) that you can change at any time as per your needs. The properties that can be modified are “[Display Name](./display-name.md),” “[Unique ID](./unique-id.md),” “[Instruction Value](./instruction-value.md),” “[Help Text](./help-text.md),” “[Default Value](./default-value.md),” and “[Non-localizable](./non-localizable.md).”

After adding this field in content type, you will see it on your entry page as shown below.

## Boolean Field - Real World Scenarios

Let's understand how we can use the Boolean field in the content type with a couple of use cases.

- Clickwrap Boolean Field
- Default Boolean Value

## Example 1 - Clickwrap Boolean Field

Using the Boolean field let's create a clickwrap field to obtain consent from users over the terms and conditions or privacy policies of your company’s legal agreement.

In this example, the users will have the liberty to choose to agree or disagree with the policies of your company.

Follow the steps to create a clickwrap Boolean field:

- Log in to your [Contentstack account](https://www.contentstack.com/login/), [create a stack](../set-up-stack/create-a-new-stack.md), and [add a new content type](./create-a-content-type.md) to it.
- Click on the "**+" **symbol (**Insert a field**) and add the **Boolean** field along with other required fields.
- When adding the Boolean field, under the **Boolean Properties** section add the following details:**Display Name**: Add a display name (For example, “I agree”)
- **Unique ID**:* Default value*
- **Help Text**: You can provide additional information about the field (for example, "Visit our website to learn more about our privacy policies")
- **Instruction Value**: It helps you add instructions to this field (for example, “Confirm by checking if you have read and agreed to our Terms and Conditions”)
- Click on the **Save and Close** button.
- Finally, [create an entry](../../content-managers/author-content/create-an-entry.md) to see the Boolean field in action.![Boolean_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcde0edc9a154c031/6673d53404c62958526f5468/Boolean_2.png)

## Example 2 - Default Boolean Value

Contentstack allows you to have a **Default Value** of the radio button or Boolean field. This default button helps users to pre-define the value of the Boolean field. The value entered here will appear by default while creating an entry for this content type.

Follow the steps to create a default Boolean field:

- Go to the stack and create a content type similar to the previous example.
- Now, insert the fields of your choice and also add the **Boolean **field.
- Go to the **Boolean Properties **section of the Boolean field and add the following details:**Display Name**: Add a display name (For example, “Terms and Conditions”)
- **Unique ID**: *Default value*
- You can add **Help Text **and **Instruction Value** if required.
- **Default Value**: Move to **Advanced** section of the **Boolean Properties**. Now, click on the **True** checkbox.
- Keep the **Non-localizable **field unchecked.
- Similarly, add another Boolean field with **Display Name** (for example, “Privacy Policies”) and set **Default Value** in the **Advanced** section of the **Boolean Properties** as **True**.
- Now, add a new** Boolean field **with **Display Name** (for example, “By clicking here you agree to our policies of service”).
- Click on the **Save and Close **button.

Now, [create an entry](../../content-managers/author-content/create-an-entry.md) and you will find the setup working. The default fields are predefined and can be seen as checked, while the undefined field is not checked as shown below.

## Additional Resources

- Contentstack enables you to hide/show a field when certain conditions are met using [Field Visibility Rules](./about-field-visibility-rules.md).
- If you are adding this field to the content type using our [CMA request](../../../api-docs/api-detail/content-management-api.md#create-a-content-type), refer to the [JSON payload of the Boolean](./json-schema-for-creating-a-content-type.md#boolean) field.
- Editing any current field in existing Content Type might result in data loss. To prevent data loss, make sure to check out our [Content Type Change Management](../content-modeling/content-type-change-management.md) guide.

## Common questions

**How does the Boolean field appear to entry editors?**  
When you add this field in content type, it reflects as a toggle switch on the entry page.

**Which properties of the Boolean field can be modified?**  
The properties that can be modified are “Display Name,” “Unique ID,” “Instruction Value,” “Help Text,” “Default Value,” and “Non-localizable.”

**Can I predefine the value of a Boolean field for new entries?**  
Yes, Contentstack allows you to have a **Default Value** of the radio button or Boolean field, and the value entered will appear by default while creating an entry for this content type.

**Where can I find the JSON payload/schema for the Boolean field when using CMA?**  
Refer to the [JSON payload of the Boolean](./json-schema-for-creating-a-content-type.md#boolean) field.