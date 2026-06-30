---
title: "getDesignTokens"
description: "The `getDesignTokens` method retrieves the currently registered design tokens from the design registry. Example import { getDesignTokens } from '@contentstack/studio-react'; const tokens = getDesignTokens(); Returns `DesignTokens` : All active tokens, normalized and mapped to CSS variables. Usage Example import { getDesignTokens } from '@contentstack/studio-react'; // Get current design tokens const currentTokens = getDesignTokens(); console.log(currentTokens.typography.color); // Returns: { \"text-primary\": \"var(--token-text-primary)\", ... } console.log(currentTokens.spacing.margin); // Returns: { \"m-0\": \"var(--token-m-0)\", \"m-1\": \"var(--token-m-1)\", ... }"
url: "https://www.contentstack.com/react-studio-sdk-design-registry-getdesigntokens"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getDesignTokens

The `getDesignTokens` method retrieves the currently registered design tokens from the design registry.

**Example**

```
import { getDesignTokens } from '@contentstack/studio-react';
const tokens = getDesignTokens();
```

**Returns**

`DesignTokens`**:** All active tokens, normalized and mapped to CSS variables.

**Usage Example**

```
import { getDesignTokens } from '@contentstack/studio-react';

// Get current design tokens
const currentTokens = getDesignTokens();

console.log(currentTokens.typography.color);
// Returns: { "text-primary": "var(--token-text-primary)", ... }

console.log(currentTokens.spacing.margin);
// Returns: { "m-0": "var(--token-m-0)", "m-1": "var(--token-m-1)", ... }
```
