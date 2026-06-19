---
title: "[Developer Hub guides] - App Versioning"
description: Manage application versions in Developer Hub, including browsing, restoring, and viewing version logs.
url: https://www.contentstack.com/docs/developer-hub/app-versioning
product: Contentstack Developer Hub
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Developer Hub guides] - App Versioning

This page explains how to use Developer Hub to manage app versions over time, including how to browse and restore previous versions and how to review version history in Version Logs. It is intended for developers maintaining apps in Contentstack Developer Hub and should be used when you need to track manifest changes or revert to an earlier app version.

## App Versioning

Developer Hub will help you manage your application over time, allowing you to look back on historical changes and even restore back to previous versions.

**Note:**  Refer to our [App Manifest](/docs/developer-hub/app-manifest) documentation to manage app versions effectively.

Let's go over the basics of Version Logs. A new manifest version is automatically generated when you save an update to your application, such as adding a new UI location or updating the [OAuth](/docs/developer-hub/contentstack-oauth) settings. When a new version is created, it is available as an update for private apps.

**Note: **Developer Hub handles changes made to the application’s manifest. It cannot detect any modifications the developer makes to the application code, referred to as the App URL in [Hosting](/docs/developer-hub/app-hosting). Changes to your application code will take effect immediately and be accessible to your users.

## Browse and Restore

Let’s take a closer look at how versions can be browsed.

To view and create versions of an app via the Developer Hub interface, login to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:
- Navigate to the app you created. In the left navigation panel, click the **Developer Hub **icon to navigate to it.
- You will be directed to the app dashboard where you will see all the apps created so far. Select an app to get started. For example, click **Sample **to view the app information.
- By default, the app's **Basic Information **page will open. You will see a **Version **drop-down with the latest version selected.
- Click the **Version **dropdown, to see a list of all the versions created for the app.You can preview a specific version of your app by clicking the preferred version from the dropdown.

    Details such as version number, creator name, date, and the version creation date and time is displayed for individual versions in the dropdown.
- To restore your app to this selected version and set it as the latest version, click the **Yes,** **Restore **button.
- A confirmation pop-up appears, click **Yes, Restore** to confirm the changes.

## Version Logs

To view complete details of all the versions, follow the steps below:
- In the left navigation of the app's dashboard page, click the **Version Logs **tab.
- You will see the details and list of all the versions created for the app in a tabular format. The different columns with relative information are as follows:
      **Version:** Displays the version number.
- **Created By:** Displays the name of the user who created the version.
- **Created At:** Displays the date and time of creation.
- **Actions: **On clicking the three dots, you will see one option:
          **View:** Displays all details of a version. You can go back and check the details of a particular version.
- - Clicking **View **redirects you to the** Basic Information** page to preview that specific version. Now you can browse the application manifest for that particular version and restore it as latest if required.

## Common questions

**Q: What creates a new app version in Developer Hub?**  
A: A new manifest version is automatically generated when you save an update to your application, such as adding a new UI location or updating the OAuth settings.

**Q: Can Developer Hub version changes to my application code?**  
A: No. Developer Hub handles changes made to the application’s manifest and cannot detect modifications to the application code (App URL in Hosting).

**Q: Where can I see all versions created for an app?**  
A: You can view versions from the **Version** drop-down on the **Basic Information** page, and view complete details in the **Version Logs** tab.