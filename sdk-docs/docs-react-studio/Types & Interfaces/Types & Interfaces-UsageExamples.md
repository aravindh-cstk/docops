---
title: "Usage Examples"
description: "Basic Usage The following example demonstrates initializing the SDK, fetching a composition, and rendering it with the StudioComponent. import { registerDesignTokens, registerDesignClasses, registerBreakpoints } from '@contentstack/studio-react'; // Register design tokens const tokens = registerDesignTokens({ colors: { primary: '#007bff', secondary: '#6c757d' }, spacing: { sm: '0.5rem', md: '1rem', lg: '1.5rem' } }); // Register design classes const classes = registerDesignClasses([ { name: 'primary', displayName: 'Primary' }, { name: 'secondary', displayName: 'Secondary' } ]); // Register breakpoints registerBreakpoints([ { name: 'mobile', maxWidth: 768 }, { name: 'tablet', minWidth: 769, maxWidth: 1024 }, { name: 'desktop', minWidth: 1025 } ]);"
url: "https://www.contentstack.com/react-studio-sdk-types-and-interfaces-usage-examples"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Usage Examples

#### Basic Usage

The following example demonstrates initializing the SDK, fetching a composition, and rendering it with the StudioComponent.

```
import {
  registerDesignTokens,
  registerDesignClasses,
  registerBreakpoints
} from '@contentstack/studio-react';

// Register design tokens
const tokens = registerDesignTokens({
  colors: {
    primary: '#007bff',
    secondary: '#6c757d'
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem'
  }
});

// Register design classes
const classes = registerDesignClasses([
  { name: 'primary', displayName: 'Primary' },
  { name: 'secondary', displayName: 'Secondary' }
]);

// Register breakpoints
registerBreakpoints([
  { name: 'mobile', maxWidth: 768 },
  { name: 'tablet', minWidth: 769, maxWidth: 1024 },
  { name: 'desktop', minWidth: 1025 }
]);
```
