---
title: "Live Logs Remain on \"Waiting for live logs…\" With No Entries"
description: "Live Logs Remain on \"Waiting for live logs…\" With No Entries"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/16-live-logs-and-server-logs/02-live-logs-remain-on-waiting-for-live-logs-with-no-entries
doc_type: faq
_cms_section_uid: cscef21c6153021529
_cms_faq_uid: csda7ccde6a52ac518
---

# Live Logs Remain on "Waiting for live logs…" With No Entries

A Live Log Capture session starts and stays active, but the view continues to show "Waiting for live logs…" with no entries appearing.

**Root Cause**

The session itself is active and working correctly, but the application has not yet generated any output for it to display. In some cases, an active Source filter can also exclude the entries that are being produced.

**Resolution**

1.  Send a request to your deployment to trigger log generation.
2.  If entries still do not appear, verify the Source filter is not excluding them.
