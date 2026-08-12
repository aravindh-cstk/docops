---
title: "How do I differentiate between the webhook data received when an entry is published or unpublished directly and the webhook data received when an entry is published or unpublished via a release deployment?"
description: "How do I differentiate between the webhook data received when an entry is published or unpublished directly and the webhook data received when an entry is published or unpublished via a release deployment?"
url: /headless-cms/support-troubleshooting/headless-cms-faqs/34-webhooks-faqs/02-how-do-i-differentiate-between-the-webhook-data-received-when-an-entry-is-published-or-unpublished-directly-and-the-webhook-data-received-when-an-entry-is-published-or-unpublished-via-a-release-deployment
doc_type: faq
_cms_section_uid: cs7a475dd5cd598bec
_cms_faq_uid: cs06b019636d5a825d
---

# How do I differentiate between the webhook data received when an entry is published or unpublished directly and the webhook data received when an entry is published or unpublished via a release deployment?

When a release is deployed, it triggers the webhooks for the individual items (entries and assets) of the release, if such webhook events are defined.

In such cases, a source key is added to the webhook data of an event that is triggered via a release. This key contains the JSON data of the source event (type, title, and UID).

Here's what is added to the webhook data:

```
"source": {
    "type": "release",
    "title": "{{release_title}}",
    "uid": "{{release_uid}}"
},
```
