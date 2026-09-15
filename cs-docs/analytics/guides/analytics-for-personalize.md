---
title: "Analytics for Personalize"
description: "Track Personalize usage with Contentstack's Analytics dashboard. Monitor API requests, impressions, events, and more."
url: /analytics/analytics-for-personalize
uid: bltd6584ade2c367965
---

# Analytics for Personalize

## Analytics for Personalize

The Personalize Analytics dashboard gives organization Owners and Admins a centralized view of how Contentstack Personalize is being used across the organization. Use it to track subscription consumption, monitor API activity, and analyze usage patterns over time.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to open the Personalize Analytics dashboard.

-   What each dashboard section measures.

-   How to filter data and save filter combinations as views.


## Access the Personalize Analytics Dashboard

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Analytics** through the "App Switcher".

2.  By default, the **CMS** dashboard appears. Click **Personalize** to switch to the Personalize dashboard.

    ![Selecting the Personalize dashboard in Analytics](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am897351c073eef942/f404a6072630a663d887831c/Analytics_Personalize_Select.png?locale=en-us)

**Note:** The data in the Personalize dashboard is updated every **24 hours**.

## Personalize Analytics Dashboard Sections

The dashboard is divided into several sections, each offering insights into different aspects of your Personalize usage to help optimize performance and resource utilization.

### Subscription Usage

This section shows your Personalize resource consumption measured against your allocated limits. It tracks the following parameters:

-   **Projects:** Number of projects created.

-   **Experiences:** Total configured experiences.

-   **Audiences:** Number of defined personalization audiences.

-   **Attributes:** User attributes in use.

-   **Manifest Requests:** Requests for retrieving personalized content.

-   **Events:** Total events captured for personalization.

-   **Impressions:** Count of personalized content displays.

-   **Custom Events:** Number of tracked custom events.


![Subscription Usage section of the Personalize Analytics dashboard](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am211dc5ce6e6935c7/2179bc486c1705746900c358/Analytics_Personalize_SubscriptionUsage.png?locale=en-us)

### API Requests

This section visualizes Personalize Edge and Management API usage over a selected time frame. Hover over the chart to view utilization at specific timestamps.

![Line chart of Personalize API request volume](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7e1f7b91d184ec86/680345db2b1be9dca0154dd5/4._API_requests.png)

### Top URLs

This section displays the most frequently accessed Personalize API endpoints. Use it to analyze usage trends and optimize performance.

![Bar chart of most accessed Personalize API endpoints](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb657db92b42c8eda/680345f16758e04d0f5b6aab/5._top_URLs.png)

### Status Codes

This section breaks down API call results by status (success, error, or unsupported) to support diagnostics.

![Bar chart of most accessed Personalize API endpoints](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacd73a43a46d9d75/680346081650673f2124d0db/6._status_codes.png)

### Management API Device Usage

This section shows the device types accessing the Personalize Management API, helping you understand user interaction environments.

![Chart of device types accessing the Management API](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a1db2d2e7c381fe/6803462478262471b02e526f/7._management_API_device_usage.png)

### Edge SDK Usage

This section provides a pie chart summarizing Edge SDK consumption across different implementations.

![Pie chart of Edge SDK usage distribution](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c6424bfb32ae617/6803463dd8072e0b2bc395d2/8._edge_sdk_usage.png)

The analytics dashboard for Personalize offers crucial insights into your personalization efforts and helps improve decision-making across your strategies.

## Apply Filters and Manage Views

To filter dashboard data, click **Filters**, select your desired options, and then click **Apply Filter(s)**.

The following filters are available:

-   **Projects:** Filter by individual or all projects.

-   **Services:** Filter API requests by all or specific services.

-   **Subtypes:** Filter data by **Events**, **Manifest**, or **User Attributes**.

-   **Status Code:** Show results for selected status codes.

-   **Group By:** Display data grouped by day, week, or month.

-   **Date Range:** Choose from predefined options (1 week, 30 days, 60 days, 90 days). Some graphs allow further range refinement.

-   **Custom Date:** Set a custom range using the dropdown.


**Note:** The custom date range cannot exceed **90 days**.

If you regularly use the same filter combination, you can save it as a view. Click the horizontal ellipsis next to **Reset** and choose **Save As New View**.

![Animated walkthrough showing how to apply filters and save a custom view in the Personalize Analytics dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd966086b879ce06/6808dad17f7ff4761a9fa863/Apply_filters_and_manage_-_cam_version.gif)

Once saved, you can access the view from the dropdown menu without reapplying filters manually.

## Related Resources

-   [Usage Analytics](/docs/developers/apis/analytics-api/usage-analytics)
-   [Top URLs](/docs/developers/apis/analytics-api/top-urls)
-   [Status Code](/docs/developers/apis/analytics-api/status-code)
-   [Device Usage](/docs/developers/apis/analytics-api/device-usage)
-   [SDK Usage](/docs/developers/apis/analytics-api/sdk-usage)
