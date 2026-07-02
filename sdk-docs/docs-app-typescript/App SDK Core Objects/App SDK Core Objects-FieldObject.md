---
title: "Field Object"
description: "The Field object provides access to individual field data, schema information, and field-level operations."
url: "https://www.contentstack.com/appsdk-core-objects-field"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Field Object

The `Field` object provides access to individual field data, schema information, and field-level operations. It is available only in field-level UI locations such as `CustomField` and `FieldModifier`.

#### Properties

##### uid

The `uid` property retrieves the unique identifier of the field.

```
const fieldUid = field.uid;
console.log('Field UID:', fieldUid);
```

##### data_type

The `data_type` property retrieves the data type of the field.

```
const dataType = field.data_type;
console.log('Field data type:', dataType);
```

##### schema

The `schema` property retrieves the schema definition of the field.

```
const fieldSchema = field.schema;
console.log('Field schema:', fieldSchema);
```

#### Methods

##### getData(options?)

The `getData()` method retrieves the data of the current field.

```
const fieldData = field.getData();
const resolvedData = field.getData({ resolved: true });
```

##### setData(data)

The `setData()` method sets the data for the current field.

**Additional Resources:** For details about the `data` shape, `data_type` validation, retrieving a `Field` instance, updating multiple fields, and troubleshooting, see [Update Fields with SetData Method](/docs/developers/sdks/contentstack-app-sdk/typescript/update-fields-with-setdata-method#supported-ui-locations-for-the-setdata-method)
```
await field.setData('new value');
```

##### setFocus()

The `setFocus()` method sets the focus on a field when an app is in use, displaying user presence and highlighting the custom field currently accessed in the Contentstack UI.

```
await field.setFocus();
```

##### onChange(callback)

The `onChange()` method registers a callback that runs when the field’s data is programmatically updated by another app or extension using `setData()`.

```
field.onChange((data) => {
  console.log('Field changed:', data);
});
```
