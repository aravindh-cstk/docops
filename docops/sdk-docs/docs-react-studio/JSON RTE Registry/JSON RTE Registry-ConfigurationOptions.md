---
title: "Configuration Options"
description: "The configuration options let developers control how JSON RTE content is converted to HTML. You can define custom elements, text wrappers, and allow non-standard types to extend rendering behavior. customElementTypes ( `IJsonToHtmlElementTags` ) The `customElementTypes` option defines the block-level elements you want to support in rich text. Function Signature Parameters Name Type Description `attrs` `string` HTML attributes represented as a string. `child` `string` The rendered inner HTML content of the element. `jsonBlock` `object` The full JSON block object. Use `jsonBlock.attrs` to access attributes. `extraProps` `object` (optional) Additional context props passed from the rendering environment. customElementTypes: { // Custom info box component infoBox: (attrs, child, jsonBlock) => { const title = jsonBlock.attrs?.title || 'Information'; const icon = jsonBlock.attrs?.icon || 'ℹ️'; return `<div class=\"info-box\" style=\"border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;\"> <div style=\"display: flex; align-items: center; margin-bottom: 0.5rem;\"> <span style=\"font-size: 1.2rem; margin-right: 0.5rem;\">${icon}</span> <strong>${title}</strong> </div> <div>${child}</div> </div>`; }, // Custom quote component quote: (attrs, child, jsonBlock) => { const author = jsonBlock.attrs?.author || 'Unknown'; const source = jsonBlock.attrs?.source || ''; return `<blockquote class=\"custom-quote\" style=\"border-left: 4px solid #007bff; padding-left: 1rem; margin: 1rem 0; font-style: italic;\"> <div>${child}</div> <footer style=\"margin-top: 0.5rem; font-size: 0.9rem; color: #666;\"> — ${author}${source ?`, ${source}`: ''} </footer> </blockquote>`; } } customTextWrapper ( `IJsonToHtmlTextTags` ) The `customTextWrapper` option defines inline text wrappers or marks used for applying formatting and effects to text within JSON RTE content. Use Case: Enables custom styles such as highlights, keyboard inputs, or branded inline elements in rich-text fields. Function Signature (child: any, value: any) => string Parameters Name Type Description `child` `string` The text content to wrap. `value` `any` The attribute value applied to the wrapper (for example, a color code, style, or effect). Example customTextWrapper: { // Highlight text with custom colors highlight: (child, value) => { const colors = { yellow: '#ffeb3b', green: '#4caf50', blue: '#2196f3', red: '#f44336' }; const color = colors\\[value\\] || value; return `<span class=\"highlight\" style=\"background-color: ${color}; padding: 2px 4px; border-radius: 3px;\">${child}</span>`; }, // Custom text styling style: (child, value) => { const styles = { bold: 'font-weight: bold;', italic: 'font-style: italic;', underline: 'text-decoration: underline;', strikethrough: 'text-decoration: line-through;' }; const style = styles\\[value\\] || ''; return `<span style=\"${style}\">${child}</span>`; }, // Custom font sizes fontSize: (child, value) => { return `<span style=\"font-size: ${value}px;\">${child}</span>`; } } allowNonStandardTypes ( `boolean` ) The `allowNonStandardTypes` option enables the use of non-standard element types in JSON RTE content. Use Case: Custom Components: Add branded elements such as info boxes, callouts, or product cards. Enhanced Text: Format text with highlights, colors, or special fonts. Interactive Elements: Insert interactive components, like buttons or widgets, into rich text. Brand Consistency: Ensure rich text content aligns with your design system and styling standards. Real World Example import { registerJsonRte } from '@contentstack/studio-react'; // Register custom JSON RTE components for a marketing website registerJsonRte({ customElementTypes: { // Product showcase within rich text productShowcase: (attrs, child, jsonBlock) => { const product = jsonBlock.attrs; return `<div class=\"product-showcase\" style=\" border: 2px solid #e0e0e0; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); \"> <div style=\"display: flex; align-items: center; gap: 1rem;\"> <img src=\"${product.image || '/placeholder.jpg'}\" alt=\"${product.name || 'Product'}\" style=\"width: 80px; height: 80px; border-radius: 8px; object-fit: cover;\"> <div> <h4 style=\"margin: 0 0 0.5rem 0; color: #2c3e50;\">${product.name || 'Product Name'}</h4> <p style=\"margin: 0 0 0.5rem 0; color: #7f8c8d;\">${product.description || 'Product description'}</p> <div style=\"font-size: 1.25rem; font-weight: bold; color: #e74c3c;\"> $${product.price || '0.00'} </div> </div> </div> ${child} </div>`; }, // Testimonial block testimonial: (attrs, child, jsonBlock) => { const testimonial = jsonBlock.attrs; return `<div class=\"testimonial\" style=\" background-color: #f8f9fa; border-left: 4px solid #007bff; padding: 1.5rem; margin: 1.5rem 0; border-radius: 0 8px 8px 0; \"> <div style=\"font-style: italic; margin-bottom: 1rem; color: #495057;\"> \"${child}\" </div> <div style=\"display: flex; align-items: center; gap: 0.5rem;\"> <img src=\"${testimonial.avatar || '/default-avatar.jpg'}\" alt=\"${testimonial.author || 'Author'}\" style=\"width: 40px; height: 40px; border-radius: 50%; object-fit: cover;\"> <div> <strong style=\"color: #2c3e50;\">${testimonial.author || 'Author Name'}</strong> ${testimonial.title ?`<br><span style=\"color: #6c757d; font-size: 0.9rem;\">${testimonial.title}</span>`: ''} </div> </div> </div>`; }, // Code block with syntax highlighting codeBlock: (attrs, child, jsonBlock) => { const language = jsonBlock.attrs?.language || 'text'; return `<div class=\"code-block\" style=\" background-color: #2d3748; border-radius: 8px; padding: 1rem; margin: 1rem 0; overflow-x: auto; \"> <div style=\" color: #e2e8f0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; font-size: 0.9rem; line-height: 1.5; \"> <div style=\" color: #a0aec0; border-bottom: 1px solid #4a5568; padding-bottom: 0.5rem; margin-bottom: 1rem; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; \"> ${language} </div> <pre style=\"margin: 0; white-space: pre-wrap;\">${child}</pre> </div> </div>`; } }, customTextWrapper: { // Brand colors for text brandColor: (child, value) => { const brandColors = { primary: '#007bff', secondary: '#6c757d', success: '#28a745', danger: '#dc3545', warning: '#ffc107', info: '#17a2b8' }; const color = brandColors\\[value\\] || value; return `<span style=\"color: ${color}; font-weight: 500;\">${child}</span>`; }, // Custom text effects textEffect: (child, value) => { const effects = { glow: 'text-shadow: 0 0 10px currentColor;', shadow: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.3);', outline: 'text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;' }; const effect = effects\\[value\\] || ''; return `<span style=\"${effect}\">${child}</span>`; } }, allowNonStandardTypes: true });"
url: "https://www.contentstack.com/react-studio-sdk-json-rte-registry-configuration-options"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Configuration Options

