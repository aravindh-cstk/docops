---
title: "\"Invalid API Key\" Error in Public App Dashboard"
description: "\"Invalid API Key\" Error in Public App Dashboard"
url: /marketplace/troubleshooting-and-faqs/marketplace-troubleshooting-guides/02-app-permissions-ui-visibility/01-invalid-api-key-error-in-public-app-dashboard
doc_type: faq
_cms_section_uid: csfbea7c22c80651b0
_cms_faq_uid: csae5a3ef73ead3c11
---

# "Invalid API Key" Error in Public App Dashboard

A public app fails to load data, displaying an "Invalid API Key" error within its custom UI. This occurs when the app's internal token does not have permission for the specific stack or region.

**Resolution**

1.  Confirm the stack is in the same **Region** (US, EU, or Azure) as the app's registration.
2.  Check the **Stack Settings** to ensure the app has been granted "Read" permissions for the necessary content types.
3.  Re-install the app to refresh the automatically generated installation token.

The app dashboard populates with content from the stack successfully.
