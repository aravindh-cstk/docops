---
title: "Webhook Sync ‘Socket Hang Up’ Error - Upgrade sync-core SDK"
description: "Webhook Sync ‘Socket Hang Up’ Error - Upgrade sync-core SDK"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/54-webhook-sync-socket-hang-up-error-upgrade-sync-core-sdk
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs8afa98bd3c760dc8
---

# Webhook Sync ‘Socket Hang Up’ Error - Upgrade sync-core SDK

A DataSync or webhook sync receiver encounters the error: sync-core Error \[check\] Error: socket hang up. The webhook receiver stops working after this error and requires a manual restart to recover. There is no automatic reconnection after a socket error.

**Root Cause**

The socket hang up error is caused by a connection disruption between the sync-core SDK and the Contentstack sync service. In affected versions of the sync-core SDK, a socket hang up does not trigger automatic reconnection, requiring a manual service restart. A fix has been released in a more recent version of the SDK.

**Resolution**

1.  Upgrade to the latest version of the sync-core SDK. The fix for the socket hang up reconnection issue is included in the release - check the sync-core SDK changelog for the specific version that includes the fix.
2.  After upgrading, verify that a simulated socket disconnection (for example, a brief network interruption) triggers automatic reconnection without requiring a manual restart.
3.  Implement a process supervisor (such as PM2 for Node.js, systemd, or a Kubernetes restart policy) as an additional safety net to automatically restart the sync-core process if it terminates unexpectedly.

After upgrading the SDK and confirming automatic reconnection, monitor the sync receiver for 24 hours to confirm the socket hang up no longer requires manual intervention.
