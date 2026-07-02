---
title: "registerDesignTokens"
description: "The registerDesignTokens method registers design tokens and exposes them as CSS variables. These tokens define consistent visual attributes such as color palettes, spacing scales, and typography settings across components and interfaces. Parameters Name Type Description designTokens (required) DesignTokensInput Object containing your token groups and values. options Partial<DesignTokensOptionsInput> Optional configuration object for advanced token registration behavior. Returns Type DesignTokens A normalized object reflecting the registered token groups and their corresponding CSS variables. Below is an outline of supported tokens: Tokens Configuration Below is an outline of supported tokens: Global Tokens Global tokens define high-level, project-wide primitives that serve as foundational values for other token categories. Example { colorTokens: { primary: \"#007bff\", secondary: \"#6c757d\", success: \"#28a745\", danger: \"#dc3545\", warning: \"#ffc107\", info: \"#17a2b8\" }, spaceTokens: { xs: \"0.25rem\", sm: \"0.5rem\", md: \"1rem\", lg: \"1.5rem\", xl: \"3rem\" } } Size Tokens Size tokens define base sizing primitives and common dimensional presets for consistent layout and spacing. Example { size: { tokens: { xs: \"4px\", sm: \"8px\", md: \"16px\", lg: \"32px\", xl: \"64px\" }, width: { \"w-full\": \"100%\", \"w-auto\": \"auto\", \"w-screen\": \"100vw\" }, height: { \"h-full\": \"100%\", \"h-auto\": \"auto\", \"h-screen\": \"100vh\" }, minWidth: { \"min-w-0\": \"0px\", \"min-w-full\": \"100%\" }, minHeight: { \"min-h-0\": \"0px\", \"min-h-full\": \"100%\" }, maxWidth: { \"max-w-xs\": \"20rem\", \"max-w-sm\": \"24rem\", \"max-w-md\": \"28rem\" }, maxHeight: { \"max-h-32\": \"8rem\", \"max-h-64\": \"16rem\" } } } Spacing Tokens Spacing tokens define values for gaps, margins, paddings, and standardized spacing styles to ensure consistent layout structure. Example { spacing: { tokens: { \"space-0\": \"0\", \"space-1\": \"0.25rem\", \"space-2\": \"0.5rem\", \"space-4\": \"1rem\", \"space-8\": \"2rem\" }, margin: { \"m-0\": \"0\", \"m-1\": \"0.25rem\", \"m-auto\": \"auto\" }, padding: { \"p-0\": \"0\", \"p-1\": \"0.25rem\", \"p-4\": \"1rem\" }, style: { card: { margin: \"1rem\", padding: \"1.5rem\" } } } } Typography Tokens Typography tokens define text-related properties such as color, weight, size, line height, letter spacing, and typographic styles used across the interface. Example { typography: { color: { \"text-primary\": \"#007bff\", \"text-secondary\": \"#6c757d\", \"text-muted\": \"#6c757d\" }, fontWeight: { \"font-light\": 300, \"font-normal\": 400, \"font-medium\": 500, \"font-semibold\": 600, \"font-bold\": 700 }, fontSize: { \"text-xs\": \"0.75rem\", \"text-sm\": \"0.875rem\", \"text-base\": \"1rem\", \"text-lg\": \"1.125rem\", \"text-xl\": \"1.25rem\" }, lineHeight: { \"leading-none\": 1, \"leading-tight\": 1.25, \"leading-normal\": 1.5, \"leading-relaxed\": 1.75 }, letterSpacing: { \"tracking-tighter\": \"-0.05em\", \"tracking-tight\": \"-0.025em\", \"tracking-normal\": \"0em\", \"tracking-wide\": \"0.025em\" }, style: { heading: { fontFamily: \"Inter, sans-serif\", fontWeight: \"600\", fontSize: \"1.5rem\", lineHeight: 1.2, letterSpacing: \"-0.025em\" } } } } Background Tokens Background tokens define background colors and reusable background styles to ensure visual consistency across components and sections. Example { background: { color: { \"bg-primary\": \"#007bff\", \"bg-secondary\": \"#6c757d\", \"bg-light\": \"#f8f9fa\" }, style: { \"gradient-primary\": { type: \"linear-gradient\", angle: 135, stops: [\"#667eea\", \"#764ba2\"] }, \"gradient-radial\": { type: \"radial-gradient\", position: \"center\", stops: [\"#f093fb\", \"#f5576c\"] }, \"hero-image\": { type: \"image\", url: \"/images/hero-bg.jpg\", size: \"cover\", repeat: \"no-repeat\", align: \"center\" } } } } Border Tokens Border tokens define border colors, radii, and border style configurations for consistent component framing. Example { border: { color: { \"border-primary\": \"#007bff\", \"border-secondary\": \"#6c757d\", \"border-light\": \"#dee2e6\" }, radius: { \"rounded-none\": \"0\", \"rounded-sm\": \"0.125rem\", \"rounded\": \"0.25rem\", \"rounded-md\": \"0.375rem\", \"rounded-lg\": \"0.5rem\", \"rounded-full\": \"9999px\" }, style: { button: { style: \"solid\", width: \"2px\", color: \"#007bff\", radius: \"0.375rem\" }, card: { style: \"solid\", width: \"1px\", color: \"#dee2e6\", radius: \"0.5rem\" } } } } Shadow Tokens Shadow tokens define shadow colors and predefined shadow presets to create depth and elevation in the interface. Example { shadow: { color: { \"shadow-light\": \"rgba(0, 0, 0, 0.1)\", \"shadow-medium\": \"rgba(0, 0, 0, 0.15)\", \"shadow-dark\": \"rgba(0, 0, 0, 0.25)\" }, style: { sm: { x: \"0\", y: \"1px\", blur: \"2px\", spread: \"0\", color: \"rgba(0, 0, 0, 0.05)\" }, md: { x: \"0\", y: \"4px\", blur: \"6px\", spread: \"-1px\", color: \"rgba(0, 0, 0, 0.1)\" }, lg: { x: \"0\", y: \"10px\", blur: \"15px\", spread: \"-3px\", color: \"rgba(0, 0, 0, 0.1)\" } } } } Transform Tokens Transform tokens define reusable transform configurations, such as scaling, rotation, and translation, to maintain consistent motion and layout behavior. Example { transform: { style: { \"hover-lift\": { translateY: \"-2px\", scaleX: \"1.02\", scaleY: \"1.02\" }, \"rotate-45\": { rotateZ: \"45deg\" }, \"skew-x\": { skewX: \"10deg\" } } } } Effects Tokens Effects tokens define reusable visual effect configurations, such as filters and blurs, to enhance the appearance of UI elements consistently. Example { effects: { filter: { \"blur-sm\": \"blur(4px)\", \"blur\": \"blur(8px)\", \"blur-md\": \"blur(12px)\", \"brightness-75\": \"brightness(0.75)\", \"brightness-90\": \"brightness(0.9)\", \"contrast-125\": \"contrast(1.25)\" } } } Position and Layout Tokens Position and layout tokens define layering properties and spatial configurations to control element stacking and structural layout across the interface. Example { position: { zIndex: { \"z-0\": \"0\", \"z-10\": \"10\", \"z-20\": \"20\", \"z-30\": \"30\", \"z-40\": \"40\", \"z-50\": \"50\" }, position: { \"static\": \"static\", \"relative\": \"relative\", \"absolute\": \"absolute\", \"fixed\": \"fixed\", \"sticky\": \"sticky\" } }, layout: { gap: { \"gap-0\": \"0\", \"gap-1\": \"0.25rem\", \"gap-2\": \"0.5rem\", \"gap-4\": \"1rem\", \"gap-8\": \"2rem\" } } } Visibility Tokens Visibility tokens define opacity and visibility levels to manage element transparency and display behavior consistently. Example { visibility: { opacity: { \"opacity-0\": \"0%\", \"opacity-25\": \"25%\", \"opacity-50\": \"50%\", \"opacity-75\": \"75%\", \"opacity-100\": \"100%\" } } } Overflow Tokens Overflow tokens define scrolling and clipping behaviors to control how content is displayed when it exceeds its container boundaries. Example { overflow: { style: { \"scroll\": \"scroll\", \"auto\": \"auto\", \"hidden\": \"hidden\", \"visible\": \"visible\", \"clip\": \"clip\" } } } registerDesignTokens Optional Configuration Objects The following parameters of the registerDesignTokens method are optional configuration objects that define how tokens are processed and which values are permitted. allowDefaultDesignTokens The allowDefaultDesignTokens option determines whether to merge custom design tokens with built-in defaults ( true ) or use only the custom tokens provided ( false ). Use Set true to inherit sensible defaults, or set false for a fully bespoke system. Type: boolean Example // Include built-in tokens (recommended for most use cases) const tokens = registerDesignTokens({ colorTokens: { brand: \"#ff6b6b\", accent: \"#4ecdc4\" } }, { allowDefaultDesignTokens: true }); // Use only custom tokens const customTokens = registerDesignTokens({ colorTokens: { brand: \"#ff6b6b\", accent: \"#4ecdc4\" } }, { allowDefaultDesignTokens: false }); allowedValuesLevel The allowedValuesLevel option governs the level of control authors have when selecting or inputting values in Studio. Use dynamic : Most restrictive option. Only allows linking design properties through data sources. Ideal when design values are strictly managed in the CMS. tokens : Moderate flexibility. Allows both predefined design tokens and data binding, but does not allow arbitrary custom values. arbitrary : Most flexible option. Permits the use of tokens, data binding, and free-form custom values entered manually. Type: tokens, dynamic, and arbitrary Example // Development environment - maximum flexibility const devTokens = registerDesignTokens({ colorTokens: { brand: \"#ff6b6b\", accent: \"#4ecdc4\" }, spacing: { tokens: { \"space-custom\": \"2rem\" } } }, { allowDefaultDesignTokens: true, allowedValuesLevel: \"arbitrary\" }); // Production environment - strict consistency const prodTokens = registerDesignTokens({ colorTokens: { brand: \"#ff6b6b\", accent: \"#4ecdc4\" } }, { allowDefaultDesignTokens: false, allowedValuesLevel: \"dynamic\" }); // Hybrid approach - built-ins with moderate flexibility const hybridTokens = registerDesignTokens({ colorTokens: { brand: \"#ff6b6b\" } }, { allowDefaultDesignTokens: true, allowedValuesLevel: \"arbitrary\" }); Default Design Tokens The DEFAULT_DESIGN_TOKENS object provides a predefined set of design tokens that establish consistent styling across components. It includes tokens for colors, typography, spacing, layout, borders, shadows, and other visual properties. These tokens act as reusable values that help maintain design consistency and simplify UI customization in Studio. const DEFAULT_DESIGN_TOKENS = { colorTokens: { \"color-dark\": \"#000000\", \"color-primary\": \"#6c5ce7\", \"color-white\": \"#ffffff\", \"color-secondary\": \"#475161\", }, size: { width: SIZE_TOKENS, height: SIZE_TOKENS, minWidth: SIZE_TOKENS, minHeight: SIZE_TOKENS, maxWidth: SIZE_TOKENS, }, layout: { gap: { \"gap-2\": \"0.125rem\", \"gap-4\": \"0.25rem\", \"gap-5\": \"0.3125rem\", \"gap-6\": \"0.375rem\", \"gap-8\": \"0.5rem\", \"gap-10\": \"0.625rem\", \"gap-12\": \"0.75rem\", \"gap-14\": \"0.875rem\", \"gap-15\": \"0.9375rem\", \"gap-16\": \"1rem\", }, }, typography: { fontSize: { \"font-size-sm\": \"0.75rem\", \"font-size-md\": \"0.875rem\", \"font-size-base\": \"1rem\", \"font-size-lg\": \"1.25rem\", \"font-size-xl\": \"1.75rem\", \"font-size-2xl\": \"2.125rem\", }, fontWeight: { \"font-regular\": 400, \"font-medium\": 500, \"font-semi-bold\": 600, \"font-bold\": 700, \"font-extra-bold\": 800, }, lineHeight: { \"line-height-default\": 1.5, \"line-height-sm\": 1.25, \"line-height-xs\": 1, }, color: { \"color-dark\": \"#000000\", \"color-primary\": \"#6c5ce7\", \"color-white\": \"#ffffff\", \"color-secondary\": \"#475161\", }, }, border: { radius: { \"border-radius-xs\": \"2px\", \"border-radius-sm\": \"4px\", \"border-radius-md\": \"6px\", \"border-radius-lg\": \"8px\", \"border-radius-xl\": \"10px\", \"border-radius-50\": \"50%\", \"border-radius-full\": \"9999px\", }, color: { \"color-lighter\": \"#f5f5f5\", \"color-light\": \"#a9b6cb\", \"color-base\": \"#647696\", \"color-dark\": \"#475161\", \"color-link\": \"#6c5ce7\", \"color-focus\": \"#edf1f7\", \"color-warning\": \"#d62400\", \"color-success\": \"#007a52\", }, }, spacing: { tokens: { \"space-2\": \"0.125rem\", \"space-4\": \"0.25rem\", \"space-5\": \"0.3125rem\", \"space-6\": \"0.375rem\", \"space-8\": \"0.5rem\", \"space-10\": \"0.625rem\", \"space-12\": \"0.75rem\", \"space-14\": \"0.875rem\", \"space-15\": \"0.9375rem\", \"space-16\": \"1rem\", \"space-18\": \"1.125rem\", \"space-20\": \"1.25rem\", \"space-22\": \"1.375rem\", \"space-24\": \"1.5rem\", \"space-25\": \"1.5625rem\", \"space-26\": \"1.625rem\", \"space-28\": \"1.75rem\", \"space-30\": \"1.875rem\", \"space-32\": \"2rem\", \"space-34\": \"2.125rem\", \"space-35\": \"2.1875rem\", \"space-36\": \"2.25rem\", \"space-38\": \"2.375rem\", \"space-40\": \"2.5rem\", \"space-50\": \"3.125rem\", \"space-60\": \"3.75rem\", \"space-80\": \"5rem\", \"space-100\": \"6.25rem\", \"space-160\": \"10rem\", }, }, background: { color: { \"color-dark\": \"#000000\", \"color-primary\": \"#6c5ce7\", \"color-white\": \"#ffffff\", \"color-secondary\": \"#475161\", }, }, position: { zIndex: { \"z-index-default\": \"0\", \"z-index-positive\": \"1\", \"z-index-negative\": \"-1\", \"z-index-deepdive\": \"-99999\", }, }, visibility: { opacity: { \"opacity-0\": \"0%\", \"opacity-10\": \"10%\", \"opacity-20\": \"20%\", \"opacity-40\": \"40%\", \"opacity-50\": \"50%\", \"opacity-80\": \"80%\", \"opacity-100\": \"100%\", }, }, shadow: { style: { default: { x: \"0px\", y: \"1px\", blur: \"3px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.08)\" }, heavy: { x: \"0px\", y: \"2px\", blur: \"3px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.35)\" }, \"light-purple-1px\": { x: \"0px\", y: \"0px\", blur: \"2px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"light-purple-2px\": { x: \"0px\", y: \"2px\", blur: \"2px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"light-purple-3px\": { x: \"0px\", y: \"1px\", blur: \"3px\", spread: \"0px\", color: \"rgba(108, 92, 231, 0.2)\" }, \"light-purple-4px\": { x: \"0px\", y: \"2px\", blur: \"4px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"light-purple-5px\": { x: \"0px\", y: \"5px\", blur: \"5px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"light-purple-10px\": { x: \"0px\", y: \"1px\", blur: \"10px\", spread: \"0px\", color: \"rgba(108, 92, 231, 0.2)\" }, \"light-purple-10px-1\": { x: \"0px\", y: \"8px\", blur: \"10px\", spread: \"1px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"light-purple-14px\": { x: \"0px\", y: \"3px\", blur: \"14px\", spread: \"3px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"light-purple-15px\": { x: \"0px\", y: \"4px\", blur: \"15px\", spread: \"0px\", color: \"rgba(108, 92, 231, 0.2)\" }, \"light-purple-24px\": { x: \"0px\", y: \"16px\", blur: \"24px\", spread: \"2px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"light-purple-30px\": { x: \"0px\", y: \"6px\", blur: \"30px\", spread: \"5px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"light-purple-10px-3\": { x: \"0px\", y: \"8px\", blur: \"10px\", spread: \"3px\", color: \"rgba(108, 92, 231, 0.2)\" }, \"light-purple-38px\": { x: \"0px\", y: \"24px\", blur: \"38px\", spread: \"3px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"light-purple-46px\": { x: \"0px\", y: \"9px\", blur: \"46px\", spread: \"8px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"light-purple-15px-8\": { x: \"0px\", y: \"11px\", blur: \"15px\", spread: \"8px\", color: \"rgba(108, 92, 231, 0.2)\" }, \"black-1px\": { x: \"0px\", y: \"0px\", blur: \"2px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"black-2px\": { x: \"0px\", y: \"2px\", blur: \"2px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"black-3px\": { x: \"0px\", y: \"1px\", blur: \"3px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.2)\" }, \"black-4px\": { x: \"0px\", y: \"2px\", blur: \"4px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"black-5px\": { x: \"0px\", y: \"5px\", blur: \"5px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"black-10px\": { x: \"0px\", y: \"1px\", blur: \"10px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.2)\" }, \"black-10px-1\": { x: \"0px\", y: \"8px\", blur: \"10px\", spread: \"1px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"black-14px\": { x: \"0px\", y: \"3px\", blur: \"14px\", spread: \"3px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"black-15px\": { x: \"0px\", y: \"4px\", blur: \"15px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.2)\" }, \"black-16px\": { x: \"0px\", y: \"16px\", blur: \"24px\", spread: \"2px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"black-30px\": { x: \"0px\", y: \"6px\", blur: \"30px\", spread: \"5px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"black-10px-8\": { x: \"0px\", y: \"8px\", blur: \"10px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.2)\" }, \"black-38px\": { x: \"0px\", y: \"24px\", blur: \"38px\", spread: \"3px\", color: \"rgba(0, 0, 0, 0.14)\" }, \"black-46px\": { x: \"0px\", y: \"9px\", blur: \"46px\", spread: \"8px\", color: \"rgba(0, 0, 0, 0.12)\" }, \"black-15px-2\": { x: \"0px\", y: \"11px\", blur: \"15px\", spread: \"0px\", color: \"rgba(0, 0, 0, 0.2)\" }, }, }, };"
url: "https://www.contentstack.com/studio-react-sdk-design-registry-registerDesignTokens"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## registerDesignTokens

