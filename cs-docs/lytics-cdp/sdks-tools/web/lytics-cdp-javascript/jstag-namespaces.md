---
title: "Namespaces"
description: "How JSTag plugins use namespaces for configuration and communication"
url: /lytics/jstag-namespaces
---

# Namespaces

## Namespaces

How JSTag plugins use namespaces for configuration and communication

## Namespaces

In JSTag, plugins use namespaces for two purposes: [configuration](#configuration) and [communication](#communication).

Note that this is not a security feature. At most, it is intended to make plugin authoring more comprehensible. These conventions are not _strictly_ enforced.

[Learn more about plugins](/docs/lytics/jstag-plugin-reference)

### Configuration

Namespaces are used to logically partition configuration options by plugin name. Configuration options for a plugin must be housed under the plugin's namespace. As an example, to configure the polling plugin, pass an object literal with with the configuration options organized under the key "polling":

```
jstag.config = {
  polling: {
    retries: 10
  }
};
```

Namespaces can be nested. For example, the google.dfp plugin should be configured like this:

```
jstag.config = {
  google: {
    dfp: {
      disabled: false
    }
  }
};
```

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Communication

In JSTag, communication occurs along well-defined channels. Topics are the names of specific channels of communication. They can be literal (e.g. getid, entity.loaded) or pattern-based (e.g. collect.\* or even \*, a firehose topic that matches _all events_).

Namespaces are used as prefixes for topics. Plugins are only allowed to emit (send) events on channels they own, meaning that that channel's topic is prefixed with the plugin's namespace.

In this example, the user subscribes to the entity.loaded topic to be notified whenever the entity is available:

```
jstag.on('entity.loaded', (_, entity) => {
  MyGreatApp.setEntity(entity);
})
```

[Learn more about events](/docs/lytics/jstag-events)
