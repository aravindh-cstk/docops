---
title: "Studio, Live Preview, and Visual Editor"
description: "Three Contentstack products, three jobs. Studio composes layouts, Live Preview pipes draft content into the running site, Visual Editor draws an inline-edit surface."
url: /studio/how-studio-live-preview-and-visual-editor-work-together
---

# Studio, Live Preview, and Visual Editor

## Studio, Live Preview, and Visual Editor

These three Contentstack products are often confused. They coexist in the same React app but do different jobs. Understanding which product owns which surface saves a lot of "why can't I edit this here" investigation.

## What each product does

| Product | Owns | Where the reader interacts |
| --- | --- | --- |
| **Studio** | The composition (which components appear on the page, in what order, bound to which fields, with which prop overrides). All value edits happen in Studio's **right panel**. Studio has **no inline edit** surface. | Studio's canvas at app.contentstack.com/studio, iframing your running app. |
| **[Live Preview](/docs/studio/install-live-preview)** | The pipe that pushes CMS entry edits from the CMS into the running site in real time. Draft values, not layout, no editing UI of its own. | Runs inside your React app. Any surface that renders CMS content picks up draft edits without a page reload. |
| **[Visual Editor](https://www.contentstack.com/docs/content-managers/visual-builder/about-visual-builder)** | A separate product that reads the data-cslp tags Studio emits and draws an **inline-edit** overlay on top of the page. Click a headline in the browser, edit it in place. | Your rendered page, augmented with VE's overlay. |

## How the three cooperate

The connective tissue is the data-cslp attribute. Studio's binding map (prop maps to field) is the source of truth. At render time the Studio SDK emits data-cslp="<contentTypeUid>.<entryUid>.<locale>.<fieldPath>" on every DOM node backed by a bound prop.

-   **Studio** authors the binding map and edits values through the right panel. It never touches your DOM directly.
-   **Live Preview** watches for CMS changes and re-fetches. Whatever route is showing (canvas iframe or live URL) re-renders with the new draft values.
-   **Visual Editor** finds the data-cslp tags at runtime and paints its overlay: click a bound element, edit its value in place, save. VE writes back to the CMS entry. Live Preview then pipes that change back into every rendered surface.

The single map (prop maps to field) drives all three: Studio authors it, the CMS stores it, VE reads it, Live Preview keeps every rendered surface in sync.

## What Studio deliberately does not do

-   **No inline editing.** Studio's canvas is a remote-controlled view of your running app. Selecting an element opens the right panel: Properties, Design, Settings. Value edits happen there.
-   **No separate render engine.** The canvas iframe is your app at your dev origin. If your dev server isn't running, the canvas is blank.
-   **No visitor-facing surface.** Studio never runs against visitor traffic. It only runs against authors inside app.contentstack.com.

Visual Editor fills the "click a headline, edit it in place" gap. It's a separate product with a separate install. Studio and VE coexist cleanly in one app: turn on both if your authors need both surfaces.

## When to install each

-   **Just Studio.** Authors want to compose layouts and swap content in the right panel. No inline edit needed.
-   **Studio + Live Preview.** Live Preview is required for Studio's canvas iframe to receive draft edits from the CMS. Install it as part of [SDK setup](/docs/studio/install-live-preview).
-   **Studio + Live Preview + Visual Editor.** Authors want both surfaces: compose in Studio, tweak copy inline on the live page in Visual Editor. See [Add Studio to a Visual Editor app](/docs/studio/add-studio-to-a-visual-editor-app).

## Related reading

-   [What is Studio?](/docs/studio/contentstack-studio-overview), the "Note on data-cslp tags" callout.
-   [Install Live Preview](/docs/studio/install-live-preview).
-   [CMS Binding: data-cslp tag emission](/docs/studio/bind-cms-content-to-studio-components#tag-emission-visual-editor-consumes-what-studio-emits).
