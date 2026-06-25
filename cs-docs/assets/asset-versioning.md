---
title: "[AM2.0] - Asset Versioning"
description: Asset versioning in Contentstack Assets to track, manage, rename, and restore asset versions.
url: https://www.contentstack.com/docs/assets/asset-versioning
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Asset Versioning

This page explains how asset versioning works in Contentstack Assets, including what triggers new versions and how to name/rename or restore older versions. It is intended for users who manage assets and need to track changes, collaborate safely, or roll back updates when necessary.

Asset Versioning

Asset versioning in Contentstack Assets provides a reliable way to track, manage, and recover changes made to assets over time. Every update to an asset, whether it is a binary file, its metadata, or even a **Save Assets** action, automatically creates a new version.

This ensures a complete, auditable history of changes throughout the asset lifecycle and supports collaboration, reduces risk, and helps teams maintain accuracy and consistency across campaigns, regions, and channels. Asset versions are accessible from the asset details view, where you can review, rename, or restore them as needed.

## Key Capabilities
- **Automatic Version Creation:** Every asset update creates a new version automatically.
- **Version History:** Track the complete history of changes made to an asset.
- **Version Navigation:** Switch between versions using the version selector in the asset details view.
- **Rollback and Recovery:** Restore a previous version when an update needs to be reversed.

## Name or Rename an Asset Version
By default, Contentstack Assets assigns numeric version labels such as **Version 1**, **Version 2**, and so on. Assigning custom names helps identify the purpose or context of a specific version more easily.

To name or rename an asset version, perform the following steps:
- Open **Assets** and navigate to the required asset.
- Open the version selector in the top-right corner of the asset page.
- Locate the version to rename.
- Click the “Rename” icon next to the version.
- Enter a meaningful name, such as Initial Banner Image or Approved for Campaign.
- Confirm the change by selecting the checkmark icon or pressing *enter*/*return*.

**Note:**
- Renaming a version does not create a new asset version.
- Custom version names support a maximum of **32 characters**.
- Supported characters include uppercase letters (A–Z), lowercase letters (a–z), numbers (0–9), spaces, hyphens (`-`), and underscores (`_`).

## Restore an Older Asset Version
Asset versioning allows you to restore a previous version when an update needs to be undone or reviewed.

To restore an asset version, perform the following steps:
- Open **Assets** and navigate to the required asset.
- Open the version selector in the asset details view.
- Select the version to restore.
- Review the asset file and metadata if required.
- Click **Save Asset** to make the selected version the latest.

Once saved, the restored version becomes the latest version of the asset, while all previous versions remain available in the version history.

By using asset versioning effectively, teams retain full control over their digital assets while supporting fast, iterative content workflows across Contentstack.

**Note:** Only users with edit permissions for assets can rename or restore asset versions. Users without edit access can view version history but cannot modify it.

## Common questions

### What actions create a new asset version?
Every update to an asset, whether it is a binary file, its metadata, or even a **Save Assets** action, automatically creates a new version.

### Does renaming a version create a new asset version?
No. Renaming a version does not create a new asset version.

### Who can rename or restore asset versions?
Only users with edit permissions for assets can rename or restore asset versions. Users without edit access can view version history but cannot modify it.

### What is the maximum length for a custom version name?
Custom version names support a maximum of **32 characters**.