---
title: "Content Index"
description: "An overview of the Lytics Content Index page, which tracks every URL Lytics has ingested and classified across its Overview, URLs, and Insights tabs, including pipeline health, manual URL analysis, and URL normalization."
url: /lytics/content-index
uid: blt6e0b5260f0ad5f3f
---

# Content Index

## Content Index

The **Content Index** page is your home for all of the content Lytics has ingested and classified. Use it to explore your complete index of URLs, monitor classification health, inspect individual URLs, and uncover insights based on what's being ingested and how it's performing. You can access this page under **Content** > **Content Index**, and it is organized into three tabs: **Overview**, **URLs**, and **Insights**.

📘 Looking for the Classification page?

Content Index replaces the former **Classification** page. Your content is still classified and enriched exactly as before, and everything the Classification page offered now lives in Content Index: classification health, trends, and URL analysis on the **Overview** tab; every indexed URL on the **URLs** tab; and the Classification dashboard, unchanged, on the **Insights** tab. Old links to the Classification page automatically redirect to Content Index.

## Overview

The Overview tab summarizes the health of your content pipeline. It includes the **Activity** chart, **Topic generation success**, **Last analyzed**, **Content flow**, and **Manually analyze a URL** sections, each described below.

### Activity

The **Activity** chart shows how many URLs were analyzed over time, for the date range you select. Analyzed URLs include both newly discovered URLs and existing URLs that were re-analyzed, so this is the quickest way to confirm the Content Affinity Engine is actively processing your content.

By default, Lytics classifies up to 20,000 documents per month, which includes new documents as well as periodic reclassification of existing ones. The Lytics Content Engine runs multiple workflows in the background, including the content classification workflow, which updates hourly. As long as you haven't exceeded your monthly quota, you can expect regular updates to the activity chart.

You can also set an alert threshold directly on the chart to be notified of unusual spikes or drops in analysis activity. Viewing and saving thresholds requires the corresponding alerting permissions on your account.

### Topic generation success

The **Topic generation success** card shows whether recently analyzed URLs (last 7 days) are generating topics. It breaks analyzed URLs into **URLs with 1+ topics**, **URLs with 0 topics**, and **Enrichment error**. A growing share of no topics or errors means your content isn't being enriched as expected — a signal to review your site's metadata or account's content settings.

### Last analyzed

The **Last analyzed** card lists the most recently analyzed URLs from your index, with the number of topics each one generated. Hover a topic count to see the topic names, or click **View all** to jump to the URLs tab.

### Content flow

The **Content flow** diagram visualizes the paths your content takes through Lytics' Content Pipeline — how URLs are ingested, filtered by your account settings, fetched, and finally enriched with Topics. It also highlights problematic URLs, such as URLs blocked by `robots.txt` directives or [Account Settings](/docs/lytics/account-settings), or URLs that return non-200 status codes. Counts reflect the last day of pipeline activity.

Click any stage in the diagram to see a description of that stage and, where available, recent example URLs that hit it over the last 30 days. The stages include:

-   **Valid URLs / Invalid URLs**: whether the URL is properly formatted and can be fetched by Lytics. This step checks for invalid characters, symbols, and protocols.
-   **Allowed by Settings / Denied by Settings**: URLs permitted or rejected by the **Domain Allowlist** and related account settings that control whether the URL can be scraped.
-   **Domain Blocklist / Path Blocklist / Not in Path Allowlist**: URLs filtered out by your domain and path settings.
-   **Allowed by Directives / Blocked by Directives**: URLs allowed or disallowed according to [robots.txt](https://www.robotstxt.org/robotstxt.html) directives.
-   **200 HTTP Status**: URLs that returned a 200 status code, indicating they were successfully fetched.
-   **404 HTTP Failure / 401 HTTP Failure / Other HTTP Failure**: URLs that could not be successfully fetched.
-   **Has Content / No Content To Scrape**: whether the fetched URL contained content to scrape.
-   **Enriched**: content that has been successfully enriched with metadata and Topics.
-   **Enrichment Error**: content that encountered an error during enrichment, meaning it may lack metadata or Topics.

### Manually analyze a URL

The **Manually analyze a URL** tool lets you test a URL, review its metadata, preview assigned topics, and make adjustments before adding it to your content index. It is ideal for debugging, refining topic relevance, and troubleshooting setup issues on a page before it's added to the Lytics content corpus.

The **Enabled domains** list above the input shows which domains are available for analysis; use the **Add/Remove** link to manage them in your account's content settings.

To analyze a URL:

1.  Enter the URL of the document you want to preview and click **Analyze**. Full page URLs, like a specific article or product page, work best.
2.  Review the **Analysis details** — the extracted title, author, descriptions, primary image, HTTP status, and word count — along with the Topics Lytics assigned. If the URL is already in your index, you can view its existing details or **Re-analyze** it.
3.  Adjust topics as needed. Click **Add topic** to add one with a chosen _Relevance_ score (between 0 and 1), or remove a topic by clicking the **X** on its tile.
4.  Once you're satisfied with the results, click **Review and add** (or **Review and update** for an existing URL), review the summary of topics to save, and confirm with **Add to index**. The document and its associated topics are then processed into the content corpus and become available for personalization efforts, such as recommendations or content affinity.

📘 Permissions

The Manually analyze a URL tool is only visible to users with content topic access, and adding topics or saving a URL to the index requires topic management permission. Topics you add are also saved to your account's topic allowlist, so future automated analysis can assign them to other pages.

## URLs

The **URLs** tab lets you browse and inspect every URL in your index. You can:

-   Search by URL.
-   Filter by enrichment status: **All URLs**, **Enriched**, **No Topics**, or **Errors**.
-   Filter by [Content Collection](/docs/lytics/viewing-content-collections). (Status filtering is not available while a collection is selected.)
-   Toggle between card and list views.

Each row shows the URL, its topics, and its image when available. Click a URL to open it in the Explorer for full details.

## Insights

The **Insights** tab contains the content dashboard, which displays various attributes of your content, including site name, author, URL path, and Topic information. It provides a high-level understanding of your content and can be used as a starting point for your content-oriented use cases. If you previously used the dashboard on the Classification page, this is the same dashboard, unchanged.

## URL Normalization

As Lytics ingests web-based content, it attempts to resolve duplicate URLs and create links between documents, much like a search engine would. As such, Lytics does things like respect `robots.txt` directives, resolve canonical URLs when present, etc.

Lytics attempts to sanitize URLs as much as possible before ingesting them into the Content Affinity Engine. Sanitization includes removing all URL parameters and cleaning URL syntax. This happens via an LQL function called `urlmain`.
