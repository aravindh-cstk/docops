---
title: "[Analytics Content] - Analytics for Polaris"
description: The Analytics dashboard for Polaris provides detailed insights into how Contentstack's built-in AI assistant is being used across your organization.
url: https://www.contentstack.com/docs/analytics/analytics-for-polaris
product: Contentstack
doc_type: analytics-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-05-15
---

# [Analytics Content] - Analytics for Polaris

This page explains the Polaris Analytics dashboard in Contentstack, including what metrics it provides and how to access and filter the dashboard. It is intended for organization roles with Analytics access who need to monitor Polaris usage, performance, and token consumption.

## Analytics for Polaris

The Analytics dashboard for Polaris provides detailed insights into how Contentstack's built-in AI assistant is being used across your organization. Polaris can perform actions on entries, assets, and the Visual Editor on behalf of users. Use these metrics to monitor usage trends, response latency, token consumption, and execution success rates across Polaris operations.

**Note:** Only organization [Owner](../developers/organization/organization-roles.md#organization-owner), [Admin](../developers/organization/organization-roles.md#organization-admin), and Product Analytics Viewer roles can access Analytics.

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Analytics** through the “App Switcher”.
- By default, the **CMS** analytics dashboard appears. Click **Agent OS** and then select **Polaris** to switch dashboards.![Analytics_Polaris_Select.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am4c4600eaa7249500/99e9599e1c670c5a76cc68ff/Analytics_Polaris_Select.png?locale=en-us)

**Note:** The data in the Polaris dashboard updates in real-time, with a latency of **5–10 minutes**.

## Key Sections of the Polaris Analytics Dashboard

The dashboard is divided into several key sections, each providing insights into different aspects of Polaris usage and performance.

### Overview

This section provides a high-level summary of Polaris activity within your organization. It highlights key metrics such as **Active Users**, **Average Response Latency**, and **Token Consumption**.

These summary cards help you quickly assess Polaris usage, response performance, and token consumption.

### Tool Execution Summary

This section displays a table of all operations executed by Polaris within the selected date range. For each tool, it shows the number of successful executions, failed executions, and average duration in milliseconds.

### Usage Summary

This section displays the number of successful and failed Polaris requests over a selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze request trends.

This view helps you understand how frequently users are invoking Polaris, identify spikes in activity, and track the overall success rate of requests over time.

### Average Duration for an Action

This section displays the trend of average response times for Polaris-executed actions over the selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze latency trends.

### Token Usage

This section displays the total number of tokens consumed by Polaris within the selected date range, broken down by successful and failed requests and shown as a bar chart.

This view helps you monitor AI resource consumption tied specifically to Polaris operations, identify peak usage days, and manage token allocation across your organization.

### Error Distribution

This section helps you identify and categorize failures across Polaris operations.

This view supports troubleshooting by surfacing error patterns, such as permission-related failures or schema validation issues, helping teams address recurring problems. If no errors are found for the selected period, the section displays a “No records found” message.

### Top Users by Consumption

This section highlights the users who have consumed the highest number of tokens through Polaris interactions within the selected date range.

Since Polaris performs actions using the logged-in user’s credentials, this view helps you understand how AI usage is distributed across your team and identify the most active Polaris users.

## Apply Filters and Manage Views

To apply filters, click **Filters** and then click **Apply Filter(s)** after selecting your desired options.

Filters available include:
- **Date Range:** Choose from **1 week**, **30 days** (default), **60 days**, or **90 days**. Some charts include a timeline selector for further refinement.
- **Custom Date:** Set a custom date range using the dropdown.

  **Note:** The custom date range should not exceed **90 days**.
- **Zoom:** Switch between **1 week**, **30 days**, **60 days**, or **90 days** for trend analysis.
- **Group By:** View data grouped by day, week, or month, depending on the selected section.

To save a specific filter for later use, click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you don’t need to reapply filters manually each time.

## Common questions

### Who can access the Polaris Analytics dashboard?
Only organization Owner, Admin, and Product Analytics Viewer roles can access Analytics.

### How often does the Polaris dashboard data update?
The data in the Polaris dashboard updates in real-time, with a latency of 5–10 minutes.

### How do I switch to the Polaris dashboard from the default view?
By default, the CMS analytics dashboard appears. Click Agent OS and then select Polaris to switch dashboards.

### What is the maximum allowed custom date range?
The custom date range should not exceed 90 days.