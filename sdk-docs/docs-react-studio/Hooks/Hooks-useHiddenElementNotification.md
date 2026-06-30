---
title: "useHiddenElementNotification"
description: "The `useHiddenElementNotification` React hook enables components to show or hide modals, tooltips, dialogs, or other hidden elements that require external control. It notifies Studio when the component should be opened for editing. When to Use Modals/Dialogs: When you need to show or hide modal content. Tooltips: For displaying contextual information. Dropdowns: For expandable content sections. Hidden Sections: For collapsible content areas. Any Interactive Element: That needs to be controlled from outside the canvas. Note: When using this hook, register the component in `registerComponents` with `wrap: false` . The component will receive a `studioAttributes` prop. Destructure it to ensure proper behavior, and expose `open` and `close` via `useImperativeHandle` ."
url: "https://www.contentstack.com/untitled"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## useHiddenElementNotification

The `useHiddenElementNotification` React hook enables components to show or hide modals, tooltips, dialogs, or other hidden elements that require external control. It notifies Studio when the component should be opened for editing.

**When to Use**

- **Modals/Dialogs:** When you need to show or hide modal content.
- **Tooltips:** For displaying contextual information.
- **Dropdowns:** For expandable content sections.
- **Hidden Sections:** For collapsible content areas.
- **Any Interactive Element:** That needs to be controlled from outside the canvas.

**Note:** When using this hook, register the component in `registerComponents` with `wrap: false`. The component will receive a `studioAttributes` prop. Destructure it to ensure proper behavior, and expose `open` and `close` via `useImperativeHandle`.

### Overload 1

No parameters.

| **Name** | **Type** | **Description** |
|---|---|---|
| openHiddenElementNotification | `() => void` | Function to signal that the hidden element notification should be opened in Studio. |
| closeHiddenElementNotification | `() => void` | Function to signal that the hidden element notification should be closed in Studio. |

### Overload 2

No parameters.

```
import {
  StudioAttributes,
  useHiddenElementNotification,
  useSelected,
} from "@contentstack/studio-react";
import { useEffect, useImperativeHandle, useRef, useState } from "react";

interface HiddenElementNotificationProps extends ComposableAttributes {}

export const HiddenElementNotification = ({
  studioAttributes,
}: HiddenElementNotificationProps) => {
  const isSelected = useSelected();
  const ref = useRef<HTMLDivElement>(null);
  const { openHiddenElementNotification } = useHiddenElementNotification();
  const [showHiddenSection, setShowHiddenSection] = useState(false);

  function toggleHiddenSection() {
    setShowHiddenSection((prev) => !prev);
  }

  useEffect(() => {
    if (isSelected) {
      openHiddenElementNotification(); // Sends message to Studio
      setShowHiddenSection(true); // Shows hidden section locally
    }
  }, [isSelected, openHiddenElementNotification]);

  // Expose methods for external control from Studio
  useImperativeHandle(
    studioAttributes?.["ref"],
    () => ({
      open() {
        setShowHiddenSection(true);
      },
      close() {
        setShowHiddenSection(false);
      },
      element: ref.current,
    }),
    []
    // Called when Studio sends "open" event
    // Called when Studio sends "close" event
  );

  return (
    <div {...studioAttributes} ref={ref}>
      <p>This is a hidden element notification</p>
      <button onClick={toggleHiddenSection}>Toggle Hidden section visibility</button>
      {showHiddenSection && (
        <div>
          <p>This is a hidden section</p>
        </div>
      )}
    </div>
  );
};
```
