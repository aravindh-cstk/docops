---
title: "lifecycle Plugin"
description: "Hook into the plugin lifecycle to run code on setup and teardown"
url: /lytics/jstag-plugin-lifecycle
---

# lifecycle Plugin

## lifecycle Plugin

Hook into the plugin lifecycle to run code on setup and teardown

## \`lifecycle\` plugin

Hook into the plugin lifecycle. Run code on setup and teardown.

| Lifecycle |
| --- |
| utility |

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| lifecycle.setup.requested | Setup is requested | _none_ |
| lifecycle.setup.done | immediately after lifecycle.setup.requested | _none_ |
| lifecycle.teardown.requested | Teardown is requested | _none_ |
| lifecycle.teardown.done | immediately after lifecycle.teardown.requested | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
