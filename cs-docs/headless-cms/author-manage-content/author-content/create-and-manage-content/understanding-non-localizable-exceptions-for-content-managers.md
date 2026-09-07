---
title: "Understanding Non-localizable Exceptions for Content Managers"
description: "Learn how non-localizable fields behave in Contentstack, including updates, instance management, and exceptions in Group (Multiple), Modular Blocks, and Global Fields."
url: /headless-cms/understanding-non-localizable-exceptions-for-content-managers
uid: bltab4bd6c0a8c03a1c
---

# Understanding Non-localizable Exceptions for Content Managers

## Understanding Non-localizable Exceptions for Content Managers

**Note:** This feature is plan based and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

The non-localizable property in Contentstack ensures that specific fields within a content type maintain consistency across all localized entries. You can also mark individual fields inside [**Group**](/docs/headless-cms/group/) **(Multiple)**, [**Modular Blocks**](/docs/headless-cms/modular-blocks/), and [**Global**](/docs/headless-cms/global/) fields as non-localizable.

There are, however, some scenarios under which the non-localizable field may work differently.

This guide explains how non-localizable fields behave in different scenarios and what exceptions to expect when managing localized content.

**Note**:

If your stack was recently upgraded to support **Non-localizable fields** in **Groups** (Multiple), **Modular Blocks**, or **Global** fields, note that this setting only affects **new content going forward**.

For example, if you had existing entries with localized content before enabling this feature, and then you mark a field (like Single Line Textbox) as **Non-localizable**—and that field is **inside** a **Modular Block,** **Group**, or **Global** field marked as **Multiple**—the system **does not change** the field’s behavior in those older entries. The localized versions will still allow editing of that field. This is considered a **Non-localizable exception**.

However, any **new instances** you add in the master locale entry after enabling the Non-localizable setting will behave as expected i.e., the field will be **read-only** in all localized versions.

Imagine you are managing a **"Product Details"** content type that includes a **Group (Multiple)** for product specifications. Inside this group, you have the following fields:

-   A single-line textbox for the product name.
-   A **non-localizable** single-line textbox for **SKU (Stock Keeping Unit)**.
-   A multi-line textbox for **Product Description**.

![Product Details CT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53ae9eafb0719520/680fd77f858ac96d6322ba21/Product_Details_CT.png)

The **SKU** field is crucial for product tracking and must remain consistent across all languages, so it is marked as **Non Localizable**.

**Additional Resource:** Learn more about [Managing Non-localizable Fields](/docs/headless-cms/managing-non-localizable-fields).

Now, let’s explore how this setup behaves in different scenarios.

1.  ## Updating a Non-localizable Field

    When you mark a field as non-localizable within a **Group (Multiple)**, **Modular Blocks**, or **Global** field, its data always comes from the master locale.

    **Note:** When localizing an entry via API, if a **Group (Multiple)**, **Modular Block,** or **Global** field contains a non-localizable field, you must include the field’s \_metadata.uid in the request payload to map that instance in child locale. Refer to the [Localize an Entry](/docs/developers/apis/content-management-api/entries#localize-an-entry) API reference for more information.

    -   Any updates made in the master locale automatically reflect in all localized versions.
    -   These fields remain **uneditable** in localized entries, ensuring uniformity across languages.

    **Example:** You update the SKU in the master locale (English) from **SKU-1234-XL** to **SKU-8765-XL**. This update instantly reflects in all localized versions (French, Spanish, German, etc.), preventing any SKU inconsistencies across regions.

    ![1. Updating a Non-localizable Field.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45d2dbef3a0cfd2a/680fd781733c4a9ff5329328/1._Updating_a_Non-localizable_Field.gif)
2.  ## Adding a New Instance in the Master Locale

    When you add a **new product instance** in the master locale, it automatically appears in localized entries **only if it contains a non-localizable field**.

    -   **Non-localizable fields** (like SKU) inherit data from the master locale.
    -   Other fields (like Product Name and Description) remain editable in localized versions.

    **Example:** A new product variant is added in the master locale (e.g., English). This instance automatically appears in all localized versions (e.g., French) with the **SKU field prefilled**, inheriting its value from the master locale. The **Product Name** and **Description** fields remain empty in the localized entries, allowing regional teams to add translations or localized content as needed.

    ![2. Adding a New Instance in the Master Locale.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt74a8cf745be8e58e/680fd78487550472232d0ccc/2._Adding_a_New_Instance_in_the_Master_Locale.gif)
3.  ## Adding a New Instance in a Localized Entry

    When you add a new instance in a **localized entry**, it does not inherit any data from the master locale. It remains local to that language.

    -   The instance exists **only in the localized version**.
    -   **Non-localizable fields become editable**, as they do not have a corresponding value in the master locale. In such a scenario, a tag “Non-localizable (Exception)” appears next to the field name.

    **Example:** You add a **region-specific product variant** directly in the **French** locale. Since this instance does not exist in the master locale, the SKU field is **editable** in this localized version—an exception to the usual non-localizable behavior.

    ![3. Adding a New Instance in a Localized Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt382abd93c6a530d8/680fd785484ca41ec98384f7/3._Adding_a_New_Instance_in_a_Localized_Entry.gif)
4.  ## Deleting an Instance from the Master Locale

    When you delete an instance from the master locale, the **localized versions retain the instance**, but the **non-localizable fields become editable**.

    This prevents data loss while giving regional teams flexibility in handling content.

    **Example:** The **Wireless Earbuds Pro** product is **discontinued** and deleted from the master locale. The instance remains in localized versions. The SKU field, previously **non-localizable**, becomes editable in these localized entries and retains the **last known value** from the master locale before deletion. This allows regional teams to repurpose or customize the entry as needed without losing critical product data.

    ![4. Deleting an Instance from the Master Locale.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1169b621a629dd1a/680fd787a61e01480ada7ba0/4._Deleting_an_Instance_from_the_Master_Locale.gif)
5.  ## Restoring a Deleted Master Locale Entry

    When you restore a deleted entry in the **master locale**, any **non-localizable fields in localized versions update automatically** with the restored data.

    **Example:** The **Wireless Earbuds Pro** master locale entry is mistakenly deleted and later restored. The SKU field, which was previously removed, is **reinstated across all localized versions**, ensuring consistency. However, localized content in editable fields remains unchanged.

    ![5. Restoring a Deleted Master Locale Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49ecff4de5ccb6b5/680fd7878638c94757ff1d67/5._Restoring_a_Deleted_Master_Locale_Entry.gif)

By leveraging the **non-localizable** property effectively, you can enhance content governance, improve localization accuracy, and maintain a seamless content experience for global audiences.
