---
title: "[Contentstack Launch] - Traffic Encryption"
description: Traffic Encryption for Contentstack Launch deployments, including HTTPS, TLS versions, and supported cipher suites.
url: https://www.contentstack.com/docs/launch/traffic-encryption
product: Contentstack Launch
doc_type: security-guide
audience:
  - developers
  - devops
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Traffic Encryption

This page describes how Contentstack Launch secures deployment traffic using HTTPS and TLS, including automatic HTTP-to-HTTPS redirection and supported cipher suites. It is intended for developers and DevOps/security teams who need to understand or validate encryption settings for Launch-hosted applications.

### Traffic Encryption

Contentstack Launch ensures secure, encrypted connections for all deployments with built-in HTTPS and TLS support.

## HTTPS Support

All deployments in Launch are served over HTTPS by default. Launch automatically provisions and manages secure SSL certificates to protect your applications. You can also bring your own certificate if needed.

### Automatic HTTPS Redirection

Launch automatically redirects all incoming HTTP requests to HTTPS using the HTTP [**308 Permanent Redirect**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/308) status code.

This redirection is enforced and cannot be disabled, following industry best practices for secure content delivery. It helps protect end-user data and ensures privacy throughout the browsing experience.

## TLS Support

Launch supports the following modern and secure versions of the [Transport Layer Security (TLS)](https://developer.mozilla.org/en-US/docs/Glossary/TLS) protocol to ensure data integrity and confidentiality:
- **TLS 1.2**
- **TLS 1.3**

## Supported Cipher Suites

To maintain broad client compatibility, Launch supports a wide set of cipher suites.

**TLS 1.3:**
- TLS_AES_128_GCM_SHA256
- TLS_AES_256_GCM_SHA384
- TLS_CHACHA20_POLY1305_SHA256

**TLS 1.2:**
- ECDHE-ECDSA-AES128-GCM-SHA256
- ECDHE-ECDSA-CHACHA20-POLY1305
- ECDHE-RSA-AES128-GCM-SHA256
- ECDHE-RSA-CHACHA20-POLY1305
- ECDHE-ECDSA-AES256-GCM-SHA384
- ECDHE-RSA-AES256-GCM-SHA384
- ECDHE-ECDSA-AES128-SHA256
- ECDHE-RSA-AES128-SHA256
- ECDHE-ECDSA-AES256-SHA384
- ECDHE-RSA-AES256-SHA384

**Note:** This configuration follows [Mozilla’s recommended cipher suite policy](https://wiki.mozilla.org/Security/Server_Side_TLS#Intermediate_compatibility_.28recommended.29).

## Common questions

### Does Launch allow HTTP traffic without encryption?
No. Launch automatically redirects all incoming HTTP requests to HTTPS using the HTTP **308 Permanent Redirect** status code, and this redirection is enforced and cannot be disabled.

### Which TLS versions are supported by Launch?
Launch supports **TLS 1.2** and **TLS 1.3**.

### Are SSL certificates managed automatically?
Yes. Launch automatically provisions and manages secure SSL certificates, and you can also bring your own certificate if needed.

### Where do the cipher suite recommendations come from?
The configuration follows [Mozilla’s recommended cipher suite policy](https://wiki.mozilla.org/Security/Server_Side_TLS#Intermediate_compatibility_.28recommended.29).

<!-- filename: contentstack-launch-traffic-encryption.md -->