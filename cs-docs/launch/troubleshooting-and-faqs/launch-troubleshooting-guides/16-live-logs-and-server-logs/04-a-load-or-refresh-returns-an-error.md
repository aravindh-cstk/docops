---
title: "A Load or Refresh Returns an Error"
description: "A Load or Refresh Returns an Error"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/16-live-logs-and-server-logs/04-a-load-or-refresh-returns-an-error
doc_type: faq
_cms_section_uid: cscef21c6153021529
_cms_faq_uid: cs0a747b11f22ec5e1
---

# A Load or Refresh Returns an Error

Loading or refreshing Server Logs returns an error state instead of the expected log entries.

**Root Cause**

This is generally a transient issue and displays as a distinct error state rather than as an empty list. Persistent errors may indicate the deployment itself is no longer active.

**Resolution**

1.  Retry after a few seconds; transient errors resolve on their own in most cases.
2.  If the error persists, verify the deployment is still active.
3.  Try Live Log Capture as an alternative to loading historical Server Logs.
