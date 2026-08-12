---
title: "Multi-Environment Publish Webhook Returns Wrong or Duplicate Environment Data"
description: "Multi-Environment Publish Webhook Returns Wrong or Duplicate Environment Data"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/24-multi-environment-publish-webhook-returns-wrong-or-duplicate-environment-data
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csf29ace7c71525f92
---

# Multi-Environment Publish Webhook Returns Wrong or Duplicate Environment Data

When publishing an entry to multiple environments simultaneously (for example, production, staging, and QA), the webhook payload returns incorrect or duplicated environment data. Routing logic downstream fails because the environment field in the payload does not match expectations.

**Root Cause**

The webhook is configured with a Channels condition that restricts event delivery to a specific environment (for example, staging only). When publishing to multiple environments, only the staging events are relayed, making it appear as if only staging was updated. Other environments do not generate webhook events because they are excluded by the Channels configuration.

**Resolution**

1.  Open the webhook configuration and review the Channels section.
2.  If the webhook should fire for all environments, remove the environment-specific Channels restriction or add all required environments to the Channels condition.
3.  If environment-specific routing is required, create separate webhooks per environment - each scoped to a specific environment in the Channels condition.
4.  Save the updated webhook configuration and re-test a multi-environment publish.

After updating the Channels configuration, publish an entry to all target environments and confirm that separate webhook events are generated for each environment with the correct environment data in the payload.
