---
title: "Analytics for AI Credits"
description: "Monitor AI credit usage, track monthly allocation, analyze product-wise trends, and manage credit utilization with the AI Credits analytics dashboard."
url: /analytics/analytics-for-ai-credits
---

# Analytics for AI Credits

## Analytics for AI Credits

The AI Credits analytics dashboard provides visibility into your organization’s AI usage. Use the dashboard to monitor monthly allocation, track product-wise trends, and analyze credit utilization patterns to help manage credits more effectively.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
    
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to access the AI Credits analytics dashboard.
    
-   How to read monthly credit allocation and usage metrics.
    
-   How to interpret product-level credit consumption in the Credits by Product table.
    

## Access the AI Credits Analytics Dashboard

To access the analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Navigate to **Analytics** from the “App Switcher” icon.![Analytics option in the App Switcher](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am553a6c0474b37029/b154e92a77142bfecb54a5c0/App-Switcher-Analytics.png?locale=en-us)
2.  By default, the **CMS** analytics dashboard appears. Click **AI Credits** to switch dashboards.![AI Credits analytics dashboard](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am3649ea334331fb15/4ef5b77bcf42ab6b28cd4a96/Analytics-For-AI-Credits.png?locale=en-us)
    
    **Note:** All credit balances reset on the **1st of every month**.
    

## AI Credits Analytics Dashboard Sections

The AI Credits analytics dashboard is divided into multiple sections that provide high-level allocation insights and detailed product-wise usage analytics.

### Monthly Credit Usage

This section provides an overview of your organization’s credit allocation and usage for the current month.

-   **Credits Used and Remaining:** Displays total credits consumed.
-   **Excess Credits Limit Used and Remaining:** Tracks usage beyond the allocation applied against the configured **Credits Limit**. For details on configuring credit limits, refer [AI Credits Management](/docs/administration/ai-credits#credits-management).

![Monthly Credit Usage section with allocation charts and metric blocks](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am9bd20748b9462853/27c7cc9e7c77925f0a0fa4a0/Analytics-For-AI-Credits-Monthly-Usage.png?locale=en-us)

The following metric blocks offer a quick summary of your organization’s credit health:

-   **Days Until Reset:** Number of days remaining until your monthly allocation refreshes.
-   **Overall Credit Utilization (%)**: Holds the total credit consumption.
-   **Active Products:** Total number of AI-enabled products currently consuming credits.
-   **Average Daily Usage:** The average credits consumed per day during the selected period.
-   **Trend Vs Last Month:** Compare the trend with the last month's consumption.

**Tip:** Use these charts to monitor whether your organization is approaching the **Excess Usage** or requires adjustment.

### Credits Trend

This section displays a time-series area chart that tracks daily credit usage trends across products. Hover over the chart data points to view product-wise usage details for a selected day.

![Credits Trend time-series area chart](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amc4f506a8ba3df0f6/08e643a9b5e4cea3fbec75e4/Analytics-For-AI-Credits-Trend.png?locale=en-us)

### Credits by Product

This table provides a detailed breakdown of credit usage by product:

![Credits by Product table](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8ba7f79295dc375a/825ec7c872870cb770a7f4d5/Analytics-For-AI-Credits-By-Product.png?locale=en-us)

-   **Product:** The name of the AI-enabled product (for example, Agent OS)
-   **Total credits:** Total credits consumed during the selected period.
-   **Avg Per Day:** The average credits consumed daily by the product.
-   **Excess Credits Limit:** Credits consumed after the monthly credit allocation was exhausted.
-   **% Credits (this period):** The total credits consumed in percentage for the selected timeline.