The `registerDesignTokens` method registers design tokens and exposes them as CSS variables. These tokens define consistent visual attributes such as color palettes, spacing scales, and typography settings across components and interfaces.

**Parameters**

| **Name** | **Type** | **Description** |
|---|---|---|
| `designTokens` (required) | `DesignTokensInput` | Object containing your token groups and values. |
| `options` | `Partial<DesignTokensOptionsInput>` | Optional configuration object for advanced token registration behavior. |

**Returns**

Type      `DesignTokens`

A normalized object reflecting the registered token groups and their corresponding CSS variables.

Below is an outline of supported tokens:

#### Tokens Configuration

Below is an outline of supported tokens:

##### Global Tokens

Global tokens define high-level, project-wide primitives that serve as foundational values for other token categories.

**Example**

```
{
  colorTokens: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8"
  },
  spaceTokens: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "3rem"
  }
}
```

##### Size Tokens

Size tokens define base sizing primitives and common dimensional presets for consistent layout and spacing.

**Example**

```
{
  size: {
    tokens: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "32px",
      xl: "64px"
    },
    width: {
      "w-full": "100%",
      "w-auto": "auto",
      "w-screen": "100vw"
    },
    height: {
      "h-full": "100%",
      "h-auto": "auto",
      "h-screen": "100vh"
    },
    minWidth: {
      "min-w-0": "0px",
      "min-w-full": "100%"
    },
    minHeight: {
      "min-h-0": "0px",
      "min-h-full": "100%"
    },
    maxWidth: {
      "max-w-xs": "20rem",
      "max-w-sm": "24rem",
      "max-w-md": "28rem"
    },
    maxHeight: {
      "max-h-32": "8rem",
      "max-h-64": "16rem"
    }
  }
}
```

