---
title: "Add Taxonomy to Release"
description: "Learn how to add taxonomies to releases in Contentstack to deploy taxonomy structures and localized taxonomy terms."
url: /headless-cms/add-taxonomy-to-release
---

# Add Taxonomy to Release

## Add Taxonomy to Release

You can add [taxonomies](/docs/headless-cms/about-taxonomy) to a release to deploy taxonomy structures and localized taxonomy terms as part of your release workflow. This helps ensure taxonomy updates are deployed consistently alongside related content changes.

This is useful when you want to:

-   Deploy taxonomy updates along with related content changes
-   Schedule taxonomy changes using releases
-   Include taxonomy terms when promoting content across environments

To add a taxonomy to a release, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and navigate to **Taxonomy**.
2.  Open the required taxonomy.
3.  Click the horizontal ellipsis icon.
4.  Select **Add to Release**.
5.  In the **Add to Release** modal, select an existing **Release** or create a new one.
6.  Select the required **Languages**.
7.  Click **Add**.

![Add_Taxonomy_to_Release.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5d1d5ee1c890c3ce/16f9026cece662fc1bd5b42c/Add_Taxonomy_to_Release.gif)

The taxonomy is added to the selected release.

**Note:** You can also add one or more taxonomies to a release from the taxonomy list page by selecting the required taxonomies and clicking **Add to Release** in the floating panel.

## Taxonomies Added Through Entry References

When you add entries to a release and include references, associated taxonomies are automatically added to the release.

This helps ensure referenced taxonomy data is available during deployment.

## Deployment Readiness States

When adding taxonomies to a release, Contentstack validates whether the taxonomy and its terms are ready for deployment in the selected locale.

The release can display the following deployment readiness states:

<table><tbody><tr><td><strong>State</strong></td><td><strong>Description</strong></td></tr><tr><td>Yes</td><td>The taxonomy and its localized terms are ready for deployment.</td></tr><tr><td>No</td><td>The taxonomy or required terms are unavailable for deployment in the selected locale.</td></tr><tr><td>Partial</td><td>The taxonomy is not localized for the selected locale, but one or more taxonomy terms are localized and can still be deployed.</td></tr></tbody></table>

In this case, localized taxonomy terms are added to the release even though the taxonomy is not fully localized.

**Note:** When a taxonomy is not localized in the selected locale, the release shows a deployment readiness of **No** along with a warning message. Any taxonomy terms that are localized are still added to the release and deployed; remaining values resolve through the branch's fallback hierarchy. To reach the **Yes** state, localize the taxonomy in the target locale before deployment.

Adding taxonomies to releases helps ensure taxonomy structures and localized taxonomy terms are deployed consistently alongside related content updates.
