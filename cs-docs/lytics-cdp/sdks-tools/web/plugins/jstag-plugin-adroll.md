---
title: "adroll Plugin"
description: "Push Lytics audiences into AdRoll"
url: /lytics/jstag-plugin-adroll
---

# adroll Plugin

## adroll Plugin

Push Lytics audiences into AdRoll

## \`adroll\` plugin

The AdRoll plugin is for pushing Lytics audiences into AdRoll.

| Adroll |
| --- |
| namespace adroll |
| audience push |
| disabled by default |

### Configuration

```
adroll: {
  audiencePush: {
    disabled: true,
    global: '__adroll'
  }
}
```

#### adroll.audiencePush.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set disabled to false to enable this plugin.

Advanced options

Advanced options generally do not need to be configured.

#### adroll.audiencePush.global

-   Type string
-   Optional
-   Defaults to \_\_adroll

The global variable of the Adroll SDK.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

This plugin works by integrating with the AdRoll SDK. It loads audiences from Lytics and transmits them to AdRoll.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| adroll.audiencePush.done | The audiences have been pushed to Adroll | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
