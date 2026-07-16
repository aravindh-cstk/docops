---
title: "[Search Content] - About Localization Operator"
description: The localization operator in Contentstack's Advanced Search lets you find entries based on their localization status in specific languages.
url: https://www.contentstack.com/docs/headless-cms/about-localization-operator
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Search Content] - About Localization Operator

This page explains how to use the localization operator in Contentstack Advanced Search to find entries based on whether they are localized (or not localized) in specific languages. It is intended for Contentstack users who manage content and need to filter entries by localization status while working in the Entries module.

## About Localization Operator

The localization operator in Contentstack's [Advanced Search](./advanced-search.md) lets you find entries based on their localization status in specific languages. This feature is especially useful for locating entries that are either localized in a particular language or those that are not yet localized but available in their fallback languages.

**Tip:** Before using the localization operator, get acquainted with [Advanced Search](./advanced-search.md) queries.

To use the localization operator, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and select the [Entries](../author-content/about-entries.md) module.
- Click the **Advanced Search** option next to the search bar.![About Localization Operator_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8ac1129e75b02c9/684299f10296e4572eb03a59/1._Advaned_search_button.png)
- By default, you will see **Match All Conditions**, but you can switch to **Match Any Conditions** if needed.![About Localization Operator_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0bbbc3c2a7841f5b/684299f164e286f273bc7f68/2._matching_conditions_dropdown.png)
- Select **Language** from the **Content Type or Field** dropdown.
- From the **Operator** dropdown, select **Matches** to find entries where the language matches a specific value.
- Choose the language you want to search for, such as **French**.![About Localization Operator_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85ca7cc7a20c5a4b/684299f121ef7a90ca188b15/3._operator_set_as_language.png)
- Choose the operator that fits your needs:**Localized In**: Select this option if you want to find entries that have been localized in a specific language.
- **Not Localized In**: Select this option to find entries that have not been localized in a specific language but might be available in their fallback languages.

For example, to find entries that have not been localized in **French**:
- Set the **Language** field to **French**.
- Choose **Not Localized In** from the **Operator** dropdown.
- You can add more criteria or filters as needed to narrow down your search. Once your query is set up, click the **Search** button to view the results.![About Localization Operator_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0dc45ebf95e7aa61/684299f2afd14d5c4b62a202/5._Localized_entry_output.png)

**Additional Resource**:
- Explore real-world localization examples in our [Localization Operator Real-world Scenarios](./localization-operator-real-world-scenarios.md) article.
- Refer to the [Localization](/docs/developers/multilingual-content#localization-in-contentstack) section to understand how languages work in Contentstack.

## Common questions

### What does the localization operator do in Advanced Search?
It lets you find entries based on their localization status in specific languages, such as entries that are localized in a language or not localized but available in fallback languages.

### When should I use **Localized In** vs **Not Localized In**?
Use **Localized In** to find entries that have been localized in a specific language, and **Not Localized In** to find entries that have not been localized in that language.

### Where do I access the localization operator?
In the **Entries** module, open **Advanced Search**, select **Language** in the **Content Type or Field** dropdown, and then choose the relevant operator.

### Can I combine localization criteria with other filters?
Yes, you can add more criteria or filters as needed to narrow down your search before clicking **Search** to view results.