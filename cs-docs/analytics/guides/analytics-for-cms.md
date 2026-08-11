---
title: "Analytics for CMS"
description: "Monitor your CMS performance with our Analytics dashboard. Track usage, manage resources, and optimize efficiency with key metrics and insights."
url: /analytics/analytics-for-cms
---

# Analytics for CMS

## Analytics for CMS

The Analytics dashboard for Content Management System (CMS) gives organization owners and admins a centralized view of how the CMS is used across their organization. It covers resource consumption, API activity, bandwidth, assets, entries, and device usage across all stacks.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to access the CMS Analytics dashboard.
    
-   What each dashboard section shows and what metrics it includes.
    
-   How to apply filters and save custom views.
    

## Access the CMS Analytics Dashboard

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Analytics** through the "App Switcher".
    
2.  By default, the **CMS** analytics dashboard appears, which shows detailed metrics specific to your CMS usage.
    
    ![CMS Analytics dashboard overview](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am494ac21d4b4f7b6b/a498b522ef0c97c8ee1c2160/Analytics_CMS_Dashboard.png?locale=en-us)

**Note:** Dashboard data updates every **24 hours**. Data shown does not reflect real-time activity.

## CMS Analytics Dashboard Sections

The Analytics dashboard is divided into several sections, each providing valuable insights into different aspects of your CMS usage. These sections help you monitor and optimize your performance, resource utilization, and overall efficiency.

### Subscription Usage

This section shows your organization's current CMS resource consumption, including bandwidth, API requests, and the number of [stacks](/docs/headless-cms/about-stack), [entries](/docs/headless-cms/about-entries), [assets](/docs/headless-cms/about-assets), [content types](/docs/headless-cms/about-content-types), and other resource metrics. It compares current usage against your subscription's allocated limits.

![Subscription Usage section of the CMS Analytics dashboard](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amaad8764b9dc008be/762c9ee7410d0d16354be687/Analytics_CMS_SubscriptionUsage.png?locale=en-us)

**Note:** The data displayed reflects usage from the last **30 days**. For example, if viewed on February 20, the metrics cover the period from January 21 to February 20.

### Usage by Stacks

This section offers detailed metrics for each stack, allowing you to monitor the performance and resource utilization of individual stacks within your CMS. This information helps in managing and optimizing your content infrastructure effectively.

![Stack-level metrics in the Usage by Stacks section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf21447e53baf684a/68028e0aa1f311e30afec641/2-usage-by-stacks.gif)

Metrics available for each stack:

-   **Stack Name:** Name of all stacks within your organization.
    
-   **API Key:** API keys of the listed stacks.
    
-   **Owner:** Email addresses of the owners of the listed stacks.
    
-   **Content Types:** Number of content types within the stacks.
    
-   **Global Fields:** Number of global fields within the stacks.
    
-   **Entries:** Number of entries created within the stacks.
    
-   **Assets:** Number of assets present within the stacks.
    
-   **Environments:** Number of environments created within the stacks.
    
-   **Locales:** Number of languages created within the stacks.
    
-   **Extensions:** Number of extensions created within the stacks.
    
-   **Webhooks:** Number of webhooks created within the stacks.
    
-   **Custom Roles:** Number of custom roles within the stacks.
    
-   **Branches:** Number of branches within the stacks.
    
-   **Branch Aliases:** Number of branch aliases within the stacks.
    

**Note:** [Global Fields](/docs/headless-cms/about-global-field), [Branches](/docs/headless-cms/about-branches), and [Branch Aliases](/docs/headless-cms/about-aliases) are plan-based features. To enable these features for your organization, contact the [support](mailto:support@contentstack.com) team.

### API Usage

The API Usage section shows a visualization of API call volume over a selected time frame. Hover over the chart to see API utilization at a specific timestamp.

![Line graph of API call volume](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4739f0c9bd75f41/68079acceac33265bed9d771/3._API_usage.png)

### Bandwidth Usage

