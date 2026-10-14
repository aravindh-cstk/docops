---
title: "Term Localization"
description: "Learn how to localize taxonomy terms across branches and locales with centralized control and fallback support in Contentstack."
url: /headless-cms/term-localization
uid: blt8313bf6e2cc12046
---

# Term Localization

## Term Localization

Term Localization allows you to localize individual taxonomy terms for each locale without duplicating or restructuring the taxonomy. Each localized term shares the same UID as its master term, ensuring consistent tagging, filtering, and search behavior across locales.

**Note:** You can [localize the taxonomy](/docs/headless-cms/taxonomy-localization) name to provide language-specific labels for the taxonomy itself. To localize the terms within that taxonomy, edit **individual terms** from the same **Taxonomy Details** page.

## Key Benefits

Localizing taxonomy terms offers the following advantages:

-   **Multilingual tagging**: Apply consistent term names across multiple locales.
-   **Centralized management**: View and manage all term translations in a unified table per taxonomy.
-   **Fallback resolution**: Return fallback values for terms that are not localized, when a delivery request sends include\_fallback=true.
-   **Data integrity**: Localized terms inherit the master term's UID.
-   **Reduced overhead**: Localized terms are not counted as separate entities.
-   **Branch awareness**: Fallback behavior respects the branch-specific hierarchy.

## Localize a Term

Localizing a term allows you to define locale-specific values that can be used in entries without altering the taxonomy structure.

To localize a term, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack), go to **Settings**, and select **Taxonomy**.
2.  Select the taxonomy with the terms you need to localize.
3.  On the **Taxonomy Details** page, select the desired term and review the locale table.

    **Note:** The list of locales is automatically derived from all locales available across the branches in the stack. This ensures that any locale configured in any branch is reflected in the taxonomy localization view.

4.  Click the vertical ellipsis next to the locale you want to localize and select **Edit**.
5.  In the **Edit Term** modal, enter the localized name for the selected locale.
6.  Click **Save**.

![Localize_a_Term.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7d3b82b9554522ad/6916256fe044f93a930bae2b/Localize_a_Term.gif)

**Note**:

-   Hover over the info icon to view the translator name and timestamp.
-   If a locale lacks a translation, fallback behavior is triggered using the configured fallback chain.

## Unlocalize a Term

Unlocalizing a term removes its locale-specific value and reverts the locale to fallback behavior.

To unlocalize a term, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Navigate to your stack, go to **Settings**, and select **Taxonomy**.
2.  Select the taxonomy that contains the term you want to unlocalize.
3.  On the **Taxonomy Details** page, select the term.
4.  Click the vertical ellipsis next to the locale and choose **Unlocalize**.
5.  In the modal, confirm the action by clicking **Unlocalize**.

![Unlocalize_a_Term.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb13316cd6761242e/6916261b94c79398bcf4c12c/Unlocalize_a_Term.gif)

**Note**:

-   Removing the localized value reactivates fallback logic for that locale.
-   The taxonomy structure remains unchanged.
-   Deleting a locale removes it from the localization table and management views.
-   Localized terms do not impact usage quotas.
-   Deleting a term from the master locale deletes it from all locales.

Term Localization empowers teams to support multilingual content without duplicating taxonomy structures. Whether serving global markets or managing multiple branches, this feature ensures flexibility and centralized control without sacrificing consistency.

## Deliver Localized Terms

After you [publish the taxonomy](/docs/headless-cms/publish-a-taxonomy) to an environment and its locales, the localized terms are available through the Content Delivery API (CDA) and the Delivery SDKs.

To fetch terms in a specific locale, pass the locale query parameter on the CDA request. For example:

```
GET https://cdn.contentstack.io/v3/taxonomies/{taxonomy_uid}/terms?environment={environment}&locale=fr-fr
```

By default, the response includes only the terms localized in the requested locale. To also return the terms that are not localized in that locale, add include\_fallback=true. Those terms are then resolved through the locale fallback hierarchy of the branch, and each term's locale field shows the locale it was returned from.

## API Reference

To localize or unlocalize terms via API, refer to the [Localize a Term](/docs/developers/apis/content-management-api/taxonomy#localize-a-term) and [Unlocalize a Term](/docs/developers/apis/content-management-api/taxonomy#unlocalize-a-term) API requests.

To fetch localized terms, refer to the [Get All Terms](/docs/developers/apis/content-delivery-api/taxonomy#get-all-terms), [Get a Single Term](/docs/developers/apis/content-delivery-api/taxonomy#get-a-single-term), and [Get a Single Term in All Locales](/docs/developers/apis/content-delivery-api/taxonomy#get-a-single-term-in-all-locales) CDA requests.
