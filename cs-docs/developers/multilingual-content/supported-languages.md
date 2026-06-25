---
title: "[Set Up Your Project] - Supported Languages"
description: Supported languages in Contentstack multilingual content, including country-specific, area-specific, and generic languages, plus language code formats and standards.
url: https://www.contentstack.com/docs/headless-cms/supported-languages
product: Contentstack
doc_type: concept
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Supported Languages

This page explains the types of languages supported in Contentstack multilingual content, how language codes are formatted, and which standards are used. It is intended for developers and content teams setting up multilingual stacks and choosing or defining language codes.

## Supported Languages

Contentstack supports over 200 languages. Here's the complete [list of supported languages](./list-of-supported-languages.md).

**Additional Resource:** You can [add custom languages](./add-a-custom-language.md) of your choice to your stack. Once generated, you will be able to create and publish entries in the custom language.

These languages are either country-specific languages, area-specific languages, or generic languages. Let’s learn more about these three types of languages.

## Country-specific Languages

Country-specific languages are languages that are used in a country. A country can have multiple languages, and a language can be used in multiple countries. Hence, we support various combinations of countries and languages. Examples of country-specific languages include “English - United States,” “English - United Kingdom, ” “French - Canada,” “Spanish - Spain,” and “Spanish - Peru.”

## Area-Specific Languages

Area-specific languages are languages that are used in geographically supranational areas. A region can have multiple languages, and a language can have multiple regions.

With area-specific languages, you can create content that caters to a specific continent or a group of politically or economically influential countries (for example, all Latin American regions). An area code consists of a language code (for example, en) and a 3-digit number (for example, 419) that identifies a specific region.

Examples of area-specific languages include “English - Central America,” “English - Western Europe, ” “French - Northern Europe,” “Spanish - Latin America,” and “Spanish - South America.”

## Generic Languages

Generic languages are languages that are not tied to any country or region, such as “English,” “French,” “Spanish,” or “Chinese.”

With generic languages, you can create content that caters to broader regions or audiences (for example, all English-speaking visitors). Alternatively, you can use generic languages to create base content for similar languages, and then localize content as and when required for country-specific markets.

## Language Code Format

In Contentstack, each supported language is identified by a corresponding code:
- **Country-specific languages**: The code comprises two designators (language and country), separated by a hyphen (-)
- **Area-specific languages**: The code comprises two designators (language and area), separated by a hyphen (-)
- **Generic languages**: The code contains just one designator (language)

**Examples**

“en-us” for English - United States  
“fr-fr” for French - France  
“es-ar” for Spanish - Argentina  
“es-419” for Spanish - Latin America  
“en-155” for English - Western Europe  
“en” for English  

## Code Standards

For the language designator, Contenstack uses [ISO 639-1 Alpha-2 standard](http://www.loc.gov/standards/iso639-2/php/English_list.php).

For the country designator, Contentstack uses [ISO 3166-1 Alpha-2 country code](https://datahub.io/core/country-list).

For the area designator, Contentstack uses [UN M49 standard area code](https://en.wikipedia.org/wiki/UN_M49#Code_lists).

**Note**: If you do not want to follow the standard code formats, you can [create a custom language](./add-a-custom-language.md) of your choice and add it to your stack. Once generated, you will be able to create and publish entries in the custom language.

## Common questions

**How many languages does Contentstack support?**  
Contentstack supports over 200 languages.

**What is the difference between country-specific, area-specific, and generic languages?**  
Country-specific languages are tied to a country, area-specific languages are tied to a supranational region, and generic languages are not tied to any country or region.

**What format do language codes use in Contentstack?**  
Country-specific and area-specific language codes use two designators separated by a hyphen (-), while generic language codes use a single designator.

**Can I use a non-standard language code format?**  
Yes. If you do not want to follow the standard code formats, you can create a custom language and add it to your stack.