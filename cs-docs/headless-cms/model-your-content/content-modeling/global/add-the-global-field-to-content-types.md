---
title: "Add the Global Field to Content Types"
description: "Learn how to add a Global field to content types in Contentstack, modify its properties, and understand its impact on field count."
url: /headless-cms/add-the-global-field-to-content-types
---

# Add the Global Field to Content Types

## Add the Global Field to Content Types

Global fields in Contentstack help you reuse structured sets of fields across multiple content types, ensuring consistency and reducing redundancy.

To add a Global field to your content type, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Click the **Content Models** icon to view the available content types.
2.  Select the content type you want to edit.
3.  Click the “+” (Insert a field) icon and select **Global** from the list.
4.  To modify the properties of the Global field, click the **Properties** icon. This opens a modal with two tabs: **Basic** and **Advanced**.
5.  In the **Basic** tab, under **Select Global Field**, choose your Global field. The selected field appears in your content type as a field, containing the required sub-fields.
    
    **Note:** You can add up to **25 Global** fields in a content type.
    
6.  In the **Basic** tab, you can modify the following properties of a Global field at any time:
    1.  [**Display Name**](/docs/headless-cms/display-name): Defines how the field appears in the UI.
    2.  [**Unique ID**](/docs/headless-cms/unique-id): A system-generated identifier for the field.
    3.  [**Instruction Value**](/docs/headless-cms/instruction-value): Guides users in filling the field.
    4.  [**Help Text**](/docs/headless-cms/help-text): Displays additional information to assist users.
7.  In the **Advanced** tab, you can configure the following properties:
    1.  [**Mandatory**](/docs/headless-cms/mandatory): Marks the field as required. Content managers must provide a value, and the entry cannot be published until the field is filled.
    2.  [**Multiple**](/docs/headless-cms/multiple): Allows multiple instances for the field.
    3.  [**Non-localizable**](/docs/headless-cms/non-localizable): Set the field’s data only in the master-language entry.
    4.  [**Show as Tab**](/docs/headless-cms/show-as-tab): Organizes entry fields into separate tabs within the entry editor. This is a plan-based feature and may not be available to all users.
        
        ![Add the Global Field to Content Types](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e5f5011327ebaee/680a0d0cf2b32efed2658c77/add-global-fields-to-the-content.gif)
        

**Note:**

-   Any changes to a Global field, its subfields, or properties automatically apply to all content types using the field.
-   Adding a Global field to a content type counts as **one field**, but all its subfields contribute to the total field count.

By adding a Global field, you ensure consistency, reduce duplication, and simplify updates.
