---
title: App Releases
description: Documentation for creating, viewing, and managing App Releases in the Developer Hub for Public applications.
url: https://www.contentstack.com/docs/developer-hub/app-releases
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# App Releases

This page explains how App Releases work in Contentstack Developer Hub, including why releases matter and how to view and create releases for your app. It is intended for developers managing Public applications and should be used when you need to communicate updates, track versions, and submit releases for review and publication.

**Note: **App Releases are only available for Public applications. To submit your private application for public listing, reference the [App Submission and Approval Guide](../marketplace-platform-guides/app-submission-and-approval-guide.md).

## Role of Releases in App Development
Building a complex application is an ongoing project. New features, bug fixes, and refinements happen regularly. **Releases serve as milestones**, marking progress and providing a clear record of changes.

Every update to your application creates a new version - some are minor tweaks, while others are significant improvements. Releases help capture and organize these moments, ensuring a structured development process.

With Releases, you can build and experiment without revealing changes publicly until you are ready. Unreleased updates remain visible **only to your team**, while your app users see only the current live release.

## Why Releases Matter?
- **Track Progress: **Monitor your app’s evolution and key milestones.
- **Innovate Safely: **Develop and test new features without affecting live users.
- **Communicate Updates:** Keep users informed about changes and improvements.

## Communicate Changes
Previously, incremental versioning provided limited insights around application updates to your users. **App** **Releases **improve communication about app updates by providing **release** **notes **and **in-app notifications** to users, clarifying changes and prompting updates when needed.

Even if the app manifest remains unchanged, App Releases allow you to communicate functional enhancements. Since multiple releases can exist for the same app version, you have the flexibility to inform users about important updates whenever needed.

