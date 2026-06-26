---
title: "Props Configuration"
description: "The `props` object defines configurable properties for your component, with each prop offering options that enhance the editing experience in Studio. Common prop options include: `type:` Data type of the prop (required). `displayName:` Label shown in the editor. `defaultValue:` Initial value when the component is first added. `helpText:` Helper text to guide content creators. Supported Prop Types String Prop ( `\"string\"` ) The `string` prop defines a text input field for capturing short to long text content. Options `control` : `\"default\"` (single-line), `\"large\"` (multi-line textarea), `\"markdown\"` (markdown editor) `placeholder` : Hint text when empty. `defaultValue` : Initial text value. `helpText` : Guidance for authors. Use Cases: Titles, descriptions, names, URLs, or custom text fields. Example Boolean Prop ( `\"boolean\"` ) The `boolean` prop defines a toggle switch for capturing true or false values. Options `defaultValue` : Initial state ( `true` or `false` ). `helpText` : Guidance for authors. Use Cases: Show/hide elements, enable/disable features, toggle states. Example showHeader: { type: \"boolean\", displayName: \"Show Header\", defaultValue: true, helpText: \"Toggle the visibility of the page header\" } Number Prop ( `\"number\"` ) The `number` prop defines a numeric input field for capturing integers and decimal values. Options `defaultValue` : Initial numeric value. `helpText` : Guidance for authors. `control` : `\"default\"` (number field) or `\"slider\"` (number slider). `max` : The maximum allowed value. `min` : The minimum allowed value. `step` : The increment or decrement step size when adjusting the value. Use Cases: Counts, dimensions, ratings, percentages, or quantity limits. Example maxItems: { type: \"number\", displayName: \"Maximum Items\", defaultValue: 10, helpText: \"Maximum number of items to display\" } Choice Prop ( `\"choice\"` ) The `choice` prop defines a selection input from a predefined list of options. Options `options` : An array of available options. `defaultValue` : Selected option(s) (must be an array). `multiSelect` : Controls whether multiple values can be selected. `control` : `\"radio\"` or `\"dropdown\"` . Use Cases: Variants, themes, sizes, categories, or status fields. Example buttonStyle: { type: \"choice\", displayName: \"Button Style\", options: [\"primary\", \"secondary\", \"outline\", \"ghost\"], defaultValue: [\"primary\"], control: \"radio\", helpText: \"Choose the visual style of the button\" } Date String Prop ( `\"datestring\"` ) The `datestring` prop defines a picker input for selecting date and time values. Options `defaultValue` : ISO date string. `helpText` : Guidance for authors. Use Cases: Publication dates, event dates, expirations, or timestamps. Example publishDate: { type: \"datestring\", displayName: \"Publication Date\", defaultValue: new Date().toISOString(), helpText: \"When this content should be published\" } Href Prop ( `\"href\"` ) The `href` prop defines a URL input field for navigation and linking purposes. Options `defaultValue` : Initial URL value. `helpText` : Guidance for authors. Use Cases: Navigation links, external resources, or internal routing. Example learnMoreUrl: { type: \"href\", displayName: \"Learn More Link\", defaultValue: \"https://example.com/learn-more\", helpText: \"URL for the learn more page\" } Image URL Prop ( `\"imageurl\"` ) The `imageurl` prop defines a specialized URL input field for specifying image sources. Options `defaultValue` : Initial image URL. `helpText` : Guidance for authors. Use Cases: Image sources, backgrounds, banners, or icons. Example heroImage: { type: \"imageurl\", displayName: \"Hero Image\", defaultValue: \"https://example.com/hero.jpg\", helpText: \"Main image for the hero section\" } Object Prop ( `\"object\"` ) The `object` prop defines a nested configuration object based on a custom schema. Options `defaultValue` : Initial object. `properties` : Schema definition for the object’s structure. Use Cases: Theme settings, configuration objects, or grouped options. Example themeSettings: { type: \"object\", displayName: \"Theme Settings\", defaultValue: { color: \"blue\", fontSize: \"16px\" }, properties: { color: { type: \"string\", displayName: \"Primary Color\" }, fontSize: { type: \"string\", displayName: \"Font Size\" } } } Array Prop ( `\"array\"` ) The `array` prop defines a collection of values or objects. Options `defaultValue` : Initial array. `items` : Defines the schema of each item in the array. `helpText` : Guidance for authors. Use Cases: Lists, tags, categories, or repeated items. Example tagList: { type: \"array\", displayName: \"Tags\", items: { type: \"string\" }, defaultValue: [\"1\", \"2\", \"3\"] } Slot Prop ( `\"slot\"` ) The `slot` prop defines a container placeholder for child components or dynamic content. Options `displayName` : Label shown in the editor. `helpText` : Guidance for authors. Use Cases: Flexible layouts, drag-and-drop child components. Example mainSlot: { type: \"slot\", displayName: \"Main Slot\", helpText: \"Container for nested components\" } JSON RTE Prop ( `\"json_rte\"` ) The `json_rte` prop defines a Rich Text Editor field for structured and formatted content. Options `defaultValue` : JSON document structure. `helpText` : Guidance for authors. Use Cases: Formatted text, complex content blocks, long-form descriptions. Example content: { type: \"json_rte\", displayName: \"Main Content\", defaultValue: { type: \"doc\", content: [ { type: \"paragraph\", content: [{ type: \"text\", text: \"Enter your content here...\" }] } ] }, helpText: \"Rich text content with formatting options\" } Any Prop ( `\"any\"` ) The `any` prop defines a flexible data type for dynamic or miscellaneous content. When you mark a prop as `any` , you can link any data to the field from Contentstack. Options `defaultValue` : Initial value (any type). `helpText` : Guidance for authors. Use Cases: Custom data, experimental fields, or dynamic inputs not covered by other prop types. Example customData: { type: \"any\", displayName: \"Custom Data\", defaultValue: null, helpText: \"Store any additional data for this component\" }"
url: "https://www.contentstack.com/react-studio-sdk-component-registry-props-configuration"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Props Configuration

