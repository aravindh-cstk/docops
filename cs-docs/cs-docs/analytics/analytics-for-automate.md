---
title: "[Analytics Content] - Analytics for Automations"
description: Analytics dashboard details for Automations, including key sections, usage metrics, and filtering/view management.
url: https://www.contentstack.com/docs/analytics/analytics-for-automate
product: Contentstack
doc_type: analytics-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-05-15
---

# [Analytics Content] - Analytics for Automations

This page explains how to access and use the Analytics dashboard for Automations in Contentstack, including what metrics are available and how to filter and save views. It is intended for organization roles with Analytics access who need to monitor automation execution, API usage, and related performance indicators.

## Analytics for Automations

The Analytics dashboard for [Automations](/docs/developers/automation-hub-guides/about-automation-hub) is designed to provide comprehensive insights into the execution and performance of automation scripts within your organization. This tool allows you to monitor the efficiency and impact of automation by tracking various key metrics, ensuring that your automation processes are optimized for peak performance.

**Note:** Only organization [Owner](../developers/organization/organization-roles.md#organization-owner), [Admin](../developers/organization/organization-roles.md#organization-admin), and Product Analytics Viewer roles can access Analytics.

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Analytics** through the “App Switcher”.
- By default, the **CMS** analytics dashboard appears. Click **Agent OS** and then select **Automations** to switch dashboards.//SS

**Note:** The data in the Automations dashboard is updated every **24 hours**.

## Key Sections of the Automations Analytics Dashboard

The Analytics dashboard is divided into several key sections, each providing valuable insights into different aspects of your Automations usage. These sections help you monitor and optimize your performance, resource utilization, and overall efficiency.

### Subscription Usage

This section gives an overview of the execution usage, showing the number of executions performed in Automations, along with your organization’s set limit.

### API Usage

The API Usage section features a visualization of API usage over a selected time frame. This visualization helps you monitor and analyze the volume and frequency of API calls within Automations. Hover anywhere over the chart to see the corresponding API utilization for a specific timestamp.

### Bandwidth Usage

This section visually tracks bandwidth usage over time, helping you ensure that you stay within your subscription limits. Hover anywhere over the chart to see the corresponding bandwidth utilization for a specific timestamp.

### Top URLs

The Top URLs section displays the most frequently accessed API endpoints within Automations, helping you understand user interactions and optimize your system's performance.

### Status Codes

This section monitors the status of API calls, including successful requests, errors, and unsupported requests, to help you identify and address any issues quickly.

The Analytics dashboard for Automations enables you to gain valuable insights into your automation performance, allowing you to make data-driven decisions to improve efficiency, optimize resource allocation, and ensure the smooth operation of your automation processes.

## Apply Filters and Manage Views

To apply filters, click **Filters** and then the **Apply Filter(s)** button after selecting your desired options.

The data can be refined by applying filters based on the following criteria:
- **Status Code:** Filter the chart to show only specific status codes.
- **Group By:** Organize the data by daily, weekly, or monthly intervals.
- **Date Range:** Choose from predefined time filters (1 week, 30 days (default), 60 days, or 90 days). Additionally, some sections include a date selector below the graph to refine the range within the last 90 days.
- **Custom Date:** Use the date dropdown filter to select a specific range or set a custom date range.**Note:** The custom date range should not exceed **90 days**.

To save a specific filter for later use, click the horizontal ellipsis (...) beside Reset and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you don’t need to reapply filters manually each time.

## Common questions

### Who can access the Analytics dashboard for Automations?
Only organization Owner, Admin, and Product Analytics Viewer roles can access Analytics.

### How often is the Automations dashboard data updated?
The data in the Automations dashboard is updated every 24 hours.

### How do I switch to the Automations Analytics dashboard?
In Analytics, the CMS dashboard appears by default; click Agent OS and then select Automations to switch dashboards.

### How do I save a set of filters for reuse?
Click the horizontal ellipsis (...) beside Reset and choose Save As New View; the saved view appears in the dropdown menu for quick access.