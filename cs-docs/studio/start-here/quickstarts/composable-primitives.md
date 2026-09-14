---
title: "Design a component library that composes, not sprawls"
description: "The foundational pattern for a Studio component library: atomic and layout primitives that let content authors compose Heroes, Feature grids, Testimonials, and Pricing tiles without drifting from your design system. Shown with shadcn + Tailwind as a worked example. The pattern applies to any design system."
url: /studio/composable-primitives
---

# Design a component library that composes, not sprawls

## Design a component library that composes, not sprawls.

Foundational Pattern: read this before registering components

Register a small set of atomic and layout primitives. Content authors compose Heroes, Feature grids, Testimonials, and Pricing tiles on Studio's canvas, and every visual decision routes through your design system.

> **TLDR (30 seconds):**
> 
> -   **What this is:** the concept behind what to register in Studio. Not code, a pattern.
> -   **Who reads it:** developer + designer, together. There's a section for each.
> -   **The pattern:** register **4 atomic + 6 layout primitives**. Content authors compose Heroes, Feature Grids, Testimonials, and Pricing tiles on canvas, no engineering ticket per variant.
> -   **Reading time:** ~15 minutes. Registration work after: ~1 dev day for a well-scoped DS.
> -   **Works with any design system:** shadcn/ui + Tailwind is the worked example. Chakra, MUI, custom Radix + CSS variables, in-house kit. All substitute their own tokens in the mapping table.

> **This is a "read before you register" doc, for designers and developers together.** It's the conceptual model that governs which components you register, what props each one exposes, and how a marketing team gets a new Hero variant without a code change.
> 
> -   **If you own the design system** (tokens, variants, spacing scale, typography): the "For designers" section below is written for you. Your job is to define what each semantic option resolves to. The schemas are the contract you're handing to development. Read them the way you'd read a component spec in Figma.
> -   **If you're about to register components in code**: start here for the what to register pattern, then open **[Component shape rules](/docs/studio/component-shape-rules)** for the how each component should be shaped checklist. The two together cover strategy + tactics. Then [registerComponent()](/docs/studio/register-components) for the API mechanics.
> 
> The worked examples below use **shadcn/ui + Tailwind** as one concrete design system. **The pattern applies to any DS**: Chakra, MUI, a custom Radix + CSS-variable stack, or a hand-rolled in-house kit. Wherever "shadcn" appears, read it as "your DS's equivalent."

## For designers: what this doc is asking of you

You don't need to write code to work with this pattern. Your involvement is one thing, in two directions:

**Define what each semantic option resolves to.** Every primitive's schema is a small set of choices (Heading levels h1 to h4, Button variants like default | secondary | ghost, Section spacing compact | comfortable | spacious). Your job as the DS owner is:

-   For each choice, **name the design token** it maps to. Heading level: h1 maps to the H1 type token in your DS. Section spacing: comfortable maps to the spacing-comfortable padding token. Button variant: default maps to the primary button style in your DS.
-   **Confirm every semantic option has a token defined.** If spacing: spacious is in the schema but there's no matching spacing token in your DS, that's a gap to close before the primitive ships.
-   **Refuse props that leak visual polish.** If a developer proposes a size prop on Heading (values sm / md / lg / xl), that's a design-system violation. Level already decides the size. Same for hex-code colours, pixel-value padding, box-shadow tokens, and border-radius modifiers on atoms. Push back.

**The 10-primitive taxonomy is the shared vocabulary**: the same words a designer, a developer, and a content author all use. When a designer says "the Card variant should look this way in Figma", the dev reads that as "the Card.variant semantic option needs a token mapping added." No translation loss.

Every schema in this doc lists 2 to 5 semantic options per primitive. That's the entire surface you're responsible for maintaining. Everything else (pixel positions, DOM structure, event handlers) is the developer's concern.

## The trap you're trying to avoid

Two common approaches to a Studio component library both break down under real marketing needs:

1.  **One giant "Hero" component with 20 props.** Every new marketing ask reopens the file: variant, layout, spacing, image position, CTA count, background style. Conditional rendering piles up. Maintenance grinds.
2.  **Ten differently-shaped Hero components**: CenteredHero, SplitHero, FullBleedHero, ThumbnailHero, TwoCTAHero, etc. Palette becomes a wall. The design system fragments. Each Hero picks its own spacing, its own type scale. Authors can't tell which one to drop.

Both approaches conflate two different things: **the atoms of design** (a heading, a button, an image) and **the layout of a Section** (padded wrapper, two-column split, three-card grid). Once you separate them, the palette shrinks, the design system holds, and authors get real compositional freedom.

## The rule of thumb: what to expose as a prop

**Expose a prop only when the value:**

1.  **Varies per instance**, **AND**
2.  **Represents functional or content intent, not visual polish.**

Concretely:

**Good: expose these**

-   text on a Heading: content
-   level: h1 | h2 | h3 on a Heading: semantic hierarchy. Design system maps each level to size + weight tokens
-   variant: default | secondary | ghost on a Button: intent. Shadcn maps each variant to colour + border tokens
-   href on a Button: content
-   src on an Image: content

**Avoid: never expose these**

-   size: sm | md | lg | xl on a Heading: visual polish. The level already decided the size
-   color: "#3b82f6" on anything: visual polish and drift risk. Use a semantic emphasis prop with 2 to 3 states instead
-   borderRadius: sm | md | lg on an Image: visual polish. The value comes from CSS tokens based on context
-   padding: 32 on a Section: use a semantic spacing: compact | comfortable | spacious prop that maps to tokens
-   fontWeight, letterSpacing, lineHeight, boxShadow: design system, not per-instance

Applied consistently, every registered atom carries **2 to 4 props**, all content or semantic role. Every layout carries **composition props** with tokenised values. Everything else (colours, sizes, spacing values, border radii, shadows) comes from the design system.

> **The examples in this doc use shadcn/ui + Tailwind** because they're widely known, but the pattern is DS-agnostic. Any equivalent (Chakra's theme + variants, MUI's sx + theme tokens, a custom Radix + CSS variables setup, or your own in-house DS) works exactly the same way. Read "shadcn variant" as "your DS's variant equivalent" and "Tailwind class" as "the utility your DS exposes."

## Four questions to answer when building any component

Every decision (is this a valid atom, valid layout, or a compound to decompose, does it already exist in the library, which props does it need, which of those get exposed) falls out of four questions answered in order.

**These questions work on any input**: a React component (existing or proposed), a Figma frame, a screenshot, a verbal description. They do NOT assume a pre-existing library or the 10-primitive example. If you're starting fresh with no components registered, the questions still guide every decision.

This is the **shared decision framework** used by:

