---
title: "Publish Status Showing ‘Not Published’ Despite Successful Publish Queue"
description: "Publish Status Showing ‘Not Published’ Despite Successful Publish Queue"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/38-publish-status-showing-not-published-despite-successful-publish-queue
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs4bc751063958815a
---

# Publish Status Showing ‘Not Published’ Despite Successful Publish Queue

After publishing an entry, the Publish Status in the entry list and editor continues to display ‘Not published’ for an unusually long time. Additional publish attempts during this window are ignored. Other users are also affected.

**Root Cause**

In the reported case, the entry was published successfully and was visible on the live site, but the Publish Status indicator continued to show ‘Not published’ for an extended period before self-resolving with no corrective action applied. No specific cause was confirmed. This is a known, self-resolving symptom pattern - the entry is correctly published on the backend, and the delay appears to be in the status display rather than the publish action itself.

**Resolution**

1.  Wait briefly and refresh the page - the status will update once the asynchronous propagation completes.
2.  Do not submit additional publish attempts during the delay window. Multiple re-publishes of the same entry are queued but the delay is in the status display, not the publish action itself.
3.  If the status does not update after 10–15 minutes, contact Contentstack Support with the entry UID, stack, environment, and timestamp of the publish action for investigation.

After refreshing the page following a short wait, confirm the Publish Status updates to reflect the correct published state.
