---
title: "audit.mustEnable Plugin"
description: "Plugin API for opting into the pattern of plugins that must be explicitly enabled"
url: /lytics/jstag-plugin-audit-mustenable
uid: bltc3f69f48c97e2891
---

# audit.mustEnable Plugin

## audit.mustEnable Plugin

Plugin API for opting into the pattern of plugins that must be explicitly enabled

## \`audit.mustEnable\` plugin

A Plugin API for opting into the pattern of plugins that are disabled by default and must be explicitly enabled by configuration.

| Audit mustEnable |
| --- |
| namespace audit.mustEnable |
| plugin API |
| always on |

### Plugin API

#### mustEnable(): void

Declare that your plugin must be enabled. Any subsequent code will run only when the plugin is enabled by configuration.

```
jstag.use(plugin => {
  plugin.ns("myPlugin");

  plugin.defaults({
    myPlugin: {
      disabled: true
    }
  });

  plugin.mustEnable();

  // This code is unreachable unless the plugin is enabled
});
```

#### Mechanism

This plugin implements non-local return using JavaScript's throw keyword.
