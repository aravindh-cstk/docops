---
title: "[Brand Kit] - Export Item from Knowledge Vault"
description: Export items from the Knowledge Vault to download a copy of the content in JSON format.
url: https://www.contentstack.com/docs/brand-kit/export-item-from-knowledge-vault
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - administrators
version: latest
last_updated: 2026-03-25
---

# [Brand Kit] - Export Item from Knowledge Vault

This page explains how to export items from the Brand Kit Knowledge Vault in Contentstack as JSON files. It is intended for content managers and organization/stack admins who need to back up, share, or migrate Knowledge Vault items between environments.

## Export Item from Knowledge Vault

You can export items from the Knowledge Vault to download a copy of the content in JSON format. This feature allows you to back up data, share configurations, or migrate items between environments readily.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Organization that has Brand Kit enabled
- Access to the Contentstack Organization/Stack as the [Owner](../../developers/organization/organization-roles.md#organization-owner)/[Admin](../../developers/organization/organization-roles.md#organization-admin)
- Access to Brand Kit as an invited [Collaborator](./invite-collaborators.md)

## Steps for Execution

**Note**: For this guide, we have assumed that you have [added items in the Knowledge Vault](./add-item-in-knowledge-vault.md) inside your Brand Kit.

To export a Knowledge Vault item, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the left navigation panel, click the **Brand Kit** icon.![1-Brand-Kit-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2793aa12bafb2903/68a78e6d5555ae37ee9b0d79/1-Brand-Kit-Icon.png)
- Select the **Brand Kit** containing the Knowledge Vault item you want to export.![2-Knowledge-Vault-Select-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdefa55036c9dd703/68a78cdfcbb08154f864289c/2-Knowledge-Vault-Select-Brand-Kit.png)
- Click **Knowledge Vault** from the left navigation panel.![3-Knowledge-Vault-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a6f8e53ab3c8864/66d87b10f787522a7bb3cf0b/3-Knowledge-Vault-Icon.png)
- Under **Actions**, click the vertical ellipses corresponding to the Knowledge Vault item that you want to export, and then select **Export**.
![4-Knowledge-Vault-Item-Export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d0190838e3d4d02/687fba7d10717c32d0cfce5f/4-Knowledge-Vault-Item-Export.png)    **Note**: Subfolders cannot be exported.
- To export multiple items, select the checkboxes for the desired Knowledge Vault Items and click **Export** from the floating bar.
    ![5-Knowledge-Vault-Item-Export-From-Toolbar](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16d7da4b44aad9d4/687fba7d8584d569deafff96/5-Knowledge-Vault-Item-Export-From-Toolbar.png)The selected items will be downloaded as `.json` files.

## Common questions

**Q: What format are exported Knowledge Vault items downloaded in?**  
A: The selected items will be downloaded as `.json` files.

**Q: Can I export subfolders from the Knowledge Vault?**  
A: **Note**: Subfolders cannot be exported.

**Q: Can I export multiple Knowledge Vault items at once?**  
A: Yes. Select the checkboxes for the desired Knowledge Vault Items and click **Export** from the floating bar.