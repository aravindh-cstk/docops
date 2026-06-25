---
title: "[How-to Guides and Knowledgebase articles] - Clear Caches and Cookies in Different Browsers"
description: Steps required to clear the cache and cookies on different browsers.
url: https://www.contentstack.com/docs/developers/how-to-guides/clear-caches-and-cookies-in-different-browsers
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - support
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Clear Caches and Cookies in Different Browsers

This page explains how to clear caches and cookies across common web browsers to resolve issues caused by stale cached content. It is intended for users and support/developer teams troubleshooting website behavior that doesn’t reflect recent changes.

## Clear Caches and Cookies in Different Browsers

**Note: **This page is no longer maintained, and the content may be outdated or unsupported. It may be removed in a future release.

Users need websites to load quickly, in a blink of an eye. Browsers play their part in speeding up the page loading process by caching files and content when you first visit a website and then serving from cache on subsequent visits.

However, there may be times when browsers continue to serve cache even if the actual page/content has been changed. As a result, you may encounter certain errors or continue to see older content. In such cases, clearing the cache and cookies of a browser can help.

This document discusses the steps required to clear the cache and cookies on different [browsers](../contentstack-basics/what-you-need-to-get-started.md#supported-browsers).

## On Chrome

- Click the **vertical ellipses** on the top right corner.
- Click **History.**
- Click **Clear browsing data** on the left sidebar.
- In the popup that appears, select a “time range” and the options **Cookies and other site data** and **Cached images and files.**
- Click **Clear data.**

## On Microsoft Edge

- Click the **horizontal ellipses** on the top right corner.
- Click **Settings.**
- Under the **Clear browsing data** option, click on **Choose what to clear.**
- Select the checkbox **Cookies and saved website data** and **Cached data and files.**
- Click the **Clear** button.

## On Firefox

- Click the **3 vertical lines** on the top right corner.
- Click **History.**
- Click **Clear recent history.**
- In the popup that appears, select a “time range” and the options **Cookies**, **Cache**, etc.
- Click **Clear Now.**

## On Safari

- On the keyboard, press **Command+Y.**
- Click **Clear browser history.**
- In the popup that appears, select the time range and then click **Clear History.**

The keyboard shortcuts for the same are:

- For Windows, “Ctrl+Shift+R”.
- For Mac, “Command+Shift+E”.

**Note:** These steps apply to all apple devices with Safari browsers.

The above steps should clear your browser cache and cookies. However, if the issue still persists, please contact our [support team](mailto:support@contentstack.com).

**Additional Resource:** Check out our [Contentstack CDN Cache Management](../cdn-and-caching/contentstack-cdn-cache-management.md) doc for more information on how CDNs work, what's Cache Purging, what are the cache responses, and so on.

## Common questions

**Q: Why do I still see old content after a website update?**  
A: Browsers may continue to serve cached files and content even if the actual page/content has been changed.

**Q: What should I clear to resolve caching-related issues?**  
A: Clearing the cache and cookies of a browser can help.

**Q: What if clearing cache and cookies doesn’t fix the issue?**  
A: Please contact our [support team](mailto:support@contentstack.com).

**Q: Where can I learn more about CDN caching and cache purging?**  
A: See **Additional Resource:** [Contentstack CDN Cache Management](../cdn-and-caching/contentstack-cdn-cache-management.md).