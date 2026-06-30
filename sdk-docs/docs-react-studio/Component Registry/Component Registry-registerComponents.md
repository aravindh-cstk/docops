---
title: "registerComponents"
description: "The `registerComponents` method registers custom React components in Studio, making them available in the Visual Builder and Studio interface. This is the primary method for integrating reusable UI components into the composition workflow."
url: "https://www.contentstack.com/react-studio-sdk-component-registry-registercomponents"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## registerComponents

The `registerComponents` method registers custom React components in Studio, making them available in the Visual Builder and Studio interface. This is the primary method for integrating reusable UI components into the composition workflow.

No parameters.

**Parameters**

| **Name** | **Type** | **Description** |
|---|---|---|
| components | `RegisterComponentOptionsInput<C>[]` | Array of component configuration objects to register. |
| options | `RegisterComponentOptions` (optional) | Optional configuration options. Controls registry behavior such as built-in component availability. |

**Import Example**

```
import { registerComponents } from '@contentstack/studio-react';

registerComponents([
  {
    type: "my-custom-component",
    component: MyCustomComponent,
    displayName: "My Custom Component",
    description: "A custom component for special functionality",
    sections: ["Custom Components"],
    wrap: false,
    props: {
      title: {
        type: "string",
        displayName: "Title",
        defaultValue: "Default Title",
        placeholder: "Enter title here"
      },
      isVisible: {
        type: "boolean",
        displayName: "Visible",
        defaultValue: true
      }
    },
    styles: {
      default: {
        styleSections: ["size", "spacing", "background"],
        defaultClasses: ["my-component"],
        displayName: "Default Styles"
      }
    }
  }
]);
```
