---
title: "Generate Components from Figma"
description: "Learn how to use the Studio Figma Plugin and Studio CLI to turn Figma frames into committed React components registered on the Studio canvas."
url: /studio/generate-components-from-figma
uid: blt2cb493e134f087a3
---

# Generate Components from Figma

## Generate Components from Figma

The "generate" path turns a Figma frame or component set into **real React components** in your project, registered for use on the Studio canvas. The output is committable source, Button.tsx, Card.tsx, Hero.tsx, etc., along with the matching style file, metadata, and (optionally) a register-design-tokens.ts that brings your Figma tokens into Studio.

The workflow has **two complementary tools**:

-   **The Studio Figma Plugin:** installed from the Figma Marketplace (plugin id 1541766192464484605), runs inside Figma. The designer selects frames, gives them a layout prompt, picks responsiveness, lets the plugin **Auto Map** layers to existing code components, and clicks **Generate Design**. The plugin produces a **Component ID** (and, when relevant, a **Design Token ID**) plus the composition JSON and CSS variables.
-   **The Studio CLI** (csdx): installed on the developer's machine. Used once to publish existing code components for the plugin's Auto Map, and then again to materialise the plugin's output: csdx studio:component:add --component-id=<id>, csdx studio:design-token:add --design-token-id=<id>, and csdx studio:component:register to make the new component selectable on the Studio canvas.

Different from [copy/paste](/docs/studio/copy-and-paste-from-figma-to-studio), which produces a one-off composition tree from a single Figma frame. Generate produces reusable components you'll keep using forever.

> **Beta.** The Studio Figma Plugin is currently in **limited Beta**. Some screen labels and UI states may shift between releases, so if a screenshot below doesn't match what you see, trust the labels in your live plugin and let the docs team know.

## When This Is the Right Move

| Situation | Generate is right when… |
| --- | --- |
| You have a Figma design system / component library | ✅ |
| You want first-class React components in your repo (committed, version-controlled) | ✅ |
| The same Figma component should ship as one Studio component used many times | ✅ |
| You're building out an enterprise component library from scratch | ✅ |
| You want a one-off layout brought into one composition | Use [copy/paste](/docs/studio/copy-and-paste-from-figma-to-studio) instead |

## The Flow at a Glance

![Auto Map panel in the Studio Figma plugin showing layer-to-component mapping](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama5d1cd96a757dac2/af0391fa0afc8bdd0069d040/figma-plugin-auto-map.png)

There are three stages:

1.  **One-time setup:** both sides prepare. The developer installs the CLI and runs csdx studio:component:sync so existing code components show up inside the plugin's Auto Map. The designer installs the plugin and authorises.
2.  **Generate in Figma:** the designer drives the plugin: select frame, prompt, responsiveness, Auto Map, **Generate Design**. The plugin yields a Component ID, optionally a Design Token ID, plus composition JSON and CSS variables.
3.  **Apply via CLI:** the developer runs commands to materialise the plugin's output as source code in the project and to publish the new component back to Studio.

## Available CLI Commands

The Studio CLI exposes four primary commands for the Figma workflow, plus an auxiliary command for design tokens. They map to the three stages above as follows:

