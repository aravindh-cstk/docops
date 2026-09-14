---
title: "pathfora.publish Plugin"
description: "Publish Pathfora web experiences powered by Lytics"
url: /lytics/jstag-plugin-pathfora-publish
---

# pathfora.publish Plugin

## pathfora.publish Plugin

Publish Pathfora web experiences powered by Lytics

## \`pathfora.publish\` plugin

Publish Pathfora experiences

| Pathfora publish |
| --- |
| namespace pathfora.publish |
| web experiences |
| disabled by default |

### Configuration

```
pathfora: {
  publish: {
    disabled: true,
    global: 'pathfora',
    src: `${config.url}/api/experience/candidate/${config.cid}/config.js`,
    loaded: false,
    priority: 'ordered',
    urlFragmentWhitelist: [],
    listenForProfileChange: false,
    polling: {
      retries: 5
    },
    recommendations: {
      experience: []
    },
    candidates: {
      experiences: [],
      variations: [],
      legacyABTests: []
    },
    legacy: {
      disabled: true,
      src: `${config.url}/api/program/campaign/config/${
        config.cid
      }/config.js`,
      loaded: false
    }
  }
}
```

#### pathfora.publish.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set disabled to false to enable this plugin.

**Advanced options**

Advanced options generally do not need to be configured.

#### pathfora.publish.global

-   Type string
-   Optional
-   Defaults to "pathfora"

The global variable of the Pathfora SDK.

#### pathfora.publish.polling.retries

-   Type number
-   Optional
-   Defaults to 5

Maximum number of times to poll for the Pathfora SDK before giving up.

#### pathfora.publish.src

-   Type string
-   Optional
-   Defaults to ${config.url}/api/experience/candidate/${config.cid}/config.js where ${...} indicates string interpolation.

The URL for the Lytics-powered Experience recommendation config that controls live experiences on your site.

#### pathfora.publish.priority

-   Type "ordered" | undefined
-   Optional
-   Defaults to "ordered"

This value gets passed through to the Pathfora SDK. When "ordered", it will display only the top recommended experience. When undefined, it will display all initialized experiences.

#### pathfora.publish.loaded

-   Type boolean
-   Optional
-   Defaults to false
-   Read-only

This flag reflects whether the Pathfora config is loaded.

#### pathfora.publish.urlFragmentWhitelist

-   Type string\[\]
-   Optional
-   Defaults to \[\]

An array of substring patterns for matching against the current window.location. If any of these matches the current window.location, legacy Lytics Personalize Campaigns will be disabled. This feature should be carefully used while migrating from legacy Lytics Personalize Campaigns to Lytics Experiences.

#### pathfora.publish.listenForProfileChange

-   Type boolean
-   Optional
-   Defaults to false
-   Read-only

This flag controls whether all candidate widgets should be cleared on an entity reload, or only widgets which have data dependencies on the entity.

#### pathfora.publish.legacy.loaded

-   Type boolean
-   Optional
-   Defaults to false
-   Read-only

This flag reflects whether the Pathfora legacy config is loaded.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

This plugin works by appending script or link elements to the document and firing events notifying readiness of the requested resources.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| pathfora.install.succeeded | the install completed successfully | _none_ |
| pathfora.install.sdk.succeeded | the Pathfora JavaScript SDK is ready | _none_ |
| pathfora.install.css.succeeded | the Pathfora stylesheets are ready | _none_ |
| pathfora.install.done | after pathfora.install.succeeded | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
