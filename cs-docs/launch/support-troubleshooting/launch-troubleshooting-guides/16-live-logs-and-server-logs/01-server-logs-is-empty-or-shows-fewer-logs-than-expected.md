---
title: "Server Logs Is Empty or Shows Fewer Logs Than Expected"
description: "Server Logs Is Empty or Shows Fewer Logs Than Expected"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/16-live-logs-and-server-logs/01-server-logs-is-empty-or-shows-fewer-logs-than-expected
doc_type: faq
_cms_section_uid: cscef21c6153021529
_cms_faq_uid: cs4f0ec0152f04ae69
---

# Server Logs Is Empty or Shows Fewer Logs Than Expected

The Server Logs view displays no entries, or displays fewer log entries than you expect for the selected period.

**Root Cause**

This typically occurs when the active Timeframe filter does not cover the period the logs were generated in, when the Source filter (Origin or Edge) excludes the relevant log source, when a Search filter is unintentionally narrowing the results, or when the deployment has not produced any output yet.

**Resolution**

1.  Confirm the Timeframe filter covers the period during which the entries were generated.
2.  Confirm at least one Source (Origin or Edge) is enabled.
3.  Check whether you have applied a Search filter, and remove it if it isn't needed.
4.  If the deployment is running, start a Live Log Capture session to confirm that the application is producing output.
