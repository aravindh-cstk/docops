---
title: "lio Plugin"
description: "A framework for authoring JSTag integrations with pull and push patterns"
url: /lytics/jstag-plugin-lio
---

# lio Plugin

## lio Plugin

A framework for authoring JSTag integrations with pull and push patterns

## \`lio\` plugin

A framework for authoring JSTag integrations.

| LIO |
| --- |
| namespace lio |
| framework |

### Concepts

#### "Pull integrations"

A "pull integration" is an extension of the JSTag which runs _immediately_ when the tag is initialized. Pull integrations are about reading some data from the current web page to include in the initial entity request. For instance, a pull integration might read the value of a global variable in order to include that information with the entity request.

#### "Push integrations"

A "push integration" is an extension of the JSTag which runs _after the Lytics entity is retrieved_. Push integrations are about reading some information from the entity (or reading the entity itself in its entirety) and forwarding that information into another service.

#### "The blank"

The blank is a concept germane to [pull integrations](#pull-integrations). When each pull integration runs, it receives as its argument "the blank", which is an object guaranteed to be freshly instantiated for each pull cycle. Each pull integration can mutate this object, usually by installing properties to it. The blank will be sent along with the entity request. Lytics will merge the blank with the user's entity for the purposes of computing the entity's current segment membership.

### Configuration

```
lio: {
  global: "liosetup",
  polling: {
    "lio.push": {
      retries: 600,
      interval: 100 // milliseconds
    },
    "lio.pull": {
      retries: 0
    }
  },
  performPullAndSend: true
}
```

### Interfaces

#### IntegrationOptions

##### properties

###### integrationName

-   Type string

The name of the integration.

###### globalVariableName

-   Type string
-   Optional

The name of a property of the global object to [pull](#pull-integrations) into the entity request.

###### success

-   Type () => void
-   Optional

A callback to invoke upon success.

###### failure

-   Type () => void
-   Optional

A callback to invoke upon failure.

###### polling

-   Type [PollOptions](/docs/lytics/jstag-plugin-poll#polloptions)
-   Optional

Overrides for the default [polling](/docs/lytics/jstag-plugin-poll) options

#### LioTask

##### Properties

###### channel

-   Type "lio.pull" | "lio.push"

###### options

-   Type [IntegrationOptions](#integrationoptions)

###### succeed

-   Type [Sink](#sink)

###### fail

-   Type [Sink](#sink)

#### LioStatus

-   Type "lio.registered" | "lio.success" | "lio.failure"

#### Registry

-   Type { \[key: string\]: LioStatus };

#### Sink

-   Type (...rest: any\[\]) => void;

### API

#### getIntegrationsRegistry(): Registry

Returns the registry of integrations.

#### isIntegrationLoaded(integrationName: string): boolean

Returns true if an integration is "loaded"

```
TODO terminology: should we be more consistent with terminology? I prefer the term "registered" to the term "loaded")
```

#### pull(sink: Sink): void

Run the [pull integrations](#pull-integrations).

### Plugin API

#### integration(channel: LioChannel, options: IntegrationOptions)

Register an integration on a channel. When an event fires on that channel, run the associated code. This is the primary mechanism for extending JSTag. Using the slightly friendlier entrypoints [pullIntegration](#pullintegrationoptions-integrationoptions) and [pushIntegration](#pushintegrationoptions-integrationoptions) is recommended.

#### pullIntegration(options: IntegrationOptions)

A convenience over integration("lio.pull", options)

#### pushIntegration(options: IntegrationOptions)

A convenience over integration("lio.push", options)

#### pullGlobalVariable(options: IntegrationOptions)

A convenience over integration("lio.pull", options) that streamlines the use-case of reading a global variable to include in the entity request.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| lio.pull | Pull stage begins | ["the blank"](#the-blank) to install properties into |
| lio.push | Push stage begins | the entity |
| lio.pulled | Pull stage completes | _none_ |
| lio.pushed | Push stage completes | _none_ |
| lio.registered | After a task is registered | the [LioTask](#liotask) |
| lio.started | Before each task | the [LioTask](#liotask) |
| lio.succeeded | After a task completes successfully | the [LioTask](#liotask) |
| lio.failed | After a task fails | the [LioTask](#liotask) |
| lio.finished | After each task finishes | the [LioTask](#liotask) |
| lio.flush | Before a stage begins | either "lio.pull" or "lio.push" |
| lio.flushed | After a stage completes | either "lio.pull" or "lio.push" |
| lio.done | After both pull and push stages complete | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
