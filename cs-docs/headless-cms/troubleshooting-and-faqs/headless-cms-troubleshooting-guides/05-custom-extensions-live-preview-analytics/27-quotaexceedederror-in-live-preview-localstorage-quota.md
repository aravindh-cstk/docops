---
title: "QuotaExceededError in Live Preview - localStorage Quota"
description: "QuotaExceededError in Live Preview - localStorage Quota"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/27-quotaexceedederror-in-live-preview-localstorage-quota
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs4263c8ccfb058b89
---

# QuotaExceededError in Live Preview - localStorage Quota

A QuotaExceededError appears in the browser console during a Live Preview session. The error references localStorage and occurs within an iframe environment.

**Root Cause**

The Contentstack Delivery SDK uses localStorage to cache frequently accessed content for performance. Browser storage quotas apply per origin domain and are unaffected by iframe embedding. When the localStorage quota for the Contentstack domain is exhausted, the error is triggered.

**Resolution**

1.  Open browser developer tools and navigate to Application > Storage to inspect localStorage usage for the Contentstack domain.
2.  Clear the localStorage for the Contentstack domain to free up space.
3.  If the issue recurs, consider reducing the amount of data cached by the SDK or implementing a periodic cache cleanup in the application.

After clearing localStorage, reload the Live Preview session and confirm the QuotaExceededError no longer appears in the console.
