---
title: "[Set Up Your Project] - How Languages Work in Contentstack"
description: How languages work in Contentstack for multilingual content, including inheritance from fallback languages until localized.
url: https://www.contentstack.com/docs/headless-cms/how-languages-work-in-contentstack
product: Contentstack
doc_type: concept
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - How Languages Work in Contentstack

This page explains how multilingual languages behave in Contentstack, including how entries inherit from a fallback language until localized. It is intended for developers setting up or working with multilingual content models and should be used when planning language configuration and localization workflows.

## How Languages Work in Contentstack

Contentstack offers multilingual support, which allows you to create entries in any language of your choice. When creating entries in other languages, they inherit data initially from the [fallback language](/docs/developers/multilingual-content/about-fallback-languages) until they are localized.

Therefore, in order to understand how languages work in Contentstack, you will need to first understand [data inheritance](/docs/developers/multilingual-content/about-data-inheritance), [fallback languages](/docs/developers/multilingual-content/about-fallback-languages), and [localization](/docs/developers/multilingual-content/about-localization).

## Common questions

### What happens when I create an entry in another language?

When creating entries in other languages, they inherit data initially from the [fallback language](/docs/developers/multilingual-content/about-fallback-languages) until they are localized.

### What should I learn first to understand languages in Contentstack?

You will need to first understand [data inheritance](/docs/developers/multilingual-content/about-data-inheritance), [fallback languages](/docs/developers/multilingual-content/about-fallback-languages), and [localization](/docs/developers/multilingual-content/about-localization).

### What is the fallback language used for?

It is the language from which entries in other languages inherit data initially until they are localized.