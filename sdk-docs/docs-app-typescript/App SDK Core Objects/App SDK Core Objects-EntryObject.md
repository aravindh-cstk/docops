---
title: "Entry Object"
description: "The `entry` object provides access to entry-specific data, operations, and event handling."
url: "https://www.contentstack.com/appsdk-core-objects-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Entry Object

The `entry` object provides access to entry-specific data, operations, and event handling. It is supported in entry-related UI locations such as `CustomField`, `SidebarWidget`, `RTELocation`, and `FieldModifier`.

#### Properties

##### content_type

The `content_type` property retrieves the content type of the current entry.

```
const contentType = entry.content_type;
console.log('Content type:', contentType.title);
```

##### locale

The `locale` property retrieves the locale of the current entry.

```
const locale = entry.locale;
console.log('Entry locale:', locale);
```

#### Methods

##### getData()

The `getData()` method retrieves the data of the current saved entry.

```
const entryData = entry.getData();
```

##### getDraftData()

The `getDraftData()` method retrieves the draft data of the current unsaved entry and returns an empty object if no changes exist.

```
const draftData = await entry.getDraftData();
console.log('Draft data:', draftData);
```

##### getField(uid, options?)

The `getField()` method retrieves the `field` object for the saved data. `useUnsavedSchema` affects schema resolution, not the field value.

```
const titleField = entry.getField('title');
const fieldWithUnsavedSchema = entry.getField('title', { useUnsavedSchema: true });
```

##### getPropertySafely(obj, key)

The `getPropertySafely()` method safely retrieves the value of a property from an object to prevent prototype pollution vulnerabilities.

```
const value = entry.getPropertySafely(dataObject, 'propertyName');
```

#### Events

##### onSave(callback)

The `onSave` event is invoked when the entry is saved.

```
entry.onSave((savedEntry) => {
  console.log('Entry saved:', savedEntry);
});
```

##### onChange(callback)

The `onChange` event executes a callback when the entry is updated.

```
entry.onChange((unresolvedEntry, resolvedEntry) => {
  console.log('Entry changed:', unresolvedEntry);
  console.log('Resolved entry:', resolvedEntry);
});
```

##### onPublish(callback)

The `onPublish` event executes a callback when the entry is published.

```
entry.onPublish((publishDetails) => {
  console.log('Entry published:', publishDetails);
});
```

##### onUnPublish(callback)

The `onUnPublish` event executes a callback when the entry is unpublished.

```
entry.onUnPublish((publishDetails) => {
  console.log('Entry unpublished:', publishDetails);
});
```
