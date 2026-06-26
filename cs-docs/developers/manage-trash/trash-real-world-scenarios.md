---
title: "[Set Up Your Project] - Trash Real-world Scenarios"
description: Trash Real-world Scenarios
url: https://www.contentstack.com/docs/headless-cms/trash-real-world-scenarios
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Trash Real-world Scenarios

This page explains how Contentstack Trash behaves in real-world restore scenarios (content types, entries, global fields, assets, and asset folders). It is intended for developers and stack administrators who need to understand restore dependencies and potential data loss when restoring deleted items within the 14-day Trash retention window.

## Trash Real-world Scenarios

When you delete an item from Contentstack, the item is moved to the Trash and remains there for 14 days before it is permanently deleted. Within this duration, you can restore the deleted item to the stack in its original condition.

Deleted items such as an entry can be linked to its parent content type, while an asset can be linked to its parent asset folder. To be able to restore an entry or asset, you may need to first restore the parent content type or asset folder. Restoring just a few entries or assets may result in data loss. Learn more about restoring deleted items from the Trash.

Let us look at a few real-world scenarios to understand what happens when we try to restore any of these deleted items.

Consider a scenario where an ecommerce company maintains details for multiple appliances in the “Appliances” content type. The “Appliances” content type contains a Reference field named “Categories” that refers to the “Category” content type. This field helps denote which category the appliance belongs to. The “Category” content type comprises the following appliance categories (entries):
- Kitchen Appliances
- Electronics

Now, suppose if the “Appliances” content type comprises the following appliances (entries):
- Apple iMac Laptop (Electronics)
- Aquasure Water Purifier (Kitchen Appliance)
- Sharp LED Smart TV (Electronics)
- Glenmark Cooktop (Kitchen Appliance)

Each appliance (entry) is equipped with high-quality assets to clearly denote their structural elements. All of these images are stored inside the “Appliance Images” folder. The kitchen appliances are placed within the “Kitchen Appliance Images” subfolder, while the electronics images are placed within the “Electronics Images” subfolder.

In addition, the “Appliances” content type refers to the “Dealer Address” Global field. This field provides the address of the local company that supplies a specific appliance.

## When the “Appliances” content type is deleted

If you delete the “Appliance” (parent) content type intentionally or unintentionally, then the following entries will be moved to the Trash along with this content type:
- Apple iMac Laptop (Electronics)
- Aquasure Water Purifier (Kitchen Appliance)
- Sharp LED Smart TV (Electronics)
- Glenmark Cooktop (Kitchen Appliance)

However, keep in mind that the assets and global fields referred in the deleted content type will still exist independently within the stack.

To restore the “Appliances” content type, you can go to **Trash** > **Content Types** and click on **Restore** to the right hand side of the content type. You can choose whether you want to restore the content type along with its entries or not. When you restore the content type, these assets will once again be visible in the entries that referred to them.

**Note**: You need to restore the content type first to be able to restore its corresponding entries.

## When the “Category” content type is deleted

If you delete the “Category” content type, then it will be moved to the Trash. Subsequently, all references of this content type within the “Appliances” content type will also be removed. This would result in data loss.

To restore the “Category” content type, you can go to **Trash** > **Content Types** and click on **Restore** to the right hand side of the content type. You can choose whether you want to restore the content type along with its entries or not.

**Note**: You need to restore the content type first to be able to restore its corresponding entries.

When you go to the Trash and restore the deleted content type back along with its entries, then you will notice that the categories assigned to the different appliances are once again visible, as it is, in the entries of the “Appliances” content type. The referenced data is once again visible within the parent content type.

## When the “Dealer Address” global field is deleted

If you delete the “Dealer Address” Global field, then the global field is moved to the Trash. This means that the data entered for the Global field within the entries of the “Appliances” content type will no longer exist. Subsequently, the schema of the Global field will no longer be available in the “Appliances” content type.

