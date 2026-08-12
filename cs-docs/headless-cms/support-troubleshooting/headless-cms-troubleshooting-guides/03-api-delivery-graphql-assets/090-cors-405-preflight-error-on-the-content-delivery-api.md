---
title: "CORS 405 Preflight Error on the Content Delivery API"
description: "CORS 405 Preflight Error on the Content Delivery API"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/090-cors-405-preflight-error-on-the-content-delivery-api
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs75cf9ca7dfe080b5
---

# CORS 405 Preflight Error on the Content Delivery API

A browser-based application fails to fetch content from the Contentstack Delivery API. The browser reports a CORS error and the network inspector shows the OPTIONS preflight request receiving a 405 Method Not Allowed response, which prevents the actual GET request from executing.

**Root Cause**

A 405 error on the CORS preflight OPTIONS request indicates that the Delivery API endpoint is not returning the required CORS headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers) in the OPTIONS response. This is a platform-level issue where the endpoint’s CORS configuration is incomplete or incorrectly handling preflight requests from the requesting origin.

**Resolution**

1.  Confirm the error is a CORS preflight failure by inspecting the browser’s network tab. Look for an OPTIONS request to the Delivery API URL that returns 405.
2.  Contact Contentstack Support and report the affected endpoint URL, the requesting origin (the domain making the browser request), and the environment.
3.  Engineering will identify and correct the CORS header configuration for the affected endpoint.
4.  As a short-term workaround, route Delivery API requests through a server-side proxy that adds the required CORS headers before the response reaches the browser. This avoids the browser making the preflight request directly to the Contentstack endpoint.

After engineering resolves the CORS configuration, retry the browser-based request. If the OPTIONS preflight request returns a 200 or 204 with the required Access-Control-Allow-\* headers and the subsequent GET request succeeds, the CORS issue is resolved.
