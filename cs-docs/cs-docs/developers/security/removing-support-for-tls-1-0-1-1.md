---
title: "[Security Management] - Removing Support for TLS 1.0 & 1.1"
description: Contentstack has upgraded its TLS to version 1.2, and therefore, TLS 1.0 and 1.1 have been deprecated.
url: https://www.contentstack.com/docs/developers/security/removing-support-for-tls-1-0-1-1
product: Contentstack
doc_type: security-management
audience:
  - developers
version: unknown
last_updated: 2019-08-23
---

# [Security Management] - Removing Support for TLS 1.0 & 1.1

This page explains Contentstack’s deprecation of TLS 1.0 and 1.1 in favor of TLS 1.2 for CDN/API services. Developers and API users should read this to understand compatibility impacts and what to update in clients, libraries, or environments to continue making HTTPS requests successfully.

## Removing Support for TLS 1.0 & 1.1

Contentstack has upgraded its TLS to version 1.2, and therefore, TLS 1.0 and 1.1 have been deprecated.

## What You Need to Know

Our CDN/API services now use the upgraded TLS version and no longer support TLS 1.0 or TLS 1.1 over HTTPS on the “api/cdn/images/assets.contentstack.io” domain. We will now only accept requests made by browsers or API clients with TLS version 1.2 or higher. Here's a [comprehensive support matrix](https://www.ssllabs.com/ssltest/clients.html) that you can access.

## Why Did We Make This Change

The TLS 1.2 protocol was defined in RFC 5246 in August 2008. It is an improvement over TLS 1.1 standard and is more secure. Among other items, it protects against Cipher Block Chaining (CBC) attacks. One of the primary reasons for this revision from TLS 1.1 to TLS 1.2 is to remove the protocol's dependency on the MD5 and SHA-1 digest algorithms. TLS 1.2 supports the expansion of support for authenticated encryption ciphers with AES-GCM cipher suites that are not prone to these attacks.

## What You Should Do Now

Most browsers have supported TLS 1.2 for at least the last few years. So, end-users are unlikely to be affected by this change. The impact is likely only going to be felt by API users with old libraries.

### API Library Support

If you have code that connects with the [Contentstack APIs](/docs/developers#use-the-apis), it is vital to ensure that it will continue to work after **August 23, 2019**. While each language and library is different, we have identified some popular ones as a starting reference.

Here's the list of languages that will need significant changes/upgrades to continue operating uninterrupted:
- Java 6u45 / 7u45
- .NET before 4.5 (does not support TLS 1.2)
- .NET 4.5 (setting must be changed to enable TLS 1.2 explicitly)
- OpenSSL 0.9.8

Most dynamic languages such as [Ruby](/docs/developers/ruby), [PHP](/docs/developers/php), and [Python](/docs/developers/python) rely on the underlying operating system's OpenSSL version. You can check it by running the `openssl version`. Version 1.0.1 is the minimum requirement.

### Browser Support

Most browsers support TLS 1.2 and have been supporting it for several years. The following are the browser versions (including lower versions) that DO NOT support TLS 1.2:
- Google Chrome 29
- Mozilla Firefox 26
- Internet Explorer 10
- Safari 8
- iOS 4
- Android 4

## Common questions

### What TLS versions are supported for requests to Contentstack CDN/API services?
Contentstack CDN/API services now only accept requests made by browsers or API clients with TLS version 1.2 or higher.

### Which domain no longer supports TLS 1.0 or TLS 1.1 over HTTPS?
TLS 1.0 and 1.1 are no longer supported over HTTPS on the “api/cdn/images/assets.contentstack.io” domain.

### What should I check if my API client stops working after the change?
Ensure your API client/library supports TLS 1.2, and verify your environment’s OpenSSL version (run `openssl version`) where applicable.

### Which older browser versions do not support TLS 1.2?
Google Chrome 29, Mozilla Firefox 26, Internet Explorer 10, Safari 8, iOS 4, and Android 4 (including lower versions) do not support TLS 1.2.