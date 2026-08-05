---
title: "Spec-Related Types"
description: "The Spec-Related Types section defines type structures for compositions, design tokens, and component attributes in the Studio SDK. These definitions maintain data accuracy, UI consistency, and reliable interaction across Studio components. StudioSpec The `StudioSpec` type represents the complete composition specification, including UI structure, data, and metadata required for rendering compositions. DesignTokensInput The `DesignTokensInput` type defines the input object used when registering design tokens, specifying the structure and categories that form the basis of the design system. StudioAttributes The `StudioAttributes` type is required when registering a component with `wrap: false` . This attribute is required for the `StudioComponent` to work. Extend your component props with this attribute to ensure full compatibility. Example import { StudioAttributes } from \"@contentstack/studio-react\"; interface MyComponentProps extends StudioAttributes { title: string; } const MyComponent = ({ studioAttributes, title }: MyComponentProps) => { return ( <div {...studioAttributes}> <h2>{title}</h2> </div> ); }; StudioComponentSpecOptions The `StudioComponentSpecOptions` type is used to render a composition specification. It is passed to the `StudioComponent` and can be obtained either from the `useCompositionSpec` hook or from the `fetchCompositionSpec` method of the `StudioSdk` instance. CslpTag The `CslpTag` type is used to annotate CSLP attributes, which identify data in Live Preview and Visual Builder."
url: "https://www.contentstack.com/react-studio-sdk-type-and-interfaces-spec-related-types"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Spec-Related Types

The Spec-Related Types section defines type structures for compositions, design tokens, and component attributes in the Studio SDK. These definitions maintain data accuracy, UI consistency, and reliable interaction across Studio components.

#### StudioSpec

The `StudioSpec` type represents the complete composition specification, including UI structure, data, and metadata required for rendering compositions.

#### DesignTokensInput

The `DesignTokensInput` type defines the input object used when registering design tokens, specifying the structure and categories that form the basis of the design system.

#### StudioAttributes

The `StudioAttributes` type is required when registering a component with `wrap: false`. This attribute is required for the `StudioComponent` to work. Extend your component props with this attribute to ensure full compatibility.

**Example**

```
import { StudioAttributes } from "@contentstack/studio-react";

interface MyComponentProps extends StudioAttributes {
  title: string;
}

const MyComponent = ({ studioAttributes, title }: MyComponentProps) => {
  return (
    <div {...studioAttributes}>
      <h2>{title}</h2>
    </div>
  );
};
```

#### StudioComponentSpecOptions

The `StudioComponentSpecOptions` type is used to render a composition specification. It is passed to the `StudioComponent` and can be obtained either from the `useCompositionSpec` hook or from the `fetchCompositionSpec` method of the `StudioSdk` instance.

#### CslpTag

The `CslpTag` type is used to annotate CSLP attributes, which identify data in Live Preview and Visual Builder.
