---
title: "[Analytics Content] - Analytics for CMS"
description: Analytics dashboard for CMS overview, key sections, and filters for monitoring CMS usage within an organization.
url: https://www.contentstack.com/docs/analytics/analytics-for-cms
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
  - owners
version: unknown
last_updated: 2026-03-25
---

# [Analytics Content] - Analytics for CMS

This page explains the Analytics dashboard for CMS, including what metrics and sections are available and how to apply filters and save views. It is intended for organization Owner and Admin users who need to monitor CMS usage, resource consumption, and API/bandwidth trends.

## Analytics for CMS

The Analytics dashboard for CMS provides a comprehensive overview of how your **Content Management System (CMS)** is utilized within your organization. This dashboard includes key metrics that are essential for managing and optimizing your CMS effectively.

**Note:** Only organization [Owner](../developers/organization/organization-roles.md#organization-owner) and [Admin](../developers/organization/organization-roles.md#organization-admin) roles can access the Analytics feature.

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- From the dropdown in the header, select the organization whose analytics you want to view.
- Click the “Analytics” icon in the left panel to navigate to the Analytics dashboard.
- By default, you will see the **CMS** analytics dashboard, which provides detailed insights and metrics specific to your CMS usage.

**Note:** The data in the CMS dashboard is updated every **24 hours**.

## Key Sections of the CMS Analytics Dashboard

The Analytics dashboard is divided into several key sections, each providing valuable insights into different aspects of your CMS usage. These sections help you monitor and optimize your performance, resource utilization, and overall efficiency.

### Subscription Usage

This section gives an overview of your CMS resource consumption, such as bandwidth, API requests, and the number of [stacks](../developers/set-up-stack/about-stack.md), [entries,](../content-managers/author-content/about-entries.md) [assets](../content-managers/author-content/about-assets.md), [content types](../developers/create-content-types/about-content-types.md), and much more. It helps you manage your subscription limits by showing a comparison of your current usage against the allocated resources.

**Note:** The data displayed reflects usage from the last **30 days**. For example, if viewed on February 20, the metrics will cover the period from January 21 to February 20.

### Usage by Stacks

This section offers detailed metrics for each stack, allowing you to monitor the performance and resource utilization of individual stacks within your CMS. This information helps in managing and optimizing your content infrastructure effectively.

Here are some of the metrics available:
- **Stack Name**: Name of all the stacks within your organization.
- **API Key**: API keys of the listed stacks.
- **Owner**: Email addresses of the owners of the listed stacks.
- **Content Types**: Number of content types within the stacks.
- **Global Fields**: Number of global fields within the stacks.
- **Entries**: Number of entries created within the stacks.
- **Assets**: Number of assets present within the stacks.
- **Environments**: Number of environments created within the stacks.
- **Locales**: Number of languages created within the stacks.
- **Extensions**: Number of extensions created within the stacks.
- **Webhooks**: Number of webhooks created within the stacks.
- **Custom Roles**: Number of custom roles within the stacks.
- **Branches**: Number of branches within the stacks.
- **Branch Aliases**: Number of branch aliases within the stacks.

**Note:** [Global Fields](../developers/global-field/about-global-field.md), [Extensions](../developers/experience-extensions-overview/about-experience-extensions.md), [Branches](../developers/branches/about-branches.md), and [Branch Aliases](../developers/branches/about-aliases.md) are plan-based features. To enable these features for your organization, reach out to our [support](mailto:support@contentstack.com) team.

### API Usage

The API Usage section features a visualization of API usage over a selected time frame. This visualization helps you monitor and analyze the volume and frequency of API calls within your CMS. Hover over the chart to see API utilization at a specific timestamp.

### Bandwidth Usage

This section visually tracks bandwidth usage over time, helping you ensure that you stay within your subscription limits. Hover anywhere over the chart to see bandwidth usage for a specific timestamp.

### Assets

The Assets section provides an overview of the total number of assets available within your organization. This visualization helps monitor asset usage trends over a selected time frame, enabling better resource management.

### Entries

The Entries section provides an overview of the total number of entries available within your organization.

### Top URLs

The Top URLs section displays the most frequently accessed API endpoints within your CMS, helping you understand user interactions and optimize your system's performance.

### Status Codes

This section monitors the status of API calls, including successful requests, errors, and unsupported requests, to help you identify and address any issues quickly.

### Cache Usage

This section provides an overview of API call hit/miss ratios, helping you optimize cache settings for better performance. You can filter the chart to display only HITs or MISSes.

### SDK Usage

This section offers insights into SDK usage by your customers through a pie chart, which helps you track the consumption of individual SDKs.

### Device Usage

This section shows data on the types of devices used to access your CMS, providing a better understanding of user interactions. The pie chart helps you track device usage, allowing you to optimize your website or services accordingly.

The analytics dashboard for CMS offers crucial insights into your resource usage.

## Apply Filters and Manage Views

To apply filters, click **Filters** and then the **Apply Filter(s)** button after selecting your desired options.

The data can be refined by applying filters based on the following criteria:
- **Stacks:** Select specific stacks or choose **All Stacks** to get a consolidated view.
- **Services:** Filter API requests based on specific services, or view all services together.
- **Status Code:** Filter the chart to show only specific status codes.
- **Cache:** Filter the chart to show only HITs or MISSes.
- **Group By:** Organize the data by daily, weekly, or monthly intervals.
- **Date Range:** Choose from predefined time filters (1 week, 30 days (default), 60 days, or 90 days). Some sections also include a date selector below the graph to refine data for a custom period within the last 90 days.
- **Custom Date:** Use the date dropdown to set a specific or custom range.**Note:** The custom date range should not exceed more than **90 days**.

If you frequently monitor specific filter combinations, you can save them as a view. To save a new view, click the horizontal ellipsis (**...**) beside **Reset** and select **Save As New View**.

Once saved, you can quickly access your preferred view from the dropdown without needing to reapply filters manually.

## Common questions

### Who can access the Analytics feature for CMS?
Only organization Owner and Admin roles can access the Analytics feature.

### How often is the CMS dashboard data updated?
The data in the CMS dashboard is updated every 24 hours.

### What time period does “Subscription Usage” reflect?
The data displayed reflects usage from the last 30 days.

### How long can a custom date range be when filtering?
The custom date range should not exceed more than 90 days.