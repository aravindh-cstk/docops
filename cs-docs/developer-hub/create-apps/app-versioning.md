---
title: "App Versioning"
description: "Track changes and manage app versions with Contentstack's Version Logs in the Developer Hub."
url: /developer-hub/app-versioning
---

# App Versioning

## App Versioning

Developer Hub will help you manage your application over time, allowing you to look back on historical changes and even restore back to previous versions.

**Note:**

-   Refer to our [App Manifest](/docs/developer-hub/app-manifest) documentation to manage app versions effectively. Let's go over the basics of Version Logs. A new manifest version is automatically generated when you save an update to your application, such as adding a new UI location or updating the [OAuth](/docs/developer-hub/contentstack-oauth) settings. When a new version is created, it is available as an update for private apps.
-   Developer Hub handles changes made to the application’s manifest. It cannot detect any modifications the developer makes to the application code, referred to as the App URL in [Hosting](/docs/developer-hub/app-hosting). Changes to your application code will take effect immediately and be accessible to your users.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in the Developer Hub

## What You Will Learn

-   How to browse the versions of an app.
    
-   How to preview a specific version.
    
-   How to restore a version and set it as the latest.
    
-   How to view the Version Logs.
    

## Browse and Restore Versions

Let’s take a closer look at how versions can be browsed.

To view and create versions of an app via the Developer Hub interface, login to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:

1.  Navigate to the app you created. In the left navigation panel, click the **Developer Hub** icon to navigate to it. 
2.  You will be directed to the app dashboard where you will see all the apps created so far. Select an app to get started. For example, click **Sample** to view the app information.
3.  By default, the app's **Basic Information** page will open. You will see a **Version** drop-down with the latest version selected.  
    ![Basic_Info_Version.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbed2c03845c6ce27/659e7a27fadb3aad42c39fcc/Basic_Info_Version.png)
4.  Click the **Version** dropdown, to see a list of all the versions created for the app.
    
    You can preview a specific version of your app by clicking the preferred version from the dropdown.
    
    ![Versions_Dropdown.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda208d3a4d29cb82/659e7a27d838b37db39d7f81/Versions_Dropdown.png)
    
    Details such as version number, creator name, date, and the version creation date and time is displayed for individual versions in the dropdown.
    
5.  To restore your app to this selected version and set it as the latest version, click the **Yes,** **Restore** button.  
    ![Basic_Information.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5bb3ac98a076ce2e/68493da8b037914d232b5f0c/Basic_Information.png)
6.  A confirmation pop-up appears, click **Yes, Restore** to confirm the changes.

## Version Logs

To view complete details of all the versions, follow the steps below:

1.  In the left navigation of the app's dashboard page, click the **Version Logs** tab.
2.  You will see the details and list of all the versions created for the app in a tabular format. The different columns with relative information are as follows:
    1.  **Version:** Displays the version number.
    2.  **Created By:** Displays the name of the user who created the version.
    3.  **Created At:** Displays the date and time of creation.
    4.  **Actions:** On clicking the three dots, you will see one option:
        -   **View:** Displays all details of a version. You can go back and check the details of a particular version.
        -   ![Version_Logs_Table.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt510952e2a5b0d662/659e7a27363d3f0f8445784f/Version_Logs_Table.png)
3.  Clicking **View** redirects you to the **Basic Information** page to preview that specific version. Now you can browse the application manifest for that particular version and restore it as latest if required.
