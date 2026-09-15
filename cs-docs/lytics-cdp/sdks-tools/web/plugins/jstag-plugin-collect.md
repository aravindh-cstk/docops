---
title: "collect Plugin"
description: "Send data into Lytics using the most appropriate transport"
url: /lytics/jstag-plugin-collect
uid: blt0ed4bdffdcfa5763
---

# collect Plugin

## collect Plugin

Send data into Lytics using the most appropriate transport

## \`collect\` plugin

Send data into Lytics using the most appropriate of two available transports

-   a GET request using a gif pixel
-   a POST request using a form submission

| Send |
| --- |
| namespace collect |
| data collection utility |

### Config

```
{
  serializer: 'default'
}
```

#### serializer

-   Type (data: any, namespace?: string) => string
-   Optional
-   Defaults to the builtin serializer

Optionally, you can pass a function which will be used to serialize every incoming message to the wire protocol. Generally, this should not need to be configured; the builtin serializer will work for most users

### API

#### collect(message: Message, url: string, isMock: boolean): void;

Generally, you won't be calling this method directly. It is exposed as API for backwards compatibility.

##### parameters

-   **message** [Message](/docs/lytics/jstag-plugin-send#message) The message to serialize and send
-   **url** string
-   **isMock** boolean When false, just serialize the message without actually sending it

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| collect.started | [collect](#collect) is called. | The message to be sent |
| collect.finished | The request succeeds | The message that was sent |
| collect.failed | The request fails | _None_ |

[Learn more about events](/docs/lytics/jstag-events)
