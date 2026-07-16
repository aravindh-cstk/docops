---
title: "[Set Up Your Project] - Limitations of Localization"
description: Limitations applied while using fallback language in multilingual content.
url: https://www.contentstack.com/docs/headless-cms/limitations-of-localization
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Limitations of Localization

This page explains the limitations applied while using fallback language for multilingual content in Contentstack. It is intended for developers configuring localization in a stack and should be used when setting up or validating fallback language behavior.

## Limitations of Localization

There are certain limitations that we have applied while using fallback language. Let’s understand what they are:
- Contentstack allows only one level of data inheritance for fallback languages. You cannot add a fallback language (other than the master language) for the language that is already set as a fallback for another language.
- You can only select one of the languages added to your stack as a fallback language.

## Common questions

### Can I set multiple fallback languages for a single language?
No. You can only select one of the languages added to your stack as a fallback language.

### Can a fallback language itself have another fallback language?
No. Contentstack allows only one level of data inheritance for fallback languages.

### Can I choose a fallback language that is not added to my stack?
No. You can only select one of the languages added to your stack as a fallback language.