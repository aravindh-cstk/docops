---
title: "[Analytics Content] - Analytics for Agents"
description: The Analytics dashboard for Agents provides detailed insights into how Contentstack Agents are used across your organization.
url: https://www.contentstack.com/docs/analytics/analytics-for-agents
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-05-15
---

# [Analytics Content] - Analytics for Agents

This page explains how to access and use the Agents Analytics dashboard in Contentstack, including what each dashboard section shows and how to apply filters and save views. It is intended for organization roles with Analytics access who need to monitor agent activity, executions, token usage, and AI model adoption across projects.

## Analytics for Agents

The Analytics dashboard for Agents provides detailed insights into how Contentstack Agents are used across your organization. Agents are intelligent systems built on four core components: triggers, instructions, tools, and AI model, that can reason, decide, and act across workflows. Use these metrics to monitor execution trends, token usage, AI model adoption, and overall agent activity across your organization.

**Note:** Only organization [Owner](/docs/developers/organization/organization-roles#organization-owner), [Admin](/docs/developers/organization/organization-roles#organization-admin), and Product Analytics Viewer roles can access Analytics.

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Analytics** through the “App Switcher”.
- By default, the **CMS** analytics dashboard appears. Click **Agent OS** and then select **Agents **to switch dashboards.

**Note:** The data in the Agents dashboard updates in real-time, with a latency of **5–10 minutes**.

## Key Sections of the Agents Analytics Dashboard

The dashboard is divided into several key sections, each providing insights into different aspects of agent activity and usage.

### Overview

This section provides a high-level snapshot of agent activity across your organization. It highlights key metrics such as Total Agents, Total Active Agents, Total Executions, and Token Consumption.

These summary cards help you quickly assess agent activity, execution frequency, and token consumption across your organization.

### Executions

This section displays the number of successful and failed agent executions over the selected date range shown as a daily bar chart.

Use this section to monitor execution reliability, identify periods with higher failure rates, and track execution trends over time.

### Agent Executions

This section displays execution details for individual agents. For each agent, it shows the AI model it is configured to use, the number of executions performed, and the total tokens consumed.

Use this section to identify the most active agents, analyze AI model usage, and monitor token consumption across agent configurations.

### Top AI Models

This section displays the distribution of agents by the AI model they are configured to use, shown as a bar chart. Each bar represents a model and the number of agents built on it.

Use this section to analyze AI model adoption and understand how AI model usage is distributed across your organization.

### Tokens Used

This section displays the trend of total tokens consumed by agent executions over the selected date range, shown as a daily bar chart.

Use this section to monitor token usage trends, identify peak consumption periods, and track AI resource usage across your organization.

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

### Who can access the Agents Analytics dashboard?
Only organization Owner, Admin, and Product Analytics Viewer roles can access Analytics.

### How often does the Agents dashboard data update?
The data in the Agents dashboard updates in real-time, with a latency of 5–10 minutes.

### How do I switch from the CMS analytics dashboard to the Agents dashboard?
By default, the CMS analytics dashboard appears. Click Agent OS and then select Agents to switch dashboards.

### How do I save filters for reuse?
Click the horizontal ellipsis (...) beside Reset and choose Save As New View. Once saved, your view appears in the dropdown menu for quick access.