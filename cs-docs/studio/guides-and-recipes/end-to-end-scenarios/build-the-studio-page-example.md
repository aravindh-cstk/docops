---
title: "Build the Studio Page Example"
description: "Extracted from The Studio page to keep that page focused on the mental model. This is the step-by-step build of the example, three Sections composed into."
url: /studio/build-the-studio-page-example
uid: blt7a263a51fa47f744
---

# Build the Studio Page Example

## Build the Studio Page example: full walkthrough

Extracted from [The Studio page](/docs/studio/standard-studio-page-anatomy) to keep that page focused on the concepts. This is the step-by-step build of the example (three Sections composed into one Connected Template) that the overview walks you through conceptually.

**Prereq:** you've read [The Studio page](/docs/studio/standard-studio-page-anatomy) Steps 1-3 (how the page works, prerequisite, meet Slots). This recipe picks up at Step 4.

## Step 4: build Section 1, the Hero (Simple)

Time to open Studio. In a browser, open your Studio project, then **Compositions**, then the **Sections tab**. This is where you'll build the three Sections. The UI action names below (**\+ New Section**, **\+ Add Section Slot**, etc.) are the canonical operations. Exact wording may vary slightly across Studio versions. The [Sections chapter](/docs/studio/sections-guide) has the version-specific reference.

The hero is one thing. No iteration. Perfect first Section.

```
Section: blog_post_hero   (Simple — root is a component)
  <Hero>
    bindings:
      headline    ← blog_post.hero_group.headline
      subhead     ← blog_post.hero_group.subhead
      cover_image ← blog_post.hero_group.image
    cta slot → <PrimaryButton>
                 label ← blog_post.hero_group.cta.label
                 href  ← blog_post.hero_group.cta.href
  Section Slot: notes_area   (empty — Template will fill)
```

**Author it in Studio's canvas:** open **Sections**, then **\+ New Section**. Connect to the hero\_group shape. Drag <Hero> in. Bind headline / subhead / cover\_image in the right panel. Drop <PrimaryButton> into the cta slot. Bind its label and href. Click below the Hero, add a Section Slot named notes\_area. Save.

