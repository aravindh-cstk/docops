---
title: "amazon.dsp Plugin"
description: "Send the Lytics Seer ID to Amazon DSP for ID synchronization"
url: /lytics/jstag-plugin-amazon-dsp
uid: blt2897985f82d4040e
---

# amazon.dsp Plugin

## amazon.dsp Plugin

Send the Lytics Seer ID to Amazon DSP for ID synchronization

## \`amazon.dsp\` plugin

Amazon DSP is a plugin for sending the Lytics Seer ID to [Amazon DSP](https://advertising.amazon.com/products/amazon-dsp).

| Amazon DSP |
| --- |
| namespace amazon.dsp |
| identifier send |
| disabled by default |

### Configuration

```
amazon: {
  dsp: {
    disabled: false,
    alpha2: "[detected]",
    language: navigator.language,
    pixelEu: 'https://aax-eu.amazon-adsystem.com/s/dcm?pid=0fd612d9-169e-4abc-9509-01b23357b7a4',
    pixelRest: 'https://s.amazon-adsystem.com/dcm?pid=8f9b0615-e931-45a3-99e7-549741c1960e',
    euWhitelist: ['UK', 'DE', 'FR', 'IT', 'ES', 'IN', 'AE']
  }
}
```

#### amazon.dsp.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set amazon.dsp.disabled to false to enable this plugin.

#### amazon.dsp.alpha2

-   Type string
-   Optional
-   Defaults to the value detected by inspecting the navigator.language host string.

Pass along a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for your user's region if you have a more reliable mechanism for determining it. If this option is not specified, a default value will be extracted from the navigator.language host string. For instance, if the navigator.language is "en-US", the detected alpha2 code will be "US".

Advanced options

#### amazon.dsp.language

-   Type string
-   Optional
-   Defaults to navigator.language

Override the navigator language. Generally you should just pass along an alpha2 value.

#### amazon.dsp.pixelEu

-   Type string
-   Optional
-   Defaults to "https://aax-eu.amazon-adsystem.com/s/dcm?pid=0fd612d9-169e-4abc-9509-01b23357b7a4"

The pixel endpoint for users in the EU.

#### amazon.dsp.pixelRest

-   Type string
-   Optional
-   Defaults to "https://s.amazon-adsystem.com/dcm?pid=8f9b0615-e931-45a3-99e7-549741c1960e"

The pixel endpoint for users outside of the EU.

#### amazon.dsp.euWhitelist

-   Type string\[\]
-   Optional
-   Defaults to \['UK', 'DE', 'FR', 'IT', 'ES', 'IN', 'AE'\]

The whitelist of alpha2 codes that should use the pixelEu endpoint.

### Mechanism

This plugin works by loading a single pixel gif image from Amazon by requesting a special URL containing IDs, allowing the IDs to be linked.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| amazon.dsp.succeeded | when the DSP pixel request succeeds. The listener will not receive any additional arguments. | _none_ |
| amazon.dsp.failed | when the DSP pixel request failed. The listener will not receive any additional arguments. | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
