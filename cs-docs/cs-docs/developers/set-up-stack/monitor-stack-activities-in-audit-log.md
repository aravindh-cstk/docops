---
title: "[Set Up Stack] - Monitor Stack Activities in Audit Log"
description: Monitor stack activities in the Audit Log, including access steps, filtering options, and types of audit log events.
url: https://www.contentstack.com/docs/developers/set-up-stack/monitor-stack-activities-in-audit-log
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Set Up Stack] - Monitor Stack Activities in Audit Log

This page explains how to access and use the Audit Log in a Contentstack stack, including how to filter audit events and what types of actions are recorded. It is intended for developers and administrators who need to review stack activity for troubleshooting, compliance, or auditing.

## Monitor Stack Activities in Audit Log

The Audit Log page helps teams review content updates, user actions, and system changes, aiding in troubleshooting, compliance, and auditing.

To access the audit logs, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for both Windows OS and Mac OS users).
- Click the **Audit Log** tab or use the shortcut key “alt + A” for Windows OS users, and “option + A” for Mac OS users.

The **Audit Log** page provides the following details of the events that occurred within the stack:
- **Date**: Displays the date and time of the event.
- **Action**: Specifies the action performed, such as create, update, delete, etc.
- **Module**: Identifies the module affected, such as [Content Type](/docs/developers/create-content-types/about-content-types), [Entry](/docs/content-managers/author-content/about-entries), [Asset](/docs/content-managers/author-content/about-assets), etc.
- **Title**: Specifies the title of a particular module.**Information Icon (i):****Entry Module:** Shows Content Type, version, and language details.
- **User Module:** Displays assigned roles for users.
- **Remote Address**: Specifies the IP address of the node where the event occurred.

The audit log helps track all published items, updates, deletions, and the current status of existing content.

**Note:** Audit logs are branch-specific, showing activity logs for the branch you are working in. For example, if you work in the development branch, you see audit logs only for that branch. Refer to our [Branch-specific Modules](/docs/developers/branches/branch-specific-modules#audit-logs) document for more details.

## Filter Audit Log

By default, the **Audit Log** displays events in reverse chronological order. You can apply filters to refine the results and display only the required information.

### Applying Filters

You can filter the audit logs using the options in the **Filters** section in the left panel. The available filters include:
- **Users:** View events performed by specific users.
- **Actions:** Filter by event type (e.g., create, update, delete).
- **Modules:** Display logs for specific modules like Content Types, Entries, or Assets.
- **Languages:** View logs based on language-specific activities.
- **Content Types:** Filter logs related to specific Content Types.

To apply a filter, select the desired options from the available filters. If you want to remove all selections and return to the default view, click **Reset filters.**

### Filter by Date

By default, the audit log displays data for the past 7 days. You can change the date range to:
- Last 1 day
- Last 7 days
- Last 14 days
- Last 30 days
- **Custom Date Range:** Set a specific period for log analysis.

Applying filters lets you focus on relevant events and streamline audit log analysis.

## Types of Audit Logs

The Audit Log tracks and displays all the events performed in a stack. The following table lists the different types of events recorded:

| Modules | Events |
|---|---|
| Stacks | - Create Stack<br>- Update Stack<br>- Transfer Stack Ownership |
| Branches | - Create Branch<br>- Delete Branch<br>- Assign Branch Alias<br>- Delete Branch Alias |
| Content Type | - Create Content Type<br>- Update Content Type:Content modeling changes<br>- Content Type settings changes<br>- Field visibility rules change<br>- Export Content Type<br>- Import Content Type<br>- Delete Content Type |
| Global Fields | - Create Global Field<br>- Update Global Field<br>- Delete Global Field<br>- Export Global Field<br>- Import Global Field |
| Labels | - Create Label<br>- Update Label<br>- Delete Label |
| Entries | - Create Entry<br>- Update Entry<br>- Localize Entry<br>- Export Entry<br>- Import Entry<br>- Delete Entry |
| Entry Comments and Discussions | - Create Discussion<br>- Update Discussion<br>- Delete Discussion<br>- Update Comment<br>- Delete Comment |
| Assets | - Create/Upload Asset<br>- Update Asset<br>- Move Asset<br>- Delete Asset<br>- Create Asset Folder<br>- Update Asset Folder<br>- Move Asset Folder<br>- Delete Asset Folder |
| Additional Metadata For Entries and Assets | - Create Metadata<br>- Update Metadata<br>- Delete Metadata |
| Bulk Operations | - Bulk-delete Entries or Assets<br>- Bulk-move Assets to Folder**Note**: Bulk publish and unpublish entries/assets actions are logged in [Publish Queue](/docs/content-managers/publish-content/view-publish-status-of-entries-assets-in-publish-queue). |
| Extensions | - Create Extensions<br>- Update Extensions<br>- Delete Extensions |
| Releases | - Create Release<br>- Update Release<br>- Delete Release<br>- Add Items to Release<br>- Delete Items from Release |
| Environments | - Create Environment<br>- Update Environment<br>- Delete Environment |
| Languages | - Create Language<br>- Update Language<br>- Delete Language |
| Webhooks | - Create Webhook<br>- Update Webhook<br>- Delete Webhook |
| Roles | - Create Role<br>- Update Role<br>- Delete Role |
| Users | - Share Stack Access with User<br>- Update User Roles<br>- Unshare Stack for Existing User |
| Delivery Tokens | - Create Token<br>- Update Token<br>- Delete Token |
| Workflows | - Create Workflow<br>- Update Workflow<br>- Enable Workflow<br>- Disable Workflow<br>- Delete Workflow<br>- Set Entry Workflow Stage<br>- Update Entry Workflow Stage Details |
| Publish Rules | - Create Publish Rules<br>- Update Publish Rules<br>- Delete Publish Rules |
| Trash | - Restore Content Type<br>- Restore Global Field<br>- Restore Entry<br>- Restore Asset<br>- Restore Asset Folder |

## Common questions

### Are audit logs branch-specific?
Yes. **Note:** Audit logs are branch-specific, showing activity logs for the branch you are working in.

### What is the default time range shown in the audit log?
By default, the audit log displays data for the past 7 days.

### Can I filter audit logs by user and module?
Yes. The available filters include **Users** and **Modules** (as well as **Actions**, **Languages**, and **Content Types**).

### Where are bulk publish and unpublish actions logged?
**Note**: Bulk publish and unpublish entries/assets actions are logged in [Publish Queue](/docs/content-managers/publish-content/view-publish-status-of-entries-assets-in-publish-queue).