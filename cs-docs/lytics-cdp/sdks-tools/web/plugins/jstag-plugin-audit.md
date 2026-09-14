---
title: "audit Plugin"
description: "Log everything the tag does or filter by topic"
url: /lytics/jstag-plugin-audit
uid: bltd31074c080cbde38
---

# audit Plugin

## audit Plugin

Log everything the tag does or filter by topic

## \`audit\` plugin

Log everything the tag does or filter by topic.

| Audit |
| --- |
| namespace audit |
| debugging utility |
| always on |

### Configuration

```
audit: {
  topic: '*',
  level: 'silent',
  info: undefined
}
```

#### audit.level

-   Type "silent" | "verbose"
-   Optional
-   Defaults to "silent"

Set audit.level to "verbose" to log everything matching the [audit.topic](#audittopic). Set audit.level to "silent" to log nothing.

#### audit.info

-   Type [AuditCallback](#auditcallback)
-   Optional
-   Defaults to undefined

As a convenience, audit.info can be provided with a callback which will receive all messages matching the [audit.topic](#audittopic).

Advanced options

Advanced options generally do not need to be configured.

#### audit.topic

-   Type string
-   Optional
-   Defaults to "\*"

Set audit.topic to a pattern matching the events you would like to audit. Wildcards (\*) are supported. For example \* matches everything. foo.\* matches everything under the foo namespace.

[Learn more about events](/docs/lytics/jstag-events)

### Interfaces

#### AuditCallback

-   Type (eventName: string, ...rest: any\[\]) => void

### Mechanism

This plugin works by binding to different topics and loading whatever is sent. When a developer would like to better understand the internal behavior of the tag, this plugin can expose the entire log of everything the tag does.
