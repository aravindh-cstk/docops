---
title: "Error 499 - Client Closed Request on Mobile App Image Loads"
description: "Error 499 - Client Closed Request on Mobile App Image Loads"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/14-error-499-client-closed-request-on-mobile-app-image-loads
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csf8cc14a36032a9c0
---

# Error 499 - Client Closed Request on Mobile App Image Loads

A mobile application reports approximately 96,000 Error 499 (Client Closed Request) instances for image loading. Images load correctly in desktop web browsers but fail frequently in the mobile app, particularly for users in specific regions such as Australia and Taiwan.

**Root Cause**

HTTP 499 is a Cloudflare/CDN status code indicating that the client terminated the connection before the server completed the response. This is a client-side event - the mobile app closed the connection before the image finished downloading. Investigation confirmed this is not a Contentstack or CDN server error. The root cause is regional network variance: users on weaker cellular signals in the affected regions hit the mobile app’s pre-configured timeout thresholds before the image transfer completes. The error rate was proportionally consistent with overall traffic growth and not an anomaly.

**Resolution**

1.  Error 499 is a client-side termination and does not require a fix on the Contentstack platform.
2.  Increase the image request timeout in the mobile app configuration to allow more time for image downloads on slower connections.
3.  Implement progressive image loading or placeholder display while images load to improve perceived performance on slow connections.
4.  Use image optimization parameters (quality, resize, auto=webp) to reduce image file sizes, making downloads complete faster on slower networks.
5.  Consider implementing retry logic in the mobile app for failed image requests rather than treating a single timeout as a permanent failure.

After increasing timeouts and reducing image sizes via optimization parameters, monitor the Error 499 rate in the affected regions. A reduction confirms the client timeout was the primary cause.
