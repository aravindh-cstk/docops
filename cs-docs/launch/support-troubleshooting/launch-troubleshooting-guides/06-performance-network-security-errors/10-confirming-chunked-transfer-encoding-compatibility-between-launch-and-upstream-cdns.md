---
title: "Confirming Chunked Transfer Encoding Compatibility Between Launch and Upstream CDNs"
description: "Confirming Chunked Transfer Encoding Compatibility Between Launch and Upstream CDNs"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/06-performance-network-security-errors/10-confirming-chunked-transfer-encoding-compatibility-between-launch-and-upstream-cdns
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: cs9ca4a92ee78bd851
---

# Confirming Chunked Transfer Encoding Compatibility Between Launch and Upstream CDNs

A team using an upstream CDN such as Akamai in front of Launch needs to confirm whether the Launch origin supports Chunked Transfer Encoding (CTE), which is a prerequisite for certain CDN configurations.

**Root Cause**

This is a compatibility clarification rather than a defect. Launch deployments run on a Node.js/Next.js runtime that supports HTTP/1.1 streaming responses, which automatically use Transfer-Encoding: chunked when a response is streamed without a Content-Length header - meeting the standard prerequisite for CDNs that communicate with origins over HTTP/1.1 chunked encoding.

**Resolution**

1.  Confirm with your CDN provider’s documentation that their architecture uses HTTP/2 between the client and CDN, and HTTP/1.1 (with chunked transfer encoding as needed) between the CDN and the origin.
2.  No additional configuration is required on the Launch side, as the Node.js/Next.js runtime natively supports chunked transfer encoding for streamed responses.
3.  If specific endpoints are not streaming as expected, verify that the application code is not explicitly setting a Content-Length header where streaming behavior is intended.
4.  Test the upstream CDN configuration against the Launch origin to confirm chunked responses are handled correctly end-to-end.

The issue is resolved once it is confirmed that the Launch origin already meets the upstream CDN’s chunked transfer encoding prerequisite, with no platform-side changes required.
