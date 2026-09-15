---
title: "Taxonomy Localization"
description: "Learn how to localize taxonomies across branches and locales with centralized control and fallback support in Contentstack."
url: /headless-cms/taxonomy-localization
uid: bltc49c96e24616db92
---

# Taxonomy Localization

## Taxonomy Localization

**Note:** Taxonomy Localization is a plan-based feature. Contact our [support](mailto:support@contentstack.com) team to enable it for your organization. This feature is **currently available for CMA use only**. Publishing localized taxonomy names and terms to CDA is coming soon. You can begin preparing your localized structures now, but localized values will not appear in published content until publishing support is released.

Taxonomy Localization lets teams translate taxonomy names for different locales while keeping them connected through a unified default taxonomy reference. This feature supports multilingual content organization by enabling each market or language to display taxonomy terms in their local language, without duplicating the taxonomy hierarchy.

**Note:** You can localize the **taxonomy name** to provide language-specific labels for the taxonomy itself. To [localize the terms](/docs/headless-cms/term-localization) within that taxonomy, edit **individual terms** from the same **Taxonomy Details** page.

## Key Benefits

This section outlines the major advantages of using Taxonomy Localization, from centralized control to improved auditability and operational efficiency.

-   **Localized experience:** Deliver taxonomy names and terms in users’ preferred languages without altering the master structure.
-   **Centralized control:** Manage all localized labels from a single master taxonomy for easier governance.
-   **Branch-aware term resolution:** When localized taxonomies or terms are referenced within entries, the system follows each branch’s fallback hierarchy to ensure consistent term resolution across locales and environments.
-   **Operational efficiency:** Streamline workflows and reduce duplication for distributed global teams.
-   **Audit visibility:** Track every localization change, including who made it and when, for clear traceability.

**Note:** When a taxonomy is published, all localized taxonomy names and terms are published together. Publishing proceeds for selected locales, and delivery fallback applies only when include\_fallback=true, following the branch-specific locale fallback hierarchy.

## Localize a Taxonomy

Localizing a taxonomy in Contentstack allows you to define independent, language-specific labels that can be applied to your entries, without duplicating the taxonomy structure.

To localize a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack), go to **Settings**, and select **Taxonomy**.
2.  Select the taxonomy you want to localize.
3.  On the **Taxonomy Details** page, review the locale table.

    **Note:** The list of locales is automatically derived from all locales available across the branches in the stack. This ensures that any locale configured in any branch is reflected in the taxonomy localization view.

4.  Click the vertical ellipsis next to the locale you want to localize, and select **Edit**.
5.  In the **Edit Taxonomy** modal, enter the localized name for the selected locale.
6.  Click **Save**.

![Localize_a_Taxonomy.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta448c92e9a123ede/691623d1381f3e8248274cdc/Localize_a_Taxonomy.gif)

**Note**:

-   Hover over the info icon to view the translator name and timestamp.
-   Fallback differs by context: taxonomy management falls back to the master locale only; entry-level term resolution follows the branch-specific fallback chain.
-   Deleting a taxonomy from the master locale deletes it from all locales.

## Unlocalize a Taxonomy

Unlocalizing a taxonomy lets you remove language-specific labels and revert locales to fallback behavior, ensuring the taxonomy remains clean and centralized.

To unlocalize a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Navigate to your stack, go to **Settings**, and select **Taxonomy**.
2.  Select the taxonomy you want to unlocalize.
3.  On the **Taxonomy Details** page, locate the locale to be unlocalized.
4.  Click the vertical ellipsis next to the locale and select **Unlocalize**.
5.  In the modal, click **Unlocalize** again to confirm the action.

![Unlocalize_a_Taxonomy.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb07a826940113d9/691624659caebf7afa3c5c74/Unlocalize_a_Taxonomy.gif)

**Note**

-   Removing a localized value activates the fallback chain for that locale. The taxonomy structure remains unchanged.
-   Deleting a locale removes it from the localization table and management views.
-   Localized taxonomy names do not count toward usage quotas.

Taxonomy Localization empowers teams to manage multilingual content efficiently by centralizing taxonomy structures while supporting localized labels. Whether you're serving global markets or managing content across branches, this feature ensures flexibility without compromising consistency.

## API Reference

To localize or unlocalize taxonomies via API, refer to the [Localize a Taxonomy](/docs/developers/apis/content-management-api/taxonomy#localize-a-taxonomy) and [Unlocalize a Taxonomy](/docs/developers/apis/content-management-api/taxonomy#unlocalize-a-taxonomy) API requests.