The configuration options let developers control how JSON RTE content is converted to HTML. You can define custom elements, text wrappers, and allow non-standard types to extend rendering behavior.

#### customElementTypes (IJsonToHtmlElementTags)

The `customElementTypes` option defines the block-level elements you want to support in rich text.

**Function Signature**

**Parameters**

| **Name** | **Type** | **Description** |
|---|---|---|
| `attrs` | `string` | HTML attributes represented as a string. |
| `child` | `string` | The rendered inner HTML content of the element. |
| `jsonBlock` | `object` | The full JSON block object. Use `jsonBlock.attrs` to access attributes. |
| `extraProps` | `object` (optional) | Additional context props passed from the rendering environment. |

```
customElementTypes: {
  // Custom info box component
  infoBox: (attrs, child, jsonBlock) => {
    const title = jsonBlock.attrs?.title || 'Information';
    const icon = jsonBlock.attrs?.icon || 'ℹ️';
    return `
<div class="info-box" style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
  <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
    <span style="font-size: 1.2rem; margin-right: 0.5rem;">${icon}</span>
    <strong>${title}</strong>
  </div>
  <div>${child}</div>
</div>
`;
  },

  // Custom quote component
  quote: (attrs, child, jsonBlock) => {
    const author = jsonBlock.attrs?.author || 'Unknown';
    const source = jsonBlock.attrs?.source || '';
    return `
<blockquote class="custom-quote" style="border-left: 4px solid #007bff; padding-left: 1rem; margin: 1rem 0; font-style: italic;">
  <div>${child}</div>
  <footer style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
    — ${author}${source ? `, ${source}` : ''}
  </footer>
</blockquote>
`;
  }
}
```

#### customTextWrapper (IJsonToHtmlTextTags)

The `customTextWrapper` option defines inline text wrappers or marks used for applying formatting and effects to text within JSON RTE content.

**Use Case:** Enables custom styles such as highlights, keyboard inputs, or branded inline elements in rich-text fields.

**Function Signature**

