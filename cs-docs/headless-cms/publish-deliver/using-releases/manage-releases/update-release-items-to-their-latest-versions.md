---
title: "Update Release Items to the Latest"
description: "Keep your content current with Contentstack's update feature. Easily refresh release items to the latest version and manage localizations effectively."
url: /headless-cms/update-release-items-to-their-latest-versions
uid: blt405c79b3b210d4c9
---

# Update Release Items to the Latest

## Update Release Items to the Latest

Contentstack allows you to update items (assets and entries) in a release to the latest. This feature helps you publish up-to-date content whenever you deploy the release to an environment.

**Note:** For older releases, you can only update all items in the release to the latest. Individual items cannot be updated for older releases. Reach out to our [support](mailto:support@contentstack.com) team to enable the new release feature for your organization.

If an unlocalized entry that is part of the release has been localized later, you can update the entry to its latest localized version. For example, if an unlocalized entry was added to a release and later was localized to the French (France) language, the release gets updated with the localized French version of the entry.

**Note:** You cannot update the release items if the updated version of an entry has new references. The references are not automatically added to the release. You need to add them manually.

To update the release items to their latest versions, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow these steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Releases” icon. Or, press “alt + R” for Windows and “option + R” for Mac.
2.  Hover over the release you want to unlock in the left panel.
3.  Click the “Update All Release Items” icon from the popup. Alternatively, click the horizontal ellipsis in the top right corner and click **Update All Release Items**.
4.  In the **Update All Release Items** modal, click **Update** to update the assets and entries of the release to the latest.![Update-Items-of-a-Release-to-Lat.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt728755e6680113ab/67ee7c1f4cd6a30def7a4b3a/Update-Items-of-a-Release-to-Lat.gif)

To bulk update release items to their latest, follow these steps:

1.  Use the checkboxes to select the entries you want to add to a release.
2.  Once you have selected the items, a floating panel will appear on the page. Click the **Update Release Item(s)** option in this panel.
3.  In the **Update Release Item(s)** modal, click **Yes, Proceed** to update the selected items to their latest.![Bulk-Update-Items-of-a-Release.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea219ed5a23fc648/67ee7cbfd32f688084ef03c0/Bulk-Update-Items-of-a-Release.gif)

**Note:** If the release is locked, you can [unlock](/docs/headless-cms/unlock-a-release) and then update the release items to their latest versions.

## API Reference

To update release items to their latest versions via API, refer to the [Update Release Items to their Latest Versions](/docs/developers/apis/content-management-api/releases#update-release-items-to-their-latest-versions) API request.
