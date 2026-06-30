---
title: "Conditional Props"
description: "Conditional props are component props whose values depend on the values of other props. They enable components to change behavior or configuration dynamically, based on user selections or predefined logic. Use Case: Show or modify a prop’s value only when another related prop meets a certain condition — for example, displaying a `\"link URL\"` field only when `\"link enabled\"` is set to `true` . Example props: { showAdvanced: { type: \"boolean\", displayName: \"Show Advanced Options\", defaultValue: false }, advancedConfig: { type: \"object\", displayName: \"Advanced Configuration\", defaultValue: {}, // This prop will only be shown when showAdvanced is true // (handled automatically by the Studio) } }"
url: "https://www.contentstack.com/react-studio-sdk-json-rte-registry-conditional-props"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Conditional Props

Conditional props are component props whose values depend on the values of other props. They enable components to change behavior or configuration dynamically, based on user selections or predefined logic.

**Use Case:** Show or modify a prop’s value only when another related prop meets a certain condition — for example, displaying a `"link URL"` field only when `"link enabled"` is set to `true`.

**Example**

```
props: {
  showAdvanced: {
    type: "boolean",
    displayName: "Show Advanced Options",
    defaultValue: false
  },
  advancedConfig: {
    type: "object",
    displayName: "Advanced Configuration",
    defaultValue: {},
    // This prop will only be shown when showAdvanced is true
    // (handled automatically by the Studio)
  }
}
```
