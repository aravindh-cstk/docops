---
title: "[Author Content] - Understanding Non-localizable Exceptions for Content Managers"
description: Understanding how non-localizable fields behave in different scenarios and what exceptions to expect when managing localized content.
url: https://www.contentstack.com/docs/headless-cms/understanding-non-localizable-exceptions-for-content-managers
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Understanding Non-localizable Exceptions for Content Managers

This page explains how Contentstack’s non-localizable fields behave across localized entries, including exceptions that can occur in Groups (Multiple), Modular Blocks, and Global fields. Content managers and authors should use this guide when configuring or maintaining localized content to understand when non-localizable fields may become editable and how updates propagate from the master locale.

## Understanding Non-localizable Exceptions for Content Managers

**Note**: This feature is plan based and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

The non-localizable property in Contentstack ensures that specific fields within a content type maintain consistency across all localized entries. You can also mark individual fields inside [**Group**](../../developers/create-content-types/group.md)** (Multiple)**, [**Modular Blocks**](../../developers/create-content-types/modular-blocks.md), and [**Global**](../../developers/create-content-types/global.md) fields as non-localizable.

There are, however, some scenarios under which the non-localizable field may work differently.

This guide explains how non-localizable fields behave in different scenarios and what exceptions to expect when managing localized content.

**Note**:If your stack was recently upgraded to support **Non-localizable fields** in **Groups** (Multiple), **Modular Blocks**, or **Global** fields, note that this setting only affects **new content going forward**.

For example, if you had existing entries with localized content before enabling this feature, and then you mark a field (like Single Line Textbox) as **Non-localizable**—and that field is **inside** a **Modular Block,** **Group**, or **Global** field marked as **Multiple**—the system **does not change** the field’s behavior in those older entries. The localized versions will still allow editing of that field. This is considered a **Non-localizable exception**.

However, any **new instances** you add in the master locale entry after enabling the Non-localizable setting will behave as expected i.e., the field will be **read-only** in all localized versions.

Imagine you are managing a **"Product Details"** content type that includes a **Group (Multiple)** for product specifications. Inside this group, you have the following fields:
- A single-line textbox for the product name.
- A **non-localizable** single-line textbox for **SKU (Stock Keeping Unit)**.
- A multi-line textbox for **Product Description**.

The **SKU** field is crucial for product tracking and must remain consistent across all languages, so it is marked as **Non Localizable**.

**Additional Resource**: Learn more about [Managing Non-localizable Fields](../../developers/create-content-types/managing-non-localizable-fields.md).

Now, let’s explore how this setup behaves in different scenarios.

## Updating a Non-localizable Field

When you mark a field as non-localizable within a **Group (Multiple)**, **Modular Blocks**, or **Global** field, its data always comes from the master locale.

**Note**: When localizing an entry via API, if a **Group (Multiple)**, **Modular Block,** or **Global** field contains a non-localizable field, you must include the field’s `_metadata.uid` in the request payload to map that instance in child locale. Refer to the [Localize an Entry](../../../api-docs/api-detail/content-management-api.md#localize-an-entry) API reference for more information.

Any updates made in the master locale automatically reflect in all localized versions.
- These fields remain **uneditable** in localized entries, ensuring uniformity across languages.

**Example:** You update the SKU in the master locale (English) from **SKU-1234-XL** to **SKU-8765-XL**. This update instantly reflects in all localized versions (French, Spanish, German, etc.), preventing any SKU inconsistencies across regions.

## Adding a New Instance in the Master Locale

When you add a **new product instance** in the master locale, it automatically appears in localized entries **only if it contains a non-localizable field**.

**Non-localizable fields** (like SKU) inherit data from the master locale.
- Other fields (like Product Name and Description) remain editable in localized versions.

**Example:** A new product variant is added in the master locale (e.g., English). This instance automatically appears in all localized versions (e.g., French) with the **SKU field prefilled**, inheriting its value from the master locale. The **Product Name** and **Description** fields remain empty in the localized entries, allowing regional teams to add translations or localized content as needed.

## Adding a New Instance in a Localized Entry

When you add a new instance in a **localized entry**, it does not inherit any data from the master locale. It remains local to that language.

The instance exists **only in the localized version**.
- **Non-localizable fields become editable**, as they do not have a corresponding value in the master locale. In such a scenario, a tag “Non-localizable (Exception)” appears next to the field name.

**Example:** You add a **region-specific product variant** directly in the **French** locale. Since this instance does not exist in the master locale, the SKU field is **editable** in this localized version—an exception to the usual non-localizable behavior.

## Deleting an Instance from the Master Locale

When you delete an instance from the master locale, the **localized versions retain the instance**, but the **non-localizable fields become editable**.

This prevents data loss while giving regional teams flexibility in handling content.

**Example:** The **Wireless Earbuds Pro** product is **discontinued** and deleted from the master locale. The instance remains in localized versions. The SKU field, previously **non-localizable**, becomes editable in these localized entries and retains the **last known value** from the master locale before deletion. This allows regional teams to repurpose or customize the entry as needed without losing critical product data.

## Restoring a Deleted Master Locale Entry

When you restore a deleted entry in the **master locale**, any **non-localizable fields in localized versions update automatically** with the restored data.

**Example:** The **Wireless Earbuds Pro** master locale entry is mistakenly deleted and later restored. The SKU field, which was previously removed, is **reinstated across all localized versions**, ensuring consistency. However, localized content in editable fields remains unchanged.

By leveraging the **non-localizable** property effectively, you can enhance content governance, improve localization accuracy, and maintain a seamless content experience for global audiences.

## Common questions

**Q: When do non-localizable fields become editable in localized entries?**  
A: When you add a new instance in a localized entry, or when an instance is deleted from the master locale, non-localizable fields can become editable and may show “Non-localizable (Exception)”.

**Q: Do updates in the master locale always reflect in localized versions?**  
A: Any updates made in the master locale automatically reflect in all localized versions for non-localizable fields whose data comes from the master locale.

**Q: Does enabling non-localizable fields in Groups (Multiple), Modular Blocks, or Global fields affect existing entries?**  
A: No. This setting only affects new content going forward; older entries may continue to allow editing in localized versions, which is considered a Non-localizable exception.

**Q: What is required when localizing an entry via API that includes non-localizable fields inside Group (Multiple), Modular Block, or Global fields?**  
A: You must include the field’s `_metadata.uid` in the request payload to map that instance in child locale.