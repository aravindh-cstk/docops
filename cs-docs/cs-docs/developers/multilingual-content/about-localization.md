---
title: "[Set Up Your Project] - About Localization"
description: About Localization in multilingual content, including how localization breaks inheritance from fallback language and creates an independent entry.
url: https://www.contentstack.com/docs/developers/multilingual-content/about-localization
product: Multilingual Content
doc_type: concept
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - About Localization

This page explains what localization means in a multilingual content setup, how it affects entry inheritance and independence, and when you might localize or unlocalize an entry. It is intended for developers and content managers working with entries across fallback and child languages.

## About Localization

Localization is the process of making the content local. This means that the inheritance of the entry is broken from the fallback language and it, therefore, becomes independent.

We know that unlocalized entries fetch data from its [fallback language](/docs/developers/multilingual-content/about-fallback-languages). You can then translate the content or make the necessary changes and localize it. To localize an [entry](/docs/content-managers/author-content/about-entries), you need to save the unlocalized entry[/docs/developers/multilingual-content/localize-an-entry](/docs/developers/multilingual-content/localize-an-entry).

**Additional resources: **You can refer to our documentation on [how to localize an entry](/docs/developers/multilingual-content/localize-an-entry).

As shown in the following diagram, localizing an entry will cause the inheritance present between the master, fallback, and child entries to break, and an independent copy of the localized entry is created that will possess the same format of the master entry or fallback entry, but with different content.

This localized entry is now a separate entity altogether. It will have its own versioning system and publishing queue status.

Once an entry has been localized, you can [unlocalize](/docs/developers/multilingual-content/unlocalize-an-entry) it again anytime.

To understand more about Localization, you can refer to the various documentations mentioned in our “More Articles” section

## Common questions

### What happens to inheritance when an entry is localized?
Localization breaks the inheritance of the entry from the fallback language, making the entry independent.

### Does a localized entry have its own versioning and publishing status?
Yes. This localized entry is now a separate entity altogether. It will have its own versioning system and publishing queue status.

### Can I reverse localization after localizing an entry?
Yes. Once an entry has been localized, you can [unlocalize](/docs/developers/multilingual-content/unlocalize-an-entry) it again anytime.

### Where can I find steps to localize an entry?
You can refer to the documentation on [how to localize an entry](/docs/developers/multilingual-content/localize-an-entry).