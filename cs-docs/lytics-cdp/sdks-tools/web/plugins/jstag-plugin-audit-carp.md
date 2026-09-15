---
title: "audit.carp Plugin"
description: "Safe, optional error handling for JSTag plugins"
url: /lytics/jstag-plugin-audit-carp
uid: blt2b35d24235b4ce84
---

# audit.carp Plugin

## audit.carp Plugin

Safe, optional error handling for JSTag plugins

## \`audit.carp\` plugin

Complain when things go wrong. These messages will be ignored by default, but can be listened to explicitly as a debugging aid.

| Audit Carp |
| --- |
| namespace audit.carp |
| debugging utility |
| always on |

### Configuration

```
audit: {
  carp: undefined
}
```

#### audit.carp

-   Type [AuditCallback](/docs/lytics/jstag-plugin-audit#auditcallback)
-   Optional
-   Defaults to undefined

A function which will be be conveniently bound to the wildcard pattern "\*.carp". This callback will receive all the carp messages from all plugins.

### Mechanism

This plugin works by subscribing to the \*.carp topic.

[Learn more about events](/docs/lytics/jstag-events)