The `props` object defines configurable properties for your component, with each prop offering options that enhance the editing experience in Studio.

Common prop options include:

- `type:` Data type of the prop (required).
- `displayName:` Label shown in the editor.
- `defaultValue:` Initial value when the component is first added.
- `helpText:` Helper text to guide content creators.

**Supported Prop Types**

- **String Prop** (`"string"`)The `string` prop defines a text input field for capturing short to long text content.**Options**
  - `control`: `"default"` (single-line), `"large"` (multi-line textarea), `"markdown"` (markdown editor)
  - `placeholder`: Hint text when empty.
  - `defaultValue`: Initial text value.
  - `helpText`: Guidance for authors.

**Use Cases:** Titles, descriptions, names, URLs, or custom text fields.

**Example**

- **Boolean Prop** (`"boolean"`)The `boolean` prop defines a toggle switch for capturing true or false values.**Options**
  - `defaultValue`: Initial state (`true` or `false`).
  - `helpText`: Guidance for authors.

**Use Cases:** Show/hide elements, enable/disable features, toggle states.

**Example**

```
showHeader: {
  type: "boolean",
  displayName: "Show Header",
  defaultValue: true,
  helpText: "Toggle the visibility of the page header"
}
```

- **Number Prop** (`"number"`)The `number` prop defines a numeric input field for capturing integers and decimal values.**Options**
  - `defaultValue`: Initial numeric value.
  - `helpText`: Guidance for authors.
  - `control`: `"default"` (number field) or `"slider"` (number slider).
  - `max`: The maximum allowed value.
  - `min`: The minimum allowed value.
  - `step`: The increment or decrement step size when adjusting the value.

**Use Cases:** Counts, dimensions, ratings, percentages, or quantity limits.

**Example**

```
maxItems: {
  type: "number",
  displayName: "Maximum Items",
  defaultValue: 10,
  helpText: "Maximum number of items to display"
}
```

- **Choice Prop** (`"choice"`)The `choice` prop defines a selection input from a predefined list of options.**Options**
  - `options`: An array of available options.
  - `defaultValue`: Selected option(s) (must be an array).
  - `multiSelect`: Controls whether multiple values can be selected.
  - `control`: `"radio"` or `"dropdown"`.

**Use Cases:** Variants, themes, sizes, categories, or status fields.

**Example**

