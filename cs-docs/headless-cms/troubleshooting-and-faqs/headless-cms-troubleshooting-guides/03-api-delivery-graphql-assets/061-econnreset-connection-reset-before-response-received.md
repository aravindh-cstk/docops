---
title: "ECONNRESET - Connection Reset Before Response Received"
description: "ECONNRESET - Connection Reset Before Response Received"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/061-econnreset-connection-reset-before-response-received
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csf774887e6343ccd5
---

# ECONNRESET - Connection Reset Before Response Received

Applications receive ECONNRESET errors (connection reset by peer) when fetching content from the Contentstack CDA. The error indicates the server-side connection was closed before the full response was delivered.

**Root Cause**

ECONNRESET errors are network-layer failures, not CDA errors. The TCP connection is unexpectedly closed before the response is fully transmitted. Common causes include: network path instability between the application and the CDN edge, a proxy or load balancer with an aggressive connection timeout, an upstream CDN or network device closing idle or slow connections, or the CDN rotating the IP address mid-connection during a certificate renewal.

**Resolution**

1.  Implement retry logic with exponential backoff specifically for ECONNRESET errors. These are typically transient and succeed on retry.
2.  Check whether a proxy, VPN, or load balancer sits between the application and the Contentstack CDN. Review its connection timeout and keepalive settings.
3.  If ECONNRESET errors are correlated with specific CDN IP addresses, check whether CDN IP reassignment is the cause (see Issue 6 below).
4.  Contact Contentstack Support with the time window, frequency of occurrences, and the network path being used (direct to CDN vs via proxy) for CDN-level investigation.

After implementing retry logic, confirm that ECONNRESET errors result in successful retries rather than failed requests. Monitor the frequency of retries to assess whether the underlying network issue needs further investigation.
