---
title: "Monitor Organization Activities in Audit Log"
description: "Track and monitor organization-wide activities with Audit Log. Easily view event details and apply filters for comprehensive insight."
url: /administration/monitor-organization-activities-in-audit-log
uid: bltb5ccbeb42bed1e29
---

# Monitor Organization Activities in Audit Log

## Monitor Organization Activities in Audit Log

Audit Log tracks and displays activities (events) performed across the Contentstack platform within a specific organization. Use it to review who performed an action, when it happened, and from where, across all projects in your organization.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to view the Audit Log for an organization.

-   What details each audit log entry shows.

-   How to filter the Audit Log.

-   How to export the Audit Log.


## View Audit Log

To view the Audit Log, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Select the Organization from the dropdown on the header and click the “Org Admin” icon in the left navigation panel.

    Or, you can simply click the “Org Admin” cog beside the Organization that you intend to open.

2.  Click the **Audit Log** tab on the left panel.

When an event occurs, the Audit Log displays the following details:

-   **Date and Time**: Specifies the date and time when the event occurred
-   **User**: Specifies the name of the user who performed the event
-   **Event**: Specifies the type of action performed
-   **Application**: Specifies the application in which the event occurred
-   **Remote Address**: Specifies the IP address of the node from which an event has occurred


![Organization Audit Log screen](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt665b48eb08490eb4/66aa3796c56a1004333c202d/Org_Audit_Log.png)

This view lets you monitor all activities occurring across all projects within your organization.

**Note:** Click the “Refresh” icon to update the log.

## Filter Audit Log

By default, the Audit Log displays information in reverse chronological order i.e., the latest event appears on the top. To refine your results and view specific information, you can apply filters.

In columns where applicable, simply click the “Filter” icon next to the column title and apply the necessary filters.

The date filter enables quick access to audit log information from the last 30 days, last 7 days, the previous day, or the current day. Additionally, the ”Custom Range” option permits setting a specific date range within the last 30 days.

**Note:** You can retrieve audit log information only for 30 days prior to the current day (for an organization).

The **All Apps** dropdown lets you filter logs by specific applications, such as Webhooks, Marketplace, Automate, Content Management, or Authentication. This helps you focus on relevant activity.

## Export Audit Log

To export the audit log, click the “Export” icon at the top right corner of the Audit Log page. The logs will be downloaded in .csv format.

**Note:** You can export up to **5000** logs at once. Apply filters to reduce the number of entries before exporting.

## Related Resource

-   [Content Management API: Audit Log](/docs/developers/apis/content-management-api/#audit-log)
