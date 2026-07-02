---
title: "registerBreakpoints"
description: "The registerBreakpoints method registers breakpoints for responsive design. Breakpoints can be selected from the Viewport icon in the Studio navigation bar. Example: import { registerBreakpoints } from '@contentstack/studio-react'; registerBreakpoints([ { id: \"default\", displayName: \"Desktop\", previewSize: { width: 1200, height: 800, }, }, { id: \"Iphone 15\", displayName: \"Iphone 15\", query: \"(max-width: 428px)\", previewSize: { width: 375, height: 812, }, }, ]); Breakpoint Options Each breakpoint includes configuration details that specify its identifier, display name, activation conditions, and preview dimensions within Studio’s responsive view. id The id property defines the unique identifier for the breakpoint. Type: string Requirements: The first breakpoint must have id: \"default\" (this is the base breakpoint). No duplicate IDs allowed. IDs are case-sensitive (e.g., \"Mobile\" and \"mobile\" are different). displayName The displayName property defines the human-readable name shown in the UI. Type: string | undefined Behavior: Optional; if omitted, the id is used as the display name. Recommended to use descriptive names such as \"iPhone 15\" or \"Tablet Portrait\" . query The query property defines the CSS media query that activates the breakpoint. Type: string | undefined Requirements: Default breakpoint: Must not include a query; it is automatically set to * . Non-default breakpoints: Must include a valid media query. Examples: (max-width: 768px) , (min-width: 1024px) , and (max-width: 1200px) . previewSize The previewSize property defines the preview canvas dimensions used when the breakpoint is selected. Type: object Requirements: width (number): preview width in pixels. height (number): preview height in pixels. Note: The preview size must fall within the range defined by the query . Example: Preview size for mobile and tablet // Mobile portrait previewSize: { width: 375, height: 812 } // Tablet landscape previewSize: { width: 1024, height: 768 } Basic responsive breakpoints The following code registers default responsive breakpoints for desktop, tablet, and mobile views with defined preview sizes. registerBreakpoints([ { id: \"default\", displayName: \"Desktop\", previewSize: { width: 1200, height: 800, }, }, { id: \"tablet\", displayName: \"Tablet\", query: \"(max-width: 1024px)\", previewSize: { width: 768, height: 1024, }, }, { id: \"mobile\", displayName: \"Mobile\", query: \"(max-width: 768px)\", previewSize: { width: 375, height: 812, }, }, ]); Device-specific breakpoints The following code registers custom responsive breakpoints for specific devices. registerBreakpoints([ { id: \"default\", displayName: \"Desktop Large\", previewSize: { width: 1440, height: 900, }, }, { id: \"iphone-15\", displayName: \"iPhone 15\", query: \"(max-width: 428px)\", previewSize: { width: 375, height: 812, }, }, { id: \"ipad-pro\", displayName: \"iPad Pro\", query: \"(max-width: 1024px) and (min-width: 769px)\", previewSize: { width: 1024, height: 768, }, }, ]); Minimal configuration (auto-filled displayName) The following code registers responsive breakpoints with minimal configuration, automatically generating display names for each device. registerBreakpoints([ { id: \"default\", previewSize: { width: 1200, height: 800, }, }, { id: \"mobile\", query: \"(max-width: 768px)\", previewSize: { width: 375, height: 812, }, }, ]); Default Breakpoints By default, the following breakpoints are included: Desktop (id: \"default\") Tablet (id: \"tablet\") Mobile (id: \"mobile\") Example const DEFAULT_BREAKPOINTS = [ { id: \"default\", displayName: \"Desktop\", previewSize: { width: 1200, height: 800, }, }, { id: \"tablet\", displayName: \"Tablet\", query: \"(max-width: 1023px)\", previewSize: { width: 800, height: 600, }, }, { id: \"mobile\", displayName: \"Mobile\", query: \"(max-width: 767px)\", previewSize: { width: 400, height: 500, }, }, ];"
url: "https://www.contentstack.com/react-studio-sdk-breakpoint-registry-registerbreakpoints"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## registerBreakpoints

The `registerBreakpoints` method registers breakpoints for responsive design. Breakpoints can be selected from the **Viewport** icon in the Studio navigation bar.

**Example:**

