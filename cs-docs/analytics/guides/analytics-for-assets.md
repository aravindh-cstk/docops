---
title: "Analytics for Assets"
description: "Gain insights into asset storage, API usage, bandwidth, cache performance, and AI-enabled assets with the Contentstack Assets Analytics dashboard."
url: /analytics/analytics-for-assets
uid: blt0c119733d1aa6249
---

# Analytics for Assets

## Analytics for Assets

The Analytics dashboard for Assets provides detailed insights into asset usage, storage consumption, API activity, and AI-enabled asset adoption across your organization. Use these metrics to monitor storage trends, bandwidth usage, API requests, and cache performance.

## Prerequisite

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to navigate to the Assets Analytics dashboard.

-   What each dashboard section measures and how to interpret it.

-   How to apply filters and save custom views for later use.


## Access the Assets Analytics Dashboard

To access the analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Analytics** through the “App Switcher”.
2.  By default, the **CMS** analytics dashboard appears. Click **Assets** to switch dashboards.![Assets dashboard selection in Analytics](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am66d5dae27a0c3da1/99c4cb9a3336e17e4dfe5ed5/Analytics_Assets_Select.png?locale=en-us)

**Note:** The data in the Assets dashboard is updated every **24 hours**.

## Assets Analytics Dashboard Sections

The dashboard is divided into several key sections, each providing insights into asset usage, storage, API activity, and AI-enabled asset adoption.

### Subscription Usage

This section provides a high-level snapshot of your asset ecosystem across your organization. It displays key metrics including total assets, storage consumption, deleted assets, workspaces, spaces, custom asset types, fields, and AI-enabled assets.

Use these summary cards to quickly assess asset volume, storage usage, and AI-enabled asset adoption across your organization.

![Assets Subscription Usage summary cards](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ameb4f597078ffc529/84c8b167ea137109efa4c972/Analytics_Assets_NewSubscriptionUsage.png?locale=en-us)

### Storage

This section displays the total storage consumed by different asset types over a selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze storage trends.

The chart highlights storage usage trends across the selected period.

![Assets storage consumption chart](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd3fd74109c2d9e45/0977622fbded4e60b2166384/Analytics_Assets_Storage.png)

### API Usage

This section displays the number of asset-related API requests over a selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze request trends.

This data helps identify API activity patterns across integrations.

![Asset API usage chart](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7fffb00f41712965/e28d14dbc3a72426ced6df8f/Analytics_Assets_APIUsage.png)

### Bandwidth Usage

This section displays the amount of bandwidth consumed by assets over a selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze usage trends.

This view helps you track content delivery consumption, identify traffic spikes, and manage bandwidth allocation effectively.

![Asset bandwidth usage chart](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama1e5c2f4bf148454/517303b82538f3ce062b23b7/Analytics_Assets_BandwidthUsage.png)

### Status Codes

This section displays the distribution of asset-related API response codes for the selected date range. It helps you monitor successful requests, client errors, and server errors.

This view supports troubleshooting by highlighting response patterns and identifying potential integration issues.

![Asset API status code distribution](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amf7ba4d00c367170f/21a627abe2f7bf1da8998525/Analytics_Assets_StatusCodes.png?locale=en-us)

### Cache Usage

This section displays cache performance metrics for asset delivery within the selected date range. It helps you analyze cache hit and miss patterns.

This data helps analyze caching efficiency and repeated origin requests.

![Asset cache hit and miss chart](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am795c604b69516df7/f3f345503096ee77c02cba6b/Analytics_Assets_CacheUsage.png?locale=en-us)

### AI-Enabled Assets Usage

This section displays activity related to assets enhanced with AI capabilities within the selected date range. It helps you monitor adoption and usage trends of AI-powered asset features.

This view provides visibility into how AI-enabled assets contribute to your overall asset management strategy.

![AI-enabled assets usage chart](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7ec04bb8427390e4/8107e1be974ec1f6c946e562/Analytics_Assets_AI-Enabled-Assets-Usage.png?locale=en-us)

### Top 5 Spaces by AI-Enabled Assets

This section highlights the **five spaces** with the highest number of AI-enabled assets within the selected date range. It helps you identify where AI capabilities are most actively used.

This view supports better visibility into space-level AI adoption and usage distribution across your organization.

![Top five spaces by AI-enabled assets](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am22d585b7db8cb7c6/078d718a777db470961127e8/Analytics_Assets_Top5-Spaces-AI-Enabled-Assets.png?locale=en-us)

### Top 5 AI-Enabled Asset Creators

This section highlights the **five users** who have created or managed the highest number of AI-enabled assets within the selected date range. It provides visibility into user-level adoption of AI capabilities.

This view helps identify key contributors and understand how AI features are utilized across teams.

![Top five AI-enabled asset creators](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amf40a80052e00f8ca/925e78f55448c73f6b2131c5/Analytics_Assets_Top5-AI-Enabled-Asset-Creators.png?locale=en-us)

## Apply Filters and Manage Views

To filter dashboard data, click **Filters**, select your desired options, and then click **Apply Filter(s)**.

The following filters are available:

-   **Spaces:** View data for a specific space or all spaces.

-   **Asset Category:** Filter data by asset category.

-   **Status Code:** Filter data by specific API response codes.

-   **Cache:** Filter by cached responses (All, HIT, or MISS).

-   **Group By:** View data grouped by day, week, or month, depending on the selected section.

-   **Date Range:** Choose from **1 week**, **30 days** (default), **60 days**, or **90 days**. Some charts include a timeline selector for further refinement.

-   **Zoom:** Switch between **1w**, **30d**, **60d**, or **90d** for trend analysis within a chart.


To save a specific filter configuration for later use, click the horizontal ellipsis (**...**) beside **Reset** and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you do not need to reapply filters manually each time.

## Related Resources

-   [Usage Analytics](/docs/developers/apis/analytics-api/usage-analytics)
-   [Status Code](/docs/developers/apis/analytics-api/status-code)
-   [Cache Usage](/docs/developers/apis/analytics-api/cache-usage)
