---
title: "[Studio] - Manage a Composition"
description: Manage a Composition in Studio, including composition types, URL handling, creation, rendering in CSR/SSR apps, editing, deleting, organizing, and best practices.
url: https://www.contentstack.com/docs/studio/manage-a-composition
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - content-managers
  - designers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Manage a Composition

This page explains how to manage compositions in Contentstack Studio, including composition types (Linked vs Freeform), URL structures, how to create/edit/delete compositions, and how to render compositions in CSR or SSR applications. It’s intended for users building or maintaining Studio projects and integrating Studio compositions into front-end apps.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

A **composition** is the foundational unit of structure in [Studio](./about-studio.md). It can represent a full page, a section of a page, or a reusable UI module. After creating a [project](./create-a-project.md), you use compositions to define layouts, bind content, and apply design rules.

A composition typically combines the following elements:
- UI components
- CMS data bindings
- Design tokens and responsive rules
- Optional page-level metadata

You can create multiple compositions within a project and bind content entries to them.

## Composition Types

Studio supports two types of compositions: **Linked** and **Freeform**. Choosing the right type ensures your layout aligns with your content strategy.

### Linked Composition

A **Linked Composition** connects a page to a specific content type in your stack. Once linked, the composition dynamically renders all entries of that content type using the same linked composition, based on the URL opened.
- Create repeatable layouts driven by content entries
- Bind to a Content Type and define a **URL Slug**
- Ideal for blogs, product pages, or any template used across multiple entries
- Supports dynamic rendering for scalable content strategies

**Tip:** Linked Compositions work best when a Content Type has multiple entries or when you want to build a shared template for entry-based pages.

For example, you are building a “Blog” section. You create a Linked Composition and connect it to the “Blog Posts” Content Type. Each blog post entry (e.g., `/blog/hello-world`, `/blog/whats-new`) dynamically uses this layout via the slug.

### Freeform Composition

A **Freeform Composition** is not tied to a Content Type. It is ideal for static, standalone, or draft pages.
- No dependency on content types
- Define a custom **URL Path**
- Best suited for landing pages, microsites, or one-off campaigns
- Works well with singleton Content Types for unique layouts

**Tip:** Start with a Freeform Composition if you don’t yet have content entries. You can convert it to a Linked Composition later.

For example, you are designing a one-off “Spring Campaign” landing page. Since it doesn’t pull data from any Content Type, you use a Freeform Composition and set the URL path as `/campaigns/spring-2025`.

## Managing URLs in Compositions

Each composition type requires a URL structure:
- **URL Slug for Linked Compositions**: The final segment of the page's route, generated from the entry title. Slugs are tied to entries, making them reusable across templates.**Example:** `/company/about-us`, where `about-us` is the slug.
- **URL Path for Freeform Compositions**: The full path to the page, manually defined.**Example:** `/campaigns/fall-2025`

**Tip:** Use slugs for dynamic, entry-driven pages. Use paths for static, one-off pages.

Keeping composition URLs up to date ensures your site stays structured, relevant, and aligned with your goals.

## Create a Composition

To build layouts and structure content visually in Studio, you must start by creating a composition. A composition acts as a container where you can arrange UI components, bind CMS data, and apply design rules. You can create compositions from scratch or link them to existing content types for dynamic content rendering.

To create a composition, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Select **Studio** from the “App Switcher”.
- Navigate to your **Project** and click **New Composition**.
- In the modal, select the type of composition: **Linked** or **Freeform**.
- Select the **Composition Type**:**Linked Composition**: Best for dynamic templates that render multiple entries from a Content Type.Select the **Content Type** and specify a **URL Slug** (e.g., `/blog/:slug`).
- **Freeform Composition**: Ideal for standalone or one-off pages (e.g., landing pages using singleton Content Types).Provide a **custom URL Path** (e.g., `/marketing/launch`).
- Enter the **Name** of your composition.
- The **UID** auto-generates based on the name. You can customize it.
- Click **Create** to open the composition editor.

## Use the Composition in your CSR or SSR App

After you create and publish a composition, use its **composition UID** to fetch the composition spec and render it in your front-end application. In a CSR app, fetch the spec in the browser using `useCompositionData`. In an SSR app, fetch the spec on the server (for example, in `getServerSideProps`) and render it using `StudioComponent`.

### Render a Composition in a CSR App (React)

Use `useCompositionData` to fetch `specOptions`, then pass it to `StudioComponent`.

```
// src/App.tsx
import { StudioComponent, useCompositionData } from "@contentstack/studio-react";

export function Home() {
  const { specOptions, isLoading, error, hasSpec } = useFetchSpecOptions({
    compositionUid: "page", // Replace with your composition UID
  });

  if (isLoading) return Loading...

;

  if (error) return Failed to fetch composition.;

  if (!hasSpec) return Composition not found.

;

  return ;
}
```

This renders the layout and content as defined in Studio.

### Render a Composition in an SSR App (Next.js Pages Router)

In SSR mode, fetch the composition spec on the server, extract styles, inject them into `<Head>`, and render the composition using `StudioComponent`.

