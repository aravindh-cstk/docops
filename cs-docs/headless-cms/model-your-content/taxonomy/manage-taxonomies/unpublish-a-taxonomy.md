---
title: "Unpublish a Taxonomy"
description: "Unpublish a taxonomy to remove its complete term hierarchy from selected environments, locales, and branches using the UI or APIs."
url: /headless-cms/unpublish-a-taxonomy
uid: blta37b0f8cf43431b8
---

# Unpublish a Taxonomy

## Unpublish a Taxonomy

Unpublishing a taxonomy removes the complete taxonomy structure, including all its terms, from the selected environments and locales. The taxonomy remains in your stack, so you can revise it and publish it again later.

For example, a retail team publishes a seasonal **Holiday Campaign** taxonomy to **production** for a promotion. When the promotion ends, they unpublish the taxonomy from **production** so it no longer resolves on the storefront, while keeping the structure in the stack for the next campaign.

**Warning:** Unpublishing removes the taxonomy from the selected environments and locales for every application that consumes the Content Delivery API. Entries that reference its terms remain published, but those terms no longer resolve in delivery responses for the affected environment and locale. Confirm that no live experience depends on the taxonomy before you unpublish it.

**Note:**

-   Unpublishing always includes the entire taxonomy and all its terms; unpublishing individual terms is not supported.
-   Unpublishing does not delete the taxonomy or its terms from your stack. To remove a taxonomy permanently, delete it instead.
-   Unpublished taxonomies do not support version history or rollback.
-   Unpublishing affects only the environments and locales you select. The taxonomy remains published everywhere else.

To unpublish a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to unpublish a taxonomy, navigate to **Settings**, and select **Taxonomy**.
2.  Open the taxonomy you want to unpublish and click **Unpublish**.
3.  In the **Unpublish Taxonomy** modal, select the **Branch**, **Environments**, and **Locales**.

    **Note:** Taxonomy is a global module. However, when unpublishing, selecting a branch determines the fallback hierarchy of the selected locales in that branch.

4.  Choose **Now** to unpublish immediately or **Later** to schedule the action.
5.  Click **Send** to confirm the unpublishing.

Contentstack queues the request and processes it in the background. Track the status of the job in the **Publish Queue** of your stack.

**Additional Resource:**

-   To make a taxonomy available again in an environment or locale, refer to the [Publish a Taxonomy](/docs/headless-cms/publish-a-taxonomy) documentation.
-   You can also manage taxonomy deployment alongside related content updates through a release. For more information, refer to the [Add a Taxonomy to a Release](/docs/headless-cms/add-taxonomy-to-release) documentation.

## API Reference

To unpublish taxonomies via the API, refer to the [Unpublish a Taxonomy](/docs/developers/apis/content-management-api/taxonomy#unpublish-a-taxonomy) API request.
