---
title: "How do I secure my application?"
description: "How do I secure my application?"
url: /developer-hub/faqs/developer-hub-faqs/01-/06-how-do-i-secure-my-application
doc_type: faq
_cms_section_uid: cs948e2cfddd77b432
_cms_faq_uid: cs144833855005d123
---

# How do I secure my application?

Your apps communicate with Contentstack via two major touchpoints: **Webhooks** and **UI Locations**. Contentstack provides signed support for both integrations. The [signed feature for webhooks](/docs/headless-cms/secure-your-webhooks#webhook-signature) allows developers to verify whether the webhook requests originated from Contentstack. Also, the signed feature for UI Locations enables the initial page load calls to contain a [JWT token](/docs/developer-hub/securing-your-app) that is further used to verify whether the page load request originated from Contentstack itself.

While communication to Contentstack from outside resources, use [OAuth support token](/developer-hub/contentstack-oauth) instead of user session tokens or management token. These are easy to manage and scale as per the app developer’s demand.
