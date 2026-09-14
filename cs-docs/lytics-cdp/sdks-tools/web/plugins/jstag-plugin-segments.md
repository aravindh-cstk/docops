---
title: "segments Plugin"
description: "Load and access the user's Lytics segment membership"
url: /lytics/jstag-plugin-segments
uid: blt9c03b7d6c54b8fc8
---

# segments Plugin

## segments Plugin

Load and access the user's Lytics segment membership

## \`segments\` plugin

Load the user's segments

| Segments |
| --- |
| namespace segments |
| entities |
| on by default |

### Config

```
segments: {
  disabled: false,
  storageKey: 'lytics_segments',
  storage: localStorage,
  defaultSegments: ['all']
}
```

#### segments.disabled

-   Type boolean
-   Optional
-   Defaults to false

Set disabled to true to disable this plugin.

#### segments.storageKey

-   Type boolean
-   Optional
-   Defaults to lytics\_segments

The key to store the segment list under in the storage.

#### segments.storage

-   Type [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
-   Optional
-   Defaults to localStorage

The Storage to use to cache the segment list

#### segments.defaultSegments

-   Type string\[\]
-   Optional
-   Defaults to \["all"\]

The list of segments to return when the entity is not loaded, and no cached segments are found.

### Interfaces

#### SegmentsCallback

### API

#### loadSegments(callback: SegmentsCallback): void;

##### parameters

[Forcefully load the entity](/docs/lytics/jstag-plugin-entity#loadentity) and invoke the callback with the result of calling \\\[getSegments\].

#### getSegments(): string[];

Return the entity's segments, the cached segment list, or config.defaultSegments

##### examples

```
jstag.entityReady(() => {
  MyApp.setUserSegments(jstag.getSegments());
});
```

_Exhibit_: By using a pattern where the entity is known to be loaded, we are assured that calling getSegments will result in the most accurate list of segments for that user

```
console.log(jstag.getSegments());
```

_Exhibit_: If we're not defensive, we may call getSegments before the entity is loaded, which would result in the config.defaultSegments being returned instead of the more accurate list of segments from the user entity.
