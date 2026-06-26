---
title: "setProxy"
description: "Sets custom proxy"
url: "https://www.contentstack.com/java-config-setproxy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setProxy

Sets custom proxy

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| proxy | Proxy | Yes | — | Proxy setting, typically a type (http, socks) and a socket address. A Proxy is an immutable object |

Returns:
Type
void

```
import com.contentstack.sdk.*;
import java.net.*;

java.net.Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("proxyHost", "proxyPort"));
Config config = new Config();
config.setProxy(proxy);
```
