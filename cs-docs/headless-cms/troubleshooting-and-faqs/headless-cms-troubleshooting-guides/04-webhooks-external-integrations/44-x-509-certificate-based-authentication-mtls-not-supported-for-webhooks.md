---
title: "X.509 Certificate-Based Authentication (mTLS) Not Supported for Webhooks"
description: "X.509 Certificate-Based Authentication (mTLS) Not Supported for Webhooks"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/44-x-509-certificate-based-authentication-mtls-not-supported-for-webhooks
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csa5eda84ded6ef1f8
---

# X.509 Certificate-Based Authentication (mTLS) Not Supported for Webhooks

A customer integrating Contentstack webhooks with an API gateway that requires mutual TLS (mTLS) / X.509 client certificate authentication asks whether Contentstack can present a client certificate during the TLS handshake for outbound webhook calls.

**Root Cause**

Contentstack webhooks support token-based and OAuth 2.0 authentication methods for securing outbound webhook requests. Mutual TLS - where Contentstack would present a client X.509 certificate during the TLS handshake - is not currently supported. The webhook delivery infrastructure does not manage or present client certificates.

**Resolution**

Since mTLS is not natively supported, the following alternative security approaches are available:

1.  Proxy-based mTLS: deploy a lightweight proxy or serverless function (AWS Lambda, Azure Functions, or a dedicated proxy) between Contentstack and the mTLS-protected API gateway. Contentstack delivers the webhook to the proxy using Bearer Token or OAuth 2.0 authentication. The proxy then handles the mTLS handshake and forwards the payload to the API gateway.
2.  IP allowlisting: restrict the API gateway’s inbound rules to accept requests only from Contentstack’s known outbound IP addresses. This provides network-level authentication without requiring client certificates.
3.  Request signature verification: Contentstack includes an X-Contentstack-Request-Signature header on every webhook. The API gateway can verify this RSASSA-PSS signature using Contentstack’s public key to confirm the request originated from Contentstack.
4.  OAuth 2.0 Client Credentials: if the API gateway supports token-based auth, use Contentstack’s OAuth 2.0 webhook authentication to exchange client credentials for an access token per request.

The proxy-based approach is the most common solution for environments that mandate mTLS. After deploying the proxy, configure Contentstack to target the proxy endpoint and confirm the webhook payload reaches the mTLS-protected API gateway.
