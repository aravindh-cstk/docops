---
title: "Analytics for Launch"
description: "Optimize Launch deployments with in-depth analytics on project progress, API usage, and device trends for improved performance and resource efficiency."
url: /analytics/analytics-for-launch
uid: blt1b07ffcd95a9dd0e
---

# Analytics for Launch

## Analytics for Launch

The Launch Analytics page provides detailed insights into the progress of your deployment projects. By analyzing key metrics like execution times, project environments, and API performance, you can optimize deployments and make informed, data-driven decisions.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to navigate to the Launch Analytics dashboard using the App Switcher.

-   What each dashboard section measures and how to use it.

-   How to apply filters, group data, and save custom views.


## Access the Launch Analytics Dashboard

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Analytics** through the "App Switcher".

2.  By default, the **CMS** analytics dashboard appears. Click **Launch** to switch to the Launch dashboard.

    ![Selecting the Launch dashboard in Analytics](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ambc5352604fc37a85/dc61adc0a614028ebb59a98e/Analytics_Launch_NewSelect.png?locale=en-us)

**Note:** The data in the Launch dashboard is updated every **24 hours**.

## Launch Analytics Dashboard Sections

The dashboard is divided into several sections, each offering insights into different areas of Launch usage and helping optimize performance and efficiency.

### Subscription Usage

This section displays your current Launch resource consumption, including the number of projects, environments, execution time, build time, and cache revalidations. Use this section to track usage against your subscription limits.

![Subscription Usage section of the Launch Analytics dashboard](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am0dbf823c9a9ebce1/3cfe94435ab7a7ef69c0a7c0/Analytics_Launch_SubscriptionUsage.png?locale=en-us)

### URL Requests

This section displays a time-based graph of URL request volume and frequency. Hover over the chart to see metrics for a specific timestamp.

![Time-series graph of URL request volume](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6664313bab80104b/680335a324632d65fe1263da/4._URL_Requests.png)

### Bandwidth Usage

This section tracks bandwidth consumption over time. Hover over the chart to view bandwidth details for a specific timestamp.

![Time-series chart of bandwidth usage](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb70f1d68936f3cb2/680335b98e7aaaaaf646345a/5._bandwidth_usage.png)

### Top URLs

This section lists the most frequently accessed API endpoints within Launch. Use this section to identify usage trends and find candidates for performance optimization.

![Bar graph of most frequently accessed API endpoints](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfcc8fa86a2e0f0c/680335d645744f927cc99a96/6._top_URLs.png)

### Status Codes

This section breaks down URL request results by HTTP status code, including successes, errors, and unsupported requests. Use this section to support diagnostics and identify patterns in request failures.

![Chart of HTTP status code distribution for URL requests](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta5e585cfd2b6ad99/680335eb4851b5e7b7d314ab/7._status_codes.png)

### Cache Usage

This section shows hit and miss ratios for cached responses. Use this section to evaluate your cache configuration and identify opportunities to improve load times.

![Chart showing cache HIT and MISS counts or percentages over the selected date range.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9c52f22f7e959908/6803362c782624bbaa2e525b/8._cache_usage.png)

### Device Usage

This section displays a pie chart showing the breakdown of devices accessing Launch. Use this section to understand traffic sources and inform decisions about UI optimization for specific device types.

![Pie chart of traffic by device category](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad74109c0e722ff1/68033644bc28a81689a4a966/9._device_usage.png)

By leveraging the Analytics dashboard, you gain actionable insights to optimize deployments, improve system efficiency, and maximize the value of Contentstack Launch.

## Apply Filters and Manage Views

To apply filters, click **Filters**, select your desired options, and then click **Apply Filter(s)**.

The following filters are available:

-   **Projects:** View metrics for a specific project or for all projects together.

-   **Environments:** Filter data for specific environments or for all environments.

-   **Status Code:** Filter by specific HTTP response codes.

-   **Cache:** Filter by HITs or MISSes.

-   **Group By:** View data grouped by day, week, or month.

-   **Date Range:** Choose from 1 week, 30 days (default), 60 days, or 90 days. Some charts include a timeline selector for further refinement.

-   **Custom Date:** Set a custom date range using the dropdown.


**Note:** The custom date range must not exceed **90 days**.

To save a specific filter for later use, click the horizontal ellipsis (**...**) beside **Reset** and select **Save As New View**.

The saved view appears in the dropdown menu so you can reapply it without re-entering the filter options each time.

## Related Resources

-   [Subscription Usage](/docs/developers/apis/analytics-api/subscription-usage)
-   [Usage Analytics](/docs/developers/apis/analytics-api/usage-analytics)
-   [Top URLs](/docs/developers/apis/analytics-api/top-urls)
-   [Status Code](/docs/developers/apis/analytics-api/status-code)
-   [Cache Usage](/docs/developers/apis/analytics-api/cache-usage)
-   [Device Usage](/docs/developers/apis/analytics-api/device-usage)
