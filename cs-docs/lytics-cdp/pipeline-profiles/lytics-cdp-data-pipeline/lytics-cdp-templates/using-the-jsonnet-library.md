---
title: "Using the Jsonnet Library"
description: "For convenience, Jsonnet templates can import Lytics' custom lytemplates.libsonnet library, which contains utilities for common operations on profiles in…"
url: /lytics/using-the-jsonnet-library
---

# Using the Jsonnet Library

## Using the Jsonnet Library

## The \`lytemplates.libsonnet\` Library

For convenience, Jsonnet templates can import Lytics' custom lytemplates.libsonnet library, which contains utilities for common operations on profiles in exports. To import the library, simply include the following line at the top of your template:

```
local event = (import 'lytemplates.libsonnet');
```

The following methods on event can be used to access data on the profile and job configuration:

-   [has(field)](#hasfield)
-   [get(field, default=null)](#getfield-defnull)
-   [jobConfGet(key, default=null)](#jobconfgetkey-defnull)
-   [inSeg(id)](#insegid)
-   [isEnter()](#isenter)
-   [isExit()](#isexit)
-   [segSlug()](#segslug)
-   [sha256(obj)](#sha256obj)
-   [isValidSha256(obj)](#isvalidsha256obj)
-   [sha1(obj)](#sha1obj)
-   [isValidSha1(obj)](#isvalidsha1obj)
-   [profileFieldFromConfig(configField, default=null)](#profilefieldfromconfigconfigfield-defaultnull)
-   [validatedEnum(field, enumOptions, default)](#validatedenumfield-enumoptions-default)

### has(field)

Reports whether the entity on the event contains a field named field.

### get(field, def=null)

Retrieves the field on the profile named field. If field does not exist on the profile, the optional default will be returned, or null if default is not supplied.

### jobConfGet(key, def=null)

Retrieves the job configuration field named key. If key does not exist in the job configuration, the optional default will be returned, or null if default is not supplied.

### inSeg(id)

Reports whether the user is a member of the segment with ID id.

### isEnter()

Reports whether the trigger event is an enter event.

### isExit()

Reports whether the trigger event is an exit event.

### segSlug()

Returns the segment slug for the trigger event.

### sha256(obj)

Returns the sha256 hash of obj

### isValidSha256(obj)

Returns whether obj matches the formatting of a sha256 hash

### sha1(obj)

Returns the sha1 hash of obj

### isValidSha1(obj)

Returns whether obj matches the formatting of a sha1 hash

### profileFieldFromConfig(configField, default=null)

If a field call configField exists on the job configuration, retrieves the field corresponding to the field's value from the user profile. For example, if the job configuration contains { "foo": "bar" }, profileFieldFromCOnfig('foo') is equivalent to get('bar'). If 'foo' does not exist on the job configuration, the optional default will be returned, or null is default is not supplied.

### validatedEnum(field, enumOptions, default)

Returns the value for field on the job config, verifying that the resulting value is contained in the enumOptions array. If the value is not contained in enumOptions, default is returned. For example, if the job configuration contains {"num": "Three" }, validatedEnum('num',\['One', 'Two', 'Three'\], 'Zero') will return 'Three'. If the job configuration contains { "num": "bar" }, validatedEnum('num',\['One', 'Two', 'Three'\], 'Zero') will return 'Zero'.
