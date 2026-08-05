---
title: "[Taxonomy] - Add Taxonomy to Release"
description: Add taxonomies to a release to deploy taxonomy structures and localized taxonomy terms as part of your release workflow.
url: https://www.contentstack.com/docs/headless-cms/add-taxonomy-to-release
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-05-18
---

# [Taxonomy] - Add Taxonomy to Release

This page explains how to add taxonomies to a release in Contentstack so taxonomy structures and localized taxonomy terms can be deployed as part of your release workflow. It is intended for users managing releases and deployments, and should be used when you need taxonomy updates to ship alongside related content changes.

## Add Taxonomy to Release

You can add [taxonomies](../developers/taxonomy/about-taxonomy.md) to a release to deploy taxonomy structures and localized taxonomy terms as part of your release workflow. This helps ensure taxonomy updates are deployed consistently alongside related content changes.

This is useful when you want to:
- Deploy taxonomy updates along with related content changes
- Schedule taxonomy changes using releases
- Include taxonomy terms when promoting content across environments

To add a taxonomy to a release, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../developers/set-up-stack/about-stack.md) and navigate to **Taxonomy**.
- Open the required taxonomy.
- Click the horizontal ellipsis icon.
- Select **Add to Release**.
- In the **Add to Release** modal, select an existing **Release** or create a new one.
- Select the required **Languages**.
- Click **Add**.

The taxonomy is added to the selected release.

**Note**: You can also add one or more taxonomies to a release from the taxonomy list page by selecting the required taxonomies and clicking **Add to Release** in the floating panel.

## Taxonomies Added Through Entry References

When you add entries to a release and include references, associated taxonomies are automatically added to the release.

This helps ensure referenced taxonomy data is available during deployment.

## Deployment Readiness States

When adding taxonomies to a release, Contentstack validates whether the taxonomy and its terms are ready for deployment in the selected locale.

The release can display the following deployment readiness states:

| **State** | **Description** |
|---|---|
| Yes | The taxonomy and its localized terms are ready for deployment. |
| No | The taxonomy or required terms are unavailable for deployment in the selected locale. |
| Partial | The taxonomy is not localized for the selected locale, but one or more taxonomy terms are localized and can still be deployed. |

In this case, localized taxonomy terms are added to the release even though the taxonomy is not fully localized.

**Note**: When a taxonomy is not localized in the selected locale, the release shows a deployment readiness of No along with a warning message. Any taxonomy terms that are localized are still added to the release and deployed; remaining values resolve through the branch's fallback hierarchy. To reach the Yes state, localize the taxonomy in the target locale before deployment.

Adding taxonomies to releases helps ensure taxonomy structures and localized taxonomy terms are deployed consistently alongside related content updates.

## Common questions

**How do I add multiple taxonomies to a release at once?**  
You can add one or more taxonomies to a release from the taxonomy list page by selecting the required taxonomies and clicking **Add to Release** in the floating panel.

**What happens if a taxonomy is not localized for the selected locale?**  
The release can show a **Partial** state, where the taxonomy is not localized for the selected locale, but one or more taxonomy terms are localized and can still be deployed.

**Are taxonomies added automatically when I add referenced entries to a release?**  
When you add entries to a release and include references, associated taxonomies are automatically added to the release.

**What does the “No” deployment readiness state mean?**  
It means the taxonomy or required terms are unavailable for deployment in the selected locale.