---
title: "getid Plugin"
description: "Retrieve the Lytics Seer ID asynchronously"
url: /lytics/jstag-plugin-getid
---

# getid Plugin

## getid Plugin

Retrieve the Lytics Seer ID asynchronously

## \`getid\` plugin

Retrieve the seer ID asynchronously

| LIO |
| --- |
| namespace getid |
| seer ID utility |

### Config

-   uuid - _Optional_ function The factory to use for uuid (v4 by default)
-   useSimpleUid - _Optional_ boolean use a "simple" (weak) identifier instead of uuid
-   getter - _Optional_ function to get the id in some other way (e.g. to avoid dropping a cookie)

### Concepts

#### "Seer ID"

The Seer ID is a unique identifier for each visitor of a site. This ID is used for data collection and to retrieve the entity.

### API

#### getid(callback: IdCallback): void

Retrieve the Seer ID asynchronously

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| getid | When the Seer ID is available | The seer id |

[Learn more about events](/docs/lytics/jstag-events)
