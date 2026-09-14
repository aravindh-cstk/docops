---
title: "Slot Props Reference"
description: "Source-grounded reference for the <Slot> component. It maps to a real export in composable-studio-sdk."
url: /studio/slot-props-reference
---

# Slot Props Reference

## Slot reference: data-carrying slots

Source-grounded reference for the <Slot> component. It maps to a real export in [composable-studio-sdk](https://www.npmjs.com/package/@contentstack/studio-react). For the conceptual guide, see [Slot data](/docs/studio/slot-data).

<Slot> wraps a slot prop's value so the components an author drops into it can bind the wrapped data through the component\_props source, with the nearest slot winning.

## The props

```
interface SlotProps {
  data?: Record<string, unknown>;   // values exposed to the slot's children as component_props
  children: React.ReactNode;        // the slot value (the ReactNode for the slot prop)
}
```

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| data | Record<string, unknown> | No | - | Values exposed to the slot's children as the component\_props data source. Shallow-merged over inherited component\_props. The nearest slot wins. Each top-level key becomes a bindable field for components dropped into the slot. |
| children | React.ReactNode | Yes | - | The slot value, the ReactNode the renderer passes for the slot prop (e.g. ctaSlot). |

## Behavior

-   **Render-time only.** <Slot> lives in your component code. Nothing is stored in the composition spec.
-   **Opt-in.** Rendering the bare slot value ({ctaSlot}) still works. It just carries no data.
-   **Shallow, nearest-wins merge.** data merges over component\_props inherited from further up. Nested slots stack. The deepest slot overrides shallower ones, the same model as [Repeater context](/docs/studio/create-repeatable-content-with-repeaters).
-   **Editor integration.** Inside the Studio canvas, <Slot> reports its data to the editor scoped to that slot, so the Data Picker's **Component Default Data** source lists the slot's keys (grouped under a **Component Props** node) for a component selected inside it. Outside Studio (on your live site) it reports nothing, render only.

## Example

```
import { Slot, type SlotProps } from "@contentstack/studio-react";

// `ctaSlot` is the slot value; the CTA dropped in it can bind component_props.destination.
<Slot data={{ destination: ctaDestination }}>{ctaSlot}</Slot>;
```

SlotProps\["children"\] is a convenient type for a component's slot\-typed props:

```
interface HeroBannerProps {
  ctaSlot?: SlotProps["children"];
}
```

## Common confusions

-   **<Slot> (this component) is not a slot prop type.** The slot prop **type** (in a component schema) declares the placeholder. <Slot> is the render-time wrapper that carries data to whatever fills it. See [Component schema](/docs/studio/component-schema-prop-types) for the prop type.
-   **Keys surface under Component Default Data, not a CMS source.** Children bind via the **Component Default Data** source in the Data Picker (a **Component Props** node under it).
-   **A slot key with no selected child looks absent.** The Component Default Data source is scoped. Select a component inside the slot to see the slot's keys.

## See also

-   [Slot data](/docs/studio/slot-data): the conceptual guide with a worked example
-   [Section Slots](/docs/studio/section-slots): declaring and filling slot props
-   [<StudioComposition /> reference](/docs/studio/studio-composition-props-reference): the other bring-your-own-data surface
-   [Component schema: prop types](/docs/studio/component-schema-prop-types): the slot prop type
