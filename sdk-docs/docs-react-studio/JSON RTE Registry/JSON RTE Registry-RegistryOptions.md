---
title: "Registry Options"
description: "The `registerComponents` configuration object controls built-in component availability, user overrides, and debug logging behavior. allowedBuiltInComponents The `allowedBuiltInComponents` option controls the built-in components available in the registry. Type: boolean | string\\[\\] Values: `true:` Enable all built-ins (default) `false:` Disable all built-ins `string[]:` Enable only specific built-in types overrideDefaultComponents The `overrideDefaultComponents` option determines if user components override built-in components with the same type identifier. Type: boolean Values: `false` : Prevent overriding built-ins (default) `true` : Allow user components to override debug The `debug` option enables debug logging for troubleshooting during component registration. Type: boolean Values: `false` : Disable logging (default) `true` : Enable logging Usage Example // Basic component registration registerComponents(\\[ { type: \"hero-section\", component: HeroSection, displayName: \"Hero Section\", description: \"A prominent section for main content\", sections: \\[\"Custom Components\"\\] } \\]); // Advanced component with full configuration registerComponents(\\[ { type: \"product-card\", component: ProductCard, displayName: \"Product Card\", description: \"Display product information in a card format\", sections: \\[\"Custom Components\", \"E-commerce\"\\], wrap: false, thumbnailUrl: \"/images/product-card-thumbnail.png\", hideFromContentCreators: false, hideFromComponentList: false, props: { productId: { type: \"string\", displayName: \"Product ID\", placeholder: \"Enter product ID\" }, showPrice: { type: \"boolean\", displayName: \"Show Price\", defaultValue: true } }, styles: { default: { styleSections: \\[\"size\", \"spacing\", \"background\", \"border\"\\], defaultClasses: \\[\"product-card\"\\], displayName: \"Card Styles\" }, content: { styleSections: \\[\"typography\"\\], defaultClasses: \\[\"product-content\"\\], displayName: \"Content Styles\" } } } \\]); // Component with validation registerComponents(\\[ { type: \"contact-form\", component: ContactForm, displayName: \"Contact Form\", description: \"A form for collecting contact information\", sections: \\[\"Forms\"\\], props: { email: { type: \"string\", displayName: \"Email\", placeholder: \"Enter email address\" } } } \\]);"
url: "https://www.contentstack.com/react-studio-sdk-json-rte-registry-registry-options"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Registry Options

The `registerComponents` configuration object controls built-in component availability, user overrides, and debug logging behavior.

#### allowedBuiltInComponents

The `allowedBuiltInComponents` option controls the built-in components available in the registry.

**Type:** boolean | string[]

**Values:**

- `true:` Enable all built-ins (default)
- `false:` Disable all built-ins
- `string[]:` Enable only specific built-in types

#### overrideDefaultComponents

The `overrideDefaultComponents` option determines if user components override built-in components with the same type identifier.

**Type:** boolean

**Values:**

- `false`: Prevent overriding built-ins (default)
- `true`: Allow user components to override

#### debug

The `debug` option enables debug logging for troubleshooting during component registration.

**Type:** boolean

**Values:**

- `false`: Disable logging (default)
- `true`: Enable logging

#### Usage Example

```
// Basic component registration
registerComponents([
  {
    type: "hero-section",
    component: HeroSection,
    displayName: "Hero Section",
    description: "A prominent section for main content",
    sections: ["Custom Components"]
  }
]);

// Advanced component with full configuration
registerComponents([
  {
    type: "product-card",
    component: ProductCard,
    displayName: "Product Card",
    description: "Display product information in a card format",
    sections: ["Custom Components", "E-commerce"],
    wrap: false,
    thumbnailUrl: "/images/product-card-thumbnail.png",
    hideFromContentCreators: false,
    hideFromComponentList: false,
    props: {
      productId: {
        type: "string",
        displayName: "Product ID",
        placeholder: "Enter product ID"
      },
      showPrice: {
        type: "boolean",
        displayName: "Show Price",
        defaultValue: true
      }
    },
    styles: {
      default: {
        styleSections: ["size", "spacing", "background", "border"],
        defaultClasses: ["product-card"],
        displayName: "Card Styles"
      },
      content: {
        styleSections: ["typography"],
        defaultClasses: ["product-content"],
        displayName: "Content Styles"
      }
    }
  }
]);

// Component with validation
registerComponents([
  {
    type: "contact-form",
    component: ContactForm,
    displayName: "Contact Form",
    description: "A form for collecting contact information",
    sections: ["Forms"],
    props: {
      email: {
        type: "string",
        displayName: "Email",
        placeholder: "Enter email address"
      }
    }
  }
]);
```
