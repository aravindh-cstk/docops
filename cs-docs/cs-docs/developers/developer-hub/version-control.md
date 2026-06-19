---
title: "[Developer Hub guides] - Version Control"
description: Version Control in the Developer Hub lets you identify different versions of an application and view/restore versions via the Developer Hub interface.
url: https://www.contentstack.com/docs/developer-hub/version-control
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Developer Hub guides] - Version Control

This page explains how Version Control works in the Contentstack Developer Hub, including how versions are created, where to view version details, and how to restore an app to a previous version. It is intended for developers managing apps in the Developer Hub and should be used when you need to track changes, inspect version history, or restore an app state.

## Version Control

Version Control in the Developer Hub lets you identify different versions of an application. This feature allows you to access essential information about the app such as the app creator's name, and the date and time when the app was created/updated, inside the **Version **drop-down on the **Basic ****Information **page.

When a user changes or updates app information in any tab such as **UI ****Locations**, **Webhooks**, **App ****Manifest**, or **OAuth**, a new version gets created. In short, each app update results in a new version.

This feature helps you keep track of  all the changes ever made to an app. You can simply navigate to the versions and view the changes. With the **Version ****Control **tab in [Developer Hub](/docs/developer-hub), you can view details of all the versions created for the apps.

Let’s see how to navigate to the Version Control tab.

To view and create versions of an app via the Developer Hub interface, login to your [Contentstack account](https://app.contentstack.com/#!/login) and follow the steps given below:
- Click the **Developer ****Hub **icon on the left navigation panel.
- You will be navigated to the apps dashboard where you will see all apps created so far.
Select the desired app to view its **Version**.
- By default, the app's **Basic ****Information **page will open. You will see the **Version **drop-down with the latest version selected.
- When you click the **Version **dropdown, all the versions created for the app so far will be visible.
You can view or make the changes by selecting a particular version from the dropdown.

Details such as version number, creator name, date and time the version was created will be displayed for individual versions in the dropdown.
- If you want to restore your app to this opened version, click the **Restore ****This ****Version **button.

To view complete details of all the versions, follow the steps below:
- On the app's page, click the **Version ****Control **tab from the left navigation panel.
- On the top left corner, you will see the **Versions **tab.
- You will see the list of all the versions created for the app in a tabular format. You will be presented with different columns, with relative information as follows:

| Column | Description |
|---|---|
| **Version:** | Displays the version number. |
| **Release Tag:** | Displays the release tag number created for the version. |
| **Created By:** | Displays the name of the creator. |
| **Created At:** | Displays the date and time of creation. |
| **Actions:** | On clicking the three dots, you will see two options: |

**View:** To view the version details.
- **Create Release Tag:** To create a new release tag.
- In the **Actions **column, for each version, there is a more option icon. Click it.
You will be presented with two options: **View **and **Create ****Release ****Tag**.
- When you click on **View**, you'll be directed to the **Basic ****Information **page with options as discussed above.
- From here, you can restore the app to this version by clicking the **Restore ****This ****Version **button. Clicking **Restore ****This ****Version **will update the app with the latest changes and save the changes into a new version.
- If you click the **Create ****Release ****Tag **option, the **New ****Release ****Tag **modal will open. To learn more about Release Tag, refer to this guide.

## Common questions

### When is a new version created for an app?
When a user changes or updates app information in any tab such as **UI ****Locations**, **Webhooks**, **App ****Manifest**, or **OAuth**, a new version gets created.

### Where can I see the list of all versions for an app?
You can view details of all the versions created for the apps from the **Version ****Control **tab in [Developer Hub](/docs/developer-hub).

### Can I restore an app to a previous version?
Yes. From the **Basic ****Information **page, you can click the **Restore ****This ****Version **button to restore your app to the opened version.

### What actions are available for each version in the Versions list?
In the **Actions:** column, on clicking the three dots, you will see two options: **View** and **Create Release Tag**.

<!-- filename: developer-hub-guides-version-control.md -->