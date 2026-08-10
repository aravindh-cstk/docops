---
title: "Live Preview Returns Error 901 - Delivery Token Missing Branch Permission"
description: "Live Preview Returns Error 901 - Delivery Token Missing Branch Permission"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/15-live-preview-returns-error-901-delivery-token-missing-branch-permission
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs127f8653644dc1a9
---

# Live Preview Returns Error 901 - Delivery Token Missing Branch Permission

Live Preview fails with error code 901: ‘Access denied. You have insufficient permissions to perform operation on this branch alias.’

**Root Cause**

The delivery token used for Live Preview does not have access to the branch (or branch alias) being previewed. When a branch alias such as ‘production’ is used, the delivery token must be explicitly granted access to that branch or alias.

**Resolution**

1.  Navigate to Settings > Tokens and select the delivery token used for Live Preview.
2.  Update the token’s branch permissions to include the branch or branch alias referenced in the Live Preview configuration.
3.  Save the updated token and reload the Live Preview session.

After updating the token permissions, restart the Live Preview session. If error 901 no longer appears and content loads correctly, the branch access is now granted.
