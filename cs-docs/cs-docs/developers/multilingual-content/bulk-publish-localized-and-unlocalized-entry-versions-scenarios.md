---
title: "[Set Up Your Project] - Bulk Publish Localized and Unlocalized Entry Versions Scenarios"
description: Bulk Publish Localized and Unlocalized Entry Versions Scenarios
url: https://www.contentstack.com/docs/headless-cms/bulk-publish-localized-and-unlocalized-entry-versions-scenarios
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Bulk Publish Localized and Unlocalized Entry Versions Scenarios

This page explains real-world scenarios for bulk publishing localized and unlocalized entry versions across multiple locales in Contentstack. It is intended for developers and content managers working with multilingual stacks, and should be used when configuring or validating how publishing behaves across master, localized, and fallback languages.

## Bulk Publish Localized and Unlocalized Entry Versions Scenarios

Now, let’s see some real-world scenarios to understand how [publishing entries](../../content-managers/author-content/publish-an-entry.md) on multiple [locales](./about-localization.md) works with your localized and unlocalized content.

In this section, we will look at a few scenarios and learn how this feature works in Contentstack.

**Scenario 1: Publishing localized and unlocalized entry versions from the publishing modal of the master language**

Consider a scenario where you have the following languages available within your [stack](../set-up-stack/about-stack.md): English (United States), French (France), Chinese (China), and Spanish (Spain). English (United States) is [set as the master language](./set-the-master-language.md) of the stack, while Spanish (Spain) is set as the [fallback language](./about-fallback-languages.md) for French (France).

When you open the entry page of the master entry [English (United States)], and click on “Publish”, you can select all the other available languages to which you want to publish the entry. Now, consider the following scenario:
- The entry version present in French (France) is a localized version
- The entry version present in Spanish (Spain) is an unlocalized version

Now, if you select the languages English (United States), French (France), and Spanish (Spain) from the publishing modal, the following entry versions will be sent for publishing:
- The latest entry version present in English (United States)
- The latest localized entry version present in French (France) [independent copy]
- The latest entry version present in Spanish (Spain) [with content inherited from the master language].

**Scenario 2: Publishing localized entry versions from the publishing modal of other localized entry versions**

Consider a scenario where you have the following languages available within your stack: English (United States), Japanese (Japan), and Spanish (Spain). English (United States) is set as the master language of the stack while Spanish (Spain) is set as the fallback language for Japanese (Japan).

When you open the entry page of Spanish (Spain) [fallback language], you can also select the entry version that inherits content from this language, Japanese (Japan), for publishing. Now, consider the following scenario:
- The entry version present in Spanish (Spain) is a localized version
- The entry version present in Japanese (Japan) is a localized version

Now, if you select the entries present in Spanish (Spain) and Japanese (Japan) from the publishing modal, the following entry versions will be sent for publishing:
- The latest entry version present in Spanish (Spain) [with content inherited from the master language]
- The latest localized entry version present in Japanese (Japan) [independent copy]

Here, since the entry present in Japanese (Japan) is the child entry of the entry present in Spanish (Spain) [parent entry], the localized independent copy of the child entry is also available for publishing.

**Scenario 3: Publishing localized entry versions in bulk from the publishing modal of the entries list page**

Consider a scenario where you have the following languages available within your stack: English (United States), Japanese (Japan), and Spanish (Spain). English (United States) is set as the master language of the stack while Spanish (Spain) is set as the fallback language for Japanese (Japan).

When you open the entry list page, you can send multiple entries for publishing at once. When you click on “Publish”,  you can select all the available languages to which you want to publish the entry, for example, English (United States) and Japanese (Japan). Now, consider the following scenario:
- The entry version present in Spanish (Spain) is a localized version
- The entry version present in Japanese (Japan) is a localized version

Now, if you select languages English (United States), Spanish (Spain), and Japanese (Japan) from the publishing modal, the following entry versions will be sent for publishing:
- The latest entry version present in English (United States)
- The latest entry version present in Spanish (Spain) [with content inherited from the master language]
- The latest localized entry version present in Japanese (Japan) [independent copy]

Here, since the entry present in Japanese (Japan) is the child entry of the entry present in Spanish (Spain) [parent entry], the localized independent copy of the child entry is also available for publishing.

## Common questions

### What is the difference between a localized and an unlocalized entry version?
A localized entry version is an independent copy, while an unlocalized entry version has content inherited from the master language.

### Can I publish multiple locales at once from the publishing modal?
Yes, you can select multiple available languages from the publishing modal and send the corresponding entry versions for publishing.

### Does publishing from a fallback language allow publishing child locales?
When a child entry exists (for example, Japanese (Japan) as a child of Spanish (Spain)), the localized independent copy of the child entry is also available for publishing.

### Can I bulk publish from the entries list page?
Yes, from the entry list page you can send multiple entries for publishing at once and select the languages to which you want to publish.