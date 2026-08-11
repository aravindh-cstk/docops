---
title: "Add Studio to a Visual Editor App"
description: "Learn how to layer Contentstack Studio on top of an existing Visual Editor setup to enable layout composition alongside inline field editing."
url: /studio/add-studio-to-a-visual-editor-app
---

# Add Studio to a Visual Editor App

## Add Studio to a Visual Editor App

You already use Contentstack's Visual Editor. Live Preview is installed in your app. Editors can edit field values inline against any entry. Pages render through hand-coded routes.

Studio adds something Visual Editor doesn't: **layout composition**. Authors can rearrange sections, swap components, override per-instance props, and build new pages without engineering tickets. **You never migrate from Visual Editor.** Studio layers on top of it to expedite page building; Visual Editor stays exactly where it is, doing exactly what it does today.

## How Studio and Visual Editor Work Together

| Capability | Visual Editor | Studio |
| --- | --- | --- |
| Edit field values inline | ✅ | ✅ (uses Visual Editor under the hood) |
| Hover-highlight bound fields on the page | ✅ | ✅ |
| Compose page layouts (drop sections, reorder, swap) | ❌ | ✅ |
| Map field-to-prop bindings without code | ❌ | ✅ |
| Build new pages without a new route | ❌ | ✅ (via Templates + Freeform) |
| Render-time data flow | Your app code | <StudioComponent /> reads a composition spec |

**Studio complements Visual Editor; it does not replace it.** Visual Editor stays installed and stays in use; Studio uses Visual Editor for the inline-editing experience inside the Studio canvas. The two coexist by design, permanently.

What Studio adds is a new way to _author_ a page's layout: drop-and-arrange sections, swap components, expose per-instance overrides. The page still renders through Visual Editor for inline edits. Authors get both capabilities at once.

### Studio auto-wires the Visual Editor integration for every section it builds

The most useful side effect of doing the prop-to-field mapping inside Studio: **the binding map IS the source of truth for** **data-cslp** **emission**, so every Section you compose in Studio automatically lights up Visual Editor inline-editing, with zero new code in your components.

| What developers used to do for VE | What Studio does automatically |
| --- | --- |
| Thread data-cslp props through every component that renders a CMS field | The binding map already knows prop ↔ field; Studio emits data-cslp at render time from that map |
| Maintain cslp-util calls per route to derive the right tag values | <StudioComponent /> derives them from the composition spec: no per-route helper |
| Re-wire data-cslp every time a binding changes | Re-binding in the canvas updates the map; the new data-cslp tags ship on the next render |

A concrete render:

```
<!-- You authored in Studio: Hero.headline → template.title, Hero.cover → template.featured_image -->
<!-- What <StudioComponent /> emits: -->
<section class="hero">
  <h1 data-cslp="blt5a3…title">Welcome</h1>
  <img data-cslp="blt5a3…featured_image" src="…" alt="…">
</section>
```

For Visual Editor users, this is the **single biggest productivity unlock** from adopting Studio: **a Section built in Studio is automatically VE-ready**. You don't add data-cslp to your React code. You don't update existing components. Authors get hover-highlight + click-to-edit on every CMS-bound element the moment the Section ships.

> **No new VE setup is required.** Studio assumes Visual Editor is already installed and working (see Prerequisites below). If it is, every Studio-composed Section / Template inherits VE's inline-editing capability automatically.

