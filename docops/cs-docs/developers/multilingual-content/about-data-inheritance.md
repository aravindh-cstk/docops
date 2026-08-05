---
title: "[Set Up Your Project] - About Data Inheritance"
description: Data inheritance is the continuous inheritance from the fallback language until the entry is localized.
url: https://www.contentstack.com/docs/headless-cms/about-data-inheritance
product: Documentation
doc_type: concept
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - About Data Inheritance

This page explains how data inheritance works in multilingual content setups, including how entries inherit content from fallback languages until they are localized. It is intended for developers and content managers configuring languages in a stack and working with localized and unlocalized entries.

## About Data Inheritance

Data inheritance is the continuous inheritance from the [Fallback language](./about-fallback-languages.md) until the entry is localized.

Let’s say you wish to create a multilingual site that serves content in several languages: English (United States), French (France), Spanish (Spain), and Japanese (Japan).If you have set English (United States) as the [master language](./set-the-master-language.md), you will need to add French, Spanish, and Japanese manually.

While [adding languages](./add-a-language.md) to your [stack](../set-up-stack/about-stack.md), you also need to specify the fallback language for each language that you add. Fallback language is the parent from which the given language [inherits data](./about-data-inheritance.md) from. By default, the fallback for each language is the master language. You can change this while adding languages to your stack.

Let’s consider that you have created an [entry](../../content-managers/author-content/about-entries.md) in the master language (i.e., English (United States) in our case). When you start [creating an entry](../../content-managers/author-content/create-an-entry.md) in any of the added languages (e.g., French - France), it will show data inherited from the fallback language.

This is an unlocalized entry. This means that the entry still fetches data from its fallback language and that a separate localized entry has not yet been created in the selected language.

This inheritance continues until you localize the unlocalized entry.

**Additional Resource**: To learn how the localization logic works for published entries, refer to the [Retrieve Fallback Language Content for Published Entries](./about-fallback-languages.md#retrieve-fallback-language-content-for-published-entries) section.

You can browse through the following topics, mentioned in the “More Articles” section, to learn which actions you can perform on a localized entry.

## Common questions

### What is data inheritance in multilingual content?
Data inheritance is when an entry continues to inherit content from the fallback language until the entry is localized.

### What is an unlocalized entry?
An unlocalized entry is an entry that still fetches data from its fallback language and does not yet have a separate localized entry created in the selected language.

### When does inheritance stop?
Inheritance continues until you localize the unlocalized entry.

### Where can I learn about fallback language behavior for published entries?
Refer to the **Retrieve Fallback Language Content for Published Entries** section linked in the **Additional Resource** note.