##### Spacing Tokens

Spacing tokens define values for gaps, margins, paddings, and standardized spacing styles to ensure consistent layout structure.

**Example**

```
{
  spacing: {
    tokens: {
      "space-0": "0",
      "space-1": "0.25rem",
      "space-2": "0.5rem",
      "space-4": "1rem",
      "space-8": "2rem"
    },
    margin: {
      "m-0": "0",
      "m-1": "0.25rem",
      "m-auto": "auto"
    },
    padding: {
      "p-0": "0",
      "p-1": "0.25rem",
      "p-4": "1rem"
    },
    style: {
      card: {
        margin: "1rem",
        padding: "1.5rem"
      }
    }
  }
}
```

##### Typography Tokens

Typography tokens define text-related properties such as color, weight, size, line height, letter spacing, and typographic styles used across the interface.

**Example**

```
{
  typography: {
    color: {
      "text-primary": "#007bff",
      "text-secondary": "#6c757d",
      "text-muted": "#6c757d"
    },
    fontWeight: {
      "font-light": 300,
      "font-normal": 400,
      "font-medium": 500,
      "font-semibold": 600,
      "font-bold": 700
    },
    fontSize: {
      "text-xs": "0.75rem",
      "text-sm": "0.875rem",
      "text-base": "1rem",
      "text-lg": "1.125rem",
      "text-xl": "1.25rem"
    },
    lineHeight: {
      "leading-none": 1,
      "leading-tight": 1.25,
      "leading-normal": 1.5,
      "leading-relaxed": 1.75
    },
    letterSpacing: {
      "tracking-tighter": "-0.05em",
      "tracking-tight": "-0.025em",
      "tracking-normal": "0em",
      "tracking-wide": "0.025em"
    },
    style: {
      heading: {
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        fontSize: "1.5rem",
        lineHeight: 1.2,
        letterSpacing: "-0.025em"
      }
    }
  }
}
```

