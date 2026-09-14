---
title: "google.tagManager Plugin"
description: "Integrate with the Google Tag Manager data layer for audience push and data pull"
url: /lytics/jstag-plugin-google-tag-manager
---

# google.tagManager Plugin

## google.tagManager Plugin

Integrate with the Google Tag Manager data layer for audience push and data pull

## \`google.tagManager\` plugin

The Google Tag Manager plugin is for integrating with the Google Tag Manager data layer.

| Google Tag Manager |
| --- |
| namespace google.tagManager |
| audience push |
| data layer pull |
| disabled by default |

### Configuration

```
google: {
  tagManager: {
    global: 'dataLayer',
    segmentsKey: 'lytics_segments',
    dataLayerPull: {
      disabled: true
    },
    audiencePush: {
      disabled: true
    }
  }
}
```

#### google.tagManager.dataLayerPull.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set google.tagManager.dataLayerPull.disabled to false to enable this plugin.

#### google.tagManager.audiencePush.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set google.tagManager.audiencePush.disabled to false to enable this plugin.

Advanced options

Advanced options generally do not need to be configured.

#### google.tagManager.global

-   Type string
-   Optional
-   Defaults to "dataLayer"

The global variable of the Google Tag Manager data layer.

#### google.tagManager.segmentsKey

-   Type string
-   Optional
-   Defaults to "lytics\_segments"

The key under which to send the Lytics audiences to the data layer.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

**Audience push** works by integrating with the Google Tag Manager data layer. It pushes Lytics audiences into the Google Tag Manager data layer.

**Data layer pull** works by detecting and monitoring the Google Tag Manager data layer. The values from the data layer will be sent along with the [entity](/docs/lytics/jstag-plugin-entity) request.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| google.tagManager.dataLayerPulled | Data has been pulled from the data layer | _none_ |
| google.tagManager.audiencePushed | Audiences have been pushed to Google Tag Manager | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
