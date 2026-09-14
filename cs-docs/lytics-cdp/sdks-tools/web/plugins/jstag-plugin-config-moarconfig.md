---
title: "config.moarConfig Plugin"
description: "An advanced feature for supplying additional account-level configuration"
url: /lytics/jstag-plugin-config-moarconfig
uid: bltcf340a2b6c99800e
---

# config.moarConfig Plugin

## config.moarConfig Plugin

An advanced feature for supplying additional account-level configuration

## \`config.moarConfig\` plugin

An advanced feature of the config framework for shoehorning in additional account settings.

| Config moarConfig |
| --- |
| namespace config.moarConfig |
| framework |

#### Mechanism

The important feature offered by the moarConfig plugin is the ability to pass additional options _after_ the user-provided config, but ignore those values unless the user-provided config elides them

##### example

```
jstag.init({
  a: false,
  moarConfig: {
    a: true,
    b: true
  }
});

console.log(jstag.config.a); // false
console.log(jstag.config.b); // true
```