##### Background Tokens

Background tokens define background colors and reusable background styles to ensure visual consistency across components and sections.

**Example**

```
{
  background: {
    color: {
      "bg-primary": "#007bff",
      "bg-secondary": "#6c757d",
      "bg-light": "#f8f9fa"
    },
    style: {
      "gradient-primary": {
        type: "linear-gradient",
        angle: 135,
        stops: ["#667eea", "#764ba2"]
      },
      "gradient-radial": {
        type: "radial-gradient",
        position: "center",
        stops: ["#f093fb", "#f5576c"]
      },
      "hero-image": {
        type: "image",
        url: "/images/hero-bg.jpg",
        size: "cover",
        repeat: "no-repeat",
        align: "center"
      }
    }
  }
}
```

##### Border Tokens

Border tokens define border colors, radii, and border style configurations for consistent component framing.

**Example**

```
{
  border: {
    color: {
      "border-primary": "#007bff",
      "border-secondary": "#6c757d",
      "border-light": "#dee2e6"
    },
    radius: {
      "rounded-none": "0",
      "rounded-sm": "0.125rem",
      "rounded": "0.25rem",
      "rounded-md": "0.375rem",
      "rounded-lg": "0.5rem",
      "rounded-full": "9999px"
    },
    style: {
      button: {
        style: "solid",
        width: "2px",
        color: "#007bff",
        radius: "0.375rem"
      },
      card: {
        style: "solid",
        width: "1px",
        color: "#dee2e6",
        radius: "0.5rem"
      }
    }
  }
}
```

