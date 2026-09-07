---
title: "Managing Editorial Workflows at Scale"
description: "How to integrate Studio compositions with Contentstack workflow stages, roles, scheduled publishing, and multi-environment promotion for editorial teams."
url: /studio/managing-editorial-workflows-at-scale
uid: blt5c01c6072294cda5
---

# Managing Editorial Workflows at Scale

## Managing Editorial Workflows at Scale

One author saving and publishing in Studio is straightforward. Ten authors across draft, review, approval, and scheduled publish, across multiple environments, is where the workflow rules matter. This page is the integration model between Studio and Contentstack's workflow primitives.

## The Model

A Studio composition is **stored as a Contentstack entry** on the project's compositions content type. That means every Contentstack workflow feature applies to compositions automatically:

-   **Workflow stages** (Draft to In Review to Approved to Published) work on compositions just like on any other entry
-   **Roles + permissions** scope who can edit, who can review, who can publish
-   **Scheduled publishing** works: author edits a composition, schedules it for next Tuesday, Studio renders the new layout starting Tuesday
-   **Environment promotion**: publish to preview first, validate, then publish to production
-   **Variant aliases** apply to compositions too, see [variant aliases deep dive](/docs/studio/variant-aliases-deep-dive)

Studio doesn't have its own workflow layer. It piggybacks on Contentstack's. **This is by design**: editors who already know Contentstack workflow keep working the way they always have; nothing new to learn for layout changes.

## Recommended Patterns

### Save vs. deploy in Studio

In Studio's canvas top-right:

-   **Save**: writes the current state to the composition entry as a Draft.
-   **Deploy**: publishes the entry to all environments configured on the project.

For teams with workflow stages, **don't use Deploy directly**. Instead:

1.  Author makes changes, then clicks Save (entry stays in Draft / In Review).
2.  Reviewer opens the composition entry in Contentstack, then reviews via the standard workflow UI.
3.  Reviewer transitions the entry through stages (Draft to In Review to Approved) using Contentstack's workflow controls.
4.  Final publish happens via Contentstack's publish UI, scoped to specific environments.

This gives you the full Contentstack workflow story applied to layout changes.

### Per-environment Studio projects

When you ship to multiple environments (staging, preview, production), use ONE Contentstack stack with multiple environments and **one Studio project per target environment**:

| Studio project | Environment | Canvas URL |
| --- | --- | --- |
| studio-staging | staging | https://staging.yoursite.com |
| studio-preview | preview | https://preview.yoursite.com |
| studio-production | production | https://yoursite.com |

Same stack, same compositions, different environments. Publishing a composition to staging makes it available on the staging Studio project's render; publishing to production makes it live. This mirrors the standard Contentstack environment-promotion pattern.

### Roles for composition editing

Lock down who can edit compositions vs who can author content. Two roles to set up:

-   **Content Editor**: can edit entries but NOT compositions (the layout itself is locked).
-   **Composition Editor**: can edit both entries AND compositions.

This prevents "marketing changed the layout by accident": only people with explicit composition rights touch structure.

### Scheduled composition publishes

Author a Spring 2026 Landing composition in February. Schedule it to publish March 1st. Studio's canvas for the active composition shows the OLD layout until March 1st, then switches automatically.

This is just Contentstack scheduled publishing applied to the composition entry: no Studio-specific knob.

## Patterns to Avoid

| Pattern | Why it bites |
| --- | --- |
| Bypassing workflow with direct "Deploy" clicks | The workflow exists for a reason: direct publish skips review, breaks audit trails |
| One Studio project across all environments | Authoring against staging accidentally publishes to production; environment promotion can't be enforced |
| Letting every editor edit compositions | The whole point of separating CT content editors from composition editors is preserving structural integrity |
| Treating compositions as "code": putting them in version control via export/import | Compositions live in Contentstack with the full content workflow story; pulling them into git defeats that |
| Using Studio's Save button as a "publish" | Save = draft. Deploy = publish to all env. Workflow stages = real review. Know which you're using. |

## What's Still Unsolved

-   **Composition-level merge conflicts** when two authors edit the same composition simultaneously: today, last-write-wins. Real-time collaborative editing is on the roadmap.
-   **Visual diff between composition versions**: Contentstack shows JSON diff for compositions, but a visual side-by-side ("here's the layout before, here's after") isn't built in yet. Use entry-version comparison + screenshot-during-review as a workaround.
-   **Workflow comments scoped to a section of the composition**: today comments are at the entry level, not "comment on this section." Approval workflows that need per-section feedback rely on attached docs or chat.

## See Also

-   [Save vs Deploy](/docs/studio/save-vs-deploy-a-composition): the canonical Save vs Deploy semantics
-   [Variant aliases](/docs/studio/variant-aliases-deep-dive): variants apply to compositions, including in workflow
-   [Production deployment edges](/docs/studio/production-deployment-edge-cases): environment promotion + CDN invalidation
