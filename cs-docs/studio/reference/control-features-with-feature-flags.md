---
title: "Control Features with Feature Flags"
description: "Complete reference for all Studio feature flags, including stack-level and project-level toggles, their defaults, scopes, and effects on Studio's UI."
url: /studio/control-features-with-feature-flags
---

# Control Features with Feature Flags

## Control Features with Feature Flags

The complete list of gates that hide or change Studio's UI based on configuration. Knowing each one's location and effect prevents "missing feature" surprises.

## Stack-level (Set in Contentstack Web App)

These live on the Contentstack stack, in Stack, Settings, Visual Experience.

### Enable Live Preview

| Where | Stack, Settings, Visual Experience, **General** tab |
| --- | --- |
| Type | Checkbox |
| Default | Off (must be turned on for Studio to function) |
| Scope | Stack-wide, applies to every content type in the stack |

**Effect when off:** - The Preview Token isn't generated on Delivery Tokens - Live Preview SDK can't connect to Contentstack - Studio's canvas iframe shows stale content (no real-time updates)

**Effect when on:** - Preview Tokens auto-paired with every Delivery Token - The preview pipe accepts client connections from your app - Studio's canvas iframe can show draft + scheduled content

### Enable Custom Preview URL

| Where | Stack, Settings, Visual Experience, **Preview URL** tab |
| --- | --- |
| Type | Toggle |
| Default | Off |
| Scope | Stack-wide |

**Effect when off:** - Live Preview uses the Environment's Base URL (default) - Connected template URL patterns derive from the content type's url field pattern, or fall back to the default identity pattern

**Effect when on:** - A central form for Base URL (aliases) + per-content-type URL Paths - Studio derives linked-template URL patterns from these Paths, most accurate, mirrors your live site exactly - Required for multi-brand sites (different domains per brand from the same stack)

## Project-level (Set in Studio Web App)

These live on each Studio project, in Settings, Configuration.

### Enable Freeform Feature

| Where | Studio, Project Settings, **Configuration**, Enable Freeform Feature |
| --- | --- |
| Type | Toggle |
| Default | Off |
| Scope | Per-project |

**Effect when off:** - Composition creation modal only offers Page (linked) templates - Composition list shows linked templates only - Right panel collapses to **Settings tab only**, Design and Data tabs disappear entirely - Pinned Entries / Pinned Queries (which live in the Data tab) are unreachable from the canvas

**Effect when on:** - Composition creation modal offers both Page template and Freeform - Existing Freeform compositions become accessible - Right panel exposes the full **Settings + Design + Data** tab chrome - The Data tab adds three page-level sections, **Additional Entry Data**, **Queries**, **External Data**, when nothing is selected on the canvas - Edit URL modal shows the Freeform variant (with {{composition\_uid}} chip) when on a Freeform composition

Full details in [Freeform](/docs/studio/freeform-templates).

> **Plan-dependent.** This feature may not be writable on all Contentstack plans. If the toggle is greyed out, contact your account owner.

## What's NOT a Feature Flag

These come up in conversation but aren't user-toggleable switches, they're permanent product behaviour:

| Sounds like a flag | Actually | What to know |
| --- | --- | --- |
| "Section Slots feature" | Always-on capability | Available in every project, no toggle |
| "Linked schemas feature" | Always-on capability | Available on every section, no toggle |
| "Expose Section Props feature" | Always-on capability | Modal opens on Save of any section with components |
| "Visual Editor enable" | A stack capability tied to Enable Live Preview | Once Live Preview is enabled, Visual Editor's inline editing surfaces are available |
| "Custom components feature" | Always-on capability | registerComponent works on every Studio install |

## Plan Dependencies

Studio features that may be tied to your Contentstack plan:

-   **Freeform** (above)
-   **Multi-brand** Custom Preview URL aliases (above)
-   **Stack-level** features tied to Visual Editor / Live Preview availability

If a feature appears in the UI but its toggle is disabled, that's the signal you're on a plan that doesn't include it. Studio doesn't expose its own plan tiers, it inherits from Contentstack.

## Where to Find What's Enabled in Your Project

| Layer | Where to look |
| --- | --- |
| Stack-level flags | Contentstack, Stack, Settings, Visual Experience, General + Preview URL tabs |
| Project-level flags | Studio, your project, Settings, Configuration |
| Plan-level features | Contentstack, Organization, Settings (or contact your account owner) |

## When You Change a Flag

Most flag changes take effect immediately:

-   Refresh the Studio canvas after toggling Enable Freeform Feature, the Design and Data tabs (and their page-level sections) appear/disappear
-   Refresh the stack settings after toggling Enable Live Preview, the Preview Token appears on Delivery Token forms

If the UI doesn't update, hard-refresh the browser tab, both Contentstack and Studio cache the flag state per session.

## What Flags Don't Do

Worth being explicit:

-   **No data deletion when off.** Toggling Enable Freeform off doesn't delete existing Freeform compositions. They become unreachable from the canvas (Design and Data tabs are gone, only Settings remains) but the records stay in the stack.
-   **No prompts before toggling.** Studio doesn't ask "are you sure?", it just applies the change. Confirm your team is ready for the impact before flipping anything.
-   **No per-environment flags.** Flag state is the same across all environments in the stack. There's no "Enable Freeform in staging only".

## See Also

-   [Freeform](/docs/studio/freeform-templates), the feature behind the biggest project-level flag
-   [Setup: Prerequisites](/docs/studio/review-prerequisites-before-you-start), checklist of what to enable before installing
-   [Templates: Connected content type](/docs/studio/connected-content-type), how Custom Preview URL affects derived patterns
