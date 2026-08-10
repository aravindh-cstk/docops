---
title: "About Localization Operator"
description: "Learn how to use the localization operator in Contentstack's Advanced Search to find entries based on their localization status in specific languages."
url: /headless-cms/about-localization-operator
---

# About Localization Operator

## About Localization Operator

The localization operator in Contentstack's [Advanced Search](/docs/headless-cms/advanced-search) lets you find entries based on their localization status in specific languages. This feature is especially useful for locating entries that are either localized in a particular language or those that are not yet localized but available in their fallback languages.

**Tip:** Before using the localization operator, get acquainted with [Advanced Search](/docs/headless-cms/advanced-search) queries.

To use the localization operator, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack) and select the [Entries](https://www.contentstack.com/docs/headless-cms/about-entries) module.
2.  Click the **Advanced Search** option next to the search bar.![About Localization Operator_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8ac1129e75b02c9/684299f10296e4572eb03a59/1._Advaned_search_button.png)
3.  By default, you will see **Match All Conditions**, but you can switch to **Match Any Conditions** if needed.![About Localization Operator_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0bbbc3c2a7841f5b/684299f164e286f273bc7f68/2._matching_conditions_dropdown.png)
4.  Select **Language** from the **Content Type or Field** dropdown.
5.  From the **Operator** dropdown, select **Matches** to find entries where the language matches a specific value.
6.  Choose the language you want to search for, such as **French**.![About Localization Operator_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85ca7cc7a20c5a4b/684299f121ef7a90ca188b15/3._operator_set_as_language.png)
7.  Choose the operator that fits your needs:
    
    1.  **Localized In**: Select this option if you want to find entries that have been localized in a specific language.
    2.  **Not Localized In**: Select this option to find entries that have not been localized in a specific language but might be available in their fallback languages.
    
    For example, to find entries that have not been localized in **French**:
    
    1.  Set the **Language** field to **French**.
    2.  Choose **Not Localized In** from the **Operator** dropdown.
    
    ![About Localization Operator_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47585388071b5015/684299f173466cdbee9f4c73/4._localized_filter.png)
8.  You can add more criteria or filters as needed to narrow down your search. Once your query is set up, click the **Search** button to view the results.![About Localization Operator_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0dc45ebf95e7aa61/684299f2afd14d5c4b62a202/5._Localized_entry_output.png)

**Additional Resource**:

-   Explore real-world localization examples in our [Localization Operator Real-world Scenarios](/docs/headless-cms/localization-operator-real-world-scenarios) article.
-   Refer to the [Localization](/docs/headless-cms/about-languages#localization-in-contentstack) section to understand how languages work in Contentstack.
