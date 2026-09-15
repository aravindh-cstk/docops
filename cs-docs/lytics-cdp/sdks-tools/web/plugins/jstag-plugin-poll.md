---
title: "poll Plugin"
description: "Poll until a condition is satisfied or a timeout occurs"
url: /lytics/jstag-plugin-poll
uid: blt36821e0f1fe85cae
---

# poll Plugin

## poll Plugin

Poll until a condition is satisfied or a timeout occurs

## \`poll\` plugin

Poll until a condition is satisfied or a timeout occurs.

| Poll |
| --- |
| namespace poll |
| timing utility |

### Configuration

```
poll: {
  retries: 600,
  interval: 100 // millis
}
```

#### poll.retries

-   Type number
-   Optional
-   Default value 600

The maximum number of retries before giving up. This config option can be overridden by passing a retries option to the .poll() method.

#### poll.interval

-   Type number
-   Optional
-   Default value 100

How frequently to poll, in milliseconds. This config option can be overridden by passing an interval option to the .poll() method.

### Plugin API

#### poll(options: PollOptions): void

Poll until a condition becomes true, or until a timeout occurs.

##### parameters

-   **options** [PollOptions](#polloptions) - the polling options

##### returns

-   void

##### examples

```
jstag.use(plugin => {
  plugin.poll({
    property: 'jQuery',
    success() {
      console.log('jQuery is loaded');
    },
    failure() {
      console.error("Couldn't load jQuery");
    }
  });
});
```

_Exhibit_: Using the property option to poll for jQuery to load.

```
jstag.use(plugin => {
  plugin.poll({
    property: 'currentUser',
    receiver: window.MyCoolApp,
    success() {
      console.log('the user information is loaded from the API');
    },
    failure() {
      console.error("Couldn't load user information");
    }
  });
});
```

_Exhibit_: Using the property config option in concert with the receiver option to poll for a hypothetical Single Page App's user context to be loaded asynchronously from the backend.

### Interfaces

#### PollOptions

##### Properties

###### property

-   Type string
-   Optional
-   Defaults to undefined

A property to poll for. Simple use-cases of polling usually involve simply waiting for another library to define a property on the global object, so this option is often sufficient. Optionally, a [receiver](#receiver) can be passed separately which will be used as the lookup context for the property.

###### receiver

-   Type any
-   Optional
-   Defaults to window

An optional receiver which will be used as the lookup context for the [property](#property)

###### retries

-   Type number
-   Optional
-   Defaults to config.poll.retries

The maximum number of retries before giving up.

###### interval

-   Type number
-   Optional
-   Defaults to config.poll.interval

How frequently to poll, in milliseconds.

###### success

-   Type [PollCallback](#pollcallback)
-   Optional
-   Defaults to undefined

The callback to call when the predicate is satisfied.

###### failure

-   Type [PollCallback](#pollcallback)
-   Optional
-   Defaults to undefined

The callback to call when the retries are exhausted and the predicate has not been satisfied.

#### PollCallback

-   Type () => void

### Mechanism

This plugin works by using the setInterval host capability to schedule a timer. Each time the timer fires, the predicate is called. If the predicate returns true, the interval timer is canceled and the success callback is invoked. If the predicate returns false and the number of retries is reached, the interval timer is canceled and the failure callback is invoked.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| poll.started | Polling begins | _None_ |
| poll.succeeded | Polling succeeds | _None_ |
| poll.failed | Retries are exhausted before predicate is satisfied | _None_ |
| poll.stopped | Polling stops irrespective of whether the predicate is ever satisfied | _None_ |

[Learn more about events](/docs/lytics/jstag-events)
