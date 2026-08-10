---
title: "mTLS (Certificate-Based OAuth) Not Supported - Use a Proxy"
description: "mTLS (Certificate-Based OAuth) Not Supported - Use a Proxy"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/15-mtls-certificate-based-oauth-not-supported-use-a-proxy
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csf45553691c50016a
---

# mTLS (Certificate-Based OAuth) Not Supported - Use a Proxy

A customer needs Contentstack webhooks to deliver to an endpoint that requires OAuth 2.0 with mutual TLS (mTLS) / certificate-based authentication. It is unclear whether Contentstack supports this setup.

**Root Cause**

Contentstack webhooks support OAuth 2.0 Client Credentials flow for token-based authentication, but mutual TLS (mTLS) - where the client must present a certificate alongside OAuth credentials - is not directly supported. The webhook delivery system does not manage client certificates.

**Resolution**

1.  Deploy a lightweight proxy or serverless function (such as AWS Lambda, Azure Functions, or Google Cloud Functions) between Contentstack and the mTLS-protected endpoint.
2.  Configure Contentstack to send webhooks to the proxy endpoint using standard OAuth 2.0 or Bearer Token authentication.
3.  The proxy function receives the webhook, handles the mTLS handshake using the required client certificate, and forwards the payload to the protected endpoint.
4.  If the mTLS endpoint is public (not behind a private network), consider whether IP whitelisting combined with request signature verification provides sufficient security without mTLS.

After deploying the proxy, configure Contentstack to target the proxy endpoint and trigger a test webhook. If the payload reaches the mTLS-protected endpoint successfully, the proxy is correctly bridging the authentication requirements.
