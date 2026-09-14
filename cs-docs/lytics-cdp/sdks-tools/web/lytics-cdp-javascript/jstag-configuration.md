---
title: "Configuration"
description: "Configure the Lytics JSTag using a monolithic configuration object"
url: /lytics/jstag-configuration
uid: blt041089839d82fb4c
---

# Configuration

## Configuration

Configure the Lytics JSTag using a monolithic configuration object

## Configuration

All aspects of the Lytics JSTag are configurable using a monolithic configuration object. Any options not provided by the user will have reasonable defaults wherever possible.

### Configuring JSTag

You have four options for configuring the JSTag. Options 1 and 2 are analogous to options 3 and 4, respectively, with the difference that in the latter case where the async tag is used, the tag is being configured before the SDK is actually downloaded. Using the async tag is the recommended best practice for performance reasons.

**Option 1**: passing the config directly to jstag.init will configure the tag and initialize it.

```
jstag.init({ cid: 'XXXX' })
```

**Option 2**: assigning to jstag.config before jstag.init is called. This can be more convenient in some scenarios, allowing the user to decouple configuration and implementation.

```
// Assign to the config...
jstag.config = { cid: 'XXXX' };

// Mutate the config
jstag.config.loadid = true;

// Before using jstag, init must be called.
jstag.init();
```

Assigning to jstag.config post initialization is not supported. However, you can force reinitialization by simply calling jstag.init() again after mutating the config.

```
// Mutating the config is possible, if not recommended
jstag.config.loadid = false;

// ...but it's necessary to reinitialize the tag after mutation
jstag.init();
```

**Option 3**: passing the config to the async tag. Probably the most common way to configure JSTag is by passing the config to the async tag:

```
<script>/* jstag async snippet elided */</script>
<script>
// Pass the config to the async tag's init method
jstag.init({ cid: 'XXXX' });
</script>
```

**Option 4**: assigning the config to jstag.config using the async tag:

```
<script>/* jstag async snippet elided */</script>
<script>
// Set up the config
jstag.config = { cid: 'XXXX' };

// Mutate the config
jstag.config.blocked = true;

// Initialize the instance
jstag.init();
</script>
```

### General Configuration

The configuration has a few top-level items:

#### cid

-   Type string or string\[\]
-   Required
-   The Lytics cid to use for collecting data

One or more CIDs which will be used for collecting data. The Lytics JSTag will broadcast all messages to the Lytics API endpoint for each CID provided.

##### example

```
jstag.config = {

  // Your account's cid should be provided below in lieu of XXXX
  cid: 'XXXX'
}
```

#### loadid

-   Type boolean
-   Optional
-   Defaults to false

Used for 3rd party identity resolution. When enabled, the Lytics JSTag will make a preflight request to a provided endpoint in order to link 3rd party identifiers to the user's prior to sending any messages.

##### example

```
jstag.config = {
  loadid: true
}
```

#### blocked

-   Type boolean
-   Optional
-   Defaults to true

When true, the tag will be initialized in "blocked" mode. This mode will enqueue messages until one of the following conditions is true:

-   The entity is loaded
-   The unblock method is called explicitly

##### example

```
jstag.init({
  blocked: true
});

jstag.send({ test: 123 });
jstag.send({ test: 88 });

// No messages have been sent yet...

jstag.unblock();

// Blocked messages are sent in FIFO order...
```

#### stream

-   Type string
-   Optional
-   Defaults to 'default'

The name of the Lytics stream to send messages to, by default. This can be overridden on a per-message basis by passing a string parameter to the send method:

##### example

```
jstag.config = {
  stream: 'web_traffic'
}

jstag.init();

// This message will be sent to the `web_traffic` stream
jstag.send({ message: 'example message' });

// This message will be sent to the `other` stream
jstag.send('other', { message: 'another example message' });
```

#### Advanced options

**Click to expand**

Advanced options generally do not need to be configured.

