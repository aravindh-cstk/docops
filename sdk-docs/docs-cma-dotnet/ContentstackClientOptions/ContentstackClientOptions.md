---
title: "ContentstackClientOptions"
description: "ContentstackClientOptions class is base class for Contentstack Configuration."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/contentstackclientoptions"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ContentstackClientOptions

## ContentstackClientOptions

ContentstackClientOptions class is base class for Contentstack Configuration.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Authtoken | string | No | — | An Authtoken is a read-write token used to make authorized CMA requests. |
| DisableLogging | bool | No | — | Gets or sets the DisableLogging. When set to true, the logging of the client is disabled. The default value is false. |
| Host | string | No | api.contentstack.io | The Host used to set host url for the Contentstack Management API. |
| MaxResponseContentBufferSize | long | No | 1 gigabytes | Gets or sets the maximum number of bytes to buffer when reading the response content. |
| Port | int | No | — | The Host used to set host url for the Contentstack Management API. |
| ProxyCredentials | ICredentials | No | — | Credentials to use with a proxy. |
| ProxyHost | string | No | — | Host for the Proxy. |
| ProxyPort | int | No | — | Port for the Proxy. |
| RetryDelay | TimeSpan | No | 300ms | Returns the flag indicating delay in retrying HTTP requests. |
| RetryLimit | int | No | 5 sec | Returns the flag indicating how many retry HTTP requests an SDK should make for a single SDK operation invocation before giving up. |
| RetryOnError | bool | No | true | When set to true, the client will retry requests. When set to false, the client will not retry request. |
| RetryPolicy | RetryPolicy | No | — | The retry policy which specifies when a retry should be performed. |
| Timeout | TimeSpan | No | 30 sec | Gets or sets the timespan to wait before the request times out. |
| Version | string | No | v3 | The Host used to set host url for the Contentstack Management API. |
