---
title: "customGlobalVariables Plugin"
description: "Pull values of global JavaScript variables into the entity payload"
url: /lytics/jstag-plugin-custom-global-variables
---

# customGlobalVariables Plugin

## customGlobalVariables Plugin

Pull values of global JavaScript variables into the entity payload

## \`customGlobals\` plugin

Pull the values of global variables into the entity payload.

| Custom global variables |
| --- |
| namespace customGlobals |
| data layer pull |
| disabled by default |

### Configuration

```
customGlobals: {
  globals: [],
  disabled: true,
  payloadNamespace: 'lyticsDataLayer'
}
```

#### customGlobals.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set customGlobals.disabled to false to enable this plugin.

#### customGlobals.globals

-   Type string\[\]
-   Optional
-   Defaults to \[\]

A list of global variables, the values of which to include with the entity request.

#### customGlobals.payloadNamespace

-   Type string
-   Optional
-   Defaults to lyticsDataLayer

The name of the key in the entity request under which to put the current values of the global variables preparatory to an entity request.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

This plugin works by reading values of the properties of the global object.
