---
title: "[Author Content] - Restore Old Asset Version"
description: Restore or rollback to an earlier saved version of an asset in Contentstack.
url: https://www.contentstack.com/docs/content-managers/author-content/restore-old-asset-version
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: current
last_updated: 2026-03-25
---

# [Author Content] - Restore Old Asset Version

This page explains how to restore (rollback) an asset to a previously saved version in Contentstack. It is intended for content managers and authors who need to recover an earlier state of an asset after updates, and should be used when you want to replace the current asset version with an older one.

### Restore Old Asset Version

In Contentstack, every update to an asset is saved as a version, allowing you to track changes and restore previous states if needed. This feature helps you recover earlier content versions efficiently.

To restore or rollback to an earlier saved version of an [asset](/docs/content-managers/author-content/about-assets), log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Assets” icon in the left navigation panel.
- Navigate to the asset you want to modify.
- Click the v**ersion** **dropdown** in the top-right corner of the page.
- From the dropdown menu, view the list of all asset versions. Click the version you want to restore. You can modify the details of the asset if needed.
- After restoring the version, publish the asset to the desired environment(s). This action ensures that the restored version replaces the currently published version.
- Click the **Save** button to make the selected version the latest version of the asset.

## Common questions

**Q: Does restoring an old asset version automatically publish it?**  
A: No. After restoring the version, publish the asset to the desired environment(s).

**Q: Can I edit the asset after selecting an older version but before saving?**  
A: Yes. Click the version you want to restore. You can modify the details of the asset if needed.

**Q: What makes the restored version the latest version of the asset?**  
A: Click the **Save** button to make the selected version the latest version of the asset.