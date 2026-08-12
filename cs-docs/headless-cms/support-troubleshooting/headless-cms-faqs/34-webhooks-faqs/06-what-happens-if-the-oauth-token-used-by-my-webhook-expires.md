---
title: "What happens if the OAuth token used by my webhook expires?"
description: "What happens if the OAuth token used by my webhook expires?"
url: /headless-cms/support-troubleshooting/headless-cms-faqs/34-webhooks-faqs/06-what-happens-if-the-oauth-token-used-by-my-webhook-expires
doc_type: faq
_cms_section_uid: cs7a475dd5cd598bec
_cms_faq_uid: cs94e6e98d14314ed0
---

# What happens if the OAuth token used by my webhook expires?

If an OAuth token expires, the webhook should return a status code of 4xx (typically 400, 401, or 403) with specific error messages like invalid\_request, invalid\_token, or insufficient\_scope. Contentstack will then request a new token and retry the webhook request.
