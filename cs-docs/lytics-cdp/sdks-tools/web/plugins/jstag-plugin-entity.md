---
title: "entity Plugin"
description: "Interact with the current user's Lytics entity"
url: /lytics/jstag-plugin-entity
uid: blt008271c7a665f1d0
---

# entity Plugin

## entity Plugin

Interact with the current user's Lytics entity

## \`entity\` plugin

A plugin for interacting with the current user's Lytics entity

| Entity |
| --- |
| namespace entity |
| entities |
| always on |

### Configuration

```
entity: {
  format: 'default',
  endpoint: undefined,
  table: 'user',
  byFieldKey: config.byFieldKey,
  byFieldValue: undefined,
  preload: false
}
```

#### entity.preload

-   Type boolean
-   Optional
-   Defaults to false

Enabling this option at configuration time will cause jstag to implicitly [loadEntity](#load-entity) upon initialization. This is recommended for simple setups to avoid the need to call loadEntity explicitly.

Advanced options

#### entity.byFieldKey

-   Type string
-   Optional
-   Defaults to config.byFieldKey (it defaults to the top-level config option, which itself defaults to "\_uid")

The key to use to lookup the lytics entity. Oftentimes, this will be "\_uid".

#### entity.byFieldValue

-   Type string
-   Optional
-   Defaults to undefined

Generally, you should leave this undefined. It is an escape hatch for overriding the computed byFieldValue at configuration time.

#### entity.format

-   Type "default" | "legacy"
-   Optional
-   Defaults to "default"

Generally, you should use the "default" serializer, unless you know what you are doing and have a specific reason to use the "legacy" serializer.

#### entity.endpoint

-   Type string
-   Optional
-   Defaults to undefined

Generally, this should not be configured. It serves as an escape hatch to be able to load the entity from an arbitrary endpoint.

#### entity.table

-   Type string
-   Optional
-   Defaults to "user"

Generally, you should use the "user" table, unless you know what you are doing and have a specific reason to use another table

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Interfaces

#### Entity

##### properties

-   **data** any

##### methods

-   **toLegacyStyle(): any** - return an entity as one is represented in JSTag2
-   **getAt(path: string): any** - retrieve entity data by path.

#### EntityCallback

-   Type (entity: Entity) => void;

#### EntityLoadedListener

-   Type (topic: 'entity.loaded', entity: Entity) => void;

### Mechanism

This plugin works by fetching the current entity from the Lytics API.

### API

#### loadEntity([payload: any [, callback: EntityCallback]): void;

Forcefully load the user's entity asynchronously, passing along the payload if one is provided. If an optional callback is provided, it will be called with the user entity, asynchronously, upon retrieval. This method always loads the entity from the Lytics API, even if the entity has already been previously loaded.

##### parameters

-   **payload** Record<string, unknown> _Optional_
-   **callback** [EntityCallback](#entitycallback) _Optional_

##### examples

```
jstag.loadEntity();
```

_Exhibit_: loading the entity in the background.

```
jstag.loadEntity(entity => {
  console.log("entity loaded", entity);
});
```

_Exhibit_: loading the entity with notification.

```
jstag.loadEntity({ page: "landing-page" });
```

_Exhibit_: loading the entity with a payload, in the background.

```
jstag.loadEntity({ cartContents: MyApp.getCartContents() }, entity => {
  console.log("this entity included a payload with the user's shopping cart contents", entity);
});
```

_Exhibit_: loading the entity with a payload and notification.

#### entityReady(callback: EntityLoadedListener): void;

Receive a notification every time the entity changes. This method is passive insofar as it won't cause the entity to load, but will simply notify a callback whenever the entity changes. If you need the capability to unsubscribe, you should use [event listeners directly](#events)

##### parameters

**callback** [EntityLoadedListener](#entityloadedlistener)

##### examples

```
jstag.entityReady((_, entity) => {
  MyApp.setLyticsEntity(entity);
});

jstag.loadEntity({ currentRoute: MyApp.getCurrentRoute(); });

MyApp.onRouteChange(route => {
  jstag.loadEntity({ currentRoute: route });
});
```

_Exhibit_: A pattern using entityReady for notifying a hypothetical single page application whenever the Lytics entity changes.

#### getEntity(): Entity

Synchronously retrieve the preloaded Lytics entity. This method should only be used in a situation where the programmer can know from reading the source code itself that the Entity has already been loaded. This method will throw an exception if you call it before the entity has loaded.

##### examples

```
doSomethingWithEntity(jstag.getEntity());
```

_Bad_: It is _unsafe_ to call getEntity without knowing that the entity is preloaded.

```
jstag.entityReady(() => {
  doSomethingWithEntity(jstag.getEntity());
});
```

_Good_: It is _safe_ to call getEntity inside the callback of entityReady, and in other situation where the programmer knows the entity is already loaded.

#### unloadEntity(): void;

Forcefully, synchronously unload the user's entity

### Plugin API

#### buildEntityUrl(method: string, payload: any): string

##### parameters

-   **method** "POST" | "GET" - The http method to use to retrieve the entity.
-   **payload** any - The payload to inline in the URL when possible.

##### notes

Generally, you shouldn't need to use this method, but it is exposed for the convenience of people who know what they are doing.

#### getEntityConfig(): EntityConfig

Retrieve the entity config for reflection from another plugin. This is slightly higher-level than reflecting config.entity directly because the cookie value will be included.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| entity.requested | after the entity is requested | _none_ |
| entity.loaded | after the entity is loaded | the current entity |
| entity.unloaded | after the entity is unloaded | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
