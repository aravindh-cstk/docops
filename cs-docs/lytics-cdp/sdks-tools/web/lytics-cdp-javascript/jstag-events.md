---
title: "Events"
description: "Subscribe to and receive events from JSTag plugins using the Observer pattern"
url: /lytics/jstag-events
---

# Events

## Events

Subscribe to and receive events from JSTag plugins using the Observer pattern

## Events

JSTag is based on the [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) (similar to [DOM](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), [Node.js](https://nodejs.org/api/events.html), or [jQuery](https://api.jquery.com/on/)) enabling components to communicate by sending events which can be subscribed to. A subscriber will be notified when that thing happens. This communication is multicast, meaning that multiple subscribers will be notified when an event occurs, and decoupled, which here means essentially that the sender of an event doesn't know or care whether there is a listener or not.

In JSTag, only the "subscribing" capability is exposed. The so-called "emitting" (i.e. sending) capability is reserved for plugins to use. This design allows subscribers to know that a given event was sent from a given plugin by enforcing a [namespacing convention](/docs/lytics/jstag-namespaces).

### Listener

A Listener is a function with the signature (topic: string, ...rest: any\[\]) => void. The topic is passed as the first parameter in order to support wildcard-based pattern matching. The rest of the arguments are whatever were emitted by a plugin. Generally there will be at most one additional argument, so this interface might be easier to think about like this:

```
interface Listener {
  (topic: string, event: any): void;
}
```

The specific details about what will be emitted for each topic is described in the documentation for each plugin.

[Learn more about plugins](/docs/lytics/jstag-plugin-reference)

### Subscription

A Subscription is a function with the signature () => void which you can call to unsubscribe. A subscription will be returned from the methods of the Receiver interface described below.

### Receiver

The Receiver interface is implemented by the jstag itself. It provides two methods for subscribing to events.

```
interface Receiver {
  on(topic: string, listener: Listener): Subscription;

  once(topic: string, listener: Listener): Subscription;
}
```

### .on(topic: string, listener: Listener): Subscription

**Example**: subscribing to an event

```
jstag.on('getid', (_, id) => {
  AwesomeApp.setSeerId(id);
});
```

**Example**: subscribing by wildcard

```
jstag.on('entity.*', (topic, event) => {
  // You can switch on the topic parameter to handle events on specific topics
  switch (topic) {
    case 'entity.loaded':
    case 'entity.unloaded':
    // ...
  }
});
```

**Example**: unsubscribing from an event

```
let off = jstag.on('entity.loaded', () => {/* ...elided... */});


off(); // Don't care anymore, unsubscribe.
```

### .once(topic: string, listener: Listener): Subscription

**Example**: subscribing to only the next event

```
jstag.once('entity.loaded', (_, entity) => {
  // This will only call once.
});
```
