---
title: "iframeTransport Plugin"
description: "Send data using an iframe-based POST protocol"
url: /lytics/jstag-plugin-iframe-transport
uid: bltfd16b979aad0eb8f
---

# iframeTransport Plugin

## iframeTransport Plugin

Send data using an iframe-based POST protocol

## iframe transport

Iframe transport is a plugin for sending arbitrary data to an HTTP endpoint using the POST method. It is designed to send data that would exceed the maximum length supported by browsers of URLs used in GET requests.

The endpoint must specially implement the iframeTransport protocol.

### configuration

```
iframeTransport: {
  timeout: 500
}
```

### remarks

This plugin is enabled by default and cannot be disabled.

### api

#### jstag.iframe(request: IframeTransportRequest, callback: IframeTransportCallback)

##### params

-   request: IframeTransportRequest -- The parameters for the iframe request. These are:
    -   url: string -- The URL of the request
    -   data: any -- Arbitrary data to be POSTed to the http endpoint.
    -   timeout: number -- (Optional) a timeout for this request to use instead of the tag instance's configured timeout.
-   callback: IframeTransportCallback -- The callback which will be invoked with the text content of the response. Parsing is imperative on the caller. The signature of an IframeTransportCallback is (data: any) => void.

##### returns

void