| Command name | csdx invocation | What it does | When it runs |
| --- | --- | --- | --- |
| **Project** | csdx studio:project:set  
csdx studio:project:get | Connects your CLI session to a specific Studio project so every subsequent component and design-token action is linked to the right project. Use :set to pick or switch the project; :get to show the currently selected one. | Stage 1, once per project (re-run when switching projects) |
| **Sync** | csdx studio:component:sync --component-path=<path> | Publishes the **existing** code components in your repo into the linked Studio project so that the Studio Figma Plugin can match Figma layers against them in Auto Map. **Without Sync, Auto Map has nothing to match against.** | Stage 1 setup; re-run any time the component library changes (new components, renamed exports, schema updates) |
| **Add** | csdx studio:component:add --component-id=<id> | Generates a **new** code component from a Figma design and writes it into your project as React source + style file + metadata file. Run this after the Studio Figma Plugin produces a Component ID (the plugin's **Copy CLI Command** button prefills this exact invocation for you). | Stage 3, once per component the plugin generated |
| **Register** | csdx studio:component:register --component-path=<path>  
or  
csdx studio:component:register --component-dir=<dir> | Adds a **local or custom component** to Studio so authors can drop it on the canvas. Use this for components you wrote by hand, modified after generation, or want to expose to Studio without running the plugin. | Stage 3, after Add (or any time you hand-author a component) |
| _(auxiliary)_ **Design token: add** | csdx studio:design-token:add --design-token-id=<id> | Imports design tokens (colours, typography, spacing, effects) from the Figma plugin's Design Token export and writes a register-design-tokens.ts file that you then import from your app entry point. | Stage 3, once per Design Token ID the plugin produced |

The mental model:

-   **Project** scopes everything below it to one Studio project.
-   **Sync (existing code to plugin)** is the one-way street that **lets the plugin see what you already have**.
-   **Add (Figma design to new code)** is the other one-way street that **brings the plugin's output back into the repo as new files**.
-   **Register** is the final publish step: local components, generated or hand-written, become available on the Studio canvas.

Sync and Add are easy to mix up because both flow between Figma and the project. The trick:

> _Sync pushes UP what already exists; Add pulls DOWN what the plugin just generated._

## Stage 1: One-time Setup

### Developer side: install the Studio CLI

```
# 1. Install the Contentstack CLI + Studio plugin
npm i -g @contentstack/cli
csdx plugins:install @contentstack/studio

# 2. Pick your region (NA, EU, etc.), then log in via OAuth
csdx config:set:region
csdx login --oauth
```

### Developer side: link to a Studio project (Project command)

```
# Pick the project this CLI session will act on
csdx studio:project:set --project-id=<project-id>

# Verify which project is currently linked
csdx studio:project:get
```

Every subsequent CLI action runs against this project; Sync pushes components into it, Add pulls Figma designs into your local repo on its behalf, Register publishes back to it. Re-run :set whenever you switch between projects.

### Developer side: publish existing components for Auto Map (Sync command)

If your repo already has React components, **publish them to the linked Studio project so the Studio Figma Plugin's Auto Map can match Figma layers to them**:

```
csdx studio:component:sync --component-path=<path-to-file>
```

Example:

```
csdx studio:component:sync --component-path=./components/HeroBanner.tsx
```

**Options**

| Flag | Required | What it is |
| --- | --- | --- |
| --component-path=<path-to-file> | Required | The full path to a single component file |

For the full set of available flags across all CLI commands, see the [Studio CLI reference](/docs/studio/studio-cli).

Once executed, the CLI registers and maps the specified component internally; it then appears in the Figma plugin's mapping dropdown, where designers can link Figma layers to it during Auto Map.

This is the one-way street **upstream**: existing code to Studio project, visible to the Figma plugin. Without Sync, Auto Map has nothing to match against and every layer ends up as a generic frame. Re-run Sync whenever you add, rename, or modify components in the repo.

### Designer side: install the plugin

1.  Open Figma → **Resources → Plugins → Browse plugins in Community**
2.  Search for **Contentstack Studio** (plugin id 1541766192464484605)
3.  Install, then click **Run**

4.  Pick your organisation's region, click **Authorize**; the plugin opens an OAuth window, completes the sign-in, and returns to Figma

5.  Confirm the Figma file is **editable** (read-only files block Auto Layout updates, token adjustments, and component mapping)

## Stage 2: Generate in the Studio Figma Plugin

With the plugin running and the file editable, the designer does five things:

1.  **Select frames or components on the canvas.** Standard click for one frame, Shift+click to select several.
2.  **Add a layout prompt** in the plugin panel, e.g. _"Make this a carousel"_, _"Stack these as a 3-column grid on desktop, single column on mobile"_. **Prompts shape layout, spacing, and responsiveness only**; they do not add behavior (no click handlers, modal logic, animations).
3.  **Pick a responsiveness option**:
4.  **Optimize for responsiveness:** generates a layout that adapts across desktop, tablet, and mobile.
5.  **Fixed-size screens:** keeps the layout at the exact dimensions of the selected frame.
6.  You can't mix responsive and fixed-size in the same export session; pick one per Generate Design run.
7.  **Auto Map:** open the plugin's **Component Mapping** tab. It lists the detected Figma layers in the selection on the left and the corresponding code components on the right. Click **Auto Map** to match them automatically; the plugin compares on **component name, description, and properties**. Any layer without a matching code component stays unmapped, and the designer can link it manually. Review and adjust every mapping before continuing. **Only components published via csdx studio:component:sync appear in the plugin's mapping dropdown**; if Auto Map shows nothing to match against, the developer needs to run Sync first.

![Auto Map panel in the Studio Figma Plugin — each Figma layer is matched to a code component synced via csdx studio:component:sync; designers can manually override any row.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama5d1cd96a757dac2/af0391fa0afc8bdd0069d040/figma-plugin-auto-map.png)

1.  **Click Generate Design.** The plugin produces:
2.  A **Component ID:** feed this to csdx studio:component:add to generate React source
3.  A **Design Token ID** (when tokens were involved): feed this to csdx studio:design-token:add
4.  **Composition JSON:** pastable directly onto a Studio canvas via Copy to Studio (the [copy/paste](/docs/studio/copy-and-paste-from-figma-to-studio) flow)
5.  **CSS variables:** usable in external stylesheets via Copy CSS Variables

The plugin's four output buttons:

| Button | What it does | When to use |
| --- | --- | --- |
| **Copy to Studio** | Puts composition JSON on the clipboard, pasteable directly onto a Studio canvas | When the Figma design includes components that are **already built and registered in Studio and do not require further changes** before import; fastest path, no CLI needed. See [copy/paste](/docs/studio/copy-and-paste-from-figma-to-studio). |
| **Copy CLI Command** | Puts a ready-to-run csdx studio:component:add --component-id=<id> on the clipboard | When the Figma design includes a component that **doesn't have generated code yet, or needs refinement** (colour, spacing, behavior tweaks) before adding to Studio. Useful for advanced JavaScript components and any time you want committable React source. |
| **Import Design Tokens** | Surfaces the csdx studio:design-token:add command for the plugin's generated Design Token ID: registers Figma tokens in Studio | Bringing colour / typography / spacing / effect tokens across once per design system update |
| **Copy CSS Variables** | Puts --token-name: value declarations on the clipboard | When the project consumes tokens through plain CSS / external stylesheets rather than Studio's token system |

## Stage 3: Apply the Plugin's Output via the CLI

### Add command: pull the Figma design into the repo

The Add command has two sub-commands:

-   **add component:** generates a reusable React component (structure + styles + metadata) from a Figma design
-   **add design-tokens:** imports visual properties (colour, typography, spacing, effects) from Figma as configuration files

#### Add component

```
csdx studio:component:add --component-id=<component-id>
```

This is the one-way street **downstream**: Figma plugin's output to new files in your project. Use it once per Component ID the plugin produced (the plugin's **Copy CLI Command** button puts the full invocation, including the right \--component-id, on your clipboard; you can paste and run it directly).

