---
title: "legacyLiosetupCallback Plugin"
description: "Legacy callback support for the liosetup global variable pattern"
url: /lytics/jstag-plugin-legacy-liosetup-callback
---

# legacyLiosetupCallback Plugin

## legacyLiosetupCallback Plugin

Legacy callback support for the liosetup global variable pattern

## \`legacyLiosetupCallback\` plugin

Avoid using this legacy feature unless you know what you are doing and have a good reason.

| Legacy Liosetup Callback |
| --- |
| always on |

### examples

If you define an object like this on the window:

```
window.liosetup = {
  callback: entity => {/* elided */}
};
```

_Exhibit_: That callback will be invoked when the entity is loaded.

```
window.liosetup = {
  callback: [
    entity => {/* elided */},
    entity => {/* elided */}
  ]
};
```

_Exhibit_: Also entirely possible to pass an array, in which case we'll fan out.
