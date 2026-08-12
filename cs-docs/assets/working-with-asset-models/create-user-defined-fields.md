---
title: "Create User-Defined Fields"
description: "Efficiently manage asset metadata in Contentstack by creating custom fields. Enhance asset searchability and categorization with user-defined attributes."
url: /assets/create-user-defined-fields
---

# Create User-Defined Fields

## Create User-Defined Fields

A field is a user-defined attribute used to capture specific details, such as Campaign Name, Copyright Details, or Usage Rights Expiration. These details help teams search, categorize, and analyze assets with greater accuracy.

Fields are the building blocks of asset modeling. Once created, you can associate them with one or more asset types and apply them consistently across your entire asset library. This ensures that your metadata is structured, searchable, and aligned with your business workflows.

To create user-defined fields within Assets, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Navigate to **Assets** through “App Switcher” and select the **Fields** tab.
2.  Click **\+ New Field**.
3.  In the **General** section, enter the following:
    -   **Name** (required): A unique name for the field with a maximum of **50 characters**.
    -   **UID** (required): A unique field identifier that uses only letters, numbers, and underscores.
        
        **Note:** Once you save the field, you cannot change the UID.
        
    -   **Description** (optional): A short explanation of the purpose of the field.
4.  In the **Fields** section, click the **Field Type** dropdown and choose a field as needed.
    
    **Additional Resource:** Refer to the [Field Types](/docs/assets/field-types) document for more information.
    
5.  Use the **Field Properties** panel, which opens on the right, to configure the field behaviour. The available options vary by field type and can include:
    -   **Placeholder Text**: Enter sample text to show as a prompt in the field.
    -   **Instruction Text**: Guide users on how to fill the field.
    -   **Help Text**: Provide context that appears with the control.
    -   **Default Value**: Set a suggested value that appears by default.
    -   **Is Mandatory?**: Require this field during asset creation or editing.
    -   **Multiple Instances**: Allow users to enter more than one value (for supported types).
    -   **Number of Characters**: Define the minimum and maximum character length. Use the stepper to adjust. Set to 0 for no limit.
    -   **Validation (Regex)**: Define a regular expression to enforce a specific input format.
    -   **Validation Error Message**: Provide a clear message that appears when the value does not meet the validation (regex) pattern. Example: “Enter a 4-digit year, e.g., 2026.”
6.  Click **Save Field**.

Your new field is created and is available for reuse across asset types and field groups within Assets. You can edit field properties (except UID) or delete the field if it is not in use.

**Tips and Best Practices**

-   Use clear, purpose-driven names, e.g., “Image Properties” or “Model Release Date”.
-   Keep UIDs short and consistent, e.g., campaign\_name, model\_release\_date.
-   Set fields to mandatory for critical governance data, such as rights and expiration dates.
-   Use Group field types to organize metadata logically, e.g., resolution, color\_profile, and dpi under “Image Properties”.

## Use Case: Fields for 3D Models

When you create a custom asset type for a 3MF 3D Model, you will need specialized fields. Examples:

-   **Product SKU** (Single Line Textbox, Mandatory): Ensures each 3D model links to a product in your catalog.
-   **Model Dimensions** (Single Line Textbox): Captures physical scale, for example, 10x10x15 cm.
-   **Creator** (Single Line Textbox): Tracks the creator of the model.
-   **License Expiration** (Date, Mandatory): Prevents unauthorized use of expired designs.

**Note:** When fields are marked as mandatory:

-   For existing assets, the default value is populated.
-   For new uploads, users must add the field value to complete the upload.
