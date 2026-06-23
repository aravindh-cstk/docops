---
title: "[Taxonomy] - Publish a Taxonomy"
description: Publish a taxonomy to deploy the complete taxonomy structure, including all its terms, across selected environments and locales.
url: https://www.contentstack.com/docs/headless-cms/publish-a-taxonomy
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-05-18
---

# [Taxonomy] - Publish a Taxonomy

This page explains how to publish a taxonomy in Contentstack so the complete taxonomy structure (including all terms) becomes available across selected environments, locales, and branches. It is intended for teams managing taxonomy changes and should be used when you need to deploy taxonomy updates for validation and production use.

## Publish a Taxonomy

Publishing a taxonomy deploys the complete taxonomy structure, including all its terms. This makes the taxonomy available for use across selected environments and locales.

For example, an e-commerce team updates the **Color** taxonomy by reorganizing its terms. First, they publish the revised taxonomy to the **development** environment to validate the changes. Once verified, they publish it to **production**, making the updated structure live for customers.

**Note:**
- Publishing always includes the entire taxonomy and all its terms; publishing individual terms is not supported.
- Publishing is required to expose taxonomy changes.
- Published taxonomies do not support version history or rollback.
- Publishing overwrites the previously published taxonomy tree for the selected environment and locale.
- When you publish an entry that references a taxonomy, Contentstack includes the entire referenced taxonomy, with all its terms, in the publish job, not only the term used by the entry. If the taxonomy is not localized in the entry's locale, the taxonomy-level publish job for that locale appears as Failed in the Publish Queue. To prevent the Failed status, localize the taxonomy in the target locale before publishing. Term-level localization is validated during deployment.

To publish a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](../developers/set-up-stack/about-stack.md) where you want to publish a taxonomy, navigate to **Settings**, and select **Taxonomy**.
- Open the taxonomy you want to publish and click **Publish**.
- In the **Publish Taxonomy** modal, select the **Branch**, **Environments**, and **Locales**.**Note:** Taxonomy is a global module. However, when publishing, selecting a branch determines the fallback hierarchy of the selected locales in that branch.
- Choose **Now** to publish immediately or **Later** to schedule the publication.
- Click **Send** to confirm the publishing.

Publishing a taxonomy ensures your updated term structure is available across selected environments, locales, and branches. By following the steps outlined above, teams can confidently manage and deploy taxonomy changes that reflect evolving business needs or content strategies.

**Additional Resource:**
- If an entry that references a taxonomy is published using **Send with References**, the referenced taxonomy, including all its terms, is included in the publish job. This ensures that the taxonomy structure used by the entry is available in the selected environments and locales.
- You can also add taxonomies to a release and deploy them as part of a release workflow. This allows teams to manage taxonomy changes alongside related content updates and schedule deployments across environments and locales. For more information, refer to the [Add a Taxonomy to a Release](./add-taxonomy-to-release.md) documentation.

## API Reference

To publish taxonomies via the API, refer to the [Publish a Taxonomy](../../api-docs/api-detail/content-management-api.md#publish-a-taxonomy) API request.

## Common questions

### Can I publish individual taxonomy terms?
No. Publishing always includes the entire taxonomy and all its terms; publishing individual terms is not supported.

### Does publishing support version history or rollback?
No. Published taxonomies do not support version history or rollback.

### What happens when I publish a taxonomy again to the same environment and locale?
Publishing overwrites the previously published taxonomy tree for the selected environment and locale.

### Can taxonomies be deployed as part of a release workflow?
Yes. You can add taxonomies to a release and deploy them as part of a release workflow.