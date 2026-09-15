---
title: "Import Item in Knowledge Vault"
description: "Learn how to import items into your Knowledge Vault to keep your content structured, current, and consistent across environments, all in one place."
url: /brand-kit/import-item-in-knowledge-vault
uid: bltefe485d92c466d86
---

# Import Item in Knowledge Vault

## Import Item in Knowledge Vault

Import previously exported items into the Knowledge Vault to restore configurations, migrate setups between environments, or reuse saved data. This ensures consistency and simplifies setup, especially when managing multiple stacks or projects.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Brand Kit-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions, or as [Collaborator](/docs/brand-kit/invite-collaborators)

    **Note:** Only Brand Kit **Owner** or **Admin** can import items into the Knowledge Vault.

-   An existing [Knowledge Vault Item](/docs/brand-kit/add-item-in-knowledge-vault)

## What You Will Learn

-   How to import a previously exported Knowledge Vault item from a JSON file.

-   How to reuse Knowledge Vault items across different organizations.


## Steps for Execution

To import an item in Knowledge Vault, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to App Switcher in the top-right corner and select **Brand Kit**.
2.  Select the **Brand Kit** in which you want to import a Knowledge Vault item.
3.  Click **Knowledge Vault**.
4.  To import an item in the Knowledge Vault, click the **\+ New Item** button and select the **Import** option.![4-Import-Knowledge-Vault-Item-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75bae38102525157/687fb9e626a74d052e25754c/4-Import-Knowledge-Vault-Item-Button.png)
5.  In the **Import** modal, click the **Upload File** to browse and select the .json file containing your Knowledge Vault item, then click **Proceed**.![5-Knowledge-Vault-Item-Import-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5d47353d20127a54/687fb9e66668e3476e5767ba/5-Knowledge-Vault-Item-Import-Modal.png)

    **Note**:

    -   Import supports only valid JSON files that follow the Contentstack Knowledge Vault Item format.
    -   You can import Knowledge Vault items across different organizations to reuse configurations and maintain consistency.

    You will get a success message after the item is imported.

    ![6-Knowledge-Vault-Item-Imported](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11cfcba4512da284/687fb9e6de171665b89bd823/6-Knowledge-Vault-Item-Imported.png)

## Related Resource

-   [Knowledge Vault API: Import Content Item](/docs/developers/apis/knowledge-vault-api/knowledge-vault#import-content-item)