##### Shadow Tokens

Shadow tokens define shadow colors and predefined shadow presets to create depth and elevation in the interface.

**Example**

```
{
  shadow: {
    color: {
      "shadow-light": "rgba(0, 0, 0, 0.1)",
      "shadow-medium": "rgba(0, 0, 0, 0.15)",
      "shadow-dark": "rgba(0, 0, 0, 0.25)"
    },
    style: {
      sm: {
        x: "0",
        y: "1px",
        blur: "2px",
        spread: "0",
        color: "rgba(0, 0, 0, 0.05)"
      },
      md: {
        x: "0",
        y: "4px",
        blur: "6px",
        spread: "-1px",
        color: "rgba(0, 0, 0, 0.1)"
      },
      lg: {
        x: "0",
        y: "10px",
        blur: "15px",
        spread: "-3px",
        color: "rgba(0, 0, 0, 0.1)"
      }
    }
  }
}
```

##### Transform Tokens

Transform tokens define reusable transform configurations, such as scaling, rotation, and translation, to maintain consistent motion and layout behavior.

**Example**

```
{
  transform: {
    style: {
      "hover-lift": {
        translateY: "-2px",
        scaleX: "1.02",
        scaleY: "1.02"
      },
      "rotate-45": {
        rotateZ: "45deg"
      },
      "skew-x": {
        skewX: "10deg"
      }
    }
  }
}
```

