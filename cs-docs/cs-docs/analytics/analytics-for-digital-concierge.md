---
title: "[Analytics Content] - Analytics for Digital Concierge"
description: Analytics dashboard details and usage insights for Digital Concierge in Contentstack Agent OS.
url: https://www.contentstack.com/docs/analytics/analytics-for-digital-concierge
product: Contentstack
doc_type: analytics-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-05-15
---

# [Analytics Content] - Analytics for Digital Concierge

This page explains the Digital Concierge Analytics dashboard, who can access it, how to open it in Contentstack, and how to interpret key sections and filters to monitor usage, conversations, and knowledge base activity.

Analytics for Digital Concierge

This dashboard provides detailed insights into how Digital Concierge is used across your organization. Digital Concierge is a knowledge-first chatbot built on Contentstack Agent OS that delivers responses using indexed knowledge sources. Use these metrics to monitor agent activity, conversation trends, knowledge base updates, and overall Digital Concierge usage across your organization.

**Note:** Only organization [Owner](/docs/developers/organization/organization-roles#organization-owner), [Admin](/docs/developers/organization/organization-roles#organization-admin), and Product Analytics Viewer roles can access Analytics.

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Analytics** through the “App Switcher”.
- By default, the **CMS** analytics dashboard appears. Click **Agent OS** and then select **Digital Concierge** to switch dashboards.

**Note:** The data in the Digital Concierge dashboard updates in real-time, with a latency of **5–10 minutes**.

## Key Sections of the Digital Concierge Analytics Dashboard
This Digital Concierge Analytics dashboard is divided into several key sections, each providing insights into different aspects of Digital Concierge activity and usage.

### Overview
This section provides a high-level snapshot of your Digital Concierge ecosystem. It highlights key metrics such as **Total Agents**, **Total Threads**, and **Total Tokens**.

These summary cards help you quickly assess agent activity, conversation volume, and token consumption across your organization.

### Knowledge Base Activity
This section displays the trend of create, update, and delete operations performed on knowledge sources over the selected date range. Use the zoom options (**1w**, **30d**, **60d**, **90d**) and date selector to analyze activity trends.

This data helps identify periods of high content activity and monitor changes to the knowledge base used by Digital Concierge agents.

### Active Conversations
This section displays the volume of API requests made by known and anonymous users over the selected date range, shown as a daily bar chart.

**Anonymous conversations** occur when a website visitor interacts with the Digital Concierge widget without the embedding application sending an `x-user-id` header.

**Known (identified) conversations** occur when the embedding application passes an `x-user-id` header, or the SDK's `userId` parameter, to identify the visitor.

The data helps you analyze engagement trends and identify peak interaction periods across your Digital Concierge deployment.

## Apply Filters and Manage Views
To apply filters, click **Filters** and then click **Apply Filter(s)** after selecting your desired options.

Filters available include:
- **Date Range:** Choose from **1 week**, **30 days** (default), **60 days**, or **90 days**. Some charts include a timeline selector for further refinement.
- **Custom Date:** Set a custom date range using the dropdown.**Note:** The custom date range should not exceed **90 days**.
- **Zoom:** Switch between **1 week**, **30 days**, **60 days**, or **90 days** for trend analysis.
- **Projects:** View metrics for a specific project or all projects together.
- **Group By:** View data grouped by day, week, or month, depending on the selected section.

To save a specific filter for later use, click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you don’t need to reapply filters manually each time.

## Common questions

### Who can access the Digital Concierge Analytics dashboard?
Only organization Owner, Admin, and Product Analytics Viewer roles can access Analytics.

### How do I switch to the Digital Concierge dashboard?
Navigate to **Analytics** through the “App Switcher”, then click **Agent OS** and select **Digital Concierge**.

### How fresh is the data shown in the dashboard?
The data updates in real-time, with a latency of **5–10 minutes**.

### What makes a conversation “known” vs “anonymous”?
Anonymous conversations occur when the embedding application does not send an `x-user-id` header; known conversations occur when an `x-user-id` header or the SDK `userId` parameter is provided.