---
title: "google.dfp Plugin"
description: "Export Lytics audiences to Google DFP"
url: /lytics/jstag-plugin-google-dfp
uid: bltcc8c5b9c0364c1fc
---

# google.dfp Plugin

## google.dfp Plugin

Export Lytics audiences to Google DFP

## \`google.dfp\` plugin

The Google DFP plugin is for exporting audiences to Google DFP.

| Google DFP |
| --- |
| namespace google.dfp |
| audience push |
| disabled by default |

### Configuration

```
google: {
  dfp: {
    audiencePush: {
      disabled: true,
      targeting: 'LyticsSegments'
    },
    global: 'googletag'
  }
}
```

#### google.dfp.audiencePush.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set google.dfp.audiencePush.disabled to false to enable this plugin.

#### google.dfp.audiencePush.targeting

-   Type string
-   Optional
-   Defaults to "LyticsSegments"

The Google DFP targeting category.

Advanced options

Advanced options generally do not need to be configured.

#### google.dfp.global

-   Type string
-   Optional
-   Defaults to googletag

The global variable of the Google DFP SDK.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

This plugin works by integrating with the Google DFP SDK. It pushes Lytics audiences into Google DFP.
