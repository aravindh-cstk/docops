---
title: "Sending Agent OS Email Notifications After Content Deployment"
description: "Sending Agent OS Email Notifications After Content Deployment"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/10-sending-agent-os-email-notifications-after-content-deployment
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: csc5c3423632f14e32
---

# Sending Agent OS Email Notifications After Content Deployment

There is a need to notify a distribution list automatically after content is deployed to production, and it is unclear which Contentstack features support this.

**Root Cause**

Contentstack does not send post-deployment email notifications automatically out of the box; this needs to be configured using either Agent OS or an external notification service triggered via a webhook.

**Resolution**

1.  Option 1: Agent OS, create an automation with a publish trigger on the relevant content type/environment, and add an email action to that automation to notify your distribution list when the trigger fires.
2.  Option 2: Webhooks, configure a Contentstack webhook on the relevant publish event, and integrate it with an external service such as Amazon SNS or SendGrid to handle sending the notification email.
3.  Choose whichever option better fits your existing tooling, Agent OS’s email action for a self-contained setup, or Webhooks plus an external service if you already use SNS/SendGrid for notifications elsewhere.
4.  Test the trigger by publishing a sample entry to confirm the notification email is sent as expected.

The distribution list receives an email notification automatically whenever content is deployed to production through the configured trigger.
