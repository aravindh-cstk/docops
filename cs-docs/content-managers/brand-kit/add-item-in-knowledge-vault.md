---
title: "[Brand Kit] - Add Item in Knowledge Vault"
description: Add items into the Brand Kit Knowledge Vault using the UI, including manual text entry and file upload.
url: https://www.contentstack.com/docs/brand-kit/add-item-in-knowledge-vault
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Brand Kit] - Add Item in Knowledge Vault

This page explains how to add items into the Brand Kit Knowledge Vault in Contentstack using the UI. It is intended for Content Managers and Organization/Stack Owners or Admins who manage Brand Kit content and need to store or organize items in the Knowledge Vault.

## Add Item in Knowledge Vault

The Knowledge Vault provides a centralized repository for storing, managing, and accessing content across various channels.

You can easily add items into the Knowledge Vault by using its intuitive UI, the [Brand Kit Connector](/docs/developers/automation-hub-connectors/brand-kit/) in Automate, or the [Knowledge Vault APIs](../../../api-docs/api-detail/brand-kit-management-api.md#knowledge-vault).

In this guide, we will learn how to add items into the Knowledge Vault using the UI.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to Organization that has Brand Kit enabled
- Access to the Contentstack Organization/Stack as the [Owner](../../developers/organization/organization-roles.md#organization-owner)/[Admin](../../developers/organization/organization-roles.md#organization-admin)

## Steps for Execution

To add an item in Brand Kit Knowledge Vault, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

- In the left navigation panel, click the **Brand Kit** icon.![1-Brand-Kit-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2793aa12bafb2903/6656329d02c997c334b84fcb/1-Brand-Kit-Icon.png)
- Select the **Brand Kit** in which you want to add a Knowledge Vault item.![2-Knowledge-Vault-Select-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e988b4475836b18/66d86365d742973a89622ac1/2-Knowledge-Vault-Select-Brand-Kit.png)
- Click **Knowledge Vault** from the left navigation panel, then click the **+ New Item** button and select **Add Manually** to add a new item to the Knowledge Vault.  
  **Note**: Only Brand Kit Owners and Admins can add items to the Knowledge Vault.  

  **Additional Resource**: To import an item in Knowledge Vault, refer to the [Import Item in Knowledge Vault](./import-item-in-knowledge-vault.md) document.
- In the **Add Item** modal, you have two options to add items into the Knowledge Vault:![4-Knowledge-Vault-Add-Item](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted4d956928c93975/66d86366bbafa70ee55d1036/4-Knowledge-Vault-Add-Item.png)

  **Manual Text Entry**: Select **Manual Text Entry** and click **Add** to directly add text in the corresponding screen that opens. Enter **Name**, **Text Content** in the editor, and click **Save** to add the item in the Knowledge Vault.![5-Knowledge-Vault-Add-Item-Via-Manual-Text-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54975859eef6c2f9/66d86430e13d362105fcac3c/5-Knowledge-Vault-Add-Item-Via-Manual-Text-Entry.png)
- **File Upload**: Select **File Upload** to upload a text document and click **Add** to proceed to the corresponding screen. Now, perform the following steps:  
  Enter the **Name** and upload a PDF or TXT file. After uploading the file, the text is extracted from the uploaded document using the **Text Generation** process.

  **Note**:

  The file must not be empty and must contain some textual content.
- If the **Name** field is empty, an auto-generated title will be applied to the item upon saving.
- If the Text Generation process fails, click the **Retry** button to reinitiate the process.
- After successful text extraction, review the text in the **Preview File Text** field. You can also update the text.![7-Knowledge-Vault-Add-Item-File-Upload-Preview](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt558033b95b0bc394/66ebd7498e312b02ba20c0c1/7-Knowledge-Vault-Add-Item-File-Upload-Preview.png)
- Click **Save** to add the item in the Knowledge Vault.![8-Knowledge-Vault-Add-Item-File-Upload-Save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c59fd14adcdac2c/66ebd74a36f3bd2027406cf9/8-Knowledge-Vault-Add-Item-File-Upload-Save.png)
- You can also add the subfolders for grouping items in Knowledge Vault by clicking the **Folder** icon from the top-right corner.  
  In the **New Folder** modal, enter the **Name** and click **Save** to create a new folder.

  Now you can add items in the newly created folder.
- You can also move the items in a folder or from one folder to another. Click the corresponding vertical ellipses under the **Actions** tab, and then click the **Move To** option.  
  In the **Move To** modal, you can search for a folder, apply filters, or add a new folder to move the items respectively.

  Select the preferred folder and then click the **Move here** button to relocate the item to the selected folder.
- After successfully adding items and folders, you can view them in the Knowledge Vault dashboard.![Knowledge-Vault-Items-And-Subfolders](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd5408958ebcbcf2/6800f1eae696da87e35a4869/Knowledge-Vault-Items-And-Subfolders.png)

## Common questions

### Who can add items to the Knowledge Vault?
Only Brand Kit Owners and Admins can add items to the Knowledge Vault.

### What file types can I upload when adding an item?
You can upload a PDF or TXT file.

### What happens if I leave the Name field empty?
If the **Name** field is empty, an auto-generated title will be applied to the item upon saving.

### What should I do if the Text Generation process fails?
If the Text Generation process fails, click the **Retry** button to reinitiate the process.