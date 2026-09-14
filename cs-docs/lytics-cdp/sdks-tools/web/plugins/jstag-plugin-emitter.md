---
title: "emitter Plugin"
description: "Interface for broadcasting messages that can be received by other plugins"
url: /lytics/jstag-plugin-emitter
uid: bltdb6b916de159cc19
---

# emitter Plugin

## emitter Plugin

Interface for broadcasting messages that can be received by other plugins

## emitter

Emitter is an interface for broadcasting messages that can be received by other plugins.

### configuration

This plugin does not support configuration.

### remarks

This plugin is enabled by default and cannot be disabled.

### api

#### pluginApi.emit(channel: string, ...rest: any\\[])

Notifies all registered listeners with the channel and any additional arguments.

##### params

-   channel: string - The channel on which to broadcast the event.
-   ...rest: any\[\] - Any additional arguments. These will be fanned out to all listeners.

##### returns

-   Plugin - returns the plugin interface itself for fluent-style chaining.

#### jstag.on(topic: string, listener: Listener)

Subscribe to a topic by wildcard. The listener will be called for each matching event until it is manually unsubscribed.

##### params

-   topic: string - The topic to subscribe to.
-   listener: Listener - The listener to receive event notifications.

##### returns

-   Subscription - An idempotent function encapsulating the capability to unsubscribe the listener from the topic. Calling this function will stop the listener from receiving notifications in the future.

##### examples

The next example adds a listener on the entity.loaded topic. Since the topic doesn't contain a wildcard star (\*), only events with a topic matching the channel exactly will be delivered to the listener.

```
var unsubscribe = jstag.on("entity.loaded", function(channel, entity) {
  console.log(channel); // "entity.loaded"
  console.log(entity); // Entity { data: { ... } }
});
```

The next example adds a listener for all events by binding using the catch-all wildcard pattern \*:

```
var unsubcribe = jstag.on("*", function(channel, param1, param2/*, ...and so on */) {
  console.log(channel); // The channel the event was broadcast on.
  console.log(param1); // The first argument
  console.log(param2); // The second argument
  // ...and so on
});
```

The next example adds a listener to all events broadcast in the google namespace:

```
var unsubscribe = jstag.on("google.*", function(channel) {
  console.log(channel); // The channel is guaranteed to start with "google."
});
```

The next example demonstrates unsubscribing:

```
var unsubscribe = jstag.on("*", function() {
  console.log("this will never be called");
});
unsubscribe(); // Synchronously unsubscribes our listener from the channel.
unsubscribe(); // Calling unsubscribe again has no effect.
```

#### jstag.once(topic: string, listener: Listener)

Subscribe to a topic by wildcard. The listener will be called at most one time. This is a convenience.

##### params

-   topic: string - The topic to subscribe to.
-   listener: Listener - The listener to receive event notifications.

##### returns

-   Subscription - An idempotent function encapsulating the capability to unsubscribe the listener from the topic. Calling this function will stop the listener from receiving notifications in the future.

##### example

```
var unsubscribe = jstag.once("enitity.loaded", function(_, entity) {
  console.log(entity); // This will only happen once
});

jstag.loadEntity();

// ...sometime later
jstag.loadEntity();
```
