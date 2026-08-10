---
title: "What changes are expected in the existing Content Management API requests?"
description: "What changes are expected in the existing Content Management API requests?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/05-branches-faqs/12-what-changes-are-expected-in-the-existing-content-management-api-requests
doc_type: faq
_cms_section_uid: cs3dcdb31484ee5bae
_cms_faq_uid: cs4823c5f84d5a1258
---

# What changes are expected in the existing Content Management API requests?

You can add a branch header while executing an API request to get details specific to a branch. If this header is not mentioned, by default, data will be retrieved from the "main" branch of your stack. The response body for every request will contain the \_branch parameter specifying the branch from which the information is retrieved. Please refer to our [Content Management API](/docs/developers/apis/content-management-api) documentation for more information. You can also visit the [API Change Log](/docs/changelog) for more details about the breaking changes.
