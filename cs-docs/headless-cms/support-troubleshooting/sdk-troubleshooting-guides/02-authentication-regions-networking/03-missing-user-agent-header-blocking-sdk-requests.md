---
title: "Missing \"User-Agent\" Header Blocking SDK Requests"
description: "Missing \"User-Agent\" Header Blocking SDK Requests"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/02-authentication-regions-networking/03-missing-user-agent-header-blocking-sdk-requests
doc_type: faq
_cms_section_uid: cs11e3b2dfad59b84e
_cms_faq_uid: cs283fc30fc5d5bd3a
---

# Missing "User-Agent" Header Blocking SDK Requests

Some corporate gateways block requests unless expected headers are present or match policy.

**Root Cause**

Corporate firewalls or security gateways are configured to drop requests that lack specific identification headers or custom security metadata.

**Resolution**

1.  Do not assume SDK omits identification headers by default.
2.  If policy requires extra headers, add approved custom headers in your request/plugin layer.
3.  Validate upstream proxies are not stripping headers before the request reaches Contentstack.
4.  Coordinate with network/security team on allowlist rules for SDK traffic.

Requests return 2xx, and WAF logs confirm expected headers/policy match. Escalate with sanitized gateway logs and request ID when blocked despite compliant headers.
