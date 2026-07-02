---
title: "Options Configuration"
description: "allowedBuiltInComponents The allowedBuiltInComponents option controls the built-in components available in the registry. Type: boolean | string[] Values true (default): Enable all built-in components. false : Disable all built-in components. string[]: Enable specific built-in components. Built-in Component Categories Basic Components: page , symbol , fragment , text , header , button , link , link-container , json-rte , collapsible-text . Media Components: video , embed , image . Container Components: section , box , hstack (columns), vstack (rows), repeater , condition-block . Example // Enable all built-in components registerComponents(components, { allowedBuiltInComponents: true }); // Disable all built-in components registerComponents(components, { allowedBuiltInComponents: false }); // Enable only specific built-in components registerComponents(components, { allowedBuiltInComponents: [ \"button\", \"text\", \"image\", \"section\", \"box\" ] }); overrideDefaultComponents The overrideDefaultComponents option controls whether user components can override built-in components with the same type name. Type: boolean Values false (default): Built-in components cannot be overridden. true : User components can override built-in components. Example // Allow overriding built-in components registerComponents(components, { overrideDefaultComponents: true }); // Prevent overriding (safer option) registerComponents(components, { overrideDefaultComponents: false }); Error Handling When overrideDefaultComponents is false , attempting to register a component with the same type as a built-in component will throw an error: try { registerComponents( [ { type: \"button\", // This conflicts with built-in button component: CustomButton } ], { overrideDefaultComponents: false } ); } catch (error) { // Error: \"Component with type 'button' is already registered.\" console.error(\"Registration failed:\", error.message); }"
url: "https://www.contentstack.com/react-studio-sdk-component-registry-options-configuration"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Options Configuration

- **allowedBuiltInComponents**The `allowedBuiltInComponents` option controls the built-in components available in the registry.**Type:** `boolean | string[]`**Values****Built-in Component Categories****Example**// Enable all built-in components
registerComponents(components, {
  allowedBuiltInComponents: true
});

// Disable all built-in components
registerComponents(components, {
  allowedBuiltInComponents: false
});

// Enable only specific built-in components
registerComponents(components, {
  allowedBuiltInComponents: [
    "button",
    "text",
    "image",
    "section",
    "box"
  ]
});
  - `true` (default): Enable all built-in components.
  - `false`: Disable all built-in components.
  - `string[]: Enable specific built-in components.`
  - **Basic Components:** `page`, `symbol`, `fragment`, `text`, `header`, `button`, `link`, `link-container`, `json-rte`, `collapsible-text`.
  - **Media Components:** `video`, `embed`, `image`.
  - **Container Components:** `section`, `box`, `hstack` (columns), `vstack` (rows), `repeater`, `condition-block`.
- **overrideDefaultComponents**The `overrideDefaultComponents` option controls whether user components can override built-in components with the same type name.**Type:** `boolean`**Values**
  - `false` (default): Built-in components cannot be overridden.
  - `true`: User components can override built-in components.

**Example**

```
// Allow overriding built-in components
registerComponents(components, {
  overrideDefaultComponents: true
});

// Prevent overriding (safer option)
registerComponents(components, {
  overrideDefaultComponents: false
});
```

**Error Handling**

When `overrideDefaultComponents` is `false`, attempting to register a component with the same type as a built-in component will throw an error:

```
try {
  registerComponents(
    [
      {
        type: "button", // This conflicts with built-in button
        component: CustomButton
      }
    ],
    {
      overrideDefaultComponents: false
    }
  );
} catch (error) {
  // Error: "Component with type 'button' is already registered."
  console.error("Registration failed:", error.message);
}
```
