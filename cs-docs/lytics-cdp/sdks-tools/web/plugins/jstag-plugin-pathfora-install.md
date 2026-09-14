---
title: "pathfora.install Plugin"
description: "Download and install the Pathfora SDK automatically"
url: /lytics/jstag-plugin-pathfora-install
---

# pathfora.install Plugin

## pathfora.install Plugin

Download and install the Pathfora SDK automatically

## \`pathfora.install\` plugin

Download and install the Pathfora SDK.

| Pathfora install |
| --- |
| namespace pathfora.install |
| SDK installer |
| disabled by default |

### Configuration

```
pathfora: {
  install: {
    disabled: true,
    sdk: {
      disabled: true,
      loaded: false,
      src: 'https://c.lytics.io/static/pathfora.min.js'
    },
    css: {
      disabled: true,
      loaded: false,
      src: undefined
    }
  }
}
```

#### pathfora.install.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set disabled to false to enable this plugin.

#### pathfora.install.sdk.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set disabled to false to automatically install the Pathfora JavaScript SDK.

#### pathfora.install.css.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set disabled to false to automatically install the Pathfora Stylesheets.

**Advanced options**

Advanced options generally do not need to be configured.

#### pathfora.install.sdk.src

-   Type string
-   Optional
-   Defaults to "https://c.lytics.io/static/pathfora.min.js"

The location of the source code for the Pathfora JavaScript SDK.

#### pathfora.install.css.src

-   Type string
-   Optional
-   Defaults to undefined

The location of the source code for the Pathfora Stylesheets.

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
