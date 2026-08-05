---
title: "connectionPool"
description: "Manages reuse of HTTP and HTTP/2 connections for reduced network latency. HTTP requests that \\* share the same {@link okhttp3.Address} may share a {@link okhttp3.Connection}. This class implements the policy of which connections to keep open for future use."
url: "https://www.contentstack.com/java-config-connectionpool"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## connectionPool

Manages reuse of HTTP and HTTP/2 connections for reduced network latency. HTTP requests that * share the same {@link okhttp3.Address} may share a {@link okhttp3.Connection}. This class implements the policy of which connections to keep open for future use.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| maxIdleConnections | Int | Yes | 5 | the maxIdleConnections default value is 5 |
| keepAliveDuration | long | Yes | 5 | the keepAliveDuration default value is 5 |
| timeUnit | TimeUnit | Yes | TimeUnit.MINUTES | the timeUnit default value is TimeUnit.MINUTES |

Returns:
Type
ConnectionPool

```
import com.contentstack.sdk.*;

Config config = new Config();
config.connectionPool(maxIdleConnections, keepAliveDuration, timeUnit);
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