```
(child: any, value: any) => string
```

**Parameters**

| **Name** | **Type** | **Description** |
|---|---|---|
| `child` | `string` | The text content to wrap. |
| `value` | `any` | The attribute value applied to the wrapper (for example, a color code, style, or effect). |

**Example**

```
customTextWrapper: {
  // Highlight text with custom colors
  highlight: (child, value) => {
    const colors = {
      yellow: '#ffeb3b',
      green: '#4caf50',
      blue: '#2196f3',
      red: '#f44336'
    };
    const color = colors[value] || value;
    return `<span class="highlight" style="background-color: ${color}; padding: 2px 4px; border-radius: 3px;">${child}</span>`;
  },

  // Custom text styling
  style: (child, value) => {
    const styles = {
      bold: 'font-weight: bold;',
      italic: 'font-style: italic;',
      underline: 'text-decoration: underline;',
      strikethrough: 'text-decoration: line-through;'
    };
    const style = styles[value] || '';
    return `<span style="${style}">${child}</span>`;
  },

  // Custom font sizes
  fontSize: (child, value) => {
    return `<span style="font-size: ${value}px;">${child}</span>`;
  }
}
```

#### allowNonStandardTypes (boolean)

The `allowNonStandardTypes` option enables the use of non-standard element types in JSON RTE content.

**Use Case:**

- **Custom Components:** Add branded elements such as info boxes, callouts, or product cards.
- **Enhanced Text:** Format text with highlights, colors, or special fonts.
- **Interactive Elements:** Insert interactive components, like buttons or widgets, into rich text.
- **Brand Consistency:** Ensure rich text content aligns with your design system and styling standards.

**Real World Example**

```
import { registerJsonRte } from '@contentstack/studio-react';

// Register custom JSON RTE components for a marketing website
registerJsonRte({
  customElementTypes: {
    // Product showcase within rich text
    productShowcase: (attrs, child, jsonBlock) => {
      const product = jsonBlock.attrs;
      return `
<div class="product-showcase" style="
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
">
  <div style="display: flex; align-items: center; gap: 1rem;">
    <img src="${product.image || '/placeholder.jpg'}"
      alt="${product.name || 'Product'}"
      style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover;">
    <div>
      <h4 style="margin: 0 0 0.5rem 0; color: #2c3e50;">${product.name || 'Product Name'}</h4>
      <p style="margin: 0 0 0.5rem 0; color: #7f8c8d;">${product.description || 'Product description'}</p>
      <div style="font-size: 1.25rem; font-weight: bold; color: #e74c3c;">
        $${product.price || '0.00'}
      </div>
    </div>
  </div>
  ${child}
</div>
`;
    },

    // Testimonial block
    testimonial: (attrs, child, jsonBlock) => {
      const testimonial = jsonBlock.attrs;
      return `
<div class="testimonial" style="
  background-color: #f8f9fa;
  border-left: 4px solid #007bff;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
">
  <div style="font-style: italic; margin-bottom: 1rem; color: #495057;">
    "${child}"
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <img src="${testimonial.avatar || '/default-avatar.jpg'}"
      alt="${testimonial.author || 'Author'}"
      style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
    <div>
      <strong style="color: #2c3e50;">${testimonial.author || 'Author Name'}</strong>
      ${testimonial.title ? `<br><span style="color: #6c757d; font-size: 0.9rem;">${testimonial.title}</span>` : ''}
    </div>
  </div>
</div>
`;
    },

    // Code block with syntax highlighting
    codeBlock: (attrs, child, jsonBlock) => {
      const language = jsonBlock.attrs?.language || 'text';
      return `
<div class="code-block" style="
  background-color: #2d3748;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
">
  <div style="
    color: #e2e8f0;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
  ">
    <div style="
      color: #a0aec0;
      border-bottom: 1px solid #4a5568;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    ">
      ${language}
    </div>
    <pre style="margin: 0; white-space: pre-wrap;">${child}</pre>
  </div>
</div>
`;
    }
  },

  customTextWrapper: {
    // Brand colors for text
    brandColor: (child, value) => {
      const brandColors = {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
      };
      const color = brandColors[value] || value;
      return `<span style="color: ${color}; font-weight: 500;">${child}</span>`;
    },

    // Custom text effects
    textEffect: (child, value) => {
      const effects = {
        glow: 'text-shadow: 0 0 10px currentColor;',
        shadow: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.3);',
        outline: 'text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;'
      };
      const effect = effects[value] || '';
      return `<span style="${effect}">${child}</span>`;
    }
  },

  allowNonStandardTypes: true
});
```
