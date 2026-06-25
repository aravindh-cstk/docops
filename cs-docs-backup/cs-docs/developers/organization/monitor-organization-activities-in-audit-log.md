---
title: "[Organization] - Monitor Organization Activities in Audit Log"
description: Audit Log tracks and displays activities (or events) performed across the Contentstack platform in a particular Organization.
url: https://www.contentstack.com/docs/administration/monitor-organization-activities-in-audit-log
product: Contentstack
doc_type: guide
audience:
  - developers
  - org-admins
version: unknown
last_updated: 2026-03-26
---

# [Organization] - Monitor Organization Activities in Audit Log

This page explains how to view, filter, and export the Audit Log for a Contentstack Organization. It is intended for Organization administrators and users who need to monitor activity across projects, and should be used when auditing actions, investigating changes, or exporting event history.

## Monitor Organization Activities in Audit Log

Audit Log tracks and displays activities (or events) performed across the Contentstack platform in a particular Organization.

To view the Audit Log, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Select the Organization from the dropdown on the header and click the “Org Admin” icon in the left navigation panel.Or, you can simply click the “Org Admin” cog beside the Organization that you intend to open.
- Click the **Audit Log** tab on the left panel.

The following details are displayed under Audit Log when an event occurs:
- **Date and Time**: Specifies the date and time when the event occurred
- **User**: Specifies the name of the user who performed the event
- **Event**: Specifies the type of action performed
- **Application**: Specifies the application in which the event occurred
- **Remote Address**: Specifies the IP address of the node from which an event has occurred

This feature facilitates the monitoring of all activities occurring across all projects within your Organization.

**Note**: Click the “Refresh” icon to update the log.

## Filter Audit Log

By default, the Audit Log displays information in reverse chronological order i.e., the latest event appears on the top. To refine your results and view specific information, you can apply filters.

In columns where applicable, simply click the “Filter” icon next to the column title and apply the necessary filters.

The date filter enables quick access to audit log information from the last 30 days, last 7 days, the previous day, or the current day. Additionally, the ”Custom Range” option permits setting a specific date range within the last 30 days.

**Note**: You can retrieve audit log information only for 30 days prior to the current day (for an organization).

The **All Apps** dropdown lets you filter logs by specific applications, such as Webhooks, Marketplace, Automate, Content Management, or Authentication. This helps you focus on relevant activity.

## Export Audit Log

To export the audit log, click the “Export” icon at the top right corner of the Audit Log page. The logs will be downloaded in `.csv` format.

**Note**: You can export up to **5000** logs at once. Apply filters to reduce the number of entries before exporting.

## Common questions

**Q: How far back can I retrieve audit log information for an organization?**  
A: You can retrieve audit log information only for 30 days prior to the current day (for an organization).

**Q: How do I update the Audit Log view to see the latest events?**  
A: Click the “Refresh” icon to update the log.

**Q: What file format is used when exporting the audit log?**  
A: The logs will be downloaded in `.csv` format.

**Q: Is there a limit to how many logs I can export at once?**  
A: You can export up to **5000** logs at once. Apply filters to reduce the number of entries before exporting.