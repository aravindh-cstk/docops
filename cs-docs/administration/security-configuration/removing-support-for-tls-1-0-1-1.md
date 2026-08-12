---
title: "Removing Support for TLS 1.0 & 1.1"
description: "Removing Support for TLS 1.0 & 1.1"
url: /administration/removing-support-for-tls-1-0-1-1
---

# Removing Support for TLS 1.0 & 1.1

## Removing Support for TLS 1.0 & 1.1

Contentstack has upgraded its TLS to version 1.2, and therefore, TLS 1.0 and 1.1 have been deprecated.

## What You Need to Know

Our CDN/API services now use the upgraded TLS version and no longer support TLS 1.0 or TLS 1.1 over HTTPS on the “api/cdn/images/assets.contentstack.io” domain. We will now only accept requests made by browsers or API clients with TLS version 1.2 or higher. Here's a [comprehensive support matrix](https://www.ssllabs.com/ssltest/clients.html) that you can access.

## Why Did We Make This Change

The TLS 1.2 protocol was defined in RFC 5246 in August 2008. It is an improvement over TLS 1.1 standard and is more secure. Among other items, it protects against Cipher Block Chaining (CBC) attacks. One of the primary reasons for this revision from TLS 1.1 to TLS 1.2 is to remove the protocol's dependency on the MD5 and SHA-1 digest algorithms. TLS 1.2 supports the expansion of support for authenticated encryption ciphers with AES-GCM cipher suites that are not prone to these attacks.

## What You Should Do Now

Most browsers have supported TLS 1.2 for at least the last few years. So, end-users are unlikely to be affected by this change. The impact is likely only going to be felt by API users with old libraries.

### API Library Support

If you have code that connects with the [Contentstack APIs](/docs/developers/apis), it is vital to ensure that it will continue to work after **August 23, 2019**. While each language and library is different, we have identified some popular ones as a starting reference.

Here's the list of languages that will need significant changes/upgrades to continue operating uninterrupted:

-   Java 6u45 / 7u45
-   .NET before 4.5 (does not support TLS 1.2)
-   .NET 4.5 (setting must be changed to enable TLS 1.2 explicitly)
-   OpenSSL 0.9.8

Most dynamic languages such as [Ruby](/docs/developers/sdks/content-delivery-sdk/ruby/about-ruby-sdk), [PHP](/docs/developers/sdks/content-delivery-sdk/php/about-php-sdk), and [Python](/docs/developers/sdks/content-delivery-sdk/python/about-python-sdk) rely on the underlying operating system's OpenSSL version. You can check it by running the openssl version. Version 1.0.1 is the minimum requirement.

### Browser Support

Most browsers support TLS 1.2 and have been supporting it for several years. The following are the browser versions (including lower versions) that DO NOT support TLS 1.2:

-   Google Chrome 29
-   Mozilla Firefox 26
-   Internet Explorer 10
-   Safari 8
-   iOS 4
-   Android 4
