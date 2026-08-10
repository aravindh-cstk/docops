---
title: "Webhook Signature Verification Failing - Correct Implementation Approach"
description: "Webhook Signature Verification Failing - Correct Implementation Approach"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/14-webhook-signature-verification-failing-correct-implementation-approach
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csaef32b8157a8154c
---

# Webhook Signature Verification Failing - Correct Implementation Approach

Webhook signature verification fails during implementation. The X-Contentstack-Request-Signature header value does not match the computed signature, despite seemingly correct public key loading and RSASSA-PSS parameters.

**Root Cause**

Webhook signature verification uses RSASSA-PSS with specific parameters. Implementation failures typically result from one of the following: incorrect base64 decoding of the signature header in certain execution environments (such as Cloudflare Workers), using the wrong hash algorithm or salt length in the PSS parameters, or processing the request body incorrectly before verification.

**Resolution**

The correct verification approach varies by runtime. Key requirements common to all implementations:

-   Algorithm: RSASSA-PSS with SHA-256 digest
-   Salt length: match the digest length (MGF1 with SHA-256)
-   Input: the raw request body bytes - do not parse or transform before verification
-   Key format: PEM-encoded RSA public key from Contentstack webhook settings

1.  For Java (Spring with BouncyCastle): use PSSSigner with SHA256withRSAandMGF1. Ensure the public key is loaded correctly and the signature is decoded from base64 before passing to the signer. Contact Contentstack Support for a tested Java code sample if the implementation continues to fail.
2.  For Node.js: use the built-in crypto module - crypto.createVerify(‘RSA-SHA256’) with RSA\_PKCS1\_PSS\_PADDING and saltLength set to crypto.constants.RSA\_PSS\_SALTLEN\_DIGEST.
3.  For Cloudflare Workers: the standard atob() base64 decoder may not handle all base64 variants correctly. Use a Uint8Array-based decoder or the SubtleCrypto API instead.

After implementing the correct verification logic, send a test webhook and confirm the signature verification succeeds for the received payload.
