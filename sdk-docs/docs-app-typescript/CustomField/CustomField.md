---
title: "CustomField"
description: "The `CustomField` object extends field functionality with custom validation and input components. const customField = sdk.location.CustomField; if (customField) { const field = customField.field; const entry = customField.entry; const stack = customField.stack; const frame = customField.frame; } It supports the following core objects: Stack Frame Field Entry"
url: "https://www.contentstack.com/developers/sdks/contentstack-app-sdk/typescript/reference/customfield"
product: "Contentstack"
doc_type: "guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# CustomField

## CustomField

The `CustomField` object extends field functionality with custom validation and input components.

```
const customField = sdk.location.CustomField;
if (customField) {
  const field = customField.field;
  const entry = customField.entry;
  const stack = customField.stack;
  const frame = customField.frame;
}
```

It supports the following core objects:

- [Stack](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#stack-object)
- [Frame](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#frame-object)
- [Field](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#field-object)
- [Entry](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#entry-object)

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
|  |  | No | — | The `fieldConfig` property provides access to the configuration and metadata of a custom field. It enables you to retrieve details such as field settings, data type, and other configuration parameters defined in the content type. const fieldConfig = customField.fieldConfig; console.log('Field config:', fieldConfig); console.log('Field type:', fieldConfig.type); |
