---
title: "Analytics for Polaris"
description: "Gain insights into agent activity, token consumption, tool execution, and user-level usage with the Contentstack Polaris Analytics dashboard."
url: /analytics/analytics-for-polaris
uid: blt242c2d1278baab04
---

# Analytics for Polaris

## Analytics for Polaris

The Analytics dashboard for Polaris provides detailed insights into how Contentstack's built-in AI assistant is being used across your organization. Polaris can perform actions on entries, assets, and the Visual Editor on behalf of users. Use these metrics to monitor usage trends, response latency, token consumption, and execution success rates across Polaris operations.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to navigate to the Polaris Analytics dashboard.

-   What each of the seven dashboard sections shows and when to use it.

-   How to apply filters, set date ranges, and save custom views.


## Access the Polaris Analytics Dashboard

To access the analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Analytics** through the “App Switcher”.
2.  By default, the **CMS** analytics dashboard appears. Click **Agent OS** and then select **Polaris** to switch dashboards.![Polaris dashboard selection in Analytics](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am4c4600eaa7249500/99e9599e1c670c5a76cc68ff/Analytics_Polaris_Select.png?locale=en-us)

**Note:** The data in the Polaris dashboard updates in real-time, with a latency of **5 to 10 minutes**.

## Polaris Analytics Dashboard Sections

The dashboard is divided into several key sections, each providing insights into different aspects of Polaris usage and performance.

### Overview

This section provides a high-level summary of Polaris activity within your organization. It highlights key metrics such as **Active Users**, **Average Response Latency**, and **Token Consumption**.

These summary cards help you quickly assess Polaris usage, response performance, and token consumption.

![Polaris Overview summary cards](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7af112260916ef72/6be0ec5423ea63c8b7e32e9a/Analytics_Polaris_NewOverview.png?locale=en-us)

### Tool Execution Summary

This section displays a table of all operations executed by Polaris within the selected date range. For each tool, it shows the number of successful executions, failed executions, and average duration in milliseconds.

![Tool Execution Summary table](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7956c9e396cbca38/69fd49d5ea752382be0e5bbb/Analytics_Polaris_ToolExecution.png)

### Usage Summary

This section displays the number of successful and failed Polaris requests over a selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze request trends.

This view helps you understand how frequently users are invoking Polaris, identify spikes in activity, and track the overall success rate of requests over time.

![Polaris usage summary chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18493071c9ba09a2/69fd49d5eb66df67814b849a/Analytics_Polaris_UsageSummary.png)

### Average Duration for an Action

This section displays the trend of average response times for Polaris-executed actions over the selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze latency trends.

![Average action duration trend chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt97f1b3fee1d35b37/69fd8dbf9437c80ee40596c6/Analytics_Polaris_AvgDuration.png)

### Token Usage

This section displays the total number of tokens consumed by Polaris within the selected date range, broken down by successful and failed requests and shown as a bar chart.

This view helps you monitor AI resource consumption tied specifically to Polaris operations, identify peak usage days, and manage token allocation across your organization. 

![Polaris token usage bar chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb06fa63fcfafe233/69fd49d59e74d50fb4c7fb28/Analytics_Polaris_TokenUsage.png)

### Error Distribution

This section helps you identify and categorize failures across Polaris operations.

This view supports troubleshooting by surfacing error patterns, such as permission-related failures or schema validation issues, helping teams address recurring problems. If no errors are found for the selected period, the section displays a “No records found” message.

![Polaris error distribution view](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf91cd5b93b36370e/69fd8dbf9437c845340596ca/Analytics_Polaris_ErrorDistribution.png)

### Top Users by Consumption

This section highlights the users who have consumed the highest number of tokens through Polaris interactions within the selected date range.

Since Polaris performs actions using the logged-in user’s credentials, this view helps you understand how AI usage is distributed across your team and identify the most active Polaris users.

![Top users by token consumption](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9c74128cf9c3ae16/69fd8dbf7dde2c067282e479/Analytics_Polaris_Users.png)

## Apply Filters and Manage Views

To apply filters, click **Filters**, select your options, then click **Apply Filter(s)**.

The following filters are available:

-   **Date Range:** Choose from **1 week**, **30 days** (default), **60 days**, or **90 days**. Some charts include a timeline selector for further refinement.
-   **Custom Date:** Set a custom date range using the dropdown.

    **Note:** The custom date range should not exceed **90 days**.

-   **Zoom:** Switch between **1 week**, **30 days**, **60 days**, or **90 days** for trend analysis.
-   **Group By:** View data grouped by day, week, or month, depending on the selected section.

To save a specific filter for later use, click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you don’t need to reapply filters manually each time.
