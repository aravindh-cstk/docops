---
title: "jsonpTransport Plugin"
description: "Send data using JSONP via a script tag"
url: /lytics/jstag-plugin-jsonp-transport
---

# jsonpTransport Plugin

## jsonpTransport Plugin

Send data using JSONP via a script tag

## \`jsonp\` plugin

Jsonp transport is a plugin for sending arbitrary data to an HTTP endpoint using a script tag. JSONP is capable of making cross-domain requests, but is subject to the data size limitations of GET requests. Only make JSONP requests to trusted endpoints, as there are serious security implications.

The endpoint must specially implement the [JSONP protocol](https://en.wikipedia.org/wiki/JSONP).

| Jsonp |
| --- |
| namespace jsonp |
| transport |
| always on |

### API

#### jstag.jsonp(url: string, callback: JsonpTransportCallback)

##### params

-   url: string -- The URL of the request, with any data pre-encoded.
-   callback: JsonpTransportCallback -- The callback which will be invoked with the parsed data of the response. The signature of an JsonpTransportCallback is (data: any) => void.

##### returns

void

##### example

```
jstag.jsonp('https://my-trusted-domain.com/endpoint?q=data', data => {
  console.log('retrieved some data with jsonp', data);
})
```

### Mechanism

This plugin works by implementing JSONP. This means assigning callbacks as properties of the global object and injecting script elements to the DOM.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| jsonp.requested | a jsonp request is initiated | The URL requested |
| jsonp.finished | a jsonp request is completed | The URL requested |

[Learn more about events](/docs/lytics/jstag-events)
