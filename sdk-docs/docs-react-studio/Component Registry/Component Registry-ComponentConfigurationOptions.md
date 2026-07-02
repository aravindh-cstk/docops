---
title: "Component Configuration Options"
description: "Parameter Type Description type (required) string Unique identifier for the component. Used internally. component (required) React.Component The React component to register. Can be a function or class component. wrap boolean | string Controls whether the component is wrapped in a container element. true (default): Wrapped in a <div> . false : Not wrapped (useful when handling your own container). string : Wrapped in the specified HTML tag (e.g., section , span ). displayName string Name shown in the component library. Defaults to type if not specified. description string Description shown in the component library for authors. sections string[] | string Determines where the component appears in the left panel. Built-in sections include: Basic : Text, buttons, links Media : Images, video, embed Container : Section, box, columns Smart Containers : Repeaters, condition blocks Advanced : Tabs, modals, accordions Custom Components : User-defined thumbnailUrl string Thumbnail image displayed in the component library. props object Defines configurable props (see below). styles object Defines style groups, default classes, and available style sections. Note: When using useHiddenElementNotification , set wrap: false and destructure the studioAttributes prop in your component."
url: "https://www.contentstack.com/react-studio-sdk-component-registry-component-configuration-options"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Component Configuration Options

| **Parameter** | **Type** | **Description** |
|---|---|---|
| `type` (required) | `string` | Unique identifier for the component. Used internally. |
| `component` (required) | `React.Component` | The React component to register. Can be a function or class component. |
| `wrap` | `boolean` \| `string` | Controls whether the component is wrapped in a container element.`true` (default): Wrapped in a `<div>`.`false`: Not wrapped (useful when handling your own container).`string`: Wrapped in the specified HTML tag (e.g., `section`, `span`). |
| `displayName` | `string` | Name shown in the component library. Defaults to `type` if not specified. |
| `description` | `string` | Description shown in the component library for authors. |
| `sections` | `string[]` \| `string` | Determines where the component appears in the left panel. Built-in sections include:`Basic`: Text, buttons, links`Media`: Images, video, embed`Container`: Section, box, columns`Smart Containers`: Repeaters, condition blocks`Advanced`: Tabs, modals, accordions`Custom Components`: User-defined |
| `thumbnailUrl` | `string` | Thumbnail image displayed in the component library. |
| `props` | `object` | Defines configurable props (see below). |
| `styles` | `object` | Defines style groups, default classes, and available style sections. |

**Note:** When using `useHiddenElementNotification`, set `wrap: false` and destructure the `studioAttributes` prop in your component.
