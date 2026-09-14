---
title: "Generate a Section"
description: "Use csdx studio:section:create to turn a component and a content type into a ready-to-edit Studio Section, including wrapper sections and making inner components composable."
url: /studio/cli-section-create
---

# Generate a Section

## Generate a Section

csdx studio:section:create turns one existing UI component plus a connected content type into a ready-to-use Studio [Section](/docs/studio/sections-guide) (bindings, repeaters, and condition blocks included) and writes it into your Studio project. It replaces most of the manual canvas authoring you'd otherwise do when turning a component into a reusable, content-bound block.

It works for **any framework, language, or coding pattern**. Instead of assuming one project shape, the CLI reads your component the way a developer would, matches its props to the content type's fields, and asks you to confirm before it writes anything.

The command is **always interactive**: it asks before every write, and nothing is created without your confirmation.

## Prerequisites

-   The Studio CLI installed and a project linked. See [Installation & setup](/docs/studio/cli#one-time-setup).
-   The component file you want to turn into a Section, somewhere in your project.
-   A content type to bind to (or let the CLI help you create one during the flow).

## Usage

```
csdx studio:section:create --component=src/components/HeroBlock.tsx
csdx studio:section:create --component=src/components/HeroBlock.tsx --content-type=blog_post
csdx studio:section:create --component=src/components/HeroBlock.tsx --name "Hero Banner"
```

| Flag | Alias | Description |
| --- | --- | --- |
| --component | -c | Path to the parent component file, any framework/language (required) |
| --content-type | -t | UID of the connected content type (skips the picker prompt) |
| --name |  | Section display name (defaults to one derived from the component name) |

## How it works

The command runs a short decision flow. You stay in control at each step. The CLI does the analysis and the writing.

1.  **Pick a content type.** Choose from a searchable list, or pick **＋ Create a new content type**. Pass \--content-type to skip this prompt. If the component needs fields the content type doesn't have, the CLI can propose a non-destructive extension (it appends fields, it never deletes) or a brand-new content type. You confirm the change before it's written.
2.  **Confirm where it binds.** The CLI matches your component's props to the content type's fields and shows the **top matches** as an annotated tree: it lifts the best candidate locations (a, b, c), marks the field each one binds to, and colors bound fields so you can see the fit at a glance. Choose a match, ask it to **find more** locations, or pick **None: I'll choose the scope myself** to bind a specific field manually.
3.  **Review and write.** The CLI renders the final Section as a node tree and asks you to confirm. On confirmation it registers the component (if it isn't already) and writes the Section. The Section is fully populated and ready to open on canvas.

After the Section is written, two optional follow-ups may run: **wrapper sections** and **composable inner components**.

## Wrapper sections (reaching content that's nested deep)

When your component matches fields that sit **deep inside** a content type (behind a global field, or across a reference to another content type), the new Section is anchored at that inner location. That Section isn't directly reachable from the templates a page author works with.

To bridge that gap, the CLI walks up the content type from the match point and, at each **boundary** (a global field or a reference) that genuinely needs one, offers to create a **wrapper section**: a small section with a drop zone that **defaults to the section you created**. Dropping the wrapper onto a template surfaces your section in the right place, already filled in.

-   You get **one question per boundary**, from the inside out. Each question shows a preview of exactly what a "yes" would create.
-   Answering **no** stops the climb: nothing above that point is created. Re-running the command later resumes from where you stopped.
-   If a suitable wrapper already exists, the CLI asks before changing it (it never silently overwrites a section you built manually), and if a wrapper's drop zone currently defaults to a different section it asks whether to point it at yours instead, or leave it and show you the link.

The result is a small chain of sections that makes your deeply-nested component droppable on a page, with sensible defaults already wired. These drop zones are [Section Slots](/docs/studio/section-slots). Their defaults follow [slot defaults and allowed sections](/docs/studio/slot-defaults-and-allowed-sections).

> **Reference-depth caveat.** Studio's auto-binding resolves reference chains up to 3 hops and section-in-section structure up to 2 passes. Sections behind deeper reference chains may need a manual bind on canvas. The CLI itself sets no depth limit: the caveat is a platform one.

## Composable inner components (turning nested components into slots)

If the component you're turning into a Section **renders other components from your project**, the CLI can make those inner components **composable**, so a page author can rearrange or swap them on canvas instead of them being locked into the code.

When it detects eligible inner components, it names them and asks whether to make the Section composable. If you agree, it replaces each eligible inner component in your source with a [<Slot>](/docs/studio/slot-props-reference) that passes the same data through, **leaving the rest of your code (loops, layout, keys) untouched**, and registers the inner component so it renders inside the slot with its values bound.

For each change you choose how it's applied:

-   **Apply**: the CLI edits your component source in place.
-   **Apply, keep the original**: same edit, but your original code is left commented out for easy revert.
-   **Copy-paste yourself**: the CLI prints the change and waits for you to confirm you've pasted it before continuing.

Notes:

-   Inner components whose props include **functions/callbacks** (event handlers and the like) are skipped automatically: those can't be represented as editable slot content.
-   The command safeguards your source: an edit is only applied if the file still parses afterward. Otherwise it falls back to printing the change for you to paste.
-   These are **component slots** (their content lives in the Section), a different layer from the template-level Section Slots created by wrapper sections. See [Slot vs Section Slot](/docs/studio/section-slots).

## Worked example

You have HeroBlock.tsx and a blog\_post content type with a hero group (heading, subheading, image):

```
csdx studio:section:create --component=src/components/HeroBlock.tsx --content-type=blog_post --name "Blog Hero"
```

1.  The CLI analyzes HeroBlock, matches heading/subheading/image to the hero group, and shows the match tree with those fields highlighted.
2.  You accept the match. The CLI renders the final Section tree and you confirm.
3.  Because hero is a group nested in blog\_post, the CLI offers a wrapper section so the Blog Hero is droppable on a blog template. You say yes.
4.  HeroBlock renders a <Badge> component. The CLI offers to make it composable. You choose **Apply, keep the original**.

You end with a **Blog Hero** section bound to the hero group, a wrapper that surfaces it on templates, and a Badge slot an author can restyle or replace, all openable from Studio, with canvas URLs printed at the end.

## Pitfalls

| Pitfall | Why it bites | Fix |
| --- | --- | --- |
| Running before linking a project | The Section has nowhere to be written | Run csdx studio:project:set first. Confirm with studio:project:get |
| Expecting a non-interactive run | The command always asks before writing | Run it interactively. Flags pre-fill answers but don't remove the confirmations |
| Deeply nested / long reference chains not binding on canvas | Studio auto-binding caps reference depth (3 hops) and section-in-section resolution (2 passes) | Add the wrapper sections the CLI offers. Bind the remaining hops manually on canvas |
| Inner component didn't become a slot | Components whose props include functions/callbacks are ineligible | Expected: leave it in code, or refactor the callback out if it should be author-editable |
| Answered "no" to a wrapper and lost the chain | "No" stops the upward climb by design | Re-run the command later. It resumes from where it stopped |

## Speed it up with an LLM

Prefer a chat-driven flow in your editor? The [design-section-from-jsx](https://studio-documentation.contentstackapps.com/prompts/design-section-from-jsx.html) prompt is the conversational equivalent: hand it your component and it walks the same decisions.

## See also

-   [Studio CLI](/docs/studio/cli): the full command set, each on a separate page.
-   [Sections](/docs/studio/sections-guide) and [Binding a Section to CMS data](/docs/studio/bind-a-section-to-cms-data): what the command produces and how binding works.
-   [Section Slots](/docs/studio/section-slots), [Slot props](/docs/studio/slot-props-reference): the slot primitives behind wrapper sections and composable inner components.
-   [Linked-schema matching rules](/docs/studio/linked-schema-matching-rules): how a Section's linked schema drives template-drop matching.
