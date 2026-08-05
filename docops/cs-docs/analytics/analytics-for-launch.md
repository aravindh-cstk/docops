---
title: "[Analytics Content] - Analytics for Launch"
description: Analytics for Launch
url: https://www.contentstack.com/docs/analytics/analytics-for-launch
product: Contentstack
doc_type: article
audience:
  - developers
version: current
last_updated: 2026-05-15
---

# [Analytics Content] - Analytics for Launch

This page explains how to use the Launch Analytics dashboard in Contentstack to monitor deployment project progress and performance metrics. It is intended for organization roles with Analytics access who need to review usage, requests, and operational trends. Use it when you want to analyze Launch activity, apply filters, and save views for ongoing monitoring.

## Analytics for Launch

The [Launch](../developers/launch/about-launch.md) Analytics page provides detailed insights into the progress of your deployment projects. By analyzing key metrics like execution times, project environments, and API performance, you can optimize deployments and make informed, data-driven decisions.

**Note:** Only organization [Owner](../developers/organization/organization-roles.md#organization-owner), [Admin](../developers/organization/organization-roles.md#organization-admin), and Product Analytics Viewer roles can access Analytics.

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Analytics** through the “App Switcher”.
- By default, the **CMS** analytics dashboard appears. Click **Launch** to switch dashboards.

**Note:** The data in the Launch dashboard is updated every **24 hours**.

## Key Sections of the Launch Analytics Dashboard

The dashboard is divided into key sections, offering insights into different areas of Launch usage and helping optimize performance and efficiency.

### Subscription Usage

Shows your Launch resource consumption including number of projects, environments, execution time, build time, and cache revalidations. It helps you track your usage against subscription limits.

### URL Requests

Displays a time-based graph of URL usage, allowing you to analyze request volume and frequency. Hover over the chart for specific timestamps.

### Bandwidth Usage

Tracks bandwidth usage over time. Hover to view bandwidth details for specific timestamps.

### Top URLs

Displays the most frequently accessed API endpoints within Launch to help identify usage trends and optimize performance.

### Status Codes

Breaks down URL request statuses such as successes, errors, and unsupported requests to aid in diagnostics.

### Cache Usage

Displays hit/miss ratios for cached responses. Helps optimize cache settings and improve load times.

### Device Usage

Pie chart representation of devices accessing Launch to understand traffic sources and guide UI optimization.

By leveraging the Analytics dashboard, you gain actionable insights to optimize deployments, improve system efficiency, and maximize the value of Contentstack Launch.

## Apply Filters and Manage Views

To apply filters, click **Filters** and then click **Apply Filter(s)** after selecting your desired options.

Filters available include:
- **Projects:** View metrics for a specific project or all projects together.
- **Environments:** Filter data for specific or all environments.
- **Status Code:** Filter by specific response codes.
- **Cache:** Filter by HITs or MISSes.
- **Group By:** View data grouped by day, week, or month.
- **Date Range:** Choose from 1 week, 30 days (default), 60 days, or 90 days. Some charts include a timeline selector for further refinement.
- **Custom Date:** Set a custom date range using the dropdown.**Note:** The custom date range should not exceed **90 days**.

To save a specific filter for later use, click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you don’t need to reapply filters manually each time.

## Common questions

### Who can access Launch Analytics?
Only organization Owner, Admin, and Product Analytics Viewer roles can access Analytics.

### How often is Launch dashboard data updated?
The data in the Launch dashboard is updated every 24 hours.

### How do I switch from CMS analytics to Launch analytics?
Navigate to **Analytics** through the “App Switcher”, then click **Launch** to switch dashboards.

### How do I save a filter setup for later?
Click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.