---
title: "404 Error When Calling Brand Kit or Gen AI API - Wrong HTTP Method"
description: "404 Error When Calling Brand Kit or Gen AI API - Wrong HTTP Method"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/33-404-error-when-calling-brand-kit-or-gen-ai-api-wrong-http-method
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs58c6d3e79d49176c
---

# 404 Error When Calling Brand Kit or Gen AI API - Wrong HTTP Method

An API call to the Brand Kit API or Gen AI API returns a 404 error or unexpected response data despite using the correct endpoint URL, variables, and authentication headers.

**Root Cause**

The API call is using the wrong HTTP method. The Brand Kit API requires POST requests, not GET. Similarly, the Gen AI API requires GET, not POST. Using the incorrect method causes the server to return 404 (method not found) or unexpected response data.

**Resolution**

1.  Review the Contentstack API documentation for the specific endpoint to confirm the required HTTP method.
2.  For the Brand Kit API: switch the request method to POST.
3.  For the Gen AI API: switch the request method to GET.
4.  Retain all existing headers and body parameters and re-run the request with the correct method.

After updating the HTTP method, re-run the API call and confirm a valid response is returned without a 404 error.
