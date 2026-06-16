---
title: "[Set Up Your Project] - Set Fallback Language"
description: "How to set a fallback language for a language in a stack, including related API reference."
url: https://www.contentstack.com/docs/developers/multilingual-content/set-fallback-language
product: "Contentstack"
doc_type: "how-to"
audience:
  - developers
version: "current"
last_updated: 2026-03-26
---

# [Set Up Your Project] - Set Fallback Language

This page explains what a fallback language is and how to set it when adding languages to a stack. It is intended for developers configuring multilingual content and should be used when setting up language inheritance behavior or when looking for the related API request.

## Set Fallback Language

Fallback language is the parent language from which any given language inherits data.

When you [add a language](/docs/developers/multilingual-content/add-a-language) in the [stack](/docs/developers/set-up-stack/about-stack), you are prompted to set the fallback language.

**Note**: You can only set a language as the fallback language if that language is already added in your stack.

If you want to update the fallback language of an existing language, follow the steps mentioned in the [Update Fallback Language](/docs/developers/multilingual-content/update-fallback-language) article.

## API Reference

To set a fallback language for a language via API request, refer to the [Set a fallback language](/docs/developers/apis/content-management-api#set-a-fallback-language) API request.

## Common questions

### What is a fallback language?

Fallback language is the parent language from which any given language inherits data.

### When do I set the fallback language?

When you [add a language](/docs/developers/multilingual-content/add-a-language) in the [stack](/docs/developers/set-up-stack/about-stack), you are prompted to set the fallback language.

### Can I set any language as the fallback language?

**Note**: You can only set a language as the fallback language if that language is already added in your stack.

### How do I set a fallback language via API?

To set a fallback language for a language via API request, refer to the [Set a fallback language](/docs/developers/apis/content-management-api#set-a-fallback-language) API request.