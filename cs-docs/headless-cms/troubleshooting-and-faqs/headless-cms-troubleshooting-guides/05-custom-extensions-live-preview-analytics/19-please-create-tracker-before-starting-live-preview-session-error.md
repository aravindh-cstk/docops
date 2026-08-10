---
title: "‘Please Create Tracker Before Starting Live Preview Session’ Error"
description: "‘Please Create Tracker Before Starting Live Preview Session’ Error"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/19-please-create-tracker-before-starting-live-preview-session-error
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csf7f6661e71c329c7
---

# ‘Please Create Tracker Before Starting Live Preview Session’ Error

Live Preview returns the error: ‘Please create tracker before starting live preview session’ (error code 382). The error appears intermittently or consistently during preview sessions.

**Root Cause**

This error occurs when: the Live Preview SDK is not initialized before a GetEntry API call executes, the live\_preview hash passed in the request is invalid or mismatched, or the SDK configuration is missing required fields (enable: true, preview\_token, host, app\_host).

**Resolution**

1.  Verify that ContentstackLivePreview.init() is called before any getEntry or API calls on every page.
2.  Ensure enable: true is set in the initialization configuration.
3.  Include all required configuration values: preview\_token, host, and app\_host.
4.  Add debug: true to the init configuration to log configuration details and identify missing fields.
5.  If using branches, verify the preview is configured for the correct branch matching the content being edited.

After verifying the initialization order and configuration, reload the Live Preview session. If the error no longer appears and content updates correctly, the tracker is now being created in the correct order.
