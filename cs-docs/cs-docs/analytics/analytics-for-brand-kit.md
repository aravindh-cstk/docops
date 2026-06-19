---
title: "[Analytics Content] - Analytics for Brand Kit"
description: Analytics dashboard overview and usage metrics for Brand Kit, including key sections, filters, and access requirements.
url: https://www.contentstack.com/docs/analytics/analytics-for-brand-kit
product: Contentstack
doc_type: analytics-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-25
---

# [Analytics Content] - Analytics for Brand Kit

This page explains how to access and use the Analytics dashboard for Brand Kit in Contentstack, including the key dashboard sections and available filters. It is intended for organization users (especially Owners and Admins) who need to monitor Brand Kit usage, performance, and resource consumption.

## Analytics for Brand Kit

The Analytics dashboard for Brand Kit offers a comprehensive overview of how your organization's Brand Kit is utilized. This dashboard includes key metrics essential for managing and optimizing your brand assets effectively.

**Note:** Only the organization [Owner](/docs/developers/organization/organization-roles#organization-owner) or [Admin](/docs/developers/organization/organization-roles#organization-admin) roles can access the Analytics feature.

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to **Analytics** through “App Switcher”.
- By default, the **CMS** analytics dashboard appears. Click **Brand Kit** to switch dashboards.

**Note:** The data in the Brand Kit dashboard is updated every **24** **hours**.

## Key Sections of the Brand Kit Analytics Dashboard

The Brand Kit Analytics dashboard is divided into several key sections, each providing valuable insights into different aspects of your Brand Kit usage. These sections help you monitor and optimize your performance, resource utilization, and overall efficiency.

### Subscription Usage

The following parameters are included in this section:
- **Brand Kit:** The number of Brand Kits created within your organization.
- **Voice Profile:** The total number of voice profiles configured.
- **Knowledge Vault:** The number of items stored in the knowledge vault.
- **Tokens:** The number of tokens consumed for generative AI requests.

**Note:** Token usage includes only requests sent to a Brand Kit’s custom LLM. If no Brand Kit is selected, requests use the default Contentstack LLM and are not included in the Tokens metrics.

### Usage by Brand Kit

This section provides a breakdown of usage per Brand Kit. It helps you understand how each Brand Kit is consuming resources individually.

The following details are shown for each Brand Kit:
- **Brand Kit Name:** Name of the Brand Kit.
- **Voice Profiles:** Number of voice profiles associated with the Brand Kit.
- **Knowledge Vaults:** Number of items stored in the knowledge vault for the Brand Kit.
- **Tokens Used:** Number of tokens consumed by the Brand Kit for generative AI requests.

Use this data to identify usage patterns, compare performance across kits, and optimize resource allocation.

### Content Generations

This section displays a time-based graph showing the number of GenAI requests made over time. Hover over the chart to see usage details for specific timestamps.

**Note:** If a Brand Kit is selected during AI content generation, the chart includes only requests processed through that kit’s custom LLM.

### Content Generations Status Code

This section tracks the number of content generation requests by status, including successes, errors, and unsupported requests. This applies to both the default LLM and custom LLMs linked to Brand Kits.

### Brand Kit Requests

This section shows the volume and frequency of Brand Kit requests over time. Hover over the chart to inspect specific data points.

### Brand Kit Status Usage

This section tracks the number of Brand Kit URL requests by status, including successes, errors, and unsupported requests. It helps assess API performance and troubleshoot issues.

### AI Assistant Request

This section shows you how frequently the AI Assistant is used over time. Hover to see request volume by timestamp.

**Note:** If a Brand Kit is selected, the chart displays the request processed by that kit’s custom LLM. If no Brand Kit is selected, it displays requests processed by the default Contentstack LLM.

### AI Status Code Usage

This section tracks the number of AI Assistant API requests by status, including successes, errors, and unsupported requests. It helps assess API performance and troubleshoot issues.

### Knowledge Vault Utilization

Displays usage trends of the Knowledge Vault, showing how actively it is being accessed or updated over time.

This applies only to Content Generation requests where a Brand Kit is selected. Knowledge Vault does not include activity from requests using the default LLM (without a Brand Kit).

## Apply Filters and Manage Views

To apply filters, click **Filters** and then click **Apply Filter(s)** after selecting your desired options.

Filters available include:
- **Brand Kits**: View metrics for a specific Brand Kit or all Brand Kits together.
- **Voice Profiles:** View metrics for a specific voice profile or all voice profiles together.
- **Stacks:** View AI Assistant metrics for a specific stack or all stacks together.
- **Status Code:** Filter by specific response codes.
- **Group By:** View data grouped by day, week, or month.
- **Date Range:** Choose from 1 week, 30 days (default), 60 days, or 90 days. Some charts include a timeline selector for further refinement.
- **Custom Date:** Set a custom date range using the dropdown.**Note:** The custom date range should not exceed **90 days.**

To save a specific filter for later use, click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you don’t need to reapply filters manually each time.

## Common questions

### Who can access the Analytics feature for Brand Kit?
Only the organization Owner or Admin roles can access the Analytics feature.

### How often is the Brand Kit dashboard data updated?
The data in the Brand Kit dashboard is updated every 24 hours.

### Can I filter analytics to a specific Brand Kit or Voice Profile?
Yes. Filters available include Brand Kits and Voice Profiles to view metrics for a specific item or all items together.

### How do I save a set of filters as a reusable view?
Click the horizontal ellipsis (...) beside Reset and choose Save As New View. Once saved, the view appears in the dropdown menu for quick access.