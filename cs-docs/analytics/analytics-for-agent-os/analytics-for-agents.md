---
title: "Analytics for Agents"
description: "Gain insights into agent executions, AI model adoption, token consumption, and activity trends with the Contentstack Agents Analytics dashboard."
url: /analytics/analytics-for-agents
uid: bltec58235a9fac5b2f
---

# Analytics for Agents

## Analytics for Agents

The Agents Analytics dashboard shows how Contentstack Agents are used across your organization. Use it to monitor execution trends, token consumption, AI model adoption, and overall agent activity.

Contentstack Agents are automated systems built on four core components: triggers, instructions, tools, and AI model. They can reason, decide, and act across workflows.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to navigate to the Agents Analytics dashboard.

-   What each dashboard section tracks and how to read it.

-   How to apply filters and save custom views.


## Access the Agents Analytics Dashboard

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Analytics** through the “App Switcher”.
2.  By default, the **CMS** analytics dashboard appears. Click **Agent OS** and then select **Agents** to switch dashboards.![Agents dashboard selection in Analytics](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8474ca28f215cd56/6a8928a76a79ba2643efcbe1/Analytics_Agents_Select.png?locale=en-us)

**Note:** The data in the Agents dashboard updates in real-time, with a latency of **5 to 10 minutes**.

## Agents Analytics Dashboard Sections

The dashboard is divided into five sections. Each section covers a different aspect of agent activity and usage.

### Overview

The Overview section provides a high-level snapshot of agent activity across your organization. It displays four summary cards:

-   **Total Agents:** The total number of agents configured in your organization.

-   **Total Active Agents:** The number of agents that have executed at least once in the selected date range.

-   **Total Executions:** The total number of agent runs in the selected date range.

-   **Token Consumption:** The total tokens consumed by agent executions. Tokens are units that measure AI model input and output consumption.


Use this section to quickly assess execution frequency and resource consumption across your organization.

![Agents Overview summary cards](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amffa54bc6483ec474/ac961c1e3f9364650b10dc78/Analytics_Agents_NewOverview.png?locale=en-us)

### Executions

The Executions section displays the number of successful and failed agent executions over the selected date range as a daily bar chart. Use this section to monitor execution reliability, identify periods with higher failure rates, and track execution trends over time.

![Daily agent executions bar chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt288981a8bb1074a9/69fd4a034ba9edcc50c6dd87/Analytics_Agents_Execution.png)

### Agent Executions

The Agent Executions section displays execution details for individual agents. For each agent, it shows the AI model the agent is configured to use, the number of executions, and the total tokens consumed. Use this section to identify the most active agents, analyze AI model usage per agent, and monitor token consumption across agent configurations.

**Note:** If this chart appears identical to the Executions chart above, the screenshot asset may need to be updated. See Flag 1 in the production review notes.

![Agent-level execution details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt288981a8bb1074a9/69fd4a034ba9edcc50c6dd87/Analytics_Agents_Execution.png)

### Top AI Models

The Top AI Models section displays the distribution of agents by AI model as a bar chart. Each bar represents one model and the number of agents built on it. Use this section to understand how AI model usage is distributed across your organization.

![Agent distribution by AI model chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e572e5640b7e4ab/69fd4a03a402528430c40382/Analytics_Agents_TopAIModels.png)

### Tokens Used

The Tokens Used section displays the trend of total tokens consumed by agent executions over the selected date range as a daily bar chart. Use this section to monitor token usage trends, identify peak consumption periods, and track AI resource usage over time.

![Daily token consumption bar chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt857a5074fbde97dd/69fd4a03eb66df10034b849e/Analytics_Agents_TokensUsed.png)

## Apply Filters and Manage Views

To apply filters, click **Filters**, select your options, then click **Apply Filter(s)**.

The following filters are available:

-   **Date Range:** Choose from **1 week**, **30 days** (default), **60 days**, or **90 days**. Some charts include a timeline selector for further refinement.
-   **Custom Date:** Set a custom date range using the dropdown.

    **Note:** The custom date range should not exceed **90 days**.

-   **Zoom:** Switch between **1 week**, **30 days**, **60 days**, or **90 days** for trend analysis.
-   **Projects:** View metrics for a specific project or all projects together.
-   **Group By:** View data grouped by day, week, or month, depending on the selected section.

To save a specific filter for later use, click the horizontal ellipsis (...) beside **Reset** and choose **Save As New View**.

Once saved, your view appears in the dropdown menu for quick access, so you don’t need to reapply filters manually each time.