To restore the “Dealer Address” Global field, you can go to **Trash** > **Global Fields** and click on **Restore** to the right hand side of the field.

However, when you restore the “Dealer Address” Global field to the stack, only the field schema is recovered within the content type that refers to it. The field data is not restored. You will have to manually enter data for the “Dealer Address” Global field within each entry.

## When the “Electronics” entry is deleted

If you delete the “Electronics” entry from the “Category” content type, then that entry and its content will be moved to the Trash. This will remove any reference of the “Electronics” category in entries of the “Appliances” content type.

To restore the “Electronics” entry, you can go to **Trash** > **Entries** and click on **Restore** to the right hand side of the entry. Once restored, the entry returns back to the content type just as it was before you had deleted it. The references of the “Electronics” entry will be visible again in the “Appliances” content type.

You can also open the entry and **edit** data before you restore it. When you click on **Restore**, the latest updated version of the entry will be restored to the content type. The latest version of the referenced entry will be visible in the content types that refer to it.

## When an asset from the “Kitchen Appliance Images” Folder is deleted

If you delete an asset from the “Kitchen Appliance Images” folder, then that asset will be moved to the Trash. The asset will be removed from all the entries of the “Appliances” content type that it is a part of.

To restore the asset, you can go to **Trash** > **Assets** and click on **Restore** to the right hand side of the asset.  Once restored, the asset returns back to the content type just as it was before you had deleted it.

**Note**: You need to restore the asset folder first to be able to restore its corresponding assets.

You can also **edit** the asset details before you restore it. Change the name or description of the image, add a suitable image tag, or simply replace the existing image with a better one. When you click on **Restore**, the latest updated version of the asset will be restored to the content type. The latest version of the asset will be visible in the entries that it was a part of again.

## When the “Electronics Images” asset folder is deleted

If you delete the “Electronics” asset folder, then that folder will be moved to the Trash along with all the assets that were part of it. The underlying assets will be removed from all the entries of the “Appliances” content type that they were a part of.

To restore the asset folder, you can go to **Trash** > **Assets** and click on **Restore** to the right hand side of the asset folder. You can choose whether you want to restore the asset folder along with its assets or not.

Once restored, the asset folder returns back to the content type along with all its assets, just as it was before you had deleted it.

**Note**: You cannot edit the details of an asset folder while restoring it from the Trash.

## When the “Appliance Images” asset folder is deleted

If you delete the “Appliance Images” asset folder, then that folder will be moved to the Trash along with all the assets and subfolders that were part of it. The underlying assets will be removed from all the entries of the “Appliances” content type that they were a part of.

To restore the asset folder, you can go to **Trash** > **Assets** and click on **Restore** to the right hand side of the asset folder. You can choose whether you want to restore the asset folder along with its assets and subfolders or not.

**Note**: You need to restore the parent asset folder first to be able to restore its corresponding assets and subfolders.

Once restored, the asset folder returns back to the content type along with all its assets and subfolders, just as it was before you had deleted it.

**Note**: You cannot edit the details of an asset folder while restoring it from the Trash.

## Common questions

### How long do deleted items remain in the Trash?
When you delete an item from Contentstack, the item is moved to the Trash and remains there for 14 days before it is permanently deleted.

### Do I need to restore parent items before restoring child items?
To be able to restore an entry or asset, you may need to first restore the parent content type or asset folder.

### What happens to references when a referenced content type or entry is deleted?
If you delete the “Category” content type, then it will be moved to the Trash. Subsequently, all references of this content type within the “Appliances” content type will also be removed. This would result in data loss.

### Is Global field data restored when restoring a deleted Global field?
When you restore the “Dealer Address” Global field to the stack, only the field schema is recovered within the content type that refers to it. The field data is not restored. You will have to manually enter data for the “Dealer Address” Global field within each entry.

Filename: set-up-your-project-trash-real-world-scenarios.md