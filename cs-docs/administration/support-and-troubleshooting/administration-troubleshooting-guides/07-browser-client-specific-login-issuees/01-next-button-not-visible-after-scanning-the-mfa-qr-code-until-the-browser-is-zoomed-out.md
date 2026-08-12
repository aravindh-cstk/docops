---
title: "“Next” Button Not Visible After Scanning the MFA QR Code Until the Browser Is Zoomed Out"
description: "“Next” Button Not Visible After Scanning the MFA QR Code Until the Browser Is Zoomed Out"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/07-browser-client-specific-login-issuees/01-next-button-not-visible-after-scanning-the-mfa-qr-code-until-the-browser-is-zoomed-out
doc_type: faq
_cms_section_uid: cs4c19aa47e31b91e0
_cms_faq_uid: cs1947890219274d1e
---

# “Next” Button Not Visible After Scanning the MFA QR Code Until the Browser Is Zoomed Out

While setting up two-factor authentication, a user may scan the QR code successfully but be unable to find or click the “Next” button needed to complete setup.

**Root Cause**

At certain browser zoom levels, the “Next” button on the MFA setup screen can render off-screen or hidden after the QR code is scanned, preventing the user from completing the setup step, even though the scan itself succeeded.

**Resolution**

1.  After scanning the QR code during MFA setup, if the “Next” button is not visible, zoom out the browser window.
2.  Click “Next” to complete MFA setup.

After zooming out and clicking “Next,” confirm MFA setup completes and login succeeds.
