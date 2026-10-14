---
title: "Traffic Explorer"
description: "Explore individual API and web request logs in near real time with Traffic Explorer. Filter by status code, URL, country, and more, and save your views."
url: /analytics/traffic-explorer
uid: blta64b6a7db1bd9683
---

# Traffic Explorer

## Traffic Explorer

Traffic Explorer in Contentstack Analytics provides a granular, near real-time view of your API request logs. Other Analytics dashboards report aggregated metrics; Traffic Explorer shows the individual requests behind those metrics.

Use Traffic Explorer to trace a specific request, confirm what a client actually sent, and investigate error spikes without raising a support ticket.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner, Admin, or Product Analytics Viewer](/docs/administration/about-administration-roles) role, or a [custom role](/docs/administration/create-custom-roles) for **Administration** with view access to Analytics
-   Traffic Explorer enabled for your organization

## What You Will Learn

-   How to open the Traffic Explorer dashboard.
-   What Traffic Explorer records and what it deliberately does not record.
-   How to filter logs, set a date range, and save a view for reuse.
-   How to export the filtered log results to CSV.

## When to Use Traffic Explorer

Use Traffic Explorer when you need request-level detail:

-   **Diagnose a failing request.** Find the exact request by status code, URL, or client IP, and read its timestamp, method, and response time.
-   **Investigate a traffic spike.** Filter by host, environment, or country to see which clients drove an unexpected increase.
-   **Verify usage against your bill.** Confirm which requests counted toward your API request and bandwidth consumption.

Use the product-specific dashboards, such as [Analytics for CMS](/docs/analytics/analytics-for-cms) or [Analytics for Launch](/docs/analytics/analytics-for-launch), when you need trends and totals rather than individual requests.

## Access the Traffic Explorer Dashboard

To open the Traffic Explorer dashboard, sign in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Open the **App Switcher** and select **Analytics**.
2.  By default, the **CMS** analytics dashboard appears. Click **Traffic Explorer** to switch dashboards.

**Note:** Traffic Explorer is not enabled by default for every organization. If you do not see it in Analytics, contact [support](mailto:support@contentstack.com) to have it enabled for your organization.

## What Traffic Explorer Records

Traffic Explorer currently logs requests served for images, assets, CDN, and GraphQL. Support for additional products is planned for future releases.

Each log entry records request metadata: timestamp, host, URL, method, status code, response time, request and response size, cache status, client IP, country, HTTP user agent, request referrer, API key, environment, and project.

**Note:** Traffic Explorer records request metadata only. Request and response payloads are not captured and are not visible in the dashboard.

### Data Freshness and Retention

Traffic Explorer is near real time rather than instantaneous, because logs are collected from the CDN in batches and processed before they become searchable.

-   A request appears in Traffic Explorer within **15 to 20 minutes** of being made.
-   Traffic Explorer processes a high volume of data, so results can sometimes take around **10 seconds** to load after you apply a filter or a query.
-   Logs are retained for the **last 7 days**. Older data is deleted and cannot be recovered.

**Tip:** To keep a record beyond 7 days, capture the details you need while the logs are still available.

## Apply Filters and Manage Views

Filters narrow the log view to the requests you care about. You can combine multiple filters in a single query.

### Add a Filter

1.  Click **Filters** in the upper-right corner.
2.  Choose a condition from the dropdown, such as **Status Code**, **URL**, or **Country**.
3.  Enter a value for that condition, for example, Status Code = 200.
4.  Click **Apply Filter(s)**.

### Available Filters

<table><tbody><tr><td><strong>Filter</strong></td><td><strong>Narrows results by</strong></td></tr><tr><td>Host</td><td>The host that served the request</td></tr><tr><td>URL</td><td>The requested path</td></tr><tr><td>Status Code</td><td>The HTTP response code</td></tr><tr><td>Method</td><td>The HTTP method, such as GET or POST</td></tr><tr><td>Services</td><td>The Contentstack service that handled the request</td></tr><tr><td>Response Size</td><td>The size of the response</td></tr><tr><td>Request Size</td><td>The size of the request</td></tr><tr><td>Response Time</td><td>How long the request took</td></tr><tr><td>Cache</td><td>Whether the response was a cache HIT or MISS</td></tr><tr><td>Client IP</td><td>The IP address the request came from</td></tr><tr><td>Country</td><td>The country the request originated in</td></tr><tr><td>HTTP User Agent</td><td>The client that made the request</td></tr><tr><td>Request Referrer</td><td>The referring URL</td></tr><tr><td>API Key</td><td>The stack the request targeted</td></tr><tr><td>Environment</td><td>The environment the request targeted</td></tr><tr><td>Project</td><td>The project the request targeted</td></tr></tbody></table>

### Set the Date Range

Use the date selector to view results for a specific period within the last 7 days.

1.  Click the date range dropdown in the upper-right corner.
2.  Choose a preset, such as **Last 4 hours**, **Last 24 hours**, or **Last 7 days**, or select **Custom Date**.
3.  For a custom range, enter both the **From Date/Time** and the **To Date/Time**.
4.  Click **Done** to apply the range.

**Note:** You can select dates only from the most recent 7 days, as data older than 7 days is not retained.

### Save a Filtered View

Save a set of filters so you can reapply it without rebuilding the query each time.

1.  Apply the filters and date range you want to keep.
2.  Click the horizontal ellipsis (**...**) next to the filter bar.
3.  Select **Save As New View**.
4.  Enter a name and save the view.

The saved view appears in the dropdown so you can reapply it later.

### Export Log Results

Export the current log view to a CSV file to analyze it outside Contentstack or to attach it to a support ticket.

1.  Apply the filters and date range you want to export.
2.  Click the **Export CSV** icon in the upper-right corner, next to the date range selector.
3.  Save the CSV file when your browser prompts you.

**Note:** The export contains only the requests that match your current filters and date range, and is limited to **1,000 rows per file**. To export a larger result set, narrow the date range or the filters and export each set separately.

**Additional Resource:** To learn how Analytics brings usage data together across products, refer to the [About Analytics](/docs/analytics/about-analytics) document.