##### Effects Tokens

Effects tokens define reusable visual effect configurations, such as filters and blurs, to enhance the appearance of UI elements consistently.

**Example**

```
{
  effects: {
    filter: {
      "blur-sm": "blur(4px)",
      "blur": "blur(8px)",
      "blur-md": "blur(12px)",
      "brightness-75": "brightness(0.75)",
      "brightness-90": "brightness(0.9)",
      "contrast-125": "contrast(1.25)"
    }
  }
}
```

##### Position and Layout Tokens

Position and layout tokens define layering properties and spatial configurations to control element stacking and structural layout across the interface.

**Example**

```
{
  position: {
    zIndex: {
      "z-0": "0",
      "z-10": "10",
      "z-20": "20",
      "z-30": "30",
      "z-40": "40",
      "z-50": "50"
    },
    position: {
      "static": "static",
      "relative": "relative",
      "absolute": "absolute",
      "fixed": "fixed",
      "sticky": "sticky"
    }
  },
  layout: {
    gap: {
      "gap-0": "0",
      "gap-1": "0.25rem",
      "gap-2": "0.5rem",
      "gap-4": "1rem",
      "gap-8": "2rem"
    }
  }
}
```

##### Visibility Tokens

Visibility tokens define opacity and visibility levels to manage element transparency and display behavior consistently.

**Example**

```
{
  visibility: {
    opacity: {
      "opacity-0": "0%",
      "opacity-25": "25%",
      "opacity-50": "50%",
      "opacity-75": "75%",
      "opacity-100": "100%"
    }
  }
}
```

##### Overflow Tokens

Overflow tokens define scrolling and clipping behaviors to control how content is displayed when it exceeds its container boundaries.

**Example**

```
{
  overflow: {
    style: {
      "scroll": "scroll",
      "auto": "auto",
      "hidden": "hidden",
      "visible": "visible",
      "clip": "clip"
    }
  }
}
```

#### registerDesignTokens Optional Configuration Objects

The following parameters of the `registerDesignTokens` method are optional configuration objects that define how tokens are processed and which values are permitted.

##### allowDefaultDesignTokens

The `allowDefaultDesignTokens` option determines whether to merge custom design tokens with built-in defaults (`true`) or use only the custom tokens provided (`false`).

**Use**

Set `true` to inherit sensible defaults, or set `false` for a fully bespoke system.

**Type:** boolean

**Example**

```
// Include built-in tokens (recommended for most use cases)
const tokens = registerDesignTokens({
  colorTokens: {
    brand: "#ff6b6b",
    accent: "#4ecdc4"
  }
}, {
  allowDefaultDesignTokens: true
});

// Use only custom tokens
const customTokens = registerDesignTokens({
  colorTokens: {
    brand: "#ff6b6b",
    accent: "#4ecdc4"
  }
}, {
  allowDefaultDesignTokens: false
});
```

##### allowedValuesLevel

The `allowedValuesLevel` option governs the level of control authors have when selecting or inputting values in Studio.

**Use**

- `dynamic`: Most restrictive option. Only allows linking design properties through data sources. Ideal when design values are strictly managed in the CMS.
- `tokens`: Moderate flexibility. Allows both predefined design tokens and data binding, but does not allow arbitrary custom values.
- `arbitrary`: Most flexible option. Permits the use of tokens, data binding, and free-form custom values entered manually.

**Type:** tokens, dynamic, and arbitrary

**Example**