**Tip:** You can run this command without keeping Studio open; the CLI analyses your project, detects the styling method, and generates locally. No browser session needed.

The CLI detects your project's styling method (Tailwind CSS, CSS Modules, plain CSS, styled-components) and writes:

-   A React component file (.tsx)
-   A matching **style file** in the project's chosen styling format
-   A **metadata file** capturing the prop schema the plugin inferred

**Overriding the detected styling method:** include the preference in your prompt at the CLI prompt: _"Use CSS Modules instead of Tailwind."_ The CLI honours the override for this run.

**Optional layout / behavior prompts:** at the same step you can shape the output further:

-   _"Add a carousel with auto-scroll"_
-   _"Use a two-column layout"_
-   _"Use the existing useBreakpoint hook for the responsive switch"_

**Iterating on the output:** after the CLI prints the generated files, it prompts:

-   Press **Y** to regenerate with a new prompt
-   Press **N** to accept the output and write the files to your project

So you can refine iteratively without re-running the plugin from Figma each time.

The files land in your local project directory, ready to commit, modify further, or feed straight into the Register step.

#### Add design tokens (design-token:add)

```
csdx studio:design-token:add --design-token-id=<design-token-id>
```

This scans your project's existing token sources (JavaScript/TypeScript files, CSS files with custom properties such as global.css, JSON/JS token structures) and asks three questions:

