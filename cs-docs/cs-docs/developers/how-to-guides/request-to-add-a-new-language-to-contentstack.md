---
title: "[How-to Guides and Knowledgebase articles] - Request to Add a New Language to Contentstack"
description: Request to add a new language to Contentstack and understand the details needed for language support.
url: https://www.contentstack.com/docs/developers/how-to-guides/request-to-add-a-new-language-to-contentstack
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [How-to Guides and Knowledgebase articles] - Request to Add a New Language to Contentstack

This page explains how to request that a new language be added to Contentstack’s supported languages list. It is intended for developers and Contentstack users managing multilingual stacks who need a language that is not currently available, and should be used when you cannot find the language you want in the existing supported languages list.

## Request to Add a New Language to Contentstack

**Note: **You don’t have to reach out to our support team any more to get a language added to our list of supported languages. You can [add custom languages](/docs/developers/multilingual-content/add-a-custom-language) of your choice to your stack in a click.

Contentstack supports [over 200 languages](/docs/developers/multilingual-content/list-of-supported-languages). However, if you don’t find the [language](/docs/developers/multilingual-content/about-languages) of your choice, you can request us to add it. Here’s how:

## Request for New Language

Contact our support team via the in-product chatbox or [email](mailto:support@contentstack.com) us to request for a new language.

## Provide Language Details

Our support team will ask you to provide the language and the country in which it is being used. Contentstack supports [country-specific languages](/docs/developers/multilingual-content/supported-languages#country-specific-languages) as well as [generic languages](/docs/developers/multilingual-content/supported-languages#generic-languages).

## Contentstack Adds the New Language

Contentstack's support team forwards the request to add a new language to the engineering team. The engineering team uses [ISO 639-2 Alpha-3 standard](http://www.loc.gov/standards/iso639-2/php/English_list.php) and  [ISO 3166-1 Alpha-2 country code](https://datahub.io/core/country-list) to get the corresponding language and country designators for the new language.

For country-specific languages, the [language code](/docs/developers/multilingual-content/supported-languages#language-code-format) comprises two designators (language and country), separated by a hyphen (-). For generic languages, the code contains just one designator (language).

The engineering team will [add the new language](/docs/developers/multilingual-content/add-a-language) to Contentstack's list of supported languages once the corresponding language code is verified and ready for use.

## Test and Verify the New Language

Once the new language has been added, we will notify you about it. You can add the new language to your stack and try localizing one of your entries in that specific language.

**Additional Resource**: Refer our [Add a Language guide](/docs/developers/multilingual-content/add-a-language) to learn how to add a language to your [stack](/docs/developers/set-up-stack/about-stack).

For any queries please get in touch with our [support team](mailto:support@contentstack.com).

## Common questions

### Do I still need to contact support to add a language?
**Note: **You don’t have to reach out to our support team any more to get a language added to our list of supported languages. You can [add custom languages](/docs/developers/multilingual-content/add-a-custom-language) of your choice to your stack in a click.

### What details will support ask for when requesting a new language?
Our support team will ask you to provide the language and the country in which it is being used.

### What standards are used to define language and country codes?
The engineering team uses [ISO 639-2 Alpha-3 standard](http://www.loc.gov/standards/iso639-2/php/English_list.php) and  [ISO 3166-1 Alpha-2 country code](https://datahub.io/core/country-list) to get the corresponding language and country designators for the new language.

### How can I verify the new language after it’s added?
Once the new language has been added, we will notify you about it. You can add the new language to your stack and try localizing one of your entries in that specific language.

Filename: how-to-guides-and-knowledgebase-articles-request-to-add-a-new-language-to-contentstack.md