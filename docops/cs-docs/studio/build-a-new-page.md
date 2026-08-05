---
title: "[Studio] - Build a New Page"
description: Build a new page in Studio by creating freeform and linked compositions, configuring routes, and previewing data.
url: https://www.contentstack.com/docs/studio/build-a-new-page
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - content-authors
  - admins
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Build a New Page

This page explains how to build new pages in Contentstack Studio using compositions (freeform and linked), including how to render compositions in a front-end project (CSR React example) and how to preview linked composition data. It is intended for developers and teams setting up Studio page rendering and templates, and should be used when creating new pages or reusable templates in Studio.

### Item 1

#### Article section

##### Heading

Build a New Page

##### Content

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Building a new page in Studio lets you combine reusable components and tokens to create structured, composable experiences. This guide shows how to create, configure, and preview a new page composition while maintaining alignment between design and content.

This article demonstrates how to create full-length pages using both free form and linked compositions. The goal is to build three pages: an About Us page, a Blog Listing page, and a Blog Template page for individual blog posts.

## Prerequisites

Before you begin building a new page, make sure your environment is configured correctly.

- Ensure you have set up your **Studio project** and connected it to your **front-end project (CSR or SSR)**.
- You have **Admin** or **Developer** permissions to modify composition structure.

**Tip**: Ensure your Figma Plugin integration is active if you plan to sync and preview designs.

## Standalone Pages

Standalone pages are uniquely designed and not derived from shared templates. Examples include the Home page and the Contact Us page. Use a freeform composition to create each standalone page.

### Create a New Composition for About Us Page

Compositions define the structure and layout of a page in Studio. This section explains how to create a new composition that serves as the foundation for your page, where you can add components and configure layout settings.

- Click **New Composition**.
- Select **Composition Type**: select **Freeform**.
- Enter a **Name** (e.g., “About Us” or “Product Overview”).
- Define the **URL Path** (e.g., `/about-us`). This path not only opens the page in the [composition editor](./composition-editor-overview.md) but also serves as the live URL for the About Us page.
- Click **Create**.![4. Create a Freeform Composition.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt64b3ac6b46a13270/6925a1e47be89702113c980f/4._Create_a_Freeform_Composition.gif)

In this use case, the **About Us** page requires a freeform composition, which has been created accordingly.

## Rendering a Specific Composition Route

After creating a composition in Studio, create a new file to render the corresponding page in your project. The following example uses a CSR React setup.

- Create an `about.tsx` file and use the `useCompositionData` hook to fetch the composition data. Then render the `StudioComponent`.

```
import {
  StudioComponent,
  useCompositionData,
} from "@contentstack/studio-react";

export function AboutUs() {
  const { specOptions, isLoading, error } = useCompositionData({
    compositionUid: "about_us",
  });

  if (error) {
    return (

## Something went wrong

          We couldn't load this page right now.

          Please refresh or try again later.

    );
  }

  if (isLoading) {
    return (

    );
  }

  return ;
}
```

This setup fetches the composition specification using the `compositionUid` and renders the associated content. A loading indicator is displayed while the request is in progress. If an error occurs, an error message is shown. In most cases, a 404 fallback page is rendered for missing or invalid compositions.

- Ensure that a React Router is already configured in the project. Then, add a new route for the **About Us** page in the `App` component.

```
function App() {
  return (
    <>

          } />
          } />

  );
}
```

Once the route is configured, open the composition in Studio and drag and drop the necessary components on the canvas to visually build the About Us page.

In this setup, each new page requires a new file, manual composition fetch logic, and a route definition before the page can be designed in Studio. This can be streamlined using a generic component that dynamically renders compositions based on the route, eliminating the need for code changes for every new page.

## Render a Composition for a Wildcard Route

To dynamically render compositions based on the current URL, rename the `about.tsx` file to `compositionRenderer.tsx` and update the function name accordingly.

Instead of using a static `compositionUid`, use the current URL to fetch the corresponding composition spec. This approach allows the path to determine the composition rendered on the page.

In this example, React Router is used to access the pathname:

```
const location = useLocation();
const url = location.pathname;
const { specOptions, isLoading, error } = useCompositionData({
  url,
});
```

The complete code looks as follows:

```
import {
  StudioComponent,
  useCompositionData,
} from "@contentstack/studio-react";
import { useLocation } from "react-router";

export function CompositionRenderer() {
  const location = useLocation();
  const url = location.pathname;
  const { specOptions, isLoading, error } = useCompositionData({
    url,
  });

  if (error) {
    return (

## Something went wrong

          We couldn't load this page right now.

          Please refresh or try again later.

    );
  }

  if (isLoading) {
    return (

    );
  }

  return ;
}
```

Next, update the `App.tsx` file to include a wildcard route that renders the `CompositionRenderer` component:

```
function App() {
  return (
    <>

          } />
          } />

  );
}
```

After completing this setup, create new compositions in the Studio app. They will render in the Studio canvas based on the route, no additional code changes required.

**Additional Resource**: Refer to the [Create Editable Page Sections](./create-editable-page-sections.md) use-case for examples of how to design compositions in the Studio canvas.

## Create Reusable Templates

Instead of coding the UI for each individual blog page, a single template is created and reused. Based on the URL, the corresponding blog data is rendered dynamically. Studio follows the same approach, create a template once, link it to a content type, and publish it to see the correct data populate in real time.

In this example, the goal is to set up blog pages using a linked composition.

- Click **New Composition**.
- For **Composition Type**, select **Linked Composition**.
- Enter a **Name** (e.g., Blog).
- Define the **URL Slug** (e.g., `/blogs/*`). This slug matches wildcard routes in production to load the correct composition.
- Click **Create**.![Blog Linked Composition.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteca7adf95aa72a44/6925d2b6179d43ad6e32e319/Blog_Linked_Composition.gif)

Once the blog composition is created and configured, it can be reused across multiple blog pages. This approach streamlines development, ensures consistency in layout, and enables dynamic rendering of content based on URL patterns.

## Linking Data from the Preview Entry

When a linked composition is created, the **Preview Entry** section becomes available in the **Page Data** tab. This section allows connection to preview-specific content, enabling dynamic rendering in Studio without affecting live data.

In the **Settings** tab, clicking the data icon opens the data binding panel. A new section appears, allowing data from the preview entry to be linked to component fields, similar to earlier configurations. Studio handles the underlying logic automatically.

To preview the template using different entry data, return to the **Page Data** tab and select **Replace Entry** in the **Preview Entry** section.

Aside from the data binding functionality, the overall process remains consistent with freeform compositions.

Studio enables teams to visually compose, preview, and manage modular digital experiences. With reusable components, design tokens, and editable sections, it enhances collaboration and promotes design consistency across projects.

## Common questions

### Do I need a new front-end route for every new Studio composition?
If you use a wildcard route with a generic renderer (for example, `CompositionRenderer` that fetches by `url`), new compositions can render based on the route with no additional code changes required.

### What is the difference between Freeform and Linked Composition?
Freeform compositions are used for standalone pages that are uniquely designed, while linked compositions are used as reusable templates that can be linked to content and rendered dynamically based on URL patterns.

### How do I preview different content with a linked composition?
Use the **Preview Entry** section in the **Page Data** tab and select **Replace Entry** to preview the template using different entry data.

### Who can create or modify composition structure in Studio?
You need **Admin** or **Developer** permissions to modify composition structure.