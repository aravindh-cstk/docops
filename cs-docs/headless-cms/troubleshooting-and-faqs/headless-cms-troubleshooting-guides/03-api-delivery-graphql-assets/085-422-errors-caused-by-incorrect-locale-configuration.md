---
title: "422 Errors Caused by Incorrect Locale Configuration"
description: "422 Errors Caused by Incorrect Locale Configuration"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/085-422-errors-caused-by-incorrect-locale-configuration
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csc482137f95be878a
---

# 422 Errors Caused by Incorrect Locale Configuration

CDA requests return 422 Unprocessable Entity errors in production. The requests appear structurally valid and the same configuration worked previously.

**Root Cause**

The 422 errors are caused by an invalid or incorrectly formatted locale value being passed in the API request. If the locale code does not match any locale configured in the stack, the API returns 422 because it cannot process the request against an unrecognized locale.

**Resolution**

1.  Review the locale parameter in the failing API requests and confirm it matches a locale code configured in the stack (Settings > Languages).
2.  Check for typos, incorrect case, or locale codes that have been removed from the stack configuration.
3.  Test the request with a known valid locale (for example, en-us) to confirm the 422 error is locale-specific.
4.  Correct the locale value in the application configuration and re-deploy.

After correcting the locale value, re-run the API request and confirm a valid response is returned without a 422 error.
