---
title: "The Component Data Tab"
description: "Learn how the Component Data tab works in Contentstack Studio, including how to bind props, pin entries, and configure per-component data sources."
url: /studio/the-component-data-tab
---

# The Component Data Tab

## The Component Data Tab

When you select a component on the Studio canvas, the right panel switches into a per-element editor. The **Data** tab (also called **Settings**) is where you decide what content each component renders.

The right panel also includes a **Design** tab for styles. At the page level, a separate **Page Data** view holds the data sources the whole composition can draw from: pinned entries, saved queries, and external data.

This page explains, from a marketer's point of view, what each subsection does and walks through pinning an entry so its fields become bindable inside any component.

## When the Data Tab Appears

The Data tab is only meaningful when an element is selected.

-   If nothing is selected, the panel shows the empty state "No element is currently selected. Please select an element to view its properties and make edits."
-   If the selected component has no exposed props, the panel shows "This component does not have fields to set data." In that case, the developer must expose props on the component first.
-   For Section components, an additional **Section field binding** area appears so you can map the section's slots and props at once.

## What Each Subsection Does

When a component is selected, the Data tab renders three accordions, top to bottom:

### 1\. Configuration

Component-level switches that change how the element renders (for example, "Show/Hide Hidden Elements"). This is the section to use when you want to toggle behavior without touching individual fields.

### 2\. Properties

The heart of the Data tab. One row per exposed prop on the component. Each row is an input field that opens the **Data Picker** popover when clicked. The picker lets you bind the prop to one of five data sources, defined in dataSources: DataSource\[\]:

1.  **Linked Template Entry:** the entry attached to the current template. Use this for the main page content.
2.  **Additional Entry Data:** any _extra_ entries you pinned to the composition from the Page Data view (see below). Tooltip: "These entries are directly pinned to this section. Their data is always rendered regardless of which template uses the section."
3.  **Contentstack Query:** a saved query (built via the Query Builder) that returns a list of entries.
4.  **Component Default Data:** the built-in default values the developer shipped with the component. Useful as fallbacks.
5.  **Repeater Data:** only available inside a Repeater; exposes the current iteration's fields.

A sixth source, **Static value**, is registered for binding lookups but does not appear as a picker option. Static values exist so that a prop can hold a literal (e.g. a fixed button label or a constant style variant) alongside bound props on the same component. Because they are always a direct input rather than a field reference, they are set by typing into the prop's input directly, not by navigating the picker's data source tree.

### 3\. Attributes

HTML-level metadata: the element ID and any custom key/value attributes. Reserved keys (class, style, and Studio-internal attributes) are blocked.

(For Section components, the Attributes accordion is hidden because attributes belong to the children inside the section.)

## Pinned Entries, Pinned Queries, External Data: Where They Live

These three concepts are page-level, not per-component. They appear on the **Page Data** view (sibling of the right-panel component editor), driven by src/components/PageData/index.tsx. Each one is a card in the empty state and an Accordion once populated:

| Card | What it represents | How to add |
| --- | --- | --- |
| **Pinned Entries** | Entries pinned to the composition. Backed by the contentstack data source. | Click the card, or use **Link Entry** in the Additional Entry Data accordion. |
| **Pinned Queries** | Saved Contentstack queries. Backed by the query data source. | Opens the Query Builder modal. Requires the PAGE\_DATA\_QUERIES SDK capability. |
| **External Data** | A schema slot for non-Contentstack data the host app injects at runtime. Backed by the external data source. | Click the card to initialize an empty external data object. |

Once any of these are populated, the matching entries, queries, or props become selectable in the per-component Data Picker under **Additional Entry Data**, **Contentstack Query**, or **Component Default Data** respectively.

## Walkthrough: Pinning an Entry and Binding It

1.  Open the composition and switch the right panel to **Page Data**.
2.  Click the **Pinned Entries** card (or, if entries are already pinned, the **Link Entry** button in the _Additional Entry Data_ accordion, test ID link-entry-button).
3.  In the entry picker, select one or more entries and confirm. Studio writes them onto the composition via actions.canvas.updateDataSourceEntries.
4.  Select a component on the canvas. Open its **Data** tab.
5.  Under **Properties**, click the prop you want to bind. The Data Picker popover opens.
6.  Choose the **Additional Entry Data** source. Expand the entry you just pinned and pick a field. Studio writes the binding and the canvas re-renders with the field's value.

The entry now travels with the composition: any template that uses this section renders the same pinned content.

## See Also

-   [CMS binding](/docs/studio/bind-cms-content-to-studio-components): how bindings are serialized into the composition JSON.
-   [Layers](/docs/studio/navigate-and-use-the-layers-tab): selecting the right node so the Data tab targets what you intend.
-   [Design panel](/docs/studio/style-components-with-the-design-panel): the styles-side counterpart to the Data tab.
-   [Composition overview](/docs/studio/composition-concepts): where the Data tab sits in the larger authoring flow.
