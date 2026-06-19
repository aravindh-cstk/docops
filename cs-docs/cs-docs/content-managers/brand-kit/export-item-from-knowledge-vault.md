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
- Access to the Contentstack Organization/Stack as the [Owner](/docs/developers/organization/organization-roles#organization-owner)/[Admin](/docs/developers/organization/organization-roles#organization-admin)
- Access to Brand Kit as an invited [Collaborator](/docs/brand-kit/invite-collaborators/)

## Steps for Execution

**Note**: For this guide, we have assumed that you have [added items in the Knowledge Vault](/docs/brand-kit/add-item-in-knowledge-vault) inside your Brand Kit.

To export a Knowledge Vault item, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the left navigation panel, click the **Brand Kit** icon.
- Select the **Brand Kit** containing the Knowledge Vault item you want to export.
- Click **Knowledge Vault** from the left navigation panel.
- Under **Actions**, click the vertical ellipses corresponding to the Knowledge Vault item that you want to export, and then select **Export**.
    **Note**: Subfolders cannot be exported.
- To export multiple items, select the checkboxes for the desired Knowledge Vault Items and click **Export** from the floating bar.
    The selected items will be downloaded as `.json` files.

## Common questions

**Q: What format are exported Knowledge Vault items downloaded in?**  
A: The selected items will be downloaded as `.json` files.

**Q: Can I export subfolders from the Knowledge Vault?**  
A: **Note**: Subfolders cannot be exported.

**Q: Can I export multiple Knowledge Vault items at once?**  
A: Yes. Select the checkboxes for the desired Knowledge Vault Items and click **Export** from the floating bar.