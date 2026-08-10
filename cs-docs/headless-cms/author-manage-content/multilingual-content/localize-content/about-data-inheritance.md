---
title: "About Data Inheritance"
description: "About Data Inheritance"
url: /headless-cms/about-data-inheritance
---

# About Data Inheritance

## About Data Inheritance

Data inheritance is the continuous inheritance from the [Fallback language](/docs/headless-cms/about-fallback-languages/) until the entry is localized.

Let’s say you wish to create a multilingual site that serves content in several languages: English (United States), French (France), Spanish (Spain), and Japanese (Japan).If you have set English (United States) as the [master language](/docs/headless-cms/set-the-master-language/), you will need to add French, Spanish, and Japanese manually.

While [adding languages](/docs/headless-cms/add-a-language) to your [stack](/docs/headless-cms/about-stack/), you also need to specify the fallback language for each language that you add. Fallback language is the parent from which the given language [inherits data](/docs/headless-cms/about-data-inheritance/) from. By default, the fallback for each language is the master language. You can change this while adding languages to your stack.   

![data inheritance fallback_v4.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte321ad1428d1b629/63877c1f1da254109279d83d/data_inheritance_fallback_v4.jpg)

Let’s consider that you have created an [entry](/docs/headless-cms/about-entries) in the master language (i.e., English (United States) in our case). When you start [creating an entry](/docs/headless-cms/create-an-entry/) in any of the added languages (e.g., French - France), it will show data inherited from the fallback language.  
  
This is an unlocalized entry. This means that the entry still fetches data from its fallback language and that a separate localized entry has not yet been created in the selected language.  
  
This inheritance continues until you localize the unlocalized entry.

**Additional Resource:** To learn how the localization logic works for published entries, refer to the [Retrieve Fallback Language Content for Published Entries](/docs/headless-cms/about-fallback-languages#retrieve-fallback-language-content-for-published-entries) section.

You can browse through the following topics, mentioned in the “More Articles” section, to learn which actions you can perform on a localized entry.
