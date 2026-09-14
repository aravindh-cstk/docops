---
title: "google.analytics Plugin"
description: "Export dimensions to Google Analytics"
url: /lytics/jstag-plugin-google-analytics
uid: bltdcf84a5c8f2a371e
---

# google.analytics Plugin

## google.analytics Plugin

Export dimensions to Google Analytics

## \`google.analytics\` plugin

The Google Analytics plugin is for exporting dimensions to Google Analytics.

| Google Analytics |
| --- |
| namespace google.analytics |
| dimension push |
| disabled by default |

### Configuration

```
google: {
  analytics: {
    global: 'ga',
    properties: [],
    dimensionPush: {
      disabled: true,
      eventCategory: 'lytics'
    }
  }
}
```

#### google.analytics.properties

-   Type string\[\]
-   Optional
-   Defaults to \[\]

An array of string properties to send into Google Analytics.

#### google.analytics.dimensionPush.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set google.analytics.dimensionPush.disabled to false to enable this plugin.

#### google.analytics.dimensionPush.eventCategory

-   Type string
-   Optional
-   Defaults to "lytics"

The event category for this dimension.

Advanced options

Advanced options generally do not need to be configured.

#### google.analytics.global

-   Type string
-   Optional
-   Defaults to ga

The global variable of the Google Analytics SDK.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

This plugin works by integrating with the Google Analytics SDK. It pushes custom dimensions into Google Analytics.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| google.analytics.dimensionPush.failed | Pushing a dimension to Google Analytics failed | _none_ |
| google.analytics.dimensionPush.done | Pushing a dimension to Google Analytics is done | _none_ |
| google.analytics.dimensionPush.set.requested | A dimension set is requested | { property, dimension, value } |
| google.analytics.dimensionPush.send.requested | A dimension send is requested | { property } |

[Learn more about events](/docs/lytics/jstag-events)
