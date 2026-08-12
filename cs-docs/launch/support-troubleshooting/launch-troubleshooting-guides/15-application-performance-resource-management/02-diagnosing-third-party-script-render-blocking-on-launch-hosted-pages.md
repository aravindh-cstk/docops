---
title: "Diagnosing Third-Party Script Render Blocking on Launch-Hosted Pages"
description: "Diagnosing Third-Party Script Render Blocking on Launch-Hosted Pages"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/15-application-performance-resource-management/02-diagnosing-third-party-script-render-blocking-on-launch-hosted-pages
doc_type: faq
_cms_section_uid: cs952c8e2acdedb37b
_cms_faq_uid: cs49c2fde24d61fd48
---

# Diagnosing Third-Party Script Render Blocking on Launch-Hosted Pages

Specific pages on a Launch-hosted site experience 15–30 second initial load times with partial rendering. Third-party widgets (such as chat or virtual sales assistant scripts) fail to populate, leaving the page in a frozen state where only static elements are visible.

**Root Cause**

The delay was reproducible outside of the Launch environment, confirming the root cause as internal application logic and third-party script loading behavior rather than a Launch platform issue. Synchronous or blocking script loading patterns for third-party widgets can hold up page rendering significantly.

**Resolution**

1.  Reproduce the slow load and partial rendering behavior in a local development environment to confirm the issue is application-level rather than platform-level.
2.  Identify which third-party scripts are loaded synchronously or block the main render thread during page load.
3.  Update the script loading strategy to use async or defer attributes, or load third-party widgets after the main content has rendered (for example, using a loading strategy like Next.js’s next/script with an appropriate strategy prop).
4.  Test the updated loading strategy to confirm that hero content and primary UI render immediately while third-party widgets populate progressively without blocking the page.
5.  Deploy the fix and monitor real-user load time metrics to confirm the 15–30 second delay is eliminated.

The issue is resolved when affected pages render primary content immediately and third-party widgets populate without causing a frozen or partially rendered page state.