## App Releases
To view complete details of all the releases, follow the steps below:
- Log in to your [Contentstack account](https://www.contentstack.com/login).
- From the left navigation panel, click the** Developer Hub **icon.
- You will be directed to the Apps Dashboard page, where you see all the apps created so far. Select an app to get started.
- By default, the app's **Basic Information** page will open.
- In the left navigation panel, click the **Releases **tab.![Select_Releases_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2f23d6ce93e7d4f/663b845770ebbab5ceab902f/Select_Releases_Tab.png)
- If you have created releases previously, you will see the list of all the releases created for the app. The different columns along with relative information will be as shown below:

| Column | Description |
|---|---|
| **Release:** | Displays the release associated with the version. |
| **Title:** | Displays the custom title assigned to the release. |
| **Type:** | Displays the type of release, **Major**, **Minor**, or **Patch**. |
| **App Version: ** | Displays the associated app version number. |
| **Status:** | Displays the status of the release, **Review**, **Live**, **Draft **or **Historical**. |
| **Created By: ** | Displays the name of the user who created the version. |
| **Created At:** | Displays the date and time of creation. |

**Draft:** Recently created release, that has not been submitted for approval.  
**Review: **When the release is submitted for approval.  
**Live: **The current available release of your application after approval. After approval, a release in the review state transitions to live, making it available for all users to try out. At any given time, there will only be one live release for an app.  
**Historical: **After approval, a new release goes live, and the previous one transitions to "Historical" status. Only one release can be live at a time, while all past releases are marked as historical.

- In the **Actions **column, click the ellipses to view the release details.
- Click the **View **icon. A pop-up modal appears where you can view the release details.![View_Relese.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt71ecf99dfad96c88/663dc79cc37e3456a9ad0677/View_Relese.png)

## Create a Release
To create a new release, follow the steps below:
- From the top right corner, click the **+ New Release **button to create the release notes associated with the version.![_New_Release.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt50f4583a85540828/663b845644cc74a10359550f/_New_Release.png)
- Enter a suitable **Title **for the release.
- Select a **Version **from the dropdown.You can create a release on the same version or the version that exceeds the current version of the latest release. For example, If you create a release for version 5, you cannot make a release for historical versions below 5, i.e., version 4, version 3, etc.
- Provide a **Type **from the dropdown, i.e., **Major**, **Minor**, or **Patch**. With tag types, you can define the severity of the changes made to the app.**Major **releases typically introduce significant changes to an app. This could involve introducing new features, making substantial improvements, or even changing the overall direction of the application. Major releases may not be backward compatible. This means that the changes introduced could break compatibility with earlier versions. Developers should notify users of any breaking changes in their release notes. For example, overhauling the application's architecture for better performance, introducing a new UI, or enabling a new UI location.If the current application version is one and you select version two while creating a release, you will only be presented with the options for major and minor types.
- **Minor **releases typically introduce incremental updates to an application. These could be new features, enhancements, or improvements that keep the application's core functionality the same. For example, adding a new tool to an existing feature set or introducing new app configuration options.Minor releases must maintain backward compatibility with previous versions.
- **Patch **releases are typically minor, quick updates to fix bugs or make other minor improvements. They do not add new features or make noticeable changes to the software's functionality. For example, correcting a user interface issue, resolving performance bugs, or minor tweaks to improve usability or stability.
- The **Tag **field is automatically incremented and generated based on the selected release type.

| Release type | Tag increment example |
|---|---|
| **Major: ** | Increments from 1.0.0 to 2.0.0 |
| **Minor: ** | Increments from 1.1.0 to 1.2.0 |
| **Patch: ** | Increments from 1.1.1 to 1.1.2 |

- In the **Release Note **field, enter the details of the update made to the app's current version. This helps the users understand the latest changes made to your app and will be the public record of your apps release history.![Create_Release.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte1f0ef1b0647d78c/663b8457f8baf05434a75914/Create_Release.png)
- Click the **Create Release **button.
- After the release is created successfully, the pop-up modal closes. You can see the latest changes in the releases table. The release status is automatically changed to the “Draft” mode upon creation.![Draft_Mode.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b6542ea98d7bbb1/663b84565f24855438d0d626/Draft_Mode.png)
- In the **Actions **column, click the ellipses to edit, delete, or submit the app for review.

Contentstack’s Marketplace team will review your app upon submission. Users are required to wait for a duration of 21 days to receive the status of their [app submission](../marketplace-platform-guides/app-submission-and-approval-guide.md). You will be notified about the status via email.

**Note: **You cannot revoke or delete your app submission request. Reach out to our [Support Team](mailto:support@contentstack.com) if you have any concerns or queries.
- Click the **Edit **icon. A pop-up screen appears. You can only update the **Title **and the **Release Note **of the release.Once a release is submitted for review, editing it is not possible. However, if the app releases submission is rejected, you can make edits to the releases.![Edit_Release.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd55924e5591ea4db/663b8457aea3293cb260e3b2/Edit_Release.png)
- Once done, click **Save Changes **to update the release.

The approved release notes of your application will now be visible publicly on your application’s Releases tab in the Marketplace. You can view the detailed app model by navigating to *Marketplace -> Discover -> Search *for your Application and click to open the App Details modal.

Furthermore, as soon as an app release is approved by Contentstack, users who have previously installed your application will receive an in-app notification if the release requires an update of their application. This provides a way for Developers to communicate to their users when an application update is required in order to adopt changes to the application.

## Common questions

### Are App Releases available for private applications?
**Note: **App Releases are only available for Public applications.

### Can I create a release for an older (historical) version?
You can create a release on the same version or the version that exceeds the current version of the latest release. For example, If you create a release for version 5, you cannot make a release for historical versions below 5, i.e., version 4, version 3, etc.

### Can I edit a release after submitting it for review?
Once a release is submitted for review, editing it is not possible. However, if the app releases submission is rejected, you can make edits to the releases.

### Can I revoke or delete my app submission request?
**Note: **You cannot revoke or delete your app submission request. Reach out to our [Support Team](mailto:support@contentstack.com) if you have any concerns or queries.