The Bandwidth Usage section shows bandwidth consumption over time, helping you track usage against your subscription limits. Hover over the chart to see bandwidth usage at a specific timestamp.

![Line graph of bandwidth usage over time](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc5c1217ffa1ffac9/68028f3a95f40ffa5b994856/4._bandwidth_usage.png)

### Assets

The Assets section shows the total number of assets available within your organization and tracks asset count trends over a selected time frame.

![Chart of total asset count trends](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd8a5a587c211d92/68028f6c54c690ee69cab2ec/5._assets.png)

### Entries

The Entries section shows the total number of entries available within your organization.

![Chart of total entry count](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt702e55e16145ea8f/68028f8d696c05a0a035da97/6._entries.png)

### Top URLs

The Top URLs section shows the most frequently accessed API endpoints within your CMS, helping you understand usage patterns and identify opportunities to optimize performance.

![Chart of most frequently accessed API endpoints](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d90116494534be3/68028fcf0d8e5f774a012f2e/7._URLs.png)

### Status Codes

The Status Codes section shows the outcomes of API calls, including successful requests, errors, and unsupported requests, so you can identify and address issues quickly.

![Chart of API call outcomes by status code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta5e585cfd2b6ad99/680335eb4851b5e7b7d314ab/7._status_codes.png)

### Cache Usage

The Cache Usage section shows API call hit and miss ratios, helping you assess and optimize your cache configuration. You can filter the chart to display only HITs or MISSes.

![Chart of cache hit and miss ratios](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt142c1625c3a4a4fd/68028ffd54c6907058cab2f7/9._cache_usage.png)

### SDK Usage

The SDK Usage section shows a pie chart of SDK consumption across your customers, helping you track the usage of individual SDKs.

![Pie chart of SDK usage distribution](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2a47b2f6913d4d0/68078571da898c2eb1f878fb/10._SDK_usage.png)

### Device Usage

The Device Usage section shows a pie chart of the device types used to access your CMS. Use this data to understand how users access your content and optimize accordingly.

![Pie chart of device types accessing the CMS](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89bf865d13633c5c/6802901b1ef98323c4f79901/11._device_usage.png)

The analytics dashboard for CMS offers crucial insights into your resource usage.

## Apply Filters and Manage Views

To apply filters, click **Filters** and then the **Apply Filter(s)** button after selecting your desired options.

You can refine dashboard data using the following filters:

-   **Stacks:** Select specific stacks or choose **All Stacks** for a consolidated view.
    
-   **Services:** Filter API requests by specific services or view all services together.
    
-   **Status Code:** Filter the chart to show only specific status codes.
    
-   **Cache:** Filter the chart to show only HITs or MISSes.
    
-   **Group By:** Organize data by daily, weekly, or monthly intervals.
    
-   **Date Range:** Choose from predefined time filters: 1 week, 30 days (default), 60 days, or 90 days. Some sections include a date selector below the graph to refine data for a custom period within the last 90 days.
    
-   **Custom Date:** Use the date dropdown to set a specific or custom range.
    

**Note:** The custom date range must not exceed **90 days**.

To save a filter combination as a view, click the horizontal ellipsis (**...**) beside **Reset** and select **Save As New View**. Saved views are accessible from the dropdown without needing to reapply filters manually.

![Applying filters and saving a custom view](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd966086b879ce06/6808dad17f7ff4761a9fa863/Apply_filters_and_manage_-_cam_version.gif)

## Related Resources

-   [Usage Analytics](/docs/developers/apis/analytics-api/usage-analytics)
-   [Top URLs](/docs/developers/apis/analytics-api/top-urls)
-   [Status Code](/docs/developers/apis/analytics-api/status-code)
-   [Cache Usage](/docs/developers/apis/analytics-api/cache-usage)
-   [SDK Usage](/docs/developers/apis/analytics-api/sdk-usage)
-   [Device Usage](/docs/developers/apis/analytics-api/device-usage)
