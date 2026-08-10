---
title: "Can I filter the webhook execution details returned in the API response based on a date range?"
description: "Can I filter the webhook execution details returned in the API response based on a date range?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/34-webhooks-faqs/04-can-i-filter-the-webhook-execution-details-returned-in-the-api-response-based-on
doc_type: faq
_cms_section_uid: cs7a475dd5cd598bec
_cms_faq_uid: cs52eeb5b9ef28b8ee
---

# Can I filter the webhook execution details returned in the API response based on a date range?

Yes, you can filter the webhook execution details returned in the API response based on a specific date range. To do so, pass from and to as query parameters while running the [Get executions of a webhook](/docs/developers/apis/content-management-api#get-executions-of-a-webhook) API request. You need to provide the dates for both these parameters in ISO format.

For instance, to specify December 8, 2017, you can provide the following value in ISO date format:

2017-12-08T00:00:00.000Z