```
buttonStyle: {
  type: "choice",
  displayName: "Button Style",
  options: ["primary", "secondary", "outline", "ghost"],
  defaultValue: ["primary"],
  control: "radio",
  helpText: "Choose the visual style of the button"
}
```

- **Date String Prop** (`"datestring"`)The `datestring` prop defines a picker input for selecting date and time values.**Options**
  - `defaultValue`: ISO date string.
  - `helpText`: Guidance for authors.

**Use Cases:** Publication dates, event dates, expirations, or timestamps.

**Example**

```
publishDate: {
  type: "datestring",
  displayName: "Publication Date",
  defaultValue: new Date().toISOString(),
  helpText: "When this content should be published"
}
```

- **Href Prop** (`"href"`)The `href` prop defines a URL input field for navigation and linking purposes.**Options**
  - `defaultValue`: Initial URL value.
  - `helpText`: Guidance for authors.

**Use Cases:** Navigation links, external resources, or internal routing.

**Example**

```
learnMoreUrl: {
  type: "href",
  displayName: "Learn More Link",
  defaultValue: "https://example.com/learn-more",
  helpText: "URL for the learn more page"
}
```

- **Image URL Prop** (`"imageurl"`)The `imageurl` prop defines a specialized URL input field for specifying image sources.**Options**
  - `defaultValue`: Initial image URL.
  - `helpText`: Guidance for authors.

**Use Cases:** Image sources, backgrounds, banners, or icons.

**Example**

```
heroImage: {
  type: "imageurl",
  displayName: "Hero Image",
  defaultValue: "https://example.com/hero.jpg",
  helpText: "Main image for the hero section"
}
```

- **Object Prop** (`"object"`)The `object` prop defines a nested configuration object based on a custom schema.**Options**
  - `defaultValue`: Initial object.
  - `properties`: Schema definition for the object’s structure.

**Use Cases:** Theme settings, configuration objects, or grouped options.

**Example**

```
themeSettings: {
  type: "object",
  displayName: "Theme Settings",
  defaultValue: {
    color: "blue",
    fontSize: "16px"
  },
  properties: {
    color: {
      type: "string",
      displayName: "Primary Color"
    },
    fontSize: {
      type: "string",
      displayName: "Font Size"
    }
  }
}
```

- **Array Prop** (`"array"`)The `array` prop defines a collection of values or objects.**Options**
  - `defaultValue`: Initial array.
  - `items`: Defines the schema of each item in the array.
  - `helpText`: Guidance for authors.

**Use Cases:** Lists, tags, categories, or repeated items.

**Example**

```
tagList: {
  type: "array",
  displayName: "Tags",
  items: {
    type: "string"
  },
  defaultValue: ["1", "2", "3"]
}
```

- **Slot Prop** (`"slot"`)The `slot` prop defines a container placeholder for child components or dynamic content.**Options**
  - `displayName`: Label shown in the editor.
  - `helpText`: Guidance for authors.

**Use Cases:** Flexible layouts, drag-and-drop child components.

**Example**

```
mainSlot: {
  type: "slot",
  displayName: "Main Slot",
  helpText: "Container for nested components"
}
```

- **JSON RTE Prop** (`"json_rte"`)The `json_rte` prop defines a Rich Text Editor field for structured and formatted content.**Options**
  - `defaultValue`: JSON document structure.
  - `helpText`: Guidance for authors.

**Use Cases:** Formatted text, complex content blocks, long-form descriptions.

**Example**

```
content: {
  type: "json_rte",
  displayName: "Main Content",
  defaultValue: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [{ type: "text", text: "Enter your content here..." }]
      }
    ]
  },
  helpText: "Rich text content with formatting options"
}
```

- **Any Prop** (`"any"`)The `any` prop defines a flexible data type for dynamic or miscellaneous content. When you mark a prop as `any`, you can link any data to the field from Contentstack.**Options**
  - `defaultValue`: Initial value (any type).
  - `helpText`: Guidance for authors.

**Use Cases:** Custom data, experimental fields, or dynamic inputs not covered by other prop types.

**Example**

```
customData: {
  type: "any",
  displayName: "Custom Data",
  defaultValue: null,
  helpText: "Store any additional data for this component"
}
```
