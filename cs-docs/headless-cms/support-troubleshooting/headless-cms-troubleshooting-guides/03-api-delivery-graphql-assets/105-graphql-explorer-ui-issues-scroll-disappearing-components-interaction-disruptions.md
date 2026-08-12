---
title: "GraphQL Explorer UI Issues - Scroll, Disappearing Components, Interaction Disruptions"
description: "GraphQL Explorer UI Issues - Scroll, Disappearing Components, Interaction Disruptions"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/105-graphql-explorer-ui-issues-scroll-disappearing-components-interaction-disruptions
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cse4c8da860204dd7f
---

# GraphQL Explorer UI Issues - Scroll, Disappearing Components, Interaction Disruptions

The Contentstack GraphQL Explorer in the dashboard exhibits UI instability: scroll functionality is inconsistent or stops working, certain UI components disappear during interaction, and general usability is disrupted, making it difficult to build and test queries.

**Root Cause**

GraphQL Explorer UI issues are typically caused by one of the following: a browser-specific rendering incompatibility, a browser extension interfering with the Explorer’s JavaScript, a cached version of the Explorer’s assets that conflicts with a recent platform update, or a platform-level bug in the Explorer interface that requires an engineering fix.

**Resolution**

1.  Clear the browser cache (Ctrl+Shift+Delete or equivalent) and reload the GraphQL Explorer.
2.  Open the Explorer in a new incognito or private browsing window to rule out browser extension interference.
3.  Test in a different browser. If the Explorer works in one browser but not another, the issue is browser-specific.
4.  Disable browser extensions one by one to identify if an extension (such as an ad blocker, dark mode extension, or developer tool) is interfering with the Explorer.
5.  If the issue persists across browsers and in incognito mode, contact Contentstack Support and provide a screen recording or screenshots of the specific UI behavior, the browser version, and the operating system. Engineering will investigate whether a platform-level fix is required.

After clearing the cache and testing in incognito mode, confirm whether the GraphQL Explorer loads and functions correctly. If it does, a browser cache or extension was the cause.
