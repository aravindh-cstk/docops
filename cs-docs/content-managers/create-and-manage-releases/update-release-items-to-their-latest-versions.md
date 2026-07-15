---
title: "[Create and Manage Releases NEW] - Update Release Items to the Latest"
description: How to update items (assets and entries) in a release to the latest versions in Contentstack, including bulk update and API reference.
url: https://www.contentstack.com/docs/headless-cms/update-release-items-to-their-latest-versions
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: NEW
last_updated: 2026-03-25
---

# [Create and Manage Releases NEW] - Update Release Items to the Latest

This page explains how to update items (assets and entries) in a Contentstack release to their latest versions, including bulk update steps and an API reference. Content managers and developers should use this when preparing a release to ensure it contains the most up-to-date content before deployment.

## Update Release Items to the Latest

Contentstack allows you to update items (assets and entries) in a release to the latest. This feature helps you publish up-to-date content whenever you deploy the release to an environment.

**Note:** For older releases, you can only update all items in the release to the latest. Individual items cannot be updated for older releases. Reach out to our [support](mailto:support@contentstack.com) team to enable the new release feature for your organization.

If an unlocalized entry that is part of the release has been localized later, you can update the entry to its latest localized version. For example, if an unlocalized entry was added to a release and later was localized to the French (France) language, the release gets updated with the localized French version of the entry.

**Note:** You cannot update the release items if the updated version of an entry has new references. The references are not automatically added to the release. You need to add them manually.

To update the release items to their latest versions, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow these steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Releases” icon in the left navigation panel. Or, press “alt + R” for Windows and “option + R” for Mac.
- Hover over the release you want to unlock in the left panel.
- Click the “Update All Release Items” icon from the popup. Alternatively, click the horizontal ellipsis in the top right corner and click **Update All Release Items**.
- In the **Update All Release Items** modal, click **Update** to update the assets and entries of the release to the latest.![Update-Items-of-a-Release-to-Lat.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt728755e6680113ab/67ee7c1f4cd6a30def7a4b3a/Update-Items-of-a-Release-to-Lat.gif)

To bulk update release items to their latest, follow these steps:
- Use the checkboxes to select the entries you want to add to a release.
- Once you have selected the items, a floating panel will appear on the page. Click the **Update Release Item(s)** option in this panel.
- In the **Update Release Item(s)** modal, click **Yes, Proceed** to update the selected items to their latest.![Bulk-Update-Items-of-a-Release.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea219ed5a23fc648/67ee7cbfd32f688084ef03c0/Bulk-Update-Items-of-a-Release.gif)

**Note:** If the release is locked, you can [unlock](./unlock-a-release.md) and then update the release items to their latest versions.

## API Reference

To update release items to their latest versions via API, refer to the [Update Release Items to their Latest Versions](../../../api-docs/api-detail/content-management-api.md#update-release-items-to-their-latest-versions) API request.

## Common questions

### Can I update only specific items in older releases?
**Note:** For older releases, you can only update all items in the release to the latest. Individual items cannot be updated for older releases.

### Why can’t I update release items when an entry has new references?
**Note:** You cannot update the release items if the updated version of an entry has new references. The references are not automatically added to the release. You need to add them manually.

### What should I do if the release is locked?
**Note:** If the release is locked, you can [unlock](./unlock-a-release.md) and then update the release items to their latest versions.

### Is there an API to update release items to their latest versions?
To update release items to their latest versions via API, refer to the [Update Release Items to their Latest Versions](../../../api-docs/api-detail/content-management-api.md#update-release-items-to-their-latest-versions) API request.