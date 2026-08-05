---
title: "registerDesignClasses"
description: "The `registerDesignClasses` method registers design classes with the design registry, making predefined styling combinations available in the Class tab of the Design section in Studio. These classes can be applied to components, and the method returns an object containing them for use in component props with type safety. Parameters Name Type Description designClasses `DesignClassesInput[]` An array of class definitions. Accepts either strings or objects with `{ name, displayName }` . Returns Type: `DesignClassesNames<C>` Value: An object that maps each registered class name to its corresponding value. Example: { primary: \"primary\", card: \"card\" } Input Variants String Input (Simple): Provide class names only. The registry automatically returns a key–value map of those names. Example const classes = registerDesignClasses(\\[ 'primary', 'secondary', 'success', 'danger' \\]); // Returns: // { // primary: 'primary', // secondary: 'secondary', // success: 'success', // danger: 'danger' // } Object Input (With Display Names): Provide `{ name, displayName }` to show a user-friendly label in Studio while keeping the internal name stable. Example const classes = registerDesignClasses(\\[ { name: 'primary', displayName: 'Primary Button' }, { name: 'secondary', displayName: 'Secondary Button' }, { name: 'outline', displayName: 'Outline Style' } \\]); // Returns: // { // primary: 'primary', // secondary: 'secondary', // outline: 'outline' // } Complete Example import { registerDesignClasses } from '@contentstack/studio-react'; // Register design classes for a button component system const buttonClasses = registerDesignClasses(\\[ // Simple variants 'primary', 'secondary', 'success', 'danger', 'warning', 'info', // Named variants with display names { name: 'outline-primary', displayName: 'Primary Outline' }, { name: 'outline-secondary', displayName: 'Secondary Outline' }, { name: 'ghost-primary', displayName: 'Primary Ghost' }, { name: 'ghost-secondary', displayName: 'Secondary Ghost' }, // Size variants { name: 'sm', displayName: 'Small' }, { name: 'md', displayName: 'Medium' }, { name: 'lg', displayName: 'Large' }, // Special styles { name: 'rounded', displayName: 'Rounded' }, { name: 'pill', displayName: 'Pill Shape' }, { name: 'block', displayName: 'Full Width' } \\]); console.log(buttonClasses); // Returns: // { // primary: 'primary', // secondary: 'secondary', // success: 'success', // danger: 'danger', // warning: 'warning', // info: 'info', // 'outline-primary': 'outline-primary', // 'outline-secondary': 'outline-secondary', // 'ghost-primary': 'ghost-primary', // 'ghost-secondary': 'ghost-secondary', // sm: 'sm', // md: 'md', // lg: 'lg', // rounded: 'rounded', // pill: 'pill', // block: 'block' // } Usage in Components Wire registered classes directly into component props for type safety and consistency: // In your component registration props: { variant: { type: \"choice\", displayName: \"Button Variant\", choices: Object.values(buttonClasses), // Use registered class names defaultValue: \"primary\" }, size: { type: \"choice\", displayName: \"Button Size\", choices: \\[\"sm\", \"md\", \"lg\"\\], defaultValue: \"md\" } }"
url: "https://www.contentstack.com/react-studio-sdk-design-registry-registerdesignclasses"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## registerDesignClasses

The `registerDesignClasses` method registers design classes with the design registry, making predefined styling combinations available in the **Class** tab of the **Design** section in Studio. These classes can be applied to components, and the method returns an object containing them for use in component props with type safety.

**Parameters**

| **Name** | **Type** | **Description** |
|---|---|---|
| designClasses | `DesignClassesInput[]` | An array of class definitions. Accepts either strings or objects with `{ name, displayName }`. |

**Returns**

**Type:** `DesignClassesNames<C>`

**Value:** An object that maps each registered class name to its corresponding value.

**Example:**

```
{
  primary: "primary",
  card: "card"
}
```

#### Input Variants

##### String Input (Simple):

Provide class names only. The registry automatically returns a key - value map of those names.

**Example**

```
const classes = registerDesignClasses([
  'primary',
  'secondary',
  'success',
  'danger'
]);

// Returns:
// { 
//   primary: 'primary', 
//   secondary: 'secondary', 
//   success: 'success', 
//   danger: 'danger' 
// }
```

##### Object Input (With Display Names):

Provide `{ name, displayName }` to show a user-friendly label in Studio while keeping the internal name stable.

**Example**

```
const classes = registerDesignClasses([
  { name: 'primary', displayName: 'Primary Button' },
  { name: 'secondary', displayName: 'Secondary Button' },
  { name: 'outline', displayName: 'Outline Style' }
]);

// Returns:
// { 
//   primary: 'primary', 
//   secondary: 'secondary', 
//   outline: 'outline' 
// }
```

#### Complete Example

```
import { registerDesignClasses } from '@contentstack/studio-react';

// Register design classes for a button component system
const buttonClasses = registerDesignClasses([
  // Simple variants
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',

  // Named variants with display names
  { name: 'outline-primary', displayName: 'Primary Outline' },
  { name: 'outline-secondary', displayName: 'Secondary Outline' },
  { name: 'ghost-primary', displayName: 'Primary Ghost' },
  { name: 'ghost-secondary', displayName: 'Secondary Ghost' },

  // Size variants
  { name: 'sm', displayName: 'Small' },
  { name: 'md', displayName: 'Medium' },
  { name: 'lg', displayName: 'Large' },

  // Special styles
  { name: 'rounded', displayName: 'Rounded' },
  { name: 'pill', displayName: 'Pill Shape' },
  { name: 'block', displayName: 'Full Width' }
]);

console.log(buttonClasses);

// Returns:
// {
//   primary: 'primary',
//   secondary: 'secondary',
//   success: 'success',
//   danger: 'danger',
//   warning: 'warning',
//   info: 'info',
//   'outline-primary': 'outline-primary',
//   'outline-secondary': 'outline-secondary',
//   'ghost-primary': 'ghost-primary',
//   'ghost-secondary': 'ghost-secondary',
//   sm: 'sm',
//   md: 'md',
//   lg: 'lg',
//   rounded: 'rounded',
//   pill: 'pill',
//   block: 'block'
// }
```

**Usage in Components**

Wire registered classes directly into component props for type safety and consistency:

```
// In your component registration
props: {
  variant: {
    type: "choice",
    displayName: "Button Variant",
    choices: Object.values(buttonClasses), // Use registered class names
    defaultValue: "primary"
  },
  size: {
    type: "choice",
    displayName: "Button Size",
    choices: ["sm", "md", "lg"],
    defaultValue: "md"
  }
}
```
