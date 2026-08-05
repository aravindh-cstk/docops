---
title: "[Brand Kit] - Import Item in Knowledge Vault"
description: Import previously exported items into the Knowledge Vault to restore configurations, migrate setups between environments, or reuse saved data.
url: https://www.contentstack.com/docs/brand-kit/import-item-in-knowledge-vault
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Brand Kit] - Import Item in Knowledge Vault

This page explains how to import previously exported Knowledge Vault items in Contentstack Brand Kit. It is intended for Brand Kit Owners/Admins and collaborators who need to restore configurations, migrate setups between environments, or reuse saved data across stacks or projects.

## Import Item in Knowledge Vault

Import previously exported items into the Knowledge Vault to restore configurations, migrate setups between environments, or reuse saved data. This ensures consistency and simplifies setup, especially when managing multiple stacks or projects.

**Note**: Only Brand Kit Owner or Admin can import items into the Knowledge Vault.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Organization that has Brand Kit enabled
- Access to the Contentstack Organization/Stack as the [Owner](../../developers/organization/organization-roles.md#organization-owner)/[Admin](../../developers/organization/organization-roles.md#organization-admin)
- Access to Brand Kit as an invited [Collaborator](./invite-collaborators.md)

## Steps for Execution

**Note**: This guide assumes that you have already [added items in the Knowledge Vault](./add-item-in-knowledge-vault.md) within your Brand Kit.

To import an item in Knowledge Vault, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the left navigation panel, click the **Brand Kit** icon.![1-Brand-Kit-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2793aa12bafb2903/68a78e6d5555ae37ee9b0d79/1-Brand-Kit-Icon.png)
- Select the **Brand Kit** in which you want to import a Knowledge Vault item.![2-Knowledge-Vault-Select-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdefa55036c9dd703/68a78cdfcbb08154f864289c/2-Knowledge-Vault-Select-Brand-Kit.png)
- Click **Knowledge Vault** from the left navigation panel.![3-Knowledge-Vault-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a6f8e53ab3c8864/66d87b10f787522a7bb3cf0b/3-Knowledge-Vault-Icon.png)
- To import an item in the Knowledge Vault, click the **+ New Item** button and select the **Import** option.![4-Import-Knowledge-Vault-Item-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75bae38102525157/687fb9e626a74d052e25754c/4-Import-Knowledge-Vault-Item-Button.png)
- In the **Import** modal, click the **Upload File** to browse and select the .json file containing your Knowledge Vault item, then click **Proceed**.

      **Note**:

        Import supports only valid JSON files that follow the Contentstack Knowledge Vault Item format.
- You can import Knowledge Vault items across different organizations to reuse configurations and maintain consistency.

    You will get a success message after the item is imported.

## Common questions

**Q: Who can import items into the Knowledge Vault?**  
A: Only Brand Kit Owner or Admin can import items into the Knowledge Vault.

**Q: What file type is supported for import?**  
A: Import supports only valid JSON files that follow the Contentstack Knowledge Vault Item format.

**Q: Can I import Knowledge Vault items across different organizations?**  
A: Yes, you can import Knowledge Vault items across different organizations to reuse configurations and maintain consistency.