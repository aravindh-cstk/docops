---
title: "Testing Your Components"
description: "How to test registered Studio components by verifying palette drop, right-panel form controls, and CMS bindings using a structured workflow."
url: /studio/testing-your-components
---

# Testing Your Components

## Testing Your Components

Three things you'll want to test for every registered component:

1.  **It renders inside Studio's canvas:** palette tile appears, drop works, no console errors
2.  **The right-panel form matches the schema:** every prop has the right control type, defaults work
3.  **Bindings resolve correctly:** when you bind a prop to entry data, the component renders with the real value

This page covers a workflow for each.

## 1\. Palette + Drop Test

The fastest sanity check:

1.  Open Studio, then open any composition (Section or Template)
2.  Expand the **Registered Components** palette category
3.  Confirm your component's tile appears with the right displayName and thumbnailUrl
4.  Drop it onto the canvas
5.  Confirm:
6.  It renders (not blank, defaults should be visible)
7.  The right panel shows your prop fields with the right controls
8.  The browser console is clean (no warnings, no errors)

If any of these fails, the issue is usually in the registry call. Common causes:

-   **Tile missing:** registration didn't run before the canvas iframe loaded. See [Troubleshoot: Registered components don't appear](/docs/studio/troubleshoot-common-studio-issues#registered-components-dont-appear-in-studios-palette).
-   **Tile appears but drop fails:** the component field references a component that throws on first render. Check the console.
-   **Tile drops but renders blank:** defaults are missing or the component reads props.x for a prop you registered as props.y. Check prop name spelling.

## 2\. Right-Panel Form Test

Drop the component, select it on the canvas, and walk every prop in the right panel:

| Prop type | What to confirm |
| --- | --- |
| string (default control) | Single-line input appears, accepts typing, placeholder shows when empty |
| string (control: large) | Textarea appears |
| string (control: markdown) | Markdown editor appears |
| number (default control) | Number input with up/down arrows |
| number (control: slider) | Slider with the right min/max/step |
| boolean | Toggle switch |
| choice (radio) | Radio buttons, one option per value |
| choice (dropdown / multiSelect) | Dropdown with the right options |
| href | Link picker opens with internal/external tabs |
| imageurl | Asset picker opens with stack assets and an external URL option |
| datestring | Date picker (or datetime if control: "datetime") |
| array | Add / remove buttons, items render the right sub-control |
| object | Nested form group with each property's control |
| slot | Drop zone on the canvas (not a form control) |
| json\_rte | Rich-text editor opens |

If a control is wrong, the cause is usually a typo in type. Review the [prop types reference](/docs/studio/component-schema-prop-types).

## 3\. Binding Test

Drop your component, select a prop in the right panel, click the binding chip (the link / data icon next to the form field). The Data Picker opens.

For a Connected template:

-   The picker shows the connected content type's fields
-   Pick a field with a compatible type (e.g. for a string prop, pick a Text or Single-line text field)
-   Confirm the canvas re-renders showing the entry's actual value, not the default

For a Section:

-   The picker shows the section's linked schema fields
-   Same flow

If binding doesn't update the canvas, check:

-   The connected entry has a non-empty value for that field (switch Preview Entry via the ⇄ icon if not)
-   Your component reads the prop from props.x, not from some other path
-   The prop's type is compatible with the bound field's data type

## Quick Test Composition Pattern

Easiest way to test a new component: create a dedicated **test section** that exercises every prop.

1.  Open Studio, go to Compositions, select the Sections tab, and click **\+ New Section**.
2.  Name it \_test\_component\_<name>.
3.  Drop your component onto the canvas.
4.  Bind one prop at a time to entries you have prepared with known values.
5.  Save the section, then confirm the live render matches your expected output.

Keep the test section. When you change the component or its schema, re-open it and re-verify each prop.

## Storybook / Isolated Render Testing

For thorough component-level testing (visual regression, prop combinations, accessibility), use Storybook the way you would for any other React component. Studio doesn't replace that. registerComponent just wires your React component into the canvas; the React component itself is unchanged and testable the same way.

A common pattern:

![A Button component folder with the React source, Storybook stories, Jest tests, and the Studio registerComponent call as separate files](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6943e2c821bd28b0/1d2312720ae450bc8c5ae53e/byo-test-component-folder.png)

The folder structure above shows three independent testing surfaces: Storybook tests visual variants, Jest tests behavior, and Studio tests the in-canvas authoring experience. Each surface operates independently; a component can pass all Storybook stories and still fail in Studio if its registration schema is wrong.

## Common Pitfalls

| What you see | Cause | Fix |
| --- | --- | --- |
| Component renders fine in Storybook but blank in Studio | Defaults missing on required props | Add defaultValue to each prop |
| Component renders in Studio but a console warning about unknown prop studioAttributes | Component doesn't spread props | Either spread {...props} on the root element, or set wrap: true on the registry entry |
| Right-panel control type doesn't match what you expected | Wrong type value | Cross-reference [prop types](/docs/studio/component-schema-prop-types) |
| Binding succeeds but render doesn't update | Component memoized too aggressively: shallow React.memo comparisons may miss nested object updates, so a new binding value at props.cta.href doesn't trigger a re-render if the cta object reference is the same | Check that the component re-renders on prop change; either use a deep compare function with React.memo, or remove memoization from props that Studio drives |

## Next

-   [Publishing the library](/docs/studio/publishing-the-component-library): share registrations across projects
-   [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration): when you're confident in a component, consider lazy registration
