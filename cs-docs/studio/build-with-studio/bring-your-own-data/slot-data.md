---
title: "Slot Data"
description: "A slot prop is a placeholder an author fills by dropping components into it (see Section Slots)."
url: /studio/slot-data
uid: blt2ceeceb29c4ce089
---

# Slot Data

## Slot data

A slot prop is a placeholder an author fills by dropping components into it (see [Section Slots](/docs/studio/section-slots)). By default a slot renders whatever was dropped: the dropped components get no data from the component that owns the slot.

<Slot> fixes that. Wrap a slot's value in <Slot data={...}> and the components an author drops inside can **bind** that data through the component\_props source, with the nearest slot winning over data provided higher up.

## When to use it

Reach for <Slot data={...}> whenever **both** of these are true:

1.  A component exposes a slot, a spot you want authors to fill with whatever component fits, not one you hard-wire.
2.  The owning component holds data that the dropped component needs.

That combination shows up in two ways, and the reasoning is the same for both:

-   **Designing fresh.** You're building a component and you already know one spot should be an open, reusable slot: you can't predict what authors will drop there, but you know it'll need data the component holds.
-   **Opening up an existing spot.** A component had a fixed child that received props directly. You make it a slot so authors can swap what goes there. The data that child received still has to reach whatever replaces it.

Either way, the moment a spot is a slot, props can't reach it. The component doesn't know what the author will drop. <Slot data={...}> bridges that: it carries the owner's data to whatever fills the slot, where the dropped component can bind it.

**Example: a Hero banner with a CTA.** The banner is meant to be reusable: authors drop any CTA into it, a button, a link, or a promo card. But the banner owns ctaDestination (where the CTA should link), and the dropped component needs it. Since the CTA is a slot, the banner can't pass it as a prop, so it carries it through the slot:

```
// The banner owns `ctaDestination`; the slot carries it to whatever CTA is dropped.
<Slot data={{ destination: ctaDestination }}>{ctaSlot}</Slot>
```

The rule in one line: **when a slot needs data the owner holds, wrap the slot in <Slot data={...}>.**

![A HeroBanner owns ctaDestination and exposes a ctaSlot an author fills, so props cannot reach it. Wrapping the slot value in Slot data exposes destination, which the dropped component binds under Component Default Data, then Component Props. Rendering the bare slot value still works but carries no data. Nested slots stack with the nearest one winning.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am117968a6009f6d11/7a04092a67e5b17a36490b1d/byo-data-slot-props-flow.png)

## The props

```
interface SlotProps {
  data?: Record<string, unknown>;   // values exposed to the slot's children as component_props
  children: React.ReactNode;        // the slot value (the ReactNode for the slot prop)
}
```

<Slot> is **render-time only**: it lives in your component code, nothing is stored in the composition. It's opt-in: rendering the bare slot value ({ctaSlot}) still works, it carries no data.

For the full type-level reference, see [<Slot> reference](/docs/studio/slot-props-reference).

## How it works

<Slot data={...}> merges data into the component\_props data source for everything rendered inside it, a shallow merge over any component\_props inherited from further up. Each top-level key of data becomes a bindable field.

In the canvas, an author selects a component dropped into the slot, opens the binding chip on a prop, and the Data Picker's **Component Default Data** source lists the slot's keys (grouped under a **Component Props** node). They bind the prop to the slot's destination, and at render time the dropped component receives the banner's ctaDestination.

![Studio canvas for a section: a Hero renders with a Button labelled "Read the guide" inside its slot, the Button is selected in the Layers tree, and the Data Picker is open on the Button's Link prop showing the Component Props node under Component Default Data with a single field, Destination.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame61757c1d5ef7512/fd2b098ddaff614a4ccb1630/slot-data-picker-component-props.png)

The picker lists Destination because the Hero wrapped its slot in <Slot data={{ destination: ctaDestination }}>. Without the wrapper the same source reads "No data available for selected data source".

> **The dropped component must sit directly in the component's slot prop.** Slot keys reach the picker when the author drops onto the slot\-typed prop itself. Put a [Section Slot](/docs/studio/section-slots) between the component's slot prop and the dropped component (the section-level pattern) and the Component source comes back empty: the render-time merge still happens, but the editor never receives the keys, so there is nothing to bind to.

## Nearest slot wins

data merges over component\_props inherited from outside the slot, the same nearest-wins model as [Repeater context](/docs/studio/create-repeatable-content-with-repeaters). If a key exists both in the global data (the data prop on <StudioComponent />) and in a slot's data, the slot's value wins for children inside that slot. Nested slots stack: the deepest (nearest) slot overrides the ones above it.

## Worked example: Hero banner

A banner with a headline and a CTA slot. The banner owns the CTA's destination. The slot carries it to whatever the author drops in.

```
import { Slot, type SlotProps, type StudioAttributes } from "@contentstack/studio-react";

interface HeroBannerProps extends StudioAttributes {
  headline?: string;
  ctaDestination?: string;   // where the CTA should link — the banner owns this
  ctaSlot?: SlotProps["children"];
}

export function HeroBanner(props: HeroBannerProps) {
  const { headline, ctaDestination, ctaSlot } = props;
  return (
    <section className="hero">
      <h1>{headline}</h1>

      {/* `ctaSlot` is an open slot — authors drop any CTA. The banner owns
          `ctaDestination`, so it carries it through the slot to whatever they drop. */}
      <Slot data={{ destination: ctaDestination }}>{ctaSlot}</Slot>
    </section>
  );
}
```

Register the component with ctaSlot as a slot prop (see [Component schema](/docs/studio/component-schema-prop-types)). An author drops any CTA component into ctaSlot, binds its link to the slot's destination (under **Component Default Data**), and it renders the banner's ctaDestination, even though the banner never passes props to that component directly.

## Common pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Rendering the bare slot value | Dropped components can't bind the owner's data | Wrap the slot value in <Slot data={...}> |
| A Section Slot sits between the component's slot prop and the dropped component | The picker's Component source is empty: keys are never reported to the editor | Drop onto the component's slot prop directly. Slot data does not carry through a Section Slot |
| Expecting a key to appear without selecting a child | Component Default Data source looks empty | Select a component **inside** the slot first. The keys are scoped to the slot |
| Same key in global data and slot data | Confusion over which value renders | Nearest wins: the slot's value applies to children inside it |
| Passing non-serializable values in data | Binding resolves oddly | Keep data plain: strings, numbers, arrays, objects |
| Binding via the wrong source | Field not found | Bind through the **Component Default Data** source, not a CMS or external-data source |

## See also

-   [<Slot> reference](/docs/studio/slot-props-reference): the full prop surface
-   [Troubleshooting](/docs/studio/troubleshoot-bring-your-own-data): keys missing from the picker, bindings that resolve to nothing, nearest-wins surprises
-   [Section Slots](/docs/studio/section-slots): declaring and filling slot props
-   [StudioComposition](/docs/studio/studio-composition-component): the other bring-your-own-data surface
-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters): the same nearest-wins context model
-   [Component schema (prop types)](/docs/studio/component-schema-prop-types): declaring a slot prop
