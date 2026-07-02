---
title: "registerJsonRte"
description: "The registerJsonRte method registers custom element types (blocks) and text wrappers (inline marks) for JSON RTE content. Use Case: Extend the default rich-text rendering with branded components, custom formatting, and visual effects. Parameters: Name Type Description config IJsonToHtmlOptions Configuration object for custom JSON RTE rendering. import { registerJsonRte } from '@contentstack/studio-react'; registerJsonRte({ customElementTypes: { // Custom block-level elements infoBox: (attrs, child, jsonBlock, extraProps) => { return <div class=\"info-box\" style=\"padding: 1rem; background-color: #e3f2fd; border-left: 4px solid #2196f3;\">${child}</div> ; }, callout: (attrs, child, jsonBlock, extraProps) => { const type = jsonBlock.attrs?.type || 'info'; const colors = { info: '#e3f2fd', warning: '#fff3e0', error: '#ffebee', success: '#e8f5e9' }; return <div class=\"callout callout-${type}\" style=\"padding: 1rem; background-color: ${colors[type]}; border-radius: 4px; margin: 1rem 0;\">${child}</div> ; } }, customTextWrapper: { // Custom inline text formatting highlight: (child, value) => { return <span class=\"highlight\" style=\"background-color: #ffeb3b; padding: 2px 4px;\">${child}</span> ; }, color: (child, value) => { return <span class=\"text-color\" style=\"color: ${value};\">${child}</span> ; }, code: (child, value) => { return <code class=\"inline-code\" style=\"background-color: #f5f5f5; padding: 2px 4px; border-radius: 3px; font-family: monospace;\">${child}</code> ; } }, allowNonStandardTypes: true });"
url: "https://www.contentstack.com/studio-react-sdk-json-rte-registry-registerjsonrte"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## registerJsonRte

The `registerJsonRte` method registers custom element types (blocks) and text wrappers (inline marks) for JSON RTE content.

**Use Case:** Extend the default rich-text rendering with branded components, custom formatting, and visual effects.

**Parameters:**

| **Name** | **Type** | **Description** |
|---|---|---|
| `config` | `IJsonToHtmlOptions` | Configuration object for custom JSON RTE rendering. |

```
import { registerJsonRte } from '@contentstack/studio-react';

registerJsonRte({
  customElementTypes: {
    // Custom block-level elements
    infoBox: (attrs, child, jsonBlock, extraProps) => {
      return `<div class="info-box" style="padding: 1rem; background-color: #e3f2fd; border-left: 4px solid #2196f3;">${child}</div>`;
    },
    callout: (attrs, child, jsonBlock, extraProps) => {
      const type = jsonBlock.attrs?.type || 'info';
      const colors = {
        info: '#e3f2fd',
        warning: '#fff3e0',
        error: '#ffebee',
        success: '#e8f5e9'
      };
      return `<div class="callout callout-${type}" style="padding: 1rem; background-color: ${colors[type]}; border-radius: 4px; margin: 1rem 0;">${child}</div>`;
    }
  },

  customTextWrapper: {
    // Custom inline text formatting
    highlight: (child, value) => {
      return `<span class="highlight" style="background-color: #ffeb3b; padding: 2px 4px;">${child}</span>`;
    },
    color: (child, value) => {
      return `<span class="text-color" style="color: ${value};">${child}</span>`;
    },
    code: (child, value) => {
      return `<code class="inline-code" style="background-color: #f5f5f5; padding: 2px 4px; border-radius: 3px; font-family: monospace;">${child}</code>`;
    }
  },

  allowNonStandardTypes: true
});
```
