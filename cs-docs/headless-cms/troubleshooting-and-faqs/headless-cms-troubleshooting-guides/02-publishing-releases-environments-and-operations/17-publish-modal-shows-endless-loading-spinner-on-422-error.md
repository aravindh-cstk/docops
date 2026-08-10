---
title: "Publish Modal Shows Endless Loading Spinner on 422 Error"
description: "Publish Modal Shows Endless Loading Spinner on 422 Error"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/17-publish-modal-shows-endless-loading-spinner-on-422-error
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs1f331c0bb55dd33c
---

# Publish Modal Shows Endless Loading Spinner on 422 Error

Clicking Publish on an entry triggers a continuous loading state in the publish modal. No error message appears in the UI. The publish operation does not complete. Network inspection shows the backend returning a 422 response.

**Root Cause**

The publish modal does not surface 422 error messages from the API response, leaving editors without feedback on why the publish failed. The 422 typically indicates a validation failure - an invalid or missing required field, a schema constraint violation, or a reference resolution issue.

**Resolution**

1.  Open the browser’s developer tools and navigate to the Network tab.
2.  Attempt the publish and identify the failing API request (typically a POST to /v3/bulk/publish or similar).
3.  Inspect the response body of the 422 request for the specific error message and error\_code.
4.  Common causes: a required field is empty, a field value fails a regex or length constraint, or a referenced entry has missing mandatory fields. Address the specific validation error surfaced in the response.
5.  After fixing the underlying validation issue, re-attempt the publish and confirm it completes without the spinner.

If the 422 error reason is unclear, contact Contentstack Support with the entry UID, content type, and the raw 422 response body for investigation.

Note: The same silent 422 pattern applies in Visual Experience (Visual Builder). If clicking Publish in the Visual Experience interface produces an ‘Invalid Input’ error without further detail, the root cause is also a 422 validation failure from the underlying API. Inspect the network response for the specific validation message (for example, a third-party component such as Commercetools Product Finder may be generating the invalid payload). The fix in those cases comes from the component or extension responsible for the invalid input.
