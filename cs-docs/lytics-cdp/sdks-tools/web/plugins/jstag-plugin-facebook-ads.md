---
title: "facebook.ads Plugin"
description: "Export Lytics audiences to Facebook Ads"
url: /lytics/jstag-plugin-facebook-ads
---

# facebook.ads Plugin

## facebook.ads Plugin

Export Lytics audiences to Facebook Ads

## \`facebook.ads\` plugin

The Facebook Ads plugin is for exporting Lytics audiences to Facebook Ads.

| Facebook Ads |
| --- |
| namespace facebook.ads |
| audience push |
| disabled by default |

### Configuration

```
facebook: {
  ads: {
    audiencePush: {
      disabled: true,
      eventName: "Lytics Audiences"
    }
  }
}
```

#### facebook.ads.audiencePush.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set disabled to false to enable this plugin.

#### facebook.ads.audiencePush.eventName

-   Type string
-   Optional
-   Defaults to "Lytics Audiences"

The name of the event to send into Facebook.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

This plugin works by integrating with the Facebook JavaScript SDK. It loads audiences from Lytics and transmits them to Facebook.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| facebook.ads.audiencePush.done | after transmitting the audiences to the Facebook SDK | A hash of segments |

[Learn more about events](/docs/lytics/jstag-events)