See [CMS Binding: Auto-enables Visual Editor Integration](/docs/studio/bind-cms-content-to-studio-components#auto-enables-visual-editor-integration) for the binding-map ↔ data-cslp mechanism in detail.

![Layer-stack diagram — Studio canvas sits on top of \<StudioComponent />, which uses Visual Editor and Live Preview, which produces data-cslp tags consumed by visitors](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6696013db56e5355/252ac786ab9a3d0f309ce635/recipes-studio-complements-ve.png)

## Before You Start

Things you already have (Visual Editor users):

-   @contentstack/delivery-sdk + @contentstack/live-preview-utils installed
-   Stack-level Live Preview enabled
-   Entry preview pages that show data-cslp tags

Things you add for Studio:

-   @contentstack/studio-react installed: run install-studio, which installs studio-react alongside what you already have (it's safe to re-run; install-studio detects existing Live Preview).
-   A Studio project linked to your stack: run configure-studio.
-   The canvas route: run setup-section-preview.
-   At least one component registered: run register-component per component.

That's the entire setup: install Studio additively, register your existing components, then start authoring layouts through Studio.

## Step 1: Inventory Components and Decide What Becomes a Section

The setup is **section by section, then template by template**. The mechanics overlap with the hand-coded recipe ([migrate-from-handcoded.md](/docs/studio/migrating-hand-coded-pages-to-studio#step-1-inventory-your-components-sections-and-templates)); read its Step 1 for the inventory table structure.

Visual Editor users have it easier than hand-coded teams: VE already requires routes to pass entry fields through to components cleanly (that's how data-cslp tagging works). The components you'd register in Studio are the same components VE is already binding to; the inventory step is mostly cataloguing what's already there, not refactoring.

The one VE-specific check before you start:

| State | Action |
| --- | --- |
| data-cslp tags appear in DevTools on bound fields | ✅ VE is wired correctly, proceed. |
| data-cslp tags missing or partial | ⚠ Fix VE first. Studio uses VE's wiring; a broken VE setup produces a broken Studio setup. |

> **Studio supports the same page shapes Visual Editor does, plus more.** If VE is editing the entry data on a route today, Studio can author the layout on the same route tomorrow. Interactive surfaces (checkout, account, dashboards) work too; see [Step 6: Handling Edges](/docs/studio/migrating-hand-coded-pages-to-studio#step-6-handling-edges) in the hand-coded recipe.

## Step 2: Register Components, Build Sections, Build Templates

Same section-first flow as the hand-coded recipe, minus any "convert" mindset:

1.  **Register components** (Step 2 of the hand-coded recipe): one-time per component
2.  **Build sections** (Step 3): one Studio section per recurring composition
3.  **Build templates** (Step 4): drop the sections, set URL pattern
4.  **Author pages through Studio**: editors compose pages from your section palette

On a Visual Editor project, you're not converting away from anything; you're equipping authors with a new authoring surface on top of what they already have.

## Step 3: Add a Studio-Authored Page to a Route

The route doesn't change purpose; you just have a new way to author its content. Use <StudioComponent /> to render a Studio-authored composition where you'd previously rendered hand-coded JSX against the same entry. Both still work; Studio adds the option of an authorable layout.

The per-route mechanics are the same as the [hand-coded recipe's Step 5](/docs/studio/migrating-hand-coded-pages-to-studio#step-5--swap-the-route); the migrate-page-to-studio skill drives it. (On a VE project, that skill is optional: you might prefer to introduce Studio only on new routes and leave existing VE-driven routes exactly as they are.)

Once a route renders through <StudioComponent />, both capabilities are live on it at once:

-   **Inline editing still works:** Live Preview stays installed and <StudioComponent /> produces the same data-cslp tags through Visual Editor. Editors who only know inline editing don't lose anything.
-   **Composition is now authorable:** editors who want to rearrange the layout open the template in Studio and drop / reorder / swap sections.

Once you have a catch-all route set up via [setup-template-preview-routes](/docs/studio/template-preview-routes), Studio resolves every URL via its CDA query; you stop maintaining one route file per URL for any page you decide to author through Studio.

## Step 4: Train the Authors

This step is specific to Visual-Editor teams adopting Studio and easy to skip:

Your editors already know how to edit _field values_ in Visual Editor (click a field, type, save). They probably **don't** know they can now also rearrange the _layout_, drop a new section, swap one for another, reorder. The change in capability is more dramatic for them than for engineers.

After the first Studio-authored route is in production, do a 15-minute walkthrough with one of them:

1.  Show them the Studio canvas for the template.
2.  Show them dropping a Featured Card section above the Body.
3.  Show them publishing.
4.  Show them the page changed.

Once they see the loop, they'll start using it. Without that walkthrough, they'll keep using only inline editing, and Studio's main benefit (layout composability) sits on the shelf.

## Step 5: Ship, Observe, Repeat

Same cadence as the hand-coded recipe: one route per sprint, ship to production, observe, then pick the next. Don't bulk-introduce Studio across every route at once.

## Common Pitfalls

| Pitfall | Why it bites | Fix |
| --- | --- | --- |
| Thinking you need to "migrate off" Visual Editor to use Studio | You never migrate from Visual Editor: Studio uses it under the hood | Leave Live Preview + Visual Editor installed; add @contentstack/studio-react on top |
| Adding Studio before fixing a broken Visual Editor setup | Studio inherits VE's wiring; broken VE produces broken Studio | Confirm data-cslp tags appear in DevTools before introducing Studio on any route |
| Skipping author training | Authors keep using only inline editing; Studio's value sits idle | 15-minute walkthrough after the first Studio-authored route is live |
| Trying to switch every Visual Editor route to a Studio-authored layout in one PR | Authors get overwhelmed; rollback is hard; bugs hide in volume | One route per sprint; same pace as hand-coded adoption |
| Removing Live Preview from a route to "simplify" | Inline editing breaks; authors lose the field-edit workflow they had | Leave Live Preview wired; <StudioComponent /> needs it |
| Re-binding fields while introducing Studio ("let's clean up while we're here") | Combines a behavioural change with a structural change, bugs land in both at once | Introduce Studio without rebinding. Re-bind in a separate sprint if needed. |

## See Also

-   [migrate-page-to-studio](/docs/studio/migrating-hand-coded-pages-to-studio): the per-route skill for routes you decide to author through Studio
-   [Migrate hand-coded pages](/docs/studio/migrating-hand-coded-pages-to-studio): the parallel recipe for teams replacing hand-coded JSX (a real migration); VE users do not follow that path
-   [install-studio](/docs/studio/add-studio-to-a-visual-editor-app): adds Studio on top of an existing Live Preview install (idempotent)
-   [register-component](/docs/studio/register-components): get your existing components into Studio's palette
-   [What is Studio](/docs/studio/contentstack-studio-overview): the value framing for the Studio capabilities Visual Editor doesn't provide
