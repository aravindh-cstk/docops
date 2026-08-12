---
title: "Logs Older Than 24 Hours Are Needed"
description: "Logs Older Than 24 Hours Are Needed"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/16-live-logs-and-server-logs/05-logs-older-than-24-hours-are-needed
doc_type: faq
_cms_section_uid: cscef21c6153021529
_cms_faq_uid: cs0bbc1524cd6fea68
---

# Logs Older Than 24 Hours Are Needed

Server Logs limits look-back to **24 hours**. Entries older than this window are not available in-product.

**Root Cause**

The in-product Server Logs view limits look-back at **24 hours**. Launch does not retain logs older than this window.

**Resolution**

1.  Configure a Log Target to forward logs to a third-party monitoring service so the third-party service retains them beyond the **24-hour** window.

Refer to the [Log Targets](/docs/developers/launch/log-targets) documentation for setup details.
