---
title: "\"Bad Gateway\" (502) Errors on Public App UI"
description: "\"Bad Gateway\" (502) Errors on Public App UI"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/04-performance-webhooks-network-errors/03-bad-gateway-502-errors-on-public-app-ui
doc_type: faq
_cms_section_uid: cs75f582f26c50a642
_cms_faq_uid: cs35aff2bc92e1e07d
---

# "Bad Gateway" (502) Errors on Public App UI

A public app displays a "502 Bad Gateway" error instead of its dashboard.

**Resolution**

1.  This usually indicates the app's hosting server (outside of Contentstack) is down or crashing.
2.  Check the server logs for the app's hosting environment for memory or timeout errors.
3.  Ensure the server is capable of handling the current volume of requests.

The app UI loads after the hosting server is restarted or scaled.
