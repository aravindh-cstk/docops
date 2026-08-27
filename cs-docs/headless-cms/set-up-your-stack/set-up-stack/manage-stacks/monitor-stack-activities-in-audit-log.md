---
title: "Monitor Stack Activities in Audit Log"
description: "Track and review all stack activities in Contentstack's Audit Log. Filter logs by users, actions, modules, and dates for detailed tracking."
url: /headless-cms/monitor-stack-activities-in-audit-log
uid: blt25f94985898fd108
---

# Monitor Stack Activities in Audit Log

## Monitor Stack Activities in Audit Log

The Audit Log page helps teams review content updates, user actions, and system changes, aiding in troubleshooting, compliance, and auditing.

To access the audit logs, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for both Windows OS and Mac OS users).
2.  Click the **Audit Log** tab or use the shortcut key “alt + A” for Windows OS users, and “option + A” for Mac OS users.

The **Audit Log** page provides the following details of the events that occurred within the stack:

-   **Date**: Displays the date and time of the event.
-   **Action**: Specifies the action performed, such as create, update, delete, etc.
-   **Module**: Identifies the module affected, such as [Content Type](/docs/headless-cms/about-content-types), [Entry](/docs/headless-cms/about-entries), [Asset](/docs/headless-cms/about-assets), etc.
-   **Title**: Specifies the title of a particular module.
    -   **Information Icon (i):**
        -   **Entry Module:** Shows Content Type, version, and language details.
        -   **User Module:** Displays assigned roles for users.
-   **Remote Address**: Specifies the IP address of the node where the event occurred.

    ![Audit Log details in Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4b8cd9d7d6b16079/67c1996a62af0c53818a4193/Setup-a-Stack_Monitor-Audit-Logs.png)


The audit log helps track all published items, updates, deletions, and the current status of existing content.

**Note:** Audit logs are branch-specific, showing activity logs for the branch you are working in. For example, if you work in the development branch, you see audit logs only for that branch. Refer to our [Branch-specific Modules](/docs/headless-cms/branch-specific-modules#audit-logs) document for more details.

## Filter Audit Log

By default, the **Audit Log** displays events in reverse chronological order. You can apply filters to refine the results and display only the required information.

### Applying Filters

You can filter the audit logs using the options in the **Filters** section in the left panel. The available filters include:

-   **Users:** View events performed by specific users.
-   **Actions:** Filter by event type (e.g., create, update, delete).
-   **Modules:** Display logs for specific modules like Content Types, Entries, or Assets.
-   **Languages:** View logs based on language-specific activities.
-   **Content Types:** Filter logs related to specific Content Types.

To apply a filter, select the desired options from the available filters. If you want to remove all selections and return to the default view, click **Reset filters.**

### Filter by Date

By default, the audit log displays data for the past 7 days. You can change the date range to:

-   Last 1 day
-   Last 7 days
-   Last 14 days
-   Last 30 days
-   **Custom Date Range:** Set a specific period for log analysis.

    ![Audit Log Date Filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt44240e76b41c0d05/67c19a4d2c963bfb331b9a84/Setup-a-Stack_Monitor-Audit-Logs_Filter-By-Date.png)


Applying filters lets you focus on relevant events and streamline audit log analysis.

## Types of Audit Logs

The Audit Log tracks and displays all the events performed in a stack. The following table lists the different types of events recorded:

| **Modules** | **Events** |
| --- | --- |
| Stacks | 
-   Create Stack
-   Update Stack
-   Transfer Stack Ownership

 |
| Branches | 

-   Create Branch
-   Delete Branch
-   Assign Branch Alias
-   Delete Branch Alias

 |
| Content Type | 

-   Create Content Type
-   Update Content Type:
    -   Content modeling changes
    -   Content Type settings changes
    -   Field visibility rules change
-   Export Content Type
-   Import Content Type
-   Delete Content Type

 |
| Global Fields | 

-   Create Global Field
-   Update Global Field
-   Delete Global Field
-   Export Global Field
-   Import Global Field

 |
| Labels | 

-   Create Label
-   Update Label
-   Delete Label

 |
| Entries | 

-   Create Entry
-   Update Entry
-   Localize Entry
-   Export Entry
-   Import Entry
-   Delete Entry

 |
| Entry Comments and Discussions | 

-   Create Discussion
-   Update Discussion
-   Delete Discussion
-   Update Comment
-   Delete Comment

 |
| Assets | 

-   Create/Upload Asset
-   Update Asset
-   Move Asset
-   Delete Asset
-   Create Asset Folder
-   Update Asset Folder
-   Move Asset Folder
-   Delete Asset Folder

 |
| Additional Metadata For Entries and Assets | 

-   Create Metadata
-   Update Metadata
-   Delete Metadata

 |
| Bulk Operations | 

-   Bulk-delete Entries or Assets
-   Bulk-move Assets to Folder

    **Note:** Bulk publish and unpublish entries/assets actions are logged in [Publish Queue](/docs/headless-cms/view-publish-status-of-entries-assets-in-publish-queue).


 |
| Extensions | 

-   Create Extensions
-   Update Extensions
-   Delete Extensions

 |
| Releases | 

-   Create Release
-   Update Release
-   Delete Release
-   Add Items to Release
-   Delete Items from Release

 |
| Environments | 

-   Create Environment
-   Update Environment
-   Delete Environment

 |
| Languages | 

-   Create Language
-   Update Language
-   Delete Language

 |
| Webhooks | 

-   Create Webhook
-   Update Webhook
-   Delete Webhook

 |
| Roles | 

-   Create Role
-   Update Role
-   Delete Role

 |
| Users | 

-   Share Stack Access with User
-   Update User Roles
-   Unshare Stack for Existing User

 |
| Delivery Tokens | 

-   Create Token
-   Update Token
-   Delete Token

 |
| Workflows | 

-   Create Workflow
-   Update Workflow
-   Enable Workflow
-   Disable Workflow
-   Delete Workflow
-   Set Entry Workflow Stage
-   Update Entry Workflow Stage Details

 |
| Publish Rules | 

-   Create Publish Rules
-   Update Publish Rules
-   Delete Publish Rules

 |
| Trash | 

-   Restore Content Type
-   Restore Global Field
-   Restore Entry
-   Restore Asset
-   Restore Asset Folder

 |
