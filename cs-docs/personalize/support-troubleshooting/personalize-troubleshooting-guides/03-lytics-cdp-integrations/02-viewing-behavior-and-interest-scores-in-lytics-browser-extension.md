---
title: "Viewing Behavior and Interest Scores in Lytics Browser Extension"
description: "Viewing Behavior and Interest Scores in Lytics Browser Extension"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/03-lytics-cdp-integrations/02-viewing-behavior-and-interest-scores-in-lytics-browser-extension
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs6c119af5dac0709f
---

# Viewing Behavior and Interest Scores in Lytics Browser Extension

Exposing behavior and interest scores in the Lytics browser extension may require manual field mapping within the Public API settings. This prevents the real-time validation of user interest data during development and testing.

**Root Cause**

The issue is caused by the default Public API field configuration, which does not include behavioral and interest data points for external visibility in the Dev Tool extension.

**Resolution**

1.  Navigate to the Lytics Public API field configuration settings.
2.  Add the specific fields for behavior and interest scores to the allowed Public API fields list.
3.  Refresh the Lytics browser extension to sync the updated field permissions.
4.  Check the Dev Tool interface to ensure the scores are now visible.

After updating the Public API field configuration, open the Lytics browser extension on a tracked page. If the behavior and interest scores are displayed correctly within the extension interface, the issue is resolved.
