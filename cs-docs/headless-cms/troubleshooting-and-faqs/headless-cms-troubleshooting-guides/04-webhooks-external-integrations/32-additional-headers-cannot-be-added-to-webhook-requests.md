---
title: "Additional Headers Cannot Be Added to Webhook Requests"
description: "Additional Headers Cannot Be Added to Webhook Requests"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/32-additional-headers-cannot-be-added-to-webhook-requests
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csfa7b9a406bd0b047
---

# Additional Headers Cannot Be Added to Webhook Requests

A customer needs to inject specific HTTP headers (beyond the standard Contentstack headers) into webhook requests. The webhook configuration does not appear to support this.

**Root Cause**

Contentstack webhooks support configuring authentication-related headers (Basic Auth, Bearer Token, OAuth 2.0) and custom headers through the webhook settings. However, there is a limit on the type and number of headers that can be injected, and server-level headers tied to the underlying connection mechanism cannot be modified.

**Resolution**

For adding custom headers:

1.  In the webhook configuration, use the Custom Headers section to add key-value pairs for additional headers needed by the endpoint.
2.  If the required header type is not supported natively (for example, system-level or connection headers), use a middleware proxy to add the required headers before forwarding the request to the final endpoint.

After adding custom headers in the webhook configuration, trigger a test event and inspect the received request at the endpoint to confirm the custom headers are present.
