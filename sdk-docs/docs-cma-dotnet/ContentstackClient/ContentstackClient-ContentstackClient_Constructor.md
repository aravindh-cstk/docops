---
title: "ContentstackClient"
description: "Initializes new instance of the Contentstack.Management.Core.ContentstackClient class."
url: "https://www.contentstack.com/dotnet-management-contentstackclient-contentstackclient"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ContentstackClient

Initializes new instance of the Contentstack.Management.Core.ContentstackClient class.

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentstackOptions | ContentstackClientOptions | Yes | — | Contentstack configuration options. |

Returns:
Type
ContentstackClient

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

var options = new ContentstackClientOptions()
{
      Host = "<API_HOST>",
      Authtoken = "<AUTHTOKEN>"
}
ContentstackClient client = new ContentstackClient(options);
```

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentstackOptions | IOptions<ContentstackClientOptions> | No | — | Contentstack configuration options. |

Returns:
Type
ContentstackClient

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

var options = new ContentstackClientOptions()
{
      Host = "<API_HOST>",
      Authtoken = "<AUTHTOKEN>"
}
ContentstackClient client = new ContentstackClient(new OptionsWrapper<ContentstackClientOptions>
(options));
```

### Overload 3

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| authtoken | string | No | — | The optional Authtoken for making CMA call |
| host | string | No | api.contentstack.io | The optional host name for the API. |
| port | int | No | 443 | The optional port for the API |
| version | string | No | v3 | The optional version for the API |
| disableLogging | bool | No | false | The optional to disable or enable logs. |
| maxResponseContentBufferSize | long | No | 1073741824L | The optional maximum number of bytes to buffer when reading the response content |
| timeout | int | No | 30 sec | The optional timespan to wait before the request times out. |
| retryOnError | bool | No | true | The optional retry condition for retrying on error. |
| proxyHost | string | No | — | Host to use with a proxy. |
| proxyPort | int | No | -1 | Port to use with a proxy. |
| proxyCredentials | ICredentials | No | — | Credentials to use with a proxy. |
| EarlyAccess | string | No | — | Optional array of header strings for early access features. |

Returns:
Type
ContentstackClient

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTHTOKEN");
```
