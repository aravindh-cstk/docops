---
title: "Global Fields"
description: "A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and efforts) to create the same set of fields repeatedly in multiple content types. Example: const globalField = stack.globalField('global_field_uid'); // For a single globalField with uid 'global_field_uid'"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/typescript/reference/global-fields"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Global Fields

## Global Fields

A [Global field](/docs/developers/global-field/about-global-field/) is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and efforts) to create the same set of fields repeatedly in multiple content types.

**Example:**

```
const globalField = stack.globalField('global_field_uid'); // For a single globalField with uid 'global_field_uid'
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| globalFieldUid | string | No | — | UID of the Global field |
