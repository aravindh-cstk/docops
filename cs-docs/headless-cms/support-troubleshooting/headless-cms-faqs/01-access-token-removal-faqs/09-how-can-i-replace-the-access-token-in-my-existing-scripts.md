---
title: "How can I replace the Access Token in my existing scripts?"
description: "How can I replace the Access Token in my existing scripts?"
url: /headless-cms/support-troubleshooting/headless-cms-faqs/01-access-token-removal-faqs/09-how-can-i-replace-the-access-token-in-my-existing-scripts
doc_type: faq
_cms_section_uid: cs1428ecf25c6be69c
_cms_faq_uid: cs98157240b4720803
---

# How can I replace the Access Token in my existing scripts?

For **published content** (Content Delivery API): Use a Delivery Token in the access\_token header.

```
-H 'access_token: {delivery_token}'
```

For unpublished content (Content Management API): Use a Management Token in the authorization header.

```
-H 'authorization: {management_token}'
```