```
// Development environment - maximum flexibility
const devTokens = registerDesignTokens({
  colorTokens: {
    brand: "#ff6b6b",
    accent: "#4ecdc4"
  },
  spacing: {
    tokens: {
      "space-custom": "2rem"
    }
  }
}, {
  allowDefaultDesignTokens: true,
  allowedValuesLevel: "arbitrary"
});

// Production environment - strict consistency
const prodTokens = registerDesignTokens({
  colorTokens: {
    brand: "#ff6b6b",
    accent: "#4ecdc4"
  }
}, {
  allowDefaultDesignTokens: false,
  allowedValuesLevel: "dynamic"
});

// Hybrid approach - built-ins with moderate flexibility
const hybridTokens = registerDesignTokens({
  colorTokens: {
    brand: "#ff6b6b"
  }
}, {
  allowDefaultDesignTokens: true,
  allowedValuesLevel: "arbitrary"
});
```

#### Default Design Tokens

The `DEFAULT_DESIGN_TOKENS` object provides a predefined set of design tokens that establish consistent styling across components. It includes tokens for colors, typography, spacing, layout, borders, shadows, and other visual properties. These tokens act as reusable values that help maintain design consistency and simplify UI customization in Studio.

```
const DEFAULT_DESIGN_TOKENS = {
  colorTokens: {
    "color-dark": "#000000",
    "color-primary": "#6c5ce7",
    "color-white": "#ffffff",
    "color-secondary": "#475161",
  },

  size: {
    width: SIZE_TOKENS,
    height: SIZE_TOKENS,
    minWidth: SIZE_TOKENS,
    minHeight: SIZE_TOKENS,
    maxWidth: SIZE_TOKENS,
  },

  layout: {
    gap: {
      "gap-2": "0.125rem",
      "gap-4": "0.25rem",
      "gap-5": "0.3125rem",
      "gap-6": "0.375rem",
      "gap-8": "0.5rem",
      "gap-10": "0.625rem",
      "gap-12": "0.75rem",
      "gap-14": "0.875rem",
      "gap-15": "0.9375rem",
      "gap-16": "1rem",
    },
  },

  typography: {
    fontSize: {
      "font-size-sm": "0.75rem",
      "font-size-md": "0.875rem",
      "font-size-base": "1rem",
      "font-size-lg": "1.25rem",
      "font-size-xl": "1.75rem",
      "font-size-2xl": "2.125rem",
    },
    fontWeight: {
      "font-regular": 400,
      "font-medium": 500,
      "font-semi-bold": 600,
      "font-bold": 700,
      "font-extra-bold": 800,
    },
    lineHeight: {
      "line-height-default": 1.5,
      "line-height-sm": 1.25,
      "line-height-xs": 1,
    },
    color: {
      "color-dark": "#000000",
      "color-primary": "#6c5ce7",
      "color-white": "#ffffff",
      "color-secondary": "#475161",
    },
  },

  border: {
    radius: {
      "border-radius-xs": "2px",
      "border-radius-sm": "4px",
      "border-radius-md": "6px",
      "border-radius-lg": "8px",
      "border-radius-xl": "10px",
      "border-radius-50": "50%",
      "border-radius-full": "9999px",
    },
    color: {
      "color-lighter": "#f5f5f5",
      "color-light": "#a9b6cb",
      "color-base": "#647696",
      "color-dark": "#475161",
      "color-link": "#6c5ce7",
      "color-focus": "#edf1f7",
      "color-warning": "#d62400",
      "color-success": "#007a52",
    },
  },

  spacing: {
    tokens: {
      "space-2": "0.125rem",
      "space-4": "0.25rem",
      "space-5": "0.3125rem",
      "space-6": "0.375rem",
      "space-8": "0.5rem",
      "space-10": "0.625rem",
      "space-12": "0.75rem",
      "space-14": "0.875rem",
      "space-15": "0.9375rem",
      "space-16": "1rem",
      "space-18": "1.125rem",
      "space-20": "1.25rem",
      "space-22": "1.375rem",
      "space-24": "1.5rem",
      "space-25": "1.5625rem",
      "space-26": "1.625rem",
      "space-28": "1.75rem",
      "space-30": "1.875rem",
      "space-32": "2rem",
      "space-34": "2.125rem",
      "space-35": "2.1875rem",
      "space-36": "2.25rem",
      "space-38": "2.375rem",
      "space-40": "2.5rem",
      "space-50": "3.125rem",
      "space-60": "3.75rem",
      "space-80": "5rem",
      "space-100": "6.25rem",
      "space-160": "10rem",
    },
  },

  background: {
    color: {
      "color-dark": "#000000",
      "color-primary": "#6c5ce7",
      "color-white": "#ffffff",
      "color-secondary": "#475161",
    },
  },

  position: {
    zIndex: {
      "z-index-default": "0",
      "z-index-positive": "1",
      "z-index-negative": "-1",
      "z-index-deepdive": "-99999",
    },
  },

  visibility: {
    opacity: {
      "opacity-0": "0%",
      "opacity-10": "10%",
      "opacity-20": "20%",
      "opacity-40": "40%",
      "opacity-50": "50%",
      "opacity-80": "80%",
      "opacity-100": "100%",
    },
  },

  shadow: {
    style: {
      default: { x: "0px", y: "1px", blur: "3px", spread: "0px", color: "rgba(0, 0, 0, 0.08)" },
      heavy: { x: "0px", y: "2px", blur: "3px", spread: "0px", color: "rgba(0, 0, 0, 0.35)" },
      "light-purple-1px": { x: "0px", y: "0px", blur: "2px", spread: "0px", color: "rgba(0, 0, 0, 0.14)" },
      "light-purple-2px": { x: "0px", y: "2px", blur: "2px", spread: "0px", color: "rgba(0, 0, 0, 0.12)" },
      "light-purple-3px": { x: "0px", y: "1px", blur: "3px", spread: "0px", color: "rgba(108, 92, 231, 0.2)" },
      "light-purple-4px": { x: "0px", y: "2px", blur: "4px", spread: "0px", color: "rgba(0, 0, 0, 0.14)" },
      "light-purple-5px": { x: "0px", y: "5px", blur: "5px", spread: "0px", color: "rgba(0, 0, 0, 0.12)" },
      "light-purple-10px": { x: "0px", y: "1px", blur: "10px", spread: "0px", color: "rgba(108, 92, 231, 0.2)" },
      "light-purple-10px-1": { x: "0px", y: "8px", blur: "10px", spread: "1px", color: "rgba(0, 0, 0, 0.14)" },
      "light-purple-14px": { x: "0px", y: "3px", blur: "14px", spread: "3px", color: "rgba(0, 0, 0, 0.12)" },
      "light-purple-15px": { x: "0px", y: "4px", blur: "15px", spread: "0px", color: "rgba(108, 92, 231, 0.2)" },
      "light-purple-24px": { x: "0px", y: "16px", blur: "24px", spread: "2px", color: "rgba(0, 0, 0, 0.14)" },
      "light-purple-30px": { x: "0px", y: "6px", blur: "30px", spread: "5px", color: "rgba(0, 0, 0, 0.12)" },
      "light-purple-10px-3": { x: "0px", y: "8px", blur: "10px", spread: "3px", color: "rgba(108, 92, 231, 0.2)" },
      "light-purple-38px": { x: "0px", y: "24px", blur: "38px", spread: "3px", color: "rgba(0, 0, 0, 0.14)" },
      "light-purple-46px": { x: "0px", y: "9px", blur: "46px", spread: "8px", color: "rgba(0, 0, 0, 0.12)" },
      "light-purple-15px-8": { x: "0px", y: "11px", blur: "15px", spread: "8px", color: "rgba(108, 92, 231, 0.2)" },
      "black-1px": { x: "0px", y: "0px", blur: "2px", spread: "0px", color: "rgba(0, 0, 0, 0.14)" },
      "black-2px": { x: "0px", y: "2px", blur: "2px", spread: "0px", color: "rgba(0, 0, 0, 0.12)" },
      "black-3px": { x: "0px", y: "1px", blur: "3px", spread: "0px", color: "rgba(0, 0, 0, 0.2)" },
      "black-4px": { x: "0px", y: "2px", blur: "4px", spread: "0px", color: "rgba(0, 0, 0, 0.14)" },
      "black-5px": { x: "0px", y: "5px", blur: "5px", spread: "0px", color: "rgba(0, 0, 0, 0.12)" },
      "black-10px": { x: "0px", y: "1px", blur: "10px", spread: "0px", color: "rgba(0, 0, 0, 0.2)" },
      "black-10px-1": { x: "0px", y: "8px", blur: "10px", spread: "1px", color: "rgba(0, 0, 0, 0.14)" },
      "black-14px": { x: "0px", y: "3px", blur: "14px", spread: "3px", color: "rgba(0, 0, 0, 0.12)" },
      "black-15px": { x: "0px", y: "4px", blur: "15px", spread: "0px", color: "rgba(0, 0, 0, 0.2)" },
      "black-16px": { x: "0px", y: "16px", blur: "24px", spread: "2px", color: "rgba(0, 0, 0, 0.14)" },
      "black-30px": { x: "0px", y: "6px", blur: "30px", spread: "5px", color: "rgba(0, 0, 0, 0.12)" },
      "black-10px-8": { x: "0px", y: "8px", blur: "10px", spread: "0px", color: "rgba(0, 0, 0, 0.2)" },
      "black-38px": { x: "0px", y: "24px", blur: "38px", spread: "3px", color: "rgba(0, 0, 0, 0.14)" },
      "black-46px": { x: "0px", y: "9px", blur: "46px", spread: "8px", color: "rgba(0, 0, 0, 0.12)" },
      "black-15px-2": { x: "0px", y: "11px", blur: "15px", spread: "0px", color: "rgba(0, 0, 0, 0.2)" },
    },
  },
};
```