```
// pages/index.tsx
import Head from "next/head";
import type { GetServerSidePropsContext } from "next";
import {
  StudioComponent,
  extractStyles,
  StudioComponentSpecOptions,
} from "@contentstack/studio-react";
import { studioClient } from "../studio";

interface HomeProps {
  studioProps: StudioComponentSpecOptions;
  styleSheet: string;
}

export default function Home({ studioProps, styleSheet }: HomeProps) {
  return (
    <>
      {styleSheet && {styleSheet}}

  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { query: searchQuery } = context;

    const studioProps = await studioClient.fetchCompositionData({
      searchQuery,
      compositionUid: "page", // Replace with your composition UID
    });

    const styleSheet = extractStyles(studioProps.spec);

    return {
      props: {
        studioProps,
        styleSheet,
      },
    };
  } catch (error) {
    console.error("Error fetching composition data", error);
    return { notFound: true };
  }
}
```

Use `useCompositionData` as the primary method to load a composition with its spec and metadata.

**Returns**:
- `specOptions`: Composition specification passed to `StudioComponent`
- `seo`: SEO metadata for the composition
- `hasSpec`: Whether the composition returned a UI spec (use for 404 handling)
- `hasTemplate`: Whether the composition has an associated template (use for 404 handling)
- `spec`: Composition spec representing the UI
- `refetchSpec()`: Refetches the spec
- `isLoading`: Request state

**Parameters**:
- `compositionQuery`(required): Query object for fetching composition data
- `options`(optional): Optional configuration to fetch linked data

Example with all return values:

```
import { useCompositionData } from "@contentstack/studio-react";

export function Page() {
  const {
    specOptions,
    seo,
    hasSpec,
    hasTemplate,
    spec,
    refetchSpec,
    isLoading,
    error,
  } = useCompositionData(
    { compositionUid: "page" }, // compositionQuery (required)
    {} // options (optional)
  );

  if (isLoading) return null;

  if (error) return Failed to fetch composition.

;

  if (!hasSpec) return Composition not found.

;

  return (
    {JSON.stringify({ seo, hasTemplate, spec: !!spec }, null, 2)}
  );
}
```

## Edit a Composition

You can update a composition’s metadata, such as its name, content type, URL slug, or URL path, directly from the composition listing page. This is different from editing the layout or bindings inside the canvas.

To edit a composition’s metadata, open your Studio project and perform the following steps:
- Locate the composition you want to edit. Click the vertical ellipsis and select **Edit**.
- In the **Edit Composition** modal, update the required fields:**Name**: Update the composition’s display name.
- **Content Type** (only visible for linked compositions): Choose or update the content type this composition is connected to.
- **URL Slug** (only visible for linked compositions): Define the URL structure for this composition. You can use wildcards for dynamic routing (e.g., `/blog/*`).
- **URL Path** (only visible for freeform compositions): Define the URL path for this composition.**Note:** The UID of a composition cannot be edited.
- To change the composition type, expand **Advanced Options**:If you are editing a **linked composition**, you can see an option to convert it to a freeform composition.
- If you are editing a **freeform composition**, you can see the option to convert it to a linked composition by connecting it to a content type.**Note:** Converting between modes affects how the composition binds to entries. A linked composition binds to a single content type. A freeform composition can be reused across multiple content types.
- Click **Save** to confirm your changes.

**Tip:**
- To edit a composition’s structure, layout, or bindings, open it in the **canvas editor**.
- Use the Preview feature to confirm that your edits appear as intended before publishing.

## Delete a Composition

If a composition is no longer needed, you can delete it from your project. This helps reduce clutter and ensures that only relevant layouts are retained.

**Warning:** Once you delete a composition, it cannot be recovered.

To delete a composition, open a Studio project and perform the following steps:
- Locate the composition you want to delete. Click the vertical ellipsis and select **Delete**.
- Confirm your action in the **Delete Composition** modal.

## Organizing Compositions

As your project grows, organizing compositions becomes essential for ease of access and maintenance. Studio offers tools to search, rename, duplicate, and reorder compositions from the dashboard, helping you keep everything structured and discoverable.

From the project dashboard, you can:
- **Search** compositions by name
- **Rename** or **delete** any composition
- **Sort** for improved visibility
- **Preview** how they appear in your target layout

## Best Practices

Follow these guidelines to ensure scalable and maintainable compositions:
- Use meaningful names (e.g., “Product Card Template”).
- Prefer Linked Compositions for dynamic content.
- Combine Studio with design systems and custom components for efficiency.

Compositions give you the flexibility to design, manage, and scale pages visually in Studio. Whether you’re building dynamic layouts or simple modules, keeping your compositions organized and up to date helps your team work faster and stay aligned.

## Common questions

### What is the difference between a Linked Composition and a Freeform Composition?
Linked Compositions connect a page to a specific content type and dynamically render entries, while Freeform Compositions are not tied to a content type and are ideal for static or one-off pages.

### When should I use a URL Slug vs a URL Path?
Use a URL Slug for Linked Compositions (entry-driven, reusable templates) and a URL Path for Freeform Compositions (manually defined full paths for static pages).

### Can I change a composition’s UID?
No. The page states: **Note:** The UID of a composition cannot be edited.

### How do I render a composition in my app after publishing?
Use the **composition UID** to fetch the composition spec and render it with `StudioComponent`, using `useCompositionData` in CSR or server-side fetching (for example, `getServerSideProps`) in SSR.