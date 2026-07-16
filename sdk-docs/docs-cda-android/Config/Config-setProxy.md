---
title: "setProxy"
description: "The `setProxy` method sets a custom proxy to route SDK network requests through a specified HTTP proxy server."
url: "https://www.contentstack.com/android-config-setproxy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setProxy

The `setProxy` method sets a custom proxy to route SDK network requests through a specified HTTP proxy server.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| proxy | Proxy | Yes | — | Proxy setting, typically a type (http, socks) and a socket address. A Proxy is an immutable object |

Returns:
Type
void

```
import com.contentstack.sdk.*;

java.net.Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("proxyHost", "proxyPort"));
java.net.Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("sl.theproxyvpn.io", 80));
Config config = new Config();
config.setProxy(proxy);
```
