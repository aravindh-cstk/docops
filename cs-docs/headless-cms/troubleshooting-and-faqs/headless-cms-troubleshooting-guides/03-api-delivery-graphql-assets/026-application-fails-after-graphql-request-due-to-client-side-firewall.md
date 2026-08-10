---
title: "Application Fails After GraphQL Request Due to Client-Side Firewall"
description: "Application Fails After GraphQL Request Due to Client-Side Firewall"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/026-application-fails-after-graphql-request-due-to-client-side-firewall
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs45bdaf19a2d5429a
---

# Application Fails After GraphQL Request Due to Client-Side Firewall

An application fails or returns unexpected errors after sending a GraphQL request to Contentstack. The Contentstack API itself is functioning correctly and no errors appear on the platform side.

**Root Cause**

The failure originates on the client side, not Contentstack. A corporate or network-level firewall is blocking outbound requests to the Contentstack GraphQL endpoint or blocking the response from being received by the application.

**Resolution**

1.  Test the GraphQL request directly from a tool such as Postman or cURL to confirm the Contentstack API is responding correctly.
2.  If the direct test succeeds but the application fails, investigate the network and firewall configuration of the environment where the application is running.
3.  Work with the network team to allow outbound HTTPS traffic to Contentstack GraphQL endpoints.
4.  Confirm no proxy or VPN is intercepting and blocking the GraphQL traffic.

After adjusting the firewall configuration, retry the request from the application. If the application receives a valid GraphQL response, the network restriction has been resolved.