Or run the [build-section](https://studio-documentation.contentstackapps.com/prompts/build-section.html) skill and it walks you through the same actions.

**What this Section enables the moment it exists:**

-   blog\_post\_hero becomes a **reusable, named piece of the page**. Drop it on a landing-page Template or a category-page Template with the same bindings and hero consistency across pages costs zero JSX duplication.
-   The cta **Component Slot** lets you use the same <Hero> component with different CTA widgets on different Sections (blog uses <PrimaryButton>, webinar uses <InlineForm>).
-   The notes\_area **Section Slot** lets you use the same blog\_post\_hero Section with different below-hero content on different Templates.
-   Register another <Hero> variant (say <VideoHero>) and you can **swap the Section's rendered component** in Studio, no code change to routes.
-   Rebinding an existing <Hero> prop to a different schema field is a right-panel action, not JSX.

**What Studio does NOT enable at this step:** authors editing hero content inline on the live page. That's Visual Editor. Studio manages the composition. The entry editor handles content values.

## Step 5: build Section 2, the Body (List)

The body is where authors and marketing spend most of their time, and where Studio's biggest wins live, because the body has multiple items of different types, and today those live in a hand-coded dispatcher.

![A List Section named body_sections_mb_list containing a Repeater bound to body_sections plus three Condition Blocks (text_block, image_block, and related_resources_block) each pointing at the component that renders it. Callouts explain Repeater and Condition Block.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am37712f51e9591cf0/4d6103a22bdb8ca252139d94/overview-list-appears.png)

The pieces of a List Section:

-   **Repeater**: Studio's word for the .map(). Bound to one iterating field (here body\_sections).
-   **Condition Block (CB)**: one per allowed block-type. Each says "if the current item is text\_block, render <TextBlock>." Replaces your if/else dispatcher chain.

Studio walks each item in body\_sections, checks CBs top-to-bottom, and the first matching CB tells Studio which registered component to render for that item. <TextBlock>, <ImageBlock>, <RelatedResources> don't change. Studio calls them driven by data authors publish rather than JSX you deploy.

**Author it:** Studio canvas UI (**\+ New Section**, drop a Repeater at the root, bind it to body\_sections, add one CB per allowed block-type, drop the rendering component into each CB), or run the [build-repeating-section](https://studio-documentation.contentstackapps.com/prompts/build-repeating-section.html) skill.

**What this Section uniquely enables:**

-   **Register a new body block-type** (say video\_block) (add a CB in Studio pointing at <VideoBlock>) no dispatcher edit.
-   **Swap which component renders an existing block-type**: flip CB(text\_block) from <TextBlock> to <FancyTextBlock> in Studio.
-   **Rebind an existing block prop to a different schema field** in the right panel.

Content reordering was always available in the entry editor. That's not Studio's win.

### Expose a CB's Slot as a Section Slot: Template-time flexibility

By default, each CB in this List binds to a fixed component: CB(related\_resources\_block) renders <RelatedResources>. That's tight coupling: the choice lives inside this List Section, one decision that applies everywhere the List is used.

But different Templates require different rendering for the related\_resources\_block slot in the body:

-   **Blog Template:** a compact 3-column card grid.
-   **Marketing landing Template:** a horizontal carousel.
-   **Author-profile Template:** a plain text list.

If you hard-bind CB(related\_resources\_block) to one component here, all Templates that embed blog\_post\_body\_sections get that same rendering. To give each Template its own rendering, **expose that CB's Slot as a Section Slot instead of binding it to a fixed component.**

In Studio's canvas, while authoring blog\_post\_body\_sections:

1.  Click the CB(related\_resources\_block) node.
2.  Instead of dropping a component into its Slot, select **Expose as Section Slot**.
3.  Name it related\_resources\_render.

The List Section now looks like:

```
Section: blog_post_body_sections   (List — root is a Repeater)
  Repeater(body_sections)
    ├ CB(text_block)              → <TextBlock>
    ├ CB(image_block)             → <ImageBlock>
    └ CB(related_resources_block) → Section Slot: related_resources_render   (empty — Template fills)
```

Now:

-   **Blog Template** embeds blog\_post\_body\_sections, and plugs a related\_grid Section into related\_resources\_render.
-   **Marketing landing Template** embeds the same blog\_post\_body\_sections, but plugs related\_carousel in.
-   **Author-profile Template** plugs related\_text\_list.

**Same body iteration, three different renderings of one block-type across three Templates.** Without this technique you'd have three near-duplicate List Sections that differ only in one CB's target. Every new body block-type you add would need three sync'd edits.

**Rule of thumb:** bind a CB's Slot to a fixed component when the rendering choice is universal across Templates. Expose it as a Section Slot when the choice is Template-specific. You can mix inside one List Section, as above: text\_block and image\_block stay universal. related\_resources\_block opens up to per-Template control.

## Step 6: build Section 3, the Related Articles (List)

Same pattern as the body, different iterating field.

```
Section: blog_post_related_articles   (List — root is a Repeater)
  Repeater(related)                       ← a Reference-multi
    ├ CB(article_ref)   →  <ArticleCard>
    └ CB(podcast_ref)   →  <PodcastCard>
```

The related field is a Reference-multi: it holds references to entries of other content types (article\_ref, podcast\_ref). The Repeater walks that reference list. Each CB matches on the referenced entry's content-type UID. <ArticleCard> and <PodcastCard> are the atomic leaves, no further iteration below them.

**Author it:** Studio canvas UI (same as Step 5, but the Repeater at the root binds to related instead of body\_sections), or the [build-repeating-section](https://studio-documentation.contentstackapps.com/prompts/build-repeating-section.html) skill.

**Wins added:**

-   Adding a new referenceable content type (say webinar\_ref) means adding a CB and pointing it at <WebinarCard>, no dispatcher code change.
-   Swap <ArticleCard> for <CompactArticleCard> in Studio without touching the route.
-   Or expose either CB's Slot as a Section Slot if you want per-Template control (same technique as Step 5).

## Step 7: assemble the Template

Three Sections done. Compose them into a Template that binds to the URL.

```
Template: blog_post_template
  URL:       /blog/{slug}
  CT:        blog_post
  Sections:  1. blog_post_hero
                 fills its notes_area Slot with share_bar
             2. blog_post_body_sections
                 fills its related_resources_render Slot with related_grid
             3. blog_post_related_articles
```

In Studio's canvas, open **Templates**, then **\+ New Template**, then **Connected**. Bind to blog\_post content type. Set the URL pattern. Drop the three Sections in order. For each Section that exposes a Section Slot, drop the target Section into the Slot right here. Save. Deploy. Or run the [build-connected-template](https://studio-documentation.contentstackapps.com/prompts/build-connected-template.html) skill.

**A different Template (say marketing\_landing\_template) uses the same three Sections, but plugs trust\_logos into the Hero's notes\_area and related\_carousel into the body's related\_resources\_render.** Same three Sections, different Template, different final render.

## Step 8: what changes in your route code

Two paths, pick one:

**Option A: leave your existing route as-is.** Your hand-coded <BlogArticle> route keeps rendering the way it always did. Studio's canvas becomes a second rendering path, used by authors to preview compositions, and by marketing pages that consume the Template via a different route later. Zero regression, zero risk.

**Option B: swap the route to render from the Template.** Replace the <BlogArticle> invocation with Studio's Connected renderer:

```
"use client";
import { StudioComponent, useCompositionData } from "@contentstack/studio-react";

export default function BlogPost({ params }) {
  const { specOptions } = useCompositionData({
    url: `/blog/${params.slug}`,
    templateContentTypeUid: "blog_post",
  });
  if (!specOptions?.spec) return null;
  return <StudioComponent specOptions={specOptions} />;
}
```

The route now renders whatever the Template + entry data resolve to: order of Sections, block-types in the body, everything data-driven. You do NOT change <Hero>, <TextBlock>, <ImageBlock>, <RelatedResources>, <ArticleCard>, or <PodcastCard>. They're already registered. Studio calls them as-is.

## Step 9: going deeper, nested iteration inside a body block

<RelatedResources> from Step 5 has its own internal .map(), one that iterates over references to article\_ref / podcast\_ref. Same shape as blog\_post\_related\_articles in Step 6.

Two ways to handle it:

-   **Simplest**: leave <RelatedResources> as a self-contained atomic component that does its own iteration in code. Studio treats it as opaque. The CB in blog\_post\_body\_sections renders it and moves on.
-   **Fully Studio-composable**: give <RelatedResources> a Component Slot for its iteration area, then author a nested List Section that fills it. Now the inner block-types are Studio-composable too. You can add a new inner referenceable content type without a dispatcher edit inside <RelatedResources>.

Do the second one only when the authoring team asks for it. Same pattern applied one level deeper.

## Step 10: how Studio replaces your .map() at render time

The mechanism is deliberately boring: **standard React short-circuit.** No framework magic.

![Side-by-side of BlogArticle: outside Studio the sections prop is undefined so the .map() runs. Inside Studio Studio provides sections set to the List Section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame631a432b6ea75d6/ca7cdd30400f6d3b81a698a4/overview-iteration-handoff.png)

For any component that has a Component Slot filled by a List Section (as in Step 9's fully-composable path), the component needs one line:

```
function RelatedResources({ refs, slot }) {
  return slot ?? <div>{refs.map(ref => /* your existing dispatch */)}</div>;
}
```

-   **Outside Studio**: slot is undefined, ?? falls through, your .map() runs. Zero regression.
-   **Inside Studio**: Studio passes slot as the nested List Section's rendered output. .map() never runs.

You add this line yourself in the components you decide to break down further. Studio never edits your source.

## Back to how it works

Return to [What you gain, precisely](/docs/studio/standard-studio-page-anatomy#what-you-gain-precisely) on The Studio page for the outcomes table and next-read links.
