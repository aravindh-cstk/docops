---
title: "backingInstance Plugin"
description: "Access the actual JSTag instance behind the singleton facade"
url: /lytics/jstag-plugin-backing-instance
---

# backingInstance Plugin

## backingInstance Plugin

Access the actual JSTag instance behind the singleton facade

## \`backingInstance\` plugin

Access the actual JSTag instance behind the singleton facade.

This plugin is only available in development mode.

| Backing Instance |
| --- |
| debugging utility |
| development only |

### Plugin API

#### backingInstance(): JSTag

Access the backing instance.

```
console.log(jstag); // The singleton facade
console.log(jstag.backingInstance()) // The actual JSTag instance
```
