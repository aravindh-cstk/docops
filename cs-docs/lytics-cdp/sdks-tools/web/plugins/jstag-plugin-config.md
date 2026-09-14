---
title: "config Plugin"
description: "Configuration framework for interacting with the monolithic configuration"
url: /lytics/jstag-plugin-config
uid: blt911d09a57f1f8035
---

# config Plugin

## config Plugin

Configuration framework for interacting with the monolithic configuration

## \`config\` plugin

Configuration framework.

| Config |
| --- |
| namespace config |
| framework |

### Plugin API

#### defaults(defaultOptions: any): void

Declare a plugin's default configuration options. These options will be recursively merged with the options provided by the user in a manner such that the user's provided options will always override the default values.

##### parameters

-   **defaultOptions** any - The plugin's default options. This object should "match" the plugin's declared namespace (see example below).

##### example

```
jstag.use((plugin, instance, config) => {
  plugin.ns('a.b.c');

  plugin.defaults({
    a: {
      b: {
        c: {
          // This nesting should "match" the declared namespace!
          option1: true,
          option2: 3,
        }
      }
    }
  });

  // It is perfectly safe to drill into this plugin's namespace now.
  console.log(config.a.b.c.option1);

  // Using explicit safe navigation is discouraged:
  console.log(config?.a?.b?.c?.option1);

})
```

[Read more about namespaces](/docs/lytics/jstag-namespaces#configuration)

#### Mechanism

Call the method of the given name in the context of the jstag singleton and passes the rest of the parameters as arguments.
