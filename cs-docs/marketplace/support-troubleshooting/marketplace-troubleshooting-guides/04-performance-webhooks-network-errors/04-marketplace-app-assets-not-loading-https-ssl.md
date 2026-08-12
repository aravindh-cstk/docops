---
title: "Marketplace App Assets Not Loading (HTTPS/SSL)"
description: "Marketplace App Assets Not Loading (HTTPS/SSL)"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/04-performance-webhooks-network-errors/04-marketplace-app-assets-not-loading-https-ssl
doc_type: faq
_cms_section_uid: cs75f582f26c50a642
_cms_faq_uid: csbb930549104fc3e3
---

# Marketplace App Assets Not Loading (HTTPS/SSL)

Images or styles within a Marketplace app fail to load, with browser errors regarding "Mixed Content".

**Resolution**

1.  All assets used by the app must be served over **HTTPS**.
2.  Verify that the hosting server has a valid SSL certificate.
3.  Check for hardcoded http:// links in the app's source code and update them to https://.

All app assets load without security warnings in the browser.
