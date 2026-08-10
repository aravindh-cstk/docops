---
title: "Webhook Calls Failing After SSL Certificate Renewal - Certificate Chain Issue"
description: "Webhook Calls Failing After SSL Certificate Renewal - Certificate Chain Issue"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/43-webhook-calls-failing-after-ssl-certificate-renewal-certificate-chain-issue
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs74fb4c4cc5cb3bf3
---

# Webhook Calls Failing After SSL Certificate Renewal - Certificate Chain Issue

Webhook calls from Contentstack began failing shortly after an SSL certificate was renewed on the receiving server. The endpoint is accessible via the browser but Contentstack webhook requests return certificate errors.

**Root Cause**

Contentstack validates SSL certificates against publicly recognized Certificate Authorities (CAs). When a certificate is renewed, the renewal process occasionally results in an incomplete or incorrect certificate chain being served. The most common issue is an intermediate certificate being missing from the chain, causing Contentstack’s webhook delivery system to reject the handshake even though browsers may accept it (browsers often cache intermediate certificates locally).

**Resolution**

1.  Verify the complete certificate chain is being served correctly. Use an SSL checker tool (such as SSL Labs at ssllabs.com/ssltest) to inspect the certificate chain for the webhook endpoint URL.
2.  Ensure the certificate chain includes: the end-entity (leaf) certificate, all intermediate certificates, and the root CA certificate in the correct order.
3.  Update the server configuration (nginx, Apache, or load balancer) to include the full intermediate certificate bundle alongside the leaf certificate.
4.  Ensure the certificate is issued by a publicly recognized CA (such as DigiCert, Let’s Encrypt, Sectigo, or similar). Self-signed certificates are not trusted by Contentstack.
5.  After updating the certificate chain, trigger a test webhook and confirm delivery succeeds.

After correcting the certificate chain, verify using SSL Labs that the chain is complete and then confirm webhook delivery succeeds in the Contentstack webhook execution logs.
