---
title: "[Taxonomy] - Term Localization"
description: Term Localization allows you to localize individual taxonomy terms for each locale without duplicating or restructuring the taxonomy.
url: https://www.contentstack.com/docs/developers/taxonomy/term-localization
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Taxonomy] - Term Localization

This page explains how to localize and unlocalize taxonomy terms per locale in Contentstack, including benefits, UI steps, fallback behavior, and related API references. It is intended for users managing multilingual taxonomies and should be used when preparing or maintaining localized term values across locales and branches.

## Term Localization

**Note:** Taxonomy Localization is a plan-based feature. Contact our [support](mailto:support@contentstack.com) team to enable it for your organization. This feature is **currently available for CMA use only**. Publishing localized taxonomy names and terms to CDA is coming soon. You can begin preparing your localized structures now, but localized values will not appear in published content until publishing support is released.

Term Localization allows you to localize individual taxonomy terms for each locale without duplicating or restructuring the taxonomy. Each localized term shares the same UID as its master term, ensuring consistent tagging, filtering, and search behavior across locales.

**Note**: You can [localize the taxonomy](/docs/developers/taxonomy/taxonomy-localization) name to provide language-specific labels for the taxonomy itself. To localize the terms within that taxonomy, edit **individual terms** from the same **Taxonomy Details** page.

## Key Benefits

Localizing taxonomy terms offers the following advantages:
- **Multilingual tagging**: Apply consistent term names across multiple locales.
- **Centralized management**: View and manage all term translations in a unified table per taxonomy.
- **Fallback resolution**: Display translated or fallback values automatically, based on locale.
- **Data integrity**: Localized terms inherit the master term's UID.
- **Reduced overhead**: Localized terms are not counted as separate entities.
- **Branch awareness**: Fallback behavior respects the branch-specific hierarchy.

## Localize a Term

Localizing a term allows you to define locale-specific values that can be used in entries without altering the taxonomy structure.

To localize a term, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Navigate to your [stack](/docs/developers/set-up-stack/about-stack), go to **Settings**, and select **Taxonomy**.
- Select the taxonomy with the terms you need to localize.
- On the **Taxonomy Details** page, select the desired term and review the locale table.**Note:** The list of locales is automatically derived from all locales available across the branches in the stack. This ensures that any locale configured in any branch is reflected in the taxonomy localization view.
- Click the vertical ellipsis next to the locale you want to localize and select **Edit**.
- In the **Edit Term** modal, enter the localized name for the selected locale.
- Click **Save**.

**Note**:
- Hover over the info icon to view the translator name and timestamp.
- If a locale lacks a translation, fallback behavior is triggered using the configured fallback chain.

## Unlocalize a Term

Unlocalizing a term removes its locale-specific value and reverts the locale to fallback behavior.

To unlocalize a term, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Navigate to your stack, go to **Settings**, and select **Taxonomy**.
- Select the taxonomy that contains the term you want to unlocalize.
- On the **Taxonomy Details** page, select the term.
- Click the vertical ellipsis next to the locale and choose **Unlocalize**.
- In the modal, confirm the action by clicking **Unlocalize**.

**Note**:
- Removing the localized value reactivates fallback logic for that locale.
- The taxonomy structure remains unchanged.
- Deleting a locale removes it from the localization table and management views.
- Localized terms do not impact usage quotas.
- Deleting a term from the master locale deletes it from all locales.

Term Localization empowers teams to support multilingual content without duplicating taxonomy structures. Whether serving global markets or managing multiple branches, this feature ensures flexibility and centralized control without sacrificing consistency.

## API Reference

To localize or unlocalize terms via API, refer to the [Localize a Term](/docs/developers/apis/content-management-api#localize-a-term) and [Unlocalize a Term](/docs/developers/apis/content-management-api#unlocalize-a-term) API requests.

## Common questions

**Q: Is Term Localization available for published content in CDA?**  
A: This feature is **currently available for CMA use only**. Publishing localized taxonomy names and terms to CDA is coming soon.

**Q: Do localized terms create new terms or change the taxonomy structure?**  
A: No. Each localized term shares the same UID as its master term, and the taxonomy structure remains unchanged.

**Q: What happens if a locale does not have a translation for a term?**  
A: If a locale lacks a translation, fallback behavior is triggered using the configured fallback chain.

**Q: Can I manage term localization through the API?**  
A: Yes. Refer to the [Localize a Term](/docs/developers/apis/content-management-api#localize-a-term) and [Unlocalize a Term](/docs/developers/apis/content-management-api#unlocalize-a-term) API requests.