---
title: "Traffic Encryption"
description: "Learn how Contentstack Launch uses HTTPS and TLS to ensure encrypted traffic and protect end-user data across all deployments."
url: /launch/traffic-encryption
uid: blt5392cea9886097ea
---

# Traffic Encryption

## Traffic Encryption

Contentstack Launch ensures secure, encrypted connections for all deployments with built-in HTTPS and TLS support.

## HTTPS Support

All deployments in Launch are served over HTTPS by default. Launch automatically provisions and manages secure SSL certificates to protect your applications. You can also bring your own certificate if needed.

### Automatic HTTPS Redirection

Launch automatically redirects all incoming HTTP requests to HTTPS using the HTTP [**308 Permanent Redirect**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/308) status code.

This redirection is enforced and cannot be disabled, following industry best practices for secure content delivery. It helps protect end-user data and ensures privacy throughout the browsing experience.

## TLS Support

Launch supports the following modern and secure versions of the [Transport Layer Security (TLS)](https://developer.mozilla.org/en-US/docs/Glossary/TLS) protocol to ensure data integrity and confidentiality:

-   **TLS 1.2**
-   **TLS 1.3**

## Supported Cipher Suites

To maintain broad client compatibility, Launch supports a wide set of cipher suites.

**TLS 1.3:**

-   TLS\_AES\_128\_GCM\_SHA256
-   TLS\_AES\_256\_GCM\_SHA384
-   TLS\_CHACHA20\_POLY1305\_SHA256

**TLS 1.2:**

-   ECDHE-ECDSA-AES128-GCM-SHA256
-   ECDHE-ECDSA-CHACHA20-POLY1305
-   ECDHE-RSA-AES128-GCM-SHA256
-   ECDHE-RSA-CHACHA20-POLY1305
-   ECDHE-ECDSA-AES256-GCM-SHA384
-   ECDHE-RSA-AES256-GCM-SHA384
-   ECDHE-ECDSA-AES128-SHA256
-   ECDHE-RSA-AES128-SHA256
-   ECDHE-ECDSA-AES256-SHA384
-   ECDHE-RSA-AES256-SHA384

**Note:** This configuration follows [Mozilla’s recommended cipher suite policy](https://wiki.mozilla.org/Security/Server_Side_TLS#Intermediate_compatibility_.28recommended.29).
