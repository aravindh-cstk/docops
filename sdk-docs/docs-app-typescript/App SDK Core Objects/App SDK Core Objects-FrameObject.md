---
title: "Frame Object"
description: "The `frame` object provides window management and resizing capabilities for UI locations."
url: "https://www.contentstack.com/appsdk-core-objects-frame"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Frame Object

The `frame` object provides window management and resizing capabilities for UI locations. It is supported in UI locations such as `DashboardWidget`, `GlobalFullPageLocation`, and `FieldModifierLocation`.

The following section explains the different methods available in the `frame` object.

#### enableResizing()

The `enableResizing()` method activates the resize button, allowing users to adjust the window size of a Dashboard Widget.

```
const frame = dashboard.frame;
await frame.enableResizing();
```

**Returns:** `Promise<void>`

#### updateHeight(height?)

The `updateHeight()` method updates the widget height in the Contentstack UI. If no height is provided, it automatically adjusts based on the scroll height.

```
const frame = customField.frame;
await frame.updateHeight(600);
```

**Parameters:**

- `height` (optional): The desired height of the iframe window in pixels

**Returns:** `Promise<void>`

#### enableAutoResizing()

The `enableAutoResizing()` method enables automatic resizing of the widget height.

```
const frame = fieldModifier.frame;
frame.enableAutoResizing();
```

**Returns:** `Window` — The context of the Window class

#### disableAutoResizing()

The `disableAutoResizing()` method disables automatic resizing of the widget height.

```
const frame = fieldModifier.frame;
frame.disableAutoResizing();
```

**Returns:** `Window` — The context of the Window class

#### onDashboardResize(callback)

The `onDashboardResize()` method executes a callback whenever a Dashboard Widget is maximized or minimized.

```
const frame = dashboard.frame;
frame.onDashboardResize((state) => {
  console.log('Dashboard resized:', state);
});
```

**Parameters:**

- `callback`: The function to be called when a Dashboard Widget is maximized or minimized

**Returns:** `boolean` — `true` if the operation completes successfully; otherwise `false`

#### enablePaddingTop()

The `enablePaddingTop` method adds padding to the top of the Dashboard Widget.

```
const frame = dashboard.frame;
await frame.enablePaddingTop();
```

**Returns:** `Promise<void>`

#### disablePaddingTop()

The `disablePaddingTop` method removes the padding previously added to the top of the Dashboard Widget.

```
const frame = dashboard.frame;
await frame.disablePaddingTop();
```

**Returns:** `Promise<void>`

#### updateDimension(dimension?)

The `updateDimension` method updates the height and width of the UI location in the Contentstack UI. If no values are provided, it updates based on the current dimensions.

```
const frame = fieldModifier.frame;
await frame.updateDimension({ height: 400, width: 300 });
```

**Parameters:**

- `dimension` (optional): Object with `height` and `width` properties

**Returns:** `Promise<void>`

#### closeModal()

The `closeModal` method closes the app modal window.

```
const frame = fieldModifier.frame;
await frame.closeModal();
```

**Returns:** `Promise<void>`
