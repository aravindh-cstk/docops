---
title: "pageAnalysis Plugin"
description: "Automatically collect and send page analysis data into Lytics"
url: /lytics/jstag-plugin-page-analysis
---

# pageAnalysis Plugin

## pageAnalysis Plugin

Automatically collect and send page analysis data into Lytics

## \`pageAnalysis\` plugin

Send page analysis into Lytics.

| Page Analysis |
| --- |
| namespace pageAnalysis |
| page analysis utility |
| on by default |

### Config

```
pageAnalysis: {
  disabled: false
}
```

#### pageAnalysis.disabled

-   Type boolean
-   Optional
-   Defaults to false

Set disabled to true to disable this plugin. When enabled, [pageAnalysis](#pageanalysis) is called automatically.

#### pageAnalysis(): void;

[Send](/docs/lytics/jstag-plugin-send) page analysis into Lytics.

##### example

```
jstag.pageAnalyis(); // collect page analysis and send it into Lytics
```

### Mechanism

This plugin works by examining certain properties of the DOM, and [sending](/docs/lytics/jstag-plugin-send) them as key-value pairs into Lytics.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| pageAnalysis | page analysis is called. | the results of performing page analysis |

[Learn more about events](/docs/lytics/jstag-events)
