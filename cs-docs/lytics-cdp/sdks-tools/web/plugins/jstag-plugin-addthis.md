---
title: "addThis Plugin"
description: "Push Lytics audiences into AddThis"
url: /lytics/jstag-plugin-addthis
---

# addThis Plugin

## addThis Plugin

Push Lytics audiences into AddThis

## \`addThis\` plugin

The AddThis plugin is for pushing Lytics audiences into [AddThis](https://addthis.com).

| AddThis |
| --- |
| namespace addThis |
| audience push |
| disabled by default |

### Configuration

```
addThis: {
  audiencePush: {
    disabled: true,
    cookie: '__attag',
    global: 'addthis',
  }
}
```

#### addThis.audiencePush.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set addThis.audiencePush.disabled to false to enable this plugin.

Advanced options

Advanced options generally do not need to be configured.

#### addThis.audiencePush.cookie

-   Type string
-   Optional
-   Defaults to \_\_attag

The name of the AddThis cookie.

#### addThis.audiencePush.global

-   Type string
-   Optional
-   Defaults to addthis

The global variable of the AddThis SDK.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

This plugin works by integrating with the AddThis SDK. It loads audiences from Lytics and transmits them to AddThis.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| addThis.audiencePush.detected | The global AddThis SDK is detected. | _none_ |
| addThis.audiencePush.cookieDetected | The AddThis cookie is detected. | the cookie name |
| addThis.audiencePush.cookieUpdated | The AddThis cookie is updated. | _none_ |
| addThis.audiencePush.cookieNotDetected | The AddThis cookies is not detected | the cookie name |
| addThis.audiencePush.pushed | The audiences have been pushed to the AddThis SDK | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
