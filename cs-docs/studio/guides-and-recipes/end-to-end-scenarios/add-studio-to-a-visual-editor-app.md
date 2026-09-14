---
title: "Add Studio to a Visual Editor app"
description: "Learn how to layer Contentstack Studio on top of an existing Visual Editor setup to enable layout composition alongside inline field editing."
url: /studio/add-studio-to-a-visual-editor-app
---

# Add Studio to a Visual Editor app

## Add Studio to a Visual Editor app

You already use Contentstack's Visual Editor. Live Preview is installed in your app. Editors can edit field values inline against any entry via Visual Editor. Pages render through hand-coded routes.

Studio adds something Visual Editor doesn't: **layout composition**. Authors can rearrange sections, swap components, override per-instance props, and build new pages without engineering tickets. **You never migrate from Visual Editor.** Studio runs alongside it in the same app. Visual Editor stays exactly where it is, doing exactly what it does today.

## How Studio and Visual Editor work together

| Capability | Visual Editor | Studio |
| --- | --- | --- |
| Edit field values inline (click-in-place) | Yes | No (Studio has no inline-edit surface, all value edits happen in the right panel) |
| Hover-highlight bound fields on the page | Yes | No (a VE feature. Requires VE) |
| Compose page layouts (drop sections, reorder, swap) | No | Yes |
| Map field-to-prop bindings without code | No | Yes |
| Build new pages without a new route | No | Yes (via Templates) |
| Render-time data flow | Your app code | <StudioComponent /> reads a composition spec |

**Studio and Visual Editor are two independent products.** They coexist in the same app and neither replaces the other. Visual Editor stays installed and stays in use for inline editing. Studio adds a page-composition surface with its own separate right-panel editor.

What Studio adds is a new way to author a page's layout: drop-and-arrange sections, swap components, expose per-instance overrides. Inline field editing continues to happen through Visual Editor on the same live pages, entirely independently of Studio.

### Studio emits data-cslp tags: which Visual Editor can then consume

Studio renders CMS-bound elements with data-cslp tags derived from its binding map. Visual Editor (if installed separately in the same app) reads those tags to power its own inline-editing surface. Studio itself never provides inline editing. It simply doesn't strip or block the tags Visual Editor needs.

| Where the data-cslp tags come from | Where inline editing comes from |
| --- | --- |
| Studio: the binding map (prop ↔ field) is the source of truth. <StudioComponent /> emits the tag at render | Visual Editor: reads the tag, draws the hover overlay + inline-edit affordance |
| Re-binding in the Studio canvas updates the map. The new data-cslp tag ships on the next render | Unchanged. Visual Editor's inline-editing capability is entirely a VE feature, not a Studio feature |

A concrete render:

```
<!-- You authored in Studio: Hero.headline → template.title, Hero.cover → template.featured_image -->
<!-- What <StudioComponent /> emits: -->
<section class="hero">
  <h1 data-cslp="blt5a3…title">Welcome</h1>
  <img data-cslp="blt5a3…featured_image" src="…" alt="…">
</section>
```

**What this means for a VE-installed team:** the data-cslp tag your Visual Editor setup depends on is emitted by Studio for every CMS-bound element inside a Studio-authored Section. You don't hand-thread the tag through your React components. Visual Editor's inline editing continues to work on those pages because the tags are present. If Visual Editor isn't installed in your app, inline editing doesn't exist. Studio doesn't add it.

> **Prerequisite for inline editing:** Visual Editor must be installed and working separately (Live Preview + Visual Editor SDKs). Studio doesn't set that up, doesn't turn it on, and doesn't provide a replacement. See Prerequisites below.

