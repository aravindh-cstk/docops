---
title: "‘Network Request Failed’ Error With No HTTP Status Code"
description: "‘Network Request Failed’ Error With No HTTP Status Code"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/104-network-request-failed-error-with-no-http-status-code
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs28d26c2e25f52bd6
---

# ‘Network Request Failed’ Error With No HTTP Status Code

GraphQL API calls from a browser-based or server-rendered application return a ‘Network request failed’ error with no HTTP status code. The error indicates the request never completed rather than receiving an error response from Contentstack.

**Root Cause**

A ‘Network request failed’ pattern with no HTTP status code means the HTTP connection was not established or was interrupted before a response was received. This is a client-side or network-side failure, not a Contentstack API error. Common causes include:

-   CORS preflight failure: the browser’s OPTIONS preflight request is blocked or returns an unexpected response, preventing the actual GraphQL request from being sent.
-   DNS resolution failure: the hostname graphql.contentstack.com cannot be resolved in the execution environment (common in corporate networks, VPCs, or custom DNS configurations).
-   TLS/SSL handshake failure: the client cannot establish a secure connection due to certificate validation errors, an outdated CA bundle, or a TLS version mismatch.
-   Network-level blocking: a corporate firewall, proxy, or VPN intercepts or drops outbound HTTPS requests to Contentstack endpoints.
-   Request timeout: the connection attempt times out before a response is received, often in serverless environments with short execution windows.

**Resolution**

**Step 1 - Isolate the failure type**

1.  Test the GraphQL endpoint directly using cURL from the same environment where the failure occurs: curl -v -X POST https://graphql.contentstack.com/stacks/{api\_key} -H ‘Content-Type: application/json’ -d ‘{“query”:“{\_\_typename}”}’
2.  If cURL succeeds but the application fails, the issue is in the application’s HTTP client configuration (CORS, proxy, or TLS settings), not in the network.
3.  If cURL also fails, the issue is at the network level (DNS, firewall, or VPN).

**Step 2 - CORS (browser-based applications)**

1.  Open the browser’s developer tools and check the Network tab for a failed OPTIONS preflight request to the GraphQL endpoint.
2.  Verify that the request is being made to the correct regional GraphQL URL and that no proxy is altering the request headers.
3.  If CORS headers are missing from the preflight response, contact Contentstack Support - CORS configuration for the GraphQL endpoint may need to be updated.

**Step 3 - DNS resolution (server-side or VPC environments)**

1.  Run nslookup graphql.contentstack.com or dig graphql.contentstack.com from within the execution environment to confirm DNS resolution is working.
2.  If DNS fails, add a DNS override or configure a custom DNS resolver that can reach public DNS. Check VPC or corporate network DNS policies.

**Step 4 - TLS/SSL issues**

1.  Check whether the runtime environment has an up-to-date CA certificate bundle. For Node.js, update to a recent LTS version to ensure the CA bundle is current.
2.  If a corporate proxy performs SSL inspection, add the proxy’s CA certificate to the trusted certificate store.

After identifying and resolving the network-level cause, re-run the GraphQL request and confirm a valid response is returned.
