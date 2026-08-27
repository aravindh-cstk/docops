---
title: "Save vs. Deploy a Composition"
description: "Understand the difference between saving and deploying a composition in Contentstack Studio, including when to use each action and pre-deploy best practices."
url: /studio/save-vs-deploy-a-composition
uid: blt38b121c15fe270db
---

# Save vs. Deploy a Composition

## Save vs. Deploy a Composition

Two distinct actions on the canvas, with different meanings.

| Action | What it does | Where it goes |
| --- | --- | --- |
| **Save** | Persists your current edits to the composition record in Contentstack | Stays in draft state, not yet visible to visitors |
| **Deploy** | Publishes the composition through your stack's publishing workflow to a target environment | Becomes visible to visitors on that environment |

You'll Save often (every meaningful change). You'll Deploy when the composition is ready for the next environment in your release flow.

## Save

The Save button is in the canvas toolbar's right cluster, next to Deploy.

What happens on Save:

-   The composition's UI tree + bindings + metadata persist to the Contentstack stack
-   Authors and developers see your changes when they reload Studio
-   Visitors **don't** see your changes yet, the published version is what they get
-   Live Preview viewers (anyone with the preview pipe wired) do see your changes in real time

For Sections specifically, Save also opens the [Expose Props modal](/docs/studio/expose-section-props) if there are component prop candidates that haven't been classified yet. You either expose or skip them.

### Save frequency

Save liberally. Studio doesn't auto-save by default; closing the canvas with unsaved edits loses them. Most authors save:

-   After each significant component drop or rebind
-   Before switching to a different composition
-   Before stepping away from the canvas

There's no penalty for frequent saves, they're cheap.

## Deploy

The Deploy button sits next to Save. Clicking it opens the **Deploy** modal: pick which environments to publish to, decide whether to send referenced entries along with the composition, and confirm.

![Deploy modal — target environments and Send with / without References buttons](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4ee0ded7d36edf07/ef8c54fe5f49b1711647c9d0/deploy-modal.png)

> **Terminology note:** The modal says "Deploy Template" for both compositions and sections; they use the same flow.

Once you confirm, the composition is queued for publishing through your stack's workflow to the selected environments.

What happens on Deploy:

-   The current saved state is queued for publishing
-   Contentstack's publish workflow runs (any review / approval steps your stack has configured)
-   Once published, the composition becomes the live version for the target environment
-   Visitor-facing routes (<StudioComponent />) on that environment now render this version

A deployed template at its real URL renders the composition with no Studio chrome:

![A deployed Blog Post template rendered on the visitor route — Hero with bound content, no Studio chrome](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd8588a05bcd56605/fc0d950c8781e477d783832d/template-blog-post-full-stack.png)

This is the success state to check after every Deploy. If your route renders this clean, the deploy and routing are correct end-to-end.

### Pre-deploy checklist

Before deploying:

1.  **Save your latest edits.** Deploy publishes what's saved, not what's on screen.
2.  **Preview thoroughly.** Switch the Preview Entry to a few different entries (linked templates) to confirm bindings resolve across different content.
3.  **Check the connected entry is published too.** A linked template can deploy fine, but if its connected entry isn't published in the target environment, the page renders without entry data.
4.  **Verify the environment.** Make sure you're deploying to the right environment, as the canvas's Preview Environment might differ from your target.

### When Deploy isn't immediate

These are optional stack configurations; none of them block the Deploy action itself. If your stack has publishing rules:

-   **Approval workflows:** the deploy may be queued for review by another team member before publishing
-   **Scheduled publishes:** you can schedule the deploy for a future date/time
-   **Rolling deploys:** some stacks deploy across multiple environments in sequence

Your stack's publishing configuration determines what happens. Check Contentstack's publishing docs for the specifics.

## Live Preview during the cycle

Live Preview connects your running app to Contentstack so that:

-   Authors editing the composition see updates in their canvas in real time (within Studio)
-   Anyone with Live Preview wired in your app sees updates as content changes

This works against the **draft** state (preview environment), not the published state. To verify what visitors see post-deploy, use the published environment in a non-preview-token-equipped session, i.e. a regular browser hitting your live URL.

Detail: [Install Live Preview](/docs/studio/install-live-preview)

## Deployment workflow at a glance

![Deploy modal showing target environments and publish options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4ee0ded7d36edf07/ef8c54fe5f49b1711647c9d0/deploy-modal.png)

## Common pitfalls

| Symptom | Cause | Fix |
| --- | --- | --- |
| Deployed but visitors see old content | Your CDN / app is caching the old composition | Check cache TTLs; force a revalidation if your app uses ISR / SSG |
| Deployed but the page is blank | Connected entry isn't published in the target environment | Publish the entry too |
| Deploy "succeeded" but composition didn't change | A pending publish task hasn't run yet (approval queue, schedule) | Check your stack's publish queue |
| Live Preview shows updates but Deploy doesn't | Deploy went through but cached HTML hasn't refreshed | Hard refresh the visitor page, or trigger your site's revalidation |
| Visitors see Live Preview chrome | Live Preview SDK initialised on the visitor's session | Confirm enable: true only in preview contexts, not in production builds |

## Best practices

**Save often, deploy deliberately.** Save is a draft milestone. Deploy is a release event. Treat them differently.

**Don't deploy from the canvas while authors are still editing.** If multiple people are working on the same composition, coordinate the deploy: the version deployed is whatever was last saved.

**Use Live Preview to validate before deploying.** Visitors see what Live Preview shows (minus the editing chrome). If something looks wrong in Live Preview, it looks wrong post-deploy too.

**Test the connected entry's URL.** For linked templates, the URL the visitor hits depends on the entry's URL field and the template's URL pattern. After deploy, hit a real entry's URL to confirm routing works.

**Coordinate with Contentstack's publishing workflow.** Studio doesn't replace your stack's publishing rules. If you have approvals, Studio's Deploy still goes through them.

## See also

-   Templates: what gets deployed
-   [Install Live Preview](/docs/studio/install-live-preview): the preview pipe
-   [Verify end to end](/docs/studio/verify-your-studio-setup-end-to-end): confirm a deploy went through
