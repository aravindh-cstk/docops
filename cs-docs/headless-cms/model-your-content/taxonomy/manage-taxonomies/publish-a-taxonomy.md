---
title: "Publish a Taxonomy"
description: "Publish a taxonomy and its complete term hierarchy to specific environments, locales, and branches using UI or APIs."
url: /headless-cms/publish-a-taxonomy
---

# Publish a Taxonomy

## Publish a Taxonomy

Publishing a taxonomy deploys the complete taxonomy structure, including all its terms. This makes the taxonomy available for use across selected environments and locales.

For example, an e-commerce team updates the **Color** taxonomy by reorganizing its terms. First, they publish the revised taxonomy to the **development** environment to validate the changes. Once verified, they publish it to **production**, making the updated structure live for customers.

**Note:**

-   Publishing always includes the entire taxonomy and all its terms; publishing individual terms is not supported.
-   Publishing is required to expose taxonomy changes.
-   Published taxonomies do not support version history or rollback.
-   Publishing overwrites the previously published taxonomy tree for the selected environment and locale.
-   When you publish an entry that references a taxonomy, Contentstack includes the entire referenced taxonomy, with all its terms, in the publish job, not only the term used by the entry. If the taxonomy is not localized in the entry's locale, the taxonomy-level publish job for that locale appears as **Failed** in the **Publish Queue**. To prevent the Failed status, localize the taxonomy in the target locale before publishing. Term-level localization is validated during deployment.
    

To publish a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to publish a taxonomy, navigate to **Settings**, and select **Taxonomy**.
2.  Open the taxonomy you want to publish and click **Publish**.
3.  In the **Publish Taxonomy** modal, select the **Branch**, **Environments**, and **Locales**.
    
    **Note:** Taxonomy is a global module. However, when publishing, selecting a branch determines the fallback hierarchy of the selected locales in that branch.
    
4.  Choose **Now** to publish immediately or **Later** to schedule the publication.
5.  Click **Send** to confirm the publishing.

![Publish_a_Taxonomy.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8b45403463247465/aa20cf4dfc012a240e4efec5/Publish_a_Taxonomy.gif)

Publishing a taxonomy ensures your updated term structure is available across selected environments, locales, and branches. By following the steps outlined above, teams can confidently manage and deploy taxonomy changes that reflect evolving business needs or content strategies.

**Additional Resource:**

-   If an entry that references a taxonomy is published using **Send with References**, the referenced taxonomy, including all its terms, is included in the publish job. This ensures that the taxonomy structure used by the entry is available in the selected environments and locales.
-   You can also add taxonomies to a release and deploy them as part of a release workflow. This allows teams to manage taxonomy changes alongside related content updates and schedule deployments across environments and locales. For more information, refer to the [Add a Taxonomy to a Release](/docs/headless-cms/add-taxonomy-to-release) documentation.

## API Reference

To publish taxonomies via the API, refer to the [Publish a Taxonomy](/docs/developers/apis/content-management-api#publish-a-taxonomy) API request.