1.  **Include Studio's default design tokens?** (Y/N)
2.  **Y:** include Studio's default tokens alongside the tokens in your project files
3.  **N:** import only the tokens defined in your project files
4.  **Pick an access level** for what content editors can use on the canvas:
5.  **dynamic:** editors can only use design options coming from the entries linked to the Studio project. They cannot access or apply custom colours or other styling available in the Studio editing canvas.
6.  **tokens:** includes access to the dynamic components AND the custom design tokens added through the CLI
7.  **arbitrary:** extends access beyond dynamic and CLI-added tokens, allowing editors to use any design properties available in the Studio canvas (custom colours, styles, visual adjustments)
8.  **Output path:** defaults to ./src/config/register-design-tokens.ts inside your project.

> **Update behavior.** To refresh existing tokens after the design system changes, run the same command again with the same Design Token ID; the CLI auto-refreshes any previously registered tokens. No need to delete and re-import.

Once you import the generated file from your app entry (see below), the design tokens appear in the **Design tab** of Studio for visual editing.

![Terminal showing csdx studio:design-token:add generating the register-design-tokens.ts file — interactive prompts ask whether to include Studio's default tokens, what access level (dynamic / tokens / arbitrary) to grant authors, and the output path.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc8c90159069e3dfd/226a7a0f6d2bb4ea1a746aef/figma-cli-design-token-generated.png)

The CLI writes a register-design-tokens.ts file. **Import it from your app entry point** (e.g. main.tsx / index.tsx) so the tokens are registered before <StudioComponent /> mounts:

```
// main.tsx
import "./register-design-tokens";
```

![Import statement added to main.tsx (or equivalent app entry) so the generated register-design-tokens.ts runs at startup, registering the tokens before Studio components mount.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7740d1df6beb2168/54d4f9195e3745fbacaf1eaa/figma-cli-design-token-import.png)

### Register command: publish local components back to Studio

You can register either a single component file or all components in a directory:

```
# Single file
csdx studio:component:register --component-path=<path-to-component-file>

# Example
csdx studio:component:register --component-path=./src/components/Navbar.tsx

# Whole directory
csdx studio:component:register --component-dir=<path-to-directory>

# Example
csdx studio:component:register --component-dir=./src/components/
```

Once executed, the CLI scans the provided file or folder for **valid component declarations** (e.g., export default, type, interface) and registers them with Studio. After registration, the components appear in Studio's visual editor for drag-and-drop reuse.

Register adds a **local or custom component** to Studio for reuse. The component can be one of three things:

-   A component the **Add command just generated** from a Figma design; register it to expose it on the Studio canvas
-   A component you **modified after generation**; re-register to push the updated prop schema
-   A component you **hand-wrote** (not from Figma at all): Register is the path to expose any local React component to Studio, whether the plugin was involved or not

After Register, the component appears in the Studio canvas palette for authors to drop and bind.

> **Sync vs Register, the easy mistake.** Sync makes existing components visible **to the Figma plugin** (for Auto Map). Register makes components visible **to authors on the Studio canvas** (for drop + bind). Different audiences, different commands.

## Figma File Hygiene: Best Practices the Plugin Assumes

The plugin's quality is bounded by the Figma file's structure. The items that matter most:

### Use Auto Layout on every frame

The generated layout adapts consistently across screen sizes; without Auto Layout, the plugin falls back to absolute positioning and the output won't reflow on different breakpoints.

![Figma frame with Auto Layout applied — the right panel shows the Auto Layout properties (direction, spacing, padding) and the layers panel shows the frame icon with the Auto Layout indicator.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame27aa7fe260411dc/e3836fb857dd775707ceaf15/figma-best-auto-layout.png)

### Define image export settings explicitly

Images get recognised as single assets and exported cleanly; otherwise they may be flattened into the surrounding frame.

![Figma's Export panel for an image layer — Format set to PNG, scale 1x, with the "Include in export" checkbox visible.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5eb2f914bc27e98d/d8527ab583091560fdbb80e6/figma-best-image-export.png)

### Group background elements into one group

Cleaner exports, fewer stray rects in the output. Backgrounds, gradients, and decorative shapes belong in a single group so the generated component tree doesn't fan out into noise.

![Figma layers panel showing background rectangles, gradient overlays, and decorative shapes wrapped inside one "Background" group above the foreground content.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am12f156eba9511406/2dcb271fa5d26ccb70e94e7d/figma-best-group-background.png)

### Keep spacing between text and design elements

Adequate spacing prevents misalignment during code generation; text bounding boxes that touch (or overlap) adjacent rects can produce off-by-one positioning bugs in the emitted CSS.

![Two design layouts side by side — left shows text overlapping a button; right shows the same layout with proper padding between text and design elements.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am76553ffff0bc9d4b/401e2ee1150ec9d24e72f033/figma-best-element-spacing.png)

### Size text bounding boxes snugly

Text rects should match the actual content's width and height; no extra whitespace inside. Loose text boxes get translated into unnecessary padding around the text element.

![Comparison of text bounding boxes — left shows oversized boxes with excess whitespace, right shows boxes tightly hugging the text content.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am71dd25d1f0efc00e/cecbfdb9977bcc818a03b091/figma-best-text-box-sizing.png)

### Other practices

| Practice | Why it matters |
| --- | --- |
| Use **fully opaque colours** | Token values stay consistent; partial-opacity rendering is unreliable |
| Set **frame dimensions** to real device or browser sizes | Generated breakpoints make sense |
| Use **meaningful frame and layer names** | Improves component detection and Auto Map matching |
| Promote frequently used patterns (buttons, cards, list items) to **reusable Figma components** | One Figma component, one Studio component, used everywhere |
| Keep **layer nesting shallow** | Deeply nested structures explode the generated component tree |
| Apply **design tokens** for colour, spacing, typography, effects | You can then use these tokens in Studio via csdx studio:design-token:add |
| Make sure the Figma file is **editable** before generating | Read-only files block Auto Layout updates, token adjustments, and component mapping |

## Limitations

| Limitation | Workaround |
| --- | --- |
| Prompts shape layout only; no click handlers, modals, animations | Add behavior in the generated React component manually |
| Can't mix responsive and fixed-size layouts in the same Generate Design call | Run Generate Design twice, once per mode |
| Auto Map needs synced components | Run csdx studio:component:sync first; re-sync whenever the component library changes |
| The plugin is in **limited Beta** | Screen labels and UI states may shift between releases |
| The plugin reads only; it never modifies the Figma file | Design changes flow Figma to code, not the other way |

## After Generation: Checklist

The generated code is committable, but it's worth a pass:

1.  **Visual review:** preview each component in Studio's palette. Drop one onto a canvas and confirm the render matches the Figma source.
2.  **Prop schema:** open the metadata file and check the prop names + types match what your authors would expect. Rename anything cryptic.
3.  **Tests:** if your repo has component tests, add coverage for the new ones.
4.  **Tokens:** if csdx studio:design-token:add generated new tokens, decide whether to keep them or rename them to fit existing names in your system.
5.  **Lazy-load heavy components:** for charts, video, animation-heavy components, consider switching from registerComponent to registerLazyComponent in your registry. See [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration).

## Alternatives

If you don't have a Figma file, or your team doesn't use Figma:

-   [Copy/paste](/docs/studio/copy-and-paste-from-figma-to-studio): for a one-off Figma frame onto one Studio composition (still uses the plugin's Copy to Studio output, but skips the CLI side)
-   Hand-write components and call registerComponent directly: covered in [Registering components](/docs/studio/register-components)
-   Generate from Storybook or another design-system source: same registerComponent API; the source of truth varies

## Next

-   [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration): when to lazy-register generated components
-   [Registering components](/docs/studio/register-components): the registry API the CLI calls
-   [Component schema](/docs/studio/component-schema-prop-types): the prop types the plugin and CLI emit
-   [Import design tokens](/docs/studio/configure-design-tokens-in-studio): the design-token side of the same flow