-   **Human developers** walking the questions in a design or planning session
-   **Studio skills** that programmatically apply the framework:

    -   [design-component-library](https://studio-documentation.contentstackapps.com/prompts/design-component-library.html): walks all four
    -   [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html): runs all four per section on a design
    -   [decompose-site](https://studio-documentation.contentstackapps.com/prompts/decompose-site.html): runs all four across N templates with dedup
    -   [plan-studio-architecture](https://studio-documentation.contentstackapps.com/prompts/plan-studio-architecture.html): runs all four for every component in the plan
    -   [compose-marketing-section](https://studio-documentation.contentstackapps.com/prompts/compose-marketing-section.html): invokes the framework at composition time
    -   [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html): enforces Q1 to Q4 at registration
    -   [decompose-jsx-to-atomics](https://studio-documentation.contentstackapps.com/prompts/decompose-jsx-to-atomics.html): runs Q1 recursively on a monolith
    -   [discover-sections](https://studio-documentation.contentstackapps.com/prompts/discover-sections.html) / [design-section-from-jsx](https://studio-documentation.contentstackapps.com/prompts/design-section-from-jsx.html): apply relevant questions during codebase discovery

Every skill halts if any answer is ambiguous. No silent registration.

### Q1: "Is this an Atom, a Layout, or a Compound?"

**Classify the input regardless of what's already registered.** This is a validator question, not a fitter question. It tells you what shape the component actually is.

Look at the design, the JSX, or the described component and ask what it fundamentally does:

-   **Carries a single content unit**: one text value, one image, one href, one bounded UI element, with NO arrangement of children. That makes it an **Atom.**

    -   Examples: Heading, Description, Button, Image, Quote, Badge, Rating, Icon, Link, Video
    -   Schema shape: content-only props (text, src, href, label) plus 1 to 2 semantic-role props (level, variant).
-   **Arranges other components inside slots, carries no content of its own.** That makes it a **Layout.**

    -   Examples: Section, Grid, Card, Tabs, Accordion, Stack, SplitRow, BackgroundMedia, Sidebar, Modal
    -   Schema shape: composition props (columns, ratio, spacing, background) plus one or more slot props.
-   **BOTH: carries its own content AND arranges children inline.** That makes it a **Compound. Refuse. Decompose first.**

    -   Examples of compounds: Hero (headline + image + CTA arranged together), PricingTable (rows of tiers arranged with prices/features), TestimonialSection (multiple quotes arranged as a grid), NavbarWithLogo (logo + menu items arranged as a bar)
    -   **Fix:** break the compound into its component atoms + a layout. Run each fragment back through Q1 recursively until every leaf is an atom or a layout.

**How to tell the difference in a hurry:**

| Question | If yes | If no |
| --- | --- | --- |
| Does it render ONE content thing an author would author (one text / one image / one link)? | Atom candidate | Not an atom |
| Does it have a children prop, a slot, or a render prop for arrangement? | Layout candidate | Not a layout |
| Does it render multiple content things AND arrange them? | **Compound. Decompose first.** | - |

**Guardrail. Halt if:**

-   The classification is ambiguous ("it kind of has one image but also arranges some text" means it is a compound, so decompose).
-   The component is interactive with internal state (form, carousel, modal). This isn't an atom or a layout. It's a stateful compound that should be registered as-is with an action prop. Classify separately from this framework.
-   The component is a page-level wrapper. Page-level is not a primitive. It's a Template built from primitives.

### Q2: "Does the library already have a primitive that covers this shape?"

Only after Q1 confirms atom or layout, check reuse.

-   **Yes: an existing primitive covers it.** Don't re-register. Use the existing one. Log it as a reused primitive in the decomposition sheet.
-   **No: no existing primitive matches.** Register a new atom or layout with the classification Q1 produced. Add to the shared component registry.
-   **Not sure: the closest existing primitive is close but not exact.** Halt. Ask: is this genuinely a new primitive, or is the existing one sufficient with a new semantic option? Extending an existing primitive with a new variant value is usually cheaper than registering a new one.

**How Q2 behaves in different starting states:**

-   **Fresh project, no library:** every Q1 answer of atom or layout proceeds to registration. Q2 is trivially "no" until the first primitive lands.
-   **Project with an existing library:** Q2 is the reuse check. Answers determine whether the current work extends the registry or reuses it.
-   **Project with legacy monolithic registrations:** Q2 first checks the atom/layout registry. If the shape only exists as a monolith, Q2 answers "no, register the atomic version" and the migration path (see below) begins.

### Q3: "For each proposed prop: does the value vary per-instance AND represent functional or content intent (not visual polish)?"

Apply this to every candidate prop when writing the schema.

-   **Both YES:** expose as a schema prop with **semantic-name choices**, not raw values. Examples: Heading.level: h1 | h2 | h3, Button.variant: default | ghost, Section.background: default | brand.
-   **Either NO:** don't add as a prop. The DS token or the parent layout controls the value.

    -   Varies but is visual polish (padding, hex color, font-weight, border-radius): the DS token owns it. Never a prop.
    -   Functional intent but doesn't vary (fixed layout direction, fixed alignment): hardcode it in the primitive. Not a prop.

**Applied to real props:**

| Candidate prop | Q3 result | Reason |
| --- | --- | --- |
| Heading.text | Expose | Varies (per instance) + content (the value itself) |
| Heading.level | Expose | Varies + semantic hierarchy |
| Heading.size: sm | md | lg | xl | Refuse | Varies but visual polish, level already decides |
| Section.spacing: comfortable | Expose | Varies + semantic (density intent) |
| Section.padding: 96 | Excluded | Varies but a raw pixel value |
| Button.variant: primary | Expose | Varies + semantic (button intent) |
| Button.color: #hex | Rejects | Visual polish + drift risk |

### Q4: "For each schema prop: is it also an Exposed Prop candidate?"

Q3 determines which props exist. Q4 determines which of those get promoted to Template-author-overrideable at drop time. **Two sub-tests, both must pass.**

**Q4a: Author-understandable.** Would a marketing / content author understand this option in a review meeting, without knowing CSS, design tokens, class names, or code?

-   **Yes**, Grid.columns: 2 | 3 | 4: "3 columns vs 4" is universally understood.
-   **Yes**, Section.background: default | brand: "regular or branded background" is understood.
-   **No**, Section.padding: 96: author has no reference for "96".
-   **No**, Button.className: 'bg-blue-500': author has no context for a utility class.

**Q4b: DS-portable.** If you migrated from Tailwind to Chakra tomorrow, does the exposed value still make sense?

-   **Yes**, background: brand: every DS has a brand token. Semantic name maps cleanly.
-   **Yes**, variant: outline: every DS has an outlined-card equivalent.
-   **No**, background: '#3b82f6': Tailwind-specific hex. Chakra's brand may differ.
-   **No**, padding: 96: number that doesn't survive DS refresh.

**Both YES: mark as Exposed Prop.** Template authors override per Template drop. **Either NO: keep static per Section.** DS-locked. Not exposed.

**Guardrail:** never expose atom-level props. Atoms carry content (bindable to CMS) and semantic role (DS-locked). There's nothing an author should override at Template time on a Heading or Button. If a Template genuinely needs a different Heading treatment, register a new atom variant. Don't expose visual polish.

### The four questions in one sentence

> **Classify first (Q1: atom, layout or compound, refusing compounds and decomposing them), then check reuse (Q2: does the registry already have it?), then name every proposed prop semantically with no visual polish (Q3), and finally expose only the schema props that are both author-understandable and DS-portable (Q4).**

### How to record the answers

For every proposed primitive or Section, produce a decision sheet like:

```
Component: HeroThumbnailTop

Q1 (Atom / Layout / Compound?):
  COMPOUND — renders headline + description + thumbnail + CTA, all
  arranged. Refuse. Decompose into:
    - Section (layout)
    - Stack (layout)
    - Image (atom) + Heading (atom) + Description (atom) + Button (atom)
  → Run Q1 recursively on each fragment (all pass as atom or layout).
  → NOT a new primitive. Save as a composed Section.

---

Component: FeatureList (proposed atom candidate)

Q1: ATOM — carries a single content unit (a list of checkmark strings).
    No arrangement of children, no sub-slots. Pure content.

Q2: Does the library have this?
    NO — no existing atom iterates a list of strings with a checkmark
    marker. Not covered by extending an existing atom's variants either.
    → Register a new atom.

Q3 per proposed prop:
  · items (array<string>)   ✅ varies per instance + content
  · checkmark (boolean)     ✅ varies per instance + functional
  · variant (choice)        ❌ refuse — check icon color is DS-locked
  · size (choice)           ❌ refuse — visual polish, level would decide

Q4 per schema prop (exposure):
  · items      ❌ never — atom content is CMS-bound, not exposed
  · checkmark  ❌ never — atom prop, DS-locked
  → No Exposed Props. Content flows via CMS binding at author time.
```

The skills produce this format automatically. Paste it into the PR that registers the new primitive so reviewers can audit every classification and exposure decision without reading the code.

## The 10 primitives you register

![A map of the 10 primitives. Left column labelled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0c5b3481796494f7/d25c304c7081778842e4fd7b/composed-primitives-map.png)

### Four atomic components (content-only)

| Primitive | What it renders | Props |
| --- | --- | --- |
| **Heading** | H1 / H2 / H3 / H4 text | text, level, emphasis |
| **Description** | Paragraph text | text, emphasis |
| **Button** | CTA, wraps shadcn's <Button> | label, href, variant, size, icon |
| **Image** | Inline image (thumbnail, product shot, avatar, icon) | src, alt, aspect, fit |

### Six layout components (composition)

| Primitive | What it renders | Slots | Props |
| --- | --- | --- | --- |
| **Section** | Outer padded wrapper with a background theme | children | spacing, background, contentAlign |
| **BackgroundMedia** | A background image behind foreground content, with overlay | children | image, imageAlt, overlay, focalPoint, height |
| **SplitRow** | Two-column horizontal layout | leftSlot, rightSlot | ratio, verticalAlign, reverseOnMobile |
| **Stack** | Vertical grouping with tokenised gap | children | spacing, alignment |
| **Grid** | N-column responsive grid | children | columns, spacing |
| **Card** | Compound container, wraps shadcn's <Card> | header, content, footer | variant, padding |

**4 atoms + 6 layouts = 10 registrations.** This surface is enough for every marketing section type: Heroes, Feature grids, Testimonials, Pricing tiles, CTA bands, comparison rows. Extending later (a Quote atom, a Tabs layout) is additive, not disruptive.

## Worked example: a landing page becomes the 10 primitives

Before the schemas, here's the decomposition in action. Suppose your design team hands you a marketing landing page with five sections:

1.  **Hero**: full-bleed background image, headline overlaid, primary CTA
2.  **Feature Grid**: 3 columns of icon + heading + description cards
3.  **Testimonials**: 3 cards with quote + avatar + author name + role
4.  **Pricing**: 3-tier table, middle tier highlighted with a filled variant
5.  **CTA Band**: centered heading + supporting text + button on a brand-colored background

The decomposition is three passes.

### Pass 1: Circle every atom (leaf content element)

Walk the design, marking every value that carries content: text, images, links.

-   H1 in hero, H2 section titles, H3 card titles, H4 author names: all one primitive, **Heading** (level differs)
-   Body copy under each heading, muted secondary text, testimonial quotes: **Description**
-   Every button (primary, secondary, ghost, link): **Button**
-   Hero background, thumbnail images, feature icons, testimonial avatars: **Image**

**Four atoms cover every piece of content on the page.** No specialized HeroHeadline, CardTitle, or AuthorAvatar. Those are compositions, not atoms.

### Pass 2: Circle every layout wrapper (arrangement container)

Walk again, this time marking how things are arranged.

-   Every section has outer padding + max-width + optional background: **Section**
-   The hero has an image behind foreground content with an overlay: **BackgroundMedia**
-   Feature Grid, Testimonials, Pricing all use 3-column responsive rows: **Grid**
-   Feature cards, testimonial cards, pricing tiles all have header + body + footer: **Card**
-   Every cluster of heading + description + button uses vertical spacing: **Stack**
-   Testimonial card footer, with avatar-left, name/role-right, 30/70 split: **SplitRow**

**Six layouts cover every arrangement on the page.**

### Pass 3: Confirm every semantic option maps to a DS token

Walk each primitive's schema. For every semantic value (Heading.level: h1..h4, Section.background: none/surface/muted/brand/inverse, Card.variant: default/outline/ghost, etc.), the DS owner confirms a token exists.

If a token doesn't exist yet (say your DS has no brand background token defined) add it before the primitive ships. This is the "DS gap-close" step in the rollout.

### The result

-   All 5 sections build from the same 10 primitives. Nothing hand-registered per section type.
-   Marketing wants a new "Split Hero" variant next quarter? Author rearranges primitives on canvas. Zero engineering.
-   The DS token for "H1" changes? Every section on the site updates on next build. No schema migration.

**The move to internalize: atoms for content, layouts for arrangement, DS tokens for everything visual.** If a proposed 11th primitive comes up, first ask: can I compose this from the existing 10? Only add when the answer is genuinely no. See the Additive growth answer in the FAQ near the end.

## Atomic components: schemas

### Heading

![A Heading primitive rendered at four levels stacked top to bottom: h1 large bold, h2 medium bold, h3 smaller semibold, h4 smallest. A label at right shows the schema: text (string), level (choice: h1/h2/h3/h4), emphasis (choice: default/inverse). Design-system tokens set size and weight per level. Author never picks a size.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am88695919669c29fd/abf9b9f5ed34e87911e69828/atoms-heading.png)

```
registerComponent({
  type: 'heading',
  displayName: 'Heading',
  category: 'Atomic',
  component: Heading,
  props: {
    text:     { type: 'string', defaultValue: 'Your headline here' },
    level:    { type: 'choice', options: ['h1','h2','h3','h4'], defaultValue: 'h1' },
    emphasis: { type: 'choice', options: ['default','inverse'], defaultValue: 'default' },
  },
});
```

-   level drives size + weight + line-height via design-system tokens. Author never picks a "size".
-   emphasis: 'inverse' is the one visual override, used only when the Heading sits over a dark background image and needs light-on-dark text. Not a colour picker, a semantic switch that stays inside the design system.

### Description

![A Description primitive rendered in three emphasis states side by side: default (foreground colour), muted (secondary text colour), inverse (light-on-dark for use over background images). Schema label: text (string), emphasis (choice: default/muted/inverse).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am41b4d5d2cb3413f9/0844daddfaa0ccb9b3744ea4/atoms-description.png)

```
registerComponent({
  type: 'description',
  displayName: 'Description',
  category: 'Atomic',
  component: Description,
  props: {
    text:     { type: 'string', defaultValue: 'A short supporting description.' },
    emphasis: { type: 'choice', options: ['default','muted','inverse'], defaultValue: 'default' },
  },
});
```

Two props. Size, alignment, max-width, and line-height all resolve to design-system tokens.

### Button

![A Button primitive rendered in six variants (default, secondary, destructive, outline, ghost, link) and three sizes (default, sm, lg). Schema label lists the props: label, href, variant, size, icon. Variants and sizes mirror shadcn/ui](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3d626ea5269b69b8/1b9a51d39758581349aeadff/atoms-button.png)

```
registerComponent({
  type: 'button',
  displayName: 'Button',
  category: 'Atomic',
  component: Button,
  props: {
    label:   { type: 'string', defaultValue: 'Get started' },
    href:    { type: 'href',   defaultValue: '/' },
    variant: { type: 'choice',
               options: ['default','secondary','destructive','outline','ghost','link'],
               defaultValue: 'default' },
    size:    { type: 'choice', options: ['default','sm','lg'], defaultValue: 'default' },
    icon:    { type: 'choice', options: ['none','arrow-right','play','download'], defaultValue: 'none' },
  },
});
```

Variants and sizes mirror shadcn's cva config exactly, so the Studio dropdown reads the same terms as components/ui/button.tsx. **On a different DS**, use the vocabulary your DS already exposes: Chakra's colorScheme + variant, MUI's variant + color, or whatever your in-house naming is. Match your DS, not this file.

### Image

![An Image primitive rendered at four aspect ratios (auto, 1:1, 4:3, 16:9, 21:9) and two fits (cover, contain). Schema label: src (imageurl), alt (string), aspect (choice), fit (choice). No borderRadius, no boxShadow, those are design-system concerns.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc91122fdd7a09bc0/4934cfb39910e9ccac47a2c1/atoms-image.png)

```
registerComponent({
  type: 'image',
  displayName: 'Image',
  category: 'Atomic',
  component: Image,
  props: {
    src:    { type: 'imageurl', defaultValue: 'https://placehold.co/800x600' },
    alt:    { type: 'string',   defaultValue: '' },
    aspect: { type: 'choice',   options: ['auto','1:1','4:3','16:9','21:9'], defaultValue: '16:9' },
    fit:    { type: 'choice',   options: ['cover','contain'], defaultValue: 'cover' },
  },
});
```

aspect and fit stay because they're genuinely per-instance functional decisions (a hero thumbnail, a square avatar, and a wide banner all have different aspects, and it's not stylistic drift). Border radius, shadows, filters are design-system concerns.

## Layout components: schemas

### Section

![A Section primitive shown as an outer padded wrapper with a background fill and a labelled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc4356dab0fe06587/46ed05af965b5ccda7a1b888/layouts-section.png)

```
registerComponent({
  type: 'section',
  displayName: 'Section',
  category: 'Layout',
  component: Section,
  props: {
    spacing:      { type: 'choice', options: ['compact','comfortable','spacious'], defaultValue: 'comfortable' },
    background:   { type: 'choice', options: ['none','surface','muted','brand','inverse'], defaultValue: 'none' },
    contentAlign: { type: 'choice', options: ['left','center'], defaultValue: 'left' },
    children:     { type: 'slot',   label: 'Section content' },
  },
});
```

Every Section starts with this. Semantic spacing: comfortable, not padding: 32. Semantic background: muted, not a hex colour.

### BackgroundMedia

![A BackgroundMedia primitive shown as a background image with a translucent overlay tint and a labelled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1b7d6f2e90e9c849/250cbdc884ab4374049e2e0f/layouts-background-media.png)

```
registerComponent({
  type: 'backgroundMedia',
  displayName: 'Background Media',
  category: 'Layout',
  component: BackgroundMedia,
  props: {
    image:      { type: 'imageurl', defaultValue: 'https://placehold.co/1920x1080' },
    imageAlt:   { type: 'string',   defaultValue: '' },
    overlay:    { type: 'choice',   options: ['none','subtle','strong'], defaultValue: 'subtle' },
    focalPoint: { type: 'choice',   options: ['center','top','bottom','left','right'], defaultValue: 'center' },
    height:     { type: 'choice',   options: ['standard','tall','full'], defaultValue: 'standard' },
    children:   { type: 'slot',     label: 'Foreground content' },
  },
});
```

overlay is three semantic states, not an opacity slider (which would drift). height is standard | tall | full, not vh values.

### SplitRow

![A SplitRow primitive rendered as two side-by-side columns labelled leftSlot and rightSlot. Ratio ticks below show 50-50, 60-40, 70-30. Schema label: ratio, verticalAlign (top/center/bottom), reverseOnMobile (boolean).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4855e3783fb5da5a/87f7d476a369bf852a7f7d1b/layouts-splitrow.png)

```
registerComponent({
  type: 'splitRow',
  displayName: 'Split Row',
  category: 'Layout',
  component: SplitRow,
  props: {
    ratio:           { type: 'choice',  options: ['50-50','60-40','40-60','70-30','30-70'], defaultValue: '50-50' },
    verticalAlign:   { type: 'choice',  options: ['top','center','bottom'], defaultValue: 'center' },
    reverseOnMobile: { type: 'boolean', defaultValue: false },
    leftSlot:        { type: 'slot',    label: 'Left column' },
    rightSlot:       { type: 'slot',    label: 'Right column' },
  },
});
```

### Stack

![A Stack primitive rendered as three stacked items with visible vertical gap. Spacing labels show tight, normal, loose variations with progressively larger gaps. Schema label: spacing, alignment (left/center/right).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame25bb791fd091987/3736f6a7398fa1cb39baa59c/layouts-stack.png)

```
registerComponent({
  type: 'stack',
  displayName: 'Stack',
  category: 'Layout',
  component: Stack,
  props: {
    spacing:   { type: 'choice', options: ['tight','normal','loose'], defaultValue: 'normal' },
    alignment: { type: 'choice', options: ['left','center','right'], defaultValue: 'left' },
    children:  { type: 'slot',   label: 'Stack items' },
  },
});
```

### Grid

![A Grid primitive rendered as three side-by-side cells labelled columns 2, 3, 4. Schema label: columns (2/3/4), spacing (tight/normal/loose). Note: responsive by default, collapses to 1 column on mobile.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama318737fd370fa8f/4f3f519a79bc4aa38b185e67/layouts-grid.png)

```
registerComponent({
  type: 'grid',
  displayName: 'Grid',
  category: 'Layout',
  component: Grid,
  props: {
    columns:  { type: 'choice', options: ['2','3','4'], defaultValue: '3' },
    spacing:  { type: 'choice', options: ['tight','normal','loose'], defaultValue: 'normal' },
    children: { type: 'slot',   label: 'Grid items' },
  },
});
```

Responsive by default, collapses to 1 column on mobile. Author picks the desktop column count. The design system handles breakpoints.

### Card

![A Card primitive rendered as a rounded container with three labelled zones stacked top to bottom: header (title + icon), content (body copy), footer (CTA button). Variants shown to the side: default (border + subtle shadow), outline (thicker border, no shadow), ghost (no border, transparent). Schema label: variant, padding, header/content/footer slots. Mirrors shadcn Card](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd5231068dcca2473/3ae5f80bf4840428969362b4/layouts-card.png)

```
registerComponent({
  type: 'card',
  displayName: 'Card',
  category: 'Layout',
  component: Card,
  props: {
    variant: { type: 'choice', options: ['default','outline','ghost'], defaultValue: 'default' },
    padding: { type: 'choice', options: ['tight','normal','loose'], defaultValue: 'normal' },
    header:  { type: 'slot',   label: 'Card header (icon, title)' },
    content: { type: 'slot',   label: 'Card content (description, list)' },
    footer:  { type: 'slot',   label: 'Card footer (CTA)' },
  },
});
```

Three named slots that map directly to shadcn's CardHeader / CardContent / CardFooter. **On a different DS**, they map to whatever compound-card convention your kit uses: Chakra's <CardHeader> + <CardBody> + <CardFooter>, MUI's <CardHeader> + <CardContent> + <CardActions>, or your custom named slots. The 3-slot compound convention is the design pattern. The specific components are the DS implementation.

## Studio props map to design system tokens: the shared contract

Every semantic option in a schema resolves to a specific design-system token. The design system owns the mapping. Change what "comfortable spacing" means for the site, change one lookup. Every registered component picks it up. No schema migration.

**How to read the table below.** Left column: what appears in the Studio schema (this is the shared vocabulary between designer, developer, and author). Right column: **an example resolution** using shadcn/ui + Tailwind. Replace with your own design system's equivalent tokens.

> **For designers: this table is your contract.** For every left-column value, map what token in your DS it should resolve to. If you use shadcn + Tailwind, the right column is already filled in. If you use a different DS, use the right column as a template: what needs to map, in what shape.

**Worked example (shadcn/ui + Tailwind):**

| Studio prop value | Rendered as (shadcn / Tailwind) |
| --- | --- |
| Heading level: h1 | <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> |
| Heading level: h2 | <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"> |
| Heading level: h3 | <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight"> |
| Heading level: h4 | <h4 class="scroll-m-20 text-xl font-semibold tracking-tight"> |
| Heading emphasis: inverse | Add text-primary-foreground |
| Description emphasis: default | <p class="leading-7"> |
| Description emphasis: muted | <p class="text-muted-foreground leading-7"> |
| Description emphasis: inverse | <p class="text-primary-foreground/90 leading-7"> |
| Button variant: default | shadcn <Button variant="default"> |
| Button variant: secondary | shadcn <Button variant="secondary"> |
| Button variant: destructive | shadcn <Button variant="destructive"> |
| Button variant: outline | shadcn <Button variant="outline"> |
| Button variant: ghost | shadcn <Button variant="ghost"> |
| Button variant: link | shadcn <Button variant="link"> |
| Button size: default / sm / lg | shadcn size prop passthrough |
| Image aspect: 16:9, fit: cover | <img class="aspect-video object-cover w-full"> |
| Image aspect: 1:1, fit: cover | <img class="aspect-square object-cover w-full"> |
| Section spacing: compact | py-12 md:py-16 |
| Section spacing: comfortable | py-16 md:py-24 |
| Section spacing: spacious | py-24 md:py-32 |
| Section background: muted | bg-muted |
| Section background: brand | bg-primary text-primary-foreground |
| Section background: inverse | bg-foreground text-background |
| Section contentAlign: center | Inner wrapper mx-auto text-center max-w-4xl |
| Stack spacing: tight / normal / loose | space-y-2 / space-y-6 / space-y-10 |
| Stack alignment: center | items-center text-center |
| Grid columns: 2 / 3 / 4 | grid grid-cols-1 md:grid-cols-2 gap-6 / md:grid-cols-3 / md:grid-cols-4 |
| Grid spacing: tight / normal / loose | gap-3 / gap-6 / gap-10 |
| SplitRow ratio: 50-50 | grid grid-cols-1 md:grid-cols-2 |
| SplitRow ratio: 60-40 | grid grid-cols-1 md:grid-cols-\[3fr\_2fr\] |
| SplitRow ratio: 70-30 | grid grid-cols-1 md:grid-cols-\[7fr\_3fr\] |
| Card variant: default | shadcn <Card>, rounded-lg border bg-card text-card-foreground shadow-sm |
| Card variant: outline | <Card class="border-2 shadow-none"> |
| Card variant: ghost | <Card class="border-0 shadow-none bg-transparent"> |
| Card padding: tight / normal / loose | p-4 / p-6 / p-8 on CardHeader / Content / Footer |
| BackgroundMedia overlay: subtle / strong | bg-black/20 / bg-black/60 overlay layer |
| BackgroundMedia height: standard / tall / full | min-h-\[50vh\] / min-h-\[80vh\] / min-h-screen |

**One rule that binds design + development:** if a semantic option doesn't have a token behind it yet, the DS owner adds the token before the primitive ships. Never inline a value.

**For a non-shadcn DS**, replace the right column with your own tokens. Example: if you're on Chakra, Section spacing: comfortable might resolve to py={{ base: 16, md: 24 }} on your themed <Box>. If you're on a custom system, it might resolve to padding: var(--space-comfortable). The **left column stays identical**. That's the whole point. The schema is DS-agnostic, the token mapping is DS-specific.

### Alternate worked example: Chakra UI + theme tokens

The same 10 semantic options resolve to a different set of tokens if you're on Chakra instead of shadcn+Tailwind. Same left column, different right column:

| Studio prop value | Rendered as (Chakra) |
| --- | --- |
| Heading level: h1 | <Heading as="h1" size="4xl" fontWeight="extrabold" lineHeight="1.1"> |
| Heading level: h2 | <Heading as="h2" size="2xl" fontWeight="bold"> |
| Heading emphasis: inverse | <Heading color="whiteAlpha.900"> (theme colors.whiteAlpha) |
| Description emphasis: muted | <Text color="gray.500"> (semantic-token text-muted) |
| Button variant: default | <Button colorScheme="brand" variant="solid"> |
| Button variant: secondary | <Button colorScheme="gray" variant="solid"> |
| Button variant: outline | <Button variant="outline"> |
| Button variant: ghost | <Button variant="ghost"> |
| Button size: default / sm / lg | Chakra size prop passthrough: md, sm, lg |
| Image aspect: 16:9, fit: cover | <AspectRatio ratio={16/9}><Image objectFit="cover" /></AspectRatio> |
| Section spacing: comfortable | <Box py={{ base: 16, md: 24 }} px={{ base: 4, md: 8 }}> |
| Section background: muted | <Box bg="gray.50"> (semantic-token surface-muted) |
| Section background: brand | <Box bg="brand.500" color="white"> |
| Section contentAlign: center | <VStack maxW="4xl" mx="auto" textAlign="center"> |
| Stack spacing: normal | <VStack spacing={6}> |
| Stack alignment: center | <VStack align="center"> |
| Grid columns: 3 | <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}> |
| SplitRow ratio: 50-50 | <SimpleGrid columns={{ base: 1, md: 2 }}> |
| SplitRow ratio: 60-40 | <Grid templateColumns={{ base: '1fr', md: '3fr 2fr' }}> |
| Card variant: default | <Card variant="elevated"> (theme components.Card) |
| Card variant: outline | <Card variant="outline"> |
| Card padding: normal | <CardBody p={6}><CardHeader p={6}> |
| BackgroundMedia overlay: strong | <Box position="absolute" inset={0} bg="blackAlpha.600"> |
| BackgroundMedia height: tall | <Box minH="80vh"> |

**Key differences from the shadcn+Tailwind mapping:**

-   **Prop-based, not class-based.** Chakra tokens flow through JSX props (bg="gray.50", py={{ base: 16 }}) instead of utility classes. The primitive's React implementation reads different, but the semantic contract is the same.
-   **Theme tokens are named in the theme object**: not composed on the fly. Add theme.semanticTokens.colors\['surface-muted'\] once. Every Section background: muted picks it up. Same for spacing scales, breakpoints, component variants.
-   **Chakra's built-in composition primitives** (<VStack>, <SimpleGrid>, <AspectRatio>, <Card>) are what you wrap your Studio-registered primitives around. Use Chakra's semantic components where they map naturally, rather than hand-rolling <Box> compositions.

**For MUI or another DS**, follow the same recipe. The left column stays identical. The right column swaps to MUI's sx={{}} + theme.palette + theme.spacing, or whatever your DS's tokens look like. The pattern is the design system's job.

### The mapping-document template: for designers to own

The shadcn+Tailwind table above is one example resolution. Your DS owner maintains their own version, usually on a Figma page, a ZeroHeight component spec, or a team wiki entry. Here's the shape it should take:

| Primitive | Semantic option | DS token / value in your DS |
| --- | --- | --- |
| Heading | level: h1 | (e.g.) typography/h1, 48/56 desktop, 32/40 mobile, weight 800 |
| Heading | level: h2 | typography/h2, 32/40 desktop, 24/32 mobile, weight 700 |
| Heading | emphasis: default | color/text-primary |
| Heading | emphasis: inverse | color/text-on-dark |
| Description | emphasis: muted | color/text-secondary (approx text-muted-foreground on shadcn) |
| Button | variant: default | button/primary (brand-500 bg, white text, brand-600 hover) |
| Button | variant: ghost | button/ghost (transparent bg, current text, surface-hover on hover) |
| Section | spacing: comfortable | space/section-md, py 96 desktop, 64 mobile |
| Section | background: brand | surface/brand (brand-primary fill, text-on-brand contrast) |
| Card | variant: default | card/default (border-subtle, shadow-sm, radius-lg) |
| BackgroundMedia | overlay: strong | overlay/60 (black at 60% alpha) |
| Grid | columns: 3 | layout/grid-3-col (1-col on mobile, 3-col at md or later, gap-6) |

**Two review rules for the DS owner:**

1.  **Every semantic option in every schema has exactly one row.** No orphaned schema options. No gaps in the DS.
2.  **Every row points to a DS token, never a raw pixel/hex value.** If a row reads padding: 96px, that's a smell. Replace with a named spacing token.

This document is the contract between design and development. Whoever inherits your DS reads this and knows exactly what each schema option resolves to. Update the token, every primitive that uses it picks up the change on next build.

## The same 10 primitives compose every marketing section

![A 2x2 grid showing four composed sections built from the same 10 primitives: a Centered Hero (BackgroundMedia + Stack + Heading + Description + Button), a Feature Grid (Grid of 3 Cards each with Image + Heading + Description), a Testimonial row (Grid of 3 Cards each with quote + author avatar + name), and a Pricing table (Grid of 3 Cards each with tier + price + feature list + CTA). A caption reads: same primitives, different composition.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am625af79731d1d1a6/ca3b239a6718ea3eb53a07f2/composed-marketing-sections.png)

Once the primitives are registered, authors compose everything from them:

| Recipe | What it produces | Primitives involved |
| --- | --- | --- |
| [Hero from primitives](/docs/studio/hero-from-primitives) | 5 Hero variations (centered, split, full-bleed, thumbnail-top, two-CTA) | Section, BackgroundMedia, SplitRow, Stack + all 4 atoms |
| [Feature grid from primitives](/docs/studio/feature-grid-from-primitives) | 3-column and 4-column feature callouts, with icon + heading + description per card | Section, Stack, Grid, Card + all 4 atoms |
| [Testimonial cards from primitives](/docs/studio/testimonial-cards-from-primitives) | Testimonial rows with quote + avatar + author + role | Section, Grid, Card, SplitRow, Stack + all 4 atoms |
| [Pricing tiles from primitives](/docs/studio/pricing-tiles-from-primitives) | Three-tier pricing tables with feature lists and CTAs | Section, Stack, Grid, Card + all 4 atoms |

Each recipe walks through a real Content Type shape, the bindings, and the design-system tokens that back the composition.

## What each primitive uniquely contributes

| Without this primitive | You'd have to |
| --- | --- |
| **Section** | Duplicate padding, max-width, and background logic in every section-shaped component |
| **BackgroundMedia** | Register two Heros (with-bg + without-bg) or expose a background prop on Section |
| **SplitRow** | Register a SplitHero component with two slots per variant |
| **Stack** | Set inline margin-bottom on every atom individually |
| **Grid** | Register a FeatureGrid, TestimonialGrid, and PricingGrid, three components that only differ in what they contain |
| **Card** | Register a compound FeatureCard, TestimonialCard, PricingCard, and duplicate their header/content/footer structure three times |
| **Heading / Description / Button / Image** | Bake them into monolithic Sections and lose composability everywhere |

## Where CMS data flows in

Every atom's content prop is bindable. Every layout's composition prop stays static per Section.

![A diagram showing three composed Sections (Hero, Feature Grid, Pricing) with arrows from atom props to Content Type fields on the right. Heading.text, Description.text, Button.label, Button.href, Image.src arrows point at CT fields. Layout props (Section.spacing, Grid.columns, Card.variant) are marked STATIC with no arrows, they](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am64e687c9f84d2c89/1b592e2c1b2fffa4a00284da/composed-binding-model.png)

**Bindable (always):** every text / href / imageurl on an atom.

**Static (always):** layout props (Section spacing, Grid columns, Card variant, Stack alignment). These are design decisions the Section author makes once.

**Exposed Props (sometimes):** Section-level knobs a Template author might override per Template drop. See the next section for how this works and a worked example.

## Exposed Props: what to expose (and what not to)

Studio's Exposed Props let a Template author override a Section-level knob per Template drop: "3-column Feature Grid on /features, 4-column on /enterprise, brand-color hero on this landing page, default on that one". Which props are good candidates for exposure isn't obvious, and getting this wrong is where design-system drift starts leaking back into your library through the exposure surface.

**Two mental-model tests decide every candidate.**

### Test 1: The "author understands the output" test

**Would a marketing or content author understand this option in a review meeting, without knowing CSS, design tokens, class names, or code?**

**Yes: author gets it. Expose.**

-   "Make this Section have a brand background." maps to Section.background: default | brand | muted
-   "Show this feature grid as 4 columns on this Template." maps to Grid.columns: 2 | 3 | 4
-   "Use the outlined card style here, not the elevated one." maps to Card.variant: default | outline | ghost
-   "Make this hero taller." maps to BackgroundMedia.height: standard | tall | full
-   "Reverse the image / text order on mobile." maps to SplitRow.reverseOnMobile: true | false

**No: author has no reference. Don't expose.**

-   "Set padding to 96px." The author has no idea what's appropriate.
-   "Use background color #3b82f6." The author can't verify this is the right brand blue.
-   "Apply class bg-brand-500 hover:bg-brand-600." The author has no context for utility class names.
-   "Set font-weight to 800." The author doesn't map a numeric weight to a visual choice.
-   "Set overlay opacity to 0.62." The author has no sense of "right".

**If a content author needs a design-system reference doc to make sense of the option, don't expose it.** The option belongs to the design system, not to the author.

### Test 2: The design-system portability test

**If you migrated from Tailwind to Chakra tomorrow, would the values the authors have already picked for the exposed prop still make sense?**

**Yes: portable across DSes.**

-   Grid.columns: 3: the value 3 means "3 columns" in any DS.
-   Section.background: brand: every DS has a brand semantic token.
-   Card.variant: outline: every DS's Card has an outline equivalent.
-   BackgroundMedia.overlay: strong: semantic strength. Every DS defines its own tokens.
-   Section.spacing: comfortable: semantic density. Every DS defines a comfortable spacing token.

**No: breaks on DS migration.**

-   Section.background: '#3b82f6': Tailwind-blue-500 specific hex. Chakra's brand may be different. Content on 40 pages breaks.
-   Button.className: 'bg-blue-500': Tailwind class. No Chakra equivalent.
-   Heading.fontWeight: 800: number that may not map to Chakra's heavy / black naming.
-   Card.borderRadius: '12px': hard pixel. New DS uses md / lg tokens.

**If migrating design systems would silently break the exposed values on hundreds of Template drops, don't expose the raw value: expose a semantic name.**

### The two rules in one sentence

> **Expose semantic layout and variant choices that a content author can reason about directly. Never expose the tokens, hex codes, class names, or raw values that back them.**

### Which props on each primitive are good exposure candidates

The 10-primitive shortlist. Atoms never expose. Layouts expose 1 to 3 props each, chosen from these:

| Primitive | Good exposure candidates | Never expose |
| --- | --- | --- |
| **Heading** | (none) | any prop: content is bound, visual polish is DS-locked |
| **Description** | (none) | any prop, same reason |
| **Button** | (none) | any prop, same reason. If a Template needs a different variant, bind variant to a CT field or use two Buttons wrapped in a Condition Block |
| **Image** | (none) | any prop, same reason |
| **Section** | background, spacing, contentAlign | padding in px, hex colors, class names |
| **BackgroundMedia** | overlay, height, focalPoint | overlay opacity 0 to 100, min-height in vh values |
| **SplitRow** | ratio, reverseOnMobile | column widths in %, pixel gutters |
| **Stack** | spacing, alignment | raw gap values in px |
| **Grid** | columns, spacing | grid-template-columns strings, gap in px |
| **Card** | variant, padding | border widths, shadow values, corner radii |

### Worked example: which props to expose on a Centered Hero

Composition:

```
Section (spacing: spacious, contentAlign: center)
└── BackgroundMedia (image ← entry, overlay: strong, height: tall)
    └── Stack (spacing: normal, alignment: center)
        ├── Heading (text ← entry, level: h1, emphasis: inverse)
        ├── Description (text ← entry, emphasis: inverse)
        └── Button (label ← entry, variant: default, size: lg)
```

Walk each layout prop and apply both tests:

| Prop | Expose? | Reasoning |
| --- | --- | --- |
| Section.background | Yes | A Template on /enterprise requires brand-colored heroes. Landing pages require none. Author-understandable, DS-portable. |
| Section.spacing | Optional | If Templates genuinely need to vary (landing = comfortable, PDP = compact), expose. If it's always spacious, don't add exposure surface for no reason. |
| Section.contentAlign | Skip | Almost always center for heroes. Not worth the exposure surface. |
| BackgroundMedia.overlay | Yes | Different bg images need different overlay intensity. Semantic (none / subtle / strong), portable. |
| BackgroundMedia.height | Optional | Expose if Templates need full viewport on landing pages and standard on blog posts. |
| Any atom prop (Heading, Description, Button) | Never | Content is CMS-bound. Visual polish is DS-locked. Nothing to expose. |

**Rule of thumb: expose 1 to 3 props per Section, not 10.** If you find yourself exposing more than 3, you're probably fragmenting the design system through the exposure surface.

### Concrete anti-patterns: real cases we've seen

-   **Exposing Section.padding as a number.** Content-ops team overrode padding to 112 on a landing page. When the DS refresh moved comfortable from 96 to 128, that page kept its stale 112 and looked wrong. **Fix:** expose Section.spacing: compact | comfortable | spacious. The DS maps each token to its current pixel value.
-   **Exposing Card.className for one-off styling.** One author dropped border-2 border-purple-500 into a testimonial card as a quick fix. Six months later, brand refresh moved purple, that card kept the stale value. **Fix:** if outline isn't right, add a new Card.variant: featured. Don't expose free-form styling.
-   **Exposing Button.color as a hex picker.** Marketing team A picked #0066cc because they liked that blue. Team B picked #3b82f6. Now the site has two "primary blue" buttons that look slightly different on the same page. **Fix:** exposed color isn't a choice. Button variants are.

### Cross-references

-   [Expose Section Props](/docs/studio/expose-section-props): the mechanics of declaring an Exposed Prop in Studio.
-   [FAQ, "hex color on Button"](#faq-objections-youll-hit-in-review): the shorter version of the anti-pattern for hex-colors.

## Two-sided checklist: design + development

Before opening a PR that registers your primitives, both sides sign off.

**For the design-system owner (designer):**

1.  **Every semantic option has a token in the DS.** Walk each primitive's schema. Heading.level: h1..h4: H1/H2/H3/H4 typography tokens exist? Button.variant: default..link: a token per variant? Section.spacing: compact/comfortable/spacious: three distinct padding tokens? If a token is missing, add it before the primitive ships. This is the gap-scan.
2.  **No visual-polish props leaked into schemas.** Read every schema for the words size, color, padding, margin, borderRadius, fontWeight, letterSpacing, boxShadow. If any of these appear on an atom, that's design-system erosion. Reject or convert to a semantic option (emphasis, variant, spacing etc).
3.  **Semantic names match the DS vocabulary.** If your DS calls the primary button state "brand" not "default", rename in the schema. The schema is the shared vocabulary: designer, dev, and content author all read the same words.
4.  **The mapping from semantic option to token is documented in the DS.** Whoever inherits the DS should read one place and see "spacing.comfortable resolves to 96px on desktop, 64px on mobile". Wherever your token docs live (Figma, ZeroHeight, a wiki), that's where the mapping goes.

**For the developer registering the primitives:**

5.  **All 10 primitives registered**: 4 atoms + 6 layouts. Not one giant Hero.
6.  **category is set**: Atomic for the 4 atoms, Layout for the 6 layouts. Palette groups them.
7.  **Every semantic option resolves to a DS token in the React implementation**: see the mapping table above for shadcn + Tailwind. Substitute your DS. If a token doesn't exist yet, escalate to the DS owner before implementing.
8.  **Layout components render at 100% of their container's width**: the parent container controls sizing.
9.  **Slot props have a label** so authors see what to drop where.
10.  **Compound layouts (Card) use named slots** matching your DS's compound convention: header / content / footer on shadcn, whatever your kit uses.
11.  **Nothing hex-coded, sized in pixels, or picked by an author for visual polish**: every visual choice routes through the design system.

## FAQ: objections you'll hit in review

Read these before you defend the pattern in a design or engineering review. Every question below has come up in real reviews of this approach.

### "Our DS has a small H1 and a large H1 for hero vs subhero: do we add a size prop to Heading?"

**No.** Add another semantic level or a variant. Names describe intent, not size. The DS maps the intent to a rendered size.

Two ways to model it:

-   **Extend the level enum.** level: h1 | hero-h1 | h2 | h3 | h4. hero-h1 is the larger variant, DS maps it to the hero-typography token.
-   **Add a variant modifier.** variant: default | prominent on Heading. prominent is the amplified version at any level.

**Never size: sm | md | lg | xl.** That's visual polish escaping into the schema, and drift starts immediately.

### "Our compound Card has 5 slots: header, meta, media, body, footer. Does Card break?"

**No: register a new compound layout.** Card as documented has 3 slots because that's the common case. If your DS's compound container has 5, register something like RichCard with 5 named slots. Card the primitive name isn't canonical. It's a shape. Your DS names it.

Same rule for Tabs, Accordion, Carousel, Modal: whatever compound patterns your DS already provides, register them as Studio layouts with their existing slot conventions.

### "We already have 40 registered components as monoliths. How do we migrate?"

**Additive migration, not big-bang:**

1.  **Register the 10 primitives alongside your existing components.** Both work in the palette.
2.  **For the next new section marketing asks for, compose it from primitives** instead of extending a monolith.
3.  **When a monolith needs a new variant, refactor that one into primitives.** Leave the others alone.
4.  **Over 2 to 3 sprints**, the palette shifts from 40 monoliths and 0 primitives to 10 primitives and about 15 real compositions. No cutover moment. No forced deprecation.

Register the primitives. Don't unregister the monoliths on day one. Both coexist.

### "Our design system uses raw Tailwind classes with no semantic layer. What do we do?"

**Add the semantic layer first: it's a one-time DS investment.** The pattern requires named tokens (spacing-comfortable, color-brand, variant-default). Ways to add the layer:

-   **Tailwind's theme.extend** in tailwind.config.js: define semantic spacing / color / typography tokens as first-class Tailwind classes.
-   **CSS variables** in a theme.css: \--space-comfortable: 96px; @media (max-width: 768px) { --space-comfortable: 64px; }.
-   **A tokens file** (design-tokens.json) + a build step to emit CSS or Tailwind config.

Any of the three works. The point is: once the layer exists, this pattern's schemas resolve to named tokens instead of raw utilities. Update the token, every primitive picks it up.

### "What about interactivity: carousels, tabs, accordions, modals?"

**Grow the library additively as new needs arise.** These are Layer-3 layouts. Add them when you actually need one:

-   **Tabs**: 2+ named slots per tab
-   **Accordion**: repeatable header/content pairs
-   **Carousel**: Grid variant with pagination / swipe
-   **Modal / Drawer**: layer above the page with a trigger

The 10-primitive core is the starting library, not the ceiling. Every addition follows the same rules: semantic options only, DS-backed tokens, no visual-polish props.

### "What if a designer wants to expose a hex color on Button?"

**Push back: colors belong to variants, not raw values.** Reasons:

-   **Drift risk.** Once one hex is in a composition, teams add more. Style guide fragments.
-   **Semantic gap.** A hex says nothing about intent. Is it "destructive", "success", "brand"? The variant name carries that.
-   **Theme impossibility.** Dark mode, high-contrast mode, DS refresh: none of these work if hexes are inlined.

If a genuinely new intent exists (say, "success" for green confirmation buttons), add variant: success to Button and let the DS map it. Never color: '#22c55e'.

### "Marketing wants to A/B test a new Hero variant next week. How fast is that?"

**Same day.** Compose the new variant on canvas from existing primitives: reorder Stack items, swap SplitRow for BackgroundMedia, adjust Section.background. If the new variant needs a genuinely new atom or layout that doesn't exist yet, that's a small primitive addition + registration, usually one sprint.

Compare with the old model: open a PR to add a variant: newHero prop, wait for code review, wait for the deploy, and marketing waits a week per experiment.

### "The emphasis: default | muted | inverse list feels limiting. Can we add subtle, accent, warning?"

**Add them if they're real semantic states in your DS.** The three-value list in this doc is a starting minimum, enough for most marketing text. If your DS defines five text-color roles (default, muted, subtle, brand, warning), expose all five as emphasis options.

The rule is semantic names map to DS tokens, not these specific three values. Match your DS's real vocabulary.

### "Can a designer publish DS mapping changes without a code deploy?"

**Depends on where your tokens live.**

-   **If tokens are in code** (Tailwind config, CSS variables checked into the repo): no. Token changes require a PR + deploy, but downstream primitives pick them up automatically.
-   **If tokens are runtime CSS variables loaded from a token service** (Style Dictionary + a hosted config): yes. The DS owner updates the service. The site reflects it on next page load.

Most teams start in bucket 1. Consider bucket 2 if your DS refreshes often (multiple times per quarter).

### "How is this different from decompose-design or decompose-jsx-to-atomics?"

-   **This doc** is what shape should our library be, meta, up-front, one-time.
-   **decompose-design** is how do I break this specific Figma frame down, per-design, per-page.
-   **decompose-jsx-to-atomics** is how do I refactor this existing over-large component, per-component, per-migration.

Use this doc first to set the shape. Then decompose-design when a specific design lands. Then decompose-jsx-to-atomics when a specific monolith needs to be broken up.

## What this buys the team

**For content authors and marketing:**

-   **New section variety = drag/drop composition, not a PR.** Marketing wants a 3-column Hero, or a testimonial row with logos, or a 4-tier pricing table? Rearrange primitives on the canvas. No engineering ticket.
-   **What the author sees, day-to-day.** An author working on a landing page opens Studio's canvas, drags the Feature Grid Section from the palette onto their Template, and immediately sees three feature cards rendered from the CT's features list. Editing the feature list (add a fourth, reorder), the Section re-renders instantly. No visual difference between "the CMS entry changed" and "the composition was tweaked": both flow through the same canvas. Zero coordination with engineering.

**For designers and the design system owner:**

-   **The design system stays canonical.** Update the H1 token, every Section renders the new size. Add a new Button variant, it's available across every composed section immediately.
-   **Design consistency by construction.** No author picks a size, a colour, a border radius, or a pixel value. Every visual decision was decided by the DS. Drift is architecturally impossible.
-   **The schema is a shared vocabulary.** Designers, developers, and content authors read the same primitive names and semantic options. No translation loss between Figma, the schema, and the implementation.

**For developers:**

-   **10 primitives, ~30 semantic options total**: that's the whole registration surface. Small, learnable, testable.
-   **The library grows additively.** Need a Quote atom for testimonials? A Tabs layout for a comparison table? Add them. Existing Sections keep working. They're built on the primitives that don't change.

**For the whole system:**

-   **DS-agnostic pattern.** shadcn + Tailwind, Chakra, MUI, a custom kit: same 10-primitive shape, different token mappings. Switching or extending your DS doesn't invalidate the pattern.
-   **Applies beyond marketing.** Blog templates, product pages, docs sites, help-centre articles, product dashboards, admin surfaces: the same recipe generalises to every content domain. A docs site composes chapter pages from Section + Stack + Heading + Description + Image. A product dashboard composes metric tiles from Grid + Card + Heading + Description. An admin surface composes forms from atoms + Stack + Card. The vocabulary stays. The compositions change.

## Applicability beyond marketing pages: concrete examples

The four canonical recipes are all marketing sections because marketing is where Studio's per-variant velocity is most visible. The pattern is not marketing-specific. Three non-marketing worked examples:

-   **Docs site chapter page**: Section (spacing: comfortable) → Stack → Heading (h1) + Description + Image (16:9) + Description (long-form body) + Card (variant: outline, containing an inline code example). Same 10 primitives. Chapter authors compose new pages on canvas. The DS applies typography scale + spacing.
-   **Product dashboard metric strip**: Section (background: muted) → Grid (columns: 4) → Card (variant: default, per metric) → Heading (h4) + Description (a single big number as text) + Description (emphasis: muted, delta). Same 10 primitives. Analytics team adds a new metric, no engineering.
-   **Admin form**: Section (spacing: compact) → Card (variant: outline) → header: Heading (h3) + Description (muted) · content: Stack (spacing: normal) with atoms → footer: SplitRow (60-40) — leftSlot Button (variant: outline, "Cancel") + rightSlot Button (variant: default, "Save"). Same 10 primitives, atoms compose a form because the pattern is atoms + arrangement, not marketing-specific.

**When the pattern doesn't fit:** highly-interactive standalone applications (a spreadsheet, a Kanban board, a real-time chart tool). Those aren't compositions. They're single-purpose apps. Register them as-is, don't try to decompose. Studio composes layouts, not behaviour-driven interactive surfaces.

## Governance: who signs off on new primitives

As the library grows, three roles have veto power:

-   **DS owner (design):** does a proposed new primitive fit the DS's semantic vocabulary? Are all its semantic options backed by tokens? Signs off on the schema shape.
-   **Tech lead (engineering):** does the proposed primitive's registration + React implementation follow the pattern (no visual-polish props, wraps a DS counterpart, renders at 100% container width)? Signs off on the implementation.
-   **Content-ops or marketing lead:** is this primitive genuinely needed for a real content-shape, or is it speculative? Signs off on the demand.

**Adding a new primitive is a three-way call**, not a unilateral developer decision. This is what keeps the library from bloating to 30+ primitives no one uses. Every addition follows the same [two-sided checklist](#two-sided-checklist-design-development) above. The difference is only that both the DS owner and the tech lead sign, and the content-ops sponsor is named.

**When to say no:** if a proposed primitive can be composed from existing ones with acceptable ergonomic loss (say, a HeroWithTwoCTAs that's really Stack + two Buttons), the proposal is rejected. Compose first, add primitives only when composition genuinely can't reach the needed shape.

## Migration path: for teams with existing registered components

If you already have 20 to 40 registered components as monoliths, the pattern isn't a big-bang rewrite. It's additive over 4 to 6 sprints. Concrete rollout example:

**Starting state:** ~40 registered components in your palette, mostly monolithic Sections (Hero, FeatureBlock, PricingTable, Testimonials, etc.). Palette reads as a flat wall of tiles.

**Target state:** 10 primitives registered + ~15 composed Sections saved. Legacy monoliths remain registered for backward compatibility until each is migrated. No cutover moment.

### Sprint 1: Register primitives, no cutover

-   Register the 10 primitives alongside your existing 40 components. Both work.
-   DS owner runs the token gap-scan. Closes any missing DS tokens.
-   Palette now shows 50 tiles. Group by category (Atomic, Layout, Legacy) so the split is visible.
-   **Zero user-facing change.** No template edits. Existing pages render exactly as before.
-   Success criterion: developer + designer sign off that the 10 primitives + DS tokens work via one throwaway Section on a test template.

### Sprint 2: Compose the next new section from primitives

-   Marketing asks for a new section variant this sprint (they always do). Instead of writing a CustomerStoryComponent monolith, **compose it from primitives on Studio's canvas**. Save as a Section named e.g. Customer Story.
-   First real proof point: authors compose a new variant on canvas. Engineering never touched the codebase.
-   Publish. Measure velocity. The composition took ~30 minutes of authoring instead of a sprint of engineering.

### Sprint 3: Refactor one existing monolith into primitives

-   Pick your most-actively-modified monolith, the one marketing keeps requesting new variants for (usually Hero).
-   Compose 3 to 5 variants (Centered, Split, Full-bleed, Thumbnail-top, Two-CTA) from primitives. Save each as a Section.
-   **Old Hero monolith stays registered.** Existing templates using it keep rendering.
-   New templates use the composed variants.
-   The palette now has 50 legacy tiles + 10 primitives + 5 composed Hero Sections. Growing, but usable. The categorization keeps it navigable.

### Sprint 4: Deprecate the refactored monolith

-   Reference-count: check which templates still use the Hero monolith. Usually a handful.
-   Migrate those templates to the composed variants one at a time. Each migration is ~15 minutes of authoring.
-   Once zero templates reference the monolith, **un-register it**. Palette shrinks by 1.
-   Repeat sprints 3 to 4 for the next most-modified monolith.

### After 4 to 5 iterations

Palette: 10 primitives + 15 to 20 saved composed Sections + 15 to 20 remaining legacy monoliths (the ones nobody's asking to modify, safe to leave). Marketing composes new variants directly on canvas. Engineering focuses on new primitives, not new monoliths.

### Rules for the migration

-   **Never delete a monolith without confirming zero templates use it.** Reference-count first. Studio's admin surface has an "Uses of this component" view. Use it.
-   **Migrate one monolith per sprint**, not all at once. Interleave with normal feature work, no dedicated "migration quarter."
-   **Composed Sections aren't 1:1 replacements**. Usually 1:N (one monolith becomes several composed variants). Take the opportunity to split what was previously conflated behind a variant prop.
-   **Don't halt new work to migrate.** Migration happens alongside feature work. The 10 primitives + legacy monoliths coexist in the palette indefinitely if needed.
-   **Legacy monoliths that nobody's touching are fine.** If a TrustBadge component was registered 2 years ago, works, and has no pending changes, leave it. Migration isn't a purity crusade. It enables future velocity.

## Recommended rollout

For a **new project**, sequenced so design + development land together, not in serial handoff.

1.  **Designer + developer read this doc together.** 30-minute working session. Walk through each primitive's schema. Confirm semantic names match your DS vocabulary. Note any DS token gaps.
2.  **Designer closes DS token gaps.** For every semantic option that doesn't have a token yet, add one to the DS (Figma library, token file, Tailwind config, wherever tokens live). This unblocks step 3.
3.  **Developer registers the 10 primitives** in one PR. Each primitive's React implementation wraps its DS counterpart (shadcn <Button> if you use shadcn, Chakra <Button> if you use Chakra, your own if custom) and applies your DS's tokens per the mapping table.
4.  **Build one Hero variation** in Studio's canvas, bound to a real Content Type, as a smoke test. See the [Hero recipe](/docs/studio/hero-from-primitives). Designer reviews the rendered result against the DS.
5.  **Build one section per pattern** (Feature Grid, Testimonial, Pricing) to confirm the primitives compose cleanly outside Heros. Same design review at the end.
6.  **Extend the library additively** as new section types surface. Suggested near-term atoms: Quote, FeatureList, Badge. Suggested near-term layouts: Tabs, Accordion. Same two-sided checklist applies to every addition.

## Skills that apply this framework

The 10-primitive pattern + the four-question framework are the strategy. The skills below run it operationally. Use the one matching your starting point:

| You're starting with | Skill | What it does |
| --- | --- | --- |
| A design system, no library yet | [design-component-library](https://studio-documentation.contentstackapps.com/prompts/design-component-library.html) | Walks Q1 to Q4 across your whole design system. Emits a decomposition sheet with the 10-primitive proposal and DS token gaps flagged. |
| One existing component you want to classify | [classify-existing-component](https://studio-documentation.contentstackapps.com/prompts/classify-existing-component.html) | Runs **only Q1** on one component and stops: Atom, Layout, or Compound. Routes to the right next skill. Use for audit / triage / sanity-check-before-registering. |
| A page written as one giant React component | [decompose-jsx-to-atomics](https://studio-documentation.contentstackapps.com/prompts/decompose-jsx-to-atomics.html) | Breaks a monolith into Layer-1 atoms + Layer-2 containers + Layer-3 Sections. Runs Q1 recursively on the render tree. |
| A Figma frame or screenshot | [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html) | Same taxonomy, visual input. Derives Sections + primitives from the design. |
| An atomic or layout classified and ready to ship | [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html) | Reads the component, infers the schema, emits the registerComponent() call. Enforces Q1 to Q4 at registration time. |

**When you're not sure which to pick**, run classify-existing-component first on any specific component. Run design-component-library first on any specific design system.

## Related reading

**Registration + schemas:**

-   **[Component shape rules](/docs/studio/component-shape-rules)**: five tactical rules for shaping each individual component so it binds cleanly. Read alongside this pattern doc: strategy + tactics together.
-   **[Register a component](/docs/studio/register-components)**: the mechanics of registerComponent() for each primitive.
-   **[Component schema prop types](/docs/studio/component-schema-prop-types)**: the full list of prop types Studio accepts.
-   **[Configure design tokens in Studio](/docs/studio/configure-design-tokens-in-studio)**: how the tokens behind the semantic options resolve.

**Composing into Sections + Templates:**

-   **[Sections chapter](/docs/studio/build-and-use-sections)**: how these primitives compose into reusable Sections with Exposed Props and Section Slots.
-   **[Card grid with slots](/docs/studio/card-grid-with-slots)**: the list-and-slot pattern applied to a card grid built from these primitives.
-   **[Smart containers](/docs/studio/smart-containers-guide)**: Repeater and Condition Block, the two smart containers this pattern uses inside compositions.

**Operating at scale (the four cross-cutting concerns):**

The pattern is silent on these because they're orthogonal to what to register, but they're real reviewer questions. Each has a dedicated advanced chapter:

-   **[Testing strategies for Studio-rendered pages](/docs/studio/testing-strategies-for-studio-rendered-pages)**: unit-test the atoms, integration-test the composed Sections, Playwright the Templates. The 10-primitive pattern actually simplifies testing: fewer components to test, and every semantic option is a bounded enum you can exhaustively cover.
-   **[Managing multiple locales at scale](/docs/studio/managing-multiple-locales-at-scale)**: one composition binds to localized CT fields. You don't compose N times per locale. Localization happens at the CMS-field layer, below the primitive layer.
-   **[Performance and bundle-size optimization](/docs/studio/performance-and-bundle-size-optimization)**: 10 primitives are lazy-registrable. Composed Sections don't inflate the bundle. Read this before you assume "10 primitives means 10 imports on every page."
-   **Accessibility**: not a dedicated doc, but a note: **the pattern makes WCAG compliance a DS-owner responsibility, not a per-composition one.** Each primitive's React implementation wraps a DS component that should be a11y-compliant (shadcn's <Button> handles ARIA, Chakra's does, MUI's does). Getting the primitives right guarantees accessibility everywhere they're composed. If your DS component library isn't a11y-compliant, fix that once at the DS layer. Every composed Section inherits.
