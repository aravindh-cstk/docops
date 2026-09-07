---
title: "JSON RTE Custom Element Rendering"
description: "Learn how to use registerJSONRTE to render custom element types from Contentstack's JSON Rich Text Editor field in Studio compositions."
url: /studio/json-rte-custom-element-rendering
uid: blt9443d147392f520e
---

# JSON RTE Custom Element Rendering

## JSON RTE Custom Element Rendering

Contentstack's **JSON Rich Text Editor** field stores content as a structured JSON tree rather than an HTML blob. When a Studio composition binds a json\_rte field to a component prop, the Studio SDK needs to know how to turn that JSON tree into rendered HTML/React output. registerJSONRTE is how you teach it.

Use this guide when:

-   A content type schema exposes a **JSON RTE** field that you want to bind to a component prop (Studio represents these props with the JsonRTEProp type).
-   You have **custom element types** in your JSON RTE (e.g. a callout block, an embedded card, a custom embed) and the default HTML serializer doesn't know how to render them.
-   You want to override the default tag rendering (for example, wrap every <h2> with custom classes).

## The API

registerJSONRTE is re-exported from @contentstack/studio-react (originally from @contentstack/studio-client):

```
import { registerJSONRTE } from "@contentstack/studio-react";

declare function registerJSONRTE(config: IJsonToHtmlOptions): void;
```

The config is the standard IJsonToHtmlOptions shape from [@contentstack/json-rte-serializer](https://www.npmjs.com/package/@contentstack/json-rte-serializer):

```
interface IJsonToHtmlOptions {
  customElementTypes?: IJsonToHtmlElementTags;
  customTextWrapper?:  IJsonToHtmlTextTags;
  allowNonStandardTypes?: boolean;
  allowedEmptyAttributes?: IJsonToHtmlAllowedEmptyAttributes;
  addNbspForEmptyBlocks?: boolean;
}

interface IJsonToHtmlElementTags {
  [key: string]: (
    attrs: string,
    child: string,
    jsonBlock: IAnyObject,
    extraProps?: object
  ) => string;
}

interface IJsonToHtmlTextTags {
  [key: string]: (child: any, value: any) => string;
}
```

Internally the registered config is stored on a singleton JSONRTERegistry (constructed with JSONRTERegistryOptions) and is read by Studio's prop-resolution pipeline. RetrievePropValueArgs.jsonRTE is wired directly from this registry whenever a JsonRTEProp value is materialized for a component.

## Registering a custom element

Call registerJSONRTE **once at app bootstrap**, before the first composition renders, typically alongside your registerComponent calls:

```
import { registerJSONRTE } from "@contentstack/studio-react";

registerJSONRTE({
  customElementTypes: {
    callout: (attrs, child, jsonBlock) => {
      const variant = jsonBlock?.attrs?.variant ?? "info";
      return `<aside class="callout callout--${variant}"${attrs}>${child}</aside>`;
    },
  },
});
```

The handler receives:

-   attrs: already-serialized HTML attributes string.
-   child: already-serialized inner HTML of child nodes.
-   jsonBlock: the raw JSON RTE node (use this to read attrs, type, custom metadata).
-   extraProps: optional contextual props passed through the serializer.

The handler must return an HTML string. The serializer composes these strings recursively to produce the final markup for the field.

## How it plugs into a component

You don't write any JSON-RTE-specific code in your component. Declare the prop in the component schema as a json\_rte type. Studio creates a JsonRTEProp (see PropInput in @contentstack/studio-registry) and bind it as you would any other field. At render time the SDK:

1.  Reads the JSON tree from the composition's static\_value.json\_rte entries or the bound Contentstack entry field.
2.  Passes the tree plus the registry's IJsonToHtmlOptions (the value you registered) into the serializer.
3.  Hands the resulting HTML string to your component as the prop value.

Your component renders it however it likes, usually via dangerouslySetInnerHTML on a wrapper element so the serialized HTML is preserved. This is safe here because @contentstack/json-rte-serializer produces sanitized HTML from a structured JSON tree; the XSS risk is mitigated by the serializer's controlled output. If you override the default serialization with customElementTypes, ensure those handlers do not inject unsanitized user input.

## Default behavior

If you never call registerJSONRTE, the serializer still renders all **standard** JSON RTE node types (paragraphs, headings, lists, links, inline marks, images, tables, etc.) using its built-in tag map. You only need to register custom types, or override defaults via customElementTypes keyed by the standard type name.

getJSONRTE() returns the currently-registered IJsonToHtmlOptions if you need to inspect or compose it. A typical use case: a shared library calls registerJSONRTE with its own custom elements, and a consuming site needs to extend, not replace, those options. Call getJSONRTE(), merge the additional customElementTypes in, and pass the combined config back to registerJSONRTE.

## Tips

-   **Register early.** Bootstrap-time, before StudioComposition mounts. Late registration won't retroactively re-render already-resolved props.
-   **Return strings, not React.** The serializer is HTML-string-based. To inject React, return a placeholder tag from the serializer and post-process the HTML (for example, parse the output with new DOMParser().parseFromString(html, "text/html") to find placeholder nodes and hydrate them with React portals), or render the field server-side.
-   **Match node type names exactly.** The keys in customElementTypes must equal the type field on the JSON RTE node emitted by Contentstack.

## See also

-   [Registering components](/docs/studio/register-components): how components and their prop schemas are declared.
-   [Component schema: prop types](/docs/studio/component-schema-prop-types): full list of supported prop types including json\_rte.
-   [Component default data](/docs/studio/set-component-default-data): providing fallback values for bound props.
-   [@contentstack/json-rte-serializer README](https://www.npmjs.com/package/@contentstack/json-rte-serializer): upstream serializer reference.
