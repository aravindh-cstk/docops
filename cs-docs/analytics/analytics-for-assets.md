---
title: "[Analytics Content] - Analytics for Assets"
description: Analytics dashboard for Assets provides detailed insights into asset usage, storage consumption, API activity, and AI-enabled asset adoption across your organization.
url: https://www.contentstack.com/docs/analytics/analytics-for-assets
product: Contentstack
doc_type: analytics-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-05-22
---

# [Analytics Content] - Analytics for Assets

This page explains how to access and use the Analytics dashboard for Assets in Contentstack, including what each dashboard section shows and how to apply filters and save views. It is intended for organization users with the required roles who need to monitor asset usage, storage, API activity, bandwidth, caching, and AI-enabled asset adoption across an organization.

## Analytics for Assets

The Analytics dashboard for Assets provides detailed insights into asset usage, storage consumption, API activity, and AI-enabled asset adoption across your organization. Use these metrics to monitor storage trends, bandwidth usage, API requests, and cache performance across your organization.

**Note:** Only organization [Owner](../developers/organization/organization-roles.md#organization-owner), [Admin](../developers/organization/organization-roles.md#organization-admin), and Product Analytics Viewer roles can access Analytics.

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Analytics** through the “App Switcher”.
- By default, the **CMS** analytics dashboard appears. Click **Assets** to switch dashboards.![Analytics_Assets_Select.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am66d5dae27a0c3da1/99c4cb9a3336e17e4dfe5ed5/Analytics_Assets_Select.png?locale=en-us)

**Note:** The data in the Assets dashboard is updated every **24 hours**.

## Key Sections of the Agents Analytics Dashboard

The dashboard is divided into several key sections, each providing insights into asset usage, storage, API activity, and AI-enabled asset adoption.

### Subscription Usage

This section provides a high-level snapshot of your asset ecosystem across your organization. It displays key metrics including total assets, storage consumption, deleted assets, workspaces, spaces, custom asset types, fields, and AI-enabled assets.

Use these summary cards to quickly assess asset volume, storage usage, and AI-enabled asset adoption across your organization.

### Storage

This section displays the total storage consumed by different asset types over a selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze storage trends.

The chart highlights storage usage trends across the selected period.

### API Usage

This section displays the number of asset-related API requests over a selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze request trends.

This data helps identify API activity patterns across integrations.

### Bandwidth Usage

This section displays the amount of bandwidth consumed by assets over a selected time range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze usage trends.

This view helps you track content delivery consumption, identify traffic spikes, and manage bandwidth allocation effectively.

### Status Codes

This section displays the distribution of asset-related API response codes for the selected date range. It helps you monitor successful requests, client errors, and server errors.

This view supports troubleshooting by highlighting response patterns and identifying potential integration issues.

### Cache Usage

This section displays cache performance metrics for asset delivery within the selected date range. It helps you analyze cache hit and miss patterns.

This data helps analyze caching efficiency and repeated origin requests.

### AI-Enabled Assets Usage

This section displays activity related to assets enhanced with AI capabilities within the selected date range. It helps you monitor adoption and usage trends of AI-powered asset features.

This view provides visibility into how AI-enabled assets contribute to your overall asset management strategy.

### Top 5 Spaces by AI-Enabled Assets

This section highlights the **five spaces** with the highest number of AI-enabled assets within the selected date range. It helps you identify where AI capabilities are most actively used.

This view supports better visibility into space-level AI adoption and usage distribution across your organization.

### Top 5 AI-Enabled Asset Creators

This section highlights the **five users** who have created or managed the highest number of AI-enabled assets within the selected date range. It provides visibility into user-level adoption of AI capabilities.

This view helps identify key contributors and understand how AI features are utilized across teams.

## Apply Filters and Manage Views

To apply filters, click **Filters** and then click **Apply Filter(s)** after selecting your desired options.

Filters available include:
- **Spaces:** View data for a specific space or all spaces.
- **Asset Category:** Filter data by asset category.
- **Status Code:** Filter data by specific API response codes.
- **Cache:** Filter by cached responses (All, HIT, or MISS).
- **Group By:** View data grouped by day, week, or month, depending on the selected section.
- **Date Range:** Choose from **1 week**, **30 days** (default), **60 days**, or **90 days**. Some charts include a timeline selector for further refinement.
- **Zoom:** Switch between **1 week**, **30 days**, **60 days**, or **90 days** for trend analysis.

To save a specific filter for later use, click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you don’t need to reapply filters manually each time.

## Common questions

### Who can access Analytics for Assets?
Only organization Owner, Admin, and Product Analytics Viewer roles can access Analytics.

### How often is the data in the Assets dashboard updated?
The data in the Assets dashboard is updated every 24 hours.

### How do I switch from the CMS analytics dashboard to the Assets dashboard?
Navigate to **Analytics** through the “App Switcher”, then click **Assets** to switch dashboards.

### How do I save filters for reuse?
Click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.