---
title: "Localization Operator Real-world Scenarios"
description: "Learn how to use Contentstack's localization search to find content in specific languages or leverage fallback options."
url: /headless-cms/localization-operator-real-world-scenarios
uid: bltdf6c3116b6bd1630
---

# Localization Operator Real-world Scenarios

## Localization Operator Real-world Scenarios

Explore how the localization operator can enhance search accuracy in Contentstack through these real-world examples.

Consider a scenario where you have the following languages available within your [stack](https://www.contentstack.com/docs/headless-cms/about-stack): English (United States), French (France), Chinese (China), and Spanish (Spain). English (United States) is set as the master language of the stack.

-   English (United States) is a [fallback language](https://www.contentstack.com/docs/headless-cms/about-fallback-languages) of French (France);
-   French (France) is a fallback language of Chinese (China);
-   English (United States) is a fallback language for Spanish (Spain)

You have created six [entries](https://www.contentstack.com/docs/headless-cms/about-entries) in a [content type](https://www.contentstack.com/docs/headless-cms/about-content-types), and these entries are localized in different languages. The table below illustrates the localization and fallback relationships for each entry:

<table><tbody><tr><td><strong>Entry No.</strong></td><td><strong>Master Language</strong></td><td><strong>Localized in</strong></td></tr><tr><td>Entry 1</td><td>English (United States)</td><td><ul><li>French (France)</li><li>Chinese (China)</li></ul></td></tr><tr><td>Entry 2</td><td>English (United States)</td><td>French (France)</td></tr><tr><td>Entry 3</td><td>English (United States)</td><td>None</td></tr><tr><td>Entry 4</td><td>English (United States)</td><td>French (France)</td></tr><tr><td>Entry 5</td><td>English (United States)</td><td><ul><li>French (France)</li><li>Chinese (China)</li></ul></td></tr><tr><td>Entry 6</td><td>English (United States)</td><td>Spanish (Spain)</td></tr></tbody></table>

**Tip:** Before using the localization operator, get acquainted with [Advanced Search](/docs/headless-cms/advanced-search) queries.

Now, let’s see some scenarios to understand how the localization operator will work in your search queries.

## Case 1: Search for entries of “Chinese (China)” language.

To search for entries localized in "Chinese" across any locales, use **Advanced Search** by setting the first condition to match the language "Chinese" and then add a second condition with "Localized In" operator and "Any Locales" value. Then, execute the search to view the results.

![Localization-Operator-Real-world_1.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e2bc18a2d28d792/6842aee3116bcf22e7221cff/1-case-1.gif)

The search result will include the following entry versions:

-   Entry 1 (localized in Chinese (China))
-   Entry 2 (localized in French (France), since French (France) is the fallback language for Chinese (China))
-   Entry 3 (master language \[English (United States)\])
-   Entry 4 (localized in French (France), since French (France) is the fallback language for Chinese (China))
-   Entry 5 (localized in Chinese (China))
-   Entry 6 (master language \[English (United States)\])

The results include entries either localized in Chinese or those that could potentially be localized in Chinese but are not yet. For entries not localized in Chinese, the results show the immediate predecessor in the fallback lineage.

So, in the above example, it returned Entry 2 (localized in French), but did not bring Entry 2 (English).

## Case 2: Search for entries that are localized only in “Chinese (China)”

To find entries exclusively localized in Chinese (China), access **Advanced Search**, set the first condition to match "Chinese (China)" language, then add a second condition with "Localized In" operator and "Chinese (China)" value. Finally, execute the search.

![Localization-Operator-Real-world_2.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta61aff1b46bdcc9a/6842aee3426b2a65c7586efa/2-case-2.gif)

The search result will include the following entry versions:

-   Entry 1 (localized in Chinese (China))
-   Entry 5 (localized in Chinese (China))

Here, only the entries localized in Chinese (China) appear in the search results.

## Case 3: Search for entries yet to be localized in "Chinese (China)"

To find entries that are not yet localized into Chinese (China), access **Advanced Search**, keep the first condition matching the "Chinese (China)" language, then add a second condition with "Not Localized In" operator and "Chinese (China)" value. Finally, execute the search.

![Localization-Operator-Real-world_3.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte44429bb4486cc61/6842aee3d6b7cb0e89216273/3-Case-3.gif)

The search result will include the following entry versions:

-   Entry 2 localized in French (France)
-   Entry 3 master language \[English (United States)\]
-   Entry 4 localized in French (France)
-   Entry 6 master language \[English (United States)\]

Here, all entries except the ones localized in Chinese (China) appear in the search results.

## Case 4: Search for entries localized only in "French (France)" within the "Chinese (China)" language entries.

To find entries related to Chinese (China) that are also localized in French (France), access **Advanced Search**, maintain the first condition matching the "Chinese (China)" language, and then add a second condition using the "Localized In" operator with the value set to "French (France)". Execute the search to get the results.

![Localization-Operator-Real-world_4.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd9af3813b3471dc/6842aee3aa31f70dde1b4b85/4-case-4.gif)

The search result will include the following entry versions:

-   Entry 2 localized in French (France)
-   Entry 4 localized in French (France)

Here, only the entries present in Chinese (China) language that have been localized in French (France) appear in the search results.

**Additional Resource:** Learn how [localization](/docs/headless-cms/about-localization) works in Contentstack.
