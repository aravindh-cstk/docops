---
title: "Webhook Payload Cannot Be Customized for Third-Party APIs"
description: "Webhook Payload Cannot Be Customized for Third-Party APIs"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/31-webhook-payload-cannot-be-customized-for-third-party-apis
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs9f92f2ba4fcf2fa7
---

# Webhook Payload Cannot Be Customized for Third-Party APIs

A customer needs to send webhook events to a third-party API (such as GitHub) that requires a specific payload format. The Contentstack webhook payload format does not match the required format.

**Root Cause**

Contentstack webhook payloads are fixed in structure and cannot be customized or transformed within the platform. The payload always follows the Contentstack webhook schema for the given event type.

**Resolution**

1.  Deploy a lightweight middleware service between Contentstack and the third-party API. Options include AWS Lambda, Azure Functions, Google Cloud Functions, or a dedicated microservice.
2.  Configure the Contentstack webhook to deliver to the middleware endpoint.
3.  The middleware receives the Contentstack payload, transforms it into the required format for the third-party API, and forwards it.
4.  The middleware can also handle any authentication, signing, or retry logic required by the third-party service.

After deploying the middleware and updating the webhook endpoint, trigger a test event and verify the payload arrives at the third-party API in the correct format.
