---
title: "registerComponents"
description: "The registerComponents method makes custom React components available in Studio. Once registered, these components can be added, configured, and styled by content creators within the Studio interface alongside built-in components. Returns Type void Parameters Name Type Description componentConfig (required) Component configuration object One or more component configurations to register. options Optional registry configuration Controls built-ins, overrides, and debugging. Example import { registerComponents } from '@contentstack/studio-react'; registerComponents(componentConfig, options);"
url: "https://www.contentstack.com/react-studio-sdk-json-rte-registry-registercomponents"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## registerComponents

The `registerComponents` method makes custom React components available in Studio. Once registered, these components can be added, configured, and styled by content creators within the Studio interface alongside built-in components.

**Returns**

Type `void`

**Parameters**

| **Name** | **Type** | **Description** |
|---|---|---|
| `componentConfig` (required) | Component configuration object | One or more component configurations to register. |
| `options` | Optional registry configuration | Controls built-ins, overrides, and debugging. |

**Example**

```
import { registerComponents } from '@contentstack/studio-react';

registerComponents(componentConfig, options);
```
