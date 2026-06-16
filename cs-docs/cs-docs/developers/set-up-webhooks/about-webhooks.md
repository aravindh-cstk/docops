---
title: "[Set Up Your Project] - About Webhooks"
description: Overview of webhooks in Contentstack and how they can be used to send real-time information to third-party apps and services.
url: https://www.contentstack.com/docs/developers/set-up-webhooks/about-webhooks
product: Contentstack
doc_type: concept
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - About Webhooks

This page explains what webhooks are in Contentstack and how they help keep third-party applications in sync with your Contentstack account. It is intended for developers setting up webhook-based integrations and should be used when you want Contentstack to post data to a specified URL when events occur in a stack.

## About Webhooks

A webhook is a user-defined HTTP callback. It is a mechanism that sends real-time information to any third-party app or service.

**Note:** You can select a specific [branch](https://www.contentstack.com/docs/developers/branches/about-branches) for which webhooks should trigger. This webhook will be accessible throughout all the branches. Refer to our [Global Modules](/docs/developers/branches/global-modules) document for more information.

Thus, webhook allows you to keep your third-party application in sync with your Contentstack account. Using webhooks, you can specify a URL to which you would like Contentstack to post data when an event occurs in your [stack](/docs/developers/set-up-stack/about-stack).

For example,
- Sending a marketing email to your subscribers whenever you publish any new blog post from your stack
- Automatically adding tags to an image after publishing it
- Creating redirects for old URL whenever you change the entry’s URL to a new one
- Notifying your users on social platforms about your newly released content

Contentstack provides a [Webhook Integrations](/docs/developers/set-up-webhooks/webhook-integrations) guide on how you can use webhooks for a variety of purposes. This can help you to integrate webhooks with any third-party applications for creating custom solutions.

## Common questions

**Q: What is a webhook?**  
A: A webhook is a user-defined HTTP callback. It is a mechanism that sends real-time information to any third-party app or service.

**Q: Can I configure webhooks to trigger for a specific branch?**  
A: Yes. You can select a specific branch for which webhooks should trigger, and the webhook will be accessible throughout all the branches.

**Q: What does Contentstack send with a webhook?**  
A: Contentstack posts data to a URL you specify when an event occurs in your stack.

**Q: Where can I learn how to use webhooks with third-party applications?**  
A: Refer to the [Webhook Integrations](/docs/developers/set-up-webhooks/webhook-integrations) guide.