\\- [url](#url)

-   [location](#location)
-   [payloadQueue](#payloadqueue)
-   [serializer](#serializer)
-   [delay](#delay)
-   [path](#path)
-   [idpath](#idpath)
-   [cookie](#cookie)
-   [sesname](#sesname)
-   [sessecs](#sessecs)
-   [qsargs](#qsargs)
-   [tagid](#tagid)
-   [byFieldKey](#byFieldKey)
-   [version](#version)

#### url

-   Type string
-   Optional
-   Defaults to ''

The base URL for communicating with the Lytics API.

##### example

```
jstag.config = {

  // You can provide an alternative url for testing...
  url: '//lyticstest.appspot.com'
}
```

#### location

-   Type string
-   Optional
-   Defaults to the current window.location

Generally, you should not provide an override for this config option.

#### payloadQueue

-   Type Message\[\]
-   Optional
-   Defaults to an empty array

An array of already-pending messages at initialization time. These items will be dispatched in FIFO order when after the tag is initialized.

##### example

```
jstag.config = {

  // You can provide an alternative url for testing...
  payloadQueue: [
    message1,
    message2,
    message3
  ]
}
```

Configuring your instance with [blocked: true](#blocked) and calling jstag.send() normally is preferrable to using payloadQueue for most use-cases.

#### serializer

-   Type (data: any, namespace?: string) => string
-   Optional
-   Defaults to the builtin serializer

Optionally, you can pass a function which will be used to serialize every incoming message to the wire protocol. Generally, this should not need to be configured; the builtin serializer will work for most users

#### delay

-   Type number
-   Optional
-   Defaults to 2000

The maximum delay to wait, in milliseconds, before dispatching callbacks for message sends. Some transports will fire their callback as soon as possible.

##### example

```
jstag.config = {
  delay: 5000 // 5 seconds
}
```

#### path

-   Type string
-   Optional
-   Defaults to '/c/'

The path on the Lytics API. This generally does not need to be configured.

#### idpath

-   Type string
-   Optional
-   Defaults to '/cid/'

The idpath on the Lytics API. This generally does not need to be configured.

#### cookie

-   Type string
-   Optional
-   Defaults to seerid

The name of the cookie to store the user's \_uid. This generally does not need to be configured.

##### example

```
jstag.config = {
  cookie: 'altseerid'
}
```

#### sesname

-   Type string
-   Optional
-   Defaults to seerses

The name of the cookie to store the user's session name. This generally does not need to be configured.

##### example

```
jstag.config = {
  cookie: 'altsesname'
}
```

#### sessecs

-   Type number
-   Optional
-   Defaults to 1800

A expiration period (also known as a TTL) in seconds for the jstag session cookie.

#### qsargs

-   Type string\[\]
-   Optional
-   Defaults to an empty array

An array of the names of any query parameters that should be forwarded during page analysis. The query string for the current URL will be parsed and any of named parameters will be merged in to the page analysis payload.

##### example

```
jstag.config = {
  // Pass through `page` and `sort` query param values, if any, with page analysis
  qsargs: [ 'page', 'sort' ]
}
```

#### tagid

-   Type string
-   Optional
-   Defaults to jstag-csdk

The id of the jstag SDK. This generally does not need to be configured.

#### byFieldKey

-   Type string
-   Optional
-   Defaults to \_uid

The key in the payload to use as the "by field". This generally does not need to be configured.

#### version

-   Type string
-   Optional
-   Defaults to the tag version

The version of the JSTag. This generally does not need to be configured.

### Plugin-level Configuration

The JSTag is plugin-based. All functionality is provided by plugins. Most plugins are configurable. Plugin configuration follows a namespace-based convention, whereby all applicable configuration options are housed under a key reflecting the plugin's namespace. For example, the audit plugin is configurable by passing its options under the key audit in the config.

```
jstag.init({
  cid: '...',
  audit: {
    topic: '*',
    level: 'verbose'
  }
})
```

_Figure 1_: an example of a plugin configuration from the audit plugin.

Refer to [plugin documentation](/docs/lytics/jstag-plugin-reference) for information about each plugin's configuration options.
