---
title: "Binding Fields Inside Custom (Extension) Fields"
description: "Reference for how Studio's Data Picker infers a type for custom (extension) fields and JSON fields, and how to bind, repeat, and condition on the inferred result."
url: /studio/binding-fields-inside-custom-extension-fields
---

# Binding Fields Inside Custom (Extension) Fields

## Binding Fields Inside Custom (Extension) Fields

A **custom field** is a content-type field rendered by a Marketplace extension instead of a built-in Contentstack editor. Studio identifies it by `field_metadata.extension`, not by its `data_type`, because an extension author can register any `data_type` for the field. Contentstack declares no value shape for a custom field: the content type schema stops at "this field exists" and says nothing about what's inside it. The only place that shape exists is inside an actual saved entry's JSON value.

This page explains how the Data Picker fills that gap: it samples the value on the current preview entry and infers a type for each key it finds, instead of showing everything inside a custom field as one undifferentiated block.

## Three Kinds of Bindable Subject

The Data Picker (and the Condition Block builder that shares its tree) works with three different kinds of subject, only one of which is inferred:

| Subject | What it is | Where its type comes from |
| --- | --- | --- |
| **Bound field** | A real content-type schema field. | Studio reads it directly from the schema's `data_type`. |
| **Field property** | An attribute of a field's stored value, not a field in its own right, for example an asset's `title`, `filename`, or `size`, or a taxonomy's term UID. The set is closed: every property is enumerated ahead of time. | Studio declares it in `fieldPropertyRegistry`, since the set is closed and known in advance. |
| **Inferred field** | A key with no schema field behind it: the keys inside a custom field, a plain JSON field, or a component-props object. The key set is open, decided by whatever wrote the payload, so no registry can enumerate it ahead of time. | Studio derives it from the sampled value on the current preview entry. |

Everything below this point is about the third row.

## How Studio Infers a Type From a Value

For a tree node with no schema field behind it, Studio inspects the sampled value and assigns a type:

| Sampled value | Inferred type | Icon |
| --- | --- | --- |
| A string that is not an ISO-8601 date | Text | Text icon |
| A string matching ISO-8601 and passing a `Date.parse` sanity check | Date | Date icon |
| A number | Number | Number icon |
| A boolean | Boolean | Boolean icon |
| An array | List | List icon |
| A plain object | Group | Group icon |

Two rules worth calling out:

- **Date detection is strict ISO-8601, not "looks like a date."** A string first has to match an ISO-8601 pattern, then pass a `Date.parse` sanity check. Studio does not detect a string in another format, for example a US-style `08/11/2026`, as a date. It infers the key as text instead.
- **An array is a list, not a group.** Studio distinguishes arrays from plain objects when assigning both the type and the icon. This lets an array key inside a custom field drive a Repeater, the same way a Modular Block or Reference list does. See [Binding an Array to a Repeater](#binding-an-array-to-a-repeater) below.

Every custom field always shows the "Custom" icon at its own row, regardless of the `data_type` the extension author registered. The icon rules above apply to the inferred keys inside it, not to the custom field's own row.

## Field Properties Are Never Overridden by Inference

Inference only applies where no other rule already declares a type. Field properties keep their declared type even when a key happens to share a name with one.

For example, Studio still infers the type of a custom field's key named `file_size` from the sampled value at that key, the same as any other inferred key. It does not inherit the numeric type Studio declares for an asset's `file_size` field property. The two are unrelated: one is a declared property of a real asset field, the other is an open key inside a custom field's own payload. Studio guards this with an `inferred` flag so no two rules ever assign a type to the same key.

## Binding Into a Custom Field

1. Open the Data Picker and expand a custom field on the current preview entry.
2. Its keys now show up individually, each with the icon and type inferred from the sampled value, instead of a flat block of text and object rows.
3. Click a scalar key (text, number, boolean, or date) to bind it to a matching prop, the same way you'd bind any other field.

### Binding an Array to a Repeater

An array key inside a custom field binds to a Repeater's Items the same way a Group with `multiple: true` does:

1. Drop a Repeater on the canvas.
2. Bind its Items property to the array key inside the custom field.
3. Drop a component inside the Repeater and bind its props through the Repeater Data root, the same as [binding any other Repeater source](/docs/studio/create-repeatable-content-with-repeaters#what-iteration-looks-like-in-practice).

Each entry in the array produces one iteration, with that entry's own keys inferred the same way as any other inferred field.

## When There's No Preview Entry Yet

A Section with no preview entry selected, or an unpinned Template, has no entry to sample a value from. Expanding a custom field in that context shows a note instead of an empty list:

> "This is a custom field, so its contents are only known from an entry. Select a preview entry to bind the fields inside it."

This isn't a bug: there is no schema to read ahead of an entry, since Contentstack declares no shape for a custom field's contents. Selecting a preview entry gives Studio a value to sample, and the custom field's keys appear.

## Using Custom-Field Keys in Condition Blocks

An inferred key can be a Condition Block's **Field to test**, the same as a bound field. The operators offered follow the inferred type, using the same [operators-per-type table](/docs/studio/control-visibility-with-condition-blocks#operators-available-per-field-type) as any other field: a key inferred as number offers numeric comparisons, a key inferred as boolean offers "is true" / "is false", and so on. A saved condition on an inferred key reopens with its inferred type intact.

## Known Limitation

Studio does not yet enrich a custom field on a **referenced** entry when you reach it from inside a Repeater: it has no sampled entry data at that depth to infer from. Until a future update addresses this, custom fields at that depth keep the pre-inference behavior. This is a current limitation, not something to work around by restructuring the content model.

## Common Pitfalls

| Symptom | Cause | Fix |
| --- | --- | --- |
| A date-looking string doesn't get the Date icon or Date-only operators | The string isn't strict ISO-8601, or fails the `Date.parse` sanity check | Store the value as ISO-8601 at the source, or bind it as text and compare it as a string |
| A key that should be a list still shows as a group | The sampled value isn't an array on the current preview entry | Switch to a preview entry whose value at that key is an array |
| Expanding a custom field shows nothing, with no explanation | You haven't selected a preview entry on the Section, or the Template is unpinned | Select a preview entry so Studio has a value to sample |
| A key named the same as a field property (for example `file_size`) doesn't behave like that property | Field properties and inferred fields are unrelated, even when the name matches | Rename the key if you need it to be unambiguous to readers, or rely on its inferred type directly |

## See Also

- [Bind CMS content to Studio components](/docs/studio/bind-cms-content-to-studio-components): the general binding model this page extends.
- [Control visibility with Condition Blocks](/docs/studio/control-visibility-with-condition-blocks): the full operators-per-type table.
- [Create repeatable content with Repeaters](/docs/studio/create-repeatable-content-with-repeaters): binding a multi-valued field to a Repeater.
- [The Component Data tab](/docs/studio/the-component-data-tab): where the Data Picker is opened from.