```
import { registerBreakpoints } from '@contentstack/studio-react';

registerBreakpoints([
  {
    id: "default",
    displayName: "Desktop",
    previewSize: {
      width: 1200,
      height: 800,
    },
  },
  {
    id: "Iphone 15",
    displayName: "Iphone 15",
    query: "(max-width: 428px)",
    previewSize: {
      width: 375,
      height: 812,
    },
  },
]);
```

#### Breakpoint Options

Each breakpoint includes configuration details that specify its identifier, display name, activation conditions, and preview dimensions within Studio’s responsive view.

##### id

The `id` property defines the unique identifier for the breakpoint.

**Type:** string

**Requirements:**

- The first breakpoint must have `id: "default"` (this is the base breakpoint).
- No duplicate IDs allowed.
- IDs are case-sensitive (e.g., `"Mobile"` and `"mobile"` are different).

##### displayName

The `displayName` property defines the human-readable name shown in the UI.

**Type:** string | undefined

**Behavior:**

- Optional; if omitted, the `id` is used as the display name.
- Recommended to use descriptive names such as `"iPhone 15"` or `"Tablet Portrait"`.

##### query

The `query` property defines the CSS media query that activates the breakpoint.

**Type:** string | undefined

**Requirements:**

- Default breakpoint: Must not include a query; it is automatically set to `*`.
- Non-default breakpoints: Must include a valid media query.
- Examples: `(max-width: 768px)`, `(min-width: 1024px)`, and `(max-width: 1200px)`.

##### previewSize

The `previewSize` property defines the preview canvas dimensions used when the breakpoint is selected.

**Type:** object

**Requirements:**

- `width (number):` preview width in pixels.
- `height (number):` preview height in pixels.

**Note:** The preview size must fall within the range defined by the `query`.

**Example: Preview size for mobile and tablet**

```
// Mobile portrait
previewSize: {
  width: 375,
  height: 812
}

// Tablet landscape
previewSize: {
  width: 1024,
  height: 768
}
```

##### Basic responsive breakpoints

The following code registers default responsive breakpoints for desktop, tablet, and mobile views with defined preview sizes.

```
registerBreakpoints([
  {
    id: "default",
    displayName: "Desktop",
    previewSize: {
      width: 1200,
      height: 800,
    },
  },
  {
    id: "tablet",
    displayName: "Tablet",
    query: "(max-width: 1024px)",
    previewSize: {
      width: 768,
      height: 1024,
    },
  },
  {
    id: "mobile",
    displayName: "Mobile",
    query: "(max-width: 768px)",
    previewSize: {
      width: 375,
      height: 812,
    },
  },
]);
```

##### Device-specific breakpoints

The following code registers custom responsive breakpoints for specific devices.

```
registerBreakpoints([
  {
    id: "default",
    displayName: "Desktop Large",
    previewSize: {
      width: 1440,
      height: 900,
    },
  },
  {
    id: "iphone-15",
    displayName: "iPhone 15",
    query: "(max-width: 428px)",
    previewSize: {
      width: 375,
      height: 812,
    },
  },
  {
    id: "ipad-pro",
    displayName: "iPad Pro",
    query: "(max-width: 1024px) and (min-width: 769px)",
    previewSize: {
      width: 1024,
      height: 768,
    },
  },
]);
```

##### Minimal configuration (auto-filled displayName)

The following code registers responsive breakpoints with minimal configuration, automatically generating display names for each device.

```
registerBreakpoints([
  {
    id: "default",
    previewSize: {
      width: 1200,
      height: 800,
    },
  },
  {
    id: "mobile",
    query: "(max-width: 768px)",
    previewSize: {
      width: 375,
      height: 812,
    },
  },
]);
```

#### Default Breakpoints

By default, the following breakpoints are included:

- **Desktop** (id: "default")
- **Tablet** (id: "tablet")
- **Mobile** (id: "mobile")

**Example**

```
const DEFAULT_BREAKPOINTS = [
  {
    id: "default",
    displayName: "Desktop",
    previewSize: {
      width: 1200,
      height: 800,
    },
  },
  {
    id: "tablet",
    displayName: "Tablet",
    query: "(max-width: 1023px)",
    previewSize: {
      width: 800,
      height: 600,
    },
  },
  {
    id: "mobile",
    displayName: "Mobile",
    query: "(max-width: 767px)",
    previewSize: {
      width: 400,
      height: 500,
    },
  },
];
```
