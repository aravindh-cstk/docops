---
title: "[Taxonomy] - Adding Terms to Entries with Taxonomy"
description: Assign taxonomy terms to entries within a taxonomy field in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/adding-terms-to-entries-with-taxonomy
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: current
last_updated: 2026-03-25
---

# [Taxonomy] - Adding Terms to Entries with Taxonomy

This page explains how to categorize Contentstack entries by assigning taxonomy terms in a taxonomy field. It is intended for content managers and authors who need to classify entries (including localized entries) using taxonomy terms.

## Adding Terms to Entries with Taxonomy

To categorize your entries with taxonomy, assign terms to them within the taxonomy field.

To classify entries with taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) where you want to classify your entries and click the “Entries” icon on the left navigation panel.

  **Note**: Ensure you have added and configured a taxonomy field for the relevant content type. If you haven't done this, refer to the [Add Taxonomy to Content Type](../../developers/taxonomy/add-taxonomy-to-a-content-type.md) document.
- Create a new entry or select an existing one that belongs to the content type with the taxonomy field.
- Within the taxonomy field, choose a term from the **Select Term(s)** modal.
- If your stack supports localization, the taxonomy field displays terms available in the selected entry locale.**Note**:When switching locales in the entry editor, the taxonomy field updates to show terms available for that locale. If localized versions of the terms do not exist, the field displays the term data from the **fallback locales defined in the current branch hierarchy**, ending with the master locale if needed.
- Taxonomy Localization is a plan-based feature. Contact our [support](mailto:support@contentstack.com) team to enable it for your organization. This feature is **currently available for CMA use only**. Publishing localized taxonomy names and terms to CDA is coming soon. You can begin preparing your localized structures now, but localized values will not appear in published content until publishing support is released.
- Finally, click **Apply** to add the term(s).

By following these steps, your entries will be classified based on the selected terms.

## Common questions

**How do I add taxonomy terms to an entry?**  
Within the taxonomy field, choose a term from the **Select Term(s)** modal, then click **Apply** to add the term(s).

**What do I need before I can assign terms to entries?**  
Ensure you have added and configured a taxonomy field for the relevant content type. If you haven't done this, refer to the [Add Taxonomy to Content Type](../../developers/taxonomy/add-taxonomy-to-a-content-type.md) document.

**How does localization affect the taxonomy field in entries?**  
If your stack supports localization, the taxonomy field displays terms available in the selected entry locale, and updates when switching locales. If localized versions of the terms do not exist, the field displays the term data from the **fallback locales defined in the current branch hierarchy**, ending with the master locale if needed.

**Is Taxonomy Localization available for all plans and delivery APIs?**  
Taxonomy Localization is a plan-based feature enabled via [support](mailto:support@contentstack.com). It is **currently available for CMA use only**; publishing localized taxonomy names and terms to CDA is coming soon.