See [CMS Binding, data-cslp tag emission](/docs/studio/bind-cms-content-to-studio-components#tag-emission-visual-editor-consumes-what-studio-emits) for a detailed account of how the binding map corresponds to data-cslp.

![Layer-stack diagram: Studio canvas runs on top of &lt;StudioComponent /&gt;, which uses Visual Editor and Live Preview, which produces data-cslp tags consumed by visitors](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9313a3845e6444f1/3d16c2d0436d51bf9a74e7a8/recipes-studio-complements-ve.png)

## Before you start

Things you already have (Visual Editor users):

-   @contentstack/delivery-sdk + @contentstack/live-preview-utils installed
-   Stack-level Live Preview enabled
-   Entry preview pages that show data-cslp tags

Things you add for Studio:

-   @contentstack/studio-react installed: run [install-studio](https://studio-documentation.contentstackapps.com/prompts/install-studio.html), which installs studio-react alongside what you already have (it's safe to re-run, install-studio detects existing Live Preview).
-   A Studio project linked to your stack: run [configure-studio](https://studio-documentation.contentstackapps.com/prompts/configure-studio.html).
-   The canvas route: run [setup-section-preview](https://studio-documentation.contentstackapps.com/prompts/setup-section-preview.html).
-   At least one component registered: run [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html) per component.

That's the entire setup: install Studio additively, register your existing components, then start authoring layouts through Studio.

## Step 1: Inventory components and determine which become sections

The setup is **section by section, then template by template**. The mechanics overlap with the hand-coded recipe ([migrate-from-handcoded.md](/docs/studio/migrating-hand-coded-pages-to-studio#step-1-inventory-your-components-sections-and-templates)). Read its Step 1 for the inventory table structure.

Visual Editor users have it easier than hand-coded teams: VE already requires routes to pass entry fields through to components cleanly (that's how data-cslp tagging works). The components you'd register in Studio are the same components VE is already binding to. The inventory step is mostly cataloguing what's already there, not refactoring.

The one VE-specific check before you start:

| State | Action |
| --- | --- |
| data-cslp tags appear in DevTools on bound fields | VE is wired correctly. Proceed. |
| data-cslp tags missing or partial | Fix VE first. Studio uses VE's wiring. A broken VE setup produces a broken Studio setup. |

> **Studio supports the same page shapes Visual Editor does, plus more.** If VE is editing the entry data on a route today, Studio can author the layout on the same route tomorrow. Interactive surfaces (checkout, account, dashboards) work too: see [Step 6: Handling edges](/docs/studio/migrating-hand-coded-pages-to-studio#step-6-handling-edges) in the hand-coded recipe.

## Step 2: Register components, build sections, build templates

Same section-first flow as the hand-coded recipe, minus any "convert" mindset:

1.  **Register components** (Step 2 of the hand-coded recipe): one-time per component
2.  **Build sections** (Step 3): one Studio section per recurring composition
3.  **Build templates** (Step 4): drop the sections, set URL pattern
4.  **Author pages through Studio**: editors compose pages from your section palette

On a Visual Editor project, you're not converting away from anything. You're equipping authors with a new authoring surface on top of what they already have.

## Step 3: Add a Studio-authored page to a route

The route doesn't change purpose. You have a new way to author its content. Use <StudioComponent /> to render a Studio-authored composition where you'd previously rendered hand-coded JSX against the same entry. Both still work. Studio adds the option of an authorable layout.

The per-route mechanics are the same as the [hand-coded recipe's Step 5](/docs/studio/migrating-hand-coded-pages-to-studio#step-5-swap-the-route-to-render-via). The migrate-page-to-studio skill drives it. (On a VE project, that skill is optional: you might prefer to introduce Studio only on new routes and leave existing VE-driven routes exactly as they are.)

Once a route renders through <StudioComponent />, both capabilities are live on it at once:

-   **Inline editing still works**: Visual Editor is still installed and doing what it did before. <StudioComponent /> emits data-cslp tags on CMS-bound elements. Visual Editor reads them to power its inline-editing surface exactly as it did on your hand-coded routes. Editors who only know inline editing don't lose anything.
-   **Composition is now authorable**: editors who want to rearrange the layout open the template in Studio and drop / reorder / swap sections.

Once you have a catch-all route set up via [setup-template-preview-routes](https://studio-documentation.contentstackapps.com/prompts/setup-template-preview-routes.html), Studio resolves every URL via its Content Delivery API (CDA) query. You stop maintaining one route file per URL for any page you decide to author through Studio.

## Step 4: Train the authors

This step is specific to Visual-Editor teams adopting Studio and easy to skip:

Your editors already know how to edit field values in Visual Editor (click a field, type, save). They probably **don't** know they can now also rearrange the layout: drop a new section, swap one for another, reorder. The change in capability is more dramatic for them than for engineers.

After the first Studio-authored route is in production, do a 15-minute walkthrough with one of them:

1.  Show them the Studio canvas for the template.
2.  Show them dropping a Featured Card section above the Body.
3.  Show them publishing.
4.  Show them the page changed.

Once they see the loop, they'll start using it. Without that walkthrough, they'll keep using only inline editing, and Studio's main benefit (layout composability) goes unused.

## Step 5: Ship, observe, repeat

Same cadence as the hand-coded recipe: one route per sprint, ship to production, observe, then pick the next. Don't bulk-introduce Studio across every route at once.

## Common pitfalls

| Pitfall | Why it bites | Fix |
| --- | --- | --- |
| Thinking you need to "migrate off" Visual Editor to use Studio | Studio and Visual Editor are separate products that coexist. Studio doesn't replace VE or provide inline editing itself | Leave Live Preview + Visual Editor installed for inline editing. Install @contentstack/studio-react alongside for page composition |
| Assuming Studio provides inline editing | Studio has NO inline-edit surface. All value edits go through the right panel. Inline editing exists only when Visual Editor is installed independently and reads the data-cslp tags Studio emits | Keep Visual Editor installed. If VE isn't wired, inline editing won't work on Studio-rendered pages either |
| Skipping author training | Authors keep using only inline editing. Studio's value sits idle | 15-minute walkthrough after the first Studio-authored route is live |
| Trying to switch every Visual Editor route to a Studio-authored layout in one PR | Authors get overwhelmed. Rollback is hard. Bugs hide in volume | One route per sprint. Same pace as hand-coded adoption |
| Removing Live Preview from a route to "simplify" | Inline editing breaks. Authors lose the field-edit workflow they had | Leave Live Preview wired. <StudioComponent /> needs it |
| Re-binding fields while introducing Studio ("let's clean up while we're here") | Combines a behavioural change with a structural change, bugs land in both at once | Introduce Studio without rebinding. Re-bind in a separate sprint if needed. |

## See also

-   [migrate-page-to-studio](https://studio-documentation.contentstackapps.com/prompts/migrate-page-to-studio.html): the per-route skill for routes you decide to author through Studio
-   [Migrate hand-coded pages](/docs/studio/migrating-hand-coded-pages-to-studio): the parallel recipe for teams replacing hand-coded JSX (a real migration). VE users do not follow that path
-   [install-studio](https://studio-documentation.contentstackapps.com/prompts/install-studio.html): adds Studio on top of an existing Live Preview install (idempotent)
-   [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html): get your existing components into Studio's palette
-   [What is Studio](/docs/studio/contentstack-studio-overview): the value framing for the Studio capabilities Visual Editor doesn't provide
