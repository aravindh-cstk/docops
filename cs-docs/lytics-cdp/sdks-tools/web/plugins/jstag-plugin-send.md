---
title: "send Plugin"
description: "Send data into Lytics with support for blocking and mock modes"
url: /lytics/jstag-plugin-send
uid: blt7b4405efccbeed51
---

# send Plugin

## send Plugin

Send data into Lytics with support for blocking and mock modes

## \`send\` plugin

Send data into Lytics.

| Send |
| --- |
| namespace send |
| data collection utility |

### Concepts

#### "mock"

#### "blocked"

We have the capability of buffering calls to jstag.send() until we "unblock" the instance. This can be useful for working around load order issues and other causes of asynchrony.

### Interfaces

#### SendParams

All parameters are optional, and they can be passed in any order. They are disambiguated using the JavaScript typeof operator.

The parameters are:

-   **payload** Record<string, unknown> the key value pairs to send into Lytics
-   **stream** string the name of the Lytics stream to send this message.
-   **isMock** boolean when true, this is a [mock send](#mock)
-   **callback** [AckCallback](#ackcallback) A callback which will be invoked when the message is acknowledged.

#### AckCallback

#### Message

##### properties

-   **data** Record<string, unknown>;
-   **dataMsg** string The serialized data message
-   **sendurl** string\[\]
-   **callback** [AckCallback](#ackcallback) _Optional_
-   **stream** string _Optional_
-   **channelName** "Form" | "Gif" The transport used to send the message

### API

#### send(...rest: SendParams[]): void;

##### parameters

[SendParams](#sendparams)

##### examples

```
jstag.send({ skyColor: 'blue' });
```

_Exhibit_: sending an arbitrary message without notification

```
jstag.send({ skyColor: 'blue' }, () => {
  console.log('message was sent');
});
```

_Exhibit_: sending an arbitrary message with notification

#### identify(...rest: SendParams[]): void;

An alias of [send](#send).

##### parameters

[SendParams](#sendparams)

##### example

```
jstag.identify();
```

_Exhibit_: A perhaps more semantic way of sending a user's identity into Lytics

#### page(...rest: SendParams[]): void;

Like [send](#send), but with the results of [page analysis](/docs/lytics/jstag-plugin-page-analysis) merged into the payload.

##### parameters

[SendParams](#sendparams)

##### examples

```
jstag.page();
```

_Exhibit_: Recording a page view in Lytics

```
MyApp.onRouterChange(() => jstag.page());
```

_Exhibit_: A setup for a hypothetical single page app.

#### pageView(...rest: SendParams[]): void;

An alias of [page](#page)

##### parameters

[SendParams](#sendparams)

##### example

```
jstag.pageView();
```

_Exhibit_: A perhaps more semantic way of calling jstag.page()

#### mock(...rest: SendParams[]): void;

Like [send](#send), but with mock always true

##### parameters

[SendParams](#sendparams)

##### examples

```
jstag.mock({ cartContents: MyApp.getCartContents() });
```

_Exhibit_: collecting some data that will be included when the entity request is made, and will get sent into Lytics eventually

#### unblock(): JSTag;

Send all the blocked messages. Note that there is no method to block again once unblocked.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| send.unblocked | The initial "block" has been removed. | the number of buffered messages which were merged when unblock was called |

[Learn more about events](/docs/lytics/jstag-events)
