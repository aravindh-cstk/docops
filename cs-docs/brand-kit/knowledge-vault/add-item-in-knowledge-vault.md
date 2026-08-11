---
title: "Add Item in Knowledge Vault"
description: "Learn to store, manage, access content across channels with Contentstack's Knowledge Vault and add text or upload PDFs."
url: /brand-kit/add-item-in-knowledge-vault
---

# Add Item in Knowledge Vault

## Add Item in Knowledge Vault

The Knowledge Vault provides a centralized repository for storing, managing, and accessing content across various channels.

You can easily add items into the Knowledge Vault by using its intuitive UI, the [Brand Kit Connector](/docs/agent-os/brand-kit/) in Automate, or the [Knowledge Vault APIs](/docs/developers/apis/knowledge-vault-api/knowledge-vault).

In this guide, we will learn how to add items into the Knowledge Vault using the UI.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Brand Kit-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to add an item using Manual Text Entry.
    
-   How to add an item by uploading a PDF or TXT file.
    
-   How to organize items into folders.
    
-   How to move items between folders.
    

## Steps for Execution

To add an item in Brand Kit Knowledge Vault, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to App Switcher in the top-right corner and select **Brand Kit**.
2.  Select the **Brand Kit** in which you want to add a Knowledge Vault item.
3.  Click **Knowledge Vault**.
    
    **Additional Resource:** To import an item in Knowledge Vault, refer to the [Import Item in Knowledge Vault](/docs/brand-kit/import-item-in-knowledge-vault) document.
    
4.  In the **Add Item** modal, you have two options to add items into the Knowledge Vault:![4-Knowledge-Vault-Add-Item](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted4d956928c93975/66d86366bbafa70ee55d1036/4-Knowledge-Vault-Add-Item.png)
    1.  **Manual Text Entry**: Select **Manual Text Entry** and click **Add** to directly add text in the corresponding screen that opens. Enter **Name**, **Text Content** in the editor, and click **Save** to add the item in the Knowledge Vault.![5-Knowledge-Vault-Add-Item-Via-Manual-Text-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54975859eef6c2f9/66d86430e13d362105fcac3c/5-Knowledge-Vault-Add-Item-Via-Manual-Text-Entry.png)
    2.  **File Upload**: Select **File Upload** to upload a text document and click **Add** to proceed to the corresponding screen. Now, perform the following steps:
        1.  Enter the **Name** and upload a PDF or TXT file. After uploading the file, the text is extracted from the uploaded document using the **Text Generation** process.![6-Knowledge-Vault-Add-Item-File-Upload-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta13bb3163bf617f9/66ebd7490cec2051acf3c0c4/6-Knowledge-Vault-Add-Item-File-Upload-Details.png)
            
            **Note**:
            
            -   The file must not be empty and must contain some textual content.
            -   If the **Name** field is empty, an auto-generated title will be applied to the item upon saving.
            
        2.  If the Text Generation process fails, click the **Retry** button to reinitiate the process.
        3.  After successful text extraction, review the text in the **Preview File Text** field. You can also update the text.![7-Knowledge-Vault-Add-Item-File-Upload-Preview](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt558033b95b0bc394/66ebd7498e312b02ba20c0c1/7-Knowledge-Vault-Add-Item-File-Upload-Preview.png)
        4.  Click **Save** to add the item in the Knowledge Vault.![8-Knowledge-Vault-Add-Item-File-Upload-Save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c59fd14adcdac2c/66ebd74a36f3bd2027406cf9/8-Knowledge-Vault-Add-Item-File-Upload-Save.png)
5.  You can also add the subfolders for grouping items in Knowledge Vault by clicking the **Folder** icon from the top-right corner.![Knowledge-Vault-Folder](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f30d1cf8acdfb7b/6800f1e99dd5cf88899a2257/Knowledge-Vault-Folder.png)
    
    In the **New Folder** modal, enter the **Name** and click **Save** to create a new folder.
    
    ![Knowledge-Vault-Folder-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt305191d023b6310e/6800f1e90bdcf1c18e5f897c/Knowledge-Vault-Folder-Modal.png)
    
    Now you can add items in the newly created folder.
    
6.  You can also move the items in a folder or from one folder to another. Click the corresponding vertical ellipses under the **Actions** tab, and then click the **Move To** option.![Knowledge-Vault-Items-Move-To-Option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae93aa19291d651f/6800f1ea15d4c54621922b22/Knowledge-Vault-Items-Move-To-Option.png)
    
    In the **Move To** modal, you can search for a folder, apply filters, or add a new folder to move the items respectively.
    
    ![Knowledge-Vault-Items-Filter-And-Add-Folder](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cdca49a2063d348/6800f1e9e7161ece7aa29b44/Knowledge-Vault-Items-Filter-And-Add-Folder.png)
    
    Select the preferred folder and then click the **Move here** button to relocate the item to the selected folder.
    
    ![Knowledge-Vault-Items-Move-Here](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt92fc2beee5678add/6800f1e90bdcf153935f8980/Knowledge-Vault-Items-Move-Here.png)
7.  After successfully adding items and folders, you can view them in the Knowledge Vault dashboard.![Knowledge-Vault-Items-And-Subfolders](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd5408958ebcbcf2/6800f1eae696da87e35a4869/Knowledge-Vault-Items-And-Subfolders.png)

## Related Resource

-   [Knowledge Vault API: Ingest Content Item](/docs/developers/apis/knowledge-vault-api/knowledge-vault#ingest-content-item)
