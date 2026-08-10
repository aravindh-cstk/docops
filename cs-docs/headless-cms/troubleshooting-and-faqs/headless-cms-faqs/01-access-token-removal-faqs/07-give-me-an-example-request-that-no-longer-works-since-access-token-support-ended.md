---
title: "Give me an example request that no longer works since Access Token support ended?"
description: "Give me an example request that no longer works since Access Token support ended?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/01-access-token-removal-faqs/07-give-me-an-example-request-that-no-longer-works-since-access-token-support-ended
doc_type: faq
_cms_section_uid: cs1428ecf25c6be69c
_cms_faq_uid: csc086479a86668fa7
---

# Give me an example request that no longer works since Access Token support ended?

The following example request uses an Access Token:

```
# Making a GET request to retrieve a specific entry from a given content type.
curl -X GET \
  'https://api.contentstack.io/v3/content_types/{ContentTypeUid}/entries/{EntryUid}?include_publish_details=true&include_workflow=true' \
  -H 'accept-encoding: application/json'   # Ensures JSON response
  -H 'access_token: {your_access_token}'   # Authorization token for the API
  -H 'api_key: {your_api_key}'              # API key identifying the stack
```

This request **does not** work for stacks created after **December 16, 2020**. Replace `{your_access_token}` with your Delivery